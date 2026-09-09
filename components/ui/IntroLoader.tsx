"use client";

import { useEffect, useState } from "react";

import AnimatedText from "./AnimatedText";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    const removeTimer = setTimeout(() => {
      setMounted(false);
    }, 3600);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background px-6 transition-opacity duration-700 ${
        visible
          ? "opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div className="text-center">
        {/* Intro label */}
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-accent sm:text-sm">
          Software Engineer
        </p>

        {/* Name */}
        <h1 className="text-6xl font-bold tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-9xl">
          Syrine{" "}
          <span className="gradient-text">
            Elayeb
          </span>
        </h1>

        {/* Divider */}
        <div className="mx-auto mt-8 h-px w-40 bg-border sm:w-48 md:w-56" />


        {/* Animated role */}
        <div className="mt-7 text-xl font-medium text-muted sm:text-2xl md:text-3xl">
          <AnimatedText
            texts={[
              "Full-Stack Developer",
              "Full-Stack AI Engineer",
              "IoT Software Engineer",
            ]}
            delay={300}
            speed={65}
            pause={650}
          />
        </div>
      </div>
    </div>
  );
}
