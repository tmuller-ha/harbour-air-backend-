import routes from ".";

export default {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/deployment",
      handler: "deployment.findAll",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/deployment",
      handler: "deployment.create",
      config: {
        policies: [],
        auth: false,
      },
    },

    {
      method: "PUT",
      path: "/deployment",
      handler: "deployment.update",
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
