import type React from "react";
import "@/app/globals.css";
import Navbar from "@/components/ui/navbar";

export const metadata = {
  title: "LinguaForge - Create Fictional Languages with Ease",
  description:
    "The complete toolkit for writers and worldbuilders to craft authentic constructed languages from scratch.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
