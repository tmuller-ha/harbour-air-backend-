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
    isVisible: Attribute.Boolean;
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
    carouselElements: Attribute.Component<'blocks.carousel-content', true> &
      Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
    isVisible: Attribute.Boolean;
    moreDeals: Attribute.Component<'elements.button'>;
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
    isVisible: Attribute.Boolean;
    bgImage: Attribute.Media;
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
    instaImages: Attribute.Media;
    isVisible: Attribute.Boolean;
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
    isVisible: Attribute.Boolean;
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
      'footer.bottom-content': FooterBottomContent;
      'footer.footer-links': FooterFooterLinks;
      'footer.footer-logo-links': FooterFooterLogoLinks;
      'footer.footer-logos': FooterFooterLogos;
      'footer.link': FooterLink;
      'home.description': HomeDescription;
      'home.grab-deals': HomeGrabDeals;
      'home.harbour-air-article': HomeHarbourAirArticle;
      'home.home-instagram': HomeHomeInstagram;
      'home.home-stay-update': HomeHomeStayUpdate;
      'seo.seo': SeoSeo;
    }
  }
}
