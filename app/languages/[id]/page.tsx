import { db } from "@/db";
import { languages } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { NextPage } from "next";

interface LanguagePageProps {
  params: { id: string };
}

const LanguagePage: NextPage<LanguagePageProps> = async ({ params }) => {
  const language = await db
    .select()
    .from(languages)
    .where(eq(languages.id, params.id))
    .limit(1);

  if (!language.length) {
    notFound();
  }

  const lang = language[0];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">{lang.name}</h1>
      <p>{lang.description || "No description provided."}</p>
      <p>
        <strong>Writing System:</strong> {lang.writingSystem}
      </p>
      <p>
        <strong>Word Order:</strong> {lang.wordOrder}
      </p>
      <p>
        <strong>Has Gender:</strong> {lang.hasGender ? "Yes" : "No"}
      </p>
      <p>
        <strong>Has Cases:</strong> {lang.hasCases ? "Yes" : "No"}
      </p>
      <p>
        <strong>Has Tones:</strong> {lang.hasTones ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default LanguagePage;
