import { factories, Strapi } from "@strapi/strapi";
import { pick } from "lodash";
import turbobucksOrderTemplate from "./email-templates/turbobucks-order-form";

export default factories.createCoreController(
  "plugin::forms.turbobucks-order-form",
  ({ strapi }: { strapi: Strapi }) => ({
    async findAll(ctx) {
      try {
        return await strapi
          .plugin("forms")
          .service("turbobucksOrderForm")
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
          .service("turbobucksOrderForm")
          .getOne(id);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async remove(ctx) {
      try {
        const { id } = ctx.params;
        return await strapi
          .plugin("forms")
          .service("turbobucksOrderForm")
          .delete(id);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async update(ctx) {
      try {
        return await strapi
          .plugin("forms")
          .service("turbobucksOrderForm")
          .update(ctx.params.id, ctx.request.body);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async create(ctx) {
      try {
        const body = ctx.request.body as any;
        const turbobucksOrderRequest = await strapi
          .plugin("forms")
          .service("turbobucksOrderForm")
          .create(ctx.request.body);
        await strapi.plugins["email"].services.email.sendTemplatedEmail(
          {
            to: process.env.DEFAULT_REPLY_TO_EMAIL,
            /** Currently we don't have production access for ses 
                so setting default to email for emails
                once production access is added we need to update with body.email 
              */
          },
          turbobucksOrderTemplate,
          {
            user: pick(body, ["contactEmail"]),
          }
        );
        return turbobucksOrderRequest;
      } catch (error) {
        ctx.throw(500, error);
      }
    },
  })
);
