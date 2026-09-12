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
        <div style={{ position: "relative", width: 20, height: 20, display: "flex" }}>
          <div
            style={{
              position: "absolute",
              left: 3,
              top: 5,
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: "#d9b25c",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 11,
              top: 5,
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: "#d9b25c",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 7,
              top: 0,
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: "#d9b25c",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
