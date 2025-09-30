"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container/container";
import { ThemeToggle } from "@/components/shared/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import type { SiteHeaderProps } from "@/types/components";

export function SiteHeader({ brandName }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleNavigate = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="#hero" className="font-semibold tracking-tight">
          {brandName}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle navigation"
            onClick={handleToggle}
            className="h-10 w-10 rounded-full p-0 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </Container>
      <div className={cn("md:hidden", { block: open, hidden: !open })}>
        <Container className="flex flex-col gap-3 border-t border-border/60 py-4 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-1 text-muted-foreground transition hover:text-foreground"
              onClick={handleNavigate}
            >
              {item.label}
            </Link>
          ))}
        </Container>
      </div>
    </header>
  );
}
