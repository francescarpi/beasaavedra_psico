export interface Center {
  /** i18n key for the center name */
  nameKey: string;
  address: string;
  /** Raw phone number used for tel: href */
  phone: string;
  /** Formatted display string */
  phoneDisplay: string;
}

export const centers: Center[] = [
  {
    nameKey: 'centers.0.name',
    address: 'Carrer de Balmes, 120, 08008 Barcelona',
    phone: '+34931234567',
    phoneDisplay: '+34 931 234 567',
  },
  {
    nameKey: 'centers.1.name',
    address: "Carrer d'Anselm Clavé, 45, 08401 Granollers",
    phone: '+34938456789',
    phoneDisplay: '+34 938 456 789',
  },
  {
    nameKey: 'centers.2.name',
    address: "Carrer d'Aragó, 250, 08007 Barcelona",
    phone: '+34932123456',
    phoneDisplay: '+34 932 123 456',
  },
  {
    nameKey: 'centers.3.name',
    address: 'Rambla de Sabadell, 12, 08201 Sabadell',
    phone: '+34937234567',
    phoneDisplay: '+34 937 234 567',
  },
  {
    nameKey: 'centers.4.name',
    address: 'Carrer de la Riera, 88, 08301 Mataró',
    phone: '+34936345678',
    phoneDisplay: '+34 936 345 678',
  },
  {
    nameKey: 'centers.5.name',
    address: 'Carrer de Santiago Rusiñol, 15, 08172 Sant Cugat',
    phone: '+34935456789',
    phoneDisplay: '+34 935 456 789',
  },
];
