import { factories, Strapi } from "@strapi/strapi";
import { pick } from "lodash";
import carServiceFormRequestTemplate from "./email-templates/carservice-form";

export default factories.createCoreController(
  "plugin::forms.carservice-form",
  ({ strapi }: { strapi: Strapi }) => ({
    async findAll(ctx) {
      try {
        return await strapi
          .plugin("forms")
          .service("carserviceForm")
          .getAll(ctx.query);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async findOne(ctx) {
      try {
        const { id } = ctx.params;
        return await strapi
          .plugin("forms")
          .service("carserviceForm")
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
          .service("carserviceForm")
          .delete(id);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async update(ctx) {
      try {
        return await strapi
          .plugin("forms")
          .service("carserviceForm")
          .update(ctx.params.id, ctx.request.body);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async create(ctx) {
      try {
        const body = ctx.request.body as any;
        const carserviceFormRequest = await strapi
          .plugin("forms")
          .service("carserviceForm")
          .create(ctx.request.body);
        await strapi.plugins["email"].services.email.sendTemplatedEmail(
          {
            to: process.env.DEFAULT_REPLY_TO_EMAIL,
            /** Currently we don't have production access for ses 
                          so setting default to email for emails
                          once production access is added we need to update with body.email 
                        */
          },
          carServiceFormRequestTemplate,
          {
            user: pick(body, ["email"]),
          }
        );
        return carserviceFormRequest;
      } catch (error) {
        ctx.throw(500, error);
      }
    },
  })
);
