// src/app/actions/language-actions.ts
"use server";

import { z } from "zod";
import { db } from "@/db";
import { languages, phonologies, words } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";
import { redirect } from "next/navigation";

// Use the same schema as in your form
const languageFormSchema = z.object({
  name: z.string().min(2).max(50),
  purpose: z.string(),
  description: z.string().max(500).optional(),
  inspiration: z.array(z.string()).optional(),
  writingSystem: z.string(),
  wordOrder: z.string(),
  consonantCategories: z.array(z.string()),
  vowelInventory: z.string().optional(),
  syllableStructure: z.string().optional(),
  hasGender: z.boolean().default(false),
  hasCases: z.boolean().default(false),
  hasTones: z.boolean().default(false),
  sampleWords: z.string().optional(),
});

export async function createLanguage(
    formData: FormData | z.infer<typeof languageFormSchema>
  ) {
    // Parse form data if it's a FormData object
    const data =
      formData instanceof FormData
        ? languageFormSchema.parse(Object.fromEntries(formData.entries()))
        : languageFormSchema.parse(formData);
  
    // Create a new language ID
    const languageId = uuidv4();
  
    try {
      // Insert language data (REMOVE userId)
      await db.insert(languages).values({
        id: languageId,
        name: data.name,
        description: data.description || null,
        writingSystem: data.writingSystem,
        wordOrder: data.wordOrder,
        hasGender: data.hasGender,
        hasCases: data.hasCases,
        hasTones: data.hasTones,
        inspiration: data.inspiration ? data.inspiration.join(", ") : null,
      });
  
      // Insert phonology data
      await db.insert(phonologies).values({
        id: uuidv4(),
        languageId: languageId,
        consonants: data.consonantCategories.join(", "),
        consonantCategories: data.consonantCategories.join(", "),
        vowels: data.vowelInventory || null,
        syllableStructure: data.syllableStructure || null,
      });
  
      // Insert sample words if provided
      if (data.sampleWords) {
        const wordsList = data.sampleWords
          .split("\n")
          .filter((line) => line.trim() !== "");
  
        for (const wordEntry of wordsList) {
          const [word, meaning] = wordEntry.split("-").map((part) => part.trim());
  
          if (word && meaning) {
            await db.insert(words).values({
              id: uuidv4(),
              languageId: languageId,
              word: word,
              meaning: meaning,
              pronunciation: null,
              partOfSpeech: null,
              notes: null,
              sampleWords: null,
            });
          }
        }
      }
  
      // Revalidate the dashboard page
      revalidatePath("/dashboard");
  
      return { success: true, languageId };
    } catch (error) {
      console.error("Error creating language:", error);
      return { success: false, error: "Failed to create language" };
    }
  }
  
