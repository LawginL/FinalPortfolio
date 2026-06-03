"use client";
import { useState } from "react";

interface DSIconsProps {
  powered: boolean;
  onSelect: (label: string) => void;
}

interface IconData {
  top: string;
  left: string;
  delay: string;
  src: string;
  label: string;
}

const ICON_GRID: IconData[] = [
  { top: "16%", left: "28.5%", delay: "3.5s",  src: "/images/DSIcons/OUAM-DS.png",       label: "Once Upon A Mattress" },
  { top: "16%", left: "37.5%", delay: "3.52s", src: "/images/DSIcons/DSIcon-SLM.png",    label: "She Loves Me" },
  { top: "16%", left: "46.5%", delay: "3.54s", src: "/images/DSIcons/DSIcon-ILLS.png",   label: "It Looks Like This" },
  { top: "16%", left: "55.5%", delay: "3.56s", src: "/images/DSIcons/DSIcon-ABH.png",    label: "Alice By Heart" },
  { top: "16%", left: "64.5%", delay: "3.58s", src: "/images/DSIcons/DSIcon-FORUM.png",  label: "A Funny Thing..." },
  { top: "26%", left: "28.5%", delay: "3.5s",  src: "/images/3DS Icons (Single).jpg",    label: "Icon 6" },
  { top: "26%", left: "37.5%", delay: "3.52s", src: "/images/3DS Icons (Single).jpg",    label: "Icon 7" },
  { top: "26%", left: "46.5%", delay: "3.54s", src: "/images/3DS Icons (Single).jpg",    label: "Icon 8" },
  { top: "26%", left: "55.5%", delay: "3.56s", src: "/images/3DS Icons (Single).jpg",    label: "Icon 9" },
  { top: "26%", left: "64.5%", delay: "3.58s", src: "/images/3DS Icons (Single).jpg",    label: "Icon 10" },
  { top: "36%", left: "28.5%", delay: "3.5s",  src: "/images/3DS Icons (Single).jpg",    label: "Icon 11" },
  { top: "36%", left: "37.5%", delay: "3.52s", src: "/images/3DS Icons (Single).jpg",    label: "Icon 12" },
  { top: "36%", left: "46.5%", delay: "3.54s", src: "/images/3DS Icons (Single).jpg",    label: "Icon 13" },
  { top: "36%", left: "55.5%", delay: "3.56s", src: "/images/3DS Icons (Single).jpg",    label: "Icon 14" },
  { top: "36%", left: "64.5%", delay: "3.58s", src: "/images/3DS Icons (Single).jpg",    label: "Icon 15" },
];

function DSIcon({ icon, onSelect }: { icon: IconData; onSelect: (label: string) => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(icon.label)}
      style={{
        position: "absolute",
        top: icon.top,
        left: icon.left,
        width: "85px",
        cursor: "pointer",
        zIndex: 63,
        transform: hovered ? "scale(1.08) translateY(-6px)" : "scale(1) translateY(0px)",
        transition: "transform 0.15s ease-out",
      }}
    >
      <img
        src={icon.src}
        alt={icon.label}
        style={{
          width: "100%",
          height: "auto",
          opacity: 0.95,
          display: "block",
          animation: "IconLoad 3s ease-in-out",
          animationDelay: icon.delay,
          animationFillMode: "both",
        }}
      />
    </div>
  );
}

export default function DSIcons({ powered, onSelect }: DSIconsProps) {
  if (!powered) return null;

  return (
    <>
      {ICON_GRID.map((icon, i) => (
        <DSIcon key={i} icon={icon} onSelect={onSelect} />
      ))}
    </>
  );
}