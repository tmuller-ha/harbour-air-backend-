const sharp = require("sharp"); // For image conversion
const path = require("path"); // For file path manipulation

module.exports = (config: any, { strapi }: any) => {
  return async (context: any, next: any) => {
    if (
      context.request.method === "POST" &&
      context.request.url === "/upload"
    ) {
      // Function to convert images to WebP format
      const convertImagesToWebP = async (file) => {
        if (file.type.startsWith("image/")) {
          try {
            const outputName = file.name.split(".")[0] + ".webp";
            const outputPath = path.join("/tmp", outputName);
            context.request.body.fileInfo = { name: outputName };
            await sharp(file.path).webp().toFile(outputPath);
            // Update file properties
            file.path = outputPath;
            file.name = outputName;
            file.type = "image/webp";
          } catch (error) {
            console.error("Error converting image to WebP", error);
          }
        }
      };

      // Convert images and handle next middleware
      try {
        if (context.request?.files?.files) {
          await convertImagesToWebP(context.request.files.files);
        }
        await next();
      } catch (error) {
        console.error("Error converting images or videos", error);
      }
    } else {
      await next();
    }
  };
};
