import axios from "axios";
import fs from "fs";

const path = require("path");
const image_handler_url = process.env.IMAGE_HANDLER_URL;
module.exports = (config, { strapi }) => {
  return async (context, next) => {
    if (
      context.request.method === "POST" &&
      context.request.url.startsWith("/upload")
    ) {
      const rawImagesFolderName = process.env.RAW_IMAGES_FOLDER_NAME;
      const folders = await strapi.entityService.findMany(
        "plugin::upload.folder",
        {
          filters: { name: rawImagesFolderName },
          limit: 1,
        }
      );

      console.log("Folders found:", folders);
      console.log("Raw images folder name:", rawImagesFolderName);

      const fileInfo = JSON.parse(context.request.body?.fileInfo || "{}");
      const folder = fileInfo.folder;
      console.log("folder:", folder);

      const shouldSkipConversion = folders[0]?.id === folder;

      console.log("Should skip conversion:", shouldSkipConversion);

      const convertImageToWebP = async (file) => {
        if (
          file.mimetype.startsWith("image/") &&
          !file.mimetype.includes("webp") &&
          !file.mimetype.includes("gif") &&
          !shouldSkipConversion
        ) {
          try {
            const outputName = `${path.basename(
              file.originalFilename,
              path.extname(file.originalFilename)
            )}.webp`;

            const outputPath = file.filepath;

            const result = await convertToWebP(outputPath, image_handler_url);

            if (result?.success) {
              const fileInfo = JSON.parse(context.request.body.fileInfo);
              context.request.body.fileInfo = {
                ...fileInfo,
                name: outputName,
              };
              file.originalFilename = outputName;
              file.mimetype = "image/webp";
            }
            /**
             * Uncomment the following block to throw an error if the image conversion fails
             */
            // if (!result?.success) {
            //   context.throw(500, "Error processing upload");
            // }
          } catch (error) {
            console.error("Error converting image to WebP", error);
            context.throw(500, "Error processing upload");
          }
        }
      };

      // Convert images and handle next middleware
      try {
        if (context.request.files && context.request.files.files) {
          const files = context.request.files.files;
          if (Array.isArray(files)) {
            await Promise.all(files.map(convertImageToWebP));
          } else {
            await convertImageToWebP(files);
          }
        }
        await next();
      } catch (error) {
        console.error("Error processing upload", error);
        context.throw(500, "Error processing upload");
      }
    } else {
      await next();
    }
  };
};

const convertToWebP = async (filePath, apiUrl) => {
  try {
    const imageBuffer = fs.readFileSync(filePath);
    const base64Image = imageBuffer.toString("base64");
    const response = await axios.post(
      apiUrl,
      { file: base64Image },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Image successfully converted and saved as converted.webp");
    const base64OutputFile = response.data;
    const buffer = Buffer.from(base64OutputFile, "base64");
    fs.writeFileSync(filePath + "test", buffer);
    fs.writeFileSync(filePath, buffer);
    return { success: true };
  } catch (error) {
    console.error(
      "Error consuming the API:",
      error.response ? error.response.data : error.message
    );
    return { success: false };
  }
};
