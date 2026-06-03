"use client";
import { useState, useEffect } from "react";

interface ResumeSectionProps {
  hasBooted: boolean;
}

const HEADSHOTS = [
  "/images/Lawhon_Logan-removebg-preview.png",
  "/images/Logan_Lawhon_HS.png",
];

const RESUMES = [
  {
    label: "Acting Resume",
    file: "/images/LOGAN LAWHON _ RESUME (Updated) (4).pdf",
  },
  {
    label: "General Resume",
    file: "/images/General Resume - Logan Lawhon (3).pdf",
  },
];

function HeadshotCycler() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(c => (c + 1) % HEADSHOTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", width: "160px", height: "210px", flexShrink: 0 }}>
      {HEADSHOTS.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Headshot ${i + 1}`}
          style={{
            position: "absolute",
            bottom: "50%",
            left: "51%",
            width: "100%",
            height: "100%",
            scale: "2",
            objectFit: "cover",
            opacity: i === current ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
          }}
        />
      ))}
    </div>
  );
}

export default function ResumeSection({ hasBooted }: ResumeSectionProps) {
  if (!hasBooted) return null;

  return (
    <>
      {/* Headshot cycler — bottom left, unchanged */}
      <div style={{
        position: "fixed",
        bottom: "0px",
        left: "0px",
        zIndex: 100,
        animation: "zipIn 1.5s ease-in-out",
        animationDelay: "5.65s",
        animationFillMode: "both",
      }}>
        <HeadshotCycler />
      </div>

      {/* Resume links */}
      <div style={{
        position: "fixed",
        top: "12%",
        left: "2.15%", 
        display: "flex",
        flexDirection: "column",
        zIndex: 100,
        animation: "zipIn 1.5s ease-in-out",
        animationDelay: "4.3s",
        animationFillMode: "both",
      }}>
        {RESUMES.map(r => (
        <a
            key={r.label}
            href={r.file}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#4a9eff",
              fontFamily: "VT323, monospace",
              fontSize: "22px",
              textDecoration: "none",
              letterSpacing: "1px",
              lineHeight: "1",
              textShadow: "0 0 8px rgba(74,158,255,0.5)",
              transition: "color 0.2s ease, text-shadow 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = "#89c4ff";
              (e.currentTarget as HTMLElement).style.textShadow = "0 0 12px rgba(74,158,255,0.9)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = "#4a9eff";
              (e.currentTarget as HTMLElement).style.textShadow = "0 0 8px rgba(74,158,255,0.5)";
            }}
          >
            {r.label}
          </a>
        ))}
      </div>
    </>
  );
}