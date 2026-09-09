"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { getTranslations } from "@/lib/translations";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-border py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-violet/10 to-cyan/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-violet to-cyan" />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {t.skills.label}
            </p>

            <span className="h-px w-8 bg-gradient-to-r from-cyan to-violet" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t.skills.title}{" "}
            <span className="gradient-text">
              {t.skills.titleHighlight}
            </span>
          </h2>
        </div>

        {/* Skill groups */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.key}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet/30 hover:shadow-xl hover:shadow-violet/5"
            >
              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-violet/10 to-cyan/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Card header */}
              <div className="relative flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] text-violet/70">
                    {group.number}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    {t.skills.groups[group.key as keyof typeof t.skills.groups]}
                  </h3>
                </div>

                <div
                  aria-hidden="true"
                  className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet to-cyan opacity-70 transition-transform duration-300 group-hover:scale-125"
                />
              </div>

              {/* Technologies */}
              <div className="relative mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-200 hover:border-violet/30 hover:bg-gradient-to-r hover:from-violet/5 hover:to-cyan/5 hover:text-violet"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-violet/5 via-transparent to-cyan/5"
          />

          <div className="relative flex flex-col gap-6 p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent">
                {t.skills.approachLabel}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                {t.skills.approachTitle}{" "}
                <span className="gradient-text">
                  {t.skills.approachHighlight}
                </span>
              </h3>

              <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
                {t.skills.approachDescription}
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-2">
              <span className="rounded-full border border-violet/20 bg-violet/5 px-4 py-2 text-xs font-medium text-violet">
                {t.skills.tags.fullStack}
              </span>

              <span className="rounded-full border border-cyan/20 bg-cyan/5 px-4 py-2 text-xs font-medium text-cyan">
                {t.skills.tags.ai}
              </span>

              <span className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground">
                {t.skills.tags.iot}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
