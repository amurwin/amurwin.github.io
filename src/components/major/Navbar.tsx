"use client";

import { type MouseEvent, useEffect, useRef, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";
import { ModeToggle } from "../next/ModeToggle";
import { ThemeColorToggle } from "../next/ThemeColorToggle";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/Drawer";
import { Button } from "../ui/Button";
import { IconMenu2 } from "@tabler/icons-react";
import { BadgeCheck } from "lucide-react";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Skills", id: "skills" },
];

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const lastScroll = useRef(0);
  const [scrollToId, setScrollToId] = useState<string | null>(null);

  // scroll to the section with the given id
  useEffect(() => {
    if (!scrollToId) return;

    const el = document.getElementById(scrollToId);
    if (el) {
      // Short delay to allow the drawer to start its closing animation
      // and for the webview to process the UI change.
      setTimeout(() => {
        const y = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: "smooth" });

        // Logic to hide navbar after scrolling, if not scrolling to home
        if (scrollToId !== "home") {
          setTimeout(() => {
            setShow(false);
          }, 800);
        }

        // Reset the state for the next click
        setScrollToId(null);
      }, 150);
    } else {
      setScrollToId(null); // Reset if element isn't found
    }
  }, [scrollToId]);

  // Click handler for navigation items
  const handleNavClick = (e: MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    setDrawerOpen(false);
    setScrollToId(id);
  };

  // scroll event listener to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (pageHeight - scrollPosition <= 100) {
        setShow(true);
        lastScroll.current = currentScroll;
        return;
      }
      if (currentScroll < 10) {
        setShow(true);
        lastScroll.current = currentScroll;
        return;
      }
      if (currentScroll < lastScroll.current) {
        setShow(true);
      } else if (currentScroll > lastScroll.current) {
        setShow(false);
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ willChange: "transform" }}
    >
      <div className="bg-opacity-90 w-full bg-accent-500 py-2 shadow-md backdrop-blur-md">
        <div className="container mx-auto flex max-w-[90rem] justify-between px-5 md:px-10 lg:px-20">
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <span>Andrew Murwin</span>
            <BadgeCheck className="h-6 w-6" />
          </div>
          <div className="flex">
            <NavigationMenu className="hidden text-white lg:flex">
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      asChild
                      className={
                        navigationMenuTriggerStyle() +
                        " bg-transparent transition-none"
                      }
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleNavClick(e, item.id)}
                      >
                        {item.name}
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Drawer
              open={drawerOpen}
              onOpenChange={setDrawerOpen}
              modal={false}
            >
              <DrawerTrigger asChild className="lg:hidden">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="cursor-pointer border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.15)]/30 text-white hover:bg-[rgba(255,255,255,0.15)]/50 hover:text-white"
                >
                  <IconMenu2 />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="hidden">Menu</DrawerTitle>
                </DrawerHeader>

                <div className="px-4 pb-4">
                  {menuItems.map((item) => (
                    <div key={item.name} className="px-2 py-2 text-xl">
                      <button
                        type="button"
                        onClick={(e) => handleNavClick(e, item.id)}
                        className="w-full cursor-pointer border-none bg-transparent p-0 text-left"
                      >
                        {item.name}
                      </button>
                    </div>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
            <div className="flex gap-2 pl-2 lg:pl-5">
              <ThemeColorToggle />
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
