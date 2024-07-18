import { factories, Strapi } from '@strapi/strapi'; 

export default factories.createCoreService('plugin::forms.tour-request', 
 ({ strapi }: { strapi: Strapi }) => ({
  async getAllEntries() {
    console.log('*********IN SERVICE*************');
    return await strapi.entityService?.findMany('plugin::forms.tour-request');
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