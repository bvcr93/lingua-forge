import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config();

export default defineConfig({
  schema: "./db/schema.ts", // Adjust if necessary
  out: "./drizzle", // Directory for migrations
  dialect: "postgresql",
  dbCredentials: {
    host: "ep-wandering-field-a58vuay0-pooler.us-east-2.aws.neon.tech", // Extracted from DATABASE_URL
    database: "neondb",
    user: "neondb_owner",
    password: "npg_svg15waIhEnM", // Be careful storing passwords in code, use env vars
    ssl: "require", // Required for NeonDB
  },
});
