import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const name = process.env.NEXT_PUBLIC_NAME || "Somesh Fengade";
  const subtitle =
    process.env.NEXT_PUBLIC_SUMMARY ||
    "Machine Learning Engineer — GenAI, Agentic/RAG Systems";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "#0a0a0a",
          color: "#ededed",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>{name} — Portfolio</div>
        <div style={{ marginTop: 16, fontSize: 28, opacity: 0.8 }}>{subtitle}</div>
        <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              height: 72,
              width: 72,
              borderRadius: 999,
              background: "#171717",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {name
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((n) => n[0]?.toUpperCase())
              .join("")}
          </div>
          <div style={{ fontSize: 24, opacity: 0.8 }}>someshfengade.vercel.app</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}


