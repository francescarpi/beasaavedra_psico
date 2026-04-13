export interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  /** Iconify icon name (e.g. "material-symbols:person") */
  icon: string;
  /** Card background variant matching CSS classes */
  variant: 'white' | 'secondary' | 'tertiary';
  /** i18n keys for each specialty item */
  items: string[];
}

export const services: Service[] = [
  {
    id: 'adults',
    titleKey: 'services.adults.title',
    descriptionKey: 'services.adults.description',
    icon: 'material-symbols:person',
    variant: 'white',
    items: [
      'services.adults.items.0',
      'services.adults.items.1',
      'services.adults.items.2',
      'services.adults.items.3',
      'services.adults.items.4',
      'services.adults.items.5',
      'services.adults.items.6',
      'services.adults.items.7',
      'services.adults.items.8',
      'services.adults.items.9',
    ],
  },
  {
    id: 'children',
    titleKey: 'services.children.title',
    descriptionKey: 'services.children.description',
    icon: 'material-symbols:child-care',
    variant: 'secondary',
    items: [
      'services.children.items.0',
      'services.children.items.1',
      'services.children.items.2',
      'services.children.items.3',
      'services.children.items.4',
      'services.children.items.5',
      'services.children.items.6',
      'services.children.items.7',
      'services.children.items.8',
      'services.children.items.9',
      'services.children.items.10',
    ],
  },
  {
    id: 'reeducation',
    titleKey: 'services.reeducation.title',
    descriptionKey: 'services.reeducation.description',
    icon: 'material-symbols:edit-note',
    variant: 'tertiary',
    items: [
      'services.reeducation.items.0',
      'services.reeducation.items.1',
      'services.reeducation.items.2',
      'services.reeducation.items.3',
      'services.reeducation.items.4',
      'services.reeducation.items.5',
    ],
  },
];
