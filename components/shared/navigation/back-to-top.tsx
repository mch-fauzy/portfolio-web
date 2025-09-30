"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BackToTopProps {
  readonly threshold?: number;
}

export function BackToTop({ threshold = 320 }: BackToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      type="button"
      aria-label="Back to top"
      variant="ghost"
      size="icon"
      onClick={handleClick}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border",
        "border-black text-black dark:border-white dark:text-white",
        "bg-background/95 shadow-md shadow-black/10 dark:shadow-white/10",
        "transition-all duration-200 hover:bg-background",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        visible ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="h-4 w-4" />
      <span className="sr-only">Back to top</span>
    </Button>
  );
}
