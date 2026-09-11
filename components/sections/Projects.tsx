"use client";

import { projects } from "@/data/projects";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { getTranslations } from "@/lib/translations";

import ProjectGrid from "@/components/projects/ProjectGrid";

export default function Projects() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const featuredProjects = projects.filter(
    (project) => project.featured,
  );

  return (
    <section
      id="projects"
      className="border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-violet to-cyan" />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {t.projects.label}
            </p>

            <span className="h-px w-8 bg-gradient-to-r from-cyan to-violet" />
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t.projects.title}{" "}
            <span className="gradient-text">
              {t.projects.titleHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted">
            {t.projects.description}
          </p>
        </div>

        {/* Projects */}
        <div className="mt-14">
          <ProjectGrid projects={featuredProjects} />
        </div>

        {/* Closing statement */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-sm leading-6 text-muted sm:text-base">
            {t.projects.closingDescription}
          </p>
        </div>
      </div>
    </section>
  );
}