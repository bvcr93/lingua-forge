import { db } from "@/db";
import { languages } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

export default async function LanguagesPage() {
  const allLanguages = await db.select().from(languages);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">All Languages</h1>

      {allLanguages.length === 0 ? (
        <p className="text-gray-500">No languages found.</p>
      ) : (
        <ul className="space-y-2">
          {allLanguages.map((lang) => (
            <li
              key={lang.id}
              className="border p-4 rounded-md hover:bg-gray-100 transition"
            >
              <Link
                href={`/languages/${lang.id}`}
                className="text-lg font-semibold text-blue-600 hover:underline"
              >
                {lang.name}
              </Link>
              <p className="text-sm text-gray-500">
                {lang.description || "No description available."}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
