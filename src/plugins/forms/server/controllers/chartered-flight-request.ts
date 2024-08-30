import { Strapi, factories } from "@strapi/strapi";
import charteredFlightRequestTemplate from "./email-templates/chartered-flight-request";
import {pick} from "lodash";

export default factories.createCoreController("plugin::forms.chartered-flight-request", 
    ({strapi}: {strapi: Strapi}) => ({
        async findAll(ctx) {
            try {
                return await strapi.plugin('forms').service('charteredFlightRequest').getAll(ctx.query);
            } catch (error) {
                ctx.throw(500, error);
            }
        },
        async findOne(ctx) {
            try {
                const { id } = ctx.params;
                return await strapi.plugin('forms').service('charteredFlightRequest').getOne(id);
            } catch (error) {
                ctx.throw(500, error);
            }
        },
        async remove(ctx) {
            try {
                const { id } = ctx.params;
                return await strapi.plugin('forms').service('charteredFlightRequest').delete(id);
            } catch (error) {
                ctx.throw(500, error);
            }
        },
        async update(ctx) {
            try {
                return await strapi.plugin('forms').service('charteredFlightRequest').update(ctx.params.id, ctx.request.body);
            } catch (error) {
                ctx.throw(500, error);
            }
        },
        async create(ctx) {
            try {
                const body = ctx.request.body as any;
                const charteredFlightRequest =  await strapi.plugin('forms').service('charteredFlightRequest').create(ctx.request.body);
                await strapi.plugins["email"].services.email.sendTemplatedEmail(
                    {
                      to: process.env.DEFAULT_REPLY_TO_EMAIL,
                      /** Currently we don't have production access for ses 
                          so setting default to email for emails
                          once production access is added we need to update with body.email 
                        */
                    },
                    charteredFlightRequestTemplate,
                    {
                      user: pick(body, ["email"]),
                    }
                  );
                  return charteredFlightRequest;
            } catch (error) {
                ctx.throw(500, error);
            }
            
        }
    })
)