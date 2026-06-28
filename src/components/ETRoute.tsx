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
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(72px, 16vw, 200px)",
            fontWeight: 300,
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
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 6vw, 64px)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.9)",
            letterSpacing: "0.04em",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          Elias <span className="hero-amp">&amp;</span> Tamy
        </div>
      </div>
    </div>
  );
}

