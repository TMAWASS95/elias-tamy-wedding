export const wedding = {
  groom: "Elias",
  bride: "Tamy",
  date: "2026-08-22T18:30:00",
  dateDisplay: { day: "22", month: "August", year: "2026", weekday: "Saturday" },
  venue: "Alyasa Village",
  ceremonyTime: "6:30 PM",
  timeline: [
    { icon: "🌅", event: "Ceremony (golden hour entry)", time: "6:30 PM" },
    { icon: "🍽️", event: "Reception seating",           time: "8:15 PM" },
  ],
  mapUrl: "https://maps.google.com/?q=5Q5P%2B3M+Saqi+Rechmaiya",
  giftRegistry: {
    id: "*******-03",
  },
};

export type WeddingEvent = {
  id: string;
  title: string;
  name: string;
  address: string | null;
  time: string | null;
  mapUrl: string | null;
  icon: string;
};

export const weddingEvents: WeddingEvent[] = [
  {
    id: "home",
    title: "At My House",
    name: "Our Home",
    address: null,
    time: null,
    mapUrl: null,
    icon: "home",
  },
  {
    id: "ceremony",
    title: "Ceremony",
    name: "Alyasa Village",
    address: "Saqi, Rechmaiya",
    time: "6:30 PM",
    mapUrl: "https://maps.google.com/?q=5Q5P%2B3M+Saqi+Rechmaiya",
    icon: "church",
  },
  {
    id: "welcomeDrink",
    title: "Welcome Drink",
    name: "Alyasa Village",
    address: "Saqi, Rechmaiya",
    time: "7:30 PM",
    mapUrl: "https://maps.google.com/?q=5Q5P%2B3M+Saqi+Rechmaiya",
    icon: "drink",
  },
  {
    id: "dinner",
    title: "Dinner",
    name: "Alyasa Village",
    address: "Saqi, Rechmaiya",
    time: "8:30 PM",
    mapUrl: "https://maps.google.com/?q=5Q5P%2B3M+Saqi+Rechmaiya",
    icon: "dinner",
  },
];

export type GuestEntry = {
  slug: string;      // URL segment, e.g. "john-doe"  → /john-doe
  name: string;      // pre-filled in the RSVP form
  maxGuests: number; // max additional guests this person may bring
};

