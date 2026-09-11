"use client";

import Link from "next/link";

import AnimatedText from "@/components/ui/AnimatedText";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getTranslations } from "@/lib/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-6 pt-24">
        <div className="max-w-5xl">
          {/* Name */}
          <h1 className="animate-fade-up text-6xl font-bold tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            Syrine{" "}
            <span className="gradient-text">Elayeb</span>
          </h1>

          {/* Professional roles */}
          <p className="animate-fade-up animate-delay-100 mt-5 text-xl font-medium text-foreground sm:text-2xl lg:text-3xl">
            <AnimatedText
              texts={t.hero.roles}
              delay={400}
              speed={70}
              pause={1800}
            />
          </p>

          {/* Description */}
          <p className="animate-fade-up animate-delay-200 mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            {t.hero.description}
          </p>

          {/* Actions */}
          <div className="animate-fade-up animate-delay-400 mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet to-cyan px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
            >
              {t.actions.viewWork}
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-violet/30 hover:bg-surface hover:text-violet"
            >
              {t.actions.letsTalk}
            </Link>

            <a
              href="/cv/Syrine_Elayeb__Resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-medium text-muted transition-colors hover:text-violet"
            >
              {t.actions.downloadCV} ↓
            </a>
          </div>
        </div>
      </div>

      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-violet/20 to-cyan/20 blur-3xl"
      />
    </section>
  );
}
