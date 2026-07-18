import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { WeddingEvent } from "./data";

export type Lang = "en" | "ar";

/* ------------------------------------------------------------------ */
/* UI strings                                                          */
/* ------------------------------------------------------------------ */

type Dict = Record<string, string>;

const en: Dict = {
  // Cover / invitation
  "cover.quote": '"So they are no longer two,\nbut one flesh."',
  "cover.quoteRef": "— Matthew 19:6",
  "cover.intro1": "It is with the greatest pleasure that the",
  "cover.family1": "Charles  & Antoinette Nasrany Family",
  "cover.family2": "Georges & Joulia Mawass Family",
  "cover.intro2": "cordially invite you to celebrate\nthe wedding of",

  // Couple names (localized display)
  "couple.groom": "Elias",
  "couple.bride": "Tamy",
  "couple.and": "&",

  // Common
  "common.getDirections": "Get Directions",

  // Countdown
  "countdown.title": "Counting Down",
  "countdown.days": "Days",
  "countdown.hours": "Hours",
  "countdown.minutes": "Minutes",
  "countdown.seconds": "Seconds",

  // Gift registry
  "gift.title": "Gift Registry",
  "gift.note":
    "Your presence is the greatest gift of all. Should you wish to honour us with a gift, you can send it to our Whish account below.",
  "gift.accountLabel": "Whish Account",
  "gift.accountHolder": "Elias & Tamy",
  "gift.accountNumberLabel": "Account Number",
  "gift.copy": "Copy",
  "gift.copied": "Copied",

  // RSVP
  "rsvp.title": "RSVP",
  "rsvp.deadlineLabel": "Please reply by",
  "rsvp.date": "August 10, 2026",
  "rsvp.yourName": "Your Name",
  "rsvp.fullName": "Full name",
  "rsvp.willAttend": "Will you attend?",
  "rsvp.accepts": "Joyfully accepts",
  "rsvp.declines": "Regretfully declines",
  "rsvp.attending": "Attending",
  "rsvp.maxNote": "This invitation is reserved for up to {n} guest(s).",
  "rsvp.confirmNote": "Kindly confirm your presence by clicking the button below.",
  "rsvp.confirm": "Confirm RSVP",
  "rsvp.confirmDecline": "Send Response",
  "rsvp.orSend": "Or send your response to one of the numbers below.",
  "rsvp.groom": "Groom",
  "rsvp.bride": "Bride",
  "rsvp.loading": "Loading…",
  "rsvp.thanksExisting": "Thank you! Your RSVP is already recorded.",
  "rsvp.thanksNew": "Thank you! We can't wait to celebrate with you.",
  "rsvp.errorNoDb": "RSVP saving is not set up yet. Please contact the couple.",
  "rsvp.errorGeneric": "Something went wrong. Please try again.",
  "rsvp.errorNoGuests": "Please add at least one guest to confirm.",

  // Language toggle (label shows the language you switch TO)
  "lang.switch": "ع",
};

