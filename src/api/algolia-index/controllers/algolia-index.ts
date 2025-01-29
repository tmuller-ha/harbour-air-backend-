/**
 * A set of functions called "actions" for `algolia-index`
 */

import { getPageContent } from "../utils/utils";

const pageSlugs = [
  { model: "about-us", slug: "/about-us" },
  { model: "air-craft-fleet", slug: "/aircraft-fleet" },
  { model: "book-flight", slug: "/book-flight" },
  { model: "car-service", slug: "/car-services" },
  { model: "community-involvement", slug: "/community-involvement" },
  {
    model: "corporate-responsibility",
    slug: "/corporate-responsibility",
  },
  { model: "courtesy-shuttle", slug: "/courtesy-shuttles" },
  { model: "flight-status", slug: "/flight-status" },
  { model: "extra-assistance", slug: "/extra-assistance" },
  { model: "going-electric", slug: "/going-electric" },
  { model: "group-booking", slug: "/group-bookings" },
  { model: "high-flyer-reward", slug: "/high-flyer-reward" },
  { model: "loyalty-program", slug: "/loyalty-programs" },
  { model: "luggage", slug: "luggages" },
  { model: "main-deal", slug: "/deals" },
  {model:'on-account-quick-ticket' , slug:'/on-account-quick-tickets'},
  { model: "moving-past-carbon-neutral", slug: "/moving-past-carbon-neutral" },
  { model: "our-fare", slug: "/fares" },
  { model:'schedule' ,slug:'/schedules'},
  { model: "parcel-express", slug: "/parcel-express" },
  { model: "faq", slug: "/faq" },
  { model: "contact-us", slug: "/contact-us" },
  { model: "chartered-flight", slug: "/chartered-flight" },
  { model: "main-location", slug: "/locations" },
  { model: "main-tour", slug: "/tours" },
  { model: "career", slug: "/careers" },
  { model: "canadian-passenger-right", slug: "/tariff" },
  { model:'seating-option' ,slug:'/seating-options'},
  { model: 'standby-travel' , slug:'/standby-travel'},
];

export default {
  trigger: async (ctx) => {
    try {
      const { model, entry } = ctx.request.body;
      console.log("model", model);
      const pageContent = getPageContent(model, entry);
      const { documentId } = pageContent;
      const response = await fetch(
        `https://${process.env.ALGOLIA_APP_ID}-dsn.algolia.net/1/indexes/development_pages/${documentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-Algolia-API-Key": process.env.ALGOLIA_ADMIN_KEY,
            "X-Algolia-Application-Id": process.env.ALGOLIA_APP_ID,
          },
          body: JSON.stringify(pageContent),
        }
      );
      return response;
    } catch (err) {}
  },
};
