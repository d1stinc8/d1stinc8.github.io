import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Anurag Angal — Quantum Systems & Software Architecture";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f6f5f0",
          color: "#1a1917",
          padding: "72px 84px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#5c5952",
            fontFamily: "monospace",
          }}
        >
          <span>SCHOOL OF QUANTUM TECHNOLOGY · DIAT PUNE</span>
          <span>PUNE, INDIA</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, lineHeight: 1.05, fontWeight: 400 }}>
            Anurag Angal.
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              color: "#5c5952",
              maxWidth: 920,
              fontFamily: "sans-serif",
            }}
          >
            Quantum Systems, Numerical Simulation &amp; Software Architecture
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#8c887e",
            fontFamily: "monospace",
          }}
        >
          <span>D1STINC8.GITHUB.IO</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
