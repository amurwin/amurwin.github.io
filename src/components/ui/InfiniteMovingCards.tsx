"use client";

import { cn } from "@/lib/utils";
import { type ComponentType, type CSSProperties, useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    icon: ComponentType<{
      style?: CSSProperties;
      className?: string;
    }>;
    description: string;
    position: string;
    date: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const duplicationFlag = useRef(false); // Persist duplication flag across re-renders

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      // Prevent duplicating items multiple times
      if (!duplicationFlag.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
        duplicationFlag.current = true; // Set the flag to true after duplication
      }

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-full overflow-hidden",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-neutral-300 bg-neutral-50/30 px-8 py-6 md:w-[450px] dark:border-neutral-800 dark:bg-neutral-950/30"
            key={idx}
          >
            <h2 className="flex flex-wrap items-center text-2xl font-bold">
              <span className="inline-flex items-center whitespace-nowrap">
                <item.icon
                  style={{ width: "1em", height: "1em" }}
                  className="mr-2 text-accent-500"
                />
                {item.name}
              </span>
            </h2>
            <blockquote className="flex flex-col">
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="flex flex-row">
                <span className="flex flex-col gap-1">
                  <span className="text-sm font-medium">{item.position}</span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">
                    {item.date}
                  </span>
                  <span className="mt-2 text-sm">{item.description}</span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
