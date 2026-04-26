export const wedding = {
  groom: "Elias",
  bride: "Tamy",
  date: "2026-08-22T18:30:00",
  dateDisplay: { day: "22", month: "August", year: "2026", weekday: "Saturday" },
  venue: "Alyasa Village",
  ceremonyTime: "6:30 PM",
  timeline: [
    { icon: "⛪", event: "Ceremony",       time: "6:30 PM"  },
    { icon: "🥂", event: "Welcome Drink",  time: "8:00 PM"  },
    { icon: "🍽️", event: "Dinner",         time: "9:00 PM"  },
    { icon: "🍸", event: "Cocktail Hour",  time: "10:00 PM" },
    { icon: "💃", event: "Dance Party",    time: "10:30 PM" },
  ],
  mapUrl: "https://maps.google.com/?q=Alyasa+Village+Lebanon",
  giftRegistry: {
    id: "*******-03",
  },
  locations: [
    {
      id: "bride",
      name: "Bride's House",
      address: null as string | null,
      time: null as string | null,
      mapUrl: "https://maps.google.com/?q=Bride+House+Lebanon",
    },
    {
      id: "groom",
      name: "Groom's House",
      address: null as string | null,
      time: null as string | null,
      mapUrl: "https://maps.google.com/?q=Groom+House+Lebanon",
    },
    {
      id: "church",
      name: "Saydet El Maounet Church",
      address: "Zouk Mikael" as string | null,
      time: "6:00 PM" as string | null,
      mapUrl: "https://maps.google.com/?q=Saydet+El+Maounet+Church+Zouk+Mikael+Lebanon",
    },
    {
      id: "reception",
      name: "Zone Restaurant",
      address: "Mar Roukoz - Dekweneh" as string | null,
      time: "6:00 PM" as string | null,
      mapUrl: "https://maps.google.com/?q=Zone+Restaurant+Mar+Roukoz+Dekweneh+Lebanon",
    },
  ],
};

export type GuestEntry = {
  slug: string;      // URL segment, e.g. "john-doe"  → /john-doe
  name: string;      // pre-filled in the RSVP form
  maxGuests: number; // max additional guests this person may bring
};

export const guests: GuestEntry[] = [
  { slug: "georges",   name: "Georges",   maxGuests: 2 },
  { slug: "christine", name: "Christine", maxGuests: 2 },
  { slug: "rouba",     name: "Rouba",     maxGuests: 8 },
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
