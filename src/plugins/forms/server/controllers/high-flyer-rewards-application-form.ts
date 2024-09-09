import { factories, Strapi } from "@strapi/strapi";
import highFlyerRewardsApplicationTemplate from "./email-templates/high-flyer-rewards-application-form";
import { pick } from "lodash";

export default factories.createCoreController(
  "plugin::forms.high-flyer-rewards-application-form",
  ({ strapi }: { strapi: Strapi }) => ({
    async findAll(ctx) {
      try {
        return await strapi
          .plugin("forms")
          .service("highFlyerRewardsApplicationForm")
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
          .service("highFlyerRewardsApplicationForm")
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
          .service("highFlyerRewardsApplicationForm")
          .delete(id);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async update(ctx) {
      try {
        return await strapi
          .plugin("forms")
          .service("highFlyerRewardsApplicationForm")
          .update(ctx.params.id, ctx.request.body);
      } catch (error) {
        ctx.throw(500, error);
      }
    },
    async create(ctx) {
      try {
        const body = ctx.request.body as any;
        const highFlyerRewardsApplicationRequest = await strapi
          .plugin("forms")
          .service("highFlyerRewardsApplicationForm")
          .create(ctx.request.body);
        await strapi.plugins["email"].services.email.sendTemplatedEmail(
          {
            to: process.env.DEFAULT_REPLY_TO_EMAIL,
            /** Currently we don't have production access for ses 
                  so setting default to email for emails
                  once production access is added we need to update with body.email 
                */
          },
          highFlyerRewardsApplicationTemplate,
          {
            user: pick(body, ["email"]),
          }
        );
        return highFlyerRewardsApplicationRequest;
      } catch (error) {
        ctx.throw(500, error);
      }
    },
  })
);
