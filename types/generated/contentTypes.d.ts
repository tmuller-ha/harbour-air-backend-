import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAboutUsAboutUs extends Struct.SingleTypeSchema {
  collectionName: 'all_about_us';
  info: {
    description: '';
    displayName: 'About-us';
    pluralName: 'all-about-us';
    singularName: 'about-us';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutDetails: Schema.Attribute.Component<
      'elements.harbour-air-article',
      true
    >;
    achievement: Schema.Attribute.Component<
      'elements.harbour-air-services',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.Component<
      'elements.title-with-desc-and-image',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-us.about-us'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    turbo: Schema.Attribute.Component<'about-us.about-us-turbo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAerospaceFooterAerospaceFooter
  extends Struct.SingleTypeSchema {
  collectionName: 'aerospace_footers';
  info: {
    description: '';
    displayName: 'Aerospace-Footer';
    pluralName: 'aerospace-footers';
    singularName: 'aerospace-footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    copyrights: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    footerlinks: Schema.Attribute.Component<'footer.footer-links', true>;
    footerlogos: Schema.Attribute.Component<'footer.footer-logo-links', false>;
    footerMaps: Schema.Attribute.Component<'footer.footer-map-links', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::aerospace-footer.aerospace-footer'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAerospaceHeaderAerospaceHeader
  extends Struct.SingleTypeSchema {
  collectionName: 'aerospace_headers';
  info: {
    description: '';
    displayName: 'Aerospace-Header';
    pluralName: 'aerospace-headers';
    singularName: 'aerospace-header';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contactNo: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::aerospace-header.aerospace-header'
    > &
      Schema.Attribute.Private;
    navTitle: Schema.Attribute.Component<'elements.button', true>;
    publishedAt: Schema.Attribute.DateTime;
    quoteText: Schema.Attribute.Component<'elements.button', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAerospaceHomeAerospaceHome extends Struct.SingleTypeSchema {
  collectionName: 'aerospace_homes';
  info: {
    description: '';
    displayName: 'Aerospace-Home';
    pluralName: 'aerospace-homes';
    singularName: 'aerospace-home';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    About: Schema.Attribute.Component<'aerospace-home.service-overview', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    expertise: Schema.Attribute.Component<'aerospace-home.expertise', false>;
    heroCarousel: Schema.Attribute.Component<'home.hero-carousel', false>;
    hiringSection: Schema.Attribute.Component<
      'aerospace-home.hiring-section',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::aerospace-home.aerospace-home'
    > &
      Schema.Attribute.Private;
    partsSales: Schema.Attribute.Component<
      'aerospace-home.service-overview',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    serviceInsights: Schema.Attribute.Component<
      'aerospace-home.service-insights',
      true
    >;
    stcKits: Schema.Attribute.Component<'stc-kits.stc-kits', false>;
    testimonials: Schema.Attribute.Component<
      'testimonials.testimonials',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAerospaceTestimonialAerospaceTestimonial
  extends Struct.CollectionTypeSchema {
  collectionName: 'aerospace_testimonials';
  info: {
    description: '';
    displayName: 'Aerospace-testimonial';
    pluralName: 'aerospace-testimonials';
    singularName: 'aerospace-testimonial';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::aerospace-testimonial.aerospace-testimonial'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    testimonials: Schema.Attribute.Component<
      'aerospace-home.testimonials',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAirCraftFleetAirCraftFleet extends Struct.SingleTypeSchema {
  collectionName: 'air_craft_fleets';
  info: {
    description: '';
    displayName: 'AirCraft Fleet';
    pluralName: 'air-craft-fleets';
    singularName: 'air-craft-fleet';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::air-craft-fleet.air-craft-fleet'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<
      ['elements.title-with-image', 'elements.title-with-description']
    >;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    tabs: Schema.Attribute.DynamicZone<['aircraft-fleet.aircraft-fleet-tabs']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAssistanceAssistance extends Struct.CollectionTypeSchema {
  collectionName: 'assistances';
  info: {
    description: '';
    displayName: 'Assistance';
    pluralName: 'assistances';
    singularName: 'assistance';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    components: Schema.Attribute.DynamicZone<
      [
        'elements.title-with-image',
        'common.help',
        'extra-assistance.files',
        'elements.title-with-ck-editor',
        'extra-assistance.accordion-with-editor',
        'common.form-with-description',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::assistance.assistance'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    slug: Schema.Attribute.UID;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAwardAward extends Struct.SingleTypeSchema {
  collectionName: 'awards';
  info: {
    description: '';
    displayName: 'Awards';
    pluralName: 'awards';
    singularName: 'award';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    about: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    awards: Schema.Attribute.Component<'elements.harbour-air-services', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::award.award'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    title: Schema.Attribute.Component<'elements.title-with-image', false> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBasePageBasePage extends Struct.CollectionTypeSchema {
  collectionName: 'base_pages';
  info: {
    description: '';
    displayName: 'Base Pages';
    pluralName: 'base-pages';
    singularName: 'base-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::base-page.base-page'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<
      [
        'elements.accordion',
        'elements.title-with-ck-editor',
        'elements.title-with-image',
        'elements.tab',
        'common.form-with-description',
        'elements.image-text-block',
      ]
    >;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    slug: Schema.Attribute.UID & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogListBlogList extends Struct.SingleTypeSchema {
  collectionName: 'blog_lists';
  info: {
    description: '';
    displayName: 'Blog List';
    pluralName: 'blog-lists';
    singularName: 'blog-list';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-list.blog-list'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    publishedAt: Schema.Attribute.DateTime;
    sectionTitle: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogBlog extends Struct.CollectionTypeSchema {
  collectionName: 'blogs';
  info: {
    description: '';
    displayName: 'Blogs';
    pluralName: 'blogs';
    singularName: 'blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<'images'>;
    category: Schema.Attribute.Relation<'manyToOne', 'api::category.category'>;
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    coverImage: Schema.Attribute.Media<'images'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'> &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    mobileImagePosition: Schema.Attribute.Enumeration<
      ['left', 'right', 'top', 'bottom', 'center']
    >;
    postedDate: Schema.Attribute.Date;
    publishedAt: Schema.Attribute.DateTime;
    readingTime: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    shortDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogsAndNewBlogsAndNew extends Struct.SingleTypeSchema {
  collectionName: 'blogs_and_news';
  info: {
    description: '';
    displayName: 'Blogs And News';
    pluralName: 'blogs-and-news';
    singularName: 'blogs-and-new';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blogsCoverImage: Schema.Attribute.Media<'images'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    latestBlogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    latestBlogsTitle: Schema.Attribute.String;
    latestNews: Schema.Attribute.Relation<'oneToMany', 'api::news.news'>;
    latestNewsTitle: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blogs-and-new.blogs-and-new'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBookFlightBookFlight extends Struct.SingleTypeSchema {
  collectionName: 'book_flights';
  info: {
    description: '';
    displayName: 'Book Flights';
    pluralName: 'book-flights';
    singularName: 'book-flight';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::book-flight.book-flight'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    moreDeals: Schema.Attribute.Component<'elements.button', false>;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    specialOffers: Schema.Attribute.Relation<'oneToMany', 'api::deal.deal'>;
    specialOffersTitle: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCampaignCampaign extends Struct.CollectionTypeSchema {
  collectionName: 'campaigns';
  info: {
    description: '';
    displayName: 'Campaign';
    pluralName: 'campaigns';
    singularName: 'campaign';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    coverImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::campaign.campaign'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    shortDescription: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCanadianPassengerRightCanadianPassengerRight
  extends Struct.SingleTypeSchema {
  collectionName: 'canadian_passenger_rights';
  info: {
    description: '';
    displayName: 'Canadian Passenger Right';
    pluralName: 'canadian-passenger-rights';
    singularName: 'canadian-passenger-right';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contactDetailForm: Schema.Attribute.Component<
      'further-questions.contact-form',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::canadian-passenger-right.canadian-passenger-right'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<
      [
        'elements.title-with-image',
        'elements.title-with-description',
        'common.accordian',
        'canadian-passenger-rights.tariffs',
      ]
    >;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCarServiceCarService extends Struct.SingleTypeSchema {
  collectionName: 'car_services';
  info: {
    description: '';
    displayName: 'Car Services';
    pluralName: 'car-services';
    singularName: 'car-service';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    carHireRequestForm: Schema.Attribute.Component<
      'common.form-with-description',
      false
    >;
    carTypes: Schema.Attribute.Component<
      'elements.title-desc-with-image-links',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    evoCar: Schema.Attribute.Component<
      'elements.title-with-desc-and-image',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::car-service.car-service'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCareerOpportunityCareerOpportunity
  extends Struct.CollectionTypeSchema {
  collectionName: 'career_opportunities';
  info: {
    description: '';
    displayName: 'Career Opportunity';
    pluralName: 'career-opportunities';
    singularName: 'career-opportunity';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    applicationDeadline: Schema.Attribute.Date;
    careerDescription: Schema.Attribute.Media<'files'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::career-opportunity.career-opportunity'
    > &
      Schema.Attribute.Private;
    location: Schema.Attribute.String;
    position: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCareerCareer extends Struct.SingleTypeSchema {
  collectionName: 'careers';
  info: {
    description: '';
    displayName: 'Career';
    pluralName: 'careers';
    singularName: 'career';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    careerPage: Schema.Attribute.DynamicZone<
      [
        'careers.careers-table',
        'elements.title-with-image',
        'common.accordian',
        'careers.tab-with-youtube-link',
        'elements.title-with-ck-editor',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::career.career'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Struct.CollectionTypeSchema {
  collectionName: 'categories';
  info: {
    displayName: 'Category';
    pluralName: 'categories';
    singularName: 'category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    news: Schema.Attribute.Relation<'oneToMany', 'api::news.news'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCharteredFlightCharteredFlight
  extends Struct.SingleTypeSchema {
  collectionName: 'chartered_flights';
  info: {
    description: '';
    displayName: 'Chartered Flight';
    pluralName: 'chartered-flights';
    singularName: 'chartered-flight';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    additionalInfo: Schema.Attribute.DynamicZone<
      [
        'chartered-flights-page.pricing-tab',
        'chartered-flights-page.fleet-tab',
        'chartered-flights-page.destination',
      ]
    >;
    charteredFlightForm: Schema.Attribute.Component<
      'form.car-service-hire-form',
      false
    >;
    charteredFlightSection: Schema.Attribute.DynamicZone<
      ['common.accordian', 'elements.title-with-description']
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::chartered-flight.chartered-flight'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCommunityInvolvementCommunityInvolvement
  extends Struct.SingleTypeSchema {
  collectionName: 'community_involvements';
  info: {
    description: '';
    displayName: 'Community Involvement';
    pluralName: 'community-involvements';
    singularName: 'community-involvement';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::community-involvement.community-involvement'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<
      ['elements.title-with-image', 'elements.title-with-ck-editor']
    >;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    tabs: Schema.Attribute.Component<
      'elements.title-with-desc-and-image',
      true
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContactUsContactUs extends Struct.SingleTypeSchema {
  collectionName: 'all_contact_us';
  info: {
    description: '';
    displayName: 'Contact Us';
    pluralName: 'all-contact-us';
    singularName: 'contact-us';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contactCenter: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    contactDetails: Schema.Attribute.Component<
      'further-questions.contact-form',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.Component<
      'elements.title-with-desc-and-image',
      false
    >;
    hoursOfOperation: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    joinOurTeam: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-us.contact-us'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    yourExperience: Schema.Attribute.Component<
      'elements.title-desc-with-image-links',
      false
    >;
  };
}

export interface ApiCorporateResposibilityCorporateResposibility
  extends Struct.SingleTypeSchema {
  collectionName: 'corporate_resposibilities';
  info: {
    description: '';
    displayName: 'Corporate Resposibility';
    pluralName: 'corporate-resposibilities';
    singularName: 'corporate-resposibility';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::corporate-resposibility.corporate-resposibility'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', true>;
    pageTitle: Schema.Attribute.Component<
      'elements.title-with-desc-and-image',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    responsibilities: Schema.Attribute.Component<
      'elements.harbour-air-article',
      true
    >;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCountryCountry extends Struct.CollectionTypeSchema {
  collectionName: 'countries';
  info: {
    description: '';
    displayName: 'Country';
    pluralName: 'countries';
    singularName: 'country';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String;
    countryWeightId: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    dealsArrivals: Schema.Attribute.Relation<'oneToMany', 'api::deal.deal'>;
    dealsDepartures: Schema.Attribute.Relation<'oneToMany', 'api::deal.deal'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::country.country'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCourtesyShuttleCourtesyShuttle
  extends Struct.SingleTypeSchema {
  collectionName: 'courtesy_shuttles';
  info: {
    description: '';
    displayName: 'Courtesy shuttles';
    pluralName: 'courtesy-shuttles';
    singularName: 'courtesy-shuttle';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    courtesyShuttlePage: Schema.Attribute.DynamicZone<
      ['elements.title-with-image', 'elements.title-with-ck-editor']
    >;
    courtesyShuttleTabs: Schema.Attribute.DynamicZone<
      ['elements.title-with-ck-editor']
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::courtesy-shuttle.courtesy-shuttle'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDealDeal extends Struct.CollectionTypeSchema {
  collectionName: 'deals';
  info: {
    description: '';
    displayName: 'Deal';
    pluralName: 'deals';
    singularName: 'deal';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    active: Schema.Attribute.Boolean;
    arrivalLocation: Schema.Attribute.Relation<
      'manyToOne',
      'api::destination.destination'
    >;
    bookNowButton: Schema.Attribute.Component<'elements.button', false> &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    date: Schema.Attribute.String & Schema.Attribute.Required;
    dealImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    departureLocation: Schema.Attribute.Relation<
      'manyToOne',
      'api::destination.destination'
    >;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    destination: Schema.Attribute.String & Schema.Attribute.Required;
    fare: Schema.Attribute.String & Schema.Attribute.Required;
    fareText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'One Way fares from'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::deal.deal'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    route: Schema.Attribute.Text & Schema.Attribute.Required;
    summary: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    travelStartDate: Schema.Attribute.Date;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDestinationDestination extends Struct.CollectionTypeSchema {
  collectionName: 'destinations';
  info: {
    description: '';
    displayName: 'Locations';
    pluralName: 'destinations';
    singularName: 'destination';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Category: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    dealsArrivals: Schema.Attribute.Relation<'oneToMany', 'api::deal.deal'>;
    dealsDeparture: Schema.Attribute.Relation<'oneToMany', 'api::deal.deal'>;
    destinationImg: Schema.Attribute.Media<'images'>;
    dropOff: Schema.Attribute.String;
    dropOffDefault: Schema.Attribute.String;
    dropOffRequired: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    latitude: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::destination.destination'
    > &
      Schema.Attribute.Private;
    location: Schema.Attribute.String;
    locationId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    longitude: Schema.Attribute.String & Schema.Attribute.Required;
    map: Schema.Attribute.String;
    pickup: Schema.Attribute.String;
    pickupDefault: Schema.Attribute.String;
    pickupRequired: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    publishedAt: Schema.Attribute.DateTime;
    tag: Schema.Attribute.String;
    tourDepartures: Schema.Attribute.Relation<
      'oneToMany',
      'api::tour-location.tour-location'
    >;
    toursDetailsArrivals: Schema.Attribute.Relation<
      'oneToMany',
      'api::tours-detail.tours-detail'
    >;
    toursDetailsDeparture: Schema.Attribute.Relation<
      'oneToMany',
      'api::tours-detail.tours-detail'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDocumentDocument extends Struct.CollectionTypeSchema {
  collectionName: 'documents';
  info: {
    displayName: 'Document';
    pluralName: 'documents';
    singularName: 'document';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    file: Schema.Attribute.Media<'files'>;
    fileName: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::document.document'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDropdownMenuDropdownMenu
  extends Struct.CollectionTypeSchema {
  collectionName: 'dropdown_menus';
  info: {
    description: '';
    displayName: 'Dropdown Menu';
    pluralName: 'dropdown-menus';
    singularName: 'dropdown-menu';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::dropdown-menu.dropdown-menu'
    > &
      Schema.Attribute.Private;
    menus: Schema.Attribute.DynamicZone<['header.link', 'header.media-links']>;
    menuTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    show: Schema.Attribute.Boolean;
    slug: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEmailOptionEmailOption extends Struct.CollectionTypeSchema {
  collectionName: 'email_options';
  info: {
    description: '';
    displayName: 'Email Option';
    pluralName: 'email-options';
    singularName: 'email-option';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::email-option.email-option'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    toEmails: Schema.Attribute.Component<'form.email-form', true>;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEmergencyAlertEmergencyAlert
  extends Struct.CollectionTypeSchema {
  collectionName: 'emergency_alerts';
  info: {
    displayName: 'Emergency Alert';
    pluralName: 'emergency-alerts';
    singularName: 'emergency-alert';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::emergency-alert.emergency-alert'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiExtraAssistanceExtraAssistance
  extends Struct.SingleTypeSchema {
  collectionName: 'extra_assistances';
  info: {
    description: '';
    displayName: 'Extra Assistance';
    pluralName: 'extra-assistances';
    singularName: 'extra-assistance';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cards: Schema.Attribute.DynamicZone<['extra-assistance.assistance']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::extra-assistance.extra-assistance'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    pageTitle: Schema.Attribute.Component<
      'elements.title-with-media-and-button',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFaqContentFaqContent extends Struct.CollectionTypeSchema {
  collectionName: 'faq_contents';
  info: {
    description: '';
    displayName: 'Faq Content';
    pluralName: 'faq-contents';
    singularName: 'faq-content';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    answer: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-content.faq-content'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    question: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFaqFaq extends Struct.SingleTypeSchema {
  collectionName: 'faqs';
  info: {
    description: '';
    displayName: 'Faq';
    pluralName: 'faqs';
    singularName: 'faq';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    accordionSection: Schema.Attribute.Component<'faq.accordion', false>;
    contactDetails: Schema.Attribute.Component<
      'further-questions.contact-form',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    knowBeforeTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'> &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    publishedAt: Schema.Attribute.DateTime;
    searchButton: Schema.Attribute.Component<'faq.button-with-boolean', false>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFeaturedTourFeaturedTour
  extends Struct.CollectionTypeSchema {
  collectionName: 'featured_tours';
  info: {
    description: '';
    displayName: 'Featured Tour';
    pluralName: 'featured-tours';
    singularName: 'featured-tour';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    learnMoreButton: Schema.Attribute.Component<'elements.button', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::featured-tour.featured-tour'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
    tripAdvisorComment: Schema.Attribute.Relation<
      'oneToMany',
      'api::trip-advisor-comment.trip-advisor-comment'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFlightStatusFlightStatus extends Struct.SingleTypeSchema {
  collectionName: 'flight_statuses';
  info: {
    description: '';
    displayName: 'Flight Status';
    pluralName: 'flight-statuses';
    singularName: 'flight-status';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    flighStatusTitle: Schema.Attribute.Component<
      'elements.title-with-image',
      false
    >;
    flightStatusDescription: Schema.Attribute.Component<
      'elements.title-with-description',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::flight-status.flight-status'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFooterFooter extends Struct.SingleTypeSchema {
  collectionName: 'footers';
  info: {
    description: '';
    displayName: 'Footer';
    pluralName: 'footers';
    singularName: 'footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bottomLinks: Schema.Attribute.Component<'footer.link', true>;
    copyrights: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    footerlinks: Schema.Attribute.Component<'footer.footer-links', true>;
    footerlogos: Schema.Attribute.Component<'footer.footer-logo-links', false>;
    harbourairLogo: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::footer.footer'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    stayUpToDateSection: Schema.Attribute.Component<
      'footer.footer-stay-update',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGoingElectricGoingElectric extends Struct.SingleTypeSchema {
  collectionName: 'going_electrics';
  info: {
    description: '';
    displayName: 'Going Electric';
    pluralName: 'going-electrics';
    singularName: 'going-electric';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heroImageOpacity: Schema.Attribute.Enumeration<
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
    >;
    infoSection: Schema.Attribute.Component<
      'elements.harbour-air-services',
      true
    >;
    inquiries: Schema.Attribute.Component<
      'going-electric.going-electring-inquires',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::going-electric.going-electric'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    mobileImagePosition: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    >;
    pageAbout: Schema.Attribute.Component<
      'elements.title-with-desc-and-image',
      false
    >;
    pageTitle: Schema.Attribute.Component<
      'elements.title-with-desc-and-image',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    stories: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    storiesTitle: Schema.Attribute.String;
    tabs: Schema.Attribute.DynamicZone<
      [
        'elements.title-with-ck-editor',
        'elements.gallery',
        'going-electric.specifications',
      ]
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGoogleAnlayticGoogleAnlaytic
  extends Struct.SingleTypeSchema {
  collectionName: 'google_anlaytics';
  info: {
    displayName: 'Google Anlaytic';
    pluralName: 'google-anlaytics';
    singularName: 'google-anlaytic';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    analytics: Schema.Attribute.Component<'seo.analytics', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::google-anlaytic.google-anlaytic'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGroupBookingGroupBooking extends Struct.SingleTypeSchema {
  collectionName: 'group_bookings';
  info: {
    description: '';
    displayName: 'Group Bookings';
    pluralName: 'group-bookings';
    singularName: 'group-booking';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    groupBookingForm: Schema.Attribute.Component<
      'form.car-service-hire-form',
      false
    >;
    howToBook: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::group-booking.group-booking'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    pageDetails: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    showBookingForm: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHeaderHeader extends Struct.SingleTypeSchema {
  collectionName: 'headers';
  info: {
    description: '';
    displayName: 'Header';
    pluralName: 'headers';
    singularName: 'header';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    desktopLogo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    emergencyAlert: Schema.Attribute.Component<'header.alert', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::header.header'
    > &
      Schema.Attribute.Private;
    mobileLogo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    navLinks: Schema.Attribute.DynamicZone<
      ['header.menu-dropdown', 'header.link']
    >;
    profileButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHighFlyerRewardHighFlyerReward
  extends Struct.SingleTypeSchema {
  collectionName: 'high_flyer_rewards';
  info: {
    description: '';
    displayName: 'High Flyer Reward';
    pluralName: 'high-flyer-rewards';
    singularName: 'high-flyer-reward';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    highFlyerForm: Schema.Attribute.Component<
      'loyalty-program.high-flyer-rewards-form',
      false
    >;
    highFlyerRewards: Schema.Attribute.DynamicZone<
      [
        'elements.title-with-ck-editor',
        'loyalty-program.high-flyer-membership-levels',
        'common.form-with-description',
      ]
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::high-flyer-reward.high-flyer-reward'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeHome extends Struct.SingleTypeSchema {
  collectionName: 'homes';
  info: {
    description: '';
    displayName: 'Home';
    pluralName: 'homes';
    singularName: 'home';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deals: Schema.Attribute.Component<'home.grab-deals', false>;
    homePageCarousel: Schema.Attribute.Component<'home.hero-carousel', false>;
    instagramSection: Schema.Attribute.Component<'home.home-instagram', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::home.home'> &
      Schema.Attribute.Private;
    locations: Schema.Attribute.Component<'home.home-locations', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    news: Schema.Attribute.Component<'home.news', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    serviceHighlights: Schema.Attribute.Component<'home.description', false>;
    title: Schema.Attribute.String;
    tours: Schema.Attribute.Component<'home.home-tours', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiKitsCardKitsCard extends Struct.CollectionTypeSchema {
  collectionName: 'kits_cards';
  info: {
    description: '';
    displayName: 'Aerospace-stcKit';
    pluralName: 'kits-cards';
    singularName: 'kits-card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::kits-card.kits-card'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    stcKits: Schema.Attribute.Component<'aerospace-home.stc-kits', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLinkLink extends Struct.CollectionTypeSchema {
  collectionName: 'links';
  info: {
    description: '';
    displayName: 'Link';
    pluralName: 'links';
    singularName: 'link';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::link.link'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLocationLocation extends Struct.CollectionTypeSchema {
  collectionName: 'locations';
  info: {
    description: '';
    displayName: 'Destinations';
    pluralName: 'locations';
    singularName: 'location';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    additionalInformation: Schema.Attribute.Component<
      'inside-location.additionalinfo-details',
      true
    >;
    address: Schema.Attribute.Component<'inside-location.address', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Blocks;
    guide: Schema.Attribute.Component<'inside-location.guide', false>;
    heroImage: Schema.Attribute.Media<'images' | 'videos'>;
    learnMoreBtnText: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::location.location'
    > &
      Schema.Attribute.Private;
    locationPhotos: Schema.Attribute.Media<'images' | 'videos', true>;
    locationVideo: Schema.Attribute.Media<'images' | 'videos'>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    mobileImagePosition: Schema.Attribute.Enumeration<
      ['left', 'right', 'center']
    >;
    name: Schema.Attribute.String;
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
    >;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    shortDescription: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    tileImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLoyaltyProgramLoyaltyProgram
  extends Struct.SingleTypeSchema {
  collectionName: 'loyalty_programs';
  info: {
    description: '';
    displayName: 'Loyalty Programs';
    pluralName: 'loyalty-programs';
    singularName: 'loyalty-program';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    highFlyerForm: Schema.Attribute.Component<
      'loyalty-program.high-flyer-rewards-form',
      false
    >;
    highFlyerRewards: Schema.Attribute.DynamicZone<
      [
        'elements.title-with-ck-editor',
        'loyalty-program.high-flyer-membership-levels',
      ]
    >;
    highFlyerTabTitle: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::loyalty-program.loyalty-program'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    pageAbout: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    turbobucksFlightCredits: Schema.Attribute.DynamicZone<
      ['loyalty-program.turbobucks-pricing', 'elements.title-with-ck-editor']
    >;
    turbobucksForm: Schema.Attribute.Component<
      'loyalty-program.high-flyer-form',
      false
    >;
    turbobucksTabTitle: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLuggageLuggage extends Struct.SingleTypeSchema {
  collectionName: 'luggages';
  info: {
    description: '';
    displayName: 'Luggage';
    pluralName: 'luggages';
    singularName: 'luggage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::luggage.luggage'
    > &
      Schema.Attribute.Private;
    luggageAllowanceTab: Schema.Attribute.Component<
      'luggage.luggage-allowance',
      false
    >;
    luggageAllowanceTable: Schema.Attribute.Component<
      'our-fares.fare-details',
      true
    >;
    luggagePage: Schema.Attribute.DynamicZone<
      ['elements.title-with-image', 'luggage.hero-description']
    >;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    specialLuggageTab: Schema.Attribute.Component<'luggage.special', false>;
    travellingExcessLuggageTab: Schema.Attribute.Component<
      'luggage.travelling-with-excess-luggage',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMainDealMainDeal extends Struct.SingleTypeSchema {
  collectionName: 'main_deals';
  info: {
    description: '';
    displayName: 'Main Deal';
    pluralName: 'main-deals';
    singularName: 'main-deal';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    campaignSection: Schema.Attribute.Component<
      'main-deals.campaign-section',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    customizedText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Customized'>;
    deals: Schema.Attribute.Relation<'oneToMany', 'api::deal.deal'>;
    dealsBanner: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::main-deal.main-deal'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    publishedAt: Schema.Attribute.DateTime;
    searchButton: Schema.Attribute.Component<'elements.button', false> &
      Schema.Attribute.Required;
    selectAllText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'All'>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMainLocationMainLocation extends Struct.SingleTypeSchema {
  collectionName: 'main_locations';
  info: {
    description: '';
    displayName: 'Main Location';
    pluralName: 'main-locations';
    singularName: 'main-location';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::main-location.main-location'
    > &
      Schema.Attribute.Private;
    locations: Schema.Attribute.Relation<'oneToMany', 'api::location.location'>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    pageTitle: Schema.Attribute.Component<
      'elements.title-with-media-and-button',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMainTourMainTour extends Struct.SingleTypeSchema {
  collectionName: 'tours';
  info: {
    description: '';
    displayName: 'Main Tour';
    pluralName: 'main-tours';
    singularName: 'main-tour';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::main-tour.main-tour'
    > &
      Schema.Attribute.Private;
    mainTourPage: Schema.Attribute.DynamicZone<
      ['main-tours.featured-tours', 'main-tours.fare-section']
    >;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMakeItPrivateModalMakeItPrivateModal
  extends Struct.SingleTypeSchema {
  collectionName: 'make_it_private_modals';
  info: {
    description: '';
    displayName: 'Make It Private Modal';
    pluralName: 'make-it-private-modals';
    singularName: 'make-it-private-modal';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    emailOption: Schema.Attribute.Relation<
      'oneToOne',
      'api::email-option.email-option'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::make-it-private-modal.make-it-private-modal'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMenuImageLinkMenuImageLink
  extends Struct.CollectionTypeSchema {
  collectionName: 'menu_image_links';
  info: {
    description: '';
    displayName: 'Menu Image Link';
    pluralName: 'menu-image-links';
    singularName: 'menu-image-link';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    isIframe: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::menu-image-link.menu-image-link'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMobilityMobility extends Struct.SingleTypeSchema {
  collectionName: 'mobilities';
  info: {
    description: '';
    displayName: 'Mobility';
    pluralName: 'mobilities';
    singularName: 'mobility';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::mobility.mobility'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    section: Schema.Attribute.DynamicZone<
      [
        'elements.title-with-image',
        'mobility.hero-section',
        'mobility.images',
        'common.help',
        'elements.title-with-ck-editor',
        'common.form-with-description',
      ]
    >;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMovingPastCarbonNeutralMovingPastCarbonNeutral
  extends Struct.SingleTypeSchema {
  collectionName: 'moving_past_carbon_neutrals';
  info: {
    description: '';
    displayName: 'Moving Past Carbon Neutral';
    pluralName: 'moving-past-carbon-neutrals';
    singularName: 'moving-past-carbon-neutral';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::moving-past-carbon-neutral.moving-past-carbon-neutral'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    publishedAt: Schema.Attribute.DateTime;
    section: Schema.Attribute.DynamicZone<
      ['elements.title-with-image', 'elements.title-with-ck-editor']
    >;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    tabs: Schema.Attribute.Component<'elements.title-with-ck-editor', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNewsListNewsList extends Struct.SingleTypeSchema {
  collectionName: 'news_lists';
  info: {
    description: '';
    displayName: 'News List';
    pluralName: 'news-lists';
    singularName: 'news-list';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-list.news-list'
    > &
      Schema.Attribute.Private;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    publishedAt: Schema.Attribute.DateTime;
    sectionTitle: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNewsNews extends Struct.CollectionTypeSchema {
  collectionName: 'all_news';
  info: {
    description: '';
    displayName: 'News';
    pluralName: 'all-news';
    singularName: 'news';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<'images'>;
    category: Schema.Attribute.Relation<'manyToOne', 'api::category.category'>;
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    coverImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::news.news'> &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    postedDate: Schema.Attribute.Date;
    publishedAt: Schema.Attribute.DateTime;
    readingTime: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    shortDescription: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNotFoundPageNotFoundPage extends Struct.SingleTypeSchema {
  collectionName: 'not_found_pages';
  info: {
    description: '';
    displayName: 'Not found Page';
    pluralName: 'not-found-pages';
    singularName: 'not-found-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner_image: Schema.Attribute.Media<'images'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::not-found-page.not-found-page'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOnAccountQuickTicketOnAccountQuickTicket
  extends Struct.SingleTypeSchema {
  collectionName: 'on_account_quick_tickets';
  info: {
    description: '';
    displayName: 'On-Account Quick Tickets';
    pluralName: 'on-account-quick-tickets';
    singularName: 'on-account-quick-ticket';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutPage: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    form: Schema.Attribute.Component<'quick-ticket.quick-ticket-form', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::on-account-quick-ticket.on-account-quick-ticket'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOurFareOurFare extends Struct.SingleTypeSchema {
  collectionName: 'our_fares';
  info: {
    description: '';
    displayName: 'Our Fares';
    pluralName: 'our-fares';
    singularName: 'our-fare';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fareDetails: Schema.Attribute.Component<'our-fares.fare-details', true>;
    fareOptions: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      true
    >;
    farePageInfo: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    helperContent: Schema.Attribute.Component<
      'our-fares.fare-helper-content',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-fare.our-fare'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOurPromiseOurPromise extends Struct.SingleTypeSchema {
  collectionName: 'our_promises';
  info: {
    description: '';
    displayName: 'Our Promises';
    pluralName: 'our-promises';
    singularName: 'our-promise';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.Component<'elements.title-with-image', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-promise.our-promise'
    > &
      Schema.Attribute.Private;
    missionAndVision: Schema.Attribute.Component<
      'our-promises.mission-and-vision',
      false
    >;
    ourValues: Schema.Attribute.Component<'our-promises.our-values', false>;
    promise: Schema.Attribute.Component<'our-promises.ha-promise', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOurStoryOurStory extends Struct.SingleTypeSchema {
  collectionName: 'our_stories';
  info: {
    description: '';
    displayName: 'Our Story';
    pluralName: 'our-stories';
    singularName: 'our-story';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-story.our-story'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    stories: Schema.Attribute.Component<'our-story.story', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiParcelExpressParcelExpress extends Struct.SingleTypeSchema {
  collectionName: 'parcel_expresses';
  info: {
    description: '';
    displayName: 'Parcel Express';
    pluralName: 'parcel-expresses';
    singularName: 'parcel-express';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    additionalInfo: Schema.Attribute.DynamicZone<
      [
        'parcel-express.how-to-accordion',
        'parcel-express.shipping-cost',
        'elements.title-with-ck-editor',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.Component<'parcel-express.parcel-faq', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::parcel-express.parcel-express'
    > &
      Schema.Attribute.Private;
    parcelExpressPage: Schema.Attribute.DynamicZone<
      [
        'elements.title-with-image',
        'elements.title-with-description',
        'common.help',
      ]
    >;
    publishedAt: Schema.Attribute.DateTime;
    rate: Schema.Attribute.Component<'parcel-express.rates', false>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPrivateTourPrivateTour extends Struct.SingleTypeSchema {
  collectionName: 'private_tours';
  info: {
    description: '';
    displayName: 'Private Tours';
    pluralName: 'private-tours';
    singularName: 'private-tour';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bookPrivateTour: Schema.Attribute.Component<
      'private-tours.book-private-tour',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::private-tour.private-tour'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    microsoft_url: Schema.Attribute.String;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    privateTours: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    privateToursForm: Schema.Attribute.Component<
      'form.car-service-hire-form',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whyPrivateTour: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
  };
}

export interface ApiRouteRoute extends Struct.CollectionTypeSchema {
  collectionName: 'routes';
  info: {
    description: '';
    displayName: 'Routes';
    pluralName: 'routes';
    singularName: 'route';
  };
  options: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::route.route'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Arrival - Departure'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSafetyFirstSafetyFirst extends Struct.SingleTypeSchema {
  collectionName: 'safety_firsts';
  info: {
    description: '';
    displayName: 'Safety First';
    pluralName: 'safety-firsts';
    singularName: 'safety-first';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::safety-first.safety-first'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    safetyFirstPage: Schema.Attribute.DynamicZone<
      ['elements.title-with-image', 'elements.text-with-image']
    >;
    safetyFirstTabs: Schema.Attribute.DynamicZone<
      ['elements.title-with-ck-editor']
    >;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiScheduleSchedule extends Struct.SingleTypeSchema {
  collectionName: 'schedules';
  info: {
    description: '';
    displayName: 'Schedules';
    pluralName: 'schedules';
    singularName: 'schedule';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutPage: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::schedule.schedule'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    note: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    publishedAt: Schema.Attribute.DateTime;
    schedules: Schema.Attribute.Component<'schedules.schedules', true>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSeatingOptionSeatingOption extends Struct.SingleTypeSchema {
  collectionName: 'seating_options';
  info: {
    description: '';
    displayName: 'Seating-Option';
    pluralName: 'seating-options';
    singularName: 'seating-option';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::seating-option.seating-option'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<
      [
        'elements.title-with-image',
        'elements.title-with-description',
        'common.accordian',
      ]
    >;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiStandbyTravelStandbyTravel extends Struct.SingleTypeSchema {
  collectionName: 'standby_travels';
  info: {
    description: '';
    displayName: 'Standby Travel';
    pluralName: 'standby-travels';
    singularName: 'standby-travel';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    discountedTravelForm: Schema.Attribute.Component<
      'standby-travel.microsoft-form',
      false
    >;
    howToFly: Schema.Attribute.Component<'standby-travel.how-to-fly', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::standby-travel.standby-travel'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<
      ['standby-travel.standby-travel-info', 'elements.title-with-image']
    >;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    travelTabs: Schema.Attribute.DynamicZone<['standby-travel.travel-tab']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTourLocationTourLocation
  extends Struct.CollectionTypeSchema {
  collectionName: 'tour_locations';
  info: {
    description: '';
    displayName: 'Tour Location';
    pluralName: 'tour-locations';
    singularName: 'tour-location';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    components: Schema.Attribute.DynamicZone<
      [
        'tours.hero-description',
        'tours.featured-tours',
        'main-tours.tour-cards',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    departure: Schema.Attribute.String;
    departureLocation: Schema.Attribute.Relation<
      'manyToOne',
      'api::destination.destination'
    >;
    heroBackgroundImage: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::tour-location.tour-location'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    mobileImagePosition: Schema.Attribute.Enumeration<
      ['left', 'right', 'center']
    >;
    name: Schema.Attribute.String;
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
    >;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    slug: Schema.Attribute.UID<'name'>;
    tours: Schema.Attribute.Relation<
      'oneToMany',
      'api::tours-detail.tours-detail'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiToursDetailToursDetail extends Struct.CollectionTypeSchema {
  collectionName: 'tours_details';
  info: {
    description: '';
    displayName: 'Tours Detail';
    pluralName: 'tours-details';
    singularName: 'tours-detail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrivalLocation: Schema.Attribute.Relation<
      'manyToOne',
      'api::destination.destination'
    >;
    availableOffers: Schema.Attribute.String;
    bookBtnSlug: Schema.Attribute.String;
    bookBtnText: Schema.Attribute.String;
    cardDescription: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    departureLocation: Schema.Attribute.Relation<
      'manyToOne',
      'api::destination.destination'
    >;
    detailsDescription: Schema.Attribute.Blocks;
    detailsTitle: Schema.Attribute.String;
    fare: Schema.Attribute.String;
    fareCategory: Schema.Attribute.String;
    flightDuration: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::tours-detail.tours-detail'
    > &
      Schema.Attribute.Private;
    locationImage: Schema.Attribute.Media<'images'>;
    makeitPrivateBtnSlug: Schema.Attribute.String;
    makeitPrivateBtnText: Schema.Attribute.String;
    microsoftFormUrl: Schema.Attribute.String;
    overviewDescription: Schema.Attribute.Blocks;
    overviewTitle: Schema.Attribute.String;
    person: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    segmentId: Schema.Attribute.String;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    tour_location: Schema.Attribute.Relation<
      'manyToOne',
      'api::tour-location.tour-location'
    >;
    tourFareDetail: Schema.Attribute.Component<'tours.fare-details', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTriggerBuildTriggerBuild extends Struct.SingleTypeSchema {
  collectionName: 'trigger-build';
  info: {
    description: '';
    displayName: 'trigger-build';
    pluralName: 'trigger-builds';
    singularName: 'trigger-build';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    isTriggerBuild: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::trigger-build.trigger-build'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTripAdvisorCommentTripAdvisorComment
  extends Struct.CollectionTypeSchema {
  collectionName: 'trip_advisor_comments';
  info: {
    description: '';
    displayName: 'TripAdvisor Comment';
    pluralName: 'trip-advisor-comments';
    singularName: 'trip-advisor-comment';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    comment: Schema.Attribute.String;
    commenter: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    featured_tour: Schema.Attribute.Relation<
      'manyToOne',
      'api::featured-tour.featured-tour'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::trip-advisor-comment.trip-advisor-comment'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    tripAdvisorLogo: Schema.Attribute.Media<'images'>;
    tripAdvisorUrl: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTurbobucksFlightCreditTurbobucksFlightCredit
  extends Struct.SingleTypeSchema {
  collectionName: 'turbobucks_flight_credits';
  info: {
    description: '';
    displayName: 'Turbobucks Flight Credit';
    pluralName: 'turbobucks-flight-credits';
    singularName: 'turbobucks-flight-credit';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::turbobucks-flight-credit.turbobucks-flight-credit'
    > &
      Schema.Attribute.Private;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    turbobucksFlightCredits: Schema.Attribute.DynamicZone<
      ['loyalty-program.turbobucks-pricing', 'elements.title-with-ck-editor']
    >;
    turbobucksForm: Schema.Attribute.Component<
      'loyalty-program.high-flyer-form',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about-us.about-us': ApiAboutUsAboutUs;
      'api::aerospace-footer.aerospace-footer': ApiAerospaceFooterAerospaceFooter;
      'api::aerospace-header.aerospace-header': ApiAerospaceHeaderAerospaceHeader;
      'api::aerospace-home.aerospace-home': ApiAerospaceHomeAerospaceHome;
      'api::aerospace-testimonial.aerospace-testimonial': ApiAerospaceTestimonialAerospaceTestimonial;
      'api::air-craft-fleet.air-craft-fleet': ApiAirCraftFleetAirCraftFleet;
      'api::assistance.assistance': ApiAssistanceAssistance;
      'api::award.award': ApiAwardAward;
      'api::base-page.base-page': ApiBasePageBasePage;
      'api::blog-list.blog-list': ApiBlogListBlogList;
      'api::blog.blog': ApiBlogBlog;
      'api::blogs-and-new.blogs-and-new': ApiBlogsAndNewBlogsAndNew;
      'api::book-flight.book-flight': ApiBookFlightBookFlight;
      'api::campaign.campaign': ApiCampaignCampaign;
      'api::canadian-passenger-right.canadian-passenger-right': ApiCanadianPassengerRightCanadianPassengerRight;
      'api::car-service.car-service': ApiCarServiceCarService;
      'api::career-opportunity.career-opportunity': ApiCareerOpportunityCareerOpportunity;
      'api::career.career': ApiCareerCareer;
      'api::category.category': ApiCategoryCategory;
      'api::chartered-flight.chartered-flight': ApiCharteredFlightCharteredFlight;
      'api::community-involvement.community-involvement': ApiCommunityInvolvementCommunityInvolvement;
      'api::contact-us.contact-us': ApiContactUsContactUs;
      'api::corporate-resposibility.corporate-resposibility': ApiCorporateResposibilityCorporateResposibility;
      'api::country.country': ApiCountryCountry;
      'api::courtesy-shuttle.courtesy-shuttle': ApiCourtesyShuttleCourtesyShuttle;
      'api::deal.deal': ApiDealDeal;
      'api::destination.destination': ApiDestinationDestination;
      'api::document.document': ApiDocumentDocument;
      'api::dropdown-menu.dropdown-menu': ApiDropdownMenuDropdownMenu;
      'api::email-option.email-option': ApiEmailOptionEmailOption;
      'api::emergency-alert.emergency-alert': ApiEmergencyAlertEmergencyAlert;
      'api::extra-assistance.extra-assistance': ApiExtraAssistanceExtraAssistance;
      'api::faq-content.faq-content': ApiFaqContentFaqContent;
      'api::faq.faq': ApiFaqFaq;
      'api::featured-tour.featured-tour': ApiFeaturedTourFeaturedTour;
      'api::flight-status.flight-status': ApiFlightStatusFlightStatus;
      'api::footer.footer': ApiFooterFooter;
      'api::going-electric.going-electric': ApiGoingElectricGoingElectric;
      'api::google-anlaytic.google-anlaytic': ApiGoogleAnlayticGoogleAnlaytic;
      'api::group-booking.group-booking': ApiGroupBookingGroupBooking;
      'api::header.header': ApiHeaderHeader;
      'api::high-flyer-reward.high-flyer-reward': ApiHighFlyerRewardHighFlyerReward;
      'api::home.home': ApiHomeHome;
      'api::kits-card.kits-card': ApiKitsCardKitsCard;
      'api::link.link': ApiLinkLink;
      'api::location.location': ApiLocationLocation;
      'api::loyalty-program.loyalty-program': ApiLoyaltyProgramLoyaltyProgram;
      'api::luggage.luggage': ApiLuggageLuggage;
      'api::main-deal.main-deal': ApiMainDealMainDeal;
      'api::main-location.main-location': ApiMainLocationMainLocation;
      'api::main-tour.main-tour': ApiMainTourMainTour;
      'api::make-it-private-modal.make-it-private-modal': ApiMakeItPrivateModalMakeItPrivateModal;
      'api::menu-image-link.menu-image-link': ApiMenuImageLinkMenuImageLink;
      'api::mobility.mobility': ApiMobilityMobility;
      'api::moving-past-carbon-neutral.moving-past-carbon-neutral': ApiMovingPastCarbonNeutralMovingPastCarbonNeutral;
      'api::news-list.news-list': ApiNewsListNewsList;
      'api::news.news': ApiNewsNews;
      'api::not-found-page.not-found-page': ApiNotFoundPageNotFoundPage;
      'api::on-account-quick-ticket.on-account-quick-ticket': ApiOnAccountQuickTicketOnAccountQuickTicket;
      'api::our-fare.our-fare': ApiOurFareOurFare;
      'api::our-promise.our-promise': ApiOurPromiseOurPromise;
      'api::our-story.our-story': ApiOurStoryOurStory;
      'api::parcel-express.parcel-express': ApiParcelExpressParcelExpress;
      'api::private-tour.private-tour': ApiPrivateTourPrivateTour;
      'api::route.route': ApiRouteRoute;
      'api::safety-first.safety-first': ApiSafetyFirstSafetyFirst;
      'api::schedule.schedule': ApiScheduleSchedule;
      'api::seating-option.seating-option': ApiSeatingOptionSeatingOption;
      'api::standby-travel.standby-travel': ApiStandbyTravelStandbyTravel;
      'api::tour-location.tour-location': ApiTourLocationTourLocation;
      'api::tours-detail.tours-detail': ApiToursDetailToursDetail;
      'api::trigger-build.trigger-build': ApiTriggerBuildTriggerBuild;
      'api::trip-advisor-comment.trip-advisor-comment': ApiTripAdvisorCommentTripAdvisorComment;
      'api::turbobucks-flight-credit.turbobucks-flight-credit': ApiTurbobucksFlightCreditTurbobucksFlightCredit;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
