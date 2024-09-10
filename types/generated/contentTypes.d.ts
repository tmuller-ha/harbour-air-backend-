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
    passengers: Attribute.String & Attribute.Required;
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

export interface PluginFormsContactForm extends Schema.CollectionType {
  collectionName: 'contact_forms';
  info: {
    singularName: 'contact-form';
    pluralName: 'contact-forms';
    displayName: 'Contact Form';
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
    contact: Attribute.String & Attribute.Required;
    passengerName: Attribute.String & Attribute.Required;
    phoneNumber: Attribute.BigInteger & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    city: Attribute.String & Attribute.Required;
    contactBy: Attribute.Enumeration<['Email', 'Phone Number']> &
      Attribute.Required;
    comments: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::forms.contact-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::forms.contact-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginFormsParcelExpressQuote extends Schema.CollectionType {
  collectionName: 'parcel_express_quotes';
  info: {
    singularName: 'parcel-express-quote';
    pluralName: 'parcel-express-quotes';
    displayName: 'Parcel Express Quotes';
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
    name: Attribute.Text & Attribute.Required;
    telephone: Attribute.Text & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    origin: Attribute.Text & Attribute.Required;
    destination: Attribute.Text & Attribute.Required;
    numberOfParcels: Attribute.Integer & Attribute.Required;
    service: Attribute.Enumeration<['Next Flight', 'Same Day', 'Next Day']> &
      Attribute.Required;
    courierRequirements: Attribute.Text & Attribute.Required;
    comments: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::forms.parcel-express-quote',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::forms.parcel-express-quote',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginFormsDiscountedTravel extends Schema.CollectionType {
  collectionName: 'discounted_travels';
  info: {
    singularName: 'discounted-travel';
    pluralName: 'discounted-travels';
    displayName: 'Discounted Travel Form';
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
    travelProgram: Attribute.String & Attribute.Required;
    firstName: Attribute.String & Attribute.Required;
    lastName: Attribute.String & Attribute.Required;
    dateOfBirth: Attribute.Date & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    haAccountNo: Attribute.String;
    addressOne: Attribute.String;
    addressTwo: Attribute.String;
    city: Attribute.String & Attribute.Required;
    province: Attribute.String;
    country: Attribute.String & Attribute.Required;
    postalCode: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::forms.discounted-travel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::forms.discounted-travel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginFormsOnAccountTicket extends Schema.CollectionType {
  collectionName: 'on_account_tickets';
  info: {
    singularName: 'on-account-ticket';
    pluralName: 'on-account-tickets';
    displayName: 'On Account Ticket';
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
    businessMinistryName: Attribute.String;
    branchDivision: Attribute.String;
    customerAccountNumber: Attribute.BigInteger;
    numberofBooksRequired: Attribute.Integer;
    deliveryOptions: Attribute.String;
    contactName: Attribute.String;
    emailAddress: Attribute.Email;
    contactPhoneNumber: Attribute.BigInteger;
    deliverOn: Attribute.Date;
    deliveryAddress: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::forms.on-account-ticket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::forms.on-account-ticket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginFormsCarserviceForm extends Schema.CollectionType {
  collectionName: 'carservice_forms';
  info: {
    singularName: 'carservice-form';
    pluralName: 'carservice-forms';
    displayName: 'Carservice Form';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    pickUpLocation: Attribute.String & Attribute.Required;
    pickUpDate: Attribute.Date & Attribute.Required;
    pickUpTime: Attribute.Time & Attribute.Required;
    dropOffLocation: Attribute.String & Attribute.Required;
    dropOffDate: Attribute.Date & Attribute.Required;
    dropOffTime: Attribute.Time & Attribute.Required;
    phoneNumber: Attribute.BigInteger & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    vehicleType: Attribute.String & Attribute.Required;
    provider: Attribute.Enumeration<['Budget Rent-a-car', 'Otus Car Rentals']> &
      Attribute.Required;
    comments: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::forms.carservice-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::forms.carservice-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginFormsGroupBookingsForm extends Schema.CollectionType {
  collectionName: 'group_bookings_forms';
  info: {
    singularName: 'group-bookings-form';
    pluralName: 'group-bookings-forms';
    displayName: 'Group Bookings Form';
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
    firstName: Attribute.String;
    lastName: Attribute.String;
    phoneNumber: Attribute.BigInteger;
    email: Attribute.Email;
    contactBy: Attribute.Enumeration<['Email', 'Phone Number']>;
    flightType: Attribute.String;
    datesFlexible: Attribute.String;
    departureDate: Attribute.Date;
    departureTime: Attribute.Time;
    departureLocation: Attribute.String;
    arrivalLocation: Attribute.String;
    totalGroupSize: Attribute.Integer;
    childrenSize: Attribute.Integer;
    infantSize: Attribute.Integer;
    specialRequests: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::forms.group-bookings-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::forms.group-bookings-form',
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

export interface ApiAboutUsAboutUs extends Schema.SingleType {
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
    heading: Attribute.Component<'elements.title-with-desc-and-image'>;
    achievement: Attribute.Component<'elements.harbour-air-services', true>;
    aboutDetails: Attribute.Component<'elements.harbour-air-article', true>;
    turbo: Attribute.Component<'about-us.about-us-turbo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAirCraftFleetAirCraftFleet extends Schema.SingleType {
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
    sections: Attribute.DynamicZone<
      ['elements.title-with-image', 'elements.title-with-description']
    >;
    tabs: Attribute.DynamicZone<['aircraft-fleet.aircraft-fleet-tabs']>;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::air-craft-fleet.air-craft-fleet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::air-craft-fleet.air-craft-fleet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAssistanceAssistance extends Schema.CollectionType {
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
    components: Attribute.DynamicZone<
      [
        'elements.title-with-image',
        'elements.title-with-description',
        'extra-assistance.accordion-with-editor',
        'common.help',
        'extra-assistance.files'
      ]
    >;
    slug: Attribute.UID;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::assistance.assistance',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::assistance.assistance',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAwardAward extends Schema.SingleType {
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
    title: Attribute.Component<'elements.title-with-image'> &
      Attribute.Required;
    about: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    awards: Attribute.Component<'elements.harbour-air-services', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::award.award',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::award.award',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
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
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.Text & Attribute.Required;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    socialMediaLinks: Attribute.Component<'elements.instagram-images', true>;
    coverImage: Attribute.Media;
    category: Attribute.Relation<
      'api::blog.blog',
      'manyToOne',
      'api::category.category'
    >;
    slug: Attribute.UID<'api::blog.blog', 'title'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiBlogsAndNewBlogsAndNew extends Schema.SingleType {
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
    breakingNews: Attribute.Relation<
      'api::blogs-and-new.blogs-and-new',
      'oneToOne',
      'api::news.news'
    >;
    latestNews: Attribute.Relation<
      'api::blogs-and-new.blogs-and-new',
      'oneToMany',
      'api::news.news'
    >;
    latestBlogs: Attribute.Relation<
      'api::blogs-and-new.blogs-and-new',
      'oneToMany',
      'api::blog.blog'
    >;
    blogsCoverImage: Attribute.Media;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    latestNewsTitle: Attribute.String & Attribute.Required;
    latestBlogsTitle: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blogs-and-new.blogs-and-new',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blogs-and-new.blogs-and-new',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBookFlightBookFlight extends Schema.SingleType {
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
    pageTitle: Attribute.Component<'elements.title-with-image'>;
    specialOffers: Attribute.Relation<
      'api::book-flight.book-flight',
      'oneToMany',
      'api::deal.deal'
    >;
    specialOffersTitle: Attribute.String & Attribute.Required;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::book-flight.book-flight',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::book-flight.book-flight',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCanadianPassengerRightCanadianPassengerRight
  extends Schema.SingleType {
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
    sections: Attribute.DynamicZone<
      [
        'elements.title-with-image',
        'elements.title-with-description',
        'common.accordian',
        'canadian-passenger-rights.tariffs'
      ]
    >;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::canadian-passenger-right.canadian-passenger-right',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::canadian-passenger-right.canadian-passenger-right',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCarServiceCarService extends Schema.SingleType {
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
    pageTitle: Attribute.Component<'elements.title-with-image'>;
    evoCar: Attribute.Component<'elements.title-with-desc-and-image'>;
    budgetCar: Attribute.Component<'elements.title-with-ck-editor'>;
    otusCar: Attribute.Component<'elements.title-with-ck-editor'>;
    showCarHireForm: Attribute.Boolean & Attribute.DefaultTo<true>;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::car-service.car-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::car-service.car-service',
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
        'careers.careers-table',
        'elements.title-with-image',
        'careers.tab-with-youtube-link',
        'common.accordian'
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

export interface ApiCareerOpportunityCareerOpportunity
  extends Schema.CollectionType {
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
    position: Attribute.String;
    location: Attribute.Relation<
      'api::career-opportunity.career-opportunity',
      'oneToOne',
      'api::location.location'
    >;
    slug: Attribute.UID;
    applicationDeadline: Attribute.Date;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::career-opportunity.career-opportunity',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::career-opportunity.career-opportunity',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
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
    name: Attribute.String;
    blogs: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::blog.blog'
    >;
    news: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::news.news'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::category.category',
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

export interface ApiCommunityInvolvementCommunityInvolvement
  extends Schema.SingleType {
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
    sections: Attribute.DynamicZone<
      ['elements.title-with-image', 'elements.title-with-ck-editor']
    > &
      Attribute.Required;
    tabs: Attribute.Component<'elements.title-with-desc-and-image', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::community-involvement.community-involvement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::community-involvement.community-involvement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactUsContactUs extends Schema.SingleType {
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
    pageTitle: Attribute.Component<'elements.title-with-image'>;
    pageAbout: Attribute.Component<'elements.title-with-ck-editor'>;
    showForm: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    faq: Attribute.Component<'elements.title-with-desc-and-image'>;
    joinOurTeam: Attribute.Component<'elements.title-with-ck-editor'>;
    yourExperience: Attribute.Component<'elements.title-desc-with-image-links'>;
    contactCenter: Attribute.Component<'elements.title-with-ck-editor'>;
    hoursOfOperation: Attribute.Component<'elements.title-with-ck-editor'>;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-us.contact-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-us.contact-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCorporateResposibilityCorporateResposibility
  extends Schema.SingleType {
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
    pageTitle: Attribute.Component<'elements.title-with-desc-and-image'>;
    responsibilities: Attribute.Component<'elements.harbour-air-article', true>;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::corporate-resposibility.corporate-resposibility',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::corporate-resposibility.corporate-resposibility',
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
    countryWeightId: Attribute.String;
    dealsDepartures: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::deal.deal'
    >;
    dealsArrivals: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::deal.deal'
    >;
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

export interface ApiCourtesyShuttleCourtesyShuttle extends Schema.SingleType {
  collectionName: 'courtesy_shuttles';
  info: {
    singularName: 'courtesy-shuttle';
    pluralName: 'courtesy-shuttles';
    displayName: 'Courtesy shuttles';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    sections: Attribute.DynamicZone<
      ['elements.title-with-image', 'elements.title-with-ck-editor']
    >;
    tabs: Attribute.DynamicZone<['elements.title-with-ck-editor']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::courtesy-shuttle.courtesy-shuttle',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::courtesy-shuttle.courtesy-shuttle',
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
    fareText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'One Way fares from'>;
    departureLocation: Attribute.Relation<
      'api::deal.deal',
      'manyToOne',
      'api::country.country'
    >;
    arrivalLocation: Attribute.Relation<
      'api::deal.deal',
      'manyToOne',
      'api::country.country'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::deal.deal', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::deal.deal', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiDestinationDestination extends Schema.CollectionType {
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
    location: Attribute.String;
    locationId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    tag: Attribute.String;
    Category: Attribute.String;
    latitude: Attribute.String & Attribute.Required;
    longitude: Attribute.String & Attribute.Required;
    pickup: Attribute.String;
    pickupDefault: Attribute.String;
    dropOff: Attribute.String;
    dropOffDefault: Attribute.String;
    dropOffRequired: Attribute.Boolean & Attribute.DefaultTo<false>;
    pickupRequired: Attribute.Boolean & Attribute.DefaultTo<false>;
    map: Attribute.String;
    routesDeparture: Attribute.Relation<
      'api::destination.destination',
      'oneToMany',
      'api::route.route'
    >;
    routesArrivals: Attribute.Relation<
      'api::destination.destination',
      'oneToMany',
      'api::route.route'
    >;
    destinationImg: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::destination.destination',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::destination.destination',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDocumentDocument extends Schema.CollectionType {
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
    fileName: Attribute.String;
    file: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::document.document',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::document.document',
      'oneToOne',
      'admin::user'
    > &
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
    menus: Attribute.DynamicZone<['header.link', 'header.media-links']> &
      Attribute.Required;
    menuTitle: Attribute.Component<'header.link'>;
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

export interface ApiExtraAssistanceExtraAssistance extends Schema.SingleType {
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
    pageInfo: Attribute.Component<'elements.title-with-description'>;
    image: Attribute.Media;
    cards: Attribute.DynamicZone<['extra-assistance.assistance']>;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::extra-assistance.extra-assistance',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::extra-assistance.extra-assistance',
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

export interface ApiFlightStatusFlightStatus extends Schema.SingleType {
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
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    flightStatusInfo: Attribute.Blocks;
    flighStatusTitle: Attribute.Component<'elements.title-with-image'>;
    flightStatusDescription: Attribute.Component<'elements.title-with-description'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::flight-status.flight-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::flight-status.flight-status',
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

export interface ApiGoingElectricGoingElectric extends Schema.SingleType {
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
    pageTitle: Attribute.Component<'elements.title-with-desc-and-image'>;
    pageAbout: Attribute.Component<'elements.title-with-desc-and-image'>;
    infoSection: Attribute.Component<'elements.harbour-air-services', true>;
    tabs: Attribute.DynamicZone<
      [
        'elements.title-with-ck-editor',
        'elements.gallery',
        'going-electric.specifications'
      ]
    >;
    stories: Attribute.Relation<
      'api::going-electric.going-electric',
      'oneToMany',
      'api::blog.blog'
    >;
    inquiries: Attribute.Component<'going-electric.going-electring-inquires'>;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::going-electric.going-electric',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::going-electric.going-electric',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGroupBookingGroupBooking extends Schema.SingleType {
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
    pageTitle: Attribute.Component<'elements.title-with-image'>;
    pageDetails: Attribute.Component<'elements.title-with-ck-editor'>;
    howToBook: Attribute.Component<'elements.title-with-ck-editor'>;
    showBookingForm: Attribute.Boolean & Attribute.DefaultTo<true>;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::group-booking.group-booking',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::group-booking.group-booking',
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
    serviceHighlights: Attribute.Component<'home.description'>;
    deals: Attribute.Component<'home.grab-deals'>;
    meta: Attribute.Component<'meta.meta'>;
    tours: Attribute.Component<'home.home-tours'>;
    locations: Attribute.Component<'home.home-locations'>;
    news: Attribute.Component<'home.news'>;
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
    slug: Attribute.UID<'api::location.location', 'name'> & Attribute.Required;
    name: Attribute.String;
    description: Attribute.Blocks;
    heroImage: Attribute.Media;
    locationPhotos: Attribute.Media;
    locationVideo: Attribute.Media;
    learnMoreBtnText: Attribute.String;
    shortDescription: Attribute.String;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    guide: Attribute.Component<'inside-location.guide'>;
    additionalInformation: Attribute.Component<
      'inside-location.additionalinfo-details',
      true
    >;
    address: Attribute.Component<'inside-location.address'>;
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

export interface ApiLoyaltyProgramLoyaltyProgram extends Schema.SingleType {
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
    pageTitle: Attribute.Component<'elements.title-with-image'>;
    highFlyerRewards: Attribute.DynamicZone<
      ['elements.title-with-ck-editor', 'elements.accordion']
    >;
    turbobucksFlightCredits: Attribute.DynamicZone<
      ['loyalty-program.turbobucks-pricing', 'elements.title-with-ck-editor']
    >;
    highFlyerTabTitle: Attribute.String & Attribute.Required;
    turbobucksTabTitle: Attribute.String & Attribute.Required;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    turbobucksForm: Attribute.Component<'loyalty-program.high-flyer-form'>;
    highFlyerForm: Attribute.Component<'loyalty-program.high-flyer-rewards-form'>;
    pageAbout: Attribute.Component<'elements.title-with-ck-editor'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::loyalty-program.loyalty-program',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::loyalty-program.loyalty-program',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLuggageLuggage extends Schema.SingleType {
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
    luggagePage: Attribute.DynamicZone<
      ['elements.title-with-image', 'luggage.hero-description']
    >;
    luggageTab: Attribute.DynamicZone<
      [
        'luggage.luggage-allowance',
        'luggage.travelling-with-excess-luggage',
        'luggage.special'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::luggage.luggage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::luggage.luggage',
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
    meta: Attribute.Component<'meta.meta'>;
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
    meta: Attribute.Component<'meta.meta'>;
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

export interface ApiMakeItPrivateModalMakeItPrivateModal
  extends Schema.SingleType {
  collectionName: 'make_it_private_modals';
  info: {
    singularName: 'make-it-private-modal';
    pluralName: 'make-it-private-modals';
    displayName: 'Make It Private Modal';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::make-it-private-modal.make-it-private-modal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::make-it-private-modal.make-it-private-modal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMenuImageLinkMenuImageLink extends Schema.CollectionType {
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
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    slug: Attribute.String & Attribute.Required & Attribute.DefaultTo<'/'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::menu-image-link.menu-image-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::menu-image-link.menu-image-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMobilityMobility extends Schema.SingleType {
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
    section: Attribute.DynamicZone<
      [
        'elements.title-with-image',
        'mobility.hero-section',
        'elements.title-with-description',
        'mobility.images',
        'common.help'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::mobility.mobility',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::mobility.mobility',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMovingPastCarbonNeutralMovingPastCarbonNeutral
  extends Schema.SingleType {
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
    section: Attribute.DynamicZone<
      ['elements.title-with-ck-editor', 'elements.title-with-image']
    >;
    tabs: Attribute.Component<'elements.title-with-ck-editor', true>;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::moving-past-carbon-neutral.moving-past-carbon-neutral',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::moving-past-carbon-neutral.moving-past-carbon-neutral',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewsNews extends Schema.CollectionType {
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
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.String & Attribute.Required;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    socialMediaLinks: Attribute.Component<'elements.instagram-images', true>;
    coverImage: Attribute.Media & Attribute.Required;
    category: Attribute.Relation<
      'api::news.news',
      'manyToOne',
      'api::category.category'
    >;
    slug: Attribute.UID<'api::news.news', 'title'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::news.news', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::news.news', 'oneToOne', 'admin::user'> &
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

export interface ApiOnAccountQuickTicketOnAccountQuickTicket
  extends Schema.SingleType {
  collectionName: 'on_account_quick_tickets';
  info: {
    singularName: 'on-account-quick-ticket';
    pluralName: 'on-account-quick-tickets';
    displayName: 'On-Account Quick Tickets';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageTitle: Attribute.Component<'elements.title-with-image'>;
    aboutPage: Attribute.Component<'elements.title-with-ck-editor'>;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    form: Attribute.Component<'quick-ticket.quick-ticket-form'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::on-account-quick-ticket.on-account-quick-ticket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::on-account-quick-ticket.on-account-quick-ticket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOurFareOurFare extends Schema.SingleType {
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
    pageTitle: Attribute.Component<'elements.title-with-image'>;
    pageAbout: Attribute.Component<'elements.title-with-ck-editor'>;
    fareOptions: Attribute.Component<'elements.title-with-ck-editor', true>;
    fareDetails: Attribute.Component<'our-fares.fare-details', true>;
    helperContent: Attribute.Component<'our-fares.fare-helper-content', true>;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::our-fare.our-fare',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::our-fare.our-fare',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOurPromiseOurPromise extends Schema.SingleType {
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
    heading: Attribute.Component<'elements.title-with-image'>;
    missionAndVision: Attribute.Component<'our-promises.mission-and-vision'>;
    ourValues: Attribute.Component<'our-promises.our-values'>;
    promise: Attribute.Component<'our-promises.ha-promise'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::our-promise.our-promise',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::our-promise.our-promise',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOurStoryOurStory extends Schema.SingleType {
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
    stories: Attribute.Component<'our-story.story', true>;
    pageTitle: Attribute.Component<'elements.title-with-image'>;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::our-story.our-story',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::our-story.our-story',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiParcelExpressParcelExpress extends Schema.SingleType {
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
    sections: Attribute.DynamicZone<
      [
        'elements.title-with-image',
        'elements.title-with-description',
        'common.help'
      ]
    >;
    rate: Attribute.Component<'parcel-express.rates'>;
    HowTo: Attribute.DynamicZone<
      [
        'parcel-express.how-to-accordion',
        'parcel-express.shipping-cost',
        'elements.title-with-ck-editor'
      ]
    >;
    faq: Attribute.Component<'parcel-express.parcel-faq'>;
    quoteFormInfo: Attribute.Component<'elements.title-with-description'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::parcel-express.parcel-express',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::parcel-express.parcel-express',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrivateTourPrivateTour extends Schema.SingleType {
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
    privateTours: Attribute.Component<'elements.title-with-ck-editor'>;
    whyPrivateTour: Attribute.Component<'elements.title-with-ck-editor'>;
    bookPrivateTour: Attribute.Component<'elements.title-with-desc-and-multi-media'>;
    pageTitle: Attribute.Component<'elements.title-with-image'>;
    meta: Attribute.Component<'meta.meta'>;
    seo: Attribute.Component<'seo.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::private-tour.private-tour',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::private-tour.private-tour',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRouteRoute extends Schema.CollectionType {
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
    departure: Attribute.Relation<
      'api::route.route',
      'manyToOne',
      'api::destination.destination'
    >;
    arrival: Attribute.Relation<
      'api::route.route',
      'manyToOne',
      'api::destination.destination'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::route.route',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::route.route',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSafetyFirstSafetyFirst extends Schema.SingleType {
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
    sections: Attribute.DynamicZone<
      ['elements.title-with-image', 'elements.text-with-image']
    >;
    tabs: Attribute.DynamicZone<['elements.title-with-ck-editor']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::safety-first.safety-first',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::safety-first.safety-first',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiScheduleSchedule extends Schema.SingleType {
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
    pageTitle: Attribute.Component<'elements.title-with-image'>;
    aboutPage: Attribute.Component<'elements.title-with-ck-editor'>;
    note: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    schedules: Attribute.Component<'schedules.schedules', true>;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::schedule.schedule',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::schedule.schedule',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeatingOptionSeatingOption extends Schema.SingleType {
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
    sections: Attribute.DynamicZone<
      [
        'elements.title-with-image',
        'elements.title-with-description',
        'common.accordian'
      ]
    > &
      Attribute.Required;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seating-option.seating-option',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seating-option.seating-option',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStandbyTravelStandbyTravel extends Schema.SingleType {
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
    sections: Attribute.DynamicZone<
      ['elements.title-with-image', 'standby-travel.standby-travel-info']
    > &
      Attribute.Required;
    travelTabs: Attribute.DynamicZone<['standby-travel.travel-tab']>;
    seo: Attribute.Component<'seo.seo'>;
    meta: Attribute.Component<'meta.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::standby-travel.standby-travel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::standby-travel.standby-travel',
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
    country: Attribute.Relation<
      'api::tour-location.tour-location',
      'oneToOne',
      'api::country.country'
    >;
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
      'plugin::forms.contact-form': PluginFormsContactForm;
      'plugin::forms.parcel-express-quote': PluginFormsParcelExpressQuote;
      'plugin::forms.discounted-travel': PluginFormsDiscountedTravel;
      'plugin::forms.on-account-ticket': PluginFormsOnAccountTicket;
      'plugin::forms.carservice-form': PluginFormsCarserviceForm;
      'plugin::forms.group-bookings-form': PluginFormsGroupBookingsForm;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about-us.about-us': ApiAboutUsAboutUs;
      'api::air-craft-fleet.air-craft-fleet': ApiAirCraftFleetAirCraftFleet;
      'api::assistance.assistance': ApiAssistanceAssistance;
      'api::award.award': ApiAwardAward;
      'api::blog.blog': ApiBlogBlog;
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
      'api::extra-assistance.extra-assistance': ApiExtraAssistanceExtraAssistance;
      'api::faq.faq': ApiFaqFaq;
      'api::faq-content.faq-content': ApiFaqContentFaqContent;
      'api::featured-tour.featured-tour': ApiFeaturedTourFeaturedTour;
      'api::flight-status.flight-status': ApiFlightStatusFlightStatus;
      'api::footer.footer': ApiFooterFooter;
      'api::going-electric.going-electric': ApiGoingElectricGoingElectric;
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
    }
  }
}
