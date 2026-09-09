"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { getTranslations } from "@/lib/translations";
import type { Project } from "@/data/projects";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const projectTranslation = t.projects.items[project.key];

  return (
    <section className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Back */}
        <Link
          href="/#projects"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          ← {t.projects.backToProjects}
        </Link>

        <div className="mt-12 max-w-4xl">
          {/* Category */}
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {projectTranslation.category}
          </p>

          {/* Title */}
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {projectTranslation.title}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            {projectTranslation.shortDescription}
          </p>

          {/* Links */}
          {(project.github || project.demo || project.video) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-foreground/30 hover:bg-surface"
                >
                  GitHub ↗
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-violet/30 bg-violet/5 px-4 py-2.5 text-sm font-medium text-violet transition-colors hover:bg-violet/10"
                >
                  {project.demoLabel ?? t.projects.actions.viewApp} ↗
                </a>
              )}

              {project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-foreground/30 hover:bg-surface-hover"
                >
                  {t.projects.actions.watchDemo} ↗
                </a>
              )}
            </div>
          )}
        </div>

        {/* Technologies */}
        <div className="mt-12 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Main project image */}
        {project.image && (
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="relative aspect-[16/9]">
              <Image
                src={project.image}
                alt={`${projectTranslation.title} project screenshot`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}