"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ImageLightboxProps {
  src: string;
  alt: string;
}

export default function ImageLightbox({
  src,
  alt,
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling while the popup is open
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Project thumbnail */}
      <div className="group/image relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover/image:scale-[1.03]"
        />

        {/* Eye button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="View project screenshot"
          className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-black/80 group-hover/image:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12Z"
            />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
      </div>

      {/* Full-screen lightbox */}
      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            {/* Image wrapper */}
            <div
              className="relative flex max-h-[95vh] max-w-[95vw] items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                width={1920}
                height={1200}
                className="max-h-[90vh] max-w-[90vw] w-auto rounded-xl object-contain shadow-2xl"
              />

              {/* Close button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close image"
                className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-background text-2xl text-foreground shadow-lg transition hover:scale-105"
              >
                ×
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}