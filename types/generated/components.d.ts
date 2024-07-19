import type { Schema, Attribute } from '@strapi/strapi';

export interface CharteredFlightsPageDestination extends Schema.Component {
  collectionName: 'components_chartered_flights_page_destinations';
  info: {
    displayName: 'Destination';
    description: '';
  };
  attributes: {
    heading: Attribute.Component<'elements.title-with-description'>;
    images: Attribute.Media;
    accordian: Attribute.Component<
      'elements.accordian-details-with-label-and-description',
      true
    >;
    infoText: Attribute.String;
  };
}

export interface CharteredFlightsPageFleetTab extends Schema.Component {
  collectionName: 'components_chartered_flights_page_fleet_tabs';
  info: {
    displayName: 'Fleet Tab';
  };
  attributes: {
    heading: Attribute.Component<'elements.title-with-description'>;
    images: Attribute.Media;
  };
}

export interface ElementsAccordianDetailsWithLabelAndDescription
  extends Schema.Component {
  collectionName: 'components_elements_accordian_details_with_label_and_descriptions';
  info: {
    displayName: 'Accordian Details With Label And Description';
    icon: 'filter';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
  };
}

export interface ElementsAccordianWithTitleAndDescription
  extends Schema.Component {
  collectionName: 'components_elements_accordian_with_title_and_descriptions';
  info: {
    displayName: 'Accordian With Title And Description';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    accordianDetailsWithLabelAndDescription: Attribute.Component<
      'elements.accordian-details-with-label-and-description',
      true
    >;
  };
}

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    buttonText: Attribute.String;
    slug: Attribute.String;
  };
}

export interface ElementsDropDownData extends Schema.Component {
  collectionName: 'components_elements_drop_down_data';
  info: {
    displayName: 'dropDownData';
    description: '';
  };
  attributes: {
    data: Attribute.String;
  };
}

export interface ElementsHarbourAirArticle extends Schema.Component {
  collectionName: 'components_home_harbour_air_articles';
  info: {
    displayName: 'Article';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    description: Attribute.String;
    buttonText: Attribute.String;
    buttonSlug: Attribute.String;
  };
}

export interface ElementsHarbourAirServices extends Schema.Component {
  collectionName: 'components_elements_harbour_air_services';
  info: {
    displayName: 'HarbourAirServices';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    subtitle: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementsInstagramImages extends Schema.Component {
  collectionName: 'components_elements_instagram_images';
  info: {
    displayName: 'InstagramImages';
  };
  attributes: {
    instaImage: Attribute.Media;
    slug: Attribute.String;
  };
}

export interface ElementsTitleWithDescription extends Schema.Component {
  collectionName: 'components_elements_title_with_descriptions';
  info: {
    displayName: 'Title With Description';
    icon: 'strikeThrough';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
  };
}

export interface ElementsTitleWithImage extends Schema.Component {
  collectionName: 'components_elements_title_with_images';
  info: {
    displayName: 'Title With Image';
    icon: 'seed';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    coverImage: Attribute.Media;
  };
}

export interface FaqAccordionData extends Schema.Component {
  collectionName: 'components_faq_accordion_data';
  info: {
    displayName: 'AccordionDataSection';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    showImage: Attribute.Boolean;
    faq_contents: Attribute.Relation<
      'faq.accordion-data',
      'oneToMany',
      'api::faq-content.faq-content'
    >;
  };
}

export interface FaqAccordion extends Schema.Component {
  collectionName: 'components_faq_accordions';
  info: {
    displayName: 'Accordion';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    accordionData: Attribute.Component<'faq.accordion-data', true>;
  };
}

export interface FaqButtonWithBoolean extends Schema.Component {
  collectionName: 'components_faq_button_with_booleans';
  info: {
    displayName: 'ButtonWithBoolean';
  };
  attributes: {
    buttonText: Attribute.String;
    showButton: Attribute.Boolean;
  };
}

export interface FaqKnowBefore extends Schema.Component {
  collectionName: 'components_faq_know_befores';
  info: {
    displayName: 'knowBefore';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    showImage: Attribute.Boolean;
  };
}

export interface FaqQuestions extends Schema.Component {
  collectionName: 'components_faq_questions';
  info: {
    displayName: 'Questions';
    description: '';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    faq_content: Attribute.Relation<
      'faq.questions',
      'oneToOne',
      'api::faq-content.faq-content'
    >;
  };
}

export interface FooterBottomContent extends Schema.Component {
  collectionName: 'components_footer_bottom_contents';
  info: {
    displayName: 'bottomContent';
  };
  attributes: {
    harbourairLogo: Attribute.Media;
    copyrights: Attribute.String;
    bottomLinks: Attribute.Component<'footer.link', true>;
  };
}

export interface FooterFooterLinks extends Schema.Component {
  collectionName: 'components_footer_footer_links';
  info: {
    displayName: 'FooterLinks';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'footer.link', true>;
  };
}

export interface FooterFooterLogoLinks extends Schema.Component {
  collectionName: 'components_footer_footer_logo_links';
  info: {
    displayName: 'FooterLogoLinks';
  };
  attributes: {
    title: Attribute.String;
    logos: Attribute.Component<'footer.footer-logos', true>;
  };
}

export interface FooterFooterLogos extends Schema.Component {
  collectionName: 'components_footer_footer_logos';
  info: {
    displayName: 'FooterLogos';
    description: '';
  };
  attributes: {
    logos: Attribute.Media;
    slug: Attribute.String;
  };
}

export interface FooterFooterStayUpdate extends Schema.Component {
  collectionName: 'components_footer_footer_stay_updates';
  info: {
    displayName: 'FooterStayUpdate';
  };
  attributes: {
    show: Attribute.Boolean;
    title: Attribute.String;
    description: Attribute.String;
    unsubscribeText: Attribute.String;
    subscribe: Attribute.Component<'elements.button'>;
  };
}

export interface FooterLink extends Schema.Component {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    link: Attribute.String;
    slug: Attribute.String;
  };
}

export interface HeaderDropdown extends Schema.Component {
  collectionName: 'components_header_dropdowns';
  info: {
    displayName: 'Dropdown';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    dropdownMenus: Attribute.Relation<
      'header.dropdown',
      'oneToMany',
      'api::dropdown-menu.dropdown-menu'
    >;
  };
}

export interface HeaderLink extends Schema.Component {
  collectionName: 'components_header_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    show: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    title: Attribute.String & Attribute.Required;
    slug: Attribute.String & Attribute.Required;
  };
}

