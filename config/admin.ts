const getPreviewPathname = (uid, { locale, document }): string => {
  const { slug } = document;

  switch (uid) {
    case "api::home.home":
      return "/";
    case "api::about-us.about-us":
      return "/about-us/";
    case "api::air-craft-fleet.air-craft-fleet":
      return "/aircraft-fleet/";
    case "api::award.award":
      return "/about-us/awards/";
    case "api::blogs-and-new.blogs-and-new":
      return "/blogs-news/";
    case "api::book-flight.book-flight":
      return "/book-flight/";
    case "api::canadian-passenger-right.canadian-passenger-right":
      return "/tariff/";
    case "api::car-service.car-service":
      return "/car-services/";
    case "api::career.career":
      return "/careers/";
    case "api::chartered-flight.chartered-flight":
      return "/chartered-flight/";
    case "api::community-involvement.community-involvement":
      return "/community-involvement/";
    case "api::contact-us.contact-us":
      return "/contact-us/";
    case "api::corporate-resposibility.corporate-resposibility":
      return "/corporate-responsibility/";
    case "api::courtesy-shuttle.courtesy-shuttle":
      return "/courtesy-shuttles/";
    case "api::faq.faq":
      return "/faq/";
    case "api::flight-status.flight-status":
      return "/flight-status/";
    case "api::going-electric.going-electric":
      return "/going-electric/";
    case "api::group-booking.group-booking":
      return "/group-bookings/";
    case "api::high-flyer-reward.high-flyer-reward":
      return "/high-flyer-rewards/";
    case "api::loyalty-program.loyalty-program":
      return "/loyalty-programs/";
    case "api::luggage.luggage":
      return "/luggage/";
    case "api::main-deal.main-deal":
      return "/deals/";
    case "api::mobility.mobility":
      return "/extra-assistance/mobility/";
    case "api::moving-past-carbon-neutral.moving-past-carbon-neutral":
      return "/moving-past-carbon-neutral/";
    case "api::not-found-page.not-found-page":
      return "/not-found/";
    case "api::on-account-quick-ticket.on-account-quick-ticket":
      return "/on-account-quick-tickets/";
    case "api::our-fare.our-fare":
      return "/fares/";
    case "api::our-promise.our-promise":
      return "/about-us/our-promises/";
    case "api::our-story.our-story":
      return "/about-us/our-timeline/";
    case "api::parcel-express.parcel-express":
      return "/parcel-express/";
    case "api::private-tour.private-tour":
      return "/private-tours/";
    case "api::safety-first.safety-first":
      return "/safety-first/";
    case "api::schedule.schedule":
      return "/schedules/";
    case "api::seating-option.seating-option":
      return "/seating-options/";
    case "api::standby-travel.standby-travel":
      return "/standby-travel/";
    case "api::turbobucks-flight-credit.turbobucks-flight-credit":
      return "/turbobucks-flight-credits/";
    case "api::base-page.base-page":
      return `${slug}`;
    case "api::extra-assistance.extra-assistance":
    case "api::assistance.assistance": {
      if (!slug) {
        return "/extra-assistance/";
      }
      return `/extra-assistance/${slug}`;
    }
    case "api::blog-list.blog-list": {
      if (!slug) {
        return "/blog";
      }
      return `/blog/${slug}`;
    }
    case "api::news-list.news-list": {
      if (!slug) {
        return "/news";
      }
      return `/news/${slug}`;
    }
    case "api::main-location.main-location": {
      if (!slug) {
        return "/locations/";
      }
      return `/locations/${slug}`;
    }
    case "api::main-tour.main-tour": {
      if (!slug) {
        return "/tours/";
      }
      return `/tours/${slug}`;
    }
    default: {
      return null;
    }
  }
};

export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: ["*"],
      async handler(uid, { documentId, locale, status }) {
        const document = await strapi.documents(uid).findOne({ documentId });
        const pathname = getPreviewPathname(uid, { locale, document });

        return `${env("WEB_PREVIEW_URL")}${pathname}`;
      },
    },
  },
});
