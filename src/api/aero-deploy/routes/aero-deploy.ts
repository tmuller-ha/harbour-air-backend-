export default {
  routes: [
    {
      method: "POST",
      path: "/aero-deploy",
      handler: "aero-deploy.triggerBuild",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