export interface HeaderMediaLinks extends Schema.Component {
  collectionName: 'components_header_media_links';
  info: {
    displayName: 'Media Link';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    slug: Attribute.String & Attribute.Required;
  };
}

export interface HomeArticleCarousel extends Schema.Component {
  collectionName: 'components_home_article_carousels';
  info: {
    displayName: 'ArticleCarousel';
    description: '';
  };
  attributes: {
    show: Attribute.Boolean;
    article: Attribute.Component<'elements.harbour-air-article', true>;
  };
}

export interface HomeDescription extends Schema.Component {
  collectionName: 'components_blocks_descriptions';
  info: {
    displayName: 'HarbourAirDescription';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    HarbourAirService: Attribute.Component<
      'elements.harbour-air-services',
      true
    > &
      Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
    show: Attribute.Boolean;
  };
}

export interface HomeGrabDeals extends Schema.Component {
  collectionName: 'components_blocks_grab_deals';
  info: {
    displayName: 'GrabDeals';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    deals: Attribute.Component<'elements.drop-down-data', true>;
    filterBy: Attribute.String;
    show: Attribute.Boolean;
    moreDeals: Attribute.Component<'elements.button'>;
    countries: Attribute.Relation<
      'home.grab-deals',
      'oneToMany',
      'api::country.country'
    >;
    cardDeals: Attribute.Relation<
      'home.grab-deals',
      'oneToMany',
      'api::deal.deal'
    >;
  };
}

export interface HomeHeroCarousel extends Schema.Component {
  collectionName: 'components_home_hero_carousels';
  info: {
    displayName: 'HeroCarousel';
    description: '';
  };
  attributes: {
    show: Attribute.Boolean;
    carousels: Attribute.Component<'home.home-carousel', true>;
  };
}

export interface HomeHomeCarousel extends Schema.Component {
  collectionName: 'components_home_home_carousels';
  info: {
    displayName: 'HomeCarousel';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    btnText: Attribute.String;
    slug: Attribute.String;
    image: Attribute.Media;
  };
}

export interface HomeHomeInstagram extends Schema.Component {
  collectionName: 'components_blocks_home_instagrams';
  info: {
    displayName: 'HomeInstagram';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    followUs: Attribute.Component<'elements.button'>;
    show: Attribute.Boolean;
    instaImages: Attribute.Component<'elements.instagram-images', true>;
    quote: Attribute.Text;
    authorName: Attribute.String;
    authorAddress: Attribute.String;
    instaProfileImage: Attribute.Media;
  };
}

export interface InsideLocationAdditionalInformation extends Schema.Component {
  collectionName: 'components_inside_location_additional_informations';
  info: {
    displayName: 'AdditionalInformation';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    details: Attribute.Component<
      'inside-location.additionalinfo-details',
      true
    >;
  };
}

export interface InsideLocationAdditionalinfoDetails extends Schema.Component {
  collectionName: 'components_inside_location_additionalinfo_details';
  info: {
    displayName: 'AdditionalInformationDetails';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    images: Attribute.Media;
    btnName: Attribute.String;
    slug: Attribute.String;
  };
}

