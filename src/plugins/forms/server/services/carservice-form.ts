import { factories, Strapi } from "@strapi/strapi";

export default factories.createCoreService(
  "plugin::forms.carservice-form",
  ({ strapi }: { strapi: Strapi }) => ({
    async getAll(query) {
      const { start, limit, sortBy, sortOrder } = query;
      const paginatedData = await strapi.entityService?.findMany(
        "plugin::forms.carservice-form",
        {
          start: start,
          limit: limit,
          sort: `${sortBy}:${sortOrder}`,
        }
      );
      console.log("paginated", paginatedData);

      const totalData = await strapi.entityService?.findMany(
        "plugin::forms.carservice-form"
      );
      console.log("total", totalData);

      return { paginatedData, totalDataCount: totalData?.length };
    },
    async getOne(id) {
      return await strapi.entityService?.findOne(
        "plugin::forms.carservice-form",
        id
      );
    },
    async delete(id) {
      return await strapi.entityService?.delete(
        "plugin::forms.carservice-form",
        id
      );
    },
    async update(id, data) {
      return await strapi.entityService?.update(
        "plugin::forms.carservice-form",
        id,
        { data }
      );
    },
    async create(data) {
      return await strapi.entityService?.create(
        "plugin::forms.carservice-form",
        { data }
      );
    },
  })
);
