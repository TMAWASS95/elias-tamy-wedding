export default function ETRoute() {
  return (
    <div
      style={{
        height: "100dvh",
        width: "100%",
        background: "#0d0605",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: "clamp(72px, 16vw, 200px)",
            fontWeight: 400,
            color: "#fff",
            letterSpacing: "0.02em",
            lineHeight: 1,
          }}
        >
          ET
        </div>
        <div
          style={{
            marginTop: "12px",
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: "clamp(28px, 6vw, 64px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.9)",
            letterSpacing: "0.04em",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ display: "inline-block", verticalAlign: "baseline" }}>Elias </span>
          <span style={{ display: "inline-block", verticalAlign: "baseline" }}>
            &nbsp;&amp; Tamy
          </span>
        </div>
      </div>
    </div>
  );
}

