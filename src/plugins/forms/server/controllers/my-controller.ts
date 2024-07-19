import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  getContentTypes(ctx) {
    ctx.body = strapi
      .plugin('forms')
      .service('myService')
      .getContentTypes();
  },
});
