import { factories, Strapi } from "@strapi/strapi";
import parcelExpressQuoteTemplate from "./email-templates/parcel-express-quote";
import { pick } from "lodash";

export default factories.createCoreController(
  "plugin::forms.parcel-express-quote",
  ({ strapi }: { strapi: Strapi }) => ({
    async findAll(ctx) {
      try {
        return await strapi
          .plugin("forms")
          .service("parcelExpressQuote")
          .getAll(ctx.query);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async findOne(ctx) {
      const { id } = ctx.params;
      try {
        return await strapi
          .plugin("forms")
          .service("parcelExpressQuote")
          .getOne(id);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async create(ctx) {
      try {
        const body = ctx.request.body as any;
        const parcelExpressQuote = await strapi
          .plugin("forms")
          .service("parcelExpressQuote")
          .create(ctx.request.body);
        await strapi.plugins["email"].services.email.sendTemplatedEmail(
          {
            to: process.env.DEFAULT_REPLY_TO_EMAIL,
            /** Currently we don't have production access for ses 
                          so setting default to email for emails
                          once production access is added we need to update with body.email 
                        */
          },
          parcelExpressQuoteTemplate,
          {
            user: pick(body, ["email"]),
          }
        );
        return parcelExpressQuote;
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async update(ctx) {
      try {
        return await strapi
          .plugin("forms")
          .service("parcelExpressQuote")
          .update(ctx.params.id, ctx.request.body);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async remove(ctx) {
      const { id } = ctx.params;
      try {
        return await strapi
          .plugin("forms")
          .service("parcelExpressQuote")
          .delete(id);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
  })
);
