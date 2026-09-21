import { ImageResponse } from "next/og";

export const alt = "DCW — technology and product development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 76px",
          color: "#f4f8ff",
          background: "radial-gradient(circle at 88% 6%, rgba(34,211,238,.16), transparent 32%), linear-gradient(135deg, #05070d, #0a1120)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 54, height: 54, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(103,232,249,.5)", borderRadius: 14, color: "#b9f5ff", fontSize: 28, fontWeight: 700 }}>D</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.04em" }}>DCW</span>
            <span style={{ color: "#a8b7ca", fontSize: 15, letterSpacing: "0.12em" }}>TECHNOLOGY + PRODUCT DEVELOPMENT</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 920 }}>
          <span style={{ color: "#67e8f9", fontSize: 19, letterSpacing: "0.1em" }}>PRACTICAL TECHNOLOGY. REAL PRODUCTS.</span>
          <span style={{ fontSize: 68, fontWeight: 700, letterSpacing: "-0.055em", lineHeight: 1.02 }}>Useful software<br />for real work.</span>
          <span style={{ color: "#b9c6d7", fontSize: 24 }}>FastQue and IRISH are products powered by DCW.</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#9eacc0", fontSize: 20 }}>
          <span style={{ width: 72, height: 3, background: "linear-gradient(90deg,#67e8f9,#8b5cf6)" }} />
          <span>dcw.co.in</span>
        </div>
      </div>
    ),
    size,
  );
}
