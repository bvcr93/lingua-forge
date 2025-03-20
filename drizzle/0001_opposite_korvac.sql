ALTER TABLE "languages" ADD COLUMN "writing_system" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "languages" ADD COLUMN "word_order" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "languages" ADD COLUMN "has_gender" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "languages" ADD COLUMN "has_cases" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "languages" ADD COLUMN "has_tones" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "languages" ADD COLUMN "inspiration" text;--> statement-breakpoint
ALTER TABLE "phonologies" ADD COLUMN "consonant_categories" text;--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "sample_words" text;