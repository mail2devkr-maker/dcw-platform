import { ImageResponse } from "next/og";
import { IRISH } from "@dcw/brand";

export const alt = "IRISH AI — AI project-execution platform presented by DCW";
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
          color: "#f2f6f8",
          background: "radial-gradient(circle at 88% 8%, rgba(99,230,190,.13), transparent 34%), linear-gradient(135deg, #0b0f14, #111820)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ color: "#63e6be", fontSize: 21, letterSpacing: "0.12em" }}>MASTER AI, PRESENTED BY DCW</span>
          <span style={{ border: "1px solid #3a4a5c", borderRadius: 999, padding: "8px 14px", color: "#a8b5c2", fontSize: 16 }}>{IRISH.status}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ color: "#63e6be", fontSize: 19, letterSpacing: "0.1em" }}>LOCAL-FIRST AI FOR SOFTWARE MISSIONS</span>
          <span style={{ fontSize: 82, fontWeight: 700, letterSpacing: "-0.06em", lineHeight: 1 }}>{IRISH.searchName}</span>
          <span style={{ color: "#c1cbd5", fontSize: 34 }}>{IRISH.productLine}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#a8b5c2", fontSize: 20 }}>
          <span style={{ width: 72, height: 3, background: "linear-gradient(90deg,#63e6be,#78b7ff)" }} />
          <span>irish.dcw.co.in</span>
        </div>
      </div>
    ),
    size,
  );
}
