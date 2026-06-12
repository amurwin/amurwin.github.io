"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Palette } from "lucide-react";

const themes = [
  { name: "Red", value: "red" },
  { name: "Green", value: "green" },
  { name: "Blue", value: "blue" },
  { name: "Purple", value: "purple" },
] as const;

type ThemeValue = (typeof themes)[number]["value"];

export function ThemeColorToggle() {
  const [theme, setTheme] = useState<ThemeValue>("blue");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("color-theme") as ThemeValue | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
    }
  }, []);

  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScroll && window.scrollY > 10) setOpen(false);
      lastScroll = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const applyTheme = (value: ThemeValue) => {
    setTheme(value);
    localStorage.setItem("color-theme", value);
    document.documentElement.setAttribute("data-theme", value);
  };

  return (
    <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.15)]/30 text-white hover:bg-[rgba(255,255,255,0.15)]/50 hover:text-white"
        >
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change color theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.value}
            onClick={() => applyTheme(t.value)}
            className="cursor-pointer"
          >
            {t.name}
            {theme === t.value && (
              <span className="ml-auto text-xs opacity-60">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
