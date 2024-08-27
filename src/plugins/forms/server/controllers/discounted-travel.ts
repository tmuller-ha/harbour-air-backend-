import { factories, Strapi } from "@strapi/strapi";

export default factories.createCoreController(
  "plugin::forms.discounted-travel",
  ({ strapi }: { strapi: Strapi }) => ({
    async findAll(ctx) {
      try {
        return await strapi
          .plugin("forms")
          .service("discountedTravelForm")
          .getAllEntries(ctx.query);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async findOne(ctx) {
      try {
        const { id } = ctx.params;
        return await strapi
          .plugin("forms")
          .service("discountedTravelForm")
          .getOne(id);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async remove(ctx) {
      try {
        const { id } = ctx.params;
        return await strapi.plugin("forms").service("discountedTravelForm").delete(id);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async update(ctx) {
      try {
        return await strapi.plugin("forms").service("discountedTravelForm").update(ctx.params.id, ctx.request.body);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async create(ctx) {
      try {
        return await strapi.plugin("forms").service("discountedTravelForm").create(ctx.request.body);
      } catch (error) {
        ctx.throw(500, error);
      }
    }
  })
);
