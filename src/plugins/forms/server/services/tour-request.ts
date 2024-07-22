import { factories, Strapi } from '@strapi/strapi'; 

export default factories.createCoreService('plugin::forms.tour-request', 
 ({ strapi }: { strapi: Strapi }) => ({
  async getAllEntries(query) {
    const {start, limit} = query;
    const data = await strapi.entityService?.findMany('plugin::forms.tour-request', {
      start: start,
      limit: limit,
    });
    const totalData = await strapi.entityService?.findMany('plugin::forms.tour-request');
    return {data, total: totalData?.length};
  },
  async getOne(id) {
    return await strapi.entityService?.findOne('plugin::forms.tour-request', id);
  },
  async delete(id) {
    return await strapi.entityService?.delete('plugin::forms.tour-request', id);
  },
  async update(id, data) {
    return await strapi.entityService?.update('plugin::forms.tour-request', id, data);
  },
  async create(data) {
    return await strapi.entityService?.create('plugin::forms.tour-request', data);
  }
})
);