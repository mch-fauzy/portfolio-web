import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/container/container";
import { Button } from "@/components/ui/button";
import { heroMetrics } from "@/lib/portfolio-data";

const profileImage = {
  src: "/images/muchamad-fauzy.jpg",
  width: 500,
  height: 500,
  alt: "Portrait of Muchamad Fauzy",
};

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <Container className="flex flex-col gap-16 py-20 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Software Engineer · Backend & Platform
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Building reliable systems that keep operations moving.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Hi, I’m Muchamad Fauzy — a backend-leaning software engineer based in Surabaya. I collaborate with product and operations teams to ship resilient APIs, integrate external services, and translate business rules into dependable software. From port automation to project monitoring suites, I focus on giving operators real-time confidence in the systems they rely on.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              variant="default"
              className="rounded-full px-6 shadow-[0_12px_40px_-15px_rgba(82,118,234,0.7)]"
            >
              <Link href="#contact">
                Let’s collaborate
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-border/80 bg-background/80 px-6 text-sm font-medium transition hover:border-accent hover:text-accent"
            >
              <Link href="https://github.com/mch-fauzy" target="_blank" rel="noreferrer">
                View GitHub
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-[36px] border border-border/70 bg-gradient-to-br from-muted/40 to-background shadow-xl">
            <Image
              src={profileImage.src}
              alt={profileImage.alt}
              width={profileImage.width}
              height={profileImage.height}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-border/70 bg-card/70 px-5 py-4 text-sm backdrop-blur"
              >
                <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
                <p className="mt-1 font-medium text-muted-foreground">{metric.label}</p>
                <p className="mt-2 text-xs text-muted-foreground/80">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
