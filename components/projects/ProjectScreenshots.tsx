"use client";

import Image from "next/image";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { getTranslations } from "@/lib/translations";
import type { Project } from "@/data/projects";

interface ProjectScreenshotsProps {
  project: Project;
}

export default function ProjectScreenshots({
  project,
}: ProjectScreenshotsProps) {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const projectTranslation = t.projects.items[project.key];

  if (!project.screenshots?.length) {
    return null;
  }

  return (
    <section className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {t.projects.sections.screenshots.label}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {t.projects.sections.screenshots.title}
          </h2>

          <p className="mt-4 max-w-2xl text-muted">
            {t.projects.sections.screenshots.description}
          </p>
        </div>

        {/* Screenshots */}
        <div className="space-y-12">
          {project.screenshots.map((screenshot, index) => {
            const screenshotTranslation =
              projectTranslation.screenshots[index];

            return (
              <div key={screenshot.src}>
                <div className="overflow-hidden rounded-2xl border border-border bg-surface">
                  <Image
                    src={screenshot.src}
                    alt={
                      screenshotTranslation?.title ??
                      projectTranslation.title
                    }
                    width={1600}
                    height={900}
                    className="h-auto w-full object-cover"
                  />
                </div>

                {screenshotTranslation && (
                  <>
                    <h3 className="mt-5 text-xl font-semibold">
                      {screenshotTranslation.title}
                    </h3>

                    {screenshotTranslation.description && (
                      <p className="mt-2 max-w-3xl leading-7 text-muted">
                        {screenshotTranslation.description}
                      </p>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
