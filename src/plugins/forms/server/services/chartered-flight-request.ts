import { factories, Strapi } from "@strapi/strapi";

export default factories.createCoreService(
  "plugin::forms.chartered-flight-request",
  ({ strapi }: { strapi: Strapi }) => ({
    async getAll(query) {
      const { start, limit, sortBy, sortOrder } = query;
      const paginatedData = await strapi.entityService?.findMany(
        "plugin::forms.chartered-flight-request",
        {
          start: start,
          limit: limit,
          sort: `${sortBy}:${sortOrder}`,
        }
      );
      const totalData = await strapi.entityService?.findMany(
        "plugin::forms.chartered-flight-request"
      );
      return { paginatedData, totalDataCount: totalData?.length };
    },
    async getOne(id) {
      return await strapi.entityService?.findOne(
        "plugin::forms.chartered-flight-request",
        id
      );
    },
    async delete(id) {
      return await strapi.entityService?.delete(
        "plugin::forms.chartered-flight-request",
        id
      );
    },
    async update(id, data) {
      return await strapi.entityService?.update(
        "plugin::forms.chartered-flight-request",
        id,
        {data}
      );
    },
    async create(data) {
      return await strapi.entityService?.create(
        "plugin::forms.chartered-flight-request",
        {data}
      );
    },
  })
);
