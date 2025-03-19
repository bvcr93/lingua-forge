import { db } from "@/db";
import { languages } from "@/db/schema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      userId,
      name,
      description,
      writingSystem,
      wordOrder,
      hasGender,
      hasCases,
      hasTones,
      inspiration,
    } = await req.json();

    if (!userId || !name || !writingSystem || !wordOrder) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const [newLanguage] = await db
      .insert(languages)
      .values({
        userId,
        name,
        description,
        writingSystem,
        wordOrder,
        hasGender: hasGender ?? false,
        hasCases: hasCases ?? false,
        hasTones: hasTones ?? false,
        inspiration: inspiration || null,
      })
      .returning();

    return NextResponse.json(newLanguage, { status: 201 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to create language" },
      { status: 500 }
    );
  }
}
