import { Monitor, Server, Sparkles, Workflow } from "lucide-react";
import { Container } from "@/components/shared/container/container";
import { SectionBadge } from "@/components/shared/sections/section-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/portfolio-data";
import { JSX } from "react";

const iconByCategory: Record<string, JSX.Element> = {
  "Backend": <Server className="h-5 w-5" />,
  "Frontend": <Monitor className="h-5 w-5" />,
  "DevOps & Tooling": <Workflow className="h-5 w-5" />,
  "Practices": <Sparkles className="h-5 w-5" />,
};

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border/60 bg-background">
      <Container className="flex flex-col gap-12 py-20">
        <SectionBadge
          eyebrow="Skills"
          title="Technical range"
          description="The tools and practices I lean on to ship production-ready software."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <Card key={group.category} className="border-border/60 bg-card/70">
              <CardHeader className="flex flex-row items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  {iconByCategory[group.category] ?? <Sparkles className="h-5 w-5" />}
                </span>
                <CardTitle className="text-lg font-semibold">{group.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="rounded-full border-border/70 bg-background/80 px-3 py-1 text-xs font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
