import type { Struct, Schema } from '@strapi/strapi';

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
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
    name: Schema.Attribute.String & Schema.Attribute.Required;
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    width: Schema.Attribute.Integer;
    height: Schema.Attribute.Integer;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    ext: Schema.Attribute.String;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    related: Schema.Attribute.Relation<'morphToMany'>;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    >;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
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
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    >;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
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
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    >;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
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
    name: Schema.Attribute.String & Schema.Attribute.Required;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    timezone: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    >;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
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
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    entryDocumentId: Schema.Attribute.String;
    locale: Schema.Attribute.String;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Schema.Attribute.Boolean;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    name: 'Workflow';
    description: '';
    singularName: 'workflow';
    pluralName: 'workflows';
    displayName: 'Workflow';
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
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    name: 'Workflow Stage';
    description: '';
    singularName: 'workflow-stage';
    pluralName: 'workflow-stages';
    displayName: 'Stages';
  };
  options: {
    version: '1.1.0';
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
    name: Schema.Attribute.String;
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
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
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
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
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Schema.Attribute.String;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    timestamps: true;
    draftAndPublish: false;
  };
  attributes: {
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiAboutUsAboutUs extends Struct.SingleTypeSchema {
  collectionName: 'all_about_us';
  info: {
    singularName: 'about-us';
    pluralName: 'all-about-us';
    displayName: 'About-us';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Schema.Attribute.Component<
      'elements.title-with-desc-and-image',
      false
    >;
    achievement: Schema.Attribute.Component<
      'elements.harbour-air-services',
      true
    >;
    aboutDetails: Schema.Attribute.Component<
      'elements.harbour-air-article',
      true
    >;
    turbo: Schema.Attribute.Component<'about-us.about-us-turbo', false>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-us.about-us'
    >;
  };
}

export interface ApiAirCraftFleetAirCraftFleet extends Struct.SingleTypeSchema {
  collectionName: 'air_craft_fleets';
  info: {
    singularName: 'air-craft-fleet';
    pluralName: 'air-craft-fleets';
    displayName: 'AirCraft Fleet';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    sections: Schema.Attribute.DynamicZone<
      ['elements.title-with-image', 'elements.title-with-description']
    >;
    tabs: Schema.Attribute.DynamicZone<['aircraft-fleet.aircraft-fleet-tabs']>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::air-craft-fleet.air-craft-fleet'
    >;
  };
}

export interface ApiAssistanceAssistance extends Struct.CollectionTypeSchema {
  collectionName: 'assistances';
  info: {
    singularName: 'assistance';
    pluralName: 'assistances';
    displayName: 'Assistance';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slug: Schema.Attribute.UID;
    components: Schema.Attribute.DynamicZone<
      [
        'elements.title-with-image',
        'elements.title-with-description',
        'common.help',
        'extra-assistance.files',
        'extra-assistance.accordion-with-editor',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::assistance.assistance'
    >;
  };
}

export interface ApiAwardAward extends Struct.SingleTypeSchema {
  collectionName: 'awards';
  info: {
    singularName: 'award';
    pluralName: 'awards';
    displayName: 'Awards';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.Component<'elements.title-with-image', false> &
      Schema.Attribute.Required;
    about: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    awards: Schema.Attribute.Component<'elements.harbour-air-services', true>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::award.award'>;
  };
}

export interface ApiBasePageBasePage extends Struct.CollectionTypeSchema {
  collectionName: 'base_pages';
  info: {
    singularName: 'base-page';
    pluralName: 'base-pages';
    displayName: 'Base Pages';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slug: Schema.Attribute.UID & Schema.Attribute.Required;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    sections: Schema.Attribute.DynamicZone<
      [
        'elements.accordion',
        'elements.title-with-ck-editor',
        'elements.title-with-image',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::base-page.base-page'
    >;
  };
}

export interface ApiBlogBlog extends Struct.CollectionTypeSchema {
  collectionName: 'blogs';
  info: {
    singularName: 'blog';
    pluralName: 'blogs';
    displayName: 'Blogs';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    shortDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    coverImage: Schema.Attribute.Media<'images'>;
    category: Schema.Attribute.Relation<'manyToOne', 'api::category.category'>;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    readingTime: Schema.Attribute.String;
    postedDate: Schema.Attribute.Date;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
  };
}

export interface ApiBlogListBlogList extends Struct.SingleTypeSchema {
  collectionName: 'blog_lists';
  info: {
    singularName: 'blog-list';
    pluralName: 'blog-lists';
    displayName: 'Blog List';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    latestBlog: Schema.Attribute.Relation<'oneToOne', 'api::blog.blog'>;
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-list.blog-list'
    >;
  };
}

export interface ApiBlogsAndNewBlogsAndNew extends Struct.SingleTypeSchema {
  collectionName: 'blogs_and_news';
  info: {
    singularName: 'blogs-and-new';
    pluralName: 'blogs-and-news';
    displayName: 'Blogs And News';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    breakingNews: Schema.Attribute.Relation<'oneToOne', 'api::news.news'>;
    latestNews: Schema.Attribute.Relation<'oneToMany', 'api::news.news'>;
    latestBlogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    blogsCoverImage: Schema.Attribute.Media<'images'>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    latestNewsTitle: Schema.Attribute.String & Schema.Attribute.Required;
    latestBlogsTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blogs-and-new.blogs-and-new'
    >;
  };
}

export interface ApiBookFlightBookFlight extends Struct.SingleTypeSchema {
  collectionName: 'book_flights';
  info: {
    singularName: 'book-flight';
    pluralName: 'book-flights';
    displayName: 'Book Flights';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    specialOffers: Schema.Attribute.Relation<'oneToMany', 'api::deal.deal'>;
    specialOffersTitle: Schema.Attribute.String & Schema.Attribute.Required;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    moreDeals: Schema.Attribute.Component<'elements.button', false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::book-flight.book-flight'
    >;
  };
}

export interface ApiCanadianPassengerRightCanadianPassengerRight
  extends Struct.SingleTypeSchema {
  collectionName: 'canadian_passenger_rights';
  info: {
    singularName: 'canadian-passenger-right';
    pluralName: 'canadian-passenger-rights';
    displayName: 'Canadian Passenger Right';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    contactDetailForm: Schema.Attribute.Component<
      'further-questions.contact-form',
      false
    >;
    sections: Schema.Attribute.DynamicZone<
      [
        'elements.title-with-image',
        'elements.title-with-description',
        'common.accordian',
        'canadian-passenger-rights.tariffs',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::canadian-passenger-right.canadian-passenger-right'
    >;
  };
}

export interface ApiCarServiceCarService extends Struct.SingleTypeSchema {
  collectionName: 'car_services';
  info: {
    singularName: 'car-service';
    pluralName: 'car-services';
    displayName: 'Car Services';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    evoCar: Schema.Attribute.Component<
      'elements.title-with-desc-and-image',
      false
    >;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    carTypes: Schema.Attribute.Component<
      'elements.title-desc-with-image-links',
      true
    >;
    carHireRequestForm: Schema.Attribute.Component<
      'further-questions.contact-form',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::car-service.car-service'
    >;
  };
}

export interface ApiCareerCareer extends Struct.SingleTypeSchema {
  collectionName: 'careers';
  info: {
    singularName: 'career';
    pluralName: 'careers';
    displayName: 'Career';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    careerPage: Schema.Attribute.DynamicZone<
      [
        'elements.title-with-description',
        'careers.careers-table',
        'elements.title-with-image',
        'common.accordian',
        'careers.tab-with-youtube-link',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::career.career'>;
  };
}

export interface ApiCareerOpportunityCareerOpportunity
  extends Struct.CollectionTypeSchema {
  collectionName: 'career_opportunities';
  info: {
    singularName: 'career-opportunity';
    pluralName: 'career-opportunities';
    displayName: 'Career Opportunity';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    position: Schema.Attribute.String;
    location: Schema.Attribute.Relation<'oneToOne', 'api::location.location'>;
    slug: Schema.Attribute.UID;
    applicationDeadline: Schema.Attribute.Date;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::career-opportunity.career-opportunity'
    >;
  };
}

export interface ApiCategoryCategory extends Struct.CollectionTypeSchema {
  collectionName: 'categories';
  info: {
    singularName: 'category';
    pluralName: 'categories';
    displayName: 'Category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String;
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    news: Schema.Attribute.Relation<'oneToMany', 'api::news.news'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface ApiCharteredFlightCharteredFlight
  extends Struct.SingleTypeSchema {
  collectionName: 'chartered_flights';
  info: {
    singularName: 'chartered-flight';
    pluralName: 'chartered-flights';
    displayName: 'Chartered Flight';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    charteredFlightForm: Schema.Attribute.Component<
      'form.car-service-hire-form',
      false
    >;
    charteredFlightPage: Schema.Attribute.DynamicZone<
      ['common.accordian', 'elements.title-with-description']
    >;
    charteredFlightTab: Schema.Attribute.DynamicZone<
      [
        'chartered-flights-page.pricing-tab',
        'chartered-flights-page.fleet-tab',
        'chartered-flights-page.destination',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::chartered-flight.chartered-flight'
    >;
  };
}

export interface ApiCommunityInvolvementCommunityInvolvement
  extends Struct.SingleTypeSchema {
  collectionName: 'community_involvements';
  info: {
    singularName: 'community-involvement';
    pluralName: 'community-involvements';
    displayName: 'Community Involvement';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tabs: Schema.Attribute.Component<
      'elements.title-with-desc-and-image',
      true
    >;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    sections: Schema.Attribute.DynamicZone<
      ['elements.title-with-image', 'elements.title-with-ck-editor']
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::community-involvement.community-involvement'
    >;
  };
}

export interface ApiContactUsContactUs extends Struct.SingleTypeSchema {
  collectionName: 'all_contact_us';
  info: {
    singularName: 'contact-us';
    pluralName: 'all-contact-us';
    displayName: 'Contact Us';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    faq: Schema.Attribute.Component<
      'elements.title-with-desc-and-image',
      false
    >;
    joinOurTeam: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    yourExperience: Schema.Attribute.Component<
      'elements.title-desc-with-image-links',
      false
    >;
    contactCenter: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    hoursOfOperation: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    contactDetails: Schema.Attribute.Component<
      'further-questions.contact-form',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-us.contact-us'
    >;
  };
}

export interface ApiCorporateResposibilityCorporateResposibility
  extends Struct.SingleTypeSchema {
  collectionName: 'corporate_resposibilities';
  info: {
    singularName: 'corporate-resposibility';
    pluralName: 'corporate-resposibilities';
    displayName: 'Corporate Resposibility';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageTitle: Schema.Attribute.Component<
      'elements.title-with-desc-and-image',
      false
    >;
    responsibilities: Schema.Attribute.Component<
      'elements.harbour-air-article',
      true
    >;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::corporate-resposibility.corporate-resposibility'
    >;
  };
}

export interface ApiCountryCountry extends Struct.CollectionTypeSchema {
  collectionName: 'countries';
  info: {
    singularName: 'country';
    pluralName: 'countries';
    displayName: 'Country';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String;
    code: Schema.Attribute.String;
    countryWeightId: Schema.Attribute.String;
    dealsDepartures: Schema.Attribute.Relation<'oneToMany', 'api::deal.deal'>;
    dealsArrivals: Schema.Attribute.Relation<'oneToMany', 'api::deal.deal'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::country.country'
    >;
  };
}

export interface ApiCourtesyShuttleCourtesyShuttle
  extends Struct.SingleTypeSchema {
  collectionName: 'courtesy_shuttles';
  info: {
    singularName: 'courtesy-shuttle';
    pluralName: 'courtesy-shuttles';
    displayName: 'Courtesy shuttles';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Schema.Attribute.Component<'seo.seo', false>;
    courtesyShuttlePage: Schema.Attribute.DynamicZone<
      ['elements.title-with-image', 'elements.title-with-ck-editor']
    >;
    courtesyShuttleTabs: Schema.Attribute.DynamicZone<
      ['elements.title-with-ck-editor']
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::courtesy-shuttle.courtesy-shuttle'
    >;
  };
}

export interface ApiDealDeal extends Struct.CollectionTypeSchema {
  collectionName: 'deals';
  info: {
    singularName: 'deal';
    pluralName: 'deals';
    displayName: 'Deal';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    dealImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    fare: Schema.Attribute.String & Schema.Attribute.Required;
    origin: Schema.Attribute.String & Schema.Attribute.Required;
    destination: Schema.Attribute.String & Schema.Attribute.Required;
    bookNowButton: Schema.Attribute.Component<'elements.button', false> &
      Schema.Attribute.Required;
    route: Schema.Attribute.Text & Schema.Attribute.Required;
    date: Schema.Attribute.String & Schema.Attribute.Required;
    summary: Schema.Attribute.Blocks & Schema.Attribute.Required;
    active: Schema.Attribute.Boolean;
    fareText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'One Way fares from'>;
    departureLocation: Schema.Attribute.Relation<
      'manyToOne',
      'api::country.country'
    >;
    arrivalLocation: Schema.Attribute.Relation<
      'manyToOne',
      'api::country.country'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::deal.deal'>;
  };
}

export interface ApiDestinationDestination extends Struct.CollectionTypeSchema {
  collectionName: 'destinations';
  info: {
    singularName: 'destination';
    pluralName: 'destinations';
    displayName: 'Destinations';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    location: Schema.Attribute.String;
    locationId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    tag: Schema.Attribute.String;
    Category: Schema.Attribute.String;
    latitude: Schema.Attribute.String & Schema.Attribute.Required;
    longitude: Schema.Attribute.String & Schema.Attribute.Required;
    pickup: Schema.Attribute.String;
    pickupDefault: Schema.Attribute.String;
    dropOff: Schema.Attribute.String;
    dropOffDefault: Schema.Attribute.String;
    dropOffRequired: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    pickupRequired: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    map: Schema.Attribute.String;
    routesDeparture: Schema.Attribute.Relation<'oneToMany', 'api::route.route'>;
    routesArrivals: Schema.Attribute.Relation<'oneToMany', 'api::route.route'>;
    destinationImg: Schema.Attribute.Media<'images'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::destination.destination'
    >;
  };
}

export interface ApiDocumentDocument extends Struct.CollectionTypeSchema {
  collectionName: 'documents';
  info: {
    singularName: 'document';
    pluralName: 'documents';
    displayName: 'Document';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    fileName: Schema.Attribute.String;
    file: Schema.Attribute.Media<'files'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::document.document'
    >;
  };
}

export interface ApiDropdownMenuDropdownMenu
  extends Struct.CollectionTypeSchema {
  collectionName: 'dropdown_menus';
  info: {
    singularName: 'dropdown-menu';
    pluralName: 'dropdown-menus';
    displayName: 'Dropdown Menu';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    menuTitle: Schema.Attribute.Component<'header.link', false>;
    menus: Schema.Attribute.DynamicZone<['header.link', 'header.media-links']>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::dropdown-menu.dropdown-menu'
    >;
  };
}

export interface ApiEmailOptionEmailOption extends Struct.CollectionTypeSchema {
  collectionName: 'email_options';
  info: {
    singularName: 'email-option';
    pluralName: 'email-options';
    displayName: 'Email Option';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    toEmails: Schema.Attribute.Component<'form.email-form', true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::email-option.email-option'
    >;
  };
}

export interface ApiExtraAssistanceExtraAssistance
  extends Struct.SingleTypeSchema {
  collectionName: 'extra_assistances';
  info: {
    singularName: 'extra-assistance';
    pluralName: 'extra-assistances';
    displayName: 'Extra Assistance';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    pageTitle: Schema.Attribute.Component<
      'elements.title-with-media-and-button',
      false
    >;
    cards: Schema.Attribute.DynamicZone<['extra-assistance.assistance']>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::extra-assistance.extra-assistance'
    >;
  };
}

export interface ApiFaqFaq extends Struct.SingleTypeSchema {
  collectionName: 'faqs';
  info: {
    singularName: 'faq';
    pluralName: 'faqs';
    displayName: 'Faq';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String;
    knowBeforeTitle: Schema.Attribute.String;
    accordionSection: Schema.Attribute.Component<'faq.accordion', false>;
    searchButton: Schema.Attribute.Component<'faq.button-with-boolean', false>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    contactDetails: Schema.Attribute.Component<
      'further-questions.contact-form',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
  };
}

export interface ApiFaqContentFaqContent extends Struct.CollectionTypeSchema {
  collectionName: 'faq_contents';
  info: {
    singularName: 'faq-content';
    pluralName: 'faq-contents';
    displayName: 'Faq Content';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String;
    question: Schema.Attribute.String;
    answer: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-content.faq-content'
    >;
  };
}

export interface ApiFeaturedTourFeaturedTour
  extends Struct.CollectionTypeSchema {
  collectionName: 'featured_tours';
  info: {
    singularName: 'featured-tour';
    pluralName: 'featured-tours';
    displayName: 'Featured Tour';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    learnMoreButton: Schema.Attribute.Component<'elements.button', false>;
    tripAdvisorComment: Schema.Attribute.Relation<
      'oneToMany',
      'api::trip-advisor-comment.trip-advisor-comment'
    >;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::featured-tour.featured-tour'
    >;
  };
}

export interface ApiFlightStatusFlightStatus extends Struct.SingleTypeSchema {
  collectionName: 'flight_statuses';
  info: {
    singularName: 'flight-status';
    pluralName: 'flight-statuses';
    displayName: 'Flight Status';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    flightStatusInfo: Schema.Attribute.Blocks;
    flighStatusTitle: Schema.Attribute.Component<
      'elements.title-with-image',
      false
    >;
    flightStatusDescription: Schema.Attribute.Component<
      'elements.title-with-description',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::flight-status.flight-status'
    >;
  };
}

export interface ApiFooterFooter extends Struct.SingleTypeSchema {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'Footer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    footerlinks: Schema.Attribute.Component<'footer.footer-links', true>;
    footerlogos: Schema.Attribute.Component<'footer.footer-logo-links', false>;
    harbourairLogo: Schema.Attribute.Media<'images'>;
    copyrights: Schema.Attribute.String;
    bottomLinks: Schema.Attribute.Component<'footer.link', true>;
    stayUpToDateSection: Schema.Attribute.Component<
      'footer.footer-stay-update',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::footer.footer'>;
  };
}

export interface ApiGoingElectricGoingElectric extends Struct.SingleTypeSchema {
  collectionName: 'going_electrics';
  info: {
    singularName: 'going-electric';
    pluralName: 'going-electrics';
    displayName: 'Going Electric';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageTitle: Schema.Attribute.Component<
      'elements.title-with-desc-and-image',
      false
    >;
    pageAbout: Schema.Attribute.Component<
      'elements.title-with-desc-and-image',
      false
    >;
    infoSection: Schema.Attribute.Component<
      'elements.harbour-air-services',
      true
    >;
    stories: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    inquiries: Schema.Attribute.Component<
      'going-electric.going-electring-inquires',
      false
    >;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    tabs: Schema.Attribute.DynamicZone<
      [
        'elements.title-with-ck-editor',
        'elements.gallery',
        'going-electric.specifications',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::going-electric.going-electric'
    >;
  };
}

export interface ApiGoogleAnlayticGoogleAnlaytic
  extends Struct.SingleTypeSchema {
  collectionName: 'google_anlaytics';
  info: {
    singularName: 'google-anlaytic';
    pluralName: 'google-anlaytics';
    displayName: 'Google Anlaytic';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    analytics: Schema.Attribute.Component<'seo.analytics', false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::google-anlaytic.google-anlaytic'
    >;
  };
}

export interface ApiGroupBookingGroupBooking extends Struct.SingleTypeSchema {
  collectionName: 'group_bookings';
  info: {
    singularName: 'group-booking';
    pluralName: 'group-bookings';
    displayName: 'Group Bookings';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    pageDetails: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    howToBook: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    showBookingForm: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    groupBookingForm: Schema.Attribute.Component<
      'form.car-service-hire-form',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::group-booking.group-booking'
    >;
  };
}

export interface ApiHeaderHeader extends Struct.SingleTypeSchema {
  collectionName: 'headers';
  info: {
    singularName: 'header';
    pluralName: 'headers';
    displayName: 'Header';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    mobileLogo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    desktopLogo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    profileButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    navigationLinks: Schema.Attribute.DynamicZone<
      ['header.link', 'header.dropdown']
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::header.header'>;
  };
}

export interface ApiHomeHome extends Struct.SingleTypeSchema {
  collectionName: 'homes';
  info: {
    singularName: 'home';
    pluralName: 'homes';
    displayName: 'Home';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Schema.Attribute.Component<'seo.seo', false>;
    title: Schema.Attribute.String;
    homePageCarousel: Schema.Attribute.Component<'home.hero-carousel', false>;
    instagramSection: Schema.Attribute.Component<'home.home-instagram', false>;
    serviceHighlights: Schema.Attribute.Component<'home.description', false>;
    deals: Schema.Attribute.Component<'home.grab-deals', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    tours: Schema.Attribute.Component<'home.home-tours', false>;
    locations: Schema.Attribute.Component<'home.home-locations', false>;
    news: Schema.Attribute.Component<'home.news', false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::home.home'>;
  };
}

export interface ApiLinkLink extends Struct.CollectionTypeSchema {
  collectionName: 'links';
  info: {
    singularName: 'link';
    pluralName: 'links';
    displayName: 'Link';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::link.link'>;
  };
}

export interface ApiLocationLocation extends Struct.CollectionTypeSchema {
  collectionName: 'locations';
  info: {
    singularName: 'location';
    pluralName: 'locations';
    displayName: 'Location';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    name: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    heroImage: Schema.Attribute.Media<'images' | 'videos'>;
    locationPhotos: Schema.Attribute.Media<'images' | 'videos', true>;
    locationVideo: Schema.Attribute.Media<'images' | 'videos'>;
    learnMoreBtnText: Schema.Attribute.String;
    shortDescription: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    guide: Schema.Attribute.Component<'inside-location.guide', false>;
    additionalInformation: Schema.Attribute.Component<
      'inside-location.additionalinfo-details',
      true
    >;
    address: Schema.Attribute.Component<'inside-location.address', false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::location.location'
    >;
  };
}

export interface ApiLoyaltyProgramLoyaltyProgram
  extends Struct.SingleTypeSchema {
  collectionName: 'loyalty_programs';
  info: {
    singularName: 'loyalty-program';
    pluralName: 'loyalty-programs';
    displayName: 'Loyalty Programs';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    highFlyerTabTitle: Schema.Attribute.String & Schema.Attribute.Required;
    turbobucksTabTitle: Schema.Attribute.String & Schema.Attribute.Required;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    turbobucksForm: Schema.Attribute.Component<
      'loyalty-program.high-flyer-form',
      false
    >;
    highFlyerForm: Schema.Attribute.Component<
      'loyalty-program.high-flyer-rewards-form',
      false
    >;
    pageAbout: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    highFlyerRewards: Schema.Attribute.DynamicZone<
      [
        'elements.title-with-ck-editor',
        'loyalty-program.high-flyer-membership-levels',
      ]
    >;
    turbobucksFlightCredits: Schema.Attribute.DynamicZone<
      ['loyalty-program.turbobucks-pricing', 'elements.title-with-ck-editor']
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::loyalty-program.loyalty-program'
    >;
  };
}

export interface ApiLuggageLuggage extends Struct.SingleTypeSchema {
  collectionName: 'luggages';
  info: {
    singularName: 'luggage';
    pluralName: 'luggages';
    displayName: 'Luggage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    luggageAllowanceTab: Schema.Attribute.Component<
      'luggage.luggage-allowance',
      false
    >;
    luggageAllowanceTable: Schema.Attribute.Component<
      'our-fares.fare-details',
      true
    >;
    travellingExcessLuggageTab: Schema.Attribute.Component<
      'luggage.travelling-with-excess-luggage',
      false
    >;
    specialLuggageTab: Schema.Attribute.Component<'luggage.special', false>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    luggagePage: Schema.Attribute.DynamicZone<
      ['elements.title-with-image', 'luggage.hero-description']
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::luggage.luggage'
    >;
  };
}

export interface ApiMainDealMainDeal extends Struct.SingleTypeSchema {
  collectionName: 'main_deals';
  info: {
    singularName: 'main-deal';
    pluralName: 'main-deals';
    displayName: 'Main Deal';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    selectAllText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'All'>;
    customizedText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Customized'>;
    searchButton: Schema.Attribute.Component<'elements.button', false> &
      Schema.Attribute.Required;
    deals: Schema.Attribute.Relation<'oneToMany', 'api::deal.deal'>;
    dealsBanner: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::main-deal.main-deal'
    >;
  };
}

export interface ApiMainLocationMainLocation extends Struct.SingleTypeSchema {
  collectionName: 'main_locations';
  info: {
    singularName: 'main-location';
    pluralName: 'main-locations';
    displayName: 'Main Location';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    locations: Schema.Attribute.Relation<'oneToMany', 'api::location.location'>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    pageTitle: Schema.Attribute.Component<
      'elements.title-with-media-and-button',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::main-location.main-location'
    >;
  };
}

export interface ApiMainTourMainTour extends Struct.SingleTypeSchema {
  collectionName: 'tours';
  info: {
    singularName: 'main-tour';
    pluralName: 'main-tours';
    displayName: 'Main Tour';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    mainTourPage: Schema.Attribute.DynamicZone<
      ['main-tours.featured-tours', 'main-tours.fare-section']
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::main-tour.main-tour'
    >;
  };
}

export interface ApiMakeItPrivateModalMakeItPrivateModal
  extends Struct.SingleTypeSchema {
  collectionName: 'make_it_private_modals';
  info: {
    singularName: 'make-it-private-modal';
    pluralName: 'make-it-private-modals';
    displayName: 'Make It Private Modal';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    emailOption: Schema.Attribute.Relation<
      'oneToOne',
      'api::email-option.email-option'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::make-it-private-modal.make-it-private-modal'
    >;
  };
}

export interface ApiMenuImageLinkMenuImageLink
  extends Struct.CollectionTypeSchema {
  collectionName: 'menu_image_links';
  info: {
    singularName: 'menu-image-link';
    pluralName: 'menu-image-links';
    displayName: 'Menu Image Link';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::menu-image-link.menu-image-link'
    >;
  };
}

export interface ApiMobilityMobility extends Struct.SingleTypeSchema {
  collectionName: 'mobilities';
  info: {
    singularName: 'mobility';
    pluralName: 'mobilities';
    displayName: 'Mobility';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    section: Schema.Attribute.DynamicZone<
      [
        'elements.title-with-image',
        'mobility.hero-section',
        'elements.title-with-description',
        'mobility.images',
        'common.help',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::mobility.mobility'
    >;
  };
}

export interface ApiMovingPastCarbonNeutralMovingPastCarbonNeutral
  extends Struct.SingleTypeSchema {
  collectionName: 'moving_past_carbon_neutrals';
  info: {
    singularName: 'moving-past-carbon-neutral';
    pluralName: 'moving-past-carbon-neutrals';
    displayName: 'Moving Past Carbon Neutral';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tabs: Schema.Attribute.Component<'elements.title-with-ck-editor', true>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    section: Schema.Attribute.DynamicZone<
      ['elements.title-with-image', 'elements.title-with-ck-editor']
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::moving-past-carbon-neutral.moving-past-carbon-neutral'
    >;
  };
}

export interface ApiNewsNews extends Struct.CollectionTypeSchema {
  collectionName: 'all_news';
  info: {
    singularName: 'news';
    pluralName: 'all-news';
    displayName: 'News';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    shortDescription: Schema.Attribute.String & Schema.Attribute.Required;
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    coverImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    category: Schema.Attribute.Relation<'manyToOne', 'api::category.category'>;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    readingTime: Schema.Attribute.String;
    postedDate: Schema.Attribute.Date;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::news.news'>;
  };
}

export interface ApiNewsListNewsList extends Struct.SingleTypeSchema {
  collectionName: 'news_lists';
  info: {
    singularName: 'news-list';
    pluralName: 'news-lists';
    displayName: 'News List';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-list.news-list'
    >;
  };
}

export interface ApiNotFoundPageNotFoundPage extends Struct.SingleTypeSchema {
  collectionName: 'not_found_pages';
  info: {
    singularName: 'not-found-page';
    pluralName: 'not-found-pages';
    displayName: 'Not found Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner_image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::not-found-page.not-found-page'
    >;
  };
}

export interface ApiNoticeNotice extends Struct.CollectionTypeSchema {
  collectionName: 'notices';
  info: {
    singularName: 'notice';
    pluralName: 'notices';
    displayName: 'Notice';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::notice.notice'>;
  };
}

export interface ApiOnAccountQuickTicketOnAccountQuickTicket
  extends Struct.SingleTypeSchema {
  collectionName: 'on_account_quick_tickets';
  info: {
    singularName: 'on-account-quick-ticket';
    pluralName: 'on-account-quick-tickets';
    displayName: 'On-Account Quick Tickets';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    aboutPage: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    form: Schema.Attribute.Component<'quick-ticket.quick-ticket-form', false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::on-account-quick-ticket.on-account-quick-ticket'
    >;
  };
}

export interface ApiOurFareOurFare extends Struct.SingleTypeSchema {
  collectionName: 'our_fares';
  info: {
    singularName: 'our-fare';
    pluralName: 'our-fares';
    displayName: 'Our Fares';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    pageAbout: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    fareOptions: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      true
    >;
    fareDetails: Schema.Attribute.Component<'our-fares.fare-details', true>;
    helperContent: Schema.Attribute.Component<
      'our-fares.fare-helper-content',
      true
    >;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-fare.our-fare'
    >;
  };
}

export interface ApiOurPromiseOurPromise extends Struct.SingleTypeSchema {
  collectionName: 'our_promises';
  info: {
    singularName: 'our-promise';
    pluralName: 'our-promises';
    displayName: 'Our Promises';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.title-with-image', false>;
    missionAndVision: Schema.Attribute.Component<
      'our-promises.mission-and-vision',
      false
    >;
    ourValues: Schema.Attribute.Component<'our-promises.our-values', false>;
    promise: Schema.Attribute.Component<'our-promises.ha-promise', false>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-promise.our-promise'
    >;
  };
}

export interface ApiOurStoryOurStory extends Struct.SingleTypeSchema {
  collectionName: 'our_stories';
  info: {
    singularName: 'our-story';
    pluralName: 'our-stories';
    displayName: 'Our Story';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    stories: Schema.Attribute.Component<'our-story.story', true>;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-story.our-story'
    >;
  };
}

export interface ApiParcelExpressParcelExpress extends Struct.SingleTypeSchema {
  collectionName: 'parcel_expresses';
  info: {
    singularName: 'parcel-express';
    pluralName: 'parcel-expresses';
    displayName: 'Parcel Express';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    rate: Schema.Attribute.Component<'parcel-express.rates', false>;
    faq: Schema.Attribute.Component<'parcel-express.parcel-faq', false>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    quoteFormInfo: Schema.Attribute.Component<
      'form.car-service-hire-form',
      false
    >;
    parcelExpressPage: Schema.Attribute.DynamicZone<
      [
        'elements.title-with-image',
        'elements.title-with-description',
        'common.help',
      ]
    >;
    additionalInfo: Schema.Attribute.DynamicZone<
      [
        'parcel-express.how-to-accordion',
        'parcel-express.shipping-cost',
        'elements.title-with-ck-editor',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::parcel-express.parcel-express'
    >;
  };
}

export interface ApiPrivateTourPrivateTour extends Struct.SingleTypeSchema {
  collectionName: 'private_tours';
  info: {
    singularName: 'private-tour';
    pluralName: 'private-tours';
    displayName: 'Private Tours';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    privateTours: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    whyPrivateTour: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    bookPrivateTour: Schema.Attribute.Component<
      'elements.title-with-desc-and-multi-media',
      false
    >;
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    privateToursForm: Schema.Attribute.Component<
      'form.car-service-hire-form',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::private-tour.private-tour'
    >;
  };
}

export interface ApiRouteRoute extends Struct.CollectionTypeSchema {
  collectionName: 'routes';
  info: {
    singularName: 'route';
    pluralName: 'routes';
    displayName: 'Routes';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    departure: Schema.Attribute.Relation<
      'manyToOne',
      'api::destination.destination'
    >;
    arrival: Schema.Attribute.Relation<
      'manyToOne',
      'api::destination.destination'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::route.route'>;
  };
}

export interface ApiSafetyFirstSafetyFirst extends Struct.SingleTypeSchema {
  collectionName: 'safety_firsts';
  info: {
    singularName: 'safety-first';
    pluralName: 'safety-firsts';
    displayName: 'Safety First';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Schema.Attribute.Component<'seo.seo', false>;
    safetyFirstPage: Schema.Attribute.DynamicZone<
      ['elements.title-with-image', 'elements.text-with-image']
    >;
    safetyFirstTabs: Schema.Attribute.DynamicZone<
      ['elements.title-with-ck-editor']
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::safety-first.safety-first'
    >;
  };
}

export interface ApiScheduleSchedule extends Struct.SingleTypeSchema {
  collectionName: 'schedules';
  info: {
    singularName: 'schedule';
    pluralName: 'schedules';
    displayName: 'Schedules';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageTitle: Schema.Attribute.Component<'elements.title-with-image', false>;
    aboutPage: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    note: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    schedules: Schema.Attribute.Component<'schedules.schedules', true>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::schedule.schedule'
    >;
  };
}

export interface ApiSeatingOptionSeatingOption extends Struct.SingleTypeSchema {
  collectionName: 'seating_options';
  info: {
    singularName: 'seating-option';
    pluralName: 'seating-options';
    displayName: 'Seating-Option';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    sections: Schema.Attribute.DynamicZone<
      [
        'elements.title-with-image',
        'elements.title-with-description',
        'common.accordian',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::seating-option.seating-option'
    >;
  };
}

export interface ApiStandbyTravelStandbyTravel extends Struct.SingleTypeSchema {
  collectionName: 'standby_travels';
  info: {
    singularName: 'standby-travel';
    pluralName: 'standby-travels';
    displayName: 'Standby Travel';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    howToFly: Schema.Attribute.Component<'standby-travel.how-to-fly', false>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    discountedTravelForm: Schema.Attribute.Component<
      'standby-travel.microsoft-form',
      false
    >;
    sections: Schema.Attribute.DynamicZone<
      ['standby-travel.standby-travel-info', 'elements.title-with-image']
    >;
    travelTabs: Schema.Attribute.DynamicZone<['standby-travel.travel-tab']>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::standby-travel.standby-travel'
    >;
  };
}

export interface ApiTourLocationTourLocation
  extends Struct.CollectionTypeSchema {
  collectionName: 'tour_locations';
  info: {
    singularName: 'tour-location';
    pluralName: 'tour-locations';
    displayName: 'Tour Location';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'name'>;
    heroBackgroundImage: Schema.Attribute.Media<'images'>;
    tours: Schema.Attribute.Relation<
      'oneToMany',
      'api::tours-detail.tours-detail'
    >;
    departure: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    metaData: Schema.Attribute.Component<'meta-data.meta-data', false>;
    country: Schema.Attribute.Relation<'oneToOne', 'api::country.country'>;
    components: Schema.Attribute.DynamicZone<
      [
        'tours.hero-description',
        'tours.featured-tours',
        'main-tours.tour-cards',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::tour-location.tour-location'
    >;
  };
}

export interface ApiToursDetailToursDetail extends Struct.CollectionTypeSchema {
  collectionName: 'tours_details';
  info: {
    singularName: 'tours-detail';
    pluralName: 'tours-details';
    displayName: 'Tours Detail';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    locationImage: Schema.Attribute.Media<'images'>;
    tour_location: Schema.Attribute.Relation<
      'manyToOne',
      'api::tour-location.tour-location'
    >;
    overviewTitle: Schema.Attribute.String;
    overviewDescription: Schema.Attribute.Blocks;
    detailsTitle: Schema.Attribute.String;
    detailsDescription: Schema.Attribute.Blocks;
    tourFareDetail: Schema.Attribute.Component<'tours.fare-details', true>;
    flightDuration: Schema.Attribute.String;
    availableOffers: Schema.Attribute.String;
    cardDescription: Schema.Attribute.String;
    fareCategory: Schema.Attribute.String;
    fare: Schema.Attribute.String;
    person: Schema.Attribute.String;
    bookBtnText: Schema.Attribute.String;
    bookBtnSlug: Schema.Attribute.String;
    makeitPrivateBtnText: Schema.Attribute.String;
    makeitPrivateBtnSlug: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::tours-detail.tours-detail'
    >;
  };
}

export interface ApiTriggerBuildTriggerBuild extends Struct.SingleTypeSchema {
  collectionName: 'trigger-build';
  info: {
    singularName: 'trigger-build';
    pluralName: 'trigger-builds';
    displayName: 'trigger-build';
    description: '';
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
    isTriggerBuild: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::trigger-build.trigger-build'
    >;
  };
}

export interface ApiTripAdvisorCommentTripAdvisorComment
  extends Struct.CollectionTypeSchema {
  collectionName: 'trip_advisor_comments';
  info: {
    singularName: 'trip-advisor-comment';
    pluralName: 'trip-advisor-comments';
    displayName: 'TripAdvisor Comment';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tripAdvisorLogo: Schema.Attribute.Media<'images'>;
    comment: Schema.Attribute.String;
    commenter: Schema.Attribute.String;
    backgroundImage: Schema.Attribute.Media<'images'>;
    featured_tour: Schema.Attribute.Relation<
      'manyToOne',
      'api::featured-tour.featured-tour'
    >;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    tripAdvisorUrl: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::trip-advisor-comment.trip-advisor-comment'
    >;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
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
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
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
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Schema.Attribute.String;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    preferedLanguage: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'>;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
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
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'>;
  };
}

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
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
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'>;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
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
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
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
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    >;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
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
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about-us.about-us': ApiAboutUsAboutUs;
      'api::air-craft-fleet.air-craft-fleet': ApiAirCraftFleetAirCraftFleet;
      'api::assistance.assistance': ApiAssistanceAssistance;
      'api::award.award': ApiAwardAward;
      'api::base-page.base-page': ApiBasePageBasePage;
      'api::blog.blog': ApiBlogBlog;
      'api::blog-list.blog-list': ApiBlogListBlogList;
      'api::blogs-and-new.blogs-and-new': ApiBlogsAndNewBlogsAndNew;
      'api::book-flight.book-flight': ApiBookFlightBookFlight;
      'api::canadian-passenger-right.canadian-passenger-right': ApiCanadianPassengerRightCanadianPassengerRight;
      'api::car-service.car-service': ApiCarServiceCarService;
      'api::career.career': ApiCareerCareer;
      'api::career-opportunity.career-opportunity': ApiCareerOpportunityCareerOpportunity;
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
      'api::extra-assistance.extra-assistance': ApiExtraAssistanceExtraAssistance;
      'api::faq.faq': ApiFaqFaq;
      'api::faq-content.faq-content': ApiFaqContentFaqContent;
      'api::featured-tour.featured-tour': ApiFeaturedTourFeaturedTour;
      'api::flight-status.flight-status': ApiFlightStatusFlightStatus;
      'api::footer.footer': ApiFooterFooter;
      'api::going-electric.going-electric': ApiGoingElectricGoingElectric;
      'api::google-anlaytic.google-anlaytic': ApiGoogleAnlayticGoogleAnlaytic;
      'api::group-booking.group-booking': ApiGroupBookingGroupBooking;
      'api::header.header': ApiHeaderHeader;
      'api::home.home': ApiHomeHome;
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
      'api::news.news': ApiNewsNews;
      'api::news-list.news-list': ApiNewsListNewsList;
      'api::not-found-page.not-found-page': ApiNotFoundPageNotFoundPage;
      'api::notice.notice': ApiNoticeNotice;
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
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
    }
  }
}
