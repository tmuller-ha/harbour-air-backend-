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
        {
          uid: "api::footer.footer",
          draft: {
            url: `${env("WEB_PREVIEW_URL")}/api/draft`,
            query: {
              type: "footer",
            },
          },
          published: {
            url: env("WEB_PREVIEW_URL"),
          },
        },
        {
          uid: "api::header.header",
          draft: {
            url: `${env("WEB_PREVIEW_URL")}/api/draft`,
            query: {
              type: "header",
            },
          },
          published: {
            url: env("WEB_PREVIEW_URL"),
          },
        },
        {
          uid: "api::main-deal.main-deal",
          draft: {
            url: `${env("WEB_PREVIEW_URL")}/api/draft`,
            query: {
              type: "deals",
            },
          },
          published: {
            url: `${env("WEB_PREVIEW_URL")}/deals`,
          },
        },
        {
          uid: "api::faq.faq",
          draft: {
            url: `${env("WEB_PREVIEW_URL")}/api/draft`,
            query: {
              type: "faq",
            },
          },
          published: {
            url: `${env("WEB_PREVIEW_URL")}/faq`,
          },
        },
        {
          uid: "api::main-deal.main-deal",
          draft: {
            url: `${env("WEB_PREVIEW_URL")}/api/draft`,
            query: {
              type: "deals",
            },
          },
          published: {
            url: `${env("WEB_PREVIEW_URL")}/deals`,
          },
        },
        {
          uid: "api::main-location.main-location",
          draft: {
            url: `${env("WEB_PREVIEW_URL")}/api/draft`,
            query: {
              type: "locations",
            },
          },
          published: {
            url: `${env("WEB_PREVIEW_URL")}/locations`,
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
      breakpoints: {
        xxl: 2048,
        xl: 1400,
        l: 1200,
        m: 1024,
        xm: 768,
        standard: 640,
        sm: 480,
        xs: 384,
        thumbnail: 256,
        thumbnailS: 128,
        icon: 48,
      },
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
