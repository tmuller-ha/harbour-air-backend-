/**
 * country controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::country.country',({ strapi }) => ({
    async createMany(ctx) {
      const entries = await strapi.db.query("api::country.country").createMany({data:ctx.request.body});
  
      ctx.body = entries;
    },
  }));
