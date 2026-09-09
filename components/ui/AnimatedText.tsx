"use client";

import { useEffect, useState } from "react";

interface AnimatedTextProps {
  texts: string[];
  delay?: number;
  speed?: number;
  pause?: number;
}

export default function AnimatedText({
  texts,
  delay = 400,
  speed = 70,
  pause = 1800,
}: AnimatedTextProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval: ReturnType<typeof setInterval> | undefined;
    let deleteTimeout: ReturnType<typeof setTimeout> | undefined;

    const currentText = texts[textIndex];

    const startTimeout = setTimeout(() => {
      typingInterval = setInterval(() => {
        currentIndex += 1;

        setDisplayedText(currentText.slice(0, currentIndex));

        if (currentIndex === currentText.length) {
          if (typingInterval) {
            clearInterval(typingInterval);
          }

          deleteTimeout = setTimeout(() => {
            setDisplayedText("");
            setTextIndex((previous) => (previous + 1) % texts.length);
          }, pause);
        }
      }, speed);
    }, textIndex === 0 ? delay : 0);

    return () => {
      clearTimeout(startTimeout);

      if (typingInterval) {
        clearInterval(typingInterval);
      }

      if (deleteTimeout) {
        clearTimeout(deleteTimeout);
      }
    };
  }, [texts, textIndex, delay, speed, pause]);

  return (
    <span>
      {displayedText}
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-[1em] w-px translate-y-[2px] animate-pulse bg-accent"
      />
    </span>
  );
}
