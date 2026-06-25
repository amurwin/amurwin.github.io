"use client";

import { type ComponentType, type CSSProperties } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";

export function CardCarousel({
  items,
}: {
  items: {
    name: string;
    icon: ComponentType<{ style?: CSSProperties; className?: string }>;
    description: string;
    position: string;
    date: string;
  }[];
}) {
  return (
    <div className="w-full">
      <Carousel opts={{ align: "start", watchDrag: false }}>
        <CarouselContent className="-ml-4">
          {items.map((item, idx) => (
            <CarouselItem
              key={idx}
              className="pl-4 basis-[350px] md:basis-[450px]"
            >
              <div className="h-full rounded-2xl border border-neutral-300 bg-neutral-50/30 px-8 py-6 dark:border-neutral-800 dark:bg-neutral-950/30">
                <p className="flex items-center gap-2 text-2xl font-bold overflow-hidden">
                  <item.icon
                    className="size-6 shrink-0 text-accent-500"
                    aria-hidden="true"
                  />
                  <span className="truncate">{item.name}</span>
                </p>
                <div className="mt-1 flex flex-col gap-1">
                  <span className="text-sm font-medium">{item.position}</span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">
                    {item.date}
                  </span>
                  <span className="mt-2 text-sm">{item.description}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-6 flex gap-2">
          <CarouselPrevious className="static translate-x-0 translate-y-0" />
          <CarouselNext className="static translate-x-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
}
