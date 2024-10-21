export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "strapi.io",
            "market-assets.strapi.io",
            "dl.airtable.com",
            `${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com`,
            `${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`,
            `${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`,
            "loved-serenity-e0ed39558b.media.strapiapp.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "strapi.io",
            "market-assets.strapi.io",
            "dl.airtable.com",
            `${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com`,
            `${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`,
            "loved-serenity-e0ed39558b.media.strapiapp.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::body",
    config: {
      formidable: {
        maxFileSize: 10 * 1024 * 1024, // Limit file size to 10MB
      },
    },
  },
  {
    // custom resolve to find a package or a path
    resolve: "./src/middlewares/upload.js",
  },
  {
    resolve: "./src/api/schedule/middlewares/titleUpdater.js",
  },
  {
    name: "strapi::cors",
    config: {
      origin: "*",
      headers: "*",
    },
  },
];
