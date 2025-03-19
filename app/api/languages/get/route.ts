import { db } from "@/db";
import { languages } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: Request) {
  try {
    const allLanguages = await db.select().from(languages);

    return Response.json(allLanguages, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch languages" },
      { status: 400 }
    );
  }
}
