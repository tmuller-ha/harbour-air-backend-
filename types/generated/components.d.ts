import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuDropdown extends Schema.Component {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'Dropdown';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    navigationLinks: Attribute.Component<'menu.link', true>;
  };
}

export interface MenuLink extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.String & Attribute.Required;
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
      'menu.dropdown': MenuDropdown;
      'menu.link': MenuLink;
      'seo.seo': SeoSeo;
    }
  }
}
