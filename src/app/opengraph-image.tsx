import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const name = process.env.NEXT_PUBLIC_NAME || "Somesh Fengade";
  const subtitle =
    process.env.NEXT_PUBLIC_SUMMARY ||
    "Machine Learning Engineer — GenAI, Agentic/RAG Systems";
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: 64,
          background: "#0a0a0a",
          color: "#ededed",
        }}
      >
        <span style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>
          {name} — Portfolio
        </span>
        <span style={{ marginTop: 16, fontSize: 28, opacity: 0.8 }}>
          {subtitle}
        </span>
        <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 12 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${siteUrl}/profile.jpeg`}
            width={72}
            height={72}
            style={{
              height: 72,
              width: 72,
              borderRadius: 999,
              objectFit: "cover",
              border: "2px solid #262626",
              background: "#171717",
            }}
            alt={`${name} avatar`}
          />
          <span style={{ fontSize: 24, opacity: 0.8 }}>someshfengade.vercel.app</span>
        </div>
      </div>
    ),
    size
  );
}


