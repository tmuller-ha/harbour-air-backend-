const path = require("path");
const fs = require("fs").promises;
const os = require("os");
const webp = require("webp-converter");

module.exports = (config, { strapi }) => {
  return async (context, next) => {
    if (
      context.request.method === "POST" &&
      context.request.url.startsWith("/upload")
    ) {
      webp.grant_permission();
      // Function to convert images to WebP format
      const convertImageToWebP = async (file) => {
        if (file.type.startsWith("image/")) {
          try {
            const outputName = `${path.basename(
              file.name,
              path.extname(file.name)
            )}.webp`;
            const outputDir = os.tmpdir(); // Use OS-specific temporary directory
            const outputPath = path.join(outputDir, outputName);

            // Convert image to WebP format using imagemagick
            const result = webp.cwebp(file.path, outputPath, "-q 80");
            result.then((response) => {
              console.log(response);
            });

            // Delete the original file
            setTimeout(async () => {
              await fs.unlink(file.path);
            }, 1000);

            // Update file properties
            context.request.body.fileInfo = { name: outputName };
            file.path = outputPath;
            file.name = outputName;
            file.type = "image/webp";
          } catch (error) {
            console.error("Error converting image to WebP", error);
            throw error; // Re-throw the error to ensure it gets logged properly
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
