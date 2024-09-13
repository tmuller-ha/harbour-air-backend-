export default (env: any) => [
  {
    uid: "api::home.home",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "home",
      },
    },
    published: {
      url: env("WEB_PREVIEW_URL"),
    },
  },
  {
    uid: "api::footer.footer",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "footer",
      },
    },
    published: {
      url: env("WEB_PREVIEW_URL"),
    },
  },
  {
    uid: "api::header.header",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "header",
      },
    },
    published: {
      url: env("WEB_PREVIEW_URL"),
    },
  },
  {
    uid: "api::main-deal.main-deal",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "deals",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/deals`,
    },
  },
  {
    uid: "api::faq.faq",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "faq",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/faq`,
    },
  },
  {
    uid: "api::main-deal.main-deal",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "deals",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/deals`,
    },
  },
  {
    uid: "api::main-location.main-location",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "locations",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/locations`,
    },
  },
  {
    uid: "api::location.location",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "locations",
        slug: "{slug}",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/locations/{slug}`,
    },
  },

  {
    uid: "api::about-us.about-us",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "about-us",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/about-us`,
    },
  },
  {
    uid: "api::air-craft-fleet.air-craft-fleet",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "aircraft-fleet",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/aircraft-fleet`,
    },
  },
  {
    uid: "api::award.award",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "about-us/awards",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/about-us/awards`,
    },
  },
  {
    uid: "api::blogs-and-new.blogs-and-new",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "blogs-news",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/blogs-news`,
    },
  },
  {
    uid: "api::book-flight.book-flight",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "book-flight",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/book-flight`,
    },
  },
  {
    uid: "api::canadian-passenger-right.canadian-passenger-right",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "canadian-passenger-rights",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/canadian-passenger-rights`,
    },
  },
  {
    uid: "api::car-service.car-service",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "car-services",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/car-services`,
    },
  },

  {
    uid: "api::career.career",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "careers",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/careers`,
    },
  },

  {
    uid: "api::chartered-flight.chartered-flight",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "chartered-flight",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/chartered-flight`,
    },
  },

  {
    uid: "api::community-involvement.community-involvement",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "community-involvement",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/community-involvement`,
    },
  },
  {
    uid: "api::contact-us.contact-us",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "contact-us",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/contact-us`,
    },
  },
  {
    uid: "api::corporate-resposibility.corporate-resposibility",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "corporate-responsibility",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/corporate-responsibility`,
    },
  },
  {
    uid: "api::courtesy-shuttle.courtesy-shuttle",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "courtesy-shuttles",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/courtesy-shuttles`,
    },
  },
  {
    uid: "api::courtesy-shuttle.courtesy-shuttle",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "courtesy-shuttles",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/courtesy-shuttles`,
    },
  },
  {
    uid: "api::extra-assistance.extra-assistance",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "extra-assistance",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/extra-assistance`,
    },
  },
  {
    uid: "api::flight-status.flight-status",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "flight-status",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/flight-status`,
    },
  },
  {
    uid: "api::going-electric.going-electric",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "going-electric",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/going-electric`,
    },
  },
  {
    uid: "api::group-booking.group-booking",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "group-bookings",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/group-bookings`,
    },
  },
  {
    uid: "api::luggage.luggage",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "luggage",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/luggage`,
    },
  },
  {
    uid: "api::main-tour.main-tour",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "tours",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/tours`,
    },
  },
  {
    uid: "api::mobility.mobility",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "extra-assistance/mobility",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/extra-assistance/mobility`,
    },
  },
  {
    uid: "api::moving-past-carbon-neutral.moving-past-carbon-neutral",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "moving-past-carbon-neutral",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/moving-past-carbon-neutral`,
    },
  },
  {
    uid: "api::on-account-quick-ticket.on-account-quick-ticket",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "on-account-quick-tickets",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/on-account-quick-tickets`,
    },
  },

  {
    uid: "api::our-fare.our-fare",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "fares",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/fares`,
    },
  },
  {
    uid: "api::our-promise.our-promise",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "about-us/our-promises",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/about-us/our-promises`,
    },
  },
  {
    uid: "api::our-story.our-story",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "about-us/our-stories",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/about-us/our-stories`,
    },
  },
  {
    uid: "api::parcel-express.parcel-express",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "parcel-express",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/parcel-express`,
    },
  },
  {
    uid: "api::private-tour.private-tour",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "private-tours",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/private-tours`,
    },
  },
  {
    uid: "api::safety-first.safety-first",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "safety-first",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/safety-first`,
    },
  },
  {
    uid: "api::schedule.schedule",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "schedules",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/schedules`,
    },
  },
  {
    uid: "api::seating-option.seating-option",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "seating-options",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/seating-options`,
    },
  },
  {
    uid: "api::standby-travel.standby-travel",
    draft: {
      url: `${env("WEB_PREVIEW_URL")}/api/draft`,
      query: {
        type: "standby-travel",
      },
    },
    published: {
      url: `${env("WEB_PREVIEW_URL")}/standby-travel`,
    },
  },
];
