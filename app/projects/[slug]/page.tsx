import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectScreenshots from "@/components/projects/ProjectScreenshots";
import ProjectDetails from "@/components/projects/ProjectDetails";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHero project={project} />

      <main>
        
        <ProjectDetails project={project} />

        <ProjectScreenshots project={project} />
      </main>
    </>
  );
}