module.exports = ({ env }) => ({
  // "web-deployment": {
  //   enabled: true,
  //   resolve: "./src/plugins/web-deployment",
  // },
// form plugin have been hidden
  forms: {
    enabled: false,
    resolve: "./src/plugins/forms",
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_ACCESS_SECRET"),
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
    enabled: true,
    config: {
      v4ComptabilityMode: true,
      playgroundAlways: false,
      defaultLimit: 10,
      maxLimit: 20,
      apolloServer: {
        tracing: true,
      },
    },
  },
});
