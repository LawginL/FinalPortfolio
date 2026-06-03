"use client";

interface DSDPadProps {
  powered: boolean;
  selectedShow: string | null;
  onPrev: () => void;
  onNext: () => void;
}

export default function DSDPad({ powered, selectedShow, onPrev, onNext }: DSDPadProps) {
  if (!powered || !selectedShow) return null;

  const btnStyle = (side: "left" | "right"): React.CSSProperties => ({
    position: "absolute",
    bottom: "20%",
    left: side === "left" ? "10.9%" : "19%",
    width: "42px",
    height: "50px",
    zIndex: 9999,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    backgroundColor: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.2)",
    transition: "background-color 0.1s ease,",
    transform: "rotateX(42deg) rotateZ(5deg) rotateY(-5deg)",
    userSelect: "none",
  });

  return (
    <>
      <div
        style={btnStyle("left")}
        onClick={onPrev}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.2)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)";
        }}
      >
      </div>

      <div
        style={btnStyle("right")}
        onClick={onNext}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.2)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)";
        }}
      >
      </div>
    </>
  );
}