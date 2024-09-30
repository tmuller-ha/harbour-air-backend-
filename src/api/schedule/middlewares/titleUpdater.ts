"use strict";

module.exports = (config, { strapi }) => {
  return async (ctx: any, next: () => Promise<void>) => {
    const { method, url, body } = ctx.request;

    if ((method === "PUT" || (method === "POST" && url.includes("/schedules")))) {
      const { schedules } = body;

      if (schedules && Array.isArray(schedules)) {
        for (const schedule of schedules) {
          if (schedule.departure || schedule.arrival) {
            const departureId = schedule?.departure?.connect[0]?.id;
            const arrivalId = schedule?.arrival?.connect[0]?.id;

            const getLocation = async (id) => {
              const destination = await strapi.entityService.findOne("api::destination.destination", id);
              return destination?.location;
            };

            if (schedule?.title) {
              const [existingDeparture, existingArrival] = schedule.title.split(" - ");
              
              if (departureId && !arrivalId) {
                const departureLocation = await getLocation(departureId);
                schedule.title = `${departureLocation} - ${existingArrival}`;
              } else if (!departureId && arrivalId) {
                const arrivalLocation = await getLocation(arrivalId);
                schedule.title = `${existingDeparture} - ${arrivalLocation}`;
              } else if (departureId && arrivalId) {
                const departureLocation = await getLocation(departureId);
                const arrivalLocation = await getLocation(arrivalId);
                schedule.title = `${departureLocation} - ${arrivalLocation}`;
              }
            } else if (departureId && arrivalId) {
              const departureLocation = await getLocation(departureId);
              const arrivalLocation = await getLocation(arrivalId);
              schedule.title = `${departureLocation} - ${arrivalLocation}`;
            }
          }
        }
      }
    }
    await next();
  };
};
