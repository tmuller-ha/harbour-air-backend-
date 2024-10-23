const path = require("path");
const fs = require("fs").promises;
const fsSync = require("fs"); // Synchronous version for folder creation
const webp = require("webp-converter");
const Jimp = require("jimp");

module.exports = (config, { strapi }) => {
  return async (context, next) => {
    if (
      context.request.method === "POST" &&
      context.request.url.startsWith("/upload")
    ) {
      console.log("context.request.files", context.request.files);
      webp.grant_permission();

      // Create a temp folder in the base directory
      const baseDir = process.cwd(); // Base directory
      const tempDir = path.join(baseDir, "temp");

      // Ensure the temp folder exists
      if (!fsSync.existsSync(tempDir)) {
        fsSync.mkdirSync(tempDir);
      }

      // Function to convert images to WebP format
      const convertImageToWebP = async (file) => {
        if (
          file.mimetype.startsWith("image/") &&
          !file.mimetype.includes("webp")
        ) {
          try {
            const outputName = `${path.basename(
              file.originalFilename,
              path.extname(file.originalFilename)
            )}.webp`;
            const outputPath = path.join(tempDir, outputName); // Save in the temp folder
            const image = await Jimp.read(file.filepath);
            await image.quality(80).writeAsync(file.filepath);

            // Convert image to WebP format using webp-converter
            await webp.cwebp(file.filepath, outputPath, "-q 80");

            await fs.copyFile(outputPath, file.filepath);
            // Delete the converted WebP file from temp folder
            await fs.unlink(outputPath);

            // Update file properties
            const fileInfo = JSON.parse(context.request.body.fileInfo);
            context.request.body.fileInfo = {
              ...fileInfo,
              name: outputName,
            };
            file.originalFilename = outputName;
            file.mimetype = "image/webp";
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
