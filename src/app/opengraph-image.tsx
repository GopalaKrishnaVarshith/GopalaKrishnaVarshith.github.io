import { ImageResponse } from "next/og";

export const alt =
  "Krishna Varshith R — Regulatory technology and workflow automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        padding: "58px 68px",
        backgroundColor: "#111b21",
        color: "#e9efe9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 72,
          right: -110,
          width: 470,
          height: 470,
          border: "1px solid #52706a",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.45,
        }}
      >
        <div
          style={{
            width: 320,
            height: 320,
            border: "1px solid #c8fb70",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 170,
              height: 170,
              backgroundColor: "#29443f",
              borderRadius: "50%",
              display: "flex",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          fontSize: 24,
          fontWeight: 700,
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#c8fb70",
            color: "#111b21",
            fontSize: 21,
          }}
        >
          KV
        </div>
        <span>Krishna Varshith R</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div
          style={{
            color: "#c8fb70",
            fontSize: 20,
            letterSpacing: 4,
            fontWeight: 700,
          }}
        >
          REGULATORY TECHNOLOGY · WORKFLOW AUTOMATION
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 82,
            lineHeight: 1.02,
            fontWeight: 700,
            letterSpacing: -4,
          }}
        >
          Regulatory work.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 82,
            lineHeight: 1.02,
            fontWeight: 700,
            letterSpacing: -4,
            color: "#c8fb70",
          }}
        >
          Clearer workflows.
        </div>
      </div>
      <div style={{ display: "flex", gap: 24, color: "#b6cbc4", fontSize: 20 }}>
        <span>Business analysis</span>
        <span>•</span>
        <span>Digital product delivery</span>
        <span>•</span>
        <span>Responsible AI</span>
      </div>
    </div>,
    size,
  );
}
