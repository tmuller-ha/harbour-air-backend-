import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async findAll() {
    return await strapi.query("plugin::web-deployment.deployment").findMany();
  },

  async create(data: any) {
    return await strapi.query("plugin::web-deployment.deployment").create({
      data: data,
    });
  },

  async update(data: any) {
    return await strapi.query("plugin::web-deployment.deployment").update({
      where: { id: data.id },
      data: data,
    });
  },
});
