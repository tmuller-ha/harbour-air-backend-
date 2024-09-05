export default {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/group-bookings-forms",
      handler: "groupBookingsForm.findAll",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/group-bookings-forms/:id",
      handler: "groupBookingsForm.findOne",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/group-bookings-forms/:id",
      handler: "groupBookingsForm.remove",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/group-bookings-forms/:id",
      handler: "groupBookingsForm.update",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/group-bookings-forms",
      handler: "groupBookingsForm.create",
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
