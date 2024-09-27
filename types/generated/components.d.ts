import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsAboutUsTurbo extends Schema.Component {
  collectionName: 'components_about_us_about_us_turbos';
  info: {
    displayName: 'About Us Turbo';
    icon: 'sun';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    details: Attribute.Component<
      'elements.title-with-desc-and-multi-media',
      true
    >;
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface AircraftFleetAircraftFleetTabs extends Schema.Component {
  collectionName: 'components_aircraft_fleet_aircraft_fleet_tabs';
  info: {
    displayName: 'Aircraft Fleet Tabs';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
    fleetInformations: Attribute.Component<'aircraft-fleet.fleet-info', true>;
  };
}

export interface AircraftFleetFleetInfo extends Schema.Component {
  collectionName: 'components_aircraft_fleet_fleet_infos';
  info: {
    displayName: 'Fleet Information';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    value: Attribute.String;
  };
}

export interface CanadianPassengerRightsTariffs extends Schema.Component {
  collectionName: 'components_canadian_passenger_rights_tariffs';
  info: {
    displayName: 'Tariffs';
  };
  attributes: {
    tariffsInfo: Attribute.Component<'elements.title-with-description'> &
      Attribute.Required;
    tariffsFiles: Attribute.Component<'elements.pdf-links', true>;
  };
}

export interface CareersCareersTable extends Schema.Component {
  collectionName: 'components_careers_careers_tables';
  info: {
    displayName: 'Careers Oppurtunity Table';
    description: '';
  };
  attributes: {
    tableTitle: Attribute.String;
    show: Attribute.Boolean;
    careerOpportunities: Attribute.Relation<
      'careers.careers-table',
      'oneToMany',
      'api::career-opportunity.career-opportunity'
    >;
  };
}

export interface CareersJoinOurTeam extends Schema.Component {
  collectionName: 'components_careers_join_our_teams';
  info: {
    displayName: 'Join Our Team';
    description: '';
  };
  attributes: {
    show: Attribute.Boolean;
    infoText: Attribute.Blocks;
  };
}

export interface CareersTabWithYoutubeLink extends Schema.Component {
  collectionName: 'components_careers_tab_with_youtube_links';
  info: {
    displayName: 'Career Hero Section';
    description: '';
  };
  attributes: {
    titleWithLink: Attribute.Component<
      'elements.title-with-youtube-link',
      true
    >;
    show: Attribute.Boolean;
    careersInfo: Attribute.Component<'elements.title-with-description'>;
  };
}

export interface CharteredFlightsPageDestination extends Schema.Component {
  collectionName: 'components_chartered_flights_page_destinations';
  info: {
    displayName: 'Destination';
    description: '';
  };
  attributes: {
    heading: Attribute.Component<'elements.title-with-description'>;
    images: Attribute.Media;
    infoText: Attribute.String;
    show: Attribute.Boolean;
    accordian: Attribute.Component<'elements.accordion-with-ck-editor', true>;
  };
}

export interface CharteredFlightsPageFleetTab extends Schema.Component {
  collectionName: 'components_chartered_flights_page_fleet_tabs';
  info: {
    displayName: 'Fleet Tab';
    description: '';
  };
  attributes: {
    heading: Attribute.Component<'elements.title-with-description'>;
    images: Attribute.Media;
    show: Attribute.Boolean;
  };
}

export interface CharteredFlightsPagePricingTab extends Schema.Component {
  collectionName: 'components_chartered_flights_page_pricing_tabs';
  info: {
    displayName: 'Pricing Tab';
    description: '';
  };
  attributes: {
    heading: Attribute.Component<'elements.title-with-description'>;
    pricingImg: Attribute.Media;
    pricingData: Attribute.Component<'elements.pricing-table', true>;
    show: Attribute.Boolean;
  };
}

export interface CommonAccordianDetails extends Schema.Component {
  collectionName: 'components_common_accordian_details';
  info: {
    displayName: 'Accordian Details';
    icon: 'bulletList';
  };
  attributes: {
    label: Attribute.String;
    content: Attribute.Blocks;
  };
}

export interface CommonAccordian extends Schema.Component {
  collectionName: 'components_common_accordians';
  info: {
    displayName: 'Accordian';
    icon: 'filter';
    description: '';
  };
  attributes: {
    show: Attribute.Boolean;
    infoText: Attribute.Blocks;
    accordionDescription: Attribute.Component<'elements.title-with-description'>;
    details: Attribute.Component<'elements.accordion-with-ck-editor', true>;
    formIndex: Attribute.Integer;
  };
}

export interface CommonHelp extends Schema.Component {
  collectionName: 'components_common_helps';
  info: {
    displayName: 'Help';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    show: Attribute.Boolean;
    type: Attribute.Enumeration<['description', 'button']> &
      Attribute.DefaultTo<'description'>;
    buttonName: Attribute.String;
    buttonUrl: Attribute.String;
  };
}

export interface CommunityInvolvementCommunityTabs extends Schema.Component {
  collectionName: 'components_community_involvement_community_tabs';
  info: {
    displayName: 'Community Tabs';
  };
  attributes: {
    communityTabs: Attribute.Component<
      'elements.title-with-desc-and-image',
      true
    >;
  };
}

export interface ElementsAccordionWithCkEditor extends Schema.Component {
  collectionName: 'components_elements_accordion_with_ck_editors';
  info: {
    displayName: 'Accordion With CKEditor';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    documents: Attribute.Relation<
      'elements.accordion-with-ck-editor',
      'oneToMany',
      'api::document.document'
    >;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ElementsAccordion extends Schema.Component {
  collectionName: 'components_elements_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    accordionDetails: Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
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
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
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

export interface ElementsGallery extends Schema.Component {
  collectionName: 'components_elements_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    images: Attribute.Component<'elements.instagram-images', true>;
    title: Attribute.String & Attribute.Required;
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ElementsHarbourAirArticle extends Schema.Component {
  collectionName: 'components_home_harbour_air_articles';
  info: {
    displayName: 'Article';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    description: Attribute.String;
    buttonText: Attribute.String;
    buttonSlug: Attribute.String;
  };
}

export interface ElementsHarbourAirServices extends Schema.Component {
  collectionName: 'components_elements_harbour_air_services';
  info: {
    displayName: 'Image With Description';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    subtitle: Attribute.String;
    description: Attribute.Text;
    title: Attribute.String;
  };
}

export interface ElementsInstagramImages extends Schema.Component {
  collectionName: 'components_elements_instagram_images';
  info: {
    displayName: 'Image With Link';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    slug: Attribute.String;
  };
}

export interface ElementsPdfLinks extends Schema.Component {
  collectionName: 'components_elements_pdf_links';
  info: {
    displayName: 'PdfLinks';
    icon: 'filePdf';
    description: '';
  };
  attributes: {
    fileName: Attribute.String & Attribute.Required;
    file: Attribute.Media & Attribute.Required;
  };
}

export interface ElementsPricingTable extends Schema.Component {
  collectionName: 'components_elements_pricing_tables';
  info: {
    displayName: 'pricingTable';
    description: '';
  };
  attributes: {
    destination_Column: Attribute.String;
    starting_At_Column: Attribute.String;
  };
}

export interface ElementsTableDetails extends Schema.Component {
  collectionName: 'components_elements_table_details';
  info: {
    displayName: 'tableDetails';
  };
  attributes: {
    position_Column: Attribute.String;
    application_Deadline_Column: Attribute.String;
    location_Column: Attribute.String;
  };
}

export interface ElementsTableFields extends Schema.Component {
  collectionName: 'components_elements_table_fields';
  info: {
    displayName: 'tableFields';
  };
  attributes: {
    tableInformation: Attribute.Component<'elements.pricing-table', true>;
  };
}

export interface ElementsTextWithImage extends Schema.Component {
  collectionName: 'components_elements_text_with_images';
  info: {
    displayName: 'Text With Image';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ElementsTitleDescWithImageLinks extends Schema.Component {
  collectionName: 'components_elements_title_desc_with_image_links';
  info: {
    displayName: 'Title Desc With ImageLinks';
  };
  attributes: {
    images: Attribute.Component<'elements.instagram-images', true>;
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ElementsTitleWithCkEditor extends Schema.Component {
  collectionName: 'components_elements_title_with_ck_editors';
  info: {
    displayName: 'Title With CKEditor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ElementsTitleWithDescAndImage extends Schema.Component {
  collectionName: 'components_elements_title_with_desc_and_images';
  info: {
    displayName: 'Title With Desc And media';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    media: Attribute.Media;
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
    media_url: Attribute.String;
  };
}

export interface ElementsTitleWithDescAndMultiMedia extends Schema.Component {
  collectionName: 'components_elements_title_with_desc_and_multi_medias';
  info: {
    displayName: 'Title With Desc And Multi media';
  };
  attributes: {
    show: Attribute.Boolean & Attribute.Required;
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    media: Attribute.Media;
    media_url: Attribute.String;
  };
}

export interface ElementsTitleWithDescription extends Schema.Component {
  collectionName: 'components_elements_title_with_descriptions';
  info: {
    displayName: 'Title With Description';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks & Attribute.Required;
    show: Attribute.Boolean;
    componentAlignment: Attribute.Enumeration<['column', 'row']>;
  };
}

export interface ElementsTitleWithImage extends Schema.Component {
  collectionName: 'components_elements_title_with_images';
  info: {
    displayName: 'Title With Image';
    icon: 'seed';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    coverImage: Attribute.Media;
    show: Attribute.Boolean;
    opacity: Attribute.Enumeration<
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
        'opacity-100'
      ]
    > &
      Attribute.DefaultTo<'opacity-50'>;
  };
}

export interface ElementsTitleWithMediaAndButton extends Schema.Component {
  collectionName: 'components_elements_title_with_media_and_buttons';
  info: {
    displayName: 'Title With Media And Button';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    image: Attribute.Media;
    buttonText: Attribute.String;
    buttonUrl: Attribute.String;
    show: Attribute.Boolean;
    showButton: Attribute.Boolean;
  };
}

export interface ElementsTitleWithYoutubeLink extends Schema.Component {
  collectionName: 'components_elements_title_with_youtube_links';
  info: {
    displayName: 'Titlewith Link';
    description: '';
  };
  attributes: {
    tabName: Attribute.String;
    url: Attribute.String;
  };
}

export interface ElementsTourCard extends Schema.Component {
  collectionName: 'components_elements_tour_cards';
  info: {
    displayName: 'TourCard';
    description: '';
    icon: 'car';
  };
  attributes: {
    name: Attribute.String;
    heroImage: Attribute.Media;
    shortDescription: Attribute.String;
    learnMoreBtnText: Attribute.String;
  };
}

export interface ElementsTripAdvisor extends Schema.Component {
  collectionName: 'components_elements_trip_advisors';
  info: {
    displayName: 'TripAdvisor';
  };
  attributes: {
    tripAdvisorLogo: Attribute.Media & Attribute.Required;
    comment: Attribute.String;
    authorName: Attribute.String;
    backgroundImage: Attribute.Media;
    quoteImage: Attribute.Media;
  };
}

export interface ExtraAssistanceAccordionWithEditor extends Schema.Component {
  collectionName: 'components_extra_assistance_accordion_with_editors';
  info: {
    displayName: 'Accordion With Editor';
    description: '';
  };
  attributes: {
    accordion: Attribute.Component<'elements.accordion-with-ck-editor', true>;
    show: Attribute.Boolean;
  };
}

export interface ExtraAssistanceAssistance extends Schema.Component {
  collectionName: 'components_extra_assistance_assistances';
  info: {
    displayName: 'assistance';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    assistanceCard: Attribute.Component<'extra-assistance.cards', true>;
  };
}

export interface ExtraAssistanceCards extends Schema.Component {
  collectionName: 'components_extra_assistance_cards';
  info: {
    displayName: 'cards';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    buttonText: Attribute.String;
    description: Attribute.String;
    slug: Attribute.String;
  };
}

export interface ExtraAssistanceFiles extends Schema.Component {
  collectionName: 'components_extra_assistance_files';
  info: {
    displayName: 'Files';
    description: '';
  };
  attributes: {
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
    document: Attribute.Relation<
      'extra-assistance.files',
      'oneToOne',
      'api::document.document'
    >;
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
    description: Attribute.Blocks;
    show: Attribute.Boolean;
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

export interface FormContactUsDetails extends Schema.Component {
  collectionName: 'components_form_contact_us_details';
  info: {
    displayName: 'Contact Us Details';
  };
  attributes: {
    helpOptions: Attribute.String;
  };
}

export interface FurtherQuestionsContactForm extends Schema.Component {
  collectionName: 'components_further_questions_contact_forms';
  info: {
    displayName: 'Contact Form';
  };
  attributes: {
    title: Attribute.String;
    show: Attribute.Boolean;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    contactUsOptions: Attribute.Component<'form.contact-us-details', true>;
  };
}

export interface GoingElectricGoingElectringInquires extends Schema.Component {
  collectionName: 'components_going_electric_going_electring_inquires';
  info: {
    displayName: 'Going Electring Inquires';
    icon: 'connector';
    description: '';
  };
  attributes: {
    quote: Attribute.Text & Attribute.Required;
    author: Attribute.String & Attribute.Required;
    inquiriesFormTitle: Attribute.String;
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
    showForm: Attribute.Boolean & Attribute.DefaultTo<true>;
    backgroundImage: Attribute.Media;
    formDescription: Attribute.Blocks;
  };
}

export interface GoingElectricSpecificationDetails extends Schema.Component {
  collectionName: 'components_going_electric_specification_details';
  info: {
    displayName: 'Specification Details';
    description: '';
  };
  attributes: {
    specifications: Attribute.String & Attribute.Required;
    standardRange: Attribute.String & Attribute.Required;
    extendedRange: Attribute.String & Attribute.Required;
    performance: Attribute.String & Attribute.Required;
    pistonBeaver: Attribute.String & Attribute.Required;
    haEBeaver: Attribute.String & Attribute.Required;
  };
}

export interface GoingElectricSpecifications extends Schema.Component {
  collectionName: 'components_going_electric_specifications';
  info: {
    displayName: 'Specifications';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    specificationDetails: Attribute.Component<
      'going-electric.specification-details',
      true
    >;
    specificationImage: Attribute.Media & Attribute.Required;
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
    cardMenus: Attribute.Relation<
      'header.dropdown',
      'oneToMany',
      'api::menu-image-link.menu-image-link'
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

export interface HomeArticleCarousel extends Schema.Component {
  collectionName: 'components_home_article_carousels';
  info: {
    displayName: 'ArticleCarousel';
    description: '';
  };
  attributes: {
    show: Attribute.Boolean;
    article: Attribute.Component<'elements.harbour-air-article', true>;
    moreDetails: Attribute.Component<'elements.button'>;
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
    highlights: Attribute.Component<'elements.harbour-air-services', true> &
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
    show: Attribute.Boolean;
    moreDeals: Attribute.Component<'elements.button'>;
    cardDeals: Attribute.Relation<
      'home.grab-deals',
      'oneToMany',
      'api::deal.deal'
    >;
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
    desktopImg: Attribute.Media & Attribute.Required;
    imageLink: Attribute.String;
    tabletImg: Attribute.Media & Attribute.Required;
    mobileImg: Attribute.Media & Attribute.Required;
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
    quote: Attribute.Text;
    authorName: Attribute.String;
    authorAddress: Attribute.String;
    instaProfileImage: Attribute.Media;
  };
}

export interface HomeHomeLocations extends Schema.Component {
  collectionName: 'components_home_home_locations';
  info: {
    displayName: 'Locations';
    description: '';
  };
  attributes: {
    locations: Attribute.Relation<
      'home.home-locations',
      'oneToMany',
      'api::location.location'
    >;
    title: Attribute.String;
    show: Attribute.Boolean;
  };
}

export interface HomeHomeTours extends Schema.Component {
  collectionName: 'components_home_home_tours';
  info: {
    displayName: 'Tours';
    description: '';
  };
  attributes: {
    tours: Attribute.Relation<
      'home.home-tours',
      'oneToMany',
      'api::tours-detail.tours-detail'
    >;
    title: Attribute.String;
    show: Attribute.Boolean;
  };
}

export interface HomeNews extends Schema.Component {
  collectionName: 'components_home_news';
  info: {
    displayName: 'News';
    description: '';
  };
  attributes: {
    news: Attribute.Relation<'home.news', 'oneToMany', 'api::news.news'>;
    moreDetails: Attribute.Component<'elements.button'>;
    show: Attribute.Boolean;
    title: Attribute.String;
  };
}

export interface InsideLocationAdditionalinfoDetails extends Schema.Component {
  collectionName: 'components_inside_location_additionalinfo_details';
  info: {
    displayName: 'AdditionalInformationDetails';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    additionalInformationImage: Attribute.Component<
      'inside-location.guide-information',
      true
    >;
    show: Attribute.Boolean;
    moreButton: Attribute.Component<'elements.button'>;
  };
}

export interface InsideLocationAddress extends Schema.Component {
  collectionName: 'components_inside_location_addresses';
  info: {
    displayName: 'Address';
    description: '';
  };
  attributes: {
    addressTitle: Attribute.String;
    addressDetails: Attribute.Blocks;
    addressMapUrl: Attribute.Text;
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
    googleMapUrl: Attribute.Text;
  };
}

export interface InsideLocationGuideInformation extends Schema.Component {
  collectionName: 'components_inside_location_guide_informations';
  info: {
    displayName: 'Image Section';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.Text;
    slug: Attribute.String;
  };
}

export interface InsideLocationGuide extends Schema.Component {
  collectionName: 'components_inside_location_guides';
  info: {
    displayName: 'Guide';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    moreArticles: Attribute.String;
    moreArticlesSlug: Attribute.String;
    guideInformations: Attribute.Component<
      'inside-location.guide-information',
      true
    >;
    show: Attribute.Boolean;
  };
}

export interface LoyaltyProgramHighFlyerForm extends Schema.Component {
  collectionName: 'components_loyalty_program_high_flyer_forms';
  info: {
    displayName: 'Turbobucks Form';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
    existingCustomerQuote: Attribute.Text;
  };
}

export interface LoyaltyProgramHighFlyerRewardsForm extends Schema.Component {
  collectionName: 'components_loyalty_program_high_flyer_rewards_forms';
  info: {
    displayName: 'High Flyer Rewards Form';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
    membershipTypeQuote: Attribute.Text;
  };
}

export interface LoyaltyProgramPricingStructure extends Schema.Component {
  collectionName: 'components_loyalty_program_pricing_structures';
  info: {
    displayName: 'Pricing Structure';
  };
  attributes: {
    priceRange: Attribute.String & Attribute.Required;
    Bonus: Attribute.String & Attribute.Required;
  };
}

export interface LoyaltyProgramTurbobucksPricing extends Schema.Component {
  collectionName: 'components_loyalty_program_turbobucks_pricings';
  info: {
    displayName: 'Turbobucks Pricing';
  };
  attributes: {
    details: Attribute.Component<'loyalty-program.pricing-structure', true>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface LuggageHeroDescription extends Schema.Component {
  collectionName: 'components_luggage_hero_descriptions';
  info: {
    displayName: 'HeroDescription';
    description: '';
  };
  attributes: {
    heroDescription: Attribute.Blocks;
    show: Attribute.Boolean;
  };
}

export interface LuggageLuggageAllowanceTable extends Schema.Component {
  collectionName: 'components_luggage_luggage_allowance_tables';
  info: {
    displayName: 'Luggage Allowance Table';
    description: '';
  };
  attributes: {
    light: Attribute.String;
    value: Attribute.String;
    comfort: Attribute.String;
    flex: Attribute.String;
    noValue: Attribute.Blocks;
  };
}

export interface LuggageLuggageAllowance extends Schema.Component {
  collectionName: 'components_luggage_luggage_allowances';
  info: {
    displayName: 'Luggage Allowance';
    description: '';
  };
  attributes: {
    description: Attribute.Blocks;
    show: Attribute.Boolean;
    luggageDimentionTitle: Attribute.String;
    luggageDimentionTable: Attribute.Component<
      'luggage.luggage-dimensions-table',
      true
    >;
    infoText: Attribute.Blocks;
    title: Attribute.String;
    tableDescription: Attribute.Component<
      'our-fares.fare-helper-content',
      true
    >;
  };
}

export interface LuggageLuggageDimensionsTable extends Schema.Component {
  collectionName: 'components_luggage_luggage_dimensions_tables';
  info: {
    displayName: 'Luggage Dimensions Table';
    description: '';
  };
  attributes: {
    aircraft: Attribute.String;
    width: Attribute.String;
    height: Attribute.String;
    breadth: Attribute.String;
  };
}

export interface LuggageSpecial extends Schema.Component {
  collectionName: 'components_luggage_special_s';
  info: {
    displayName: 'Special Luggage & Equipment';
    description: '';
  };
  attributes: {
    description: Attribute.Blocks;
    show: Attribute.Boolean;
    title: Attribute.String;
    luggageAccordion: Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
  };
}

export interface LuggageTravellingWithExcessLuggage extends Schema.Component {
  collectionName: 'components_luggage_travelling_with_excess_luggages';
  info: {
    displayName: 'Travelling with Excess Luggage';
    description: '';
  };
  attributes: {
    description: Attribute.Blocks;
    show: Attribute.Boolean;
    title: Attribute.String;
    infoText: Attribute.Blocks;
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

export interface MainLocationLocations extends Schema.Component {
  collectionName: 'components_main_location_locations';
  info: {
    displayName: 'locations';
    description: '';
  };
  attributes: {
    location: Attribute.Relation<
      'main-location.locations',
      'oneToOne',
      'api::location.location'
    >;
    pageTitle: Attribute.Component<'elements.title-with-media-and-button'>;
  };
}

export interface MainToursFareSection extends Schema.Component {
  collectionName: 'components_main_tours_fare_sections';
  info: {
    displayName: 'TourLocations';
    description: '';
  };
  attributes: {
    tourLocations: Attribute.Relation<
      'main-tours.fare-section',
      'oneToMany',
      'api::tour-location.tour-location'
    >;
    pageTitle: Attribute.Component<'elements.title-with-media-and-button'>;
  };
}

export interface MainToursFeaturedTours extends Schema.Component {
  collectionName: 'components_main_tours_featured_tours';
  info: {
    displayName: 'FeaturedTours';
    icon: 'crown';
    description: '';
  };
  attributes: {
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
    featuredTour: Attribute.Relation<
      'main-tours.featured-tours',
      'oneToOne',
      'api::featured-tour.featured-tour'
    >;
    featuredTourTitle: Attribute.String;
  };
}

export interface MainToursTourCards extends Schema.Component {
  collectionName: 'components_main_tours_tour_cards';
  info: {
    displayName: 'TourCards';
    icon: 'crown';
    description: '';
  };
  attributes: {
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
    tourPlaces: Attribute.Component<'elements.tour-card'>;
  };
}

export interface MetaMeta extends Schema.Component {
  collectionName: 'components_meta_metas';
  info: {
    displayName: 'Meta';
    description: '';
  };
  attributes: {
    showSideBookingWidget: Attribute.Boolean & Attribute.DefaultTo<false>;
    helpSection: Attribute.Component<'common.help'>;
  };
}

export interface MobilityHeroSection extends Schema.Component {
  collectionName: 'components_mobility_hero_sections';
  info: {
    displayName: 'HeroSection';
    description: '';
  };
  attributes: {
    heroSection: Attribute.Component<'elements.title-with-description'>;
    image: Attribute.Media;
    show: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface MobilityImages extends Schema.Component {
  collectionName: 'components_mobility_images';
  info: {
    displayName: 'Images';
    description: '';
  };
  attributes: {
    images: Attribute.Media;
    show: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface OurFaresFareDetailsContent extends Schema.Component {
  collectionName: 'components_our_fares_fare_details_contents';
  info: {
    displayName: 'Fare Details Content';
    icon: 'code';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    light: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
    comfort: Attribute.String & Attribute.Required;
    flex: Attribute.String & Attribute.Required;
    valueSuperScript: Attribute.String;
    lightSuperScript: Attribute.String;
    comfortSuperScript: Attribute.String;
    flexSuperScript: Attribute.String;
    subLabel: Attribute.String;
  };
}

export interface OurFaresFareDetails extends Schema.Component {
  collectionName: 'components_our_fares_fare_details';
  info: {
    displayName: 'Fare Details';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.Component<'our-fares.fare-details-content', true>;
  };
}

export interface OurFaresFareHelperContent extends Schema.Component {
  collectionName: 'components_our_fares_fare_helper_contents';
  info: {
    displayName: 'Fare Helper Content';
    description: '';
  };
  attributes: {
    value: Attribute.String & Attribute.Required;
    helperInfo: Attribute.Text & Attribute.Required;
  };
}

export interface OurPromisesHaPromise extends Schema.Component {
  collectionName: 'components_our_promises_ha_promises';
  info: {
    displayName: 'HA Promise';
  };
  attributes: {
    details: Attribute.Component<'elements.title-with-ck-editor'>;
    image: Attribute.Media;
  };
}

export interface OurPromisesMissionAndVision extends Schema.Component {
  collectionName: 'components_our_promises_mission_and_visions';
  info: {
    displayName: 'Mission And Vision';
  };
  attributes: {
    mission: Attribute.Component<'elements.title-with-ck-editor'>;
    vision: Attribute.Component<'elements.title-with-ck-editor'>;
    image: Attribute.Media;
  };
}

export interface OurPromisesOurValues extends Schema.Component {
  collectionName: 'components_our_promises_our_values';
  info: {
    displayName: 'Our Values';
    icon: 'command';
  };
  attributes: {
    title: Attribute.String;
    values: Attribute.Component<'elements.title-with-description', true>;
  };
}

export interface OurStoryDetails extends Schema.Component {
  collectionName: 'components_our_story_details';
  info: {
    displayName: 'details';
    icon: 'earth';
    description: '';
  };
  attributes: {
    year: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface OurStoryStory extends Schema.Component {
  collectionName: 'components_our_story_stories';
  info: {
    displayName: 'Story';
    icon: 'chartCircle';
  };
  attributes: {
    decade: Attribute.String;
    details: Attribute.Component<'our-story.details', true>;
  };
}

export interface ParcelExpressFaq extends Schema.Component {
  collectionName: 'components_parcel_express_faqs';
  info: {
    displayName: 'Faq';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    questionTitle: Attribute.String;
    faq_contents: Attribute.Relation<
      'parcel-express.faq',
      'oneToMany',
      'api::faq-content.faq-content'
    >;
    show: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ParcelExpressHowToAccordion extends Schema.Component {
  collectionName: 'components_parcel_express_how_to_accordions';
  info: {
    displayName: 'howToAccordion';
    description: '';
  };
  attributes: {
    ckEditorSection: Attribute.Component<
      'elements.accordion-with-ck-editor',
      true
    >;
    topSection: Attribute.Component<'elements.title-with-ck-editor'>;
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ParcelExpressParcelFaq extends Schema.Component {
  collectionName: 'components_parcel_express_parcel_faqs';
  info: {
    displayName: 'ParcelFaq';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    show: Attribute.Boolean;
    parcelAccordion: Attribute.Component<'common.accordian-details', true>;
    accordionTitle: Attribute.String;
  };
}

export interface ParcelExpressRates extends Schema.Component {
  collectionName: 'components_parcel_express_rates';
  info: {
    displayName: 'Rates';
    description: '';
  };
  attributes: {
    description: Attribute.Blocks;
    title: Attribute.String;
    show: Attribute.Boolean & Attribute.DefaultTo<false>;
    details: Attribute.Component<'elements.accordion-with-ck-editor', true>;
  };
}

export interface ParcelExpressShippingCost extends Schema.Component {
  collectionName: 'components_parcel_express_shipping_costs';
  info: {
    displayName: 'ShippingCost';
    description: '';
  };
  attributes: {
    imageSection: Attribute.Component<'elements.title-with-image', true>;
    topSection: Attribute.Component<'elements.title-with-ck-editor'>;
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface QuickTicketQuickTicketForm extends Schema.Component {
  collectionName: 'components_quick_ticket_quick_ticket_forms';
  info: {
    displayName: 'QuickTicketForm';
  };
  attributes: {
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SchedulesSchedules extends Schema.Component {
  collectionName: 'components_schedules_schedules';
  info: {
    displayName: 'Schedules';
  };
  attributes: {
    documents: Attribute.Relation<
      'schedules.schedules',
      'oneToMany',
      'api::document.document'
    >;
    departure: Attribute.Relation<
      'schedules.schedules',
      'oneToOne',
      'api::destination.destination'
    >;
    arrival: Attribute.Relation<
      'schedules.schedules',
      'oneToOne',
      'api::destination.destination'
    >;
  };
}

export interface SeoAdditional extends Schema.Component {
  collectionName: 'components_seo_additionals';
  info: {
    displayName: 'additional';
  };
  attributes: {
    key: Attribute.String;
    value: Attribute.String;
  };
}

export interface SeoAnalytics extends Schema.Component {
  collectionName: 'components_seo_analytics';
  info: {
    displayName: 'Analytics';
  };
  attributes: {
    googleAnalyticsTrackingId: Attribute.String;
    googleTagManagerId: Attribute.String;
    hotjarSiteId: Attribute.String;
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
    openGraphImage: Attribute.Media;
    openGraphTitle: Attribute.String;
    openGraphDescription: Attribute.Text;
    twitterCardImage: Attribute.Media;
    twitterCardTitle: Attribute.String;
    twitterCardDescription: Attribute.Text;
    additional: Attribute.Component<'seo.additional', true>;
    analytics: Attribute.Component<'seo.analytics'>;
  };
}

export interface StandbyTravelCriteria extends Schema.Component {
  collectionName: 'components_standby_travel_criteria';
  info: {
    displayName: 'Criteria';
    description: '';
  };
  attributes: {
    eligibilityCriteria: Attribute.String & Attribute.Required;
    reference: Attribute.Text & Attribute.Required;
  };
}

export interface StandbyTravelDiscountedTravelForm extends Schema.Component {
  collectionName: 'components_standby_travel_discounted_travel_forms';
  info: {
    displayName: 'Discounted Travel Form';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface StandbyTravelHowToFlySection extends Schema.Component {
  collectionName: 'components_standby_travel_how_to_fly_sections';
  info: {
    displayName: 'howToFlySection';
  };
  attributes: {
    title: Attribute.String;
    criteria: Attribute.Component<'standby-travel.criteria', true>;
  };
}

export interface StandbyTravelHowToFly extends Schema.Component {
  collectionName: 'components_standby_travel_how_to_flies';
  info: {
    displayName: 'How To Fly';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    criteria: Attribute.Component<'standby-travel.criteria', true>;
  };
}

export interface StandbyTravelStandbyTravelInfo extends Schema.Component {
  collectionName: 'components_standby_travel_standby_travel_infos';
  info: {
    displayName: 'standbyTravelInfo';
  };
  attributes: {
    overview: Attribute.Text & Attribute.Required;
  };
}

export interface StandbyTravelTravelTab extends Schema.Component {
  collectionName: 'components_standby_travel_travel_tabs';
  info: {
    displayName: 'travelTab';
    description: '';
  };
  attributes: {
    decription: Attribute.Text;
    title: Attribute.String & Attribute.Required;
    travelInfo: Attribute.Component<'elements.accordion-with-ck-editor', true>;
  };
}

export interface ToursFareDetails extends Schema.Component {
  collectionName: 'components_tours_fare_details';
  info: {
    displayName: 'fareDetails';
  };
  attributes: {
    fareText: Attribute.String;
    fare: Attribute.String;
    person: Attribute.String;
  };
}

export interface ToursFeaturedTours extends Schema.Component {
  collectionName: 'components_tours_featured_tours';
  info: {
    displayName: 'FeaturedTours';
    description: '';
  };
  attributes: {
    featuredTourTitle: Attribute.String;
    featuredTour: Attribute.Relation<
      'tours.featured-tours',
      'oneToOne',
      'api::featured-tour.featured-tour'
    >;
    show: Attribute.Boolean;
  };
}

export interface ToursHeroDescription extends Schema.Component {
  collectionName: 'components_tours_hero_descriptions';
  info: {
    displayName: 'HeroDescription';
    description: '';
  };
  attributes: {
    heroDescription: Attribute.Blocks;
    show: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
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
      'common.accordian-details': CommonAccordianDetails;
      'common.accordian': CommonAccordian;
      'common.help': CommonHelp;
      'community-involvement.community-tabs': CommunityInvolvementCommunityTabs;
      'elements.accordion-with-ck-editor': ElementsAccordionWithCkEditor;
      'elements.accordion': ElementsAccordion;
      'elements.button': ElementsButton;
      'elements.drop-down-data': ElementsDropDownData;
      'elements.gallery': ElementsGallery;
      'elements.harbour-air-article': ElementsHarbourAirArticle;
      'elements.harbour-air-services': ElementsHarbourAirServices;
      'elements.instagram-images': ElementsInstagramImages;
      'elements.pdf-links': ElementsPdfLinks;
      'elements.pricing-table': ElementsPricingTable;
      'elements.table-details': ElementsTableDetails;
      'elements.table-fields': ElementsTableFields;
      'elements.text-with-image': ElementsTextWithImage;
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
      'extra-assistance.accordion-with-editor': ExtraAssistanceAccordionWithEditor;
      'extra-assistance.assistance': ExtraAssistanceAssistance;
      'extra-assistance.cards': ExtraAssistanceCards;
      'extra-assistance.files': ExtraAssistanceFiles;
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
      'form.contact-us-details': FormContactUsDetails;
      'further-questions.contact-form': FurtherQuestionsContactForm;
      'going-electric.going-electring-inquires': GoingElectricGoingElectringInquires;
      'going-electric.specification-details': GoingElectricSpecificationDetails;
      'going-electric.specifications': GoingElectricSpecifications;
      'header.dropdown': HeaderDropdown;
      'header.link': HeaderLink;
      'header.media-links': HeaderMediaLinks;
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
      'inside-location.guide-information': InsideLocationGuideInformation;
      'inside-location.guide': InsideLocationGuide;
      'loyalty-program.high-flyer-form': LoyaltyProgramHighFlyerForm;
      'loyalty-program.high-flyer-rewards-form': LoyaltyProgramHighFlyerRewardsForm;
      'loyalty-program.pricing-structure': LoyaltyProgramPricingStructure;
      'loyalty-program.turbobucks-pricing': LoyaltyProgramTurbobucksPricing;
      'luggage.hero-description': LuggageHeroDescription;
      'luggage.luggage-allowance-table': LuggageLuggageAllowanceTable;
      'luggage.luggage-allowance': LuggageLuggageAllowance;
      'luggage.luggage-dimensions-table': LuggageLuggageDimensionsTable;
      'luggage.special': LuggageSpecial;
      'luggage.travelling-with-excess-luggage': LuggageTravellingWithExcessLuggage;
      'main-deals.deals': MainDealsDeals;
      'main-location.locations': MainLocationLocations;
      'main-tours.fare-section': MainToursFareSection;
      'main-tours.featured-tours': MainToursFeaturedTours;
      'main-tours.tour-cards': MainToursTourCards;
      'meta.meta': MetaMeta;
      'mobility.hero-section': MobilityHeroSection;
      'mobility.images': MobilityImages;
      'our-fares.fare-details-content': OurFaresFareDetailsContent;
      'our-fares.fare-details': OurFaresFareDetails;
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
      'quick-ticket.quick-ticket-form': QuickTicketQuickTicketForm;
      'schedules.schedules': SchedulesSchedules;
      'seo.additional': SeoAdditional;
      'seo.analytics': SeoAnalytics;
      'seo.seo': SeoSeo;
      'standby-travel.criteria': StandbyTravelCriteria;
      'standby-travel.discounted-travel-form': StandbyTravelDiscountedTravelForm;
      'standby-travel.how-to-fly-section': StandbyTravelHowToFlySection;
      'standby-travel.how-to-fly': StandbyTravelHowToFly;
      'standby-travel.standby-travel-info': StandbyTravelStandbyTravelInfo;
      'standby-travel.travel-tab': StandbyTravelTravelTab;
      'tours.fare-details': ToursFareDetails;
      'tours.featured-tours': ToursFeaturedTours;
      'tours.hero-description': ToursHeroDescription;
    }
  }
}
