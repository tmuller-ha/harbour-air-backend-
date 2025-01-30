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
  safetyFirst = "safety-first",
  standbyTravel = "standby-travel",
  turboBucks = "turbobucks-flight-credit",
}

const pageType = "elements.title-with-image";
const titleWithDesc = "elements.title-with-description";
const tourPage = "main-tours.fare-section";
const titleWithCkEditor = "elements.title-with-ck-editor";
const standbyTravel = "standby-travel.standby-travel-info";

function getComponent(component) {
  const findComponent = (component, type) =>
    component.find((item) => item.__component === type);

  const pageTitle = findComponent(component, pageType);
  const tourPageTitle = findComponent(component, tourPage);
  const titleWithCKEditorComponent = findComponent(
    component,
    titleWithCkEditor
  );
  const { url } = pageTitle?.coverImage || {};
  return {
    title: pageTitle?.title || tourPageTitle?.title || "",
    description:
      tourPageTitle?.description || titleWithCKEditorComponent?.content || "",
    url: url || tourPageTitle?.image?.url,
  };
}

export function getPageContent(pageContentModel: string, data: any) {
  const { documentId, publishedAt } = data;
  switch (pageContentModel) {
    case PageContentModel.aboutUs:
      const { heading } = data;
      const { title, description, media } = heading;
      return {
        documentId,
        title,
        description,
        media: media.url,
        publishedAt,
        slug: "/about-us",
      };
    case PageContentModel.airCraftFleet:
      const { sections: airCraftFleetSection } = data;
      const {
        title: airCraftTitle,
        url: airCraftCoverImage,
        description: airCraftFleetDescription,
      } = getComponent(airCraftFleetSection);
      return {
        documentId,
        publishedAt,
        title: airCraftTitle,
        media: airCraftCoverImage,
        description: airCraftFleetDescription,
        slug: "/aircraft-fleet",
      };
    case PageContentModel.bookFlight:
      const { pageTitle } = data;
      const { title: bookFlightTitle = "", coverImage = "" } = pageTitle;
      return {
        documentId,
        publishedAt,
        title: bookFlightTitle,
        media: coverImage?.url || "",
        slug: "/book-flight",
      };
    case PageContentModel.charteredFlight:
      const { pageTitle: charteredFlightPageTitle, charteredFlightSection } =
        data;
      const {
        title: charteredFlightTitle = "",
        url: charteredFlightMedia = "",
      } = charteredFlightPageTitle;
      const { description: charteredFlightDescription } = getComponent(
        charteredFlightSection
      );
      return {
        documentId,
        publishedAt,
        title: charteredFlightTitle,
        media: charteredFlightMedia,
        description: charteredFlightDescription,
        slug: "/chartered-flight",
      };
    case PageContentModel.carService:
      const { pageTitle: carServicePageTitle, evoCar } = data;
      const { title: carServiceTitle = "", coverImage: carServiceImage = {} } =
        carServicePageTitle;
      const { description: carServiceDescription } = evoCar;
      return {
        documentId,
        publishedAt,
        title: carServiceTitle,
        media: carServiceImage?.url || "",
        description: carServiceDescription,
        slug: "/car-services",
      };
    case PageContentModel.canadianPassengerRight:
      const { sections: tariffSection } = data;
      const {
        title: tariffTitle,
        url: tariffUrl,
        description: tariffDescription,
      } = getComponent(tariffSection);
      return {
        documentId,
        publishedAt,
        title: tariffTitle,
        media: tariffUrl,
        description: tariffDescription,
        slug: "/tariff",
      };
    case PageContentModel.career:
      const { careerPage } = data;
      const {
        title: careerTitle = "",
        url: careerImage = "",
        description: careerDescription,
      } = getComponent(careerPage);
      return {
        documentId,
        publishedAt,
        title: careerTitle,
        media: careerImage,
        description: careerDescription,
        slug: "/careers",
      };
    case PageContentModel.communityInvolvement:
      const { sections: communityInvolvementSection } = data;
      const {
        title: communityInvolvementTitle = "",
        url: communityInvolvementMedia = "",
        description: communityInvolvementDescription,
      } = getComponent(communityInvolvementSection);
      return {
        documentId,
        publishedAt,
        title: communityInvolvementTitle,
        media: communityInvolvementMedia,
        description: communityInvolvementDescription,
        slug: "/community-involvement",
      };
    case PageContentModel.mainDeal:
      const { dealsBanner } = data;
      return {
        documentId,
        publishedAt,
        title: "Deals",
        media: dealsBanner?.url || "",
        slug: "/deals",
      };
    case PageContentModel.mainLocation:
      const { pageTitle: mainLocationPageTitle } = data;
      const {
        title: mainLocationTitle,
        description: mainLocationDescription,
        image,
      } = mainLocationPageTitle;
      return {
        documentId,
        publishedAt,
        title: mainLocationTitle,
        description: mainLocationDescription,
        media: image?.url || "",
        slug: "/locations",
      };
    case PageContentModel.mainTour:
      const { mainTourPage } = data;
      const {
        title: mainTourTitle,
        description: mainTourDescription,
        url: mainTourImage,
      } = getComponent(mainTourPage);
      return {
        documentId,
        publishedAt,
        title: mainTourTitle,
        description: mainTourDescription,
        media: mainTourImage,
        slug: "/tours",
      };
    case PageContentModel.extraAssistance:
      const { pageTitle: extraAssistancePageTitle } = data;
      const {
        title: extraAssistanceTitle = "",
        coverImage: extraAssistanceImage = {},
        description: extraAssistanceDescription,
      } = extraAssistancePageTitle;
      return {
        documentId,
        publishedAt,
        title: extraAssistanceTitle,
        media: extraAssistanceImage?.url || "",
        description: extraAssistanceDescription,
        slug: "/extra-assistance",
      };
    case PageContentModel.faq:
      const { title: faqTitle } = data;
      return {
        documentId,
        publishedAt,
        title: faqTitle,
        slug: "/faq",
      };
    case PageContentModel.contactUs:
      const { pageTitle: contactUsTitle, yourExperience } = data;
      const {
        title: contactUsPageTitle = "",
        coverImage: contactUsImage = {},
      } = contactUsTitle;
      const { description: contactUsDescription } = yourExperience;
      return {
        documentId,
        publishedAt,
        title: contactUsPageTitle,
        media: contactUsImage?.url || "",
        description: contactUsDescription,
        slug: "/contact-us",
      };
    case PageContentModel.corporateResponsibility:
      const { pageTitle: corporateResponsibilityPageTitle } = data;
      const {
        title: corporateResponsibilityTitle = "",
        media: corporateResponsibilityImage = {},
        description: corporateResponsibilityDescription,
      } = corporateResponsibilityPageTitle;
      return {
        documentId,
        publishedAt,
        title: corporateResponsibilityTitle,
        media: corporateResponsibilityImage?.url || "",
        description: corporateResponsibilityDescription,
        slug: "/corporate-responsibility",
      };
    case PageContentModel.courtesyShuttle:
      const { courtesyShuttlePage } = data;
      const {
        title: courtesyShuttleTitle = "",
        url: courtesyShuttleImage = "",
        description: courtesyShuttleDescription = "",
      } = getComponent(courtesyShuttlePage);
      return {
        documentId,
        publishedAt,
        title: courtesyShuttleTitle,
        media: courtesyShuttleImage,
        description: courtesyShuttleDescription,
        slug: "/courtesy-shuttles",
      };
    case PageContentModel.flightStatus:
      const { flighStatusTitle, flightStatusDescription } = data;
      const {
        title: flightStatusPageTitle = "",
        coverImage: flightStatusImage = {},
      } = flighStatusTitle;
      const { description: statusDescription = "" } =
        flightStatusDescription || {};
      return {
        documentId,
        publishedAt,
        title: flightStatusPageTitle,
        media: flightStatusImage?.url || "",
        description: statusDescription,
        slug: "/flight-status",
      };
    case PageContentModel.goingElectric:
      const { pageTitle: goingElectricPage } = data;
      const {
        title: goingElectricTitle,
        media: goingElectricImage,
        description: goingElectricDescription,
      } = goingElectricPage;
      return {
        documentId,
        publishedAt,
        title: goingElectricTitle,
        media: goingElectricImage?.url,
        description: goingElectricDescription,
        slug: "/going-electric",
      };
    case PageContentModel.groupBooking:
      const { pageTitle: groupBookingPage, pageDetails } = data;
      const { title: groupBookingTitle, coverImage: groupBookingImage } =
        groupBookingPage;
      const { content } = pageDetails;
      return {
        documentId,
        publishedAt,
        title: groupBookingTitle,
        media: groupBookingImage?.url,
        description: content,
        slug: "/group-bookings",
      };
    case PageContentModel.highFlyerReward:
      const { pageTitle: highFlyerRewardPage, highFlyerRewards } = data;
      const { title: highFlyerRewardTitle, coverImage: highFlyerRewardImage } =
        highFlyerRewardPage;
      const { description: highFlyerRewardDescription } =
        getComponent(highFlyerRewards);
      return {
        documentId,
        publishedAt,
        title: highFlyerRewardTitle,
        media: highFlyerRewardImage?.url,
        description: highFlyerRewardDescription,
        slug: "/high-flyer-rewards",
      };
    case PageContentModel.luggage:
      const { luggagePage, travellingExcessLuggageTab } = data;
      const { title: luggageTitle, url: luggageImage } =
        getComponent(luggagePage);
      const { description: luggageDescription = "" } =
        travellingExcessLuggageTab || {};
      return {
        documentId,
        publishedAt,
        title: luggageTitle,
        media: luggageImage,
        description: luggageDescription,
        slug: "/luggage",
      };
    case PageContentModel.movingPastCarbonNeutral:
      const { section } = data;
      const {
        title: movingPastCarbonNeutralTitle,
        url: movingPastCarbonNeutralImage,
        description: movingPastCarbonNeutralDescription,
      } = getComponent(section);
      return {
        documentId,
        publishedAt,
        title: movingPastCarbonNeutralTitle,
        media: movingPastCarbonNeutralImage,
        description: movingPastCarbonNeutralDescription,
        slug: "/moving-past-carbon-neutral",
      };
    case PageContentModel.onAccountQuickTicket:
      const { pageTitle: onAccountQuickTicketPage, aboutPage } = data;
      const {
        title: onAccountQuickTicketTitle = "",
        coverImage: onAccountQuickTicketImage,
      } = onAccountQuickTicketPage;
      const { content: onAccountDecription } = aboutPage;
      return {
        documentId,
        publishedAt,
        title: onAccountQuickTicketTitle,
        media: onAccountQuickTicketImage?.url,
        description: onAccountDecription,
        slug: "/on-account-quick-tickets",
      };
    case PageContentModel.ourFare:
      const { pageTitle: ourFarePage, farePageInfo } = data;
      const { title: ourFareTitle = "", coverImage: ourFareImage = "" } =
        ourFarePage;
      const { content: fareInfo } = farePageInfo;
      return {
        documentId,
        publishedAt,
        title: ourFareTitle,
        media: ourFareImage?.url,
        description: fareInfo,
        slug: "/fares",
      };
    case PageContentModel.parcelExpress:
      const { parcelExpressPage } = data;
      const {
        title: parcelExpressTitle,
        url: parcelExpressImage,
        description: parcelExpressDescription,
      } = getComponent(parcelExpressPage);
      return {
        documentId,
        publishedAt,
        title: parcelExpressTitle,
        media: parcelExpressImage,
        description: parcelExpressDescription,
        slug: "/parcel-express",
      };
    case PageContentModel.schedule:
      const { pageTitle: schedulePage, aboutPage: scheduleDescription } = data;
      const { title: scheduleTitle = "", coverImage: scheduleImage = "" } =
        schedulePage;
      const { content: schedulePageDescription } = scheduleDescription;
      return {
        documentId,
        publishedAt,
        title: scheduleTitle,
        media: scheduleImage?.url,
        description: schedulePageDescription,
        slug: "/schedules",
      };
    case PageContentModel.seatingOption:
      const { sections: seatingOptionSection } = data;
      const {
        title: seatingOptionTitle,
        url: seatingOptionImage,
        description: seatingDescription,
      } = getComponent(seatingOptionSection);
      return {
        documentId,
        publishedAt,
        title: seatingOptionTitle,
        media: seatingOptionImage,
        description: seatingDescription,
        slug: "/seating-options",
      };
    case PageContentModel.standbyTravel:
      const { sections: standbyTravelSection } = data;
      const {
        title: stanbyTitle,
        url,
        description: standbyTravelDescription,
      } = getComponent(standbyTravelSection);
      return {
        documentId,
        publishedAt,
        title: stanbyTitle,
        media: url,
        description: standbyTravelDescription,
        slug: "/standby-travel",
      };
    case PageContentModel.safetyFirst:
      const { safetyFirstPage } = data;
      const {
        title: safetyFirstTitle,
        url: safetyFirstImage,
        description: safetyFirstDescription,
      } = getComponent(safetyFirstPage);
      return {
        documentId,
        publishedAt,
        title: safetyFirstTitle,
        media: safetyFirstImage,
        description: safetyFirstDescription,
        slug: "/safety-first",
      };
    case PageContentModel.turboBucks:
      const { pageTitle: turboBucksTitle, turbobucksFlightCredits } = data;
      const {
        title: turboBucksPageTitle = "",
        coverImage: turboBucksImage = "",
      } = turboBucksTitle;
      const { description: turboBucksDescription } = getComponent(
        turbobucksFlightCredits
      );
      return {
        documentId,
        publishedAt,
        title: turboBucksPageTitle,
        media: turboBucksImage?.url,
        description: turboBucksDescription,
        slug: "/turbobucks-flight-credits",
      };
    default:
      return null;
  }
}
