"use client";
import { useEffect, useState } from "react";
import { SHOWS } from "../data/showData";

interface DSTopScreenProps {
  powered: boolean;
  selectedShow: string | null;
  photoIndex: number;
  onBack: () => void;
}

function HubBackButton({ onBack }: { onBack: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onBack}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "absolute",
        bottom: "-118%",
        left: "46%",
        zIndex: 80,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        padding: "6px 10px",
        borderRadius: "6px",
        backgroundColor: hovered ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.5)",
        transition: "background-color 0.15s ease, border-color 0.15s ease",
      }}
    >
      {/* House icon */}
      <svg width="12" height="12" viewBox="0 0 24 24" fill="white" opacity={hovered ? 1 : 0.8}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    </div>
  );
}

export default function DSTopScreen({ powered, selectedShow, photoIndex, onBack }: DSTopScreenProps) {
  const [displayedIndex, setDisplayedIndex] = useState(photoIndex);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
    const t = setTimeout(() => {
      setDisplayedIndex(photoIndex);
      setFade(true);
    }, 200);
    return () => clearTimeout(t);
  }, [photoIndex]);

  if (!powered || !selectedShow) return null;

  const show = SHOWS[selectedShow];
  if (!show) return null;

  const containerStyle: React.CSSProperties = {
    position: "absolute",
    top: "14.6%",
    left: "26.8%",
    width: "46.9%",
    height: "32%",
    zIndex: 70,
    borderRadius: "4px",
    backgroundColor: "black",
    pointerEvents: "auto",
  };

  if (show.externalLink) {
    return (
      <div style={containerStyle}>
        <div style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}>
          <span style={{ color: "white", fontFamily: "VT323, monospace", fontSize: "18px" }}>
            {show.label}
          </span>
          <a
            href={show.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4a9eff", fontFamily: "VT323, monospace", fontSize: "16px" }}
          >
            ▶ Watch on YouTube
          </a>
        </div>
        <HubBackButton onBack={onBack} />
      </div>
    );
  }

  if (show.images.length === 0) {
    return (
      <div style={containerStyle}>
        <div style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <span style={{ color: "rgba(255,255,255,0.5)", fontFamily: "VT323, monospace", fontSize: "18px" }}>
            Coming Soon
          </span>
        </div>
        <HubBackButton onBack={onBack} />
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      {/* Photo */}
      <img
        src={show.images[displayedIndex]}
        alt={`${show.label} photo ${displayedIndex + 1}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
          opacity: fade ? 1 : 0,
          transition: "opacity 0.2s ease-in-out",
        }}
      />

      {/* Show name */}
      <div style={{
        position: "absolute",
        top: "-2%",
        left: "0%",
        right: 0,
        padding: "4px 8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <span style={{ color: "black", fontFamily: "Coral Pixels, serif", fontSize: "44px", textShadow: "0 0 4px #5e5e5e, 0 0 10px #6e6e6e, 0 0 25px rgb(80, 80, 80), 0 0 50px rgba(255,255,255,0.8)" }}>
          {show.label}
        </span>
      </div>
      {/* Counter overlay */}
      <div style={{
        position: "absolute",
        bottom: "0%",
        right: "0%",
        padding: "4px 8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: "VT323, monospace", fontSize: "14px"}}>
          {displayedIndex + 1} / {show.images.length}
        </span>
      </div>

      <HubBackButton onBack={onBack} />
    </div>
  );
}