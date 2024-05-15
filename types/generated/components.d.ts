import type { Schema, Attribute } from '@strapi/strapi';

export interface FormationsList extends Schema.Component {
  collectionName: 'components_formations_lists';
  info: {
    displayName: 'Formations List';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    formations: Attribute.Relation<
      'formations.list',
      'oneToMany',
      'api::formation.formation'
    >;
  };
}

export interface GlobalCta extends Schema.Component {
  collectionName: 'components_global_ctas';
  info: {
    displayName: 'Button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    type: Attribute.Enumeration<
      ['primary', 'secondary', 'outline-primary', 'outline-secondary']
    >;
  };
}

export interface GlobalHeading extends Schema.Component {
  collectionName: 'components_global_headings';
  info: {
    displayName: 'Heading';
    icon: 'bold';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
  };
}

export interface GlobalImage extends Schema.Component {
  collectionName: 'components_global_images';
  info: {
    displayName: 'Media';
    icon: 'picture';
    description: '';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface GlobalLink extends Schema.Component {
  collectionName: 'components_global_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface GlobalRichText extends Schema.Component {
  collectionName: 'components_global_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'layout';
  };
  attributes: {
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface GlobalSection extends Schema.Component {
  collectionName: 'components_global_sections';
  info: {
    displayName: 'Section';
    icon: 'expand';
  };
  attributes: {
    sectionHeading: Attribute.Component<'global.heading'>;
    sectionMedia: Attribute.Component<'global.image'>;
    sectionContent: Attribute.Component<'global.rich-text'>;
    sectionButton: Attribute.Component<'global.cta'>;
  };
}

export interface GlobalSeo extends Schema.Component {
  collectionName: 'components_global_seos';
  info: {
    displayName: 'Seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    shareImage: Attribute.Media;
  };
}

export interface GlobalSlider extends Schema.Component {
  collectionName: 'components_global_sliders';
  info: {
    displayName: 'Slider';
    icon: 'picture';
  };
  attributes: {
    medias: Attribute.Media;
  };
}

export interface MenuCtAs extends Schema.Component {
  collectionName: 'components_menu_ct_as';
  info: {
    displayName: 'CTAs';
    icon: 'expand';
  };
  attributes: {
    button: Attribute.Component<'global.cta', true>;
  };
}

export interface MenuDropdownMenu extends Schema.Component {
  collectionName: 'components_menu_dropdown_menus';
  info: {
    displayName: 'Dropdown menu';
    icon: 'arrowDown';
  };
  attributes: {
    title: Attribute.String;
    formations: Attribute.Relation<
      'menu.dropdown-menu',
      'oneToMany',
      'api::formation.formation'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'formations.list': FormationsList;
      'global.cta': GlobalCta;
      'global.heading': GlobalHeading;
      'global.image': GlobalImage;
      'global.link': GlobalLink;
      'global.rich-text': GlobalRichText;
      'global.section': GlobalSection;
      'global.seo': GlobalSeo;
      'global.slider': GlobalSlider;
      'menu.ct-as': MenuCtAs;
      'menu.dropdown-menu': MenuDropdownMenu;
    }
  }
}
