export default {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/high-flyer-rewards-application-forms",
      handler: "highFlyerRewardsApplicationForm.findAll",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/high-flyer-rewards-application-forms/:id",
      handler: "highFlyerRewardsApplicationForm.findOne",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/high-flyer-rewards-application-forms/:id",
      handler: "highFlyerRewardsApplicationForm.remove",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/high-flyer-rewards-application-forms/:id",
      handler: "highFlyerRewardsApplicationForm.update",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/high-flyer-rewards-application-forms",
      handler: "highFlyerRewardsApplicationForm.create",
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
