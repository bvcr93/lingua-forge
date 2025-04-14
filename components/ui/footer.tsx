import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} LinguaForge. All rights reserved.
        </p>
        <nav className="mt-4 flex justify-center space-x-4">
          <Link href="/privacy" className="text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm hover:underline">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-sm hover:underline">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
}
