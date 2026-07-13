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
    note: "Your presence is the greatest gift of all. Should you wish to honour us with a gift, you can send it to our Whish account below.",
    accountLabel: "Whish Account",
    accountHolder: "Elias & Tamy",
    accountNumber: "20231829-03",
  },
};

export type EventParty = {
  label: string;          // e.g. "Groom" / "Bride"
  name: string;           // venue name
  sub: string | null;     // specific spot within the venue
  time: string | null;    // get-ready time
  mapUrl?: string | null; // directions link
};

export type WeddingEvent = {
  id: string;
  title: string;
  name: string;
  sub?: string | null;   // secondary line under the venue (e.g. church)
  address: string | null;
  time: string | null;
  mapUrl: string | null;
  icon: string;
  description?: string;
  parties?: EventParty[];
};

export const weddingEvents: WeddingEvent[] = [
  {
    id: "home",
    title: "Getting Ready",
    name: "Our Home",
    address: null,
    time: null,
    mapUrl: null,
    icon: "arch",
    description: "The groom and bride will each welcome guests at their place before the ceremony — feel free to join us early.",
    parties: [
      { label: "Groom welcomes you at", name: "Alyasa Village", sub: "The Villa", time: "from 4:30 PM", mapUrl: "https://maps.google.com/?q=5Q5P%2B3M+Saqi+Rechmaiya" },
      { label: "Bride welcomes you at", name: "Alyasa Village", sub: "The Idle Lounge", time: "from 4:30 PM", mapUrl: "https://maps.google.com/?q=5Q5P%2B3M+Saqi+Rechmaiya" },
    ],
  },
  {
    id: "ceremony",
    title: "Ceremony",
    name: "Alyasa Village",
    sub: "Saint Licha Church",
    address: null,
    time: "6:30 PM",
    mapUrl: "https://maps.google.com/?q=5Q5P%2B5W9+Saqi+Rechmaiya",
    icon: "arch",
  },
  {
    id: "dinner",
    title: "Dinner Reception",
    sub: "The Arcadia Venue",
    name: "Alyasa Village",
    address: null,
    time: "8:30 PM",
    mapUrl: "https://maps.google.com/?q=5Q5P%2B3M+Saqi+Rechmaiya",
    icon: "arch",
  },
];

export type GuestEntry = {
  slug: string;              // URL segment, e.g. "john-doe"  → /john-doe
  name: string;              // pre-filled in the RSVP form
  maxGuests: number;         // max attendies guests this person may bring
  title?: "Mr" | "Mrs";      // honorific shown before the name
  withFamily?: boolean;      // append "& his/her family"
  lang?: "en" | "ar";        // default language shown when this guest opens their link
};

// First names used to infer Mr/Mrs for single-name guests.
// Override per guest with the `title` field if any of these is wrong.
const MALE_FIRST_NAMES = new Set([
  "georges", "elias", "elie", "charbel", "kamal", "thomas", "gilbert", "paul",
  "ali", "roudy", "jad", "alain", "nadim", "karl", "wissam", "jack", "jacques", "mahmoud", "roger", "roland", "salim"
]);
const FEMALE_FIRST_NAMES = new Set([
  "christine", "rouba", "samira", "rita", "marie", "donara", "serena",
  "elika", "carole","Rayan", "Rose"
]);

function inferTitle(name: string): "Mr" | "Mrs" | undefined {
  const first = name.trim().split(/\s+/)[0].toLowerCase();
  if (MALE_FIRST_NAMES.has(first)) return "Mr";
  if (FEMALE_FIRST_NAMES.has(first)) return "Mrs";
  return undefined;
}

/**
 * Builds the display name. Couples get a title each, e.g.
 * "Mr. Elie and Mrs. Nawal Chammas"; entries bringing more than two
 * guests are suffixed with "and Family".
 */
export function formatGuestName(g: GuestEntry): string {
  const hasFamily = g.withFamily ?? g.maxGuests > 2;
  const family = hasFamily ? " and Family" : "";

  // Couples: the man and the woman each get their own title.
  // Defaults to Mr. for the first name and Mrs. for the second; the
  // name lists above override this when the order differs.
  if (g.name.includes("&")) {
    const [a, b] = g.name.split("&").map((s) => s.trim());
    const titleA = inferTitle(a) ?? "Mr";
    const titleB = inferTitle(b) ?? "Mrs";
    return `${titleA}. ${a} and ${titleB}. ${b}${family}`;
  }

  const t = g.title ?? inferTitle(g.name);
  const title = t ? `${t}. ` : "";
  return `${title}${g.name}${family}`;
}

