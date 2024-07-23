import { Strapi, factories } from "@strapi/strapi";

export default factories.createCoreController("plugin::forms.tour-request", 
    ({strapi}: {strapi: Strapi}) => ({
        async findAll(ctx) {
            try {
                const results = await strapi.plugin("forms").service('tourRequest').getAllEntries(ctx.query);
                return results;
            } catch (error) {
                ctx.throw(500, error);
            }
        },
        async findOne(ctx) {
            try {
                const { id } = ctx.params;
                return await strapi.plugin('forms').service('tourRequest').getOne(id);
            } catch (error) {
                ctx.throw(500, error);
            }
        },
        async remove(ctx) {
            try {
                const { id } = ctx.params;
                return await strapi.plugin('forms').service('tourRequest').delete(id);
            } catch (error) {
                ctx.throw(500, error);
            }
        },
        async update(ctx) {
            try {
                return await strapi.plugin('forms').service('tourRequest').update(ctx.params.id, ctx.request.body);
            } catch (error) {
                ctx.throw(500, error);
            }
        },
        async create(ctx) {
            try {
                return await strapi.plugin('forms').service('tourRequest').create(ctx.request.body);
            } catch (error) {
                ctx.throw(500, error);
            }
            
        }
    })
)