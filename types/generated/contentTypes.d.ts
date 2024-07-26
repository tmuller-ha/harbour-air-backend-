import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
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
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
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
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
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
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
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
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
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
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
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
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
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
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginWebDeploymentDeployment extends Schema.CollectionType {
  collectionName: 'deployments';
  info: {
    singularName: 'deployment';
    pluralName: 'deployments';
    displayName: 'Deployment';
  };
  options: {
    draftAndPublish: false;
    comment: '';
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
    user: Attribute.String & Attribute.Required;
    status: Attribute.Enumeration<['Failed', 'Deployed', 'In-Progress']> &
      Attribute.DefaultTo<'In-Progress'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::web-deployment.deployment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::web-deployment.deployment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginFormsTourRequest extends Schema.CollectionType {
  collectionName: 'tour_requests';
  info: {
    singularName: 'tour-request';
    pluralName: 'tour-requests';
    displayName: 'Tour Requests';
  };
  options: {
    draftAndPublish: false;
    comment: '';
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
    name: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    telephone: Attribute.BigInteger & Attribute.Required;
    departingLocation: Attribute.String & Attribute.Required;
    tourType: Attribute.Enumeration<['Normal Tour', 'Private Tour']> &
      Attribute.Required;
    tourName: Attribute.String & Attribute.Required;
    passengers: Attribute.Integer & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    time: Attribute.Time & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::forms.tour-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::forms.tour-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginFormsCharteredFlightRequest
  extends Schema.CollectionType {
  collectionName: 'chartered_flight_requests';
  info: {
    singularName: 'chartered-flight-request';
    pluralName: 'chartered-flight-requests';
    displayName: 'Chartered Flight Request';
  };
  options: {
    draftAndPublish: false;
    comment: '';
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
    name: Attribute.String & Attribute.Required;
    email: Attribute.Email;
    telephone: Attribute.BigInteger;
    contactMethod: Attribute.Enumeration<['Email', 'Phone']> &
      Attribute.Required;
    journeyType: Attribute.Enumeration<['One way', 'Return']> &
      Attribute.Required;
    outboundDate: Attribute.Date & Attribute.Required;
    preferredDeparture: Attribute.Time & Attribute.Required;
    preferredDeparturePoint: Attribute.String & Attribute.Required;
    groupSize: Attribute.Integer & Attribute.Required;
    includesChildren: Attribute.Boolean & Attribute.Required;
    totalWeight: Attribute.Integer & Attribute.Required;
    requests: Attribute.String;
    charteredAircraftBefore: Attribute.Boolean & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::forms.chartered-flight-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::forms.chartered-flight-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
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
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
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
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCareerCareer extends Schema.SingleType {
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
    careerPage: Attribute.DynamicZone<
      [
        'elements.title-with-description',
        'careers.join-our-team',
        'careers.careers-table',
        'elements.title-with-image',
        'careers.tab-with-youtube-link'
      ]
    >;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCareersTableCareersTable extends Schema.CollectionType {
  collectionName: 'careers_tables';
  info: {
    singularName: 'careers-table';
    pluralName: 'careers-tables';
    displayName: 'Careers Table';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    position_Column: Attribute.String;
    application_Deadline_Column: Attribute.String;
    location_Column: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::careers-table.careers-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::careers-table.careers-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCharteredFlightCharteredFlight extends Schema.SingleType {
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
    charteredFlightPage: Attribute.DynamicZone<
      [
        'common.accordian',
        'elements.title-with-image',
        'elements.title-with-description'
      ]
    >;
    charteredFlightTab: Attribute.DynamicZone<
      [
        'chartered-flights-page.destination',
        'chartered-flights-page.fleet-tab',
        'chartered-flights-page.pricing-tab'
      ]
    >;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::chartered-flight.chartered-flight',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::chartered-flight.chartered-flight',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCountryCountry extends Schema.CollectionType {
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
    name: Attribute.String;
    code: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDealDeal extends Schema.CollectionType {
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
    dealImage: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    fare: Attribute.String & Attribute.Required;
    origin: Attribute.String & Attribute.Required;
    destination: Attribute.String & Attribute.Required;
    bookNowButton: Attribute.Component<'elements.button'> & Attribute.Required;
    route: Attribute.Text & Attribute.Required;
    date: Attribute.String & Attribute.Required;
    summary: Attribute.Blocks & Attribute.Required;
    active: Attribute.Boolean;
    countryID: Attribute.String & Attribute.Required;
    fareText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'One Way fares from'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::deal.deal', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::deal.deal', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiDropdownMenuDropdownMenu extends Schema.CollectionType {
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
    title: Attribute.String & Attribute.Required;
    dropdownLinks: Attribute.DynamicZone<['header.link', 'header.media-links']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dropdown-menu.dropdown-menu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dropdown-menu.dropdown-menu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqFaq extends Schema.SingleType {
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
    title: Attribute.String;
    knowBeforeTitle: Attribute.String;
    accordionSection: Attribute.Component<'faq.accordion'>;
    searchButton: Attribute.Component<'faq.button-with-boolean'>;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiFaqContentFaqContent extends Schema.CollectionType {
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
    title: Attribute.String;
    question: Attribute.String;
    answer: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faq-content.faq-content',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::faq-content.faq-content',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFeaturedTourFeaturedTour extends Schema.CollectionType {
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
    backgroundImage: Attribute.Media;
    title: Attribute.String;
    description: Attribute.String;
    learnMoreButton: Attribute.Component<'elements.button'>;
    tripAdvisorComment: Attribute.Relation<
      'api::featured-tour.featured-tour',
      'oneToMany',
      'api::trip-advisor-comment.trip-advisor-comment'
    >;
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::featured-tour.featured-tour',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::featured-tour.featured-tour',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
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
    footerlinks: Attribute.Component<'footer.footer-links', true>;
    footerlogos: Attribute.Component<'footer.footer-logo-links'>;
    harbourairLogo: Attribute.Media;
    copyrights: Attribute.String;
    bottomLinks: Attribute.Component<'footer.link', true>;
    stayUpToDateSection: Attribute.Component<'footer.footer-stay-update'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeaderHeader extends Schema.SingleType {
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
    mobileLogo: Attribute.Media & Attribute.Required;
    desktopLogo: Attribute.Media & Attribute.Required;
    profileButtonText: Attribute.String & Attribute.Required;
    navigationLinks: Attribute.DynamicZone<['header.dropdown', 'header.link']> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomeHome extends Schema.SingleType {
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
    seo: Attribute.Component<'seo.seo'>;
    title: Attribute.String;
    homePageCarousel: Attribute.Component<'home.hero-carousel'>;
    instagramSection: Attribute.Component<'home.home-instagram'>;
    HarbourAirDescription: Attribute.Component<'home.description'>;
    GrabDeals: Attribute.Component<'home.grab-deals'>;
    harbourAirArticle: Attribute.Component<'home.article-carousel'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiLinkLink extends Schema.CollectionType {
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
    title: Attribute.String & Attribute.Required;
    slug: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::link.link', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::link.link', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiLocationLocation extends Schema.CollectionType {
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
    directions: Attribute.Component<'inside-location.direction'>;
    slug: Attribute.UID<'api::location.location', 'name'> & Attribute.Required;
    additionalInformation: Attribute.Component<'inside-location.additional-information'>;
    name: Attribute.String;
    description: Attribute.Blocks;
    heroImage: Attribute.Media;
    locationPhotos: Attribute.Media;
    locationVideo: Attribute.Media;
    learnMoreBtnText: Attribute.String;
    shortDescription: Attribute.String;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::location.location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::location.location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMainDealMainDeal extends Schema.SingleType {
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
    selectAllText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'All'>;
    customizedText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Customized'>;
    searchButton: Attribute.Component<'elements.button'> & Attribute.Required;
    deals: Attribute.Relation<
      'api::main-deal.main-deal',
      'oneToMany',
      'api::deal.deal'
    >;
    dealsBanner: Attribute.Media & Attribute.Required;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::main-deal.main-deal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::main-deal.main-deal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMainLocationMainLocation extends Schema.SingleType {
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
    title: Attribute.String;
    heroSectionButton: Attribute.Component<'elements.button'>;
    description: Attribute.Blocks;
    bookFlightNow: Attribute.String;
    backgroundImage: Attribute.Media;
    locations: Attribute.Relation<
      'api::main-location.main-location',
      'oneToMany',
      'api::location.location'
    >;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::main-location.main-location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::main-location.main-location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMainTourMainTour extends Schema.SingleType {
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
    mainTourPage: Attribute.DynamicZone<
      ['main-tours.fare-section', 'main-tours.featured-tours']
    >;
    heroBackgroundImage: Attribute.Media;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::main-tour.main-tour',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::main-tour.main-tour',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNotFoundPageNotFoundPage extends Schema.SingleType {
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
    banner_image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.String;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::not-found-page.not-found-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::not-found-page.not-found-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNoticeNotice extends Schema.CollectionType {
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
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::notice.notice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::notice.notice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTourLocationTourLocation extends Schema.CollectionType {
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
    name: Attribute.String;
    slug: Attribute.UID<'api::tour-location.tour-location', 'name'>;
    heroBackgroundImage: Attribute.Media;
    components: Attribute.DynamicZone<
      [
        'tours.hero-description',
        'tours.featured-tours',
        'main-tours.tour-cards'
      ]
    >;
    tours: Attribute.Relation<
      'api::tour-location.tour-location',
      'oneToMany',
      'api::tours-detail.tours-detail'
    >;
    departure: Attribute.String;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tour-location.tour-location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tour-location.tour-location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiToursDetailToursDetail extends Schema.CollectionType {
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
    show: Attribute.Boolean;
    title: Attribute.String;
    locationImage: Attribute.Media;
    tour_location: Attribute.Relation<
      'api::tours-detail.tours-detail',
      'manyToOne',
      'api::tour-location.tour-location'
    >;
    overviewTitle: Attribute.String;
    overviewDescription: Attribute.Blocks;
    detailsTitle: Attribute.String;
    detailsDescription: Attribute.Blocks;
    tourFareDetail: Attribute.Component<'tours.fare-details', true>;
    flightDuration: Attribute.String;
    availableOffers: Attribute.String;
    cardDescription: Attribute.String;
    fareCategory: Attribute.String;
    fare: Attribute.String;
    person: Attribute.String;
    bookBtnText: Attribute.String;
    bookBtnSlug: Attribute.String;
    makeitPrivateBtnText: Attribute.String;
    makeitPrivateBtnSlug: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tours-detail.tours-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tours-detail.tours-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTriggerBuildTriggerBuild extends Schema.SingleType {
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
    isTriggerBuild: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::trigger-build.trigger-build',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::trigger-build.trigger-build',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTripAdvisorCommentTripAdvisorComment
  extends Schema.CollectionType {
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
    tripAdvisorLogo: Attribute.Media;
    comment: Attribute.String;
    commenter: Attribute.String;
    backgroundImage: Attribute.Media;
    featured_tour: Attribute.Relation<
      'api::trip-advisor-comment.trip-advisor-comment',
      'manyToOne',
      'api::featured-tour.featured-tour'
    >;
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::trip-advisor-comment.trip-advisor-comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::trip-advisor-comment.trip-advisor-comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::web-deployment.deployment': PluginWebDeploymentDeployment;
      'plugin::forms.tour-request': PluginFormsTourRequest;
      'plugin::forms.chartered-flight-request': PluginFormsCharteredFlightRequest;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::career.career': ApiCareerCareer;
      'api::careers-table.careers-table': ApiCareersTableCareersTable;
      'api::chartered-flight.chartered-flight': ApiCharteredFlightCharteredFlight;
      'api::country.country': ApiCountryCountry;
      'api::deal.deal': ApiDealDeal;
      'api::dropdown-menu.dropdown-menu': ApiDropdownMenuDropdownMenu;
      'api::faq.faq': ApiFaqFaq;
      'api::faq-content.faq-content': ApiFaqContentFaqContent;
      'api::featured-tour.featured-tour': ApiFeaturedTourFeaturedTour;
      'api::footer.footer': ApiFooterFooter;
      'api::header.header': ApiHeaderHeader;
      'api::home.home': ApiHomeHome;
      'api::link.link': ApiLinkLink;
      'api::location.location': ApiLocationLocation;
      'api::main-deal.main-deal': ApiMainDealMainDeal;
      'api::main-location.main-location': ApiMainLocationMainLocation;
      'api::main-tour.main-tour': ApiMainTourMainTour;
      'api::not-found-page.not-found-page': ApiNotFoundPageNotFoundPage;
      'api::notice.notice': ApiNoticeNotice;
      'api::tour-location.tour-location': ApiTourLocationTourLocation;
      'api::tours-detail.tours-detail': ApiToursDetailToursDetail;
      'api::trigger-build.trigger-build': ApiTriggerBuildTriggerBuild;
      'api::trip-advisor-comment.trip-advisor-comment': ApiTripAdvisorCommentTripAdvisorComment;
    }
  }
}
