import { factories, Strapi } from "@strapi/strapi";

export default factories.createCoreService(
  "plugin::forms.high-flyer-rewards-application-form",
  ({ strapi }: { strapi: Strapi }) => ({
    async getAllEntries(query) {
      const { start, limit, sortBy, sortOrder } = query;
      const paginatedData = await strapi.entityService?.findMany(
        "plugin::forms.high-flyer-rewards-application-form",
        {
          start: start,
          limit: limit,
          sort: `${sortBy}:${sortOrder}`,
        }
      );
      const totalData = await strapi.entityService?.findMany(
        "plugin::forms.high-flyer-rewards-application-form"
      );
      return { paginatedData, totalDataCount: totalData?.length };
    },
    async getOne(id) {
      return await strapi.entityService?.findOne(
        "plugin::forms.high-flyer-rewards-application-form",
        id
      );
    },
    async delete(id) {
      return await strapi.entityService?.delete(
        "plugin::forms.high-flyer-rewards-application-form",
        id
      );
    },
    async update(id, data) {
      return await strapi.entityService?.update(
        "plugin::forms.high-flyer-rewards-application-form",
        id,
        { data }
      );
    },
    async create(data) {
      return await strapi.entityService?.create(
        "plugin::forms.high-flyer-rewards-application-form",
        { data }
      );
    },
  })
);
