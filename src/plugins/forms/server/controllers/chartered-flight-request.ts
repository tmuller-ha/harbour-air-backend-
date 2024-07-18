import { Strapi, factories } from "@strapi/strapi";

export default factories.createCoreController("plugin::forms.chartered-flight-request", 
    ({strapi}: {strapi: Strapi}) => ({
        async findAll(ctx) {
            console.log('------IN CONTROLLER-----');
            try {
                return await strapi.plugin('forms').service('charteredFlightRequest').getAll();
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
                return await strapi.plugin('forms').service('charteredFlightRequest').create(ctx.request.body);
            } catch (error) {
                ctx.throw(500, error);
            }
            
        }
    })
)