"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { getTranslations } from "@/lib/translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border bg-gradient-to-br from-violet/5 via-background to-cyan/5 py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full bg-gradient-to-br from-violet/10 to-cyan/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-64 w-64 rounded-full bg-violet/5 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-violet to-cyan" />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {t.contact.label}
            </p>

            <span className="h-px w-8 bg-gradient-to-r from-cyan to-violet" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t.contact.title}{" "}
            <span className="gradient-text">
              {t.contact.titleHighlight}
            </span>
          </h2>
        </div>

        {/* Contact card */}
        <div className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-border bg-surface">
          {/* Gradient accent */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet to-transparent"
          />

          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_1fr] lg:gap-14 lg:p-12">
            {/* Left side */}
            <div className="flex flex-col justify-center">
              {/* Availability */}
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="relative flex h-2.5 w-2.5"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan" />
                </span>

                <span className="text-sm font-medium text-muted">
                  {t.contact.availability}
                </span>
              </div>

              <p className="mt-8 text-sm font-medium uppercase tracking-[0.15em] text-violet">
                {t.contact.getInTouch}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                {t.contact.opportunityTitle}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-6 text-muted sm:text-base">
                {t.contact.opportunityDescription}
              </p>

              <p className="mt-6 max-w-lg text-sm leading-6 text-muted">
                {t.contact.opportunityDescriptionSecond}
              </p>
            </div>

            {/* Right side */}
            <div className="flex flex-col justify-center">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted">
                {t.contact.contactMe}
              </p>

              {/* Contact methods */}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {/* Email */}
                <a
                  href="mailto:syrine.elayeb.dev@gmail.com"
                  className="group rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet/30 hover:bg-gradient-to-r hover:from-violet/5 hover:to-cyan/5"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      {t.contact.email}
                    </p>

                    <span
                      aria-hidden="true"
                      className="text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-violet"
                    >
                      →
                    </span>
                  </div>

                  <p className="mt-2 truncate text-sm font-medium text-foreground">
                    syrine.elayeb.dev@gmail.com
                  </p>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/50778952"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/30 hover:bg-gradient-to-r hover:from-cyan/5 hover:to-violet/5"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      {t.contact.whatsapp}
                    </p>

                    <span
                      aria-hidden="true"
                      className="text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-cyan"
                    >
                      ↗
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-medium text-foreground">
                    {t.contact.messageMe}
                  </p>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/sirineelayeb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet/30 hover:bg-gradient-to-r hover:from-violet/5 hover:to-cyan/5"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      {t.contact.github}
                    </p>

                    <span
                      aria-hidden="true"
                      className="text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-violet"
                    >
                      ↗
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-medium text-foreground">
                    sirineelayeb
                  </p>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/syrine-elayeb-455235243/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet/30 hover:bg-gradient-to-r hover:from-violet/5 hover:to-cyan/5"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      {t.contact.linkedin}
                    </p>

                    <span
                      aria-hidden="true"
                      className="text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-violet"
                    >
                      ↗
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-medium text-foreground">
                    Syrine Elayeb
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm leading-6 text-muted">
            {t.contact.bottomStatement}{" "}
            <span className="font-medium text-foreground">
              {t.contact.bottomHighlight}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
