export default ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_ACCESS_SECRET"),
          },
          region: env("AWS_REGION"),
          params: {
            Bucket: env("AWS_BUCKET_NAME"),
          },
        },
      },
      // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
      actionOptions: {
        upload: {
          ACL: null,
        },
        uploadStream: {
          ACL: null,
        },
      },
    },
    breakpoints: {
      large_x2: 2048,
      extralarge: 1400,
      large: 1024,
      medium: 768,
      small: 640,
      extraSmall: 480,
      thumbnail: 256,
      icon_x2: 160,
      icon: 80,
    },
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: env("DEFAULT_FROM_EMAIL"),
        defaultReplyTo: env("DEFAULT_REPLY_TO_EMAIL"),
      },
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 10,
      amountLimit: 100,
      defaultLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },
  "strapi-algolia": {
    enabled: true,
    config: {
      apiKey: env("ALGOLIA_ADMIN_KEY"),
      applicationId: env("ALGOLIA_APP_ID"),
      contentTypes: [
        {
          name: "api::assistance.assistance",
          hideFields: ["createdBy", "updatedBy"],
        },
        {
          name: "api::base-page.base-page",
          hideFields: ["createdBy", "updatedBy"],
        },
        { name: "api::blog.blog", hideFields: ["createdBy", "updatedBy"] },
        {
          name: "api::campaign.campaign",
          hideFields: ["createdBy", "updatedBy"],
        },
        {
          name: "api::career-opportunity.career-opportunity",
          hideFields: ["createdBy", "updatedBy"],
        },
        {
          name: "api::category.category",
          hideFields: ["createdBy", "updatedBy"],
        },
        {
          name: "api::featured-tour.featured-tour",
          hideFields: ["createdBy", "updatedBy"],
        },
        { name: "api::deal.deal", hideFields: ["createdBy", "updatedBy"] },
        {
          name: "api::document.document",
          hideFields: ["createdBy", "updatedBy"],
        },
        {
          name: "api::faq-content.faq-content",
          hideFields: ["createdBy", "updatedBy"],
        },
        {
          name: "api::destination.destination",
          hideFields: ["createdBy", "updatedBy"],
        },
        { name: "api::link.link", hideFields: ["createdBy", "updatedBy"] },
        {
          name: "api::menu-image-link.menu-image-link",
          hideFields: ["createdBy", "updatedBy"],
        },
        { name: "api::news.news", hideFields: ["createdBy", "updatedBy"] },
        {
          name: "api::tour-location.tour-location",
          hideFields: ["createdBy", "updatedBy"],
        },
        {
          name: "api::tours-detail.tours-detail",
          hideFields: ["createdBy", "updatedBy"],
        },
        {
          name: "api::trip-advisor-comment.trip-advisor-comment",
          hideFields: ["createdBy", "updatedBy"],
        },
      ],
    },
  },
});
