"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const toggleTheme = () => {
    const next = currentTheme === "dark" ? "light" : "dark";
    setTheme(next ?? "light");
  };

  return (
    <Button
      aria-label="Toggle theme"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-10 w-10 rounded-full p-0"
    >
      {mounted && currentTheme === "dark" ? (
        <SunMedium className="h-5 w-5" />
      ) : (
        <MoonStar className="h-5 w-5" />
      )}
    </Button>
  );
}
