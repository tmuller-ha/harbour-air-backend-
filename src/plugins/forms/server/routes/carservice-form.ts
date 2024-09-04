export default {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/carservice-forms",
      handler: "carserviceForm.findAll",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/carservice-forms/:id",
      handler: "carserviceForm.findOne",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/carservice-forms/:id",
      handler: "carserviceForm.remove",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/carservice-forms/:id",
      handler: "carserviceForm.update",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/carservice-forms",
      handler: "carserviceForm.create",
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
