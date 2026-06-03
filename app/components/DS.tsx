"use client";
import { useState, useEffect } from "react";
import DSScreens from "./DSScreens";
import DSIcons from "./DSIcons";
import DSOverlays from "./DSOverlays";
import DSStickers from "./DSStickers";
import DSTopScreen from "./DSTopScreen";
import DSDPad from "./DSDpad";
import { SHOWS } from "../data/showData";

interface DSProps {
  hasBooted: boolean;
  onBoot: () => void;
}

export default function DS({ hasBooted, onBoot }: DSProps) {
  const [selectedShow, setSelectedShow] = useState<string | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [powered, setPowered] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const viewportH = window.innerHeight;
      const viewportW = window.innerWidth;

      // translate-x-116 = 464px offset + ~650px DS image width
      const contentWidth = 1114;
      // 1040px image - 106px translate-y-26.5 upward shift + buffer
      const contentHeight = 1000;

      const heightScale = viewportH / contentHeight;
      const widthScale = viewportW / contentWidth;

      setScale(Math.min(heightScale, widthScale, 1) * 0.92);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const handleSelectShow = (label: string) => {
    console.log("Selected:", label);
    setSelectedShow(label);
    setPhotoIndex(0);
  };

  const handleBack = () => {
    setSelectedShow(null);
    setPhotoIndex(0);
  };

  const handlePrev = () => {
    if (!selectedShow) return;
    const show = SHOWS[selectedShow];
    if (!show || show.images.length === 0) return;
    setPhotoIndex(i => (i - 1 + show.images.length) % show.images.length);
  };

  const handleNext = () => {
    if (!selectedShow) return;
    const show = SHOWS[selectedShow];
    if (!show || show.images.length === 0) return;
    setPhotoIndex(i => (i + 1) % show.images.length);
  };

  const handlePower = () => {
    if (!hasBooted) onBoot();
    setPowered(p => !p);
  };

  return (
    <div style={{
      transform: `scale(${scale})`,
      transformOrigin: "center center",
    }}>
      <div className="relative -translate-y-34 translate-x-122" style={{ display: "inline-block" }}>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Coral+Pixels&family=VT323&display=swap');
          @keyframes screenGlow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          @keyframes powerBlink {
            0%, 100% { filter: brightness(1) drop-shadow(0 0 8px rgba(255,255,255,1)); }
            50% { filter: brightness(0.4) drop-shadow(0 0 2px rgba(255,255,255,0.2)); }
          }
          @keyframes powerGlow {
            0%, 100% { filter: brightness(1) drop-shadow(0 0 6px rgba(255,255,255,0.9)); }
            50% { filter: brightness(1) drop-shadow(0 0 3px rgba(255,255,255,0.4)); }
          }
          @keyframes nameReveal {
            0% {
              opacity: 0;
              color: white;
              transform: translate(180px, 0px) scale(0.5);
              text-shadow: none;
            }
            78% {
              opacity: 1;
              color: #313131;
              transform: translate(180px, 0px) scale(3.1);
              text-shadow: 0 0 5px #5e5e5e, 0 0 10px #a8a8a8, 0 0 25px #ffffff, 0 0 50px rgba(255,255,255,0.8);
            }
            89% {
              opacity: 1;
              color: #313131;
              transform: translate(180px, 0px) scale(3.1);
              text-shadow: 0 0 5px #272727, 0 0 10px #a8a8a8, 0 0 25px #ffffff, 0 0 50px rgba(255,255,255,0.8);
            }
            100% {
              opacity: 1;
              color: #ffffff;
              transform: translate(-900px, -205px) scale(5);
              text-shadow: 0 0 4px #c4c4c4, 0 0 6px #888888, 0 0 5px #000000, 0 0 60px rgba(255,255,255,0.8);
            }
          }
          @keyframes quoteReveal {
            0% { opacity: 0; transform: scale(0.2); }
            100% { opacity: 1; transform: scale(1); }
          }
          @keyframes IconLoad {
            0% {
              opacity: 0;
              filter: drop-shadow(0 0 6px rgba(255,255,255,0.9));
              transform: translateY(0px) scale(0.2);
            }
            80% {
              opacity: 0.95;
              filter: drop-shadow(0 0 6px rgba(255,255,255,0.9));
              transform: translateY(-5px) scale(1);
            }
            85% {
              opacity: 0.95;
              filter: drop-shadow(0 0 6px rgba(255,255,255,0.9));
              transform: translateY(-10px) scale(1);
            }
            92% {
              opacity: 1;
              filter: drop-shadow(0 0 6px rgba(255,255,255,0.9));
              transform: translateY(16px) scale(1);
            }
            100% {
              opacity: 1;
              filter: drop-shadow(0 0 6px rgba(255,255,255,0.9));
              transform: translateY(0px) scale(1);
            }
          }
        `}</style>

        <DSOverlays hasBooted={hasBooted} />
        <DSTopScreen
          powered={powered}
          selectedShow={selectedShow}
          photoIndex={photoIndex}
          onBack={handleBack}
        />
        <DSIcons powered={powered} onSelect={handleSelectShow} />

        {/* 3DS Image */}
        <img
          src="/images/3DS-Portfolio.png"
          alt="3DS-Image"
          style={{ height: "1185px", width: "auto", position: "relative", zIndex: 50 }}
        />

        <DSScreens powered={powered} />
        <DSDPad powered={powered} selectedShow={selectedShow} onPrev={handlePrev} onNext={handleNext} />
        <DSStickers />

        {/* Power Icon */}
        <img
          src="/images/clker-free-vector-images-power-297018.svg"
          alt="Power Button"
          onClick={handlePower}
          style={{
            position: "absolute",
            bottom: "14.8%",
            right: "20.6%",
            width: "30px",
            height: "20px",
            zIndex: 9999,
            cursor: "pointer",
            transform: "perspective(390px) rotateZ(-5deg)",
            filter: "invert(1)",
            animation: powered
              ? "powerGlow 2s ease-in-out infinite"
              : "powerBlink 2s ease-in-out infinite"
          }}
        />

      </div>
    </div>
  );
}