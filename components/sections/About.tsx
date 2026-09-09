"use client";

import Image from "next/image";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { getTranslations } from "@/lib/translations";

export default function About() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section
      id="about"
      className="border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Profile image */}
          <div className="animate-slide-left flex justify-center lg:justify-start">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src="/images/profile/syrine.jpeg"
                alt="Syrine Elayeb"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Introduction */}
          <div className="animate-slide-right">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              {t.about.label}
            </p>

            <h2 className="animate-fade-up animate-delay-100 mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {t.about.title}
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-muted sm:text-lg">
              {t.about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`animate-fade-up animate-delay-${(index + 2) * 100}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick facts */}
            <div className="animate-fade-up animate-delay-500 mt-8 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {t.about.facts.focus}
                </p>

                <p className="mt-1 text-sm text-muted">
                  {t.about.facts.focusValue}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground">
                  {t.about.facts.interests}
                </p>

                <p className="mt-1 text-sm text-muted">
                  {t.about.facts.interestsValue}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground">
                  {t.about.facts.basedIn}
                </p>

                <p className="mt-1 text-sm text-muted">
                  {t.about.facts.basedInValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
