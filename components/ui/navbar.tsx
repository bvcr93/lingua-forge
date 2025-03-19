import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-2 items-center text-xl font-bold">
          <Languages className="h-6 w-6" />
          <Link href={"/"}>LinguaForge</Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href="#features"
              className="px-4 py-2 text-sm font-medium hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="px-4 py-2 text-sm font-medium hover:text-primary"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="px-4 py-2 text-sm font-medium hover:text-primary"
            >
              Pricing
            </Link>
            <Button asChild className="ml-4">
              <Link href="/language">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
