module.exports = (config, { strapi }) => {
    return async (ctx, next) => {
      const allowedOrigins = ['http://localhost:3000', 'http://localhost:1337'];
      const requesedtOrigin = ctx.request.headers.origin || ctx.request.origin;
  
      if (!allowedOrigins.includes(requesedtOrigin)) {
        console.log(`Blocked origin: ${requesedtOrigin}`);
        ctx.throw(403, 'Origin not allowed');
      }
  
      ctx.set('Access-Control-Allow-Origin', allowedOrigins?.toString());
      ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
      ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      await next();
    };
  };
  