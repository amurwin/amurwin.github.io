"use client";

import { cn } from "@/lib/utils";
import { type ComponentType, type CSSProperties, useEffect, useRef, useState } from "react";

const SPEED_PX_PER_MS: Record<string, number> = {
  fast: 0.05,
  normal: 0.025,
  slow: 0.0125,
};

const DRAG_THRESHOLD = 5;

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    icon: ComponentType<{ style?: CSSProperties; className?: string }>;
    description: string;
    position: string;
    date: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const duplicationFlag = useRef(false);
  const [start, setStart] = useState(false);

  const positionRef = useRef(0);
  const rafRef = useRef<number>(0);
  const isDragging = useRef(false);
  const isPending = useRef(false);
  const isHovered = useRef(false);
  const isMouseDown = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPosition = useRef(0);

  useEffect(() => {
    if (!scrollerRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (!duplicationFlag.current) {
      const children = Array.from(scrollerRef.current.children);
      children.forEach((item) => {
        scrollerRef.current!.appendChild(item.cloneNode(true));
      });
      duplicationFlag.current = true;
    }

    setStart(true);
  }, []);

  useEffect(() => {
    if (!start || !scrollerRef.current) return;

    const el = scrollerRef.current;
    const pxPerMs = SPEED_PX_PER_MS[speed] ?? SPEED_PX_PER_MS.fast;
    const dir = direction === "left" ? 1 : -1;
    let lastTime: number | null = null;

    const tick = (time: number) => {
      const loopWidth = el.scrollWidth / 2;
      // Pause auto-scroll while user is actively selecting text
      const isSelectingText = isMouseDown.current && !!window.getSelection()?.toString();

      if (lastTime !== null && !isDragging.current && !isHovered.current && !isSelectingText) {
        const delta = time - lastTime;
        positionRef.current += pxPerMs * delta * dir;
        if (positionRef.current >= loopWidth) positionRef.current -= loopWidth;
        if (positionRef.current < 0) positionRef.current += loopWidth;
      }

      lastTime = time;
      el.style.transform = `translateX(${-positionRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, speed, direction]);

  const onPointerDown = (e: React.PointerEvent) => {
    isMouseDown.current = true;
    // Don't initiate carousel drag from selectable description text
    const target = e.target as HTMLElement;
    if (target.closest("[data-selectable]")) return;

    isPending.current = true;
    dragStartX.current = e.clientX;
    dragStartPosition.current = positionRef.current;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isPending.current && !isDragging.current) return;
    if (!scrollerRef.current) return;

    const delta = e.clientX - dragStartX.current;

    if (!isDragging.current) {
      if (Math.abs(delta) < DRAG_THRESHOLD) return;
      isDragging.current = true;
      isPending.current = false;
      scrollerRef.current.style.userSelect = "none";
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    }

    const loopWidth = scrollerRef.current.scrollWidth / 2;
    let next = dragStartPosition.current - delta;
    if (next >= loopWidth) next -= loopWidth;
    if (next < 0) next += loopWidth;
    positionRef.current = next;
  };

  const onPointerUp = () => {
    isMouseDown.current = false;
    isDragging.current = false;
    isPending.current = false;
    if (scrollerRef.current) scrollerRef.current.style.userSelect = "";
  };

  return (
    <div
      className={cn(
        "relative z-20 max-w-full overflow-hidden cursor-grab active:cursor-grabbing",
        className,
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onMouseEnter={pauseOnHover ? () => { isHovered.current = true; } : undefined}
      onMouseLeave={pauseOnHover ? () => { isHovered.current = false; } : undefined}
    >
      <ul
        ref={scrollerRef}
        className="flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4"
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-neutral-300 bg-neutral-50/30 px-8 py-6 md:w-[450px] dark:border-neutral-800 dark:bg-neutral-950/30"
            key={idx}
          >
            <p className="flex items-center gap-2 text-2xl font-bold overflow-hidden select-none">
              <item.icon
                className="size-6 shrink-0 text-accent-500"
                aria-hidden="true"
              />
              <span className="truncate">{item.name}</span>
            </p>
            <div className="flex flex-col">
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="flex flex-row select-none">
                <span className="flex flex-col gap-1">
                  <span className="text-sm font-medium">{item.position}</span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">
                    {item.date}
                  </span>
                  <span className="mt-2 text-sm select-text" data-selectable>{item.description}</span>
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
