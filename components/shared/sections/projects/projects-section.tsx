import { Container } from "@/components/shared/container/container";
import { SectionBadge } from "@/components/shared/sections/section-badge";
import { featuredProjects } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/shared/sections/projects/project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border/60 bg-background/70">
      <Container className="flex flex-col gap-12 py-20">
        <SectionBadge
          eyebrow="Projects"
          title="Featured work"
          description="A selection of product launches and experiments that highlight architecture decisions, integration depth, and UI polish."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
