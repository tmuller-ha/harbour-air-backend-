module.exports = {
  async getStatus(ctx) {
    const body = ctx.request.body;

    // Modify the payload as needed
    body["key"] = process.env.BLUESKY_BOOKING_SCHEDULES_ID;

    try {
      const response = await fetch(process.env.BLUESKY_BOOKING_SCHEDULES_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await response.json(); // Parse the response

      return result;
    } catch (error) {
      // Use `ctx.throw` to return an error response
      ctx.throw(500, `Error in fetch request: ${error.message}`);
    }
  },
};
