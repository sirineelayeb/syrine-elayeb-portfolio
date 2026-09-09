"use client";

import Link from "next/link";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { getTranslations } from "@/lib/translations";
import type { Project } from "@/data/projects";

import ImageLightbox from "./ImageLightbox";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const projectTranslation = t.projects.items[project.key];

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-surface-hover">
      {/* Project visual */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background">
        {project.image ? (
          <div className="absolute inset-0">
            <ImageLightbox
              src={project.image}
              alt={`${projectTranslation.title} project screenshot`}
            />
          </div>
        ) : (
          <div className="relative flex h-full items-center justify-center overflow-hidden">
            {/* Decorative background */}
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/5 blur-3xl"
            />

            {/* Subtle grid */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10 px-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                {projectTranslation.category}
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                {projectTranslation.title}
              </h3>
            </div>
          </div>
        )}
      </div>

      {/* Project content */}
      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {projectTranslation.category}
        </p>

        <h3 className="mt-2 text-2xl font-bold tracking-tight">
          {projectTranslation.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
          {projectTranslation.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted"
            >
              {technology}
            </span>
          ))}

          {project.technologies.length > 5 && (
            <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center gap-5">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center text-sm font-medium transition-colors hover:text-accent"
          >
            {t.projects.actions.viewProject}

            <span
              aria-hidden="true"
              className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>

          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {t.projects.actions.watchDemo}

              <span aria-hidden="true" className="ml-1.5">
                ↗
              </span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}