import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async findAll(ctx) {
    const { start, limit } = ctx?.query;
    try {
      const totalData = await strapi
        .query("plugin::web-deployment.deployment")
        .findMany();

      const data = await strapi
        .query("plugin::web-deployment.deployment")
        .findMany({
          offset: start,
          limit,
        });

      ctx.body = { data, totalCount: totalData.length };
    } catch (error) {
      console.log("error", error);
      ctx.badRequest("Something Went Wrong", error);
    }
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
