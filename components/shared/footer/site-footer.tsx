import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/shared/container/container";
import { socialLinks } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import type { SiteFooterProps } from "@/types/components";

export function SiteFooter({ brandName }: SiteFooterProps) {
  return (
    <footer className="border-t border-border/60 bg-background/60">
      <Container className="flex flex-col gap-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-foreground">{brandName}</p>
          <p>© {new Date().getFullYear()} Crafted with Next.js, Tailwind CSS, and shadcn UI.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                target={link.target}
                rel={link.rel}
                aria-label={link.label}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "text-muted-foreground"
                )}
              >
                <Image
                  src={link.icon}
                  alt=""
                  width={20}
                  height={20}
                  sizes="20px"
                  aria-hidden="true"
                  className="h-5 w-5 dark:invert hover:opacity-50"
                />
              </Link>
            );
          })}
        </div>
      </Container>
    </footer>
  );
}
