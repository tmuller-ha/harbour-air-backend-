export default [
  "strapi::logger",
  "strapi::errors",
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
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },

  // TODO: Update cors config to match your requirements
  {
    name: "strapi::cors",
    config: {
      origin: "*",
      headers: "*",
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formidable: {
        maxFileSize: 10 * 1024 * 1024, // Limit file size to 10MB
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    // custom resolve to find a package or a path
    resolve: "./src/middlewares/upload.js",
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    resolve: './src/api/schedule/middlewares/titleUpdater.js',
  },
];
