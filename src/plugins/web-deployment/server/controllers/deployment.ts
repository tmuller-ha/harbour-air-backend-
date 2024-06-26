import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async findAll(ctx) {
    ctx.body = await strapi
      .plugin("web-deployment")
      .service("deployment")
      .findAll();
  },

  async create(ctx) {
    ctx.body = await strapi
      .plugin("web-deployment")
      .service("deployment")
      .create(ctx.request.body);
  },

  async update(ctx) {
    ctx.body = await strapi
      .plugin("web-deployment")
      .service("deployment")
      .update(ctx.request.body);
  },
});
