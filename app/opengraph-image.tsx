import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site-config";

export const alt = `${SITE.name} — ${SITE.organizer}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#faf6ec",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(179,135,47,0.18), transparent 45%), radial-gradient(circle at 85% 10%, rgba(22,50,31,0.15), transparent 40%)",
          padding: 64,
        }}
      >
        <div style={{ position: "relative", width: 44, height: 34, display: "flex" }}>
          <div
            style={{
              position: "absolute",
              left: 6,
              top: 10,
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: "#d9b25c",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 24,
              top: 10,
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: "#d9b25c",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 15,
              top: 0,
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: "#d9b25c",
              display: "flex",
            }}
          />
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#b3872f",
            fontWeight: 700,
            display: "flex",
          }}
        >
          World Cotton Day Celebration
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 84,
            fontWeight: 900,
            color: "#16321f",
            fontFamily: "serif",
            display: "flex",
          }}
        >
          Designer of the Year
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#241d14",
            display: "flex",
          }}
        >
          {SITE.organizer}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 24,
            color: "#241d14",
            opacity: 0.75,
            display: "flex",
          }}
        >
          {SITE.eventDateLabel} &middot; {SITE.venue}
        </div>
      </div>
    ),
    { ...size }
  );
}
