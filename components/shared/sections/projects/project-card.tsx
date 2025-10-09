'use client';

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useMemo } from "react";
import type { ProjectItem } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCarousel } from "@/components/shared/sections/projects/project-carousel";

interface ProjectCardProps {
  readonly project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const mediaItems = useMemo(() => {
    return project.galleries ?? [];
  }, [project.galleries]);

  const initials = useMemo(() => {
    const letters = project.name
      .split(" ")
      .filter(Boolean)
      .map((word) => word[0]?.toUpperCase())
      .join("");
    return letters.slice(0, 2);
  }, [project.name]);

  return (
    <Card className="flex h-full flex-col overflow-hidden border-border/70 bg-card/80 shadow-sm">
      <ProjectCarousel mediaItems={mediaItems} initials={initials} />
      <CardHeader className="space-y-3">
        <CardTitle className="text-2xl">{project.name}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-5 p-6 pt-0">
        <div className="rounded-2xl border border-border/60 bg-background/60 p-4 text-sm leading-relaxed text-muted-foreground">
          {project.impact}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Badge key={item} variant="outline">
              {item}
            </Badge>
          ))}
        </div>
        {project.href ? (
          <Button asChild variant="outline" className="group mt-auto w-fit gap-2">
            <Link href={project.href} target="_blank" rel="noreferrer">
              View demo
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}
