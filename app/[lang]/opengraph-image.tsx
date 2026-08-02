import { ImageResponse } from "next/og";
import { content, isLocale } from "../content";

export const alt = "Oleksandr Tolochko — Atlassian Certified Expert";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const localizedContent = content[locale];
  const copy = localizedContent.meta;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        background: "#0b0b0c",
        color: "#f4f3ee",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(244,243,238,.2)",
          paddingBottom: "24px",
          fontSize: "22px",
        }}
      >
        <span>{locale === "uk" ? "Олександр Толочко" : "Oleksandr Tolochko"}</span>
        <span style={{ color: "#79a0ff", fontSize: "18px", letterSpacing: ".08em" }}>
          ATLASSIAN CERTIFIED EXPERT
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
        <div
          style={{
            maxWidth: "1000px",
            fontSize: "76px",
            lineHeight: 1.02,
            letterSpacing: "-.055em",
          }}
        >
          {copy.ogTitle}
        </div>
        <div style={{ maxWidth: "820px", color: "#a9a8a2", fontSize: "25px", lineHeight: 1.45 }}>
          {copy.ogDescription}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          color: "#a9a8a2",
          fontSize: "18px",
        }}
      >
        <span
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#75c79b",
          }}
        />
        {localizedContent.hero.availability}
      </div>
    </div>,
    size,
  );
}
