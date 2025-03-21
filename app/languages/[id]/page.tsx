import { db } from "@/db";
import { languages } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, Book, Type, ListOrdered, AlignJustify } from "lucide-react";

export default async function LanguagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const language = await db
    .select()
    .from(languages)
    .where(eq(languages.id, id));

  if (!language.length) {
    notFound();
  }

  const lang = language[0];

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="rounded-t-lg">
          <CardTitle className="text-3xl font-bold">{lang.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* Description Section */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
              <Info size={20} />
              <span>About this Language</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {lang.description || "No description provided."}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold mb-4">Linguistic Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Writing System */}
              <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                <Type className="text-indigo-600 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-medium text-gray-900">Writing System</h3>
                  <p className="text-gray-700">{lang.writingSystem}</p>
                </div>
              </div>

              {/* Word Order */}
              <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                <ListOrdered className="text-indigo-600 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-medium text-gray-900">Word Order</h3>
                  <p className="text-gray-700">{lang.wordOrder}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grammatical Features */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <AlignJustify size={20} />
              <span>Grammatical Features</span>
            </h2>

            <div className="flex flex-wrap gap-3">
              <FeatureBadge feature="Gender" value={lang.hasGender} />
              <FeatureBadge feature="Cases" value={lang.hasCases} />
              <FeatureBadge feature="Tones" value={lang.hasTones} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function FeatureBadge({
  feature,
  value,
}: {
  feature: string;
  value: boolean | null | undefined;
}) {
  const isPresent = !!value;

  return (
    <Badge
      className={`py-1 px-3 ${
        isPresent
          ? "bg-green-100 text-green-800 hover:bg-green-200"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      {feature}: {isPresent ? "Yes" : "No"}
    </Badge>
  );
}
