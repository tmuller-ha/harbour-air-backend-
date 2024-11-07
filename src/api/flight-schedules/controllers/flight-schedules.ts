import { FlightStatusResponseType } from "./flight-schedules.types";

module.exports = {
  async getStatus(ctx) {
    const body = ctx.request.body;

    // Modify the payload as needed
    body["key"] = process.env.BLUESKY_BOOKING_SCHEDULES_ID;
    const flightStatus = ctx.request.body.filter["flightStatus"]

    try {
      const response = await fetch(process.env.BLUESKY_BOOKING_SCHEDULES_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await response.json() as FlightStatusResponseType; // Parse the response

      const scheduledFlights = result.scheduleList.filter((element) =>
        element.schedule?.includes?.('Flight') && flightStatus.includes(element.status.status),
      );

      return scheduledFlights;
    } catch (error) {
      // Use `ctx.throw` to return an error response
      ctx.throw(500, `Error in fetch request: ${error.message}`);
    }
  },
};
