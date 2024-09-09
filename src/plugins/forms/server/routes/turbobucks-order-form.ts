export default {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/turbobucks-order-forms",
      handler: "turbobucksOrderForm.findAll",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/turbobucks-order-forms/:id",
      handler: "turbobucksOrderForm.findOne",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/turbobucks-order-forms/:id",
      handler: "turbobucksOrderForm.remove",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/turbobucks-order-forms/:id",
      handler: "turbobucksOrderForm.update",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/turbobucks-order-forms",
      handler: "turbobucksOrderForm.create",
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
