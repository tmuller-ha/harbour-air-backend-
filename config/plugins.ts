const metaData = [
  "createdAt",
  "createdBy",
  "updatedAt",
  "updatedBy",
  "localizations",
  "locale",
];
const fieldNames = [...metaData, "seo", "metaData"];

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
  "rgba-color-picker": {
    enabled: true,
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
            ...fieldNames,
            "description",
            "locationPhotos",
            "locationVideo",
            "learnMoreBtnText",
            "guide",
            "additionalInformation",
            "address",
            "opacity",
            "mobileImagePosition",
            "tileImage",
          ],
        },
        {
          name: "api::blog.blog",
          hideFields: [
            ...fieldNames,
            "content",
            "category",
            "readingTime",
            "bannerImage",
            "mobileImagePosition",
          ],
        },
        {
          name: "api::news.news",
          hideFields: [
            ...fieldNames,
            "content",
            "category",
            "readingTime",
            "bannerImage",
          ],
        },
        {
          name: "api::tour-location.tour-location",
          hideFields: [
            ...fieldNames,
            "show",
            "tours",
            "departure",
            "opacity",
            "mobileImagePosition",
            "departureLocation",
            "heroBackgroundImage",
          ],
          populate: {
            components: {
              on: {
                "main-tours.tour-cards": {
                  populate: {
                    tourPlaces: {
                      populate: "*",
                    },
                  },
                },
              },
            },
          },
        },
        {
          name: "api::base-page.base-page",
          hideFields: [...fieldNames],
          populate: {
            sections: {
              on: {
                "elements.title-with-image": {
                  populate: "*",
                },
              },
            },
          },
        },
      ],
    },
  },
  "bulk-operator": {
    enabled: true,
    resolve: "./src/plugins/bulk-operator",
  },
  // 'web-deployment': {
  //   enabled: true,
  //   resolve: './src/plugins/web-deployment'
  // },
});
