import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Sparkles,
  Clock,
  ArrowUpRight,
  Quote,
  Star,
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Header from "@/components/header";
import Link from "next/link";
import {
  programs,
  type Program,
  testimonials,
  type Testimonial,
  coreValues,
  type CoreValue,
} from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HomeContactSection from "@/components/home-contact-section";

const Icon = ({ name, className }: { name: string; className: string }) => {
  const LucideIcon = (LucideIcons as any)[name];
  if (!LucideIcon) return <LucideIcons.HelpCircle className={className} />;
  return <LucideIcon className={className} />;
};

export default function Home() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === "hero-leadership",
  );

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-7xl py-10 sm:py-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-pink-100 text-primary rounded-full px-4 py-1 mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-medium text-[#EC277A]">
                    Empowering Women Leaders
                  </span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                  Transform Your{" "}
                  <span className="leadership-gradient">Leadership</span>{" "}
                  Journey
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Unlock your full potential with Iron Lady's transformational
                  coaching programs. Build confidence, master communication, and
                  become the leader you were meant to be.
                </p>
                <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-4 ">
                  <Button
                    asChild
                    size="lg"
                    className="group bg-[#ED3B83] text-white"
                  >
                    <Link href="/contact">
                      <Sparkles className="w-4 h-4 mr-2 text-white" />
                      Start Your Journey
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="hover:bg-[#A667E4] bg-white hover:text-white"
                  >
                    <Link href="#chatbot">
                      <MessageCircle className="w-4 h-4 mr-2 " />
                      Meet Your AI Guide
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={250}
                    height={300}
                    className="rounded-2xl shadow-2xl object-cover"
                    data-ai-hint={heroImage.imageHint}
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <section id="programs" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="inline-block rounded-full  bg-blue-50 px-4 py-1.5 text-sm font-semibold mb-4 text-black">
                Our Programs
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                Transformational{" "}
                <span className="text-[#EC277A]">Coaching</span>{" "}
                <span className="text-[#A667E4]">Programs</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Choose the program that aligns with your goals and embark on a
                journey of growth, empowerment, and transformation.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {programs.map((program) => (
                <Card
                  key={program.id}
                  className="flex flex-col rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 bg-card"
                >
                  <CardHeader className="p-6 items-start">
                    <div className="w-16 h-16 rounded-xl bg-[#FAE5F0] flex items-center justify-center mb-4">
                      <Icon
                        name={program.icon}
                        className="w-8 h-8 text-primary"
                      />
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground pt-2 h-14">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-sm">{program.duration}</span>
                      </div>
                      <div className="flex items-baseline text-foreground font-semibold">
                        <span className="text-muted-foreground mr-1 text-lg">
                          $
                        </span>
                        <span className="text-2xl">{program.price}</span>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-accent/50 bg-blue-50 text-[#A667E4] font-semibold"
                      >
                        {program.tag}
                      </Badge>
                    </div>
                    <Button
                      asChild
                      className="group bg-[linear-gradient(90deg,rgba(250,10,182,1)_0%,rgba(168,74,186,1)_84%,rgba(113,121,217,1)_100%)]"
                    >
                      <Link
                        href={`/programs#${program.id}`}
                        className="flex items-center text-white"
                      >
                        Learn More
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="pb-12 sm:pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center ">
              <p className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-secondary-foreground mb-4">
                Success Stories
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                What Our <span className="leadership-gradient">Clients</span>{" "}
                Say
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Real transformations from real women who have embarked on their
                leadership journey with Iron Lady.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="flex flex-col rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 bg-card p-8"
                >
                  <Quote className="w-12 h-12  text-pink-200 mb-4" />
                  <blockquote className="text-muted-foreground flex-grow">
                    {testimonial.quote}
                  </blockquote>
                  <div className="mt-4">
                    <div className="flex items-center mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.program}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="mission" className="pt-8 sm:pt-12">
          <div className="mx-auto max-w-[1200px] text-center">
            <p className="inline-block rounded-full  bg-blue-50 px-3 py-1.5 text-s font-semibold text-secondary-foreground mb-4">
              About Iron Lady
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our <span className="leadership-gradient">Mission</span>
            </h2>
            <div className="mt-8 rounded-2xl bg-card/50 p-8 shadow-lg backdrop-blur-sm">
              <p className="text-lg leading-8 text-muted-foreground">
                Iron Lady is dedicated to empowering women and transforming
                leadership through innovative coaching programs,
                confidence-building, and communication mastery. Our mission is
                to inspire women to become courageous, authentic leaders and
                drive positive change in the world.
              </p>
            </div>
          </div>
        </section>

        <section id="values" className="pt-24 sm:pt-32 pb-12 sm:pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {coreValues.map((value) => (
                <Card
                  key={value.id}
                  className="flex flex-col items-center text-center rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 bg-card p-8"
                >
                  <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center mb-6">
                    <Icon
                      name={value.icon}
                      className="w-10 h-10 text-[#EC277A]"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">
                    {value.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-card/50 px-6 py-24 text-center shadow-2xl rounded-2xl sm:px-16 backdrop-blur-sm">
              <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Ready to <span className="leadership-gradient">Start</span> Your
                Journey?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                Take the first step towards unlocking your full leadership
                potential. Get in touch with us today to learn more about our
                programs and how we can help you achieve your goals.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button
                  asChild
                  size="lg"
                  className="group bg-[linear-gradient(90deg,rgba(250,10,182,1)_0%,rgba(168,74,186,1)_84%,rgba(113,121,217,1)_100%)] text-white"
                >
                  <Link href="/#contact-form" className="flex items-center">
                    Contact Us
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <HomeContactSection />
      </main>
    </>
  );
}
