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
      provider: "amazon-ses",
      providerOptions: {
        key: env("AWS_ACCESS_KEY_ID"),
        secret: env("AWS_ACCESS_SECRET"),
        amazon: "https://email.us-east-1.amazonaws.com",
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
        { name: "api::assistance.assistance" },
        { name: "api::base-page.base-page" },
        { name: "api::blog.blog" },
        { name: "api::campaign.campaign" },
        { name: "api::deal.deal" },
        { name: "api::document.document" },
        { name: "api::faq-content.faq-content" },
        { name: "api::location.location" },
        { name: "api::link.link" },
        { name: "api::menu-image-link.menu-image-link" },
        { name: "api::news.news" },
        { name: "api::tour-location.tour-location" },
        { name: "api::tours-detail.tours-detail" },
        { name: "api::trip-advisor-comment.trip-advisor-comment" },
      ],
    },
  },
});
