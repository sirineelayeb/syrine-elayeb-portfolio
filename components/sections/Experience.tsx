"use client";

import { experience } from "@/data/experience";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getTranslations } from "@/lib/translations";

export default function Experience() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-border py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-violet/10 to-cyan/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan/5 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-violet to-cyan" />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {t.experience.label}
            </p>

            <span className="h-px w-8 bg-gradient-to-r from-cyan to-violet" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t.experience.title}{" "}
            <span className="gradient-text">
              {t.experience.titleHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            {t.experience.description}
          </p>
        </div>

        {/* Experience timeline */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-border md:block"
          />

          <div className="space-y-8">
            {experience.map((item, index) => {
              const translation = t.experience.items.find(
                (experienceItem) => experienceItem.key === item.key,
              );

              return (
                <article
                  key={item.key}
                  className="group relative md:pl-14"
                >
                  {/* Timeline point */}
                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-8 hidden h-4 w-4 rounded-full border-4 border-background bg-gradient-to-r from-violet to-cyan shadow-sm md:block"
                  />

                  {/* Experience card */}
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet/30 hover:shadow-xl hover:shadow-violet/5 sm:p-8">
                    {/* Hover glow */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-violet/10 to-cyan/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                    />

                    <div className="relative">
                      {/* Header */}
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                          {/* Number */}
                          <span className="mt-1 text-xs font-semibold tracking-[0.15em] text-violet/70">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div>
                            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                              {item.role}
                            </h3>

                            <p className="mt-1 font-medium gradient-text">
                              {item.company}
                            </p>
                          </div>
                        </div>

                        {/* Period */}
                        <span className="shrink-0 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted">
                          {item.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-6 max-w-3xl text-sm leading-7 text-muted sm:text-base">
                        {translation?.description}
                      </p>

                      {/* Technologies */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-200 hover:border-violet/30 hover:bg-gradient-to-r hover:from-violet/5 hover:to-cyan/5 hover:text-violet"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="relative mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl border border-border bg-surface">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-violet/5 via-transparent to-cyan/5"
          />

          <div className="relative flex flex-col gap-4 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent">
                {t.experience.highlight.label}
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted sm:text-base">
                {t.experience.highlight.description}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <span className="rounded-full border border-violet/20 bg-violet/5 px-4 py-2 text-xs font-medium text-violet">
                {t.experience.highlight.fullStack}
              </span>

              <span className="rounded-full border border-cyan/20 bg-cyan/5 px-4 py-2 text-xs font-medium text-cyan">
                {t.experience.highlight.aiIot}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
