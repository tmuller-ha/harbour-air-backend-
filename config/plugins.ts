module.exports = ({ env }) => ({
  "web-deployment": {
    enabled: true,
    resolve: "./src/plugins/web-deployment",
  },
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::home.home",
          draft: {
            url: `${env("WEB_PREVIEW_URL")}/api/draft`,
            query: {
              type: "home",
            },
          },
          published: {
            url: env("WEB_PREVIEW_URL"),
          },
        },
      ],
    },
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
});