export const guests: GuestEntry[] = [
  { slug: "georges",   name: "Georges",   maxGuests: 2 },
  { slug: "christine", name: "Christine", maxGuests: 2 },
  { slug: "rouba",     name: "Rouba",     maxGuests: 8 },
  // Unlimited additional guests
  { slug: "charles-antoinette-nasrany", name: "Charles & Antoinette Nasrany", maxGuests: 999 },
  { slug: "nicolas-christelle-anaissy", name: "Nicolas & Christelle Anaissy", maxGuests: 999 },
  { slug: "tony-marleine-nasrany", name: "Tony & Marleine Nasrany", maxGuests: 999 },
  { slug: "georges-rebecca", name: "Georges & Rebecca", maxGuests: 2 },
  { slug: "freddy-perla", name: "Freddy & Perla", maxGuests: 2 },
  { slug: "rony-jessy", name: "Rony & Jessy", maxGuests: 4 },
  { slug: "joseph-jihane", name: "Joseph & Jihane", maxGuests: 4 },
  { slug: "jack-therese", name: "Jack & Therese", maxGuests: 2 },
  { slug: "joe-cendrella-chdid", name: "Joe & Cendrella Chdid", maxGuests: 3 },
  { slug: "roy-stephanie", name: "Roy & Stephanie", maxGuests: 3 },
  { slug: "samira-anaissy", name: "Samira Anaissy", maxGuests: 1 },
  { slug: "nizar-anna", name: "Nizar & Anna", maxGuests: 2 },
  { slug: "fady-rida-bou-saad", name: "Fady & Rida Bou Saad", maxGuests: 4 },
  { slug: "brandan-nabhan", name: "Brandan & Antonella", maxGuests: 1 },
  { slug: "elias-maria-hachem", name: "Elias & Maria Hachem", maxGuests: 2 },
  { slug: "elie-nadine-bou-saad", name: "Elie & Nadine Bou Saad", maxGuests: 2 },
  { slug: "charbel-joelle-bou-saad", name: "Charbel & Joelle Bou Saad", maxGuests: 4 },
  { slug: "raymond-manale", name: "Raymond & Manale", maxGuests: 4 },
  { slug: "boutros-rosette", name: "Boutros & Rosette", maxGuests: 3 },
  { slug: "michael-joelle-nassrany", name: "Michael & Joelle Nassrany", maxGuests: 4 },
  { slug: "georges-lamia-nassrany", name: "Georges & Lamia Nassrany", maxGuests: 4 },
  { slug: "elias-cynthia-nassrany", name: "Elias & Cynthia Nassrany", maxGuests: 2 },
  { slug: "charbel-elham-nassrany", name: "Charbel & Elham Nassrany", maxGuests: 6 },
  { slug: "rita-nasrany", name: "Rita Nasrany", maxGuests: 2 },
  { slug: "kamal-adabachi", name: "Kamal Adabachi", maxGuests: 1 },
  { slug: "charbel-merhi", name: "Charbel Merhi", maxGuests: 1 },
  { slug: "marie-hussein", name: "Marie Hussein", maxGuests: 1 },
  { slug: "thomas-abboud", name: "Thomas Abboud", maxGuests: 1 },
  { slug: "nicole-shasheen", name: "Nicole Shasheen", maxGuests: 1 },
  { slug: "jawad-syrine", name: "Jawad & Syrine", maxGuests: 2 },
  { slug: "ahmad-maha", name: "Ahmad Sibai & Maha Abou Jaoude", maxGuests: 2 },
  { slug: "gilbert-abi-rizk", name: "Gilbert Abi Rizk", maxGuests: 1 },
  { slug: "jad-louloua", name: "Jad Saoudi & Louloua Salhab", maxGuests: 2 },
  { slug: "charbel-karam", name: "Charbel Karam", maxGuests: 0 },
  { slug: "paul-farah", name: "Paul Farah", maxGuests: 0 },
  { slug: "peter-chantale-nohra", name: "Peter & Chantale Nohra", maxGuests: 4 },
  { slug: "ali-hammoud", name: "Ali Hammoud", maxGuests: 1 },
  { slug: "roudy-al-chammas", name: "Roudy Al Chammas", maxGuests: 2 },
  { slug: "joseph-sylvana-kesserwani", name: "Joseph & Sylvana Kesserwani", maxGuests: 2 },
  { slug: "jad-al-mir", name: "Jad Al Mir", maxGuests: 1 },
  { slug: "alain-khoury", name: "Alain Khoury", maxGuests: 2 },
  { slug: "elias-hnein", name: "Elias Hnein", maxGuests: 2 },
  { slug: "nadim-seif", name: "Nadim Seif", maxGuests: 2 },
  { slug: "elias-marise-abi-ghanem", name: "Elias & Marise Abi Ghanem", maxGuests: 2 },
  { slug: "jean-claude-reina-takchi", name: "Jean Claude & Reina Takchi", maxGuests: 2 },
  { slug: "elie-eliane-mansourati", name: "Elie & Eliane Mansourati", maxGuests: 2 }, 

 




 { slug: "georges-joulia-mawass", name: "Georges & Joulia Mawass", maxGuests: 999 },
 { slug: "charbel-remy-ferik", name: "Charbel & Remy Ferik", maxGuests: 2 },
 { slug: "rizk-andrea-mawass", name: "Rizk & Andrea Mawass", maxGuests: 999 },
 { slug: "kayssar-addam", name: "Kayssar & Addam", maxGuests: 2 },
 { slug: "eddy-elida-daou", name: "Eddy & Elida Daou", maxGuests: 999 },
 { slug: "raymond-mireille-daou", name: "Raymond & Mireille Daou", maxGuests: 2 },
 { slug: "Wissam-ramona-", name: "Wissam & Ramona ", maxGuests: 2 },
 { slug: "pierre-katia-azzi", name: "Pierre & Katia Azzi", maxGuests: 3 },
 { slug: "samira-assaf", name: "Samira Assaf", maxGuests: 3 },
 { slug: "saiid-camelia-khoury", name: "Saiid & Camelia Khoury", maxGuests: 5 },
 { slug: "karl-elhaj-assaf", name: "Karl el Haj Assaf", maxGuests: 1 },
 { slug: "elie-rita-khoury", name: "Elie & Rita Khoury", maxGuests: 3 },
 { slug: "bernard-patricia-maroun", name: "Bernard & Patricia Maroun", maxGuests: 4 },
 { slug: "robert-roula-abboud", name: "Robert & Roula Abboud", maxGuests: 4 },
 { slug: "elie-nawal-chammas", name: "Elie & Nawal Chammas", maxGuests: 4 },
 { slug: "jihad-najibe-mawass", name: "Jihad & Najibe Mawass", maxGuests: 6 },
 { slug: "asaad-georgette-azar", name: "Asaad & Georgette Azar", maxGuests: 3 },
 { slug: "mario-abla-azar", name: "Mario & Abla Azar", maxGuests: 2 },
 { slug: "monif-eliane-azar", name: "Monif & Eliane Azar", maxGuests: 3 },
 { slug: "donara-andourian", name: "Donara Andourian", maxGuests: 1 },
 { slug: "georges-vanessa-kassis", name: "Georges & Vanessa Kassis", maxGuests: 2 },
 { slug: "fady-jessica-gemayel", name: "Fady & Jessica Gemayel", maxGuests: 2 },
 { slug: "serena-khairallah", name: "Serena Khayrallah", maxGuests: 1 },
 { slug: "elie-melissa-chihane", name: "Elie & Melissa Chihane", maxGuests: 2 },
 { slug: "charbel-rita-tohme", name: "Charbel & Rita Thome", maxGuests: 2 },
 { slug: "wissam-haddad", name: "Wissam Haddad", maxGuests: 2 },
 { slug: "nadim-tawk", name: "Nadim Tawk", maxGuests: 2 },
 { slug: "jacques-boulos", name: "Jack Boulos", maxGuests: 1 },
 { slug: "mazen-joy-ghazal", name: "Mazen & Joy Ghazal", maxGuests: 2 },
 { slug: "elika-chalhoub", name: "Elika Chalhoub", maxGuests: 1 },
 { slug: "elie-grace-attalah", name: "Elie & Grace Attalah", maxGuests: 2 },
 { slug: "elie-sandy-ghanem", name: "Elie & Sandy Ghanem", maxGuests: 2 },
 { slug: "rouba-rhayem", name: "Rouba Rhayem", maxGuests: 2 },
 { slug: "dory-marielle-obeidy", name: "Dory & Marielle Obeidy", maxGuests: 2 },
 { slug: "izzat-riham-alaaeddine", name: "Izzat & Riham Alaaeddine", maxGuests: 2 },
 { slug: "bechara-christelle-assaf", name: "Bechara & Christelle Assaf", maxGuests: 2 },
 { slug: "anthony-valeria-harfouche", name: "Anthony & Valeria Harfouche", maxGuests: 2 },
 { slug: "salim-christine-youness", name: "Salim & Christine Youness", maxGuests: 2 },
 { slug: "chady-patricia-nassif", name: "Chady & Patricia Nassif", maxGuests: 4 },
 { slug: "carole-fares", name: "Carole Fares", maxGuests: 1 },
 { slug: "georges-micha-fares", name: "Georges & Micha Fares", maxGuests: 2 },


];


export type RSVPRow = {
  id: string;
  name: string;
  attending: boolean;
  guests: number;
  phone: string | null;
  message: string | null;
  created_at: string;
};

export type RSVPFormData = {
  name: string;
  attending: "yes" | "no";
  guests: number;
  phone?: string;
  message?: string;
};
