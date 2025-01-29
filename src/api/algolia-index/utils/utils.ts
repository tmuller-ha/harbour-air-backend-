enum PageContentModel {
  aboutUs = "about-us",
  airCraftFleet = "air-craft-fleet",
  bookFlight = "book-flight",
  carService = "car-service",
  communityInvolvement = "community-involvement",
  corporateResponsibility = "corporate-resposibility",
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
  turboBucks = "turbo-bucks-flight-credit",
}

const pageType = "elements.title-with-image";

function getComponent(component) {
  const pageTitle = component.find((item) => item.__component === pageType);
  const { url } = pageTitle.coverImage || {};
  return { title: pageTitle.title || "", url: url || "" };
}

export function getPageContent(pageContentModel: string, data: any) {
  const { documentId } = data;
  switch (pageContentModel) {
    case PageContentModel.aboutUs:
      const { heading, publishedAt } = data;
      const { title, description, media } = heading;
      return {
        documentId,
        title,
        description,
        media,
        publishedAt,
        slug: "/about-us",
      };
    case PageContentModel.airCraftFleet:
      const { sections: airCraftFleetSection } = data;
      const { title: airCraftTitle, url: airCraftCoverImage } =
        getComponent(airCraftFleetSection);
      return {
        documentId,
        title: airCraftTitle,
        media: airCraftCoverImage,
        slug: "/aircraft-fleet",
      };
    case PageContentModel.bookFlight:
      const { pageTitle } = data;
      const { title: bookFlightTitle = "", coverImage = "" } = pageTitle;
      return {
        documentId,
        title: bookFlightTitle,
        media: coverImage?.url || "",
        slug: "/book-flight",
      };
    case PageContentModel.charteredFlight:
      const { pageTitle: charteredFlightPageTitle } = data;
      const {
        title: charteredFlightTitle = "",
        url: charteredFlightMedia = "",
      } = charteredFlightPageTitle;
      return {
        documentId,
        title: charteredFlightTitle,
        media: charteredFlightMedia,
        slug: "/chartered-flight",
      };
    case PageContentModel.carService:
      const { pageTitle: carServicePageTitle } = data;
      const { title: carServiceTitle = "", coverImage: carServiceImage = {} } =
        carServicePageTitle;
      return {
        documentId,
        title: carServiceTitle,
        media: carServiceImage?.url || "",
        slug: "/car-services",
      };
    case PageContentModel.career:
      const { careerPage } = data;
      const { title: careerTitle = "", url: careerImage = "" } =
        getComponent(careerPage);
      return {
        documentId,
        title: careerTitle,
        media: careerImage,
        slug: "/careers",
      };
    case PageContentModel.communityInvolvement:
      const { sections: communityInvolvementSection } = data;
      const {
        title: communityInvolvementTitle = "",
        url: communityInvolvementMedia = "",
      } = getComponent(communityInvolvementSection);
      return {
        documentId,
        title: communityInvolvementTitle,
        media: communityInvolvementMedia,
        slug: "/community-involvement",
      };
    case PageContentModel.extraAssistance:
      const { pageTitle: extraAssistancePageTitle } = data;
      const {
        title: extraAssistanceTitle = "",
        coverImage: extraAssistanceImage = {},
      } = extraAssistancePageTitle;
      return {
        documentId,
        title: extraAssistanceTitle,
        media: extraAssistanceImage?.url || "",
        slug: "/extra-assistance",
      };
    case PageContentModel.faq:
      const { title: faqTitle } = data;
      return {
        documentId,
        title: faqTitle,
        slug: "/faq",
      };
    case PageContentModel.contactUs:
      const { pageTitle: contactUsTitle } = data;
      const {
        title: contactUsPageTitle = "",
        coverImage: contactUsImage = {},
      } = contactUsTitle;
      return {
        documentId,
        title: contactUsPageTitle,
        media: contactUsImage?.url || "",
        slug: "/contact-us",
      };
    case PageContentModel.corporateResponsibility:
      const { pageTitle: corporateResponsibilityPageTitle } = data;
      const {
        title: corporateResponsibilityTitle = "",
        media: corporateResponsibilityImage = {},
      } = corporateResponsibilityPageTitle;
      return {
        documentId,
        title: corporateResponsibilityTitle,
        media: corporateResponsibilityImage?.url || "",
        slug: "/corporate-responsibility",
      };
    case PageContentModel.courtesyShuttle:
      const { courtesyShuttlePage } = data;
      const {
        title: courtesyShuttleTitle = "",
        url: courtesyShuttleImage = "",
      } = getComponent(courtesyShuttlePage);
      return {
        documentId,
        title: courtesyShuttleTitle,
        media: courtesyShuttleImage,
        slug: "/courtesy-shuttles",
      };
    case PageContentModel.flightStatus:
      const { flighStatusTitle } = data;
      const {
        title: flightStatusPageTitle = "",
        coverImage: flightStatusImage = {},
      } = flighStatusTitle;

      return {
        documentId,
        title: flightStatusPageTitle,
        media: flightStatusImage?.url || "",
        slug: "/flight-status",
      };

    case PageContentModel.goingElectric:
      const { pageTitle: goingElectricPage } = data;
      const { title: goingElectricTitle, media: goingElectricImage } =
        goingElectricPage;
      return {
        documentId,
        title: goingElectricTitle,
        media: goingElectricImage?.url,
        slug: "/going-electric",
      };
    case PageContentModel.groupBooking:
      const { pageTitle: groupBookingPage } = data;
      const { title: groupBookingTitle, coverImage: groupBookingImage } =
        groupBookingPage;
      return {
        documentId,
        title: groupBookingTitle,
        media: groupBookingImage?.url,
        slug: "/group-bookings",
      };
    case PageContentModel.highFlyerReward:
      const { pageTitle: highFlyerRewardPage } = data;
      const { title: highFlyerRewardTitle, coverImage: highFlyerRewardImage } =
        highFlyerRewardPage;
      return {
        documentId,
        title: highFlyerRewardTitle,
        media: highFlyerRewardImage,
        slug: "/high-flyer-rewards",
      };
    case PageContentModel.loyaltyProgram:
      const { pageTitle: loyaltyProgramPage } = data;
      const { title: loyaltyProgramTitle, coverImage: loyaltyProgramImage } =
        loyaltyProgramPage;
      return {
        documentId,
        title: loyaltyProgramTitle,
        media: loyaltyProgramImage?.url,
        slug: "/loyalty-program",
      };
    case PageContentModel.luggage:
      const { luggagePage } = data;
      const { title: luggageTitle, url: luggageImage } =
        getComponent(luggagePage);
      return {
        documentId,
        title: luggageTitle,
        media: luggageImage,
        slug: "/luggage",
      };
    case PageContentModel.movingPastCarbonNeutral:
      const { section } = data;
      const {
        title: movingPastCarbonNeutralTitle,
        url: movingPastCarbonNeutralImage,
      } = getComponent(section);
      return {
        title: movingPastCarbonNeutralTitle,
        media: movingPastCarbonNeutralImage,
        slug: "/moving-past-carbon-neutral",
      };
    case PageContentModel.onAccountQuickTicket:
      const { pageTitle: onAccountQuickTicketPage } = data;
      const {
        title: onAccountQuickTicketTitle = "",
        coverImage: onAccountQuickTicketImage,
      } = onAccountQuickTicketPage;
      return {
        documentId,
        title: onAccountQuickTicketTitle,
        media: onAccountQuickTicketImage?.url,
        slug: "/on-account-quick-tickets",
      };
    case PageContentModel.ourFare:
      const { pageTitle: ourFarePage } = data;
      const { title: ourFareTitle = "", coverImage: ourFareImage = "" } =
        ourFarePage;
      return {
        documentId,
        title: ourFareTitle,
        media: ourFareImage?.url,
        slug: "/fares",
      };
    case PageContentModel.parcelExpress:
      const { parcelExpressPage } = data;
      const { title: parcelExpressTitle, url: parcelExpressImage } =
        getComponent(parcelExpressPage);
      return {
        documentId,
        title: parcelExpressTitle,
        media: parcelExpressImage,
        slug: "/parcel-express",
      };
    case PageContentModel.schedule:
      const { pageTitle: schedulePage } = data;
      const { title: scheduleTitle = "", coverImage: scheduleImage = "" } =
        schedulePage;
      return {
        documentId,
        title: scheduleTitle,
        media: scheduleImage?.url,
        slug: "/schedules",
      };
    case PageContentModel.seatingOption:
      const { sections: seatingOptionSection } = data;
      const { title: seatingOptionTitle, url: seatingOptionImage } =
        getComponent(seatingOptionSection);
      return {
        documentId,
        title: seatingOptionTitle,
        media: seatingOptionImage,
        slug: "/seating-options",
      };
    case PageContentModel.standbyTravel:
      const { sections: standbyTravelSection } = data;
      const { title: stanbyTitle, url } = getComponent(standbyTravelSection);
      return {
        documentId,
        title: stanbyTitle,
        media: url,
        slug: "/stand-by-travel",
      };
    case PageContentModel.turboBucks:
      const { pageTitle: turboBucksTitle } = data;
      const {
        title: turboBucksPageTitle = "",
        coverImage: turboBucksImage = "",
      } = turboBucksTitle;
      return {
        documentId,
        title: turboBucksPageTitle,
        media: turboBucksImage?.url,
        slug: "/turbobucks-flight-credits",
      };
    default:
      return null;
  }
}
