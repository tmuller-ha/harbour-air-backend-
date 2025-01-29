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
  turboBucks = "turbo-bucks-flight-credit",
}

const pageType = "ComponentElementsTitleWithImage";

function getComponent(component) {
  switch (component.type) {
    case pageType:
      const { title, coverImage } = component || {};
      const { url } = coverImage || {};
      return { title, url };
  }
}

export function getPageContent(pageContentModel: string, data: any) {
  console.log("data", data);
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
    case PageContentModel.airCraftFleet:
      const { sections: airCraftFleetSection } = data;
      const { title: airCraftTitle, url: airCraftCoverImage } =
        getComponent(airCraftFleetSection);
      return {
        title: airCraftTitle,
        media: airCraftCoverImage,
        slug: "/aircraft-fleet",
      };
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
      const { title: charteredFlightTitle, url: charteredFlightMedia } =
        getComponent(sections);
      return {
        title: charteredFlightTitle,
        media: charteredFlightMedia,
        slug: "/chartered-flight",
      };
    case PageContentModel.carService:
      const { pageTitle: carServicePageTitle } = data;
      const { title: carServiceTitle, coverImage: carServiceImage } =
        carServicePageTitle;
      return {
        title: carServiceTitle,
        media: carServiceImage,
        slug: "/car-services",
      };
    case PageContentModel.career:
      const { careerPage } = data;
      const { title: careerTitle, url: careerImage } = getComponent(careerPage);
      return {
        title: careerTitle,
        media: careerImage,
        slug: "/careers",
      };
    case PageContentModel.communityInvolvement:
      const { sections: communityInvolvementSection } = data;
      const {
        title: communityInvolvementTitle,
        url: communityInvolvementMedia,
      } = getComponent(communityInvolvementSection);
      return {
        title: communityInvolvementTitle,
        media: communityInvolvementMedia,
        slug: "/chartered-flight",
      };
    case PageContentModel.extraAssistance:
      const { pageTitle:extraAssistancePageTitle} = data;
      const { title: extraAssistanceTitle, coverImage: extraAssistanceImage } = extraAssistancePageTitle;
      return {
        title: extraAssistanceTitle,
        media: extraAssistanceImage,
        slug: "/extra-assistance",
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
    case PageContentModel.contactUs:
      const { pageTitle: contactUsTitle } = data;
      const { title: contactUsPageTitle, coverImage: contactUsImage } =
        contactUsTitle;
      return {
        title: contactUsPageTitle,
        media: contactUsImage,
        slug: "/contact-us",
      };
    case PageContentModel.corporateResponsibility:
      const { pageTitle: corporateResponsibilityPageTitle } = data;
      const {
        title: corporateResponsibilityTitle,
        coverImage: corporateResponsibilityImage,
      } = corporateResponsibilityPageTitle;
      return {
        title: corporateResponsibilityTitle,
        media: corporateResponsibilityImage,
        slug: "/corporate-responsibility",
      };
    case PageContentModel.courtesyShuttle:
      const { courtesyShuttlePage } = data;
      const { title: courtesyShuttleTitle, url: courtesyShuttleImage } =
        getComponent(courtesyShuttlePage);
      return {
        title: courtesyShuttleTitle,
        media: courtesyShuttleImage,
        slug: "/courtesy-shuttles",
      };
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
 
    case PageContentModel.goingElectric:
      const { pageTitle:goingElectricPage } = data;
      const { title: goingElectricTitle, coverImage: goingElectricImage } = goingElectricPage;
      return {
        title: goingElectricTitle,
        media: goingElectricImage,
        slug: "/going-electric",
      };
    case PageContentModel.groupBooking:
      const { pageTitle:groupBookingPage } = data;
      const { title: groupBookingTitle, coverImage: groupBookingImage } = groupBookingPage;
      return {
        title: groupBookingTitle,
        media: groupBookingImage,
        slug: "/group-booking",
      };
    case PageContentModel.highFlyerReward:
      const { pageTitle:highFlyerRewardPage } = data;
      const { title: highFlyerRewardTitle, coverImage: highFlyerRewardImage } = highFlyerRewardPage;
      return {
        title: highFlyerRewardTitle,
        media: highFlyerRewardImage,
        slug: "/high-flyer-reward",
      };
    case PageContentModel.loyaltyProgram:
      const { pageTitle:loyaltyProgramPage } = data;
      const { title: loyaltyProgramTitle, coverImage: loyaltyProgramImage } = loyaltyProgramPage;
      return {
        title: loyaltyProgramTitle,
        media: loyaltyProgramImage,
        slug: "/loyalty-program",
      };
    case PageContentModel.luggage:
      const { luggagePage } = data;
      const { title: luggageTitle, coverImage: luggageImage } = luggagePage;
      return {
        title: luggageTitle,
        media: luggageImage,
        slug: "/luggages",
      };
    case PageContentModel.movingPastCarbonNeutral:
      const {section} = data;
      const {title: movingPastCarbonNeutralTitle, url: movingPastCarbonNeutralImage} = getComponent(section);
      return {
        title: movingPastCarbonNeutralTitle,
        media: movingPastCarbonNeutralImage,
        slug: "/moving-past-carbon-neutral",
      };
    case PageContentModel.onAccountQuickTicket:
      const { pageTitle:onAccountQuickTicketPage } = data;
      const { title: onAccountQuickTicketTitle, coverImage: onAccountQuickTicketImage } = onAccountQuickTicketPage;
      return {
        title: onAccountQuickTicketTitle,
        media: onAccountQuickTicketImage,
        slug: "/on-account-quick-tickets",
      };
    case PageContentModel.ourFare:
      const { pageTitle:ourFarePage } = data;
      const { title: ourFareTitle, coverImage: ourFareImage } = ourFarePage;
      return {
        title: ourFareTitle,
        media: ourFareImage,
        slug: "/fares",
      };
    case PageContentModel.parcelExpress:
      const { parcelExpressPage } = data;
      const { title: parcelExpressTitle, coverImage: parcelExpressImage } = parcelExpressPage;
      return {
        title: parcelExpressTitle,
        media: parcelExpressImage,
        slug: "/parcel-express",
      };
    case PageContentModel.schedule:
      const { pageTitle:schedulePage } = data;
      const { title: scheduleTitle, coverImage: scheduleImage } = schedulePage;
      return {
        title: scheduleTitle,
        media: scheduleImage,
        slug: "/schedules",
      };
    case PageContentModel.seatingOption:
      const { sections:seatingOptionSection } = data;
      const { title: seatingOptionTitle, url: seatingOptionImage } = getComponent(seatingOptionSection);
      return {
        title: seatingOptionTitle,
        media: seatingOptionImage,
        slug: "/seating-options",
      };
    case PageContentModel.standbyTravel:
      const { sections:standbyTravelSection } = data;
      const { title: standbyTravelTitle, url: standbyTravelImage } = getComponent(standbyTravelSection);
      return {
        title: standbyTravelTitle,
        media: standbyTravelImage,
        slug: "/standby-travel",
      };
    case PageContentModel.turboBucks:
      const { pageTitle:turboBucksTitle} = data;
      const { title: turboBucksPageTitle, coverImage: turboBucksImage } = turboBucksTitle;
      return {
        title: turboBucksPageTitle,
        media: turboBucksImage,
        slug: "/turbo-bucks",
      }; 
  }
}
