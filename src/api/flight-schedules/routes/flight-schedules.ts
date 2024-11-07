// src/api/status/routes/product.js

module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/flight-schedules',
        handler: 'flight-schedules.getStatus',
        config: {
          auth: false,  // Set to true if you want to require authentication
        },
      },
    ],
  };
  