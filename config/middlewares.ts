export default [
  'strapi::logger',
  'strapi::errors',
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
            'dl.airtable.com',
            `${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com`,
            `${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "strapi.io",
            "market-assets.strapi.io",
            'dl.airtable.com',
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
      origin: '*',
      headers: '*',
    }
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
