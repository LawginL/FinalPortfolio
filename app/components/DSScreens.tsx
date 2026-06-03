interface DSScreensProps {
  powered: boolean;
}

export default function DSScreens({ powered }: DSScreensProps) {
  return (
    <>
      {/* Top Screen - black fill */}
      <div style={{
        position: "absolute",
        top: "14.6%",
        left: "26.8%",
        width: "46.9%",
        height: "32%",
        zIndex: 60,
        backgroundColor: "black",
        borderRadius: "4px",
        pointerEvents: "none",
        opacity: powered ? 0 : 1,
        transition: "opacity 0.5s ease"
      }} />

      {/* Bottom Screen - black fill */}
      <div style={{
        position: "absolute",
        top: "57.3%",
        left: "30%",
        width: "40%",
        height: "23.6%",
        zIndex: 60,
        backgroundColor: "black",
        borderRadius: "4px",
        transform: "perspective(390px) rotateX(8deg)",
        pointerEvents: "none",
        opacity: powered ? 0 : 1,
        transition: "opacity 0.5s ease"
      }} />

      {/* Top Screen Glow */}
      {powered && (
        <div style={{
          position: "absolute",
          top: "14.7%",
          left: "26.9%",
          width: "46.7%",
          height: "31.7%",
          zIndex: 9999,
          boxShadow: "0 0 80px 3px rgba(255,255,255,0.9), 0 0 30px 3px rgba(255,255,255,0.5)",
          borderRadius: "4px",
          pointerEvents: "none",
          animation: "screenGlow 3s ease-in-out"
        }} />
      )}

      {/* Bottom Screen Glow */}
      {powered && (
        <div style={{
          position: "absolute",
          top: "57.6%",
          left: "30.3%",
          width: "39.35%",
          height: "23%",
          zIndex: 9999,
          boxShadow: "0 0 80px 3px rgba(255,255,255,0.9), 0 0 30px 3px rgba(255,255,255,0.5)",
          borderRadius: "4px",
          transform: "perspective(390px) rotateX(8deg)",
          pointerEvents: "none",
          animation: "screenGlow 3s ease-in-out"
        }} />
      )}
    </>
  );
}