export const guests: GuestEntry[] = [
  // Unlimited Attendies guests
  { slug: "charles-antoinette-nasrany", name: "Charles & Antoinette Nasrany", maxGuests: 2, lang: "ar" },
  { slug: "nicolas-christelle-anaissy", name: "Nicolas & Christelle Anaissy", maxGuests: 4, lang: "en" },
  { slug: "tony-marleine-nasrany", name: "Tony & Marleine Nasrany", maxGuests: 2, lang: "ar" },
  { slug: "rony-jessica-nasrany", name: "Rony & Jessica Nasrany", maxGuests: 4,lang:"en" },
  { slug: "joseph-jihane-nasrany", name: "Joseph & Jihane Nasrany", maxGuests: 4, lang:"en" },
  { slug: "jacques-therese-nasrany", name: "Jacques & Therese Nasrany", maxGuests: 2, lang:"ar" },
  { slug: "joe-cendrella-chdid", name: "Joe & Cendrella Chdid", maxGuests: 3, lang:"en" },
  { slug: "roy-stephanie-warcha", name: "Roy & Stephanie Warcha", maxGuests: 3, lang:"en" },
  { slug: "samira-anaissy", name: "Samira Anaissy", maxGuests: 1, lang:"ar"},
  { slug: "nizar-anna-khaleed", name: "Nizar & Anna Khaleed", maxGuests: 2, lang:"en" },
  { slug: "fady-rida-bou-saad", name: "Fady & Rida Bou Saad", maxGuests: 4, lang:"en" },
  { slug: "elias-maria-abi-hachem", name: "Elias Abi Hachem & Maria Bou Saad", maxGuests: 2, lang:"en" },
  { slug: "elie-nadine-bou-saad", name: "Elie & Nadine Bou Saad", maxGuests: 2, lang:"en" },
  { slug: "charbel-joelle-bou-saad", name: "Charbel & Joelle Bou Saad", maxGuests: 4, lang:"en" },
  { slug: "raymond-manale-bou-chaaya", name: "Raymond & Manale Bou Chaaya", maxGuests: 4, lang:"en" },
  { slug: "boutros-rosette-nasrany", name: "Boutros & Rosette Nasrany", maxGuests: 3, lang:"ar" },
  { slug: "michael-joelle-nasrany", name: "Michael & Joelle Nasrany", maxGuests: 2 , lang:"en"},
  { slug: "georges-lamia-nasrany", name: "Georges & Lamia Nasrany", maxGuests: 2, lang:"ar" },
  { slug: "elias-cynthia-nasrany", name: "Elias & Cynthia Nasrany", maxGuests: 2, lang:"en" },
  { slug: "charbel-elham-nasrany", name: "Charbel & Elham Nasrany", maxGuests: 2, lang:"ar" },
  { slug: "rita-nasrany", name: "Rita Nasrany", maxGuests: 2, lang:"en" },
  { slug: "kamal-adabachi", name: "Kamal Adabachi", maxGuests: 1, lang:"en" },
  { slug: "charbel-merhi", name: "Charbel Merhi", maxGuests: 1, lang:"en" },
  { slug: "marie-husseini", name: "Marie Husseini", maxGuests: 1, lang:"en" },
  { slug: "thomas-abboud", name: "Thomas Abboud", maxGuests: 1, lang:"en" },
  { slug: "jawad-sirine", name: "Jawad Bou Youness & Sirine Wahidi", maxGuests: 2, lang:"en" },
  { slug: "ahmad-maha", name: "Ahmad Sibai & Maha Abou Jaoude", maxGuests: 2, lang:"en" },
  { slug: "gilbert-abi-rizk", name: "Gilbert Abi Rizk", maxGuests: 1, lang:"en" },
  { slug: "jad-louloua", name: "Jad Saoudi & Louloua Salhab", maxGuests: 2, lang:"en" },
  { slug: "charbel-catherine-karam", name: "Charbel Karam & Catherine El Tannoury", maxGuests: 2, lang:"en" },
  { slug: "paul-farah", name: "Paul Farah", maxGuests: 1, lang:"en" },
  { slug: "peter-chantale-nohra", name: "Peter & Chantale Nohra", maxGuests: 2, lang:"en" },
  { slug: "ali-hammoud", name: "Ali Hammoud", maxGuests: 1, lang:"en" },
  { slug: "roudy-al-chammas", name: "Roudy Al Chammas & Reem Riachy", maxGuests: 2, lang:"en" },
  { slug: "joseph-sylvana-kesserwani", name: "Joseph & Sylvana Kesserwani", maxGuests: 2, lang:"en" },
  { slug: "jad-el-mir", name: "Jad El Mir", maxGuests: 1, lang:"en" },
  { slug: "nadim-seif", name: "Nadim Seif", maxGuests: 2, lang:"en" },
  { slug: "elias-marise-abi-ghanem", name: "Elias & Marise Abi Ghanem", maxGuests: 2, lang:"en" },
  { slug: "jean-claude-reina-takchi", name: "Jean Claude & Reina Takchi", maxGuests: 2, lang:"en" },
  { slug: "elie-eliane-mansourati", name: "Elie & Eliane Mansourati", maxGuests: 2, lang:"en" }, 
  { slug: "elie-elene-bou-saad", name: "Elie & Elene Bou Saad", maxGuests: 2, lang:"en" },
  { slug: "jacques-nasrany", name: "Jacques Nasrany", maxGuests: 1, lang:"en" },
  { slug: "charbel-nasrany", name: "Charbel Nasrany", maxGuests: 1, lang:"en" },
  { slug: "roland-abi-saad", name: "Roland Abi Saad", maxGuests: 1, title:"Mr", lang: "en" },
  { slug: "rose-abi-saad", name: "Rose Abi Saad", maxGuests: 1,title:"Mrs" , lang: "ar" },
  { slug: "georges-rebecca", name: "Georges Nasrany & Rebecca Daou", maxGuests: 2, lang:"en" },
  { slug: "freddy-perla", name: "Freddy Nasrany & Perla Jabbour", maxGuests: 2, lang:"en" },
  { slug: "youssef-nouhad-nasrany", name: "Youssef & Nouhad Nasrany", maxGuests: 2, lang:"ar" },
  { slug: "fouad-ivette-bou-saad", name: "Fouad & Ivette Bou Saad", maxGuests: 2, lang:"ar" },
  { slug: "roger-nasrany", name: "Roger Nasrany", maxGuests: 2, title: "Mr", lang:"ar" },
  { slug: "mahmoud-chehabeddine", name: "Mahmoud Chehabeddine", maxGuests: 1, title: "Mr", lang:"en" },
  { slug: "jad-harfouche", name: "Jad Harfouche", maxGuests: 1, lang:"en" },
  { slug: "ali-hajj-hassan", name: "Ali Hajj Hassan", maxGuests: 1, lang:"en" },
  { slug: "joya-maria-mitri", name: "Joya Maria Mitri", maxGuests: 1, title: "Mrs", lang:"en" },
  { slug: "karim-abou-chakra", name: "Karim Abou Chakra", maxGuests: 1, title: "Mr", lang:"en" },
  { slug: "tony-darine-khoury", name: "Tony & Darine Khoury", maxGuests: 2, lang:"ar" },
  { slug: "wassim-rania-khalil", name: "Wassim & Rania Khalil", maxGuests: 2, lang:"ar" },
  { slug: "bassam-liliane-matar", name: "Bassam & Liliane Matar", maxGuests: 2, lang:"ar" },
  { slug: "afif-jamale-bou-saad", name: "Afif & Jamale Bou Saad", maxGuests: 2, lang:"ar" },
  { slug: "georges-pauline-nasrany", name: "Georges & Pauline Nasrany", maxGuests: 2, lang:"en" },

 




 { slug: "georges-joulia-mawass", name: "Georges & Joulia Mawass", maxGuests: 3, lang:"ar" },
 { slug: "salim-mawass", name: "Salim Mawass", maxGuests: 1, lang: "en" },
 { slug: "charbel-remy-ferik", name: "Charbel & Remy Ferik", maxGuests: 2, lang:"en" },
 { slug: "rizk-andrea-mawass", name: "Rizk & Andrea Mawass", maxGuests: 4, lang:"en" },
 { slug: "kayssar-rita-addam", name: "Kayssar & Rita Addam", maxGuests: 2, lang:"ar" },
 { slug: "eddy-elida-daou", name: "Eddy & Elida Daou", maxGuests: 2, lang:"en" },
 { slug: "raymond-mireille-daou", name: "Raymond & Mireille Daou", maxGuests: 2,lang:"en" },
 { slug: "pierre-katia-azzi", name: "Pierre & Katia Azzi", maxGuests: 3, lang:"ar" },
 { slug: "samira-assaf", name: "Samira Assaf", maxGuests: 3, lang:"ar" },
 { slug: "saiid-camelia-khoury", name: "Saiid & Camelia Khoury", maxGuests: 5, lang:"ar" },
 { slug: "karl-pamela-elhaj-assaf", name: "Karl el Haj Assaf & Pamela Koury", maxGuests: 2, lang:"en" },
 { slug: "elie-rita-khoury", name: "Elie & Rita Khoury", maxGuests: 3, lang:"en" },
 { slug: "bernard-patricia-maroun", name: "Bernard & Patricia Maroun", maxGuests: 4, lang:"en" },
 { slug: "robert-roula-abboud", name: "Robert & Roula Abboud", maxGuests: 4, lang:"ar" },
 { slug: "francois-amale-abboud", name: "Francois & Amale Abboud", maxGuests: 2, lang:"ar" },
 { slug: "elie-nawal-chammas", name: "Elie & Nawal Chammas", maxGuests: 4, lang:"en" },
 { slug: "jihad-najibe-mawass", name: "Jihad & Najibe Mawass", maxGuests: 6,lang:"ar" },
 { slug: "asaad-georgette-azar", name: "Asaad & Georgette Azar", maxGuests: 3, lang:"ar" },
 { slug: "mario-abla-azar", name: "Mario Azar & Abla Hanna", maxGuests: 2, lang:"ar" },
 { slug: "monif-eliane-azar", name: "Monif & Eliane Azar", maxGuests: 3, lang:"ar" },
 { slug: "donara-andourian", name: "Donara Andourian", maxGuests: 2, lang:"en" },
 { slug: "georges-vanessa-kassis", name: "Georges & Vanessa Kassis", maxGuests: 2, lang:"en" },
 { slug: "fady-jessica-gemayel", name: "Fady & Jessica Gemayel", maxGuests: 2, lang:"en" },
 { slug: "serena-khairallah", name: "Serena Khayrallah", maxGuests: 2, lang:"en" },
 { slug: "elie-melissa-chihane", name: "Elie & Melissa Chihane", maxGuests: 2, lang:"en" },
 { slug: "charbel-rita-tohme", name: "Charbel & Rita Thome", maxGuests: 2, lang:"en" },
 { slug: "wissam-haddad", name: "Wissam Haddad", maxGuests: 2, lang:"en" },
 { slug: "nadim-tawk", name: "Nadim Tawk", maxGuests: 2, lang:"en" },
 { slug: "jack-boulos", name: "Jack Boulos", maxGuests: 1, lang:"en" },
 { slug: "mazen-joy-ghazal", name: "Mazen & Joy Ghazal", maxGuests: 2, lang:"en" },
 { slug: "elika-chalhoub", name: "Elika Chalhoub", maxGuests: 1, lang:"en" },
 { slug: "elie-grace-attalah", name: "Elie & Grace Attalah", maxGuests: 2, lang:"en" },
 { slug: "elie-sandy-ghanem", name: "Elie & Sandy Ghanem", maxGuests: 2, lang:"en" },
 { slug: "nicolas-rouba-attieh", name: "Nicolas Attieh & Rouba Rhayem", maxGuests: 2, lang:"en" },
 { slug: "dory-marielle-obeidy", name: "Dory & Marielle Obeidy", maxGuests: 2, lang:"en" },
 { slug: "izzat-riham-alaaeddine", name: "Izzat & Riham Alaaeddine", maxGuests: 2, lang:"en" },
 { slug: "bechara-christelle-assaf", name: "Bechara & Christelle Assaf", maxGuests: 2, lang:"en" },
 { slug: "anthony-valeria-harfouche", name: "Anthony & Valeria Harfouche", maxGuests: 2, lang:"en" },
 { slug: "salim-christine-youness", name: "Salim & Christine Youness", maxGuests: 2, lang:"en" },
 { slug: "chady-patricia-nassif", name: "Chady & Patricia Nassif", maxGuests: 2, lang:"en" },
 { slug: "carole-fares", name: "Carole Fares", maxGuests: 1, lang:"en" },
 { slug: "georges-micha-fares", name: "Georges & Micha Fares", maxGuests: 2, lang:"en" },
 { slug: "kamal-chhimi", name: "Kamal Chhimi", maxGuests: 1, lang:"en" },
 { slug: "rayan-rayeh", name: "Rayan Rayeh", maxGuests: 1, title:"Mrs", lang:"en" },
 { slug: "hayat-borji", name: "Hayat Borji", maxGuests: 1, title:"Mrs", lang:"en" },
 { slug: "silvana-chahine", name: "Silvana Chahine", maxGuests: 1, title:"Mrs", lang:"en" },
 { slug: "yaacoub-amale-ferik", name: "Yaacoub & Amale Ferik", maxGuests: 2, lang: "ar" },
 { slug: "wissam-ramona-dibra", name: "Wissam & Ramona Dibra", maxGuests: 2, lang: "en" },
 { slug: "nicolas-amoula-abboud", name: "Nicolas & Amoula Abboud", maxGuests: 2, lang: "ar" },
 { slug: "nicolas-abboud", name: "Nicolas Abboud", maxGuests: 2, lang: "ar" },
 { slug: "rania-ferik", name: "Rania Ferik", maxGuests: 1, lang: "en" },
 { slug: "elias-ferik", name: "Elias Ferik", maxGuests: 1, lang: "en" },





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
