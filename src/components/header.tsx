"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/#contact-form", label: "Contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-foreground">
      <svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 4L14 44H18L20.5 35L27.5 35L30 44H34L24 4ZM21.5 29L24 14.5L26.5 29H21.5Z"
          fill="currentColor"
        />
        <path d="M21 4H27V9H21V4Z" fill="currentColor" />
      </svg>
      <span className="font-bold text-lg tracking-wider">IRON LADY</span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white ">
      <nav
        className="flex items-center justify-between p-6 lg:px-8  "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-m-2.5">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex items-center justify-between mb-8">
                <Logo />
              </div>
              <div className="grid gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-lg font-semibold transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-primary"
                        : "text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors hover:text-[#ec2776]/80",
                pathname === item.href ? "text-[#ec2776]" : "text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            asChild
            className="bg-[linear-gradient(90deg,rgba(250,10,182,1)_0%,rgba(168,74,186,1)_84%,rgba(113,121,217,1)_100%)]
    text-white"
          >
            <Link href="/#contact-form">Start Your Journey</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
