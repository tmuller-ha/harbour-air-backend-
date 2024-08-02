import { factories, Strapi } from '@strapi/strapi';

export default factories.createCoreService('plugin::forms.contact-form',
    ({ strapi }: { strapi: Strapi }) => ({
      async getAllEntries(query) {
        const { start, limit, sortBy, sortOrder } = query;
        const paginatedData = await strapi.entityService?.findMany(
          "plugin::forms.contact-form",
          {
            start: start,
            limit: limit,
            sort: `${sortBy}:${sortOrder}`,
          }
        );
        const totalData = await strapi.entityService?.findMany(
          "plugin::forms.contact-form"
        );
        return { paginatedData, totalDataCount: totalData?.length };
      },
      async getOne(id) {
        return await strapi.entityService?.findOne(
          "plugin::forms.contact-form",
          id
        );
      },
      async delete(id) {
        return await strapi.entityService?.delete(
          "plugin::forms.contact-form",
          id
        );
      },
      async update(id, data) {
        return await strapi.entityService?.update(
          "plugin::forms.contact-form",
          id,
          {data}
        );
      },
      async create(data) {
        return await strapi.entityService?.create(
          "plugin::forms.contact-form",
          {data}
        );
      },
    }));
