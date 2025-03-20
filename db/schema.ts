import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  primaryKey,
  varchar,
  uuid,
  timestamp,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
export const languages = pgTable("languages", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .references(() => users.id), // Remove `notNull()` to make it optional
  name: varchar("name", { length: 100 }).notNull(),
  description: text("description"),
  writingSystem: varchar("writing_system", { length: 50 }).notNull(),
  wordOrder: varchar("word_order", { length: 50 }).notNull(),
  hasGender: boolean("has_gender").default(false),
  hasCases: boolean("has_cases").default(false),
  hasTones: boolean("has_tones").default(false),
  inspiration: text("inspiration"),
  createdAt: timestamp("created_at").defaultNow(),
});


export const phonologies = pgTable("phonologies", {
  id: uuid("id").defaultRandom().primaryKey(),
  languageId: uuid("language_id")
    .notNull()
    .references(() => languages.id),
  consonants: text("consonants"), 
  consonantCategories: text("consonant_categories"),
  vowels: text("vowels"), 
  syllableStructure: text("syllable_structure"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const words = pgTable("words", {
  id: uuid("id").defaultRandom().primaryKey(),
  languageId: uuid("language_id")
    .notNull()
    .references(() => languages.id),
  word: varchar("word", { length: 255 }).notNull(),
  meaning: text("meaning").notNull(),
  pronunciation: text("pronunciation"),
  partOfSpeech: varchar("part_of_speech", { length: 50 }),
  notes: text("notes"),
  sampleWords: text("sample_words"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const grammarRules = pgTable("grammar_rules", {
  id: uuid("id").defaultRandom().primaryKey(),
  languageId: uuid("language_id")
    .notNull()
    .references(() => languages.id),
  rule: text("rule").notNull(),
  example: text("example"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const translations = pgTable("translations", {
  id: uuid("id").defaultRandom().primaryKey(),
  languageId: uuid("language_id")
    .notNull()
    .references(() => languages.id),
  originalText: text("original_text").notNull(),
  translatedText: text("translated_text").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
});
