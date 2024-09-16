export default {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/baggage-claim-forms",
      handler: "baggageClaimForm.findAll",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/baggage-claim-forms/:id",
      handler: "baggageClaimForm.findOne",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/baggage-claim-forms/:id",
      handler: "baggageClaimForm.remove",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/baggage-claim-forms/:id",
      handler: "baggageClaimForm.update",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/baggage-claim-forms",
      handler: "baggageClaimForm.create",
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
