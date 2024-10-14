/**
 * email-option router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::email-option.email-option',{type: 'content-api', routes:[{method:"POST" ,path:"/email-option",handler:"email-option.trigger" ,config:{ policies: [], auth:false}}]}});

export default {
  routes: [
    {
      method: "POST",
      path: "/email-option/trigger",
      handler: "api::email-option.email-option.trigger",
    },
  ],
};
