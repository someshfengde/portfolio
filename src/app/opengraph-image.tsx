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
    {
      type: "div",
      props: {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "#0a0a0a",
          color: "#ededed",
        },
        children: [
          {
            type: "div",
            props: {
              style: { fontSize: 56, fontWeight: 700, letterSpacing: -1 },
              children: `${name} — Portfolio`,
            },
          },
          {
            type: "div",
            props: {
              style: { marginTop: 16, fontSize: 28, opacity: 0.8 },
              children: subtitle,
            },
          },
          {
            type: "div",
            props: {
              style: { marginTop: 32, display: "flex", alignItems: "center", gap: 12 },
              children: [
                // Profile avatar pulled from public folder
                {
                  type: "img",
                  props: {
                    src: `${siteUrl}/profile.jpeg`,
                    width: 72,
                    height: 72,
                    style: {
                      height: 72,
                      width: 72,
                      borderRadius: 999,
                      objectFit: "cover",
                      border: "2px solid #262626",
                      background: "#171717",
                    },
                    alt: `${name} avatar`,
                  },
                },
                {
                  type: "div",
                  props: { style: { fontSize: 24, opacity: 0.8 }, children: "someshfengade.vercel.app" },
                },
              ],
            },
          },
        ],
      },
    } as any,
    size
  );
}


