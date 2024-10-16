import type { Struct, Schema } from '@strapi/strapi';

export interface StandbyTravelTravelTab extends Struct.ComponentSchema {
  collectionName: 'components_standby_travel_travel_tabs';
  info: {
    displayName: 'travelTab';
    description: '';
  };
  attributes: {
    decription: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    travelInfo: Schema.Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
    showDiscountedConformedTravel: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface StandbyTravelStandbyTravelInfo extends Struct.ComponentSchema {
  collectionName: 'components_standby_travel_standby_travel_infos';
  info: {
    displayName: 'standbyTravelInfo';
  };
  attributes: {
    overview: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface StandbyTravelMicrosoftForm extends Struct.ComponentSchema {
  collectionName: 'components_standby_travel_microsoft_forms';
  info: {
    displayName: 'Microsoft Form';
  };
  attributes: {
    formUrl: Schema.Attribute.String;
  };
}

export interface StandbyTravelHowToFly extends Struct.ComponentSchema {
  collectionName: 'components_standby_travel_how_to_flies';
  info: {
    displayName: 'How To Fly';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    criteria: Schema.Attribute.Component<'standby-travel.criteria', true>;
  };
}

export interface StandbyTravelHowToFlySection extends Struct.ComponentSchema {
  collectionName: 'components_standby_travel_how_to_fly_sections';
  info: {
    displayName: 'howToFlySection';
  };
  attributes: {
    title: Schema.Attribute.String;
    criteria: Schema.Attribute.Component<'standby-travel.criteria', true>;
  };
}

export interface StandbyTravelDiscountedTravelForm
  extends Struct.ComponentSchema {
  collectionName: 'components_standby_travel_discounted_travel_forms';
  info: {
    displayName: 'Discounted Travel Form';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface StandbyTravelCriteria extends Struct.ComponentSchema {
  collectionName: 'components_standby_travel_criteria';
  info: {
    displayName: 'Criteria';
    description: '';
  };
  attributes: {
    eligibilityCriteria: Schema.Attribute.String & Schema.Attribute.Required;
    reference: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ToursHeroDescription extends Struct.ComponentSchema {
  collectionName: 'components_tours_hero_descriptions';
  info: {
    displayName: 'HeroDescription';
    description: '';
  };
  attributes: {
    heroDescription: Schema.Attribute.Blocks;
    show: Schema.Attribute.Boolean;
  };
}

export interface ToursFeaturedTours extends Struct.ComponentSchema {
  collectionName: 'components_tours_featured_tours';
  info: {
    displayName: 'FeaturedTours';
    description: '';
  };
  attributes: {
    featuredTourTitle: Schema.Attribute.String;
    featuredTour: Schema.Attribute.Relation<
      'oneToOne',
      'api::featured-tour.featured-tour'
    >;
    show: Schema.Attribute.Boolean;
  };
}

export interface ToursFareDetails extends Struct.ComponentSchema {
  collectionName: 'components_tours_fare_details';
  info: {
    displayName: 'fareDetails';
  };
  attributes: {
    fareText: Schema.Attribute.String;
    fare: Schema.Attribute.String;
    person: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaKeyword: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    canonicalUrl: Schema.Attribute.String;
    openGraphImage: Schema.Attribute.Media<'images'>;
    openGraphTitle: Schema.Attribute.String;
    openGraphDescription: Schema.Attribute.Text;
    twitterCardImage: Schema.Attribute.Media<'images'>;
    twitterCardTitle: Schema.Attribute.String;
    twitterCardDescription: Schema.Attribute.Text;
    additional: Schema.Attribute.Component<'seo.additional', true>;
  };
}

export interface SeoAnalytics extends Struct.ComponentSchema {
  collectionName: 'components_seo_analytics';
  info: {
    displayName: 'Analytics';
  };
  attributes: {
    googleAnalyticsTrackingId: Schema.Attribute.String;
    googleTagManagerId: Schema.Attribute.String;
    hotjarSiteId: Schema.Attribute.String;
  };
}

export interface SeoAdditional extends Struct.ComponentSchema {
  collectionName: 'components_seo_additionals';
  info: {
    displayName: 'additional';
  };
  attributes: {
    key: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface QuickTicketQuickTicketForm extends Struct.ComponentSchema {
  collectionName: 'components_quick_ticket_quick_ticket_forms';
  info: {
    displayName: 'QuickTicketForm';
    description: '';
  };
  attributes: {
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    emailOption: Schema.Attribute.Relation<
      'oneToOne',
      'api::email-option.email-option'
    >;
  };
}

export interface OurStoryStory extends Struct.ComponentSchema {
  collectionName: 'components_our_story_stories';
  info: {
    displayName: 'Story';
    icon: 'chartCircle';
  };
  attributes: {
    decade: Schema.Attribute.String;
    details: Schema.Attribute.Component<'our-story.details', true>;
  };
}

export interface OurStoryDetails extends Struct.ComponentSchema {
  collectionName: 'components_our_story_details';
  info: {
    displayName: 'details';
    icon: 'earth';
    description: '';
  };
  attributes: {
    year: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ParcelExpressShippingCost extends Struct.ComponentSchema {
  collectionName: 'components_parcel_express_shipping_costs';
  info: {
    displayName: 'ShippingCost';
    description: '';
  };
  attributes: {
    imageSection: Schema.Attribute.Component<'elements.title-with-image', true>;
    topSection: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ParcelExpressRates extends Struct.ComponentSchema {
  collectionName: 'components_parcel_express_rates';
  info: {
    displayName: 'Rates';
    description: '';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    details: Schema.Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
  };
}

export interface ParcelExpressParcelFaq extends Struct.ComponentSchema {
  collectionName: 'components_parcel_express_parcel_faqs';
  info: {
    displayName: 'ParcelFaq';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    show: Schema.Attribute.Boolean;
    parcelAccordion: Schema.Attribute.Component<
      'common.accordian-details',
      true
    >;
    accordionTitle: Schema.Attribute.String;
  };
}

export interface ParcelExpressHowToAccordion extends Struct.ComponentSchema {
  collectionName: 'components_parcel_express_how_to_accordions';
  info: {
    displayName: 'howToAccordion';
    description: '';
  };
  attributes: {
    ckEditorSection: Schema.Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
    topSection: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ParcelExpressFaq extends Struct.ComponentSchema {
  collectionName: 'components_parcel_express_faqs';
  info: {
    displayName: 'Faq';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    questionTitle: Schema.Attribute.String;
    faq_contents: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-content.faq-content'
    >;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SchedulesSchedules extends Struct.ComponentSchema {
  collectionName: 'components_schedules_schedules';
  info: {
    displayName: 'Schedules';
    description: '';
  };
  options: {
    privateAttributes: ['title'];
  };
  attributes: {
    documents: Schema.Attribute.Relation<'oneToMany', 'api::document.document'>;
    departure: Schema.Attribute.Relation<
      'oneToOne',
      'api::destination.destination'
    > &
      Schema.Attribute.Required;
    arrival: Schema.Attribute.Relation<
      'oneToOne',
      'api::destination.destination'
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Private;
  };
}

export interface OurPromisesOurValues extends Struct.ComponentSchema {
  collectionName: 'components_our_promises_our_values';
  info: {
    displayName: 'Our Values';
    icon: 'command';
  };
  attributes: {
    title: Schema.Attribute.String;
    values: Schema.Attribute.Component<'elements.title-with-description', true>;
  };
}

export interface OurPromisesMissionAndVision extends Struct.ComponentSchema {
  collectionName: 'components_our_promises_mission_and_visions';
  info: {
    displayName: 'Mission And Vision';
  };
  attributes: {
    mission: Schema.Attribute.Component<'elements.title-with-ck-editor', false>;
    vision: Schema.Attribute.Component<'elements.title-with-ck-editor', false>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface OurPromisesHaPromise extends Struct.ComponentSchema {
  collectionName: 'components_our_promises_ha_promises';
  info: {
    displayName: 'HA Promise';
  };
  attributes: {
    details: Schema.Attribute.Component<'elements.title-with-ck-editor', false>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface MobilityImages extends Struct.ComponentSchema {
  collectionName: 'components_mobility_images';
  info: {
    displayName: 'Images';
    description: '';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'videos', true>;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface MobilityHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_mobility_hero_sections';
  info: {
    displayName: 'HeroSection';
    description: '';
  };
  attributes: {
    heroSection: Schema.Attribute.Component<
      'elements.title-with-description',
      false
    >;
    image: Schema.Attribute.Media<'videos'>;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface OurFaresFareHelperContent extends Struct.ComponentSchema {
  collectionName: 'components_our_fares_fare_helper_contents';
  info: {
    displayName: 'Fare Helper Content';
    description: '';
  };
  attributes: {
    value: Schema.Attribute.String & Schema.Attribute.Required;
    helperInfo: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface OurFaresFareDetails extends Struct.ComponentSchema {
  collectionName: 'components_our_fares_fare_details';
  info: {
    displayName: 'Fare Details';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    content: Schema.Attribute.Component<'our-fares.fare-details-content', true>;
  };
}

export interface OurFaresFareDetailsContent extends Struct.ComponentSchema {
  collectionName: 'components_our_fares_fare_details_contents';
  info: {
    displayName: 'Fare Details Content';
    icon: 'code';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    light: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
    comfort: Schema.Attribute.String & Schema.Attribute.Required;
    flex: Schema.Attribute.String & Schema.Attribute.Required;
    valueSuperScript: Schema.Attribute.String;
    lightSuperScript: Schema.Attribute.String;
    comfortSuperScript: Schema.Attribute.String;
    flexSuperScript: Schema.Attribute.String;
    subLabel: Schema.Attribute.String;
  };
}

export interface MainToursTourCards extends Struct.ComponentSchema {
  collectionName: 'components_main_tours_tour_cards';
  info: {
    displayName: 'TourCards';
    icon: 'crown';
    description: '';
  };
  attributes: {
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    tourPlaces: Schema.Attribute.Component<'elements.tour-card', false>;
  };
}

export interface MainToursFeaturedTours extends Struct.ComponentSchema {
  collectionName: 'components_main_tours_featured_tours';
  info: {
    displayName: 'FeaturedTours';
    icon: 'crown';
    description: '';
  };
  attributes: {
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    featuredTour: Schema.Attribute.Relation<
      'oneToOne',
      'api::featured-tour.featured-tour'
    >;
    featuredTourTitle: Schema.Attribute.String;
  };
}

export interface MainToursFareSection extends Struct.ComponentSchema {
  collectionName: 'components_main_tours_fare_sections';
  info: {
    displayName: 'TourLocations';
    description: '';
  };
  attributes: {
    tourLocations: Schema.Attribute.Relation<
      'oneToMany',
      'api::tour-location.tour-location'
    >;
    pageTitle: Schema.Attribute.Component<
      'elements.title-with-media-and-button',
      false
    >;
  };
}

export interface MainLocationLocations extends Struct.ComponentSchema {
  collectionName: 'components_main_location_locations';
  info: {
    displayName: 'locations';
    description: '';
  };
  attributes: {
    location: Schema.Attribute.Relation<'oneToOne', 'api::location.location'>;
    pageTitle: Schema.Attribute.Component<
      'elements.title-with-media-and-button',
      false
    >;
  };
}

export interface MetaDataMetaData extends Struct.ComponentSchema {
  collectionName: 'components_meta_data_meta_datas';
  info: {
    displayName: 'Meta';
    description: '';
  };
  attributes: {
    showSideBookingWidget: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    helpSection: Schema.Attribute.Component<'common.help', false>;
  };
}

export interface LuggageTravellingWithExcessLuggage
  extends Struct.ComponentSchema {
  collectionName: 'components_luggage_travelling_with_excess_luggages';
  info: {
    displayName: 'Travelling with Excess Luggage';
    description: '';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    infoText: Schema.Attribute.Blocks;
  };
}

export interface LuggageSpecial extends Struct.ComponentSchema {
  collectionName: 'components_luggage_special_s';
  info: {
    displayName: 'Special Luggage & Equipment';
    description: '';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    luggageAccordion: Schema.Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
  };
}

export interface LuggageLuggageDimensionsTable extends Struct.ComponentSchema {
  collectionName: 'components_luggage_luggage_dimensions_tables';
  info: {
    displayName: 'Luggage Dimensions Table';
    description: '';
  };
  attributes: {
    aircraft: Schema.Attribute.String;
    width: Schema.Attribute.String;
    height: Schema.Attribute.String;
    breadth: Schema.Attribute.String;
  };
}

export interface LuggageLuggageAllowance extends Struct.ComponentSchema {
  collectionName: 'components_luggage_luggage_allowances';
  info: {
    displayName: 'Luggage Allowance';
    description: '';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    show: Schema.Attribute.Boolean;
    luggageDimentionTitle: Schema.Attribute.String;
    luggageDimentionTable: Schema.Attribute.Component<
      'luggage.luggage-dimensions-table',
      true
    >;
    infoText: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    tableDescription: Schema.Attribute.Component<
      'our-fares.fare-helper-content',
      true
    >;
  };
}

export interface LuggageLuggageAllowanceTable extends Struct.ComponentSchema {
  collectionName: 'components_luggage_luggage_allowance_tables';
  info: {
    displayName: 'Luggage Allowance Table';
    description: '';
  };
  attributes: {
    light: Schema.Attribute.String;
    value: Schema.Attribute.String;
    comfort: Schema.Attribute.String;
    flex: Schema.Attribute.String;
    noValue: Schema.Attribute.Blocks;
  };
}

export interface LuggageHeroDescription extends Struct.ComponentSchema {
  collectionName: 'components_luggage_hero_descriptions';
  info: {
    displayName: 'HeroDescription';
    description: '';
  };
  attributes: {
    heroDescription: Schema.Attribute.Blocks;
    show: Schema.Attribute.Boolean;
  };
}

export interface MainDealsDeals extends Struct.ComponentSchema {
  collectionName: 'components_main_deals_deals';
  info: {
    displayName: 'Deals';
    description: '';
  };
  attributes: {
    dealMedia: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    destination: Schema.Attribute.String & Schema.Attribute.Required;
    travelDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    price: Schema.Attribute.String & Schema.Attribute.Required;
    departingText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Departing'>;
    origin: Schema.Attribute.String & Schema.Attribute.Required;
    taxes: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Price all-in incl. taxes and fees'>;
    termsApply: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Terms and conditions apply.'>;
    dealTitle: Schema.Attribute.Text & Schema.Attribute.Required;
    dealDate: Schema.Attribute.String & Schema.Attribute.Required;
    bookNowButton: Schema.Attribute.Component<'elements.button', false>;
    dealDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    dealOverview: Schema.Attribute.Text & Schema.Attribute.Required;
    termsAndConditionsText: Schema.Attribute.Text;
    terms: Schema.Attribute.Component<'elements.drop-down-data', true>;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    calendarIcon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface LoyaltyProgramTurbobucksPricing
  extends Struct.ComponentSchema {
  collectionName: 'components_loyalty_program_turbobucks_pricings';
  info: {
    displayName: 'Turbobucks Pricing';
  };
  attributes: {
    details: Schema.Attribute.Component<
      'loyalty-program.pricing-structure',
      true
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LoyaltyProgramPricingStructure extends Struct.ComponentSchema {
  collectionName: 'components_loyalty_program_pricing_structures';
  info: {
    displayName: 'Pricing Structure';
  };
  attributes: {
    level: Schema.Attribute.String & Schema.Attribute.Required;
    priceRange: Schema.Attribute.String & Schema.Attribute.Required;
    Bonus: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LoyaltyProgramHighFlyerRewardsForm
  extends Struct.ComponentSchema {
  collectionName: 'components_loyalty_program_high_flyer_rewards_forms';
  info: {
    displayName: 'High Flyer Rewards Form';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    membershipTypeQuote: Schema.Attribute.Text;
    emailOption: Schema.Attribute.Relation<
      'oneToOne',
      'api::email-option.email-option'
    >;
  };
}

export interface LoyaltyProgramHighFlyerMembershipLevels
  extends Struct.ComponentSchema {
  collectionName: 'components_loyalty_program_high_flyer_membership_levels';
  info: {
    displayName: 'High Flyer Membership Levels';
  };
  attributes: {
    overview: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    levels: Schema.Attribute.Component<'elements.title-with-ck-editor', true>;
  };
}

export interface LoyaltyProgramHighFlyerForm extends Struct.ComponentSchema {
  collectionName: 'components_loyalty_program_high_flyer_forms';
  info: {
    displayName: 'Turbobucks Form';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    existingCustomerQuote: Schema.Attribute.Text;
    emailOption: Schema.Attribute.Relation<
      'oneToOne',
      'api::email-option.email-option'
    >;
  };
}

export interface InsideLocationGuide extends Struct.ComponentSchema {
  collectionName: 'components_inside_location_guides';
  info: {
    displayName: 'Guide';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    moreArticles: Schema.Attribute.String;
    moreArticlesSlug: Schema.Attribute.String;
    guideInformations: Schema.Attribute.Component<
      'inside-location.guide-information',
      true
    >;
    show: Schema.Attribute.Boolean;
  };
}

export interface InsideLocationGuideInformation extends Struct.ComponentSchema {
  collectionName: 'components_inside_location_guide_informations';
  info: {
    displayName: 'Image Section';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Text;
    slug: Schema.Attribute.String;
  };
}

export interface InsideLocationAddress extends Struct.ComponentSchema {
  collectionName: 'components_inside_location_addresses';
  info: {
    displayName: 'Address';
    description: '';
  };
  attributes: {
    addressTitle: Schema.Attribute.String;
    addressDetails: Schema.Attribute.Blocks;
    addressMapUrl: Schema.Attribute.Text;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    googleMapUrl: Schema.Attribute.Text;
  };
}

export interface InsideLocationAdditionalinfoDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_inside_location_additionalinfo_details';
  info: {
    displayName: 'AdditionalInformationDetails';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    additionalInformationImage: Schema.Attribute.Component<
      'inside-location.guide-information',
      true
    >;
    show: Schema.Attribute.Boolean;
    moreButton: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface HomeNews extends Struct.ComponentSchema {
  collectionName: 'components_home_news';
  info: {
    displayName: 'News';
    description: '';
  };
  attributes: {
    news: Schema.Attribute.Relation<'oneToMany', 'api::news.news'>;
    moreDetails: Schema.Attribute.Component<'elements.button', false>;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeTours extends Struct.ComponentSchema {
  collectionName: 'components_home_home_tours';
  info: {
    displayName: 'Tours';
    description: '';
  };
  attributes: {
    tours: Schema.Attribute.Relation<
      'oneToMany',
      'api::tours-detail.tours-detail'
    >;
    title: Schema.Attribute.String;
    show: Schema.Attribute.Boolean;
  };
}

export interface HomeHomeLocations extends Struct.ComponentSchema {
  collectionName: 'components_home_home_locations';
  info: {
    displayName: 'Locations';
    description: '';
  };
  attributes: {
    locations: Schema.Attribute.Relation<'oneToMany', 'api::location.location'>;
    title: Schema.Attribute.String;
    show: Schema.Attribute.Boolean;
  };
}

export interface HomeHomeInstagram extends Struct.ComponentSchema {
  collectionName: 'components_blocks_home_instagrams';
  info: {
    displayName: 'HomeInstagram';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    followUs: Schema.Attribute.Component<'elements.button', false>;
    show: Schema.Attribute.Boolean;
    instaImages: Schema.Attribute.Component<'elements.instagram-images', true>;
    quote: Schema.Attribute.Text;
    authorName: Schema.Attribute.String;
    authorAddress: Schema.Attribute.String;
    instaProfileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface HomeHomeCarousel extends Struct.ComponentSchema {
  collectionName: 'components_home_home_carousels';
  info: {
    displayName: 'HomeCarousel';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    btnText: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    desktopImg: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    imageLink: Schema.Attribute.String;
    tabletImg: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    mobileImg: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface HomeHeroCarousel extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_carousels';
  info: {
    displayName: 'HeroCarousel';
    description: '';
  };
  attributes: {
    show: Schema.Attribute.Boolean;
    carousels: Schema.Attribute.Component<'home.home-carousel', true>;
  };
}

export interface HomeGrabDeals extends Struct.ComponentSchema {
  collectionName: 'components_blocks_grab_deals';
  info: {
    displayName: 'GrabDeals';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    show: Schema.Attribute.Boolean;
    moreDeals: Schema.Attribute.Component<'elements.button', false>;
    cardDeals: Schema.Attribute.Relation<'oneToMany', 'api::deal.deal'>;
  };
}

export interface HomeDescription extends Struct.ComponentSchema {
  collectionName: 'components_blocks_descriptions';
  info: {
    displayName: 'HarbourAirDescription';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    highlights: Schema.Attribute.Component<
      'elements.harbour-air-services',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
    show: Schema.Attribute.Boolean;
  };
}

export interface HomeArticleCarousel extends Struct.ComponentSchema {
  collectionName: 'components_home_article_carousels';
  info: {
    displayName: 'ArticleCarousel';
    description: '';
  };
  attributes: {
    show: Schema.Attribute.Boolean;
    article: Schema.Attribute.Component<'elements.harbour-air-article', true>;
    moreDetails: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface GoingElectricSpecifications extends Struct.ComponentSchema {
  collectionName: 'components_going_electric_specifications';
  info: {
    displayName: 'Specifications';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    specificationDetails: Schema.Attribute.Component<
      'going-electric.specification-details',
      true
    >;
    specificationImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    show: Schema.Attribute.Boolean;
  };
}

export interface GoingElectricSpecificationDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_going_electric_specification_details';
  info: {
    displayName: 'Specification Details';
    description: '';
  };
  attributes: {
    specifications: Schema.Attribute.String & Schema.Attribute.Required;
    standardRange: Schema.Attribute.String & Schema.Attribute.Required;
    extendedRange: Schema.Attribute.String & Schema.Attribute.Required;
    performance: Schema.Attribute.String & Schema.Attribute.Required;
    pistonBeaver: Schema.Attribute.String & Schema.Attribute.Required;
    haEBeaver: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GoingElectricGoingElectringInquires
  extends Struct.ComponentSchema {
  collectionName: 'components_going_electric_going_electring_inquires';
  info: {
    displayName: 'Going Electring Inquires';
    icon: 'connector';
    description: '';
  };
  attributes: {
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    author: Schema.Attribute.String & Schema.Attribute.Required;
    inquiriesFormTitle: Schema.Attribute.String;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showForm: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    formDescription: Schema.Attribute.Blocks;
    emailOption: Schema.Attribute.Relation<
      'oneToOne',
      'api::email-option.email-option'
    >;
  };
}

export interface HeaderMenuDropdown extends Struct.ComponentSchema {
  collectionName: 'components_header_menu_dropdowns';
  info: {
    displayName: 'Menu Dropdown';
  };
  attributes: {
    dropdownTitle: Schema.Attribute.String;
    dropdown_links: Schema.Attribute.Relation<
      'oneToMany',
      'api::dropdown-menu.dropdown-menu'
    >;
    dropdown_cards: Schema.Attribute.Relation<
      'oneToMany',
      'api::menu-image-link.menu-image-link'
    >;
  };
}

export interface HeaderMediaLinks extends Struct.ComponentSchema {
  collectionName: 'components_header_media_links';
  info: {
    displayName: 'Media Link';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeaderLink extends Struct.ComponentSchema {
  collectionName: 'components_header_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    show: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FurtherQuestionsContactForm extends Struct.ComponentSchema {
  collectionName: 'components_further_questions_contact_forms';
  info: {
    displayName: 'Contact Form';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    show: Schema.Attribute.Boolean;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    emailOptions: Schema.Attribute.Relation<
      'oneToMany',
      'api::email-option.email-option'
    >;
  };
}

export interface FormEmailForm extends Struct.ComponentSchema {
  collectionName: 'components_form_email_forms';
  info: {
    displayName: 'Email Form';
    description: '';
  };
  attributes: {
    email: Schema.Attribute.String;
  };
}

export interface FormCarServiceHireForm extends Struct.ComponentSchema {
  collectionName: 'components_form_car_service_hire_forms';
  info: {
    displayName: 'Specific Email Form';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    show: Schema.Attribute.Boolean;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    emailOption: Schema.Attribute.Relation<
      'oneToOne',
      'api::email-option.email-option'
    >;
  };
}

export interface ExtraAssistanceFiles extends Struct.ComponentSchema {
  collectionName: 'components_extra_assistance_files';
  info: {
    displayName: 'Files';
    description: '';
  };
  attributes: {
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    document: Schema.Attribute.Relation<'oneToOne', 'api::document.document'>;
  };
}

export interface ExtraAssistanceCards extends Struct.ComponentSchema {
  collectionName: 'components_extra_assistance_cards';
  info: {
    displayName: 'cards';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    slug: Schema.Attribute.String;
  };
}

export interface ExtraAssistanceAssistance extends Struct.ComponentSchema {
  collectionName: 'components_extra_assistance_assistances';
  info: {
    displayName: 'assistance';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    assistanceCard: Schema.Attribute.Component<'extra-assistance.cards', true>;
  };
}

export interface ExtraAssistanceAccordionWithEditor
  extends Struct.ComponentSchema {
  collectionName: 'components_extra_assistance_accordion_with_editors';
  info: {
    displayName: 'Accordion With Editor';
    description: '';
  };
  attributes: {
    accordion: Schema.Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
    show: Schema.Attribute.Boolean;
  };
}

export interface ElementsTripAdvisor extends Struct.ComponentSchema {
  collectionName: 'components_elements_trip_advisors';
  info: {
    displayName: 'TripAdvisor';
  };
  attributes: {
    tripAdvisorLogo: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    comment: Schema.Attribute.String;
    authorName: Schema.Attribute.String;
    backgroundImage: Schema.Attribute.Media<'images'>;
    quoteImage: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsTourCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_tour_cards';
  info: {
    displayName: 'TourCard';
    description: '';
    icon: 'car';
  };
  attributes: {
    name: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    shortDescription: Schema.Attribute.String;
    learnMoreBtnText: Schema.Attribute.String;
  };
}

export interface ElementsTitleWithYoutubeLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_title_with_youtube_links';
  info: {
    displayName: 'Titlewith Link';
    description: '';
  };
  attributes: {
    tabName: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ElementsTitleWithMediaAndButton
  extends Struct.ComponentSchema {
  collectionName: 'components_elements_title_with_media_and_buttons';
  info: {
    displayName: 'Title With Media And Button';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    show: Schema.Attribute.Boolean;
    showButton: Schema.Attribute.Boolean;
  };
}

export interface ElementsTitleWithImage extends Struct.ComponentSchema {
  collectionName: 'components_elements_title_with_images';
  info: {
    displayName: 'Title With Image';
    icon: 'seed';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    coverImage: Schema.Attribute.Media<'images'>;
    show: Schema.Attribute.Boolean;
    opacity: Schema.Attribute.Enumeration<
      [
        'opacity-0',
        'opacity-5',
        'opacity-10',
        'opacity-15',
        'opacity-20',
        'opacity-25',
        'opacity-30',
        'opacity-35',
        'opacity-40',
        'opacity-45',
        'opacity-50',
        'opacity-55',
        'opacity-60',
        'opacity-65',
        'opacity-70',
        'opacity-75',
        'opacity-80',
        'opacity-85',
        'opacity-90',
        'opacity-95',
        'opacity-100',
      ]
    > &
      Schema.Attribute.DefaultTo<'opacity-50'>;
    mobileImagePosition: Schema.Attribute.Enumeration<
      ['left', 'right', 'center']
    >;
  };
}

export interface ElementsTitleWithDescription extends Struct.ComponentSchema {
  collectionName: 'components_elements_title_with_descriptions';
  info: {
    displayName: 'Title With Description';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    show: Schema.Attribute.Boolean;
    componentAlignment: Schema.Attribute.Enumeration<['column', 'row']>;
  };
}

export interface ElementsTitleWithDescAndMultiMedia
  extends Struct.ComponentSchema {
  collectionName: 'components_elements_title_with_desc_and_multi_medias';
  info: {
    displayName: 'Title With Desc And Multi media';
  };
  attributes: {
    show: Schema.Attribute.Boolean & Schema.Attribute.Required;
    title: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    media: Schema.Attribute.Media<'images', true>;
    media_url: Schema.Attribute.String;
  };
}

export interface ElementsTitleWithDescAndImage extends Struct.ComponentSchema {
  collectionName: 'components_elements_title_with_desc_and_images';
  info: {
    displayName: 'Title With Desc And media';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    media: Schema.Attribute.Media<'images' | 'videos'>;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    media_url: Schema.Attribute.String;
  };
}

export interface ElementsTitleWithCkEditor extends Struct.ComponentSchema {
  collectionName: 'components_elements_title_with_ck_editors';
  info: {
    displayName: 'Title With CKEditor';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ElementsTitleDescWithImageLinks
  extends Struct.ComponentSchema {
  collectionName: 'components_elements_title_desc_with_image_links';
  info: {
    displayName: 'Title Desc With ImageLinks';
  };
  attributes: {
    images: Schema.Attribute.Component<'elements.instagram-images', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ElementsTextWithImage extends Struct.ComponentSchema {
  collectionName: 'components_elements_text_with_images';
  info: {
    displayName: 'Text With Image';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ElementsTableFields extends Struct.ComponentSchema {
  collectionName: 'components_elements_table_fields';
  info: {
    displayName: 'tableFields';
  };
  attributes: {
    tableInformation: Schema.Attribute.Component<
      'elements.pricing-table',
      true
    >;
  };
}

export interface ElementsTableDetails extends Struct.ComponentSchema {
  collectionName: 'components_elements_table_details';
  info: {
    displayName: 'tableDetails';
  };
  attributes: {
    position_Column: Schema.Attribute.String;
    application_Deadline_Column: Schema.Attribute.String;
    location_Column: Schema.Attribute.String;
  };
}

export interface ElementsPricingTable extends Struct.ComponentSchema {
  collectionName: 'components_elements_pricing_tables';
  info: {
    displayName: 'pricingTable';
    description: '';
  };
  attributes: {
    destination_Column: Schema.Attribute.String;
    starting_At_Column: Schema.Attribute.String;
  };
}

export interface ElementsPdfLinks extends Struct.ComponentSchema {
  collectionName: 'components_elements_pdf_links';
  info: {
    displayName: 'PdfLinks';
    icon: 'filePdf';
    description: '';
  };
  attributes: {
    fileName: Schema.Attribute.String & Schema.Attribute.Required;
    file: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
  };
}

export interface ElementsInstagramImages extends Struct.ComponentSchema {
  collectionName: 'components_elements_instagram_images';
  info: {
    displayName: 'Image With Link';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    slug: Schema.Attribute.String;
  };
}

export interface ElementsHarbourAirServices extends Struct.ComponentSchema {
  collectionName: 'components_elements_harbour_air_services';
  info: {
    displayName: 'Image With Description';
    description: '';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsHarbourAirArticle extends Struct.ComponentSchema {
  collectionName: 'components_home_harbour_air_articles';
  info: {
    displayName: 'Article';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    buttonSlug: Schema.Attribute.String;
  };
}

export interface ElementsGallery extends Struct.ComponentSchema {
  collectionName: 'components_elements_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    images: Schema.Attribute.Component<'elements.instagram-images', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ElementsDropDownData extends Struct.ComponentSchema {
  collectionName: 'components_elements_drop_down_data';
  info: {
    displayName: 'dropDownData';
    description: '';
  };
  attributes: {
    data: Schema.Attribute.String;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ElementsAccordion extends Struct.ComponentSchema {
  collectionName: 'components_elements_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    accordionDetails: Schema.Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ElementsAccordionWithCkEditor extends Struct.ComponentSchema {
  collectionName: 'components_elements_accordion_with_ck_editors';
  info: {
    displayName: 'Accordion With CKEditor';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String;
    documents: Schema.Attribute.Relation<'oneToMany', 'api::document.document'>;
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface CommunityInvolvementCommunityTabs
  extends Struct.ComponentSchema {
  collectionName: 'components_community_involvement_community_tabs';
  info: {
    displayName: 'Community Tabs';
  };
  attributes: {
    communityTabs: Schema.Attribute.Component<
      'elements.title-with-desc-and-image',
      true
    >;
  };
}

export interface FaqQuestions extends Struct.ComponentSchema {
  collectionName: 'components_faq_questions';
  info: {
    displayName: 'Questions';
    description: '';
  };
  attributes: {
    question: Schema.Attribute.String & Schema.Attribute.Required;
    faq_content: Schema.Attribute.Relation<
      'oneToOne',
      'api::faq-content.faq-content'
    >;
  };
}

export interface FaqKnowBefore extends Struct.ComponentSchema {
  collectionName: 'components_faq_know_befores';
  info: {
    displayName: 'knowBefore';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    showImage: Schema.Attribute.Boolean;
  };
}

export interface FaqButtonWithBoolean extends Struct.ComponentSchema {
  collectionName: 'components_faq_button_with_booleans';
  info: {
    displayName: 'ButtonWithBoolean';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    showButton: Schema.Attribute.Boolean;
  };
}

export interface FaqAccordion extends Struct.ComponentSchema {
  collectionName: 'components_faq_accordions';
  info: {
    displayName: 'Accordion';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    show: Schema.Attribute.Boolean;
    accordionData: Schema.Attribute.Component<'faq.accordion-data', true>;
  };
}

export interface FaqAccordionData extends Struct.ComponentSchema {
  collectionName: 'components_faq_accordion_data';
  info: {
    displayName: 'AccordionDataSection';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    showImage: Schema.Attribute.Boolean;
    faq_contents: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-content.faq-content'
    >;
  };
}

export interface FooterLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    link: Schema.Attribute.String;
    slug: Schema.Attribute.String;
  };
}

export interface FooterFooterStayUpdate extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_stay_updates';
  info: {
    displayName: 'FooterStayUpdate';
  };
  attributes: {
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    unsubscribeText: Schema.Attribute.String;
    subscribe: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface FooterFooterLogos extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_logos';
  info: {
    displayName: 'FooterLogos';
    description: '';
  };
  attributes: {
    logos: Schema.Attribute.Media<'images'>;
    slug: Schema.Attribute.String;
  };
}

export interface FooterFooterLogoLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_logo_links';
  info: {
    displayName: 'FooterLogoLinks';
  };
  attributes: {
    title: Schema.Attribute.String;
    logos: Schema.Attribute.Component<'footer.footer-logos', true>;
  };
}

export interface FooterFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_links';
  info: {
    displayName: 'FooterLinks';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    links: Schema.Attribute.Component<'footer.link', true>;
  };
}

export interface FooterBottomContent extends Struct.ComponentSchema {
  collectionName: 'components_footer_bottom_contents';
  info: {
    displayName: 'bottomContent';
  };
  attributes: {
    harbourairLogo: Schema.Attribute.Media<'images'>;
    copyrights: Schema.Attribute.String;
    bottomLinks: Schema.Attribute.Component<'footer.link', true>;
  };
}

export interface CharteredFlightsPagePricingTab extends Struct.ComponentSchema {
  collectionName: 'components_chartered_flights_page_pricing_tabs';
  info: {
    displayName: 'Pricing Tab';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.Component<
      'elements.title-with-description',
      false
    >;
    pricingImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    pricingData: Schema.Attribute.Component<'elements.pricing-table', true>;
    show: Schema.Attribute.Boolean;
  };
}

export interface CharteredFlightsPageFleetTab extends Struct.ComponentSchema {
  collectionName: 'components_chartered_flights_page_fleet_tabs';
  info: {
    displayName: 'Fleet Tab';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.Component<
      'elements.title-with-description',
      false
    >;
    images: Schema.Attribute.Media<'images', true>;
    show: Schema.Attribute.Boolean;
  };
}

export interface CharteredFlightsPageDestination
  extends Struct.ComponentSchema {
  collectionName: 'components_chartered_flights_page_destinations';
  info: {
    displayName: 'Destination';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.Component<
      'elements.title-with-description',
      false
    >;
    images: Schema.Attribute.Media<'images', true>;
    infoText: Schema.Attribute.String;
    show: Schema.Attribute.Boolean;
    accordian: Schema.Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
  };
}

export interface CommonHelp extends Struct.ComponentSchema {
  collectionName: 'components_common_helps';
  info: {
    displayName: 'Help';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    show: Schema.Attribute.Boolean;
    type: Schema.Attribute.Enumeration<['description', 'button']> &
      Schema.Attribute.DefaultTo<'description'>;
    buttonName: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
  };
}

export interface CommonAccordian extends Struct.ComponentSchema {
  collectionName: 'components_common_accordians';
  info: {
    displayName: 'Accordian';
    icon: 'filter';
    description: '';
  };
  attributes: {
    show: Schema.Attribute.Boolean;
    infoText: Schema.Attribute.Blocks;
    accordionDescription: Schema.Attribute.Component<
      'elements.title-with-description',
      false
    >;
    details: Schema.Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
    formIndex: Schema.Attribute.Integer;
  };
}

export interface CommonAccordianDetails extends Struct.ComponentSchema {
  collectionName: 'components_common_accordian_details';
  info: {
    displayName: 'Accordian Details';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String;
    content: Schema.Attribute.Blocks;
  };
}

export interface CanadianPassengerRightsTariffs extends Struct.ComponentSchema {
  collectionName: 'components_canadian_passenger_rights_tariffs';
  info: {
    displayName: 'Tariffs';
  };
  attributes: {
    tariffsInfo: Schema.Attribute.Component<
      'elements.title-with-description',
      false
    > &
      Schema.Attribute.Required;
    tariffsFiles: Schema.Attribute.Component<'elements.pdf-links', true>;
  };
}

export interface AircraftFleetFleetInfo extends Struct.ComponentSchema {
  collectionName: 'components_aircraft_fleet_fleet_infos';
  info: {
    displayName: 'Fleet Information';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface AircraftFleetAircraftFleetTabs extends Struct.ComponentSchema {
  collectionName: 'components_aircraft_fleet_aircraft_fleet_tabs';
  info: {
    displayName: 'Aircraft Fleet Tabs';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    fleetInformations: Schema.Attribute.Component<
      'aircraft-fleet.fleet-info',
      true
    >;
  };
}

export interface AboutUsAboutUsTurbo extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_us_turbos';
  info: {
    displayName: 'About Us Turbo';
    icon: 'sun';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    details: Schema.Attribute.Component<
      'elements.title-with-desc-and-multi-media',
      true
    >;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface CareersTabWithYoutubeLink extends Struct.ComponentSchema {
  collectionName: 'components_careers_tab_with_youtube_links';
  info: {
    displayName: 'Career Hero Section';
    description: '';
  };
  attributes: {
    titleWithLink: Schema.Attribute.Component<
      'elements.title-with-youtube-link',
      true
    >;
    show: Schema.Attribute.Boolean;
    careersInfo: Schema.Attribute.Component<
      'elements.title-with-description',
      false
    >;
  };
}

export interface CareersJoinOurTeam extends Struct.ComponentSchema {
  collectionName: 'components_careers_join_our_teams';
  info: {
    displayName: 'Join Our Team';
    description: '';
  };
  attributes: {
    show: Schema.Attribute.Boolean;
    infoText: Schema.Attribute.Blocks;
  };
}

export interface CareersCareersTable extends Struct.ComponentSchema {
  collectionName: 'components_careers_careers_tables';
  info: {
    displayName: 'Careers Oppurtunity Table';
    description: '';
  };
  attributes: {
    tableTitle: Schema.Attribute.String;
    show: Schema.Attribute.Boolean;
    careerOpportunities: Schema.Attribute.Relation<
      'oneToMany',
      'api::career-opportunity.career-opportunity'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'standby-travel.travel-tab': StandbyTravelTravelTab;
      'standby-travel.standby-travel-info': StandbyTravelStandbyTravelInfo;
      'standby-travel.microsoft-form': StandbyTravelMicrosoftForm;
      'standby-travel.how-to-fly': StandbyTravelHowToFly;
      'standby-travel.how-to-fly-section': StandbyTravelHowToFlySection;
      'standby-travel.discounted-travel-form': StandbyTravelDiscountedTravelForm;
      'standby-travel.criteria': StandbyTravelCriteria;
      'tours.hero-description': ToursHeroDescription;
      'tours.featured-tours': ToursFeaturedTours;
      'tours.fare-details': ToursFareDetails;
      'seo.seo': SeoSeo;
      'seo.analytics': SeoAnalytics;
      'seo.additional': SeoAdditional;
      'quick-ticket.quick-ticket-form': QuickTicketQuickTicketForm;
      'our-story.story': OurStoryStory;
      'our-story.details': OurStoryDetails;
      'parcel-express.shipping-cost': ParcelExpressShippingCost;
      'parcel-express.rates': ParcelExpressRates;
      'parcel-express.parcel-faq': ParcelExpressParcelFaq;
      'parcel-express.how-to-accordion': ParcelExpressHowToAccordion;
      'parcel-express.faq': ParcelExpressFaq;
      'schedules.schedules': SchedulesSchedules;
      'our-promises.our-values': OurPromisesOurValues;
      'our-promises.mission-and-vision': OurPromisesMissionAndVision;
      'our-promises.ha-promise': OurPromisesHaPromise;
      'mobility.images': MobilityImages;
      'mobility.hero-section': MobilityHeroSection;
      'our-fares.fare-helper-content': OurFaresFareHelperContent;
      'our-fares.fare-details': OurFaresFareDetails;
      'our-fares.fare-details-content': OurFaresFareDetailsContent;
      'main-tours.tour-cards': MainToursTourCards;
      'main-tours.featured-tours': MainToursFeaturedTours;
      'main-tours.fare-section': MainToursFareSection;
      'main-location.locations': MainLocationLocations;
      'meta-data.meta-data': MetaDataMetaData;
      'luggage.travelling-with-excess-luggage': LuggageTravellingWithExcessLuggage;
      'luggage.special': LuggageSpecial;
      'luggage.luggage-dimensions-table': LuggageLuggageDimensionsTable;
      'luggage.luggage-allowance': LuggageLuggageAllowance;
      'luggage.luggage-allowance-table': LuggageLuggageAllowanceTable;
      'luggage.hero-description': LuggageHeroDescription;
      'main-deals.deals': MainDealsDeals;
      'loyalty-program.turbobucks-pricing': LoyaltyProgramTurbobucksPricing;
      'loyalty-program.pricing-structure': LoyaltyProgramPricingStructure;
      'loyalty-program.high-flyer-rewards-form': LoyaltyProgramHighFlyerRewardsForm;
      'loyalty-program.high-flyer-membership-levels': LoyaltyProgramHighFlyerMembershipLevels;
      'loyalty-program.high-flyer-form': LoyaltyProgramHighFlyerForm;
      'inside-location.guide': InsideLocationGuide;
      'inside-location.guide-information': InsideLocationGuideInformation;
      'inside-location.address': InsideLocationAddress;
      'inside-location.additionalinfo-details': InsideLocationAdditionalinfoDetails;
      'home.news': HomeNews;
      'home.home-tours': HomeHomeTours;
      'home.home-locations': HomeHomeLocations;
      'home.home-instagram': HomeHomeInstagram;
      'home.home-carousel': HomeHomeCarousel;
      'home.hero-carousel': HomeHeroCarousel;
      'home.grab-deals': HomeGrabDeals;
      'home.description': HomeDescription;
      'home.article-carousel': HomeArticleCarousel;
      'going-electric.specifications': GoingElectricSpecifications;
      'going-electric.specification-details': GoingElectricSpecificationDetails;
      'going-electric.going-electring-inquires': GoingElectricGoingElectringInquires;
      'header.menu-dropdown': HeaderMenuDropdown;
      'header.media-links': HeaderMediaLinks;
      'header.link': HeaderLink;
      'further-questions.contact-form': FurtherQuestionsContactForm;
      'form.email-form': FormEmailForm;
      'form.car-service-hire-form': FormCarServiceHireForm;
      'extra-assistance.files': ExtraAssistanceFiles;
      'extra-assistance.cards': ExtraAssistanceCards;
      'extra-assistance.assistance': ExtraAssistanceAssistance;
      'extra-assistance.accordion-with-editor': ExtraAssistanceAccordionWithEditor;
      'elements.trip-advisor': ElementsTripAdvisor;
      'elements.tour-card': ElementsTourCard;
      'elements.title-with-youtube-link': ElementsTitleWithYoutubeLink;
      'elements.title-with-media-and-button': ElementsTitleWithMediaAndButton;
      'elements.title-with-image': ElementsTitleWithImage;
      'elements.title-with-description': ElementsTitleWithDescription;
      'elements.title-with-desc-and-multi-media': ElementsTitleWithDescAndMultiMedia;
      'elements.title-with-desc-and-image': ElementsTitleWithDescAndImage;
      'elements.title-with-ck-editor': ElementsTitleWithCkEditor;
      'elements.title-desc-with-image-links': ElementsTitleDescWithImageLinks;
      'elements.text-with-image': ElementsTextWithImage;
      'elements.table-fields': ElementsTableFields;
      'elements.table-details': ElementsTableDetails;
      'elements.pricing-table': ElementsPricingTable;
      'elements.pdf-links': ElementsPdfLinks;
      'elements.instagram-images': ElementsInstagramImages;
      'elements.harbour-air-services': ElementsHarbourAirServices;
      'elements.harbour-air-article': ElementsHarbourAirArticle;
      'elements.gallery': ElementsGallery;
      'elements.drop-down-data': ElementsDropDownData;
      'elements.button': ElementsButton;
      'elements.accordion': ElementsAccordion;
      'elements.accordion-with-ck-editor': ElementsAccordionWithCkEditor;
      'community-involvement.community-tabs': CommunityInvolvementCommunityTabs;
      'faq.questions': FaqQuestions;
      'faq.know-before': FaqKnowBefore;
      'faq.button-with-boolean': FaqButtonWithBoolean;
      'faq.accordion': FaqAccordion;
      'faq.accordion-data': FaqAccordionData;
      'footer.link': FooterLink;
      'footer.footer-stay-update': FooterFooterStayUpdate;
      'footer.footer-logos': FooterFooterLogos;
      'footer.footer-logo-links': FooterFooterLogoLinks;
      'footer.footer-links': FooterFooterLinks;
      'footer.bottom-content': FooterBottomContent;
      'chartered-flights-page.pricing-tab': CharteredFlightsPagePricingTab;
      'chartered-flights-page.fleet-tab': CharteredFlightsPageFleetTab;
      'chartered-flights-page.destination': CharteredFlightsPageDestination;
      'common.help': CommonHelp;
      'common.accordian': CommonAccordian;
      'common.accordian-details': CommonAccordianDetails;
      'canadian-passenger-rights.tariffs': CanadianPassengerRightsTariffs;
      'aircraft-fleet.fleet-info': AircraftFleetFleetInfo;
      'aircraft-fleet.aircraft-fleet-tabs': AircraftFleetAircraftFleetTabs;
      'about-us.about-us-turbo': AboutUsAboutUsTurbo;
      'careers.tab-with-youtube-link': CareersTabWithYoutubeLink;
      'careers.join-our-team': CareersJoinOurTeam;
      'careers.careers-table': CareersCareersTable;
    }
  }
}
