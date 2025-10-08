import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsAboutUsTurbo extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_us_turbos';
  info: {
    description: '';
    displayName: 'About Us Turbo';
    icon: 'sun';
  };
  attributes: {
    details: Schema.Attribute.Component<
      'elements.title-with-desc-and-multi-media',
      true
    >;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AircraftFleetAircraftFleetTabs extends Struct.ComponentSchema {
  collectionName: 'components_aircraft_fleet_aircraft_fleet_tabs';
  info: {
    description: '';
    displayName: 'Aircraft Fleet Tabs';
  };
  attributes: {
    fleetInformations: Schema.Attribute.Component<
      'aircraft-fleet.fleet-info',
      true
    >;
    image: Schema.Attribute.Media<'images'>;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface AircraftFleetFleetInfo extends Struct.ComponentSchema {
  collectionName: 'components_aircraft_fleet_fleet_infos';
  info: {
    description: '';
    displayName: 'Fleet Information';
  };
  attributes: {
    name: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface CanadianPassengerRightsTariffs extends Struct.ComponentSchema {
  collectionName: 'components_canadian_passenger_rights_tariffs';
  info: {
    displayName: 'Tariffs';
  };
  attributes: {
    tariffsFiles: Schema.Attribute.Component<'elements.pdf-links', true>;
    tariffsInfo: Schema.Attribute.Component<
      'elements.title-with-description',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface CareersCareersTable extends Struct.ComponentSchema {
  collectionName: 'components_careers_careers_tables';
  info: {
    description: '';
    displayName: 'Careers Oppurtunity Table';
  };
  attributes: {
    careerOpportunities: Schema.Attribute.Relation<
      'oneToMany',
      'api::career-opportunity.career-opportunity'
    >;
    show: Schema.Attribute.Boolean;
    tableTitle: Schema.Attribute.String;
  };
}

export interface CareersJoinOurTeam extends Struct.ComponentSchema {
  collectionName: 'components_careers_join_our_teams';
  info: {
    description: '';
    displayName: 'Join Our Team';
  };
  attributes: {
    infoText: Schema.Attribute.Blocks;
    show: Schema.Attribute.Boolean;
  };
}

export interface CareersTabWithYoutubeLink extends Struct.ComponentSchema {
  collectionName: 'components_careers_tab_with_youtube_links';
  info: {
    description: '';
    displayName: 'Career Hero Section';
  };
  attributes: {
    careersInfo: Schema.Attribute.Component<
      'elements.title-with-description',
      false
    >;
    show: Schema.Attribute.Boolean;
    titleWithLink: Schema.Attribute.Component<
      'elements.title-with-youtube-link',
      true
    >;
  };
}

export interface CharteredFlightsPageDestination
  extends Struct.ComponentSchema {
  collectionName: 'components_chartered_flights_page_destinations';
  info: {
    description: '';
    displayName: 'Destination';
  };
  attributes: {
    accordian: Schema.Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
    heading: Schema.Attribute.Component<
      'elements.title-with-description',
      false
    >;
    images: Schema.Attribute.Media<'images', true>;
    infoText: Schema.Attribute.String;
    show: Schema.Attribute.Boolean;
  };
}

export interface CharteredFlightsPageFleetTab extends Struct.ComponentSchema {
  collectionName: 'components_chartered_flights_page_fleet_tabs';
  info: {
    description: '';
    displayName: 'Fleet Tab';
  };
  attributes: {
    heading: Schema.Attribute.Component<
      'elements.title-with-description',
      false
    >;
    images: Schema.Attribute.Media<'images', true>;
    show: Schema.Attribute.Boolean;
  };
}

export interface CharteredFlightsPagePricingTab extends Struct.ComponentSchema {
  collectionName: 'components_chartered_flights_page_pricing_tabs';
  info: {
    description: '';
    displayName: 'Pricing Tab';
  };
  attributes: {
    heading: Schema.Attribute.Component<
      'elements.title-with-description',
      false
    >;
    pricingData: Schema.Attribute.Component<'elements.pricing-table', true>;
    pricingImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    show: Schema.Attribute.Boolean;
  };
}

export interface CommonAccordian extends Struct.ComponentSchema {
  collectionName: 'components_common_accordians';
  info: {
    description: '';
    displayName: 'Accordian';
    icon: 'filter';
  };
  attributes: {
    accordionDescription: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    details: Schema.Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
    formIndex: Schema.Attribute.Integer;
    infoText: Schema.Attribute.Blocks;
    show: Schema.Attribute.Boolean;
    showForm: Schema.Attribute.Boolean;
  };
}

export interface CommonAccordianDetails extends Struct.ComponentSchema {
  collectionName: 'components_common_accordian_details';
  info: {
    displayName: 'Accordian Details';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    label: Schema.Attribute.String;
  };
}

export interface CommonFormWithDescription extends Struct.ComponentSchema {
  collectionName: 'components_common_form_with_descriptions';
  info: {
    description: '';
    displayName: 'Form With Description';
    icon: 'bulletList';
  };
  attributes: {
    buttonName: Schema.Attribute.String;
    description: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    formType: Schema.Attribute.Enumeration<['default', 'popup']>;
    formUrl: Schema.Attribute.String;
    showComponent: Schema.Attribute.Boolean;
    showForm: Schema.Attribute.Boolean;
  };
}

export interface CommonHelp extends Struct.ComponentSchema {
  collectionName: 'components_common_helps';
  info: {
    description: '';
    displayName: 'Help';
  };
  attributes: {
    buttonName: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['description', 'button']> &
      Schema.Attribute.DefaultTo<'description'>;
  };
}

export interface CommunityInvolvementCommunityTabs
  extends Struct.ComponentSchema {
  collectionName: 'components_community_involvement_community_tabs';
  info: {
    displayName: 'Community Tabs';
  };
  attributes: {
    communityTabs: Schema.Attribute.Component<
      'elements.title-with-desc-and-image',
      true
    >;
  };
}

export interface ElementsAccordion extends Struct.ComponentSchema {
  collectionName: 'components_elements_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    accordionDetails: Schema.Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsAccordionWithCkEditor extends Struct.ComponentSchema {
  collectionName: 'components_elements_accordion_with_ck_editors';
  info: {
    description: '';
    displayName: 'Accordion With CKEditor';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    documents: Schema.Attribute.Relation<'oneToMany', 'api::document.document'>;
    label: Schema.Attribute.String;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    slug: Schema.Attribute.String;
  };
}

export interface ElementsDropDownData extends Struct.ComponentSchema {
  collectionName: 'components_elements_drop_down_data';
  info: {
    description: '';
    displayName: 'dropDownData';
  };
  attributes: {
    data: Schema.Attribute.String;
  };
}

export interface ElementsGallery extends Struct.ComponentSchema {
  collectionName: 'components_elements_galleries';
  info: {
    description: '';
    displayName: 'Gallery';
    icon: 'dashboard';
  };
  attributes: {
    images: Schema.Attribute.Component<'elements.instagram-images', true>;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsHarbourAirArticle extends Struct.ComponentSchema {
  collectionName: 'components_home_harbour_air_articles';
  info: {
    description: '';
    displayName: 'Article';
  };
  attributes: {
    buttonSlug: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsHarbourAirServices extends Struct.ComponentSchema {
  collectionName: 'components_elements_harbour_air_services';
  info: {
    description: '';
    displayName: 'Image With Description';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsImageTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_elements_image_text_blocks';
  info: {
    displayName: 'Image Text Block';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mediaPosition: Schema.Attribute.Enumeration<['left', 'right']>;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface ElementsImageWithEditor extends Struct.ComponentSchema {
  collectionName: 'components_elements_image_with_editors';
  info: {
    description: '';
    displayName: 'Image-With-editor';
  };
  attributes: {
    details: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ElementsInstagramImages extends Struct.ComponentSchema {
  collectionName: 'components_elements_instagram_images';
  info: {
    description: '';
    displayName: 'Image With Link';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    slug: Schema.Attribute.String;
  };
}

export interface ElementsPdfLinks extends Struct.ComponentSchema {
  collectionName: 'components_elements_pdf_links';
  info: {
    description: '';
    displayName: 'PdfLinks';
    icon: 'filePdf';
  };
  attributes: {
    file: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
    fileName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsPricingTable extends Struct.ComponentSchema {
  collectionName: 'components_elements_pricing_tables';
  info: {
    description: '';
    displayName: 'pricingTable';
  };
  attributes: {
    destination_Column: Schema.Attribute.String;
    starting_At_Column: Schema.Attribute.String;
  };
}

export interface ElementsTab extends Struct.ComponentSchema {
  collectionName: 'components_elements_tabs';
  info: {
    displayName: 'Tab';
  };
  attributes: {
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    tabDetails: Schema.Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
  };
}

export interface ElementsTableDetails extends Struct.ComponentSchema {
  collectionName: 'components_elements_table_details';
  info: {
    displayName: 'tableDetails';
  };
  attributes: {
    application_Deadline_Column: Schema.Attribute.String;
    location_Column: Schema.Attribute.String;
    position_Column: Schema.Attribute.String;
  };
}

export interface ElementsTableFields extends Struct.ComponentSchema {
  collectionName: 'components_elements_table_fields';
  info: {
    displayName: 'tableFields';
  };
  attributes: {
    tableInformation: Schema.Attribute.Component<
      'elements.pricing-table',
      true
    >;
  };
}

export interface ElementsTextWithImage extends Struct.ComponentSchema {
  collectionName: 'components_elements_text_with_images';
  info: {
    description: '';
    displayName: 'Text With Image';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ElementsThreeColSection extends Struct.ComponentSchema {
  collectionName: 'components_elements_three_col_sections';
  info: {
    description: '';
    displayName: 'Three col section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::rgba-color-picker.rgba-color-picker'> &
      Schema.Attribute.DefaultTo<'rgba(255, 255, 255, 1)'>;
    items: Schema.Attribute.Component<'elements.image-with-editor', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ElementsTitleDescWithFromUrl extends Struct.ComponentSchema {
  collectionName: 'components_elements_title_desc_with_from_urls';
  info: {
    description: '';
    displayName: 'Title Desc With FromUrl';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    microsoft_url: Schema.Attribute.String;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface ElementsTitleDescWithImageLinks
  extends Struct.ComponentSchema {
  collectionName: 'components_elements_title_desc_with_image_links';
  info: {
    displayName: 'Title Desc With ImageLinks';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    images: Schema.Attribute.Component<'elements.instagram-images', true>;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTitleWithCkEditor extends Struct.ComponentSchema {
  collectionName: 'components_elements_title_with_ck_editors';
  info: {
    description: '';
    displayName: 'Title With CKEditor';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::rgba-color-picker.rgba-color-picker'> &
      Schema.Attribute.DefaultTo<'rgba(255, 255, 255, 1)'>;
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsTitleWithDescAndImage extends Struct.ComponentSchema {
  collectionName: 'components_elements_title_with_desc_and_images';
  info: {
    description: '';
    displayName: 'Title With Desc And media';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    media: Schema.Attribute.Media<'images' | 'videos'>;
    media_url: Schema.Attribute.String;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTitleWithDescAndMultiMedia
  extends Struct.ComponentSchema {
  collectionName: 'components_elements_title_with_desc_and_multi_medias';
  info: {
    displayName: 'Title With Desc And Multi media';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    media: Schema.Attribute.Media<'images', true>;
    media_url: Schema.Attribute.String;
    show: Schema.Attribute.Boolean & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ElementsTitleWithDescription extends Struct.ComponentSchema {
  collectionName: 'components_elements_title_with_descriptions';
  info: {
    description: '';
    displayName: 'Title With Description';
    icon: 'strikeThrough';
  };
  attributes: {
    componentAlignment: Schema.Attribute.Enumeration<['column', 'row']>;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface ElementsTitleWithImage extends Struct.ComponentSchema {
  collectionName: 'components_elements_title_with_images';
  info: {
    description: '';
    displayName: 'Title With Image';
    icon: 'seed';
  };
  attributes: {
    coverImage: Schema.Attribute.Media<'images'>;
    mobileImagePosition: Schema.Attribute.Enumeration<
      ['left', 'right', 'center']
    >;
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
    > &
      Schema.Attribute.DefaultTo<'opacity-50'>;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface ElementsTitleWithMediaAndButton
  extends Struct.ComponentSchema {
  collectionName: 'components_elements_title_with_media_and_buttons';
  info: {
    description: '';
    displayName: 'Title With Media And Button';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    > &
      Schema.Attribute.DefaultTo<'opacity-50'>;
    show: Schema.Attribute.Boolean;
    showButton: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface ElementsTitleWithYoutubeLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_title_with_youtube_links';
  info: {
    description: '';
    displayName: 'Titlewith Link';
  };
  attributes: {
    tabName: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ElementsTourCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_tour_cards';
  info: {
    description: '';
    displayName: 'TourCard';
    icon: 'car';
  };
  attributes: {
    learnMoreBtnText: Schema.Attribute.String;
    name: Schema.Attribute.String;
    shortDescription: Schema.Attribute.String;
    tileImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ElementsTripAdvisor extends Struct.ComponentSchema {
  collectionName: 'components_elements_trip_advisors';
  info: {
    displayName: 'TripAdvisor';
  };
  attributes: {
    authorName: Schema.Attribute.String;
    backgroundImage: Schema.Attribute.Media<'images'>;
    comment: Schema.Attribute.String;
    quoteImage: Schema.Attribute.Media<'images'>;
    tripAdvisorLogo: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
  };
}

export interface EnhancedComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_enhanced_components_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    buttonBgColors: Schema.Attribute.Enumeration<
      ['bg-#002d62', 'bg-#ffde00', 'bg-#00fe2']
    >;
    buttonText: Schema.Attribute.String;
    show: Schema.Attribute.Boolean;
    slug: Schema.Attribute.String;
  };
}

export interface EnhancedComponentsHeroComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_enhanced_components_hero_components';
  info: {
    displayName: 'Hero Component';
  };
  attributes: {
    button: Schema.Attribute.Component<'enhanced-components.button', false>;
    coverImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface EnhancedComponentsMultiCardComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_enhanced_components_multi_card_components';
  info: {
    displayName: 'Multi Card Component';
    icon: 'grid';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.button', false>;
    cardBgcolor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::rgba-color-picker.rgba-color-picker'> &
      Schema.Attribute.DefaultTo<'rgba(255, 255, 255, 1)'>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface EnhancedComponentsMultiCardsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_enhanced_components_multi_cards_sections';
  info: {
    displayName: 'Multi Cards Section';
    icon: 'apps';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::rgba-color-picker.rgba-color-picker'> &
      Schema.Attribute.DefaultTo<'rgba(255, 255, 255, 1)'>;
    isScroll: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    multiCards: Schema.Attribute.Component<
      'enhanced-components.multi-card-component',
      true
    >;
    show: Schema.Attribute.Boolean;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ExtraAssistanceAccordionWithEditor
  extends Struct.ComponentSchema {
  collectionName: 'components_extra_assistance_accordion_with_editors';
  info: {
    description: '';
    displayName: 'Accordion With Editor';
  };
  attributes: {
    accordion: Schema.Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
    show: Schema.Attribute.Boolean;
  };
}

export interface ExtraAssistanceAssistance extends Struct.ComponentSchema {
  collectionName: 'components_extra_assistance_assistances';
  info: {
    description: '';
    displayName: 'assistance';
  };
  attributes: {
    assistanceCard: Schema.Attribute.Component<'extra-assistance.cards', true>;
    title: Schema.Attribute.String;
  };
}

export interface ExtraAssistanceCards extends Struct.ComponentSchema {
  collectionName: 'components_extra_assistance_cards';
  info: {
    description: '';
    displayName: 'cards';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ExtraAssistanceFiles extends Struct.ComponentSchema {
  collectionName: 'components_extra_assistance_files';
  info: {
    description: '';
    displayName: 'Files';
  };
  attributes: {
    document: Schema.Attribute.Relation<'oneToOne', 'api::document.document'>;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface FaqAccordion extends Struct.ComponentSchema {
  collectionName: 'components_faq_accordions';
  info: {
    description: '';
    displayName: 'Accordion';
  };
  attributes: {
    accordionData: Schema.Attribute.Component<'faq.accordion-data', true>;
    description: Schema.Attribute.Blocks;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface FaqAccordionData extends Struct.ComponentSchema {
  collectionName: 'components_faq_accordion_data';
  info: {
    description: '';
    displayName: 'AccordionDataSection';
  };
  attributes: {
    faq_contents: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-content.faq-content'
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    showImage: Schema.Attribute.Boolean;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FaqButtonWithBoolean extends Struct.ComponentSchema {
  collectionName: 'components_faq_button_with_booleans';
  info: {
    displayName: 'ButtonWithBoolean';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    showButton: Schema.Attribute.Boolean;
  };
}

export interface FaqKnowBefore extends Struct.ComponentSchema {
  collectionName: 'components_faq_know_befores';
  info: {
    description: '';
    displayName: 'knowBefore';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    showImage: Schema.Attribute.Boolean;
  };
}

export interface FaqQuestions extends Struct.ComponentSchema {
  collectionName: 'components_faq_questions';
  info: {
    description: '';
    displayName: 'Questions';
  };
  attributes: {
    faq_content: Schema.Attribute.Relation<
      'oneToOne',
      'api::faq-content.faq-content'
    >;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterBottomContent extends Struct.ComponentSchema {
  collectionName: 'components_footer_bottom_contents';
  info: {
    displayName: 'bottomContent';
  };
  attributes: {
    bottomLinks: Schema.Attribute.Component<'footer.link', true>;
    copyrights: Schema.Attribute.String;
    harbourairLogo: Schema.Attribute.Media<'images'>;
  };
}

export interface FooterFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_links';
  info: {
    description: '';
    displayName: 'FooterLinks';
  };
  attributes: {
    links: Schema.Attribute.Component<'footer.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterFooterLogoLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_logo_links';
  info: {
    displayName: 'FooterLogoLinks';
  };
  attributes: {
    logos: Schema.Attribute.Component<'footer.footer-logos', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterFooterLogos extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_logos';
  info: {
    description: '';
    displayName: 'FooterLogos';
  };
  attributes: {
    logos: Schema.Attribute.Media<'images'>;
    slug: Schema.Attribute.String;
  };
}

export interface FooterFooterStayUpdate extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_stay_updates';
  info: {
    displayName: 'FooterStayUpdate';
  };
  attributes: {
    description: Schema.Attribute.String;
    show: Schema.Attribute.Boolean;
    subscribe: Schema.Attribute.Component<'elements.button', false>;
    title: Schema.Attribute.String;
    unsubscribeText: Schema.Attribute.String;
  };
}

export interface FooterLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    link: Schema.Attribute.String;
    slug: Schema.Attribute.String;
  };
}

export interface FormCarServiceHireForm extends Struct.ComponentSchema {
  collectionName: 'components_form_car_service_hire_forms';
  info: {
    description: '';
    displayName: 'Specific Email Form';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    emailOption: Schema.Attribute.Relation<
      'oneToOne',
      'api::email-option.email-option'
    >;
    formUrl: Schema.Attribute.String;
    show: Schema.Attribute.Boolean;
    showMicrosoftForm: Schema.Attribute.Boolean & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface FormEmailForm extends Struct.ComponentSchema {
  collectionName: 'components_form_email_forms';
  info: {
    description: '';
    displayName: 'Email Form';
  };
  attributes: {
    email: Schema.Attribute.String;
  };
}

export interface FurtherQuestionsContactForm extends Struct.ComponentSchema {
  collectionName: 'components_further_questions_contact_forms';
  info: {
    description: '';
    displayName: 'Contact Form';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    emailOptions: Schema.Attribute.Relation<
      'oneToMany',
      'api::email-option.email-option'
    >;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface GoingElectricGoingElectringInquires
  extends Struct.ComponentSchema {
  collectionName: 'components_going_electric_going_electring_inquires';
  info: {
    description: '';
    displayName: 'Going Electring Inquires';
    icon: 'connector';
  };
  attributes: {
    author: Schema.Attribute.String & Schema.Attribute.Required;
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    emailOption: Schema.Attribute.Relation<
      'oneToOne',
      'api::email-option.email-option'
    >;
    formDescription: Schema.Attribute.Blocks;
    inquiriesFormTitle: Schema.Attribute.String;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showForm: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface GoingElectricSpecificationDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_going_electric_specification_details';
  info: {
    description: '';
    displayName: 'Specification Details';
  };
  attributes: {
    extendedRange: Schema.Attribute.String & Schema.Attribute.Required;
    haEBeaver: Schema.Attribute.String & Schema.Attribute.Required;
    performance: Schema.Attribute.String & Schema.Attribute.Required;
    pistonBeaver: Schema.Attribute.String & Schema.Attribute.Required;
    specifications: Schema.Attribute.String & Schema.Attribute.Required;
    standardRange: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GoingElectricSpecifications extends Struct.ComponentSchema {
  collectionName: 'components_going_electric_specifications';
  info: {
    description: '';
    displayName: 'Specifications';
  };
  attributes: {
    show: Schema.Attribute.Boolean;
    specificationDetails: Schema.Attribute.Component<
      'going-electric.specification-details',
      true
    >;
    specificationImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeaderAlert extends Struct.ComponentSchema {
  collectionName: 'components_header_alerts';
  info: {
    description: '';
    displayName: 'alert';
  };
  attributes: {
    emergency_alerts: Schema.Attribute.Relation<
      'oneToMany',
      'api::emergency-alert.emergency-alert'
    >;
    show: Schema.Attribute.Boolean;
  };
}

export interface HeaderLink extends Struct.ComponentSchema {
  collectionName: 'components_header_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    show: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeaderMediaLinks extends Struct.ComponentSchema {
  collectionName: 'components_header_media_links';
  info: {
    description: '';
    displayName: 'Media Link';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeaderMenuDropdown extends Struct.ComponentSchema {
  collectionName: 'components_header_menu_dropdowns';
  info: {
    description: '';
    displayName: 'Menu Dropdown';
  };
  attributes: {
    dropdown_cards: Schema.Attribute.Relation<
      'oneToMany',
      'api::menu-image-link.menu-image-link'
    >;
    dropdown_links: Schema.Attribute.Relation<
      'oneToMany',
      'api::dropdown-menu.dropdown-menu'
    >;
    dropdownTitle: Schema.Attribute.String;
    showImage: Schema.Attribute.Boolean;
  };
}

export interface HomeArticleCarousel extends Struct.ComponentSchema {
  collectionName: 'components_home_article_carousels';
  info: {
    description: '';
    displayName: 'ArticleCarousel';
  };
  attributes: {
    article: Schema.Attribute.Component<'elements.harbour-air-article', true>;
    moreDetails: Schema.Attribute.Component<'elements.button', false>;
    show: Schema.Attribute.Boolean;
  };
}

export interface HomeDescription extends Struct.ComponentSchema {
  collectionName: 'components_blocks_descriptions';
  info: {
    description: '';
    displayName: 'HarbourAirDescription';
  };
  attributes: {
    highlights: Schema.Attribute.Component<
      'elements.harbour-air-services',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.Text;
  };
}

export interface HomeGrabDeals extends Struct.ComponentSchema {
  collectionName: 'components_blocks_grab_deals';
  info: {
    description: '';
    displayName: 'GrabDeals';
  };
  attributes: {
    cardDeals: Schema.Attribute.Relation<'oneToMany', 'api::deal.deal'>;
    customRedirectUrl: Schema.Attribute.String;
    moreDeals: Schema.Attribute.Component<'elements.button', false>;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    useCustomRedirectUrl: Schema.Attribute.Boolean;
  };
}

export interface HomeHeroCarousel extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_carousels';
  info: {
    description: '';
    displayName: 'HeroCarousel';
  };
  attributes: {
    carousels: Schema.Attribute.Component<'home.home-carousel', true>;
    show: Schema.Attribute.Boolean;
  };
}

export interface HomeHomeCarousel extends Struct.ComponentSchema {
  collectionName: 'components_home_home_carousels';
  info: {
    description: '';
    displayName: 'HomeCarousel';
  };
  attributes: {
    btnText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    desktopImg: Schema.Attribute.Media<'images' | 'videos'>;
    imageLink: Schema.Attribute.String;
    infoText: Schema.Attribute.String;
    mobileImg: Schema.Attribute.Media<'images' | 'videos'>;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    slug: Schema.Attribute.String;
    tabletImg: Schema.Attribute.Media<'images' | 'videos'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeInstagram extends Struct.ComponentSchema {
  collectionName: 'components_blocks_home_instagrams';
  info: {
    description: '';
    displayName: 'HomeInstagram';
  };
  attributes: {
    authorAddress: Schema.Attribute.String;
    authorName: Schema.Attribute.String;
    description: Schema.Attribute.String;
    followUs: Schema.Attribute.Component<'elements.button', false>;
    instaImages: Schema.Attribute.Component<'elements.instagram-images', true>;
    instaProfileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    quote: Schema.Attribute.Text;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeLocations extends Struct.ComponentSchema {
  collectionName: 'components_home_home_locations';
  info: {
    description: '';
    displayName: 'Locations';
  };
  attributes: {
    locations: Schema.Attribute.Relation<'oneToMany', 'api::location.location'>;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeTours extends Struct.ComponentSchema {
  collectionName: 'components_home_home_tours';
  info: {
    description: '';
    displayName: 'Tours';
  };
  attributes: {
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    tours: Schema.Attribute.Relation<
      'oneToMany',
      'api::tours-detail.tours-detail'
    >;
  };
}

export interface HomeNews extends Struct.ComponentSchema {
  collectionName: 'components_home_news';
  info: {
    description: '';
    displayName: 'News';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    moreDetails: Schema.Attribute.Component<'elements.button', false>;
    news: Schema.Attribute.Relation<'oneToMany', 'api::news.news'>;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface InsideLocationAdditionalinfoDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_inside_location_additionalinfo_details';
  info: {
    description: '';
    displayName: 'AdditionalInformationDetails';
  };
  attributes: {
    additionalInformationImage: Schema.Attribute.Component<
      'inside-location.guide-information',
      true
    >;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    moreButton: Schema.Attribute.Component<'elements.button', false>;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface InsideLocationAddress extends Struct.ComponentSchema {
  collectionName: 'components_inside_location_addresses';
  info: {
    description: '';
    displayName: 'Address';
  };
  attributes: {
    addressDetails: Schema.Attribute.Blocks;
    addressMapUrl: Schema.Attribute.Text;
    addressTitle: Schema.Attribute.String;
    googleMapUrl: Schema.Attribute.Text;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface InsideLocationGuide extends Struct.ComponentSchema {
  collectionName: 'components_inside_location_guides';
  info: {
    description: '';
    displayName: 'Guide';
  };
  attributes: {
    guideInformations: Schema.Attribute.Component<
      'inside-location.guide-information',
      true
    >;
    moreArticles: Schema.Attribute.String;
    moreArticlesSlug: Schema.Attribute.String;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface InsideLocationGuideInformation extends Struct.ComponentSchema {
  collectionName: 'components_inside_location_guide_informations';
  info: {
    description: '';
    displayName: 'Image Section';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LoyaltyProgramHighFlyerForm extends Struct.ComponentSchema {
  collectionName: 'components_loyalty_program_high_flyer_forms';
  info: {
    description: '';
    displayName: 'Turbobucks Form';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    emailOption: Schema.Attribute.Relation<
      'oneToOne',
      'api::email-option.email-option'
    >;
    existingCustomerQuote: Schema.Attribute.Text;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LoyaltyProgramHighFlyerMembershipLevels
  extends Struct.ComponentSchema {
  collectionName: 'components_loyalty_program_high_flyer_membership_levels';
  info: {
    displayName: 'High Flyer Membership Levels';
  };
  attributes: {
    levels: Schema.Attribute.Component<'elements.title-with-ck-editor', true>;
    overview: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
  };
}

export interface LoyaltyProgramHighFlyerRewardsForm
  extends Struct.ComponentSchema {
  collectionName: 'components_loyalty_program_high_flyer_rewards_forms';
  info: {
    description: '';
    displayName: 'High Flyer Rewards Form';
  };
  attributes: {
    emailOption: Schema.Attribute.Relation<
      'oneToOne',
      'api::email-option.email-option'
    >;
    membershipTypeQuote: Schema.Attribute.Text;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LoyaltyProgramPricingStructure extends Struct.ComponentSchema {
  collectionName: 'components_loyalty_program_pricing_structures';
  info: {
    displayName: 'Pricing Structure';
  };
  attributes: {
    Bonus: Schema.Attribute.String & Schema.Attribute.Required;
    level: Schema.Attribute.String & Schema.Attribute.Required;
    priceRange: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LoyaltyProgramTurbobucksPricing
  extends Struct.ComponentSchema {
  collectionName: 'components_loyalty_program_turbobucks_pricings';
  info: {
    displayName: 'Turbobucks Pricing';
  };
  attributes: {
    details: Schema.Attribute.Component<
      'loyalty-program.pricing-structure',
      true
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LuggageHeroDescription extends Struct.ComponentSchema {
  collectionName: 'components_luggage_hero_descriptions';
  info: {
    description: '';
    displayName: 'HeroDescription';
  };
  attributes: {
    heroDescription: Schema.Attribute.Blocks;
    show: Schema.Attribute.Boolean;
  };
}

export interface LuggageLuggageAllowance extends Struct.ComponentSchema {
  collectionName: 'components_luggage_luggage_allowances';
  info: {
    description: '';
    displayName: 'Luggage Allowance';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    infoText: Schema.Attribute.Blocks;
    luggageDimentionTable: Schema.Attribute.Component<
      'luggage.luggage-dimensions-table',
      true
    >;
    luggageDimentionTitle: Schema.Attribute.String;
    show: Schema.Attribute.Boolean;
    tableDescription: Schema.Attribute.Component<
      'our-fares.fare-helper-content',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface LuggageLuggageAllowanceTable extends Struct.ComponentSchema {
  collectionName: 'components_luggage_luggage_allowance_tables';
  info: {
    description: '';
    displayName: 'Luggage Allowance Table';
  };
  attributes: {
    comfort: Schema.Attribute.String;
    flex: Schema.Attribute.String;
    light: Schema.Attribute.String;
    noValue: Schema.Attribute.Blocks;
    value: Schema.Attribute.String;
  };
}

export interface LuggageLuggageDimensionsTable extends Struct.ComponentSchema {
  collectionName: 'components_luggage_luggage_dimensions_tables';
  info: {
    description: '';
    displayName: 'Luggage Dimensions Table';
  };
  attributes: {
    aircraft: Schema.Attribute.String;
    breadth: Schema.Attribute.String;
    height: Schema.Attribute.String;
    width: Schema.Attribute.String;
  };
}

export interface LuggageSpecial extends Struct.ComponentSchema {
  collectionName: 'components_luggage_special_s';
  info: {
    description: '';
    displayName: 'Special Luggage & Equipment';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    luggageAccordion: Schema.Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface LuggageTravellingWithExcessLuggage
  extends Struct.ComponentSchema {
  collectionName: 'components_luggage_travelling_with_excess_luggages';
  info: {
    description: '';
    displayName: 'Travelling with Excess Luggage';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    infoText: Schema.Attribute.Blocks;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface MainDealsCampaignSection extends Struct.ComponentSchema {
  collectionName: 'components_main_deals_campaign_sections';
  info: {
    description: '';
    displayName: 'CampaignSection';
  };
  attributes: {
    campaigns: Schema.Attribute.Relation<'oneToMany', 'api::campaign.campaign'>;
    moreDetails: Schema.Attribute.Component<'elements.button', false>;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface MainDealsDeals extends Struct.ComponentSchema {
  collectionName: 'components_main_deals_deals';
  info: {
    description: '';
    displayName: 'Deals';
  };
  attributes: {
    bookNowButton: Schema.Attribute.Component<'elements.button', false>;
    calendarIcon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    dealDate: Schema.Attribute.String & Schema.Attribute.Required;
    dealDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    dealMedia: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    dealOverview: Schema.Attribute.Text & Schema.Attribute.Required;
    dealTitle: Schema.Attribute.Text & Schema.Attribute.Required;
    departingText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Departing'>;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    destination: Schema.Attribute.String & Schema.Attribute.Required;
    origin: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.String & Schema.Attribute.Required;
    taxes: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Price all-in incl. taxes and fees'>;
    terms: Schema.Attribute.Component<'elements.drop-down-data', true>;
    termsAndConditionsText: Schema.Attribute.Text;
    termsApply: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Terms and conditions apply.'>;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    travelDescription: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface MainLocationLocations extends Struct.ComponentSchema {
  collectionName: 'components_main_location_locations';
  info: {
    description: '';
    displayName: 'locations';
  };
  attributes: {
    location: Schema.Attribute.Relation<'oneToOne', 'api::location.location'>;
    pageTitle: Schema.Attribute.Component<
      'elements.title-with-media-and-button',
      false
    >;
  };
}

export interface MainToursFareSection extends Struct.ComponentSchema {
  collectionName: 'components_main_tours_fare_sections';
  info: {
    description: '';
    displayName: 'TourLocations';
  };
  attributes: {
    pageTitle: Schema.Attribute.Component<
      'elements.title-with-media-and-button',
      false
    >;
    tourLocations: Schema.Attribute.Relation<
      'oneToMany',
      'api::tour-location.tour-location'
    >;
  };
}

export interface MainToursFeaturedTours extends Struct.ComponentSchema {
  collectionName: 'components_main_tours_featured_tours';
  info: {
    description: '';
    displayName: 'FeaturedTours';
    icon: 'crown';
  };
  attributes: {
    featuredTour: Schema.Attribute.Relation<
      'oneToOne',
      'api::featured-tour.featured-tour'
    >;
    featuredTourTitle: Schema.Attribute.String;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface MainToursTourCards extends Struct.ComponentSchema {
  collectionName: 'components_main_tours_tour_cards';
  info: {
    description: '';
    displayName: 'TourCards';
    icon: 'crown';
  };
  attributes: {
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    tourPlaces: Schema.Attribute.Component<'elements.tour-card', false>;
  };
}

export interface MetaDataMetaData extends Struct.ComponentSchema {
  collectionName: 'components_meta_data_meta_datas';
  info: {
    description: '';
    displayName: 'Meta';
  };
  attributes: {
    helpSection: Schema.Attribute.Component<'common.help', false>;
    showSideBookingWidget: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface MobilityHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_mobility_hero_sections';
  info: {
    description: '';
    displayName: 'HeroSection';
  };
  attributes: {
    heroSection: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
    image: Schema.Attribute.Media<'videos'>;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface MobilityImages extends Struct.ComponentSchema {
  collectionName: 'components_mobility_images';
  info: {
    description: '';
    displayName: 'Images';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'videos', true>;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface OurFaresFareDetails extends Struct.ComponentSchema {
  collectionName: 'components_our_fares_fare_details';
  info: {
    displayName: 'Fare Details';
  };
  attributes: {
    content: Schema.Attribute.Component<'our-fares.fare-details-content', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OurFaresFareDetailsContent extends Struct.ComponentSchema {
  collectionName: 'components_our_fares_fare_details_contents';
  info: {
    description: '';
    displayName: 'Fare Details Content';
    icon: 'code';
  };
  attributes: {
    comfort: Schema.Attribute.String & Schema.Attribute.Required;
    comfortSuperScript: Schema.Attribute.String;
    flex: Schema.Attribute.String & Schema.Attribute.Required;
    flexSuperScript: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    light: Schema.Attribute.String & Schema.Attribute.Required;
    lightSuperScript: Schema.Attribute.String;
    subLabel: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
    valueSuperScript: Schema.Attribute.String;
  };
}

export interface OurFaresFareHelperContent extends Struct.ComponentSchema {
  collectionName: 'components_our_fares_fare_helper_contents';
  info: {
    description: '';
    displayName: 'Fare Helper Content';
  };
  attributes: {
    helperInfo: Schema.Attribute.Text & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OurPromisesHaPromise extends Struct.ComponentSchema {
  collectionName: 'components_our_promises_ha_promises';
  info: {
    displayName: 'HA Promise';
  };
  attributes: {
    details: Schema.Attribute.Component<'elements.title-with-ck-editor', false>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface OurPromisesMissionAndVision extends Struct.ComponentSchema {
  collectionName: 'components_our_promises_mission_and_visions';
  info: {
    displayName: 'Mission And Vision';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    mission: Schema.Attribute.Component<'elements.title-with-ck-editor', false>;
    vision: Schema.Attribute.Component<'elements.title-with-ck-editor', false>;
  };
}

export interface OurPromisesOurValues extends Struct.ComponentSchema {
  collectionName: 'components_our_promises_our_values';
  info: {
    displayName: 'Our Values';
    icon: 'command';
  };
  attributes: {
    title: Schema.Attribute.String;
    values: Schema.Attribute.Component<'elements.title-with-description', true>;
  };
}

export interface OurStoryDetails extends Struct.ComponentSchema {
  collectionName: 'components_our_story_details';
  info: {
    description: '';
    displayName: 'details';
    icon: 'earth';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    year: Schema.Attribute.String;
  };
}

export interface OurStoryStory extends Struct.ComponentSchema {
  collectionName: 'components_our_story_stories';
  info: {
    displayName: 'Story';
    icon: 'chartCircle';
  };
  attributes: {
    decade: Schema.Attribute.String;
    details: Schema.Attribute.Component<'our-story.details', true>;
  };
}

export interface ParcelExpressFaq extends Struct.ComponentSchema {
  collectionName: 'components_parcel_express_faqs';
  info: {
    description: '';
    displayName: 'Faq';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    faq_contents: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-content.faq-content'
    >;
    questionTitle: Schema.Attribute.String;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface ParcelExpressHowToAccordion extends Struct.ComponentSchema {
  collectionName: 'components_parcel_express_how_to_accordions';
  info: {
    description: '';
    displayName: 'howToAccordion';
  };
  attributes: {
    ckEditorSection: Schema.Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    topSection: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
  };
}

export interface ParcelExpressParcelFaq extends Struct.ComponentSchema {
  collectionName: 'components_parcel_express_parcel_faqs';
  info: {
    description: '';
    displayName: 'ParcelFaq';
  };
  attributes: {
    accordionData: Schema.Attribute.Component<'faq.accordion-data', true>;
    accordionTitle: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface ParcelExpressRates extends Struct.ComponentSchema {
  collectionName: 'components_parcel_express_rates';
  info: {
    description: '';
    displayName: 'Rates';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    details: Schema.Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface ParcelExpressShippingCost extends Struct.ComponentSchema {
  collectionName: 'components_parcel_express_shipping_costs';
  info: {
    description: '';
    displayName: 'ShippingCost';
  };
  attributes: {
    imageSection: Schema.Attribute.Component<'elements.title-with-image', true>;
    requestQuoteForm: Schema.Attribute.Component<
      'common.form-with-description',
      false
    >;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    topSection: Schema.Attribute.Component<
      'elements.title-with-ck-editor',
      false
    >;
  };
}

export interface PrivateToursBookPrivateTour extends Struct.ComponentSchema {
  collectionName: 'components_private_tours_book_private_tours';
  info: {
    displayName: 'Book Private Tour';
  };
  attributes: {
    media: Schema.Attribute.Media<'images', true>;
    media_url: Schema.Attribute.String;
    show: Schema.Attribute.Boolean;
  };
}

export interface QuickTicketQuickTicketForm extends Struct.ComponentSchema {
  collectionName: 'components_quick_ticket_quick_ticket_forms';
  info: {
    description: '';
    displayName: 'QuickTicketForm';
  };
  attributes: {
    emailOption: Schema.Attribute.Relation<
      'oneToOne',
      'api::email-option.email-option'
    >;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SchedulesSchedules extends Struct.ComponentSchema {
  collectionName: 'components_schedules_schedules';
  info: {
    description: '';
    displayName: 'Schedules';
  };
  options: {
    privateAttributes: ['title'];
  };
  attributes: {
    arrival: Schema.Attribute.Relation<
      'oneToOne',
      'api::destination.destination'
    > &
      Schema.Attribute.Required;
    departure: Schema.Attribute.Relation<
      'oneToOne',
      'api::destination.destination'
    > &
      Schema.Attribute.Required;
    documents: Schema.Attribute.Relation<'oneToMany', 'api::document.document'>;
    title: Schema.Attribute.String & Schema.Attribute.Private;
  };
}

export interface SeoAdditional extends Struct.ComponentSchema {
  collectionName: 'components_seo_additionals';
  info: {
    description: '';
    displayName: 'additional';
  };
  attributes: {
    key: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SeoAnalytics extends Struct.ComponentSchema {
  collectionName: 'components_seo_analytics';
  info: {
    displayName: 'Analytics';
  };
  attributes: {
    googleAnalyticsTrackingId: Schema.Attribute.String;
    googleTagManagerId: Schema.Attribute.String;
    hotjarSiteId: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    description: '';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    additional: Schema.Attribute.Component<'seo.additional', true>;
    canonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    metaKeyword: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    openGraphDescription: Schema.Attribute.Text;
    openGraphImage: Schema.Attribute.Media<'images'>;
    openGraphTitle: Schema.Attribute.String;
    robots: Schema.Attribute.String;
    siteName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Harbour Air'>;
    twitterCard: Schema.Attribute.Enumeration<
      ['summary_large_image', 'summary', 'app', 'player']
    > &
      Schema.Attribute.DefaultTo<'summary_large_image'>;
    twitterCardDescription: Schema.Attribute.Text;
    twitterCardImage: Schema.Attribute.Media<'images'>;
    twitterCardTitle: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['article', 'book', 'website']> &
      Schema.Attribute.DefaultTo<'website'>;
  };
}

export interface StandbyTravelCriteria extends Struct.ComponentSchema {
  collectionName: 'components_standby_travel_criteria';
  info: {
    description: '';
    displayName: 'Criteria';
  };
  attributes: {
    eligibilityCriteria: Schema.Attribute.String & Schema.Attribute.Required;
    reference: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface StandbyTravelDiscountedTravelForm
  extends Struct.ComponentSchema {
  collectionName: 'components_standby_travel_discounted_travel_forms';
  info: {
    displayName: 'Discounted Travel Form';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StandbyTravelHowToFly extends Struct.ComponentSchema {
  collectionName: 'components_standby_travel_how_to_flies';
  info: {
    displayName: 'How To Fly';
  };
  attributes: {
    criteria: Schema.Attribute.Component<'standby-travel.criteria', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StandbyTravelHowToFlySection extends Struct.ComponentSchema {
  collectionName: 'components_standby_travel_how_to_fly_sections';
  info: {
    displayName: 'howToFlySection';
  };
  attributes: {
    criteria: Schema.Attribute.Component<'standby-travel.criteria', true>;
    title: Schema.Attribute.String;
  };
}

export interface StandbyTravelMicrosoftForm extends Struct.ComponentSchema {
  collectionName: 'components_standby_travel_microsoft_forms';
  info: {
    displayName: 'Microsoft Form';
  };
  attributes: {
    formUrl: Schema.Attribute.String;
  };
}

export interface StandbyTravelStandbyTravelInfo extends Struct.ComponentSchema {
  collectionName: 'components_standby_travel_standby_travel_infos';
  info: {
    displayName: 'standbyTravelInfo';
  };
  attributes: {
    overview: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface StandbyTravelTravelTab extends Struct.ComponentSchema {
  collectionName: 'components_standby_travel_travel_tabs';
  info: {
    description: '';
    displayName: 'travelTab';
  };
  attributes: {
    decription: Schema.Attribute.Text;
    showDiscountedConformedTravel: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    travelInfo: Schema.Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
  };
}

export interface TableCell extends Struct.ComponentSchema {
  collectionName: 'components_table_cells';
  info: {
    description: '';
    displayName: 'Cell';
  };
  attributes: {
    richTextContent: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    showRichTextContent: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    superScript: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface TableCellWithSubLabel extends Struct.ComponentSchema {
  collectionName: 'components_table_cell_with_sub_labels';
  info: {
    description: '';
    displayName: 'Cell With SubLabel';
  };
  attributes: {
    richTextContent: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    showRichTextContent: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    subLabel: Schema.Attribute.String;
    superScript: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface TableFourColTable extends Struct.ComponentSchema {
  collectionName: 'components_table_four_col_tables';
  info: {
    description: '';
    displayName: 'Four Col Table';
  };
  attributes: {
    headerCol1: Schema.Attribute.String;
    headerCol2: Schema.Attribute.String;
    headerCol3: Schema.Attribute.String;
    headerCol4: Schema.Attribute.String;
    rows: Schema.Attribute.Component<'table.four-col-table-rows', true>;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface TableFourColTableRows extends Struct.ComponentSchema {
  collectionName: 'components_table_four_col_table_rows';
  info: {
    description: '';
    displayName: 'Four Col Table Rows';
  };
  attributes: {
    col1: Schema.Attribute.Component<'table.cell-with-sub-label', false>;
    col2: Schema.Attribute.Component<'table.cell', false>;
    col3: Schema.Attribute.Component<'table.cell', false>;
    col4: Schema.Attribute.Component<'table.cell', false>;
  };
}

export interface TableSixColTable extends Struct.ComponentSchema {
  collectionName: 'components_table_six_col_tables';
  info: {
    description: '';
    displayName: 'Six Col Table';
  };
  attributes: {
    headerCol1: Schema.Attribute.String;
    headerCol2: Schema.Attribute.String;
    headerCol3: Schema.Attribute.String;
    headerCol4: Schema.Attribute.String;
    headerCol5: Schema.Attribute.String;
    headerCol6: Schema.Attribute.String;
    rows: Schema.Attribute.Component<'table.six-col-table-rows', true>;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface TableSixColTableRows extends Struct.ComponentSchema {
  collectionName: 'components_table_six_col_table_rows';
  info: {
    displayName: 'Six Col Table Rows';
  };
  attributes: {
    col1: Schema.Attribute.Component<'table.cell-with-sub-label', false>;
    col2: Schema.Attribute.Component<'table.cell', false>;
    col3: Schema.Attribute.Component<'table.cell', false>;
    col4: Schema.Attribute.Component<'table.cell', false>;
    col5: Schema.Attribute.Component<'table.cell', false>;
    col6: Schema.Attribute.Component<'table.cell', false>;
  };
}

export interface TableThreeColTable extends Struct.ComponentSchema {
  collectionName: 'components_table_three_col_tables';
  info: {
    description: '';
    displayName: 'Three Col Table';
  };
  attributes: {
    headerCol1: Schema.Attribute.String;
    headerCol2: Schema.Attribute.String;
    headerCol3: Schema.Attribute.String;
    rows: Schema.Attribute.Component<'table.three-col-table-rows', true>;
    show: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface TableThreeColTableRows extends Struct.ComponentSchema {
  collectionName: 'components_table_three_col_table_rows';
  info: {
    description: '';
    displayName: 'Three Col Table Rows';
  };
  attributes: {
    col1: Schema.Attribute.Component<'table.cell-with-sub-label', false>;
    col2: Schema.Attribute.Component<'table.cell', false>;
    col3: Schema.Attribute.Component<'table.cell', false>;
  };
}

export interface TableTwoColTable extends Struct.ComponentSchema {
  collectionName: 'components_table_two_col_tables';
  info: {
    description: '';
    displayName: 'Two Col Table';
  };
  attributes: {
    headerCol1: Schema.Attribute.String;
    headerCol2: Schema.Attribute.String;
    rows: Schema.Attribute.Component<'table.two-col-table-rows', true>;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface TableTwoColTableRows extends Struct.ComponentSchema {
  collectionName: 'components_table_two_col_table_rows';
  info: {
    description: '';
    displayName: 'Two Col Table Rows';
  };
  attributes: {
    col1: Schema.Attribute.Component<'table.cell-with-sub-label', false>;
    col2: Schema.Attribute.Component<'table.cell', false>;
  };
}

export interface ToursFareDetails extends Struct.ComponentSchema {
  collectionName: 'components_tours_fare_details';
  info: {
    displayName: 'fareDetails';
  };
  attributes: {
    fare: Schema.Attribute.String;
    fareText: Schema.Attribute.String;
    person: Schema.Attribute.String;
  };
}

export interface ToursFeaturedTours extends Struct.ComponentSchema {
  collectionName: 'components_tours_featured_tours';
  info: {
    description: '';
    displayName: 'FeaturedTours';
  };
  attributes: {
    featuredTour: Schema.Attribute.Relation<
      'oneToOne',
      'api::featured-tour.featured-tour'
    >;
    featuredTourTitle: Schema.Attribute.String;
    show: Schema.Attribute.Boolean;
  };
}

export interface ToursHeroDescription extends Struct.ComponentSchema {
  collectionName: 'components_tours_hero_descriptions';
  info: {
    description: '';
    displayName: 'HeroDescription';
  };
  attributes: {
    heroDescription: Schema.Attribute.Blocks;
    show: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.about-us-turbo': AboutUsAboutUsTurbo;
      'aircraft-fleet.aircraft-fleet-tabs': AircraftFleetAircraftFleetTabs;
      'aircraft-fleet.fleet-info': AircraftFleetFleetInfo;
      'canadian-passenger-rights.tariffs': CanadianPassengerRightsTariffs;
      'careers.careers-table': CareersCareersTable;
      'careers.join-our-team': CareersJoinOurTeam;
      'careers.tab-with-youtube-link': CareersTabWithYoutubeLink;
      'chartered-flights-page.destination': CharteredFlightsPageDestination;
      'chartered-flights-page.fleet-tab': CharteredFlightsPageFleetTab;
      'chartered-flights-page.pricing-tab': CharteredFlightsPagePricingTab;
      'common.accordian': CommonAccordian;
      'common.accordian-details': CommonAccordianDetails;
      'common.form-with-description': CommonFormWithDescription;
      'common.help': CommonHelp;
      'community-involvement.community-tabs': CommunityInvolvementCommunityTabs;
      'elements.accordion': ElementsAccordion;
      'elements.accordion-with-ck-editor': ElementsAccordionWithCkEditor;
      'elements.button': ElementsButton;
      'elements.drop-down-data': ElementsDropDownData;
      'elements.gallery': ElementsGallery;
      'elements.harbour-air-article': ElementsHarbourAirArticle;
      'elements.harbour-air-services': ElementsHarbourAirServices;
      'elements.image-text-block': ElementsImageTextBlock;
      'elements.image-with-editor': ElementsImageWithEditor;
      'elements.instagram-images': ElementsInstagramImages;
      'elements.pdf-links': ElementsPdfLinks;
      'elements.pricing-table': ElementsPricingTable;
      'elements.tab': ElementsTab;
      'elements.table-details': ElementsTableDetails;
      'elements.table-fields': ElementsTableFields;
      'elements.text-with-image': ElementsTextWithImage;
      'elements.three-col-section': ElementsThreeColSection;
      'elements.title-desc-with-from-url': ElementsTitleDescWithFromUrl;
      'elements.title-desc-with-image-links': ElementsTitleDescWithImageLinks;
      'elements.title-with-ck-editor': ElementsTitleWithCkEditor;
      'elements.title-with-desc-and-image': ElementsTitleWithDescAndImage;
      'elements.title-with-desc-and-multi-media': ElementsTitleWithDescAndMultiMedia;
      'elements.title-with-description': ElementsTitleWithDescription;
      'elements.title-with-image': ElementsTitleWithImage;
      'elements.title-with-media-and-button': ElementsTitleWithMediaAndButton;
      'elements.title-with-youtube-link': ElementsTitleWithYoutubeLink;
      'elements.tour-card': ElementsTourCard;
      'elements.trip-advisor': ElementsTripAdvisor;
      'enhanced-components.button': EnhancedComponentsButton;
      'enhanced-components.hero-component': EnhancedComponentsHeroComponent;
      'enhanced-components.multi-card-component': EnhancedComponentsMultiCardComponent;
      'enhanced-components.multi-cards-section': EnhancedComponentsMultiCardsSection;
      'extra-assistance.accordion-with-editor': ExtraAssistanceAccordionWithEditor;
      'extra-assistance.assistance': ExtraAssistanceAssistance;
      'extra-assistance.cards': ExtraAssistanceCards;
      'extra-assistance.files': ExtraAssistanceFiles;
      'faq.accordion': FaqAccordion;
      'faq.accordion-data': FaqAccordionData;
      'faq.button-with-boolean': FaqButtonWithBoolean;
      'faq.know-before': FaqKnowBefore;
      'faq.questions': FaqQuestions;
      'footer.bottom-content': FooterBottomContent;
      'footer.footer-links': FooterFooterLinks;
      'footer.footer-logo-links': FooterFooterLogoLinks;
      'footer.footer-logos': FooterFooterLogos;
      'footer.footer-stay-update': FooterFooterStayUpdate;
      'footer.link': FooterLink;
      'form.car-service-hire-form': FormCarServiceHireForm;
      'form.email-form': FormEmailForm;
      'further-questions.contact-form': FurtherQuestionsContactForm;
      'going-electric.going-electring-inquires': GoingElectricGoingElectringInquires;
      'going-electric.specification-details': GoingElectricSpecificationDetails;
      'going-electric.specifications': GoingElectricSpecifications;
      'header.alert': HeaderAlert;
      'header.link': HeaderLink;
      'header.media-links': HeaderMediaLinks;
      'header.menu-dropdown': HeaderMenuDropdown;
      'home.article-carousel': HomeArticleCarousel;
      'home.description': HomeDescription;
      'home.grab-deals': HomeGrabDeals;
      'home.hero-carousel': HomeHeroCarousel;
      'home.home-carousel': HomeHomeCarousel;
      'home.home-instagram': HomeHomeInstagram;
      'home.home-locations': HomeHomeLocations;
      'home.home-tours': HomeHomeTours;
      'home.news': HomeNews;
      'inside-location.additionalinfo-details': InsideLocationAdditionalinfoDetails;
      'inside-location.address': InsideLocationAddress;
      'inside-location.guide': InsideLocationGuide;
      'inside-location.guide-information': InsideLocationGuideInformation;
      'loyalty-program.high-flyer-form': LoyaltyProgramHighFlyerForm;
      'loyalty-program.high-flyer-membership-levels': LoyaltyProgramHighFlyerMembershipLevels;
      'loyalty-program.high-flyer-rewards-form': LoyaltyProgramHighFlyerRewardsForm;
      'loyalty-program.pricing-structure': LoyaltyProgramPricingStructure;
      'loyalty-program.turbobucks-pricing': LoyaltyProgramTurbobucksPricing;
      'luggage.hero-description': LuggageHeroDescription;
      'luggage.luggage-allowance': LuggageLuggageAllowance;
      'luggage.luggage-allowance-table': LuggageLuggageAllowanceTable;
      'luggage.luggage-dimensions-table': LuggageLuggageDimensionsTable;
      'luggage.special': LuggageSpecial;
      'luggage.travelling-with-excess-luggage': LuggageTravellingWithExcessLuggage;
      'main-deals.campaign-section': MainDealsCampaignSection;
      'main-deals.deals': MainDealsDeals;
      'main-location.locations': MainLocationLocations;
      'main-tours.fare-section': MainToursFareSection;
      'main-tours.featured-tours': MainToursFeaturedTours;
      'main-tours.tour-cards': MainToursTourCards;
      'meta-data.meta-data': MetaDataMetaData;
      'mobility.hero-section': MobilityHeroSection;
      'mobility.images': MobilityImages;
      'our-fares.fare-details': OurFaresFareDetails;
      'our-fares.fare-details-content': OurFaresFareDetailsContent;
      'our-fares.fare-helper-content': OurFaresFareHelperContent;
      'our-promises.ha-promise': OurPromisesHaPromise;
      'our-promises.mission-and-vision': OurPromisesMissionAndVision;
      'our-promises.our-values': OurPromisesOurValues;
      'our-story.details': OurStoryDetails;
      'our-story.story': OurStoryStory;
      'parcel-express.faq': ParcelExpressFaq;
      'parcel-express.how-to-accordion': ParcelExpressHowToAccordion;
      'parcel-express.parcel-faq': ParcelExpressParcelFaq;
      'parcel-express.rates': ParcelExpressRates;
      'parcel-express.shipping-cost': ParcelExpressShippingCost;
      'private-tours.book-private-tour': PrivateToursBookPrivateTour;
      'quick-ticket.quick-ticket-form': QuickTicketQuickTicketForm;
      'schedules.schedules': SchedulesSchedules;
      'seo.additional': SeoAdditional;
      'seo.analytics': SeoAnalytics;
      'seo.seo': SeoSeo;
      'standby-travel.criteria': StandbyTravelCriteria;
      'standby-travel.discounted-travel-form': StandbyTravelDiscountedTravelForm;
      'standby-travel.how-to-fly': StandbyTravelHowToFly;
      'standby-travel.how-to-fly-section': StandbyTravelHowToFlySection;
      'standby-travel.microsoft-form': StandbyTravelMicrosoftForm;
      'standby-travel.standby-travel-info': StandbyTravelStandbyTravelInfo;
      'standby-travel.travel-tab': StandbyTravelTravelTab;
      'table.cell': TableCell;
      'table.cell-with-sub-label': TableCellWithSubLabel;
      'table.four-col-table': TableFourColTable;
      'table.four-col-table-rows': TableFourColTableRows;
      'table.six-col-table': TableSixColTable;
      'table.six-col-table-rows': TableSixColTableRows;
      'table.three-col-table': TableThreeColTable;
      'table.three-col-table-rows': TableThreeColTableRows;
      'table.two-col-table': TableTwoColTable;
      'table.two-col-table-rows': TableTwoColTableRows;
      'tours.fare-details': ToursFareDetails;
      'tours.featured-tours': ToursFeaturedTours;
      'tours.hero-description': ToursHeroDescription;
    }
  }
}
