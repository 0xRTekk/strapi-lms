import type { Schema, Attribute } from '@strapi/strapi';

export interface FormationsFormationCard extends Schema.Component {
  collectionName: 'components_formations_formation_cards';
  info: {
    displayName: 'Formation card';
    icon: 'expand';
  };
  attributes: {
    image: Attribute.Media;
    name: Attribute.String;
    description: Attribute.Text;
    cta: Attribute.Component<'global.cta'>;
  };
}

export interface FormationsList extends Schema.Component {
  collectionName: 'components_formations_lists';
  info: {
    displayName: 'List';
    icon: 'bulletList';
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
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    image: Attribute.Media;
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
      'formations.formation-card': FormationsFormationCard;
      'formations.list': FormationsList;
      'global.cta': GlobalCta;
      'global.heading': GlobalHeading;
      'global.image': GlobalImage;
      'global.link': GlobalLink;
      'menu.ct-as': MenuCtAs;
      'menu.dropdown-menu': MenuDropdownMenu;
    }
  }
}
