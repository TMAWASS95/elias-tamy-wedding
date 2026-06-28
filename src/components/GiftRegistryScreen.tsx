import { useState } from "react";
import { wedding } from "../data";
import { useLang } from "../i18n";

interface GiftRegistryScreenProps {
  onContinue: () => void;
}

function GiftIcon() {
  return (
    <svg className="evt-icon-svg" viewBox="0 0 44 58" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="22" width="30" height="26" rx="1" />
      <line x1="5" y1="22" x2="39" y2="22" />
      <line x1="22" y1="22" x2="22" y2="48" />
      <path d="M22 22 C22 14 16 12 13 15 C10 18 14 22 22 22 Z" />
      <path d="M22 22 C22 14 28 12 31 15 C34 18 30 22 22 22 Z" />
    </svg>
  );
}

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const { t } = useLang();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch { /* clipboard unavailable */ }
  };

  return (
    <div className="gift-row">
      <div className="gift-row-details">
        <span className="gift-row-label">{label}</span>
        <span className="gift-row-value">{value}</span>
      </div>
      <button
        type="button"
        className="gift-copy-btn"
        onClick={copy}
        aria-label={`Copy ${label}`}
      >
        {copied ? t("gift.copied") : t("gift.copy")}
      </button>
    </div>
  );
}

export default function GiftRegistryScreen({ onContinue: _onContinue }: GiftRegistryScreenProps) {
  const { accountNumber } = wedding.giftRegistry;
  const { t } = useLang();

  return (
    <div className="cover-screen">
      <div className="cover-overlay lum-overlay" />

      <div className="evt-content">
        <div className="lum-section-header">
          <div className="lum-line" />
          <span className="lum-section-title">{t("gift.title")}</span>
          <div className="lum-line" />
        </div>

        <p className="lum-body lum-body--muted" style={{ marginBottom: 4 }}>
          {t("gift.note")}
        </p>

        <div className="glass-card">
          <div className="evt-row">
            <div className="evt-row-icon"><GiftIcon /></div>
            <div className="evt-row-details">
              <span className="evt-row-name">{t("gift.accountLabel")}</span>
              <span className="evt-row-sub">{t("gift.accountHolder")}</span>
            </div>
          </div>

          <div className="evt-divider" style={{ margin: "16px 0" }} />

          <div className="gift-rows">
            <CopyRow label={t("gift.accountNumberLabel")} value={accountNumber} />
          </div>
        </div>
      </div>
    </div>
  );
}