export interface InsideLocationDirection extends Schema.Component {
  collectionName: 'components_inside_location_directions';
  info: {
    displayName: 'Address';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    directionsBtn: Attribute.Component<'elements.button'>;
    startingPoint: Attribute.Component<'inside-location.starting-point', true>;
    chooseStartingPointTitle: Attribute.String;
    addressTitle: Attribute.String;
    addressDetails: Attribute.Blocks;
    googleMapUrl: Attribute.String;
    addressMapUrl: Attribute.String;
  };
}

export interface InsideLocationStartingPoint extends Schema.Component {
  collectionName: 'components_inside_location_starting_points';
  info: {
    displayName: 'startingPoint';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    youtubeUrl: Attribute.String;
  };
}

export interface MainDealsDeals extends Schema.Component {
  collectionName: 'components_main_deals_deals';
  info: {
    displayName: 'Deals';
    description: '';
  };
  attributes: {
    dealMedia: Attribute.Media & Attribute.Required;
    destination: Attribute.String & Attribute.Required;
    travelDescription: Attribute.Text & Attribute.Required;
    price: Attribute.String & Attribute.Required;
    departingText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Departing'>;
    origin: Attribute.String & Attribute.Required;
    taxes: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Price all-in incl. taxes and fees'>;
    termsApply: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Terms and conditions apply.'>;
    dealTitle: Attribute.Text & Attribute.Required;
    dealDate: Attribute.String & Attribute.Required;
    bookNowButton: Attribute.Component<'elements.button'>;
    dealDescription: Attribute.Text & Attribute.Required;
    dealOverview: Attribute.Text & Attribute.Required;
    termsAndConditionsText: Attribute.Text;
    terms: Attribute.Component<'elements.drop-down-data', true>;
    title: Attribute.Text & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    calendarIcon: Attribute.Media & Attribute.Required;
  };
}

export interface MainLocationLocations extends Schema.Component {
  collectionName: 'components_main_location_locations';
  info: {
    displayName: 'locations';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.String;
    learnMoreButton: Attribute.Component<'elements.button'>;
    location: Attribute.Relation<
      'main-location.locations',
      'oneToOne',
      'api::location.location'
    >;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaKeyword: Attribute.String;
    metaTitle: Attribute.String;
    metaDescription: Attribute.String;
    canonicalUrl: Attribute.String;
    ogImage: Attribute.Media;
    markAsCanonical: Attribute.Boolean;
    noFollowNoIndex: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'chartered-flights-page.destination': CharteredFlightsPageDestination;
      'chartered-flights-page.fleet-tab': CharteredFlightsPageFleetTab;
      'elements.accordian-details-with-label-and-description': ElementsAccordianDetailsWithLabelAndDescription;
      'elements.accordian-with-title-and-description': ElementsAccordianWithTitleAndDescription;
      'elements.button': ElementsButton;
      'elements.drop-down-data': ElementsDropDownData;
      'elements.harbour-air-article': ElementsHarbourAirArticle;
      'elements.harbour-air-services': ElementsHarbourAirServices;
      'elements.instagram-images': ElementsInstagramImages;
      'elements.title-with-description': ElementsTitleWithDescription;
      'elements.title-with-image': ElementsTitleWithImage;
      'faq.accordion-data': FaqAccordionData;
      'faq.accordion': FaqAccordion;
      'faq.button-with-boolean': FaqButtonWithBoolean;
      'faq.know-before': FaqKnowBefore;
      'faq.questions': FaqQuestions;
      'footer.bottom-content': FooterBottomContent;
      'footer.footer-links': FooterFooterLinks;
      'footer.footer-logo-links': FooterFooterLogoLinks;
      'footer.footer-logos': FooterFooterLogos;
      'footer.footer-stay-update': FooterFooterStayUpdate;
      'footer.link': FooterLink;
      'header.dropdown': HeaderDropdown;
      'header.link': HeaderLink;
      'header.media-links': HeaderMediaLinks;
      'home.article-carousel': HomeArticleCarousel;
      'home.description': HomeDescription;
      'home.grab-deals': HomeGrabDeals;
      'home.hero-carousel': HomeHeroCarousel;
      'home.home-carousel': HomeHomeCarousel;
      'home.home-instagram': HomeHomeInstagram;
      'inside-location.additional-information': InsideLocationAdditionalInformation;
      'inside-location.additionalinfo-details': InsideLocationAdditionalinfoDetails;
      'inside-location.direction': InsideLocationDirection;
      'inside-location.starting-point': InsideLocationStartingPoint;
      'main-deals.deals': MainDealsDeals;
      'main-location.locations': MainLocationLocations;
      'seo.seo': SeoSeo;
    }
  }
}
