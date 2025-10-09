'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ProjectMedia } from "@/types/portfolio";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
  readonly mediaItems: readonly ProjectMedia[];
  readonly initials: string;
}

const CAROUSEL_AUTOPLAY_DELAY_MS = 5000;

export function ProjectCarousel({ mediaItems, initials }: ProjectCarouselProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMedia = mediaItems.length > 0;

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const handleSelect = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };

    handleSelect();
    carouselApi.on("select", handleSelect);

    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    carouselApi.scrollTo(0);
    setActiveIndex(0);
  }, [carouselApi, mediaItems.length]);

  useEffect(() => {
    if (!carouselApi || mediaItems.length <= 1) {
      return;
    }

    const id = window.setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, CAROUSEL_AUTOPLAY_DELAY_MS);

    return () => {
      window.clearInterval(id);
    };
  }, [carouselApi, mediaItems.length]);

  if (!hasMedia) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border/70 bg-gradient-to-br from-muted/60 via-muted/30 to-background">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-semibold tracking-widest text-muted-foreground/80">
            {initials}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative border-b border-border/70">
      <Carousel
        className="group"
        setApi={setCarouselApi}
        opts={{ loop: true, align: "start" }}
      >
        <CarouselContent className="h-full">
          {mediaItems.map((item) => (
            <CarouselItem key={item.src} className="h-full basis-full">
              <div className="relative aspect-[16/9] overflow-hidden bg-muted/30">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 520px, (min-width: 768px) 45vw, 90vw"
                  priority={item.priority}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/15 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {mediaItems.length > 1 ? (
          <>
            <CarouselPrevious
              variant="ghost"
              size="icon"
              className="left-2 rounded-full border border-white/40 bg-[#1f2937e6] text-white shadow-lg shadow-black/50 backdrop-blur-sm transition focus-visible:ring-2 focus-visible:ring-white/70"
            />
            <CarouselNext
              variant="ghost"
              size="icon"
              className="right-2 rounded-full border border-white/40 bg-[#1f2937e6] text-white shadow-lg shadow-black/50 backdrop-blur-sm transition focus-visible:ring-2 focus-visible:ring-white/70"
            />
          </>
        ) : null}
      </Carousel>
      {mediaItems.length > 1 ? (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/40 bg-black/75 px-5 py-1.5 shadow shadow-black/50 backdrop-blur-sm">
          {mediaItems.map((item, index) => (
            <span
              key={item.src}
              className={cn(
                "h-2.5 w-2.5 rounded-full border transition-all",
                index === activeIndex
                  ? "border-white bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.45)]"
                  : "border-white/60 bg-white/30"
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
