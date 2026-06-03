"use client";
import { useState } from "react";
import DS from "./components/DS";
import ResumeSection from "./components/ResumeSection";

export default function Home() {
  const [hasBooted, setHasBooted] = useState(false);

  return (
    <main className="flex-1 flex items-center justify-center bg-gray-700">
      <DS hasBooted={hasBooted} onBoot={() => setHasBooted(true)} />
      <ResumeSection hasBooted={hasBooted} />
    </main>
  );
}