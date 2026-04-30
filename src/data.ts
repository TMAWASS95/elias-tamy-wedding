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
  locations: [
    {
      id: "reception",
      name: "Alyasa Village",
      address: "Saqi, Rechmaiya" as string | null,
      time: "6:30 PM" as string | null,
      mapUrl: "https://maps.google.com/?q=5Q5P%2B3M+Saqi+Rechmaiya",
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
