import { useLang } from "../i18n";

export default function LanguageToggle() {
  const { toggle, t, lang } = useLang();
  return (
    <button
      className="lang-toggle"
      onClick={toggle}
      aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      {t("lang.switch")}
    </button>
  );
}
