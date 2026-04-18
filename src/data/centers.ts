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
    name: "Gabimedi Blanes",
    address: "Carrer ses Falques, 7a (Blanes)",
    phone: "972010128",
    phoneDisplay: "972 01 01 28",
  },
  {
    name: "Gabimedi Tordera",
    address: "Carrer Amadeu Vives, 25 (Tordera)",
    phone: "937643050",
    phoneDisplay: "937 64 30 50",
  },
  {
    name: "Gabimedi Rieral",
    address: "Carrer Masia del Roser, 12 (Lloret de Mar)",
    phone: "972377000",
    phoneDisplay: "972 37 70 00",
  },
  {
    name: "Centre Mèdic I Psicològic Guiomar",
    address: "Carrer Ramon Turró, 9, Local 2 (Palafolls)",
    phone: "931888972",
    phoneDisplay: "931 88 89 72",
  },
  {
    name: "IntegraMent Psicologia",
    address: "Plaça Espanya, 5 (Blanes)",
    phone: "614933934",
    phoneDisplay: "614 93 39 34",
  },
  {
    name: "Despatx Privat",
    address: "Carrer de Sant Tomàs, 7 (Lloret de Mar)",
    phone: "618441587",
    phoneDisplay: "618 441 587",
  },
];
