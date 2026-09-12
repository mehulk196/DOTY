// Scaled from the original 32px favicon design: a 20px inner box with three
// 9px dots at (3,5), (11,5), (7,0), on a 32px rounded background.
export function CottonBollMark({
  size,
  bg = "#16321f",
  dot = "#d9b25c",
  radius,
}: {
  size: number;
  bg?: string;
  dot?: string;
  radius?: number;
}) {
  const scale = size / 32;
  const inner = 20 * scale;
  const dotSize = 9 * scale;
  const positions = [
    { left: 3 * scale, top: 5 * scale },
    { left: 11 * scale, top: 5 * scale },
    { left: 7 * scale, top: 0 },
  ];

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: bg,
        borderRadius: radius ?? 6 * scale,
      }}
    >
      <div style={{ position: "relative", width: inner, height: inner, display: "flex" }}>
        {positions.map((pos, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: pos.left,
              top: pos.top,
              width: dotSize,
              height: dotSize,
              borderRadius: "50%",
              backgroundColor: dot,
              display: "flex",
            }}
          />
        ))}
      </div>
    </div>
  );
}
