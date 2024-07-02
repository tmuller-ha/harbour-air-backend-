import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCarouselContent extends Schema.Component {
  collectionName: 'components_elements_carousel_contents';
  info: {
    displayName: 'carouselContent';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    origin: Attribute.String;
    subtitle: Attribute.String;
    cost: Attribute.String;
    departure: Attribute.String;
    destination: Attribute.String;
    terms: Attribute.String;
    route: Attribute.String;
    moreFlights: Attribute.String;
    buttonText: Attribute.String;
    slug: Attribute.String;
    priceTitle: Attribute.String;
    calendarImg: Attribute.Media;
    flightTravelNature: Attribute.String;
    countryID: Attribute.String;
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
    carouselElements: Attribute.Component<'blocks.carousel-content', true>;
    show: Attribute.Boolean;
    moreDeals: Attribute.Component<'elements.button'>;
    countries: Attribute.Relation<
      'home.grab-deals',
      'oneToMany',
      'api::country.country'
    >;
  };
}

export interface HomeHarbourAirArticle extends Schema.Component {
  collectionName: 'components_home_harbour_air_articles';
  info: {
    displayName: 'HarbourAirArticle';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    description: Attribute.String;
    show: Attribute.Boolean;
    bgImage: Attribute.Media;
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
  };
}

export interface HomeHomeStayUpdate extends Schema.Component {
  collectionName: 'components_blocks_home_stay_updates';
  info: {
    displayName: 'HomeStayUpdate';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    unsubscribeText: Attribute.String;
    subscribe: Attribute.Component<'elements.button'>;
    show: Attribute.Boolean;
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
      'blocks.carousel-content': BlocksCarouselContent;
      'elements.button': ElementsButton;
      'elements.drop-down-data': ElementsDropDownData;
      'elements.harbour-air-services': ElementsHarbourAirServices;
      'elements.instagram-images': ElementsInstagramImages;
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
      'home.description': HomeDescription;
      'home.grab-deals': HomeGrabDeals;
      'home.harbour-air-article': HomeHarbourAirArticle;
      'home.hero-carousel': HomeHeroCarousel;
      'home.home-carousel': HomeHomeCarousel;
      'home.home-instagram': HomeHomeInstagram;
      'home.home-stay-update': HomeHomeStayUpdate;
      'main-deals.deals': MainDealsDeals;
      'seo.seo': SeoSeo;
    }
  }
}
