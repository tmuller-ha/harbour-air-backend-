import { factories, Strapi } from "@strapi/strapi";
import groupBookingsFormRequestTemplate from "./email-templates/group-bookings-form";
import { pick } from "lodash";

export default factories.createCoreController(
  "plugin::forms.group-bookings-form",
  ({ strapi }: { strapi: Strapi }) => ({
    async findAll(ctx) {
      try {
        return await strapi
          .plugin("forms")
          .service("groupBookingsForm")
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
          .service("groupBookingsForm")
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
          .service("groupBookingsForm")
          .delete(id);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async update(ctx) {
      try {
        return await strapi
          .plugin("forms")
          .service("groupBookingsForm")
          .update(ctx.params.id, ctx.request.body);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async create(ctx) {
      try {
        const body = ctx.request.body as any;
        const discountedTravelRequest = await strapi
          .plugin("forms")
          .service("groupBookingsForm")
          .create(ctx.request.body);
        await strapi.plugins["email"].services.email.sendTemplatedEmail(
          {
            to: process.env.DEFAULT_REPLY_TO_EMAIL,
            /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                    */
          },
          groupBookingsFormRequestTemplate,
          {
            user: pick(body, ["email"]),
          }
        );
        return discountedTravelRequest;
      } catch (error) {
        ctx.throw(500, error);
      }
    },
  })
);
