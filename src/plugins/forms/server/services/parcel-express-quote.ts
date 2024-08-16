import { factories, Strapi } from '@strapi/strapi';

export default factories.createCoreService('plugin::forms.parcel-express-quote',
    ({strapi}: {strapi : Strapi}) => ({
        async getAll(query) {
            const { start, limit, sortBy, sortOrder } = query;
            const paginatedData = await strapi.entityService?.findMany(
              "plugin::forms.parcel-express-quote",
              {
                start: start,
                limit: limit,
                sort: `${sortBy}:${sortOrder}`,
              }
            );
            const totalData = await strapi.entityService?.findMany(
              "plugin::forms.parcel-express-quote"
            );
            return { paginatedData, totalDataCount: totalData?.length };
        },
        async getOne(id) {
            return await strapi?.entityService?.findOne('plugin::forms.parcel-express-quote', id);
        },
        async create(data) {
            return await strapi?.entityService?.create('plugin::forms.parcel-express-quote', {data});
        },
        async update(id, data) {
            return await strapi?.entityService?.update('plugin::forms.parcel-express-quote', id, {data});
        },
        async delete(id) {
            return await strapi?.entityService?.delete('plugin::forms.parcel-express-quote', id);
        },
    })
);