const ar: Dict = {
  // Cover / invitation
  "cover.quote": "«فَلَيْسَا بَعْدُ اثْنَيْنِ\nبَلْ جَسَدٌ وَاحِدٌ»",
  "cover.quoteRef": "— متّى ١٩:٦",
  "cover.intro1": "بكل فرحٍ وسرور تتشرّف",
  "cover.family1": "شارل وأنطوانيت نصراني",
  "cover.family2": "جورج وجوليا المواس",
  "cover.intro2": "بدعوتكم لحضور حفل زفاف",

  // Couple names (localized display)
  "couple.groom": "إلياس",
  "couple.bride": "تامي",
  "couple.and": "و",

  // Common
  "common.getDirections": "الإتجاهات",

  // Countdown
  "countdown.title": "العدّ التنازلي",
  "countdown.days": "أيام",
  "countdown.hours": "ساعات",
  "countdown.minutes": "دقائق",
  "countdown.seconds": "ثوانٍ",

  // Gift registry
  "gift.title": "الهدايا",
  "gift.note":
    "حضوركم هو أغلى هدية. وإن رغبتم بإكرامنا بهدية، يمكنكم إرسالها إلى حساب Whish أدناه.",
  "gift.accountLabel": "حساب Whish",
  "gift.accountHolder": "إلياس و تامي",
  "gift.accountNumberLabel": "رقم الحساب",
  "gift.copy": "نسخ",
  "gift.copied": "تم النسخ",

  // RSVP
  "rsvp.title": "تأكيد الحضور",
  "rsvp.deadlineLabel": "الرجاء الردّ قبل",
  "rsvp.date": "١٠ آب ٢٠٢٦",
  "rsvp.yourName": "اسمك",
  "rsvp.fullName": "الاسم الكامل",
  "rsvp.willAttend": "هل ستحضرون؟",
  "rsvp.accepts": "يسعدنا الحضور",
  "rsvp.declines": "نعتذر عن الحضور",
  "rsvp.attending": "عدد الحضور",
  "rsvp.maxNote": "هذه الدعوة مخصّصة لعدد {n} أشخاص.",
  "rsvp.confirmNote": "الرجاء تأكيد حضوركم بالضغط على الزر أدناه.",
  "rsvp.confirm": "تأكيد الحضور",
  "rsvp.confirmDecline": "إرسال الردّ",
  "rsvp.orSend": "أو أرسلوا ردّكم إلى أحد الأرقام أدناه.",
  "rsvp.groom": "العريس",
  "rsvp.bride": "العروس",
  "rsvp.loading": "جارٍ التحميل…",
  "rsvp.thanksExisting": "شكراً! تم تسجيل ردّكم مسبقاً.",
  "rsvp.thanksNew": "شكراً لكم! لا نطيق صبراً للاحتفال معكم.",
  "rsvp.errorNoDb": "خدمة التسجيل غير مفعّلة بعد. الرجاء التواصل مع العروسين.",
  "rsvp.errorGeneric": "حدث خطأٌ ما. الرجاء المحاولة مرة أخرى.",
  "rsvp.errorNoGuests": "الرجاء إضافة شخص واحد على الأقل لتأكيد الحضور.",

  // Language toggle
  "lang.switch": "EN",
};

const dictionaries: Record<Lang, Dict> = { en, ar };

/* ------------------------------------------------------------------ */
/* Event content (data.ts is the English source; Arabic overrides here) */
/* ------------------------------------------------------------------ */

type ArParty = { label?: string; name?: string; sub?: string | null; time?: string | null };
type ArEvent = {
  title?: string;
  description?: string;
  name?: string;
  sub?: string | null;
  time?: string | null;
  parties?: ArParty[];
};

const arEvents: Record<string, ArEvent> = {
  home: {
    title: "الاستعداد",
    description:
      "سيستقبل العريس والعروس ضيوفهما كلٌّ في مكانه قبل القداس — يسعدنا انضمامكم إلينا باكراً.",
    parties: [
      { label: "بيت العريس", name: "Alyasa village", sub: "The Villa", time: "من الساعة ٤:٣٠ مساءً" },
      { label: "بيت العروس", name: "Alyasa village", sub: "The Idle Lounge", time: "من الساعة ٤:٣٠ مساءً" },
    ],
  },
  ceremony: {
    title: "الإكليل",
    name: "Alyasa Village",
    sub: "كنيسة مار أليشاع",
    time: "٦:٣٠ مساءً",
  },
  dinner: {
    title: "حفل العشاء",
    name: "Alyasa Village",
    sub: "The Arcadia Venue ",
    time: "٨:٣٠ مساءً",
  },
};

export function localizeEvent(event: WeddingEvent, lang: Lang): WeddingEvent {
  if (lang === "en") return event;
  const tr = arEvents[event.id];
  if (!tr) return event;
  return {
    ...event,
    title: tr.title ?? event.title,
    description: tr.description ?? event.description,
    name: tr.name ?? event.name,
    sub: tr.sub ?? event.sub,
    time: tr.time ?? event.time,
    parties: event.parties?.map((p, i) => ({
      ...p,
      label: tr.parties?.[i]?.label ?? p.label,
      name: tr.parties?.[i]?.name ?? p.name,
      sub: tr.parties?.[i]?.sub ?? p.sub,
      time: tr.parties?.[i]?.time ?? p.time,
    })),
  };
}

/* ------------------------------------------------------------------ */
/* Context                                                             */
/* ------------------------------------------------------------------ */

interface LangContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "lang";

function readInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ar" || saved === "en") return saved;
  } catch { /* ignore */ }
  return "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* ignore */ }
  }, [lang, dir]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((l) => (l === "en" ? "ar" : "en"));
  const t = (key: string) => dictionaries[lang][key] ?? dictionaries.en[key] ?? key;

  return (
    <LangContext.Provider value={{ lang, dir, setLang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}
