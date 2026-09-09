"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { getTranslations } from "@/lib/translations";
import type { Project } from "@/data/projects";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({
  project,
}: ProjectDetailsProps) {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const projectTranslation = t.projects.items[project.key];

  return (
    <>
      {/* Overview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              {t.projects.sections.overview}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              {t.projects.sections.about}
            </h2>
          </div>

          <p className="text-lg leading-8 text-muted">
            {projectTranslation.description}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              {t.projects.sections.features}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {t.projects.sections.featuresTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projectTranslation.features.map((feature, index) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <span className="text-sm font-medium text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="border-t border-border py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              {t.projects.sections.challenges}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {t.projects.sections.challengesTitle}
            </h2>

            <p className="mt-6 text-base leading-7 text-muted sm:text-lg">
              {t.projects.sections.challengesDescription}{" "}
              {projectTranslation.title}.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {projectTranslation.challenges.map((challenge, index) => (
              <article
                key={challenge.title}
                className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
              >
                <div className="flex flex-col gap-6 sm:flex-row">
                  <span className="text-sm font-medium text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">
                      {challenge.title}
                    </h3>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      <div>
                        <p className="text-sm font-medium">
                          {t.projects.sections.problem}
                        </p>

                        <p className="mt-2 text-sm leading-6 text-muted">
                          {challenge.problem}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm font-medium">
                          {t.projects.sections.approach}
                        </p>

                        <p className="mt-2 text-sm leading-6 text-muted">
                          {challenge.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}