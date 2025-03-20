"use client";

import {
  ArrowLeft,
  BookText,
  Edit,
  FileText,
  Globe,
  Grid3X3,
  Languages,
  LayoutGrid,
  Mic,
  Pencil,
  Plus,
  Repeat,
  Search,
  Settings,
  Share2,
  Sparkles,
  Type,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Mock data for the language
const languageData = {
  id: "elvish-123",
  name: "Elvish",
  purpose: "Fiction/Novel",
  description:
    "An elegant language inspired by Finnish and Welsh, created for a fantasy novel series featuring forest-dwelling elves with a deep connection to nature.",
  inspiration: ["Finnish", "Welsh", "Sanskrit"],
  writingSystem: "alphabet",
  wordOrder: "svo",
  consonantCategories: ["plosives", "nasals", "fricatives", "approximants"],
  vowelInventory: "a, e, i, o, u, á, é, í, ó, ú",
  syllableStructure: "(C)V(C)",
  hasGender: true,
  hasCases: true,
  hasTones: false,
  createdAt: "2025-03-15T12:00:00Z",
  updatedAt: "2025-03-19T14:30:00Z",
  progress: {
    phonology: 85,
    grammar: 60,
    vocabulary: 40,
    writing: 70,
    overall: 64,
  },
  stats: {
    vocabularyCount: 127,
    grammarRules: 24,
    phonemes: 32,
    translatedTexts: 5,
  },
};

// Mock vocabulary data
const vocabularyData = [
  {
    word: "elen",
    translation: "star",
    partOfSpeech: "noun",
    notes: "From Proto-Elvish *el-",
  },
  {
    word: "arda",
    translation: "earth",
    partOfSpeech: "noun",
    notes: "Used in formal contexts",
  },
  {
    word: "menel",
    translation: "sky",
    partOfSpeech: "noun",
    notes: "Often used in poetry",
  },
  {
    word: "alda",
    translation: "tree",
    partOfSpeech: "noun",
    notes: "Sacred in Elvish culture",
  },
  {
    word: "lómë",
    translation: "night",
    partOfSpeech: "noun",
    notes: "Related to darkness and mystery",
  },
  {
    word: "anar",
    translation: "sun",
    partOfSpeech: "noun",
    notes: "Considered a divine entity",
  },
  {
    word: "nén",
    translation: "water",
    partOfSpeech: "noun",
    notes: "Essential element in Elvish mythology",
  },
  {
    word: "cálë",
    translation: "light",
    partOfSpeech: "noun",
    notes: "Often used metaphorically",
  },
  {
    word: "lairë",
    translation: "summer",
    partOfSpeech: "noun",
    notes: "Season of abundance",
  },
  {
    word: "hrívë",
    translation: "winter",
    partOfSpeech: "noun",
    notes: "Season of reflection",
  },
  {
    word: "melda",
    translation: "beloved",
    partOfSpeech: "adjective",
    notes: "Used for deep affection",
  },
  {
    word: "vanya",
    translation: "beautiful",
    partOfSpeech: "adjective",
    notes: "Describes natural beauty",
  },
];

// Mock phonology data
const phonologyData = {
  consonants: [
    {
      symbol: "p",
      description: "voiceless bilabial plosive",
      example: "palan (far)",
    },
    {
      symbol: "t",
      description: "voiceless alveolar plosive",
      example: "talan (floor)",
    },
    {
      symbol: "k",
      description: "voiceless velar plosive",
      example: "cálë (light)",
    },
    { symbol: "m", description: "bilabial nasal", example: "menel (sky)" },
    { symbol: "n", description: "alveolar nasal", example: "nén (water)" },
    { symbol: "ñ", description: "velar nasal", example: "ñoldo (wise one)" },
    {
      symbol: "f",
      description: "voiceless labiodental fricative",
      example: "fána (cloud)",
    },
    {
      symbol: "s",
      description: "voiceless alveolar fricative",
      example: "silmë (starlight)",
    },
    {
      symbol: "h",
      description: "voiceless glottal fricative",
      example: "hrívë (winter)",
    },
    {
      symbol: "v",
      description: "voiced labiodental fricative",
      example: "vanya (beautiful)",
    },
    {
      symbol: "l",
      description: "alveolar lateral approximant",
      example: "lómë (night)",
    },
    { symbol: "r", description: "alveolar trill", example: "ringa (cold)" },
    {
      symbol: "y",
      description: "palatal approximant",
      example: "yávë (fruit)",
    },
    {
      symbol: "w",
      description: "labial-velar approximant",
      example: "wilwarin (butterfly)",
    },
  ],
  vowels: [
    {
      symbol: "a",
      description: "open front unrounded",
      example: "arda (earth)",
    },
    {
      symbol: "e",
      description: "close-mid front unrounded",
      example: "elen (star)",
    },
    {
      symbol: "i",
      description: "close front unrounded",
      example: "ithil (moon)",
    },
    {
      symbol: "o",
      description: "close-mid back rounded",
      example: "oron (mountain)",
    },
    {
      symbol: "u",
      description: "close back rounded",
      example: "ulmo (water deity)",
    },
    {
      symbol: "á",
      description: "long open front unrounded",
      example: "áre (sunlight)",
    },
    {
      symbol: "é",
      description: "long close-mid front unrounded",
      example: "éru (creator)",
    },
    {
      symbol: "í",
      description: "long close front unrounded",
      example: "íta (flash)",
    },
    {
      symbol: "ó",
      description: "long close-mid back rounded",
      example: "óma (voice)",
    },
    {
      symbol: "ú",
      description: "long close back rounded",
      example: "úmë (abundance)",
    },
  ],
};

// Mock grammar rules
const grammarRules = [
  {
    name: "Noun Cases",
    description:
      "Elvish has 6 grammatical cases: nominative, accusative, genitive, dative, locative, and instrumental.",
    examples: [
      {
        original: "alda",
        form: "alda",
        usage: "nominative (subject)",
        translation: "The tree stands tall.",
      },
      {
        original: "alda",
        form: "aldan",
        usage: "accusative (object)",
        translation: "I see the tree.",
      },
      {
        original: "alda",
        form: "aldaro",
        usage: "genitive (possession)",
        translation: "The leaves of the tree.",
      },
      {
        original: "alda",
        form: "aldain",
        usage: "dative (indirect object)",
        translation: "I give water to the tree.",
      },
      {
        original: "alda",
        form: "aldassë",
        usage: "locative (location)",
        translation: "The bird is in the tree.",
      },
      {
        original: "alda",
        form: "aldanen",
        usage: "instrumental (means)",
        translation: "I climb with the tree.",
      },
    ],
  },
  {
    name: "Verb Conjugation",
    description:
      "Elvish verbs conjugate for tense (present, past, future), aspect (perfect, imperfect), and person (1st, 2nd, 3rd).",
    examples: [
      {
        original: "linda-",
        form: "lindan",
        usage: "1st person present",
        translation: "I sing.",
      },
      {
        original: "linda-",
        form: "lindanë",
        usage: "1st person past",
        translation: "I sang.",
      },
      {
        original: "linda-",
        form: "linduva",
        usage: "1st person future",
        translation: "I will sing.",
      },
      {
        original: "linda-",
        form: "lindië",
        usage: "perfect aspect",
        translation: "I have sung.",
      },
    ],
  },
  {
    name: "Adjective Agreement",
    description: "Adjectives agree with nouns in gender, number, and case.",
    examples: [
      {
        original: "vanya",
        form: "vanya alda",
        usage: "masculine singular",
        translation: "beautiful tree",
      },
      {
        original: "vanya",
        form: "vanyë aldë",
        usage: "feminine singular",
        translation: "beautiful tree",
      },
      {
        original: "vanya",
        form: "vanyar aldar",
        usage: "plural",
        translation: "beautiful trees",
      },
    ],
  },
];

export default function LanguageDashboardPage() {
  const params = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVocabulary = vocabularyData.filter(
    (item) =>
      item.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.translation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-muted/40">
          <div className="p-4 border-b">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/dashboard">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Languages
              </Link>
            </Button>
          </div>

          <div className="p-4">
            <h2 className="font-semibold mb-2">Language Tools</h2>
            <nav className="space-y-1">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <Mic className="mr-2 h-4 w-4" />
                Phonology
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <Grid3X3 className="mr-2 h-4 w-4" />
                Grammar
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <BookText className="mr-2 h-4 w-4" />
                Vocabulary
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <Type className="mr-2 h-4 w-4" />
                Writing System
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <Repeat className="mr-2 h-4 w-4" />
                Translator
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <FileText className="mr-2 h-4 w-4" />
                Text Generator
              </Button>
            </nav>
          </div>

          <Separator />

          <div className="p-4">
            <h2 className="font-semibold mb-2">Actions</h2>
            <nav className="space-y-1">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share Language
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <Edit className="mr-2 h-4 w-4" />
                Edit Properties
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </nav>
          </div>

          <div className="mt-auto p-4 border-t">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Language Progress</h3>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Phonology</span>
                    <span>{languageData.progress.phonology}%</span>
                  </div>
                  <Progress
                    value={languageData.progress.phonology}
                    className="h-1"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Grammar</span>
                    <span>{languageData.progress.grammar}%</span>
                  </div>
                  <Progress
                    value={languageData.progress.grammar}
                    className="h-1"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Vocabulary</span>
                    <span>{languageData.progress.vocabulary}%</span>
                  </div>
                  <Progress
                    value={languageData.progress.vocabulary}
                    className="h-1"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Writing</span>
                    <span>{languageData.progress.writing}%</span>
                  </div>
                  <Progress
                    value={languageData.progress.writing}
                    className="h-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto max-w-5xl px-4 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold">{languageData.name}</h1>
                <p className="text-muted-foreground">{languageData.purpose}</p>
              </div>
              <div className="flex gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Edit Language</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Share Language</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Button>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Content
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Vocabulary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {languageData.stats.vocabularyCount}
                  </div>
                  <p className="text-xs text-muted-foreground">words defined</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Phonology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {languageData.stats.phonemes}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    phonemes defined
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Grammar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {languageData.stats.grammarRules}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    grammar rules defined
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2">About this Language</h2>
              <p className="text-muted-foreground">
                {languageData.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <div className="flex items-center gap-1 text-sm">
                  <Globe className="h-4 w-4" />
                  <span>
                    {languageData.writingSystem === "alphabet"
                      ? "Alphabetic Writing System"
                      : languageData.writingSystem === "syllabary"
                      ? "Syllabic Writing System"
                      : languageData.writingSystem === "logographic"
                      ? "Logographic Writing System"
                      : "Mixed Writing System"}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-sm">
                  <Grid3X3 className="h-4 w-4" />
                  <span>
                    {languageData.wordOrder === "svo"
                      ? "SVO Word Order"
                      : languageData.wordOrder === "sov"
                      ? "SOV Word Order"
                      : languageData.wordOrder === "vso"
                      ? "VSO Word Order"
                      : "Free Word Order"}
                  </span>
                </div>

                {languageData.hasGender && (
                  <div className="flex items-center gap-1 text-sm">
                    <Users className="h-4 w-4" />
                    <span>Grammatical Gender</span>
                  </div>
                )}

                {languageData.hasCases && (
                  <div className="flex items-center gap-1 text-sm">
                    <LayoutGrid className="h-4 w-4" />
                    <span>Case System</span>
                  </div>
                )}

                {languageData.hasTones && (
                  <div className="flex items-center gap-1 text-sm">
                    <Mic className="h-4 w-4" />
                    <span>Tonal Language</span>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-medium mb-1">Inspired by:</h3>
                <div className="flex flex-wrap gap-2">
                  {languageData.inspiration.map((lang) => (
                    <div
                      key={lang}
                      className="rounded-full bg-secondary px-3 py-1 text-xs"
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Tabs defaultValue="vocabulary" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="vocabulary">Vocabulary</TabsTrigger>
                <TabsTrigger value="phonology">Phonology</TabsTrigger>
                <TabsTrigger value="grammar">Grammar</TabsTrigger>
              </TabsList>

              <TabsContent value="vocabulary" className="space-y-4 pt-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Vocabulary</h2>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search words..."
                        className="pl-8 w-[200px]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Word
                    </Button>
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b bg-muted/50">
                    <div className="col-span-3">Word</div>
                    <div className="col-span-3">Translation</div>
                    <div className="col-span-2">Part of Speech</div>
                    <div className="col-span-4">Notes</div>
                  </div>

                  {filteredVocabulary.length > 0 ? (
                    filteredVocabulary.map((item, index) => (
                      <div
                        key={item.word}
                        className={`grid grid-cols-12 gap-4 p-4 ${
                          index !== filteredVocabulary.length - 1
                            ? "border-b"
                            : ""
                        }`}
                      >
                        <div className="col-span-3 font-medium">
                          {item.word}
                        </div>
                        <div className="col-span-3">{item.translation}</div>
                        <div className="col-span-2 text-muted-foreground">
                          {item.partOfSpeech}
                        </div>
                        <div className="col-span-4 text-sm text-muted-foreground">
                          {item.notes}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 text-center text-muted-foreground">
                      No words found matching your search.
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="phonology" className="space-y-6 pt-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Phonology</h2>
                  <Button>
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit Phonology
                  </Button>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Consonants</CardTitle>
                    <CardDescription>
                      Consonant inventory of {languageData.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border">
                      <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b bg-muted/50">
                        <div className="col-span-1">Symbol</div>
                        <div className="col-span-6">Description</div>
                        <div className="col-span-5">Example</div>
                      </div>

                      {phonologyData.consonants.map((item, index) => (
                        <div
                          key={item.symbol}
                          className={`grid grid-cols-12 gap-4 p-4 ${
                            index !== phonologyData.consonants.length - 1
                              ? "border-b"
                              : ""
                          }`}
                        >
                          <div className="col-span-1 font-bold">
                            {item.symbol}
                          </div>
                          <div className="col-span-6">{item.description}</div>
                          <div className="col-span-5 text-muted-foreground">
                            {item.example}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Vowels</CardTitle>
                    <CardDescription>
                      Vowel inventory of {languageData.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border">
                      <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b bg-muted/50">
                        <div className="col-span-1">Symbol</div>
                        <div className="col-span-6">Description</div>
                        <div className="col-span-5">Example</div>
                      </div>

                      {phonologyData.vowels.map((item, index) => (
                        <div
                          key={item.symbol}
                          className={`grid grid-cols-12 gap-4 p-4 ${
                            index !== phonologyData.vowels.length - 1
                              ? "border-b"
                              : ""
                          }`}
                        >
                          <div className="col-span-1 font-bold">
                            {item.symbol}
                          </div>
                          <div className="col-span-6">{item.description}</div>
                          <div className="col-span-5 text-muted-foreground">
                            {item.example}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Syllable Structure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-mono">
                      {languageData.syllableStructure}
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      Where C = consonant, V = vowel, and parentheses indicate
                      optional elements.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="grammar" className="space-y-6 pt-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Grammar Rules</h2>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Grammar Rule
                  </Button>
                </div>

                <div className="space-y-6">
                  {grammarRules.map((rule) => (
                    <Card key={rule.name}>
                      <CardHeader>
                        <CardTitle>{rule.name}</CardTitle>
                        <CardDescription>{rule.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="rounded-md border">
                          <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b bg-muted/50">
                            <div className="col-span-2">Original</div>
                            <div className="col-span-2">Form</div>
                            <div className="col-span-3">Usage</div>
                            <div className="col-span-5">Example</div>
                          </div>

                          {rule.examples.map((example, index) => (
                            <div
                              key={index}
                              className={`grid grid-cols-12 gap-4 p-4 ${
                                index !== rule.examples.length - 1
                                  ? "border-b"
                                  : ""
                              }`}
                            >
                              <div className="col-span-2 font-medium">
                                {example.original}
                              </div>
                              <div className="col-span-2 font-bold">
                                {example.form}
                              </div>
                              <div className="col-span-3">{example.usage}</div>
                              <div className="col-span-5 text-muted-foreground">
                                {example.translation}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
