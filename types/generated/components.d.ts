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
  };
  attributes: {
    icon: Attribute.Media;
    subtitle: Attribute.String;
    description: Attribute.Text;
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

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
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
      'home.description': HomeDescription;
      'home.grab-deals': HomeGrabDeals;
      'seo.seo': SeoSeo;
    }
  }
}
