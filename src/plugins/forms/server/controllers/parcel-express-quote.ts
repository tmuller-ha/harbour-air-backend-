import { factories, Strapi } from '@strapi/strapi'

export default factories.createCoreController('plugin::forms.parcel-express-quote',
    ({strapi} : {strapi: Strapi}) => ({
        async findAll(ctx) {
            try {
                return await strapi.plugin('forms').service('parcelExpressQuote').getAll(ctx.query);
            } catch (error) {
                ctx.throw(500, error);
            }
        },
        async findOne(ctx) {
            const { id } = ctx.params;
            try {
                return await strapi.plugin('forms').service('parcelExpressQuote').getOne(id);
            } catch (error) {
                ctx.throw(500, error);
            }
        },
        async create(ctx) {
            try {
                return await strapi.plugin('forms').service('parcelExpressQuote').create(ctx.request.body);
            } catch (error) {
                ctx.throw(500, error);
            }
        },
        async update(ctx) {
            try {
                return await strapi.plugin('forms').service('parcelExpressQuote').update(ctx.params.id, ctx.request.body);
            } catch (error) {
                ctx.throw(500, error);
            }
        },
        async remove(ctx) {
            const { id } = ctx.params;
            try {
                return await strapi.plugin('forms').service('parcelExpressQuote').delete(id);
            } catch (error) {
                ctx.throw(500, error);
            }
        },
    })
);
