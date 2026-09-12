import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#16321f",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 15,
            fontWeight: 900,
            fontFamily: "serif",
            color: "#d9b25c",
          }}
        >
          DY
        </div>
      </div>
    ),
    { ...size }
  );
}
