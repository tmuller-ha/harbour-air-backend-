/**
 * email-form router
 */


export default {
  type: "content-api",
  routes: [
    {
      method: "POST",
      path: "/email-form",
      handler: "email-form.trigger",
      config: {
        policies: [],
        auth: false,
      },
    },
    
  ],
};
