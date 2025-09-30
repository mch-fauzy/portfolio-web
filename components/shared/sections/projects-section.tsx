import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/container/container";
import { SectionBadge } from "@/components/shared/sections/section-badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/lib/portfolio-data";

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
            <Card key={project.name} className="flex h-full flex-col justify-between">
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl">{project.name}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{project.impact}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
                {project.href ? (
                  <Button asChild variant="outline" className="group w-fit gap-2">
                    <Link href={project.href} target="_blank" rel="noreferrer">
                      View demo
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
