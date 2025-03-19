"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  Info,
  Languages,
  Plus,
  Save
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const languagePurposes = [
  { label: "Fiction/Novel", value: "fiction" },
  { label: "Game Development", value: "game" },
  { label: "Worldbuilding", value: "worldbuilding" },
  { label: "Linguistic Experiment", value: "experiment" },
  { label: "Academic Research", value: "academic" },
  { label: "Personal Project", value: "personal" },
] as const;

const writingSystems = [
  { label: "Alphabet (like Latin, Cyrillic)", value: "alphabet" },
  { label: "Abjad (like Arabic, Hebrew)", value: "abjad" },
  { label: "Abugida (like Devanagari, Ethiopic)", value: "abugida" },
  { label: "Syllabary (like Japanese Hiragana)", value: "syllabary" },
  { label: "Logographic (like Chinese characters)", value: "logographic" },
  { label: "Mixed System", value: "mixed" },
] as const;

const wordOrders = [
  { label: "Subject-Verb-Object (SVO)", value: "svo" },
  { label: "Subject-Object-Verb (SOV)", value: "sov" },
  { label: "Verb-Subject-Object (VSO)", value: "vso" },
  { label: "Verb-Object-Subject (VOS)", value: "vos" },
  { label: "Object-Subject-Verb (OSV)", value: "osv" },
  { label: "Object-Verb-Subject (OVS)", value: "ovs" },
  { label: "Free Word Order", value: "free" },
] as const;

const consonantCategories = [
  { label: "Plosives (p, b, t, d, k, g)", value: "plosives" },
  { label: "Nasals (m, n, ŋ)", value: "nasals" },
  { label: "Fricatives (f, v, s, z, ʃ, ʒ)", value: "fricatives" },
  { label: "Affricates (tʃ, dʒ)", value: "affricates" },
  { label: "Approximants (w, j, l, r)", value: "approximants" },
  { label: "Clicks (ǀ, ǃ, ǂ)", value: "clicks" },
  { label: "Ejectives (p', t', k')", value: "ejectives" },
  { label: "Implosives (ɓ, ɗ, ɠ)", value: "implosives" },
] as const;

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Language name must be at least 2 characters.",
    })
    .max(50),
  purpose: z.string(),
  description: z
    .string()
    .max(500, {
      message: "Description must not exceed 500 characters.",
    })
    .optional(),
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

type FormValues = z.infer<typeof formSchema>;

