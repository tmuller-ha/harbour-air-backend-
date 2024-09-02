import { factories, Strapi } from "@strapi/strapi";

export default factories.createCoreService(
  "plugin::forms.on-account-ticket",
  () => ({
    async getAllEntries(query) {
      const { start, limit, sortBy, sortOrder } = query;
      const paginatedData = await strapi.entityService?.findMany(
        "plugin::forms.on-account-ticket",
        {
          start: start,
          limit: limit,
          sort: `${sortBy}:${sortOrder}`,
        }
      );
      const totalData = await strapi.entityService?.findMany(
        "plugin::forms.on-account-ticket"
      );
      return { paginatedData, totalDataCount: totalData?.length };
    },
    async getOne(id) {
      return await strapi.entityService?.findOne(
        "plugin::forms.on-account-ticket",
        id
      );
    },
    async delete(id) {
      return await strapi.entityService?.delete(
        "plugin::forms.on-account-ticket",
        id
      );
    },
    async update(id, data) {
      return await strapi.entityService?.update(
        "plugin::forms.on-account-ticket",
        id,
        { data }
      );
    },
    async create(data) {
      return await strapi.entityService?.create(
        "plugin::forms.on-account-ticket",
        { data }
      );
    },
  })
);
