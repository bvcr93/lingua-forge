import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BookText,
  Globe,
  Languages,
  Lightbulb,
  MessageSquare,
  Mic,
  Pencil,
  Repeat,
  Sparkles,
} from "lucide-react";
import symbol from "../../public/symbol.jpg";
import symbol2 from "../../public/symbol2.jpg";
export default function Hero() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Create Fictional Languages with Ease
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  The complete toolkit for writers and worldbuilders to craft
                  authentic constructed languages from scratch.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="#get-started">Start Creating</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#demo">Watch Demo</Link>
                </Button>
              </div>
            </div>
            <Image
              src={symbol}
              width={550}
              height={550}
              alt="LinguaForge interface preview"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Everything You Need to Build Your Language
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Comprehensive tools to develop phonology, vocabulary, grammar,
                and more for your constructed languages.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center justify-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Mic className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Phonology Generator</h3>
              <p className="text-center text-muted-foreground">
                Create realistic sound systems with customizable phoneme
                inventories and syllable structures.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <BookText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Vocabulary Management</h3>
              <p className="text-center text-muted-foreground">
                Build and organize dictionaries with etymology tracking and
                semantic relationships.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Pencil className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Grammar Rule Tracking</h3>
              <p className="text-center text-muted-foreground">
                Define and document complex grammatical systems with visual
                syntax trees.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Repeat className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Text Translation</h3>
              <p className="text-center text-muted-foreground">
                Translate between your constructed language and natural
                languages with built-in consistency checks.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Writing Systems</h3>
              <p className="text-center text-muted-foreground">
                Design custom alphabets, syllabaries, or logographic systems
                with font generation tools.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Community Sharing</h3>
              <p className="text-center text-muted-foreground">
                Share your languages with other creators and collaborate on
                linguistic projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                How LinguaForge Works
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Our intuitive workflow makes language creation accessible to
                everyone, from beginners to experienced conlangers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
            <Image
              src={symbol2}
              width={500}
              height={400}
              alt="LinguaForge workflow demonstration"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ol className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold">Define Your Sound System</h3>
                    <p className="text-muted-foreground">
                      Start by selecting phonemes and building syllable
                      structures that give your language its unique sound.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold">Establish Grammar Rules</h3>
                    <p className="text-muted-foreground">
                      Create the grammatical framework that determines how words
                      interact and sentences are formed.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold">Build Your Vocabulary</h3>
                    <p className="text-muted-foreground">
                      Generate words that follow your phonological rules and
                      organize them into a comprehensive dictionary.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold">Create and Translate Texts</h3>
                    <p className="text-muted-foreground">
                      Write in your language and translate between it and
                      natural languages with our intelligent tools.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                What Our Users Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Join thousands of writers, worldbuilders, and language
                enthusiasts who use LinguaForge.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 justify-items-center">
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "LinguaForge has completely transformed my worldbuilding
                  process. Creating languages used to be the most daunting part,
                  but now it's my favorite!"
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="rounded-full bg-muted p-1">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      JD
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">J.D. Morgan</p>
                    <p className="text-xs text-muted-foreground">
                      Fantasy Author
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "As a linguistics professor, I'm impressed by the depth and
                  accuracy of LinguaForge. It's an excellent tool for teaching
                  language construction."
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="rounded-full bg-muted p-1">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      EL
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Dr. Elena Linden</p>
                    <p className="text-xs text-muted-foreground">
                      Linguistics Professor
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Our game studio uses LinguaForge for all our fictional
                  languages. The translation tools save us countless hours of
                  development time."
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="rounded-full bg-muted p-1">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      RK
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Ryan Keller</p>
                    <p className="text-xs text-muted-foreground">
                      Game Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Simple, Transparent Pricing
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Choose the plan that fits your language creation needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 justify-items-center">
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">Hobbyist</h3>
                <p className="text-muted-foreground">
                  Perfect for individual creators
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span>Up to 3 languages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span>Basic phonology tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span>5,000 vocabulary entries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span>Standard grammar templates</span>
                  </li>
                </ul>
                <Button className="mt-6" variant="outline" size="lg">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm relative">
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Most Popular
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">Creator</h3>
                <p className="text-muted-foreground">
                  For serious worldbuilders
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span>Up to 10 languages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span>Advanced phonology generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span>20,000 vocabulary entries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span>Custom writing systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span>Translation tools</span>
                  </li>
                </ul>
                <Button className="mt-6" size="lg">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">Professional</h3>
                <p className="text-muted-foreground">For studios and teams</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span>Unlimited languages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span>Complete phonology suite</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span>Unlimited vocabulary</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="mt-6" variant="outline" size="lg">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="get-started"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Create Your Language?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Join thousands of creators who are building rich, authentic
                languages with LinguaForge.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button size="lg" className="w-full">
                Start Your Free Trial
              </Button>
              <p className="text-xs text-muted-foreground">
                No credit card required. 14-day free trial on all plans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
