interface DSOverlaysProps {
  hasBooted: boolean;
}

export default function DSOverlays({ hasBooted }: DSOverlaysProps) {
  if (!hasBooted) return null;

  return (
    <>
      {/* Name animation */}
      <div style={{
        position: "absolute",
        top: "12.6%",
        left: "17%",
        width: "46.9%",
        height: "32%",
        zIndex: 65,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        overflow: "visible",
      }}>
        <span style={{
          fontFamily: "Coral Pixels, serif",
          fontSize: "23px",
          fontWeight: "bold",
          whiteSpace: "nowrap",
          animation: "nameReveal 4s ease-in-out forwards",
          animationDelay: "0.3s",
          animationFillMode: "both",
        }}>
          Logan Lawhon
        </span>
      </div>

      {/* Quote */}
      <div style={{
        position: "absolute",
        top: "4.2%",
        left: "-42%",
        width: "40%",
        height: "23.6%",
        zIndex: 65,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        overflow: "visible",
      }}>
        <span style={{
          fontFamily: "VT323, monospace",
          fontSize: "32px",
          fontWeight: "normal",
          whiteSpace: "nowrap",
          color: "#ffffff",
          textShadow: "0 0 4px #c4c4c4, 0 0 6px #888888, 0 0 5px #000000, 0 0 60px rgba(255,255,255,0.8)",
          animation: "quoteReveal 1.5s ease-in-out",
          animationDelay: "3.95s",
          animationFillMode: "both",
        }}>
          "Programmer by day, Man In Costume By Night"
        </span>
      </div>

      {/* EDUCATION TAB */}
      <div style={{
        position: "absolute",
        bottom: "6.5%",
        left: "-47.6%",
        width: "40%",
        height: "23.6%",
        zIndex: 65,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        overflow: "visible",
      }}>
        <span style={{
          fontFamily: "VT323, monospace",
          fontSize: "64px",
          fontWeight: "normal",
          whiteSpace: "nowrap",
          color: "#494949",
          textShadow: "0 0 4px #272727, 0 0 6px #464646, 0 0 5px #000000, 0 0 60px rgba(255,255,255,0.8)",
          animation: "quoteReveal 1.5s ease-in-out",
          animationDelay: "5.9s",
          animationFillMode: "both",
        }}>
          EDUCATION:
        </span>
      </div>

    {  /* West Texas A&M University TAB */}
      <div style={{
        position: "absolute",
        bottom: "2%",
        left: "-37.8%",
        width: "40%",
        height: "23.6%",
        zIndex: 65,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        overflow: "visible",
      }}>
        <span style={{
          fontFamily: "VT323, monospace",
          fontSize: "48px",
          fontWeight: "normal",
          whiteSpace: "nowrap",
          color: "#ff9900",
          textShadow: "0 0 8px #585858, 0 0 6px #363636, 0 0 5px #000000, 0 0 60px rgba(255,255,255,0.8)",
          animation: "zipIn 1.5s ease-in-out",
          animationDelay: "6.05s",
          animationFillMode: "both",
        }}>
          West Texas A&M University
        </span>
      </div>

      {  /* BFA TAB */}
      <div style={{
        position: "absolute",
        bottom: "-3%",
        left: "-37%",
        width: "40%",
        height: "23.6%",
        zIndex: 65,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        overflow: "visible",
      }}>
        <span style={{
          fontFamily: "VT323, monospace",
          fontSize: "20px",
          fontWeight: "normal",
          whiteSpace: "pre-wrap",
          lineHeight: "1",
          color: "#ff9900",
          textShadow: "0 0 8px #1f1f1f, 0 0 6px #0e0e0e, 0 0 5px #000000, 0 0 60px rgba(255,255,255,0.8)",
          animation: "zipIn 1.5s ease-in-out",
          animationDelay: "6.05s",
          animationFillMode: "both",
        }}>
          {"Bachelor of Fine Arts in Musical Theater - SP2027\n    ~ Summa Cum Laude ~ - Minor in Computer Science\nBachelor of Science in Computer Science - Junior Standing\n"}
        </span>
      </div>
    </>
  );
}