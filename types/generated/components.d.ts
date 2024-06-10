import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    buttonText: Attribute.String;
    slug: Attribute.String;
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
      'elements.button': ElementsButton;
      'footer.bottom-content': FooterBottomContent;
      'footer.footer-links': FooterFooterLinks;
      'footer.footer-logo-links': FooterFooterLogoLinks;
      'footer.footer-logos': FooterFooterLogos;
      'footer.link': FooterLink;
      'home.harbour-air-article': HomeHarbourAirArticle;
      'home.home-instagram': HomeHomeInstagram;
      'home.home-stay-update': HomeHomeStayUpdate;
      'seo.seo': SeoSeo;
    }
  }
}
