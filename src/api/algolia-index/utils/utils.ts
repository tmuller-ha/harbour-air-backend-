enum PageContentModel {
  aboutUs = "about-us",
  airCraftFleet = "air-craft-fleet",
  bookFlight = "book-flight",
  carService = "car-service",
  communityInvolvement = "community-involvement",
  corporateResponsibility = "corporate-responsibility",
  courtesyShuttle = "courtesy-shuttle",
  flightStatus = "flight-status",
  extraAssistance = "extra-assistance",
  goingElectric = "going-electric",
  groupBooking = "group-booking",
  highFlyerReward = "high-flyer-reward",
  loyaltyProgram = "loyalty-program",
  luggage = "luggage",
  mainDeal = "main-deal",
  onAccountQuickTicket = "on-account-quick-ticket",
  movingPastCarbonNeutral = "moving-past-carbon-neutral",
  ourFare = "our-fare",
  schedule = "schedule",
  parcelExpress = "parcel-express",
  faq = "faq",
  contactUs = "contact-us",
  charteredFlight = "chartered-flight",
  mainLocation = "main-location",
  mainTour = "main-tour",
  career = "career",
  canadianPassengerRight = "canadian-passenger-right",
  seatingOption = "seating-option",
  standbyTravel = "standby-travel",
}

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
  { model: "on-account-quick-ticket", slug: "/on-account-quick-tickets" },
  { model: "moving-past-carbon-neutral", slug: "/moving-past-carbon-neutral" },
  { model: "our-fare", slug: "/fares" },
  { model: "schedule", slug: "/schedules" },
  { model: "parcel-express", slug: "/parcel-express" },
  { model: "faq", slug: "/faq" },
  { model: "contact-us", slug: "/contact-us" },
  { model: "chartered-flight", slug: "/chartered-flight" },
  { model: "main-location", slug: "/locations" },
  { model: "main-tour", slug: "/tours" },
  { model: "career", slug: "/careers" },
  { model: "canadian-passenger-right", slug: "/tariff" },
  { model: "seating-option", slug: "/seating-options" },
  { model: "standby-travel", slug: "/standby-travel" },
];

export function getPageContent(pageContentModel: string, data: any) {
  switch (pageContentModel) {
    case PageContentModel.aboutUs:
      const { heading, publishedAt, documentId } = data;
      const { title, description, media } = heading;
      return {
        documentId,
        title,
        description,
        media,
        publishedAt,
        slug: "/about-us",
      };
    case PageContentModel.faq:
      const { title: faqTitle, accordionSection, documentId: faqId } = data;
      const { description: faqDescription } = accordionSection;
      return {
        documentId: faqId,
        title: faqTitle,
        description: faqDescription,
        slug: "/faq",
      };
    case PageContentModel.airCraftFleet:
      break;
    case PageContentModel.bookFlight:
      const { pageTitle } = data;
      const { title: bookFlightTitle, coverImage } = pageTitle;
      return {
        title: bookFlightTitle,
        media: coverImage,
        slug: "/book-flight",
      };
    case PageContentModel.charteredFlight:
      const { sections } = data;
      const { title: charteredFlightTitle, coverImage: charteredFlightMedia } =
        sections[0];
      return {
        title: charteredFlightTitle,
        media: charteredFlightMedia,
        slug: "/chartered-flight",
      };
    case PageContentModel.carService:
      break;
    case PageContentModel.communityInvolvement:
      break;
    case PageContentModel.corporateResponsibility:
      break;
    case PageContentModel.courtesyShuttle:
      break;
    case PageContentModel.flightStatus:
      const { flightStatusTitle, flightStatusDescription } = data;
      const { title: flightStatusPageTitle, coverImage: flightStatusImage } =
        flightStatusTitle;
      const { description: flightStatusPageDescription } =
        flightStatusDescription;
      return {
        title: flightStatusPageTitle,
        description: flightStatusPageDescription,
        media: flightStatusImage,
        slug: "/flight-status",
      };
    case PageContentModel.extraAssistance:
      break;
    case PageContentModel.goingElectric:
      break;
    case PageContentModel.groupBooking:
      break;
    case PageContentModel.highFlyerReward:
      break;
    case PageContentModel.loyaltyProgram:
      break;
    case PageContentModel.luggage:
      break;
  }
}
