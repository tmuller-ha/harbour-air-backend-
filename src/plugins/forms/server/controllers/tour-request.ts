import { Strapi, factories } from "@strapi/strapi";
import { pick } from "lodash";
import tourRequestTemplate from "./email-templates/tour-request";

export default factories.createCoreController(
  "plugin::forms.tour-request",
  ({ strapi }: { strapi: Strapi }) => ({
    async findAll(ctx) {
      try {
        const results = await strapi
          .plugin("forms")
          .service("tourRequest")
          .getAllEntries(ctx.query);
        return results;
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async findOne(ctx) {
      try {
        const { id } = ctx.params;
        return await strapi.plugin("forms").service("tourRequest").getOne(id);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async remove(ctx) {
      try {
        const { id } = ctx.params;
        return await strapi.plugin("forms").service("tourRequest").delete(id);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async update(ctx) {
      try {
        return await strapi
          .plugin("forms")
          .service("tourRequest")
          .update(ctx.params.id, ctx.request.body);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async create(ctx) {
      try {
        const body = ctx.request.body as any;
        const tourRequest = await strapi
          .plugin("forms")
          .service("tourRequest")
          .create(ctx.request.body);
        await strapi.plugins["email"].services.email.sendTemplatedEmail(
          {
            to: process.env.DEFAULT_REPLY_TO_EMAIL,
            /** Currently we don't have production access for ses 
                so setting default to email for emails
                once production access is added we need to update with body.email 
              */
          },
          tourRequestTemplate,
          {
            user: pick(body, ["email"]),
          }
        );

        return tourRequest;
      } catch (error) {
        ctx.throw(500, error);
      }
    },
  })
);
