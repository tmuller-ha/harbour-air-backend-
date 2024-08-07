import { factories, Strapi } from '@strapi/strapi'

export default factories.createCoreController('plugin::forms.contact-form', 
    ({strapi}: {strapi: Strapi}) => ({
        async findAll(ctx) {
            try {
                return await strapi.plugin('forms').service('contactForm').getAllEntries(ctx.query);
            } catch (error) {
                ctx.throw(500, error);
            }
        },
        async findOne(ctx) {
            try {
                const { id } = ctx.params;
                return await strapi.plugin('forms').service('contactForm').getOne(id);
            } catch (error) {
                ctx.throw(500, error);
            }
        },
        async remove(ctx) {
            try {
                const { id } = ctx.params;
                return await strapi.plugin('forms').service('contactForm').delete(id);
            } catch (error) {
                ctx.throw(500, error);
            }
        },
        async update(ctx) {
            try {
                return await strapi.plugin('forms').service('contactForm').update(ctx.params.id, ctx.request.body);
            } catch (error) {
                ctx.throw(500, error);
            }
        },
        async create(ctx) {
            try {
                return await strapi.plugin('forms').service('contactForm').create(ctx.request.body);
            } catch (error) {
                ctx.throw(500, error);
            }
            
        }
    })
);