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
          name: "api::location.location",
          hideFields: [
            "description",
            "locationPhotos",
            "locationVideo",
            "learnMoreBtnText",
            "seo",
            "metaData",
            "guide",
            "additionalInformation",
            "address",
            "opacity",
            "mobileImagePosition",
            "tileImage",
            "createdAt",
            "createdBy",
            "updatedAt",
            "updatedBy",
          ],
        },
        {
          name: "api::blog.blog",
          hideFields: [
            "content",
            "category",
            "readingTime",
            "bannerImage",
            "seo",
            "metaData",
            "createdAt",
            "createdBy",
            "updatedAt",
            "mobileImagePosition",
          ],
        },
        {
          name: "api::news.news",
          hideFields: [
            "content",
            "category",
            "readingTime",
            "bannerImage",
            "seo",
            "metaData",
            "createdAt",
            "createdBy",
            "updatedAt",
          ],
        },
        {
          name:"api::tours-detail.tours-detail",
          hideFields: [
            "tour_location",
            "overviewTitle",
            "detailsTitle",
            "detailsDescription",
            "tourFareDetail",
            "flightDuration",
            "availableOffers",
            "cardDescription",
            "fareCategory",
            "fare",
            "person",
            "bookBtnText",
            "bookBtnSlug",
            "makeitPrivateBtnText",
            "makeitPrivateBtnSlug",
            "createdAt",
            "createdBy",
            "departureLocation",
            "arrivalLocation",
            "segmentId",
            "microsoftFormUrl",
          ]
        }
      ],
    },
  },
});
