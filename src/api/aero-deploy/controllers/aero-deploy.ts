/**
 * A set of functions called "actions" for `aero-deploy`
 */

export default {
  async triggerBuild(ctx) {
    try {
      const { body } = ctx.request;

      const result = await strapi
        .service("api::aero-deploy.aero-deploy")
        .triggerBuild(body);

      ctx.body = {
        success: true,
        data: result,
        message: "Build triggered successfully",
      };
    } catch (err) {
      console.error("Build trigger error:", err);
      ctx.status = 500;
      ctx.body = {
        success: false,
        error: err.message,
        message: "Failed to trigger build",
      };
    }
  },
};
