export default {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/on-account-tickets",
      handler: "onAccountTicketForm.findAll",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/on-account-tickets/:id",
      handler: "onAccountTicketForm.findOne",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/on-account-tickets/:id",
      handler: "onAccountTicketForm.remove",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/on-account-tickets/:id",
      handler: "onAccountTicketForm.update",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/on-account-tickets",
      handler: "onAccountTicketForm.create",
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
