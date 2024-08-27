export default {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/discounted-travels",
      handler: "discountedTravelForm.findAll",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/discounted-travels/:id",
      handler: "discountedTravelForm.findOne",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/discounted-travels/:id",
      handler: "discountedTravelForm.remove",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/discounted-travels/:id",
      handler: "discountedTravelForm.update",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/discounted-travels",
      handler: "discountedTravelForm.create",
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
