import { db } from "@/db";
import { languages } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function LanguagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Await params if Next.js provides it as a Promise

  const language = await db
    .select()
    .from(languages)
    .where(eq(languages.id, id))
    .limit(1);

  if (!language.length) {
    notFound();
  }

  const lang = language[0];

  return (
    <div>
      <h1>{lang.name}</h1>
      <p>{lang.description || "No description provided."}</p>
      <p>Writing System: {lang.writingSystem}</p>
      <p>Word Order: {lang.wordOrder}</p>
      <p>Has Gender: {lang.hasGender ? "Yes" : "No"}</p>
      <p>Has Cases: {lang.hasCases ? "Yes" : "No"}</p>
      <p>Has Tones: {lang.hasTones ? "Yes" : "No"}</p>
    </div>
  );
}
