export interface Center {
  /** Center name (not translatable) */
  name: string;
  address: string;
  /** Raw phone number used for tel: href */
  phone: string;
  /** Formatted display string */
  phoneDisplay: string;
}

export const centers: Center[] = [
  {
    name: 'Gabimedi Blanes',
    address: 'Carrer ses Falques, 7a',
    phone: '972010128',
    phoneDisplay: '972 01 01 28',
  },
  {
    name: 'Gabimedi Tordera',
    address: "Carrer Amadeu Vives, 25",
    phone: '937643050',
    phoneDisplay: '937 64 30 50',
  },
  {
    name: 'Gabimedi Lloret',
    address: "Carrer Masia del Roser, 12",
    phone: '972377000',
    phoneDisplay: '972 37 70 00',
  },
  {
    name: 'Centre Medic I Psicologic Guiomar',
    address: 'Carrer Ramon Turró, 9, Local 2, 08389 Palafolls, Barcelona',
    phone: '931888972',
    phoneDisplay: '931 88 89 72',
  },
  {
    name: 'IntegraMent Psicologia',
    address: 'Plaça Espanya, 5, 17300 Blanes',
    phone: '614933934',
    phoneDisplay: '614 93 39 34',
  },
  {
    name: 'Despatxh Privat',
    address: 'Carrer de Sant Tomàs, 7, 17310 Lloret de Mar',
    phone: '618441587',
    phoneDisplay: '618 441 587',
  },
];
