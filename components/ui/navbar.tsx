"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <Languages className="h-6 w-6" />
          <Link href="/" className="hover:text-primary transition-colors">
            LinguaForge
          </Link>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="/language">Get Started</Link>
          </Button>
        </nav>
        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[260px] p-0">
              <SheetHeader className="p-4 border-b">
                <SheetTitle>
                  <div className="flex items-center gap-2 text-lg font-bold">
                    <Languages className="h-5 w-5" />
                    LinguaForge
                  </div>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-2 w-full">
                  <Link href="/language">Get Started</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
