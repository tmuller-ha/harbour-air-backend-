import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::parts-sale.parts-sale",
  ({ strapi }) => ({
    async bulkUpload(ctx) {
      const { data } = ctx.request.body;

      if (!Array.isArray(data) || data.length === 0) {
        return ctx.badRequest("No data received");
      }

      try {
        // Step 1: Find all existing documents
        const existingDocs = await strapi
          .documents("api::parts-sale.parts-sale")
          .findMany();

        console.log("Existing documents:", existingDocs);

        // Step 2: Delete all existing documents
        await Promise.all(
          existingDocs.map((doc) =>
            strapi.documents("api::parts-sale.parts-sale").delete({
              documentId: doc.documentId,
            })
          )
        );

        // Step 3: Create new documents
        const createdDocs = await Promise.all(
          data.map(async (item) => {
            const createdData = await strapi
              .documents("api::parts-sale.parts-sale")
              .create({
                data: { ...item, publishedAt: new Date() },
              });

            const publishedData = await strapi
              .documents("api::parts-sale.parts-sale")
              .publish({
                documentId: createdData.documentId,
              });

            return publishedData;
          })
        );

        ctx.send({
          message: "Bulk upload successful",
          count: createdDocs.length,
        });
      } catch (err) {
        console.error("Bulk upload error:", err);
        ctx.internalServerError("Failed to upload data");
      }
    },
  })
);