export default function CreateLanguagePage() {
  const router = useRouter();
  const [inspirationInput, setInspirationInput] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      purpose: "",
      description: "",
      inspiration: [],
      writingSystem: "",
      wordOrder: "",
      consonantCategories: [],
      vowelInventory: "",
      syllableStructure: "CV(C)",
      hasGender: false,
      hasCases: false,
      hasTones: false,
      sampleWords: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    // In a real app, this would save the language to a database
    // For now, we'll just show a success message and redirect
    alert("Language created successfully!");
    router.push("/dashboard");
  }

  const addInspiration = () => {
    if (!inspirationInput.trim()) return;

    const currentInspirations = form.getValues("inspiration") || [];
    if (!currentInspirations.includes(inspirationInput)) {
      form.setValue("inspiration", [...currentInspirations, inspirationInput]);
    }
    setInspirationInput("");
  };

  const removeInspiration = (inspiration: string) => {
    const currentInspirations = form.getValues("inspiration") || [];
    form.setValue(
      "inspiration",
      currentInspirations.filter((item) => item !== inspiration)
    );
  };

  return (
    <div className="container mx-auto max-w-5xl py-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Create New Language</h1>
        </div>
        <div className="flex items-center gap-2">
          <Languages className="h-6 w-6" />
          <span className="text-xl font-bold">LinguaForge</span>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Tabs defaultValue="basics" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="basics">Basics</TabsTrigger>
              <TabsTrigger value="phonology">Phonology</TabsTrigger>
              <TabsTrigger value="grammar">Grammar</TabsTrigger>
              <TabsTrigger value="vocabulary">Vocabulary</TabsTrigger>
            </TabsList>

            <TabsContent value="basics" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Language Basics</CardTitle>
                  <CardDescription>
                    Define the fundamental properties of your constructed
                    language.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Language Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. Elvish, Klingon, Dothraki"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          The name of your constructed language.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="purpose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Primary Purpose</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select the primary purpose" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {languagePurposes.map((purpose) => (
                              <SelectItem
                                key={purpose.value}
                                value={purpose.value}
                              >
                                {purpose.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          What is the main purpose of this language?
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your language and its cultural context..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Provide a brief description of your language and its
                          cultural context.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-2">
                    <FormLabel>Inspirations</FormLabel>
                    <div className="flex gap-2">
                      <Input
                        placeholder="e.g. Finnish, Arabic, Latin"
                        value={inspirationInput}
                        onChange={(e) => setInspirationInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addInspiration();
                          }
                        }}
                      />
                      <Button
                        type="button"
                        onClick={addInspiration}
                        size="icon"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <FormDescription>
                      Add natural languages that inspire your constructed
                      language.
                    </FormDescription>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {form.watch("inspiration")?.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-sm"
                        >
                          <span>{item}</span>
                          <button
                            type="button"
                            onClick={() => removeInspiration(item)}
                            className="ml-1 rounded-full p-1 hover:bg-muted"
                          >
                            <span className="sr-only">Remove</span>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 3L3 9M3 3L9 9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="writingSystem"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Writing System</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a writing system" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {writingSystems.map((system) => (
                              <SelectItem
                                key={system.value}
                                value={system.value}
                              >
                                {system.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          How will your language be written?
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="phonology" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Phonology</CardTitle>
                  <CardDescription>
                    Define the sound system of your language.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="consonantCategories"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel className="text-base">
                            Consonant Categories
                          </FormLabel>
                          <FormDescription>
                            Select the consonant sound categories your language
                            will use.
                          </FormDescription>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          {consonantCategories.map((item) => (
                            <FormField
                              key={item.value}
                              control={form.control}
                              name="consonantCategories"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.value}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(
                                          item.value
                                        )}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                                ...field.value,
                                                item.value,
                                              ])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) =>
                                                    value !== item.value
                                                )
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Separator />

                  <FormField
                    control={form.control}
                    name="vowelInventory"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vowel Inventory</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g. a, e, i, o, u, ə, ɑ"
                            className="min-h-[80px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          List the vowel sounds in your language, separated by
                          commas.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="syllableStructure"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center gap-2">
                          <FormLabel>Syllable Structure</FormLabel>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="h-4 w-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-[300px]">
                                <p>
                                  Use C for consonant, V for vowel. Parentheses
                                  () indicate optional elements.
                                </p>
                                <p className="mt-2">Examples:</p>
                                <ul className="ml-4 list-disc">
                                  <li>CV - Simple syllables like "ma", "to"</li>
                                  <li>CVC - Syllables like "cat", "dog"</li>
                                  <li>
                                    CV(C) - Syllables can end with optional
                                    consonant
                                  </li>
                                  <li>
                                    (C)V(C) - Syllables can start and end with
                                    optional consonants
                                  </li>
                                </ul>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>
                          Define the structure of syllables in your language.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hasTones"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Tonal Language</FormLabel>
                          <FormDescription>
                            Does your language use tones to distinguish meaning
                            (like Mandarin Chinese or Vietnamese)?
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="grammar" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Grammar</CardTitle>
                  <CardDescription>
                    Define the grammatical rules of your language.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="wordOrder"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Basic Word Order</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select word order" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {wordOrders.map((order) => (
                              <SelectItem key={order.value} value={order.value}>
                                {order.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          The typical order of subject, verb, and object in
                          sentences.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="hasGender"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Grammatical Gender</FormLabel>
                            <FormDescription>
                              Does your language use grammatical gender (like
                              masculine/feminine in Spanish or French)?
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="hasCases"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Case System</FormLabel>
                            <FormDescription>
                              Does your language use grammatical cases (like
                              nominative/accusative in Latin or Finnish)?
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="vocabulary" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Initial Vocabulary</CardTitle>
                  <CardDescription>
                    Start building your language's vocabulary.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="sampleWords"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sample Words</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter some initial words for your language, one per line. Format: word - meaning (e.g. 'kel - water')"
                            className="min-h-[200px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Add some initial vocabulary to your language. This
                          will help establish the feel of your language.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" asChild>
              <Link href="/">Cancel</Link>
            </Button>
            <Button type="submit">
              <Save className="mr-2 h-4 w-4" />
              Create Language
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
