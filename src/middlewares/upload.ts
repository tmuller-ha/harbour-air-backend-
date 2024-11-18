const path = require("path");
const fs = require("fs").promises;
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

      // Function to convert images to WebP format
      const convertImageToWebP = async (file) => {
        if (
          file.mimetype.startsWith("image/") &&
          !file.mimetype.includes("webp") &&
          !file.mimetype.includes("gif")
        ) {
          try {
            const outputName = `${path.basename(
              file.originalFilename,
              path.extname(file.originalFilename)
            )}.webp`;

            console.log("1. Converting Image");

            const image = await Jimp.read(file.filepath);
            console.log("2. Image Loaded");

            // Adjust image quality using Jimp
            await image.quality(80).writeAsync(file.filepath);
            console.log("3. Image Quality Adjusted");

            // Convert image to WebP format using webp-converter, outputting to the same path
            const outputPath = file.filepath;
            await webp.cwebp(file.filepath, outputPath, "-q 80");
            console.log("4. Image Converted to WebP");

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
