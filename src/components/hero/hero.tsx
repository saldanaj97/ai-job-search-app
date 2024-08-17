"use client";

import { TypingEffect } from "~/components/hero/TypingEffect";
import { Button } from "~/components/ui/button";

// TODO: Fix the typing effect to stop moving the text down for improved user reading flow
export default function Hero() {
  return (
    <div className="container relative flex max-w-3xl flex-1 flex-col items-center justify-center text-center">
      {/* Hero Heading */}
      <h1 className="relative z-10 mb-4 text-5xl font-bold tracking-tight sm:h-24 md:h-fit md:w-screen md:text-7xl lg:h-fit lg:text-8xl">
        Tired of being{" "}
        <TypingEffect word="overlooked?" simulateErrors={false} />
      </h1>

      {/* Hero Subheading */}
      <p className="relative z-10 mb-8 w-full text-xl font-normal tracking-tight sm:text-xl sm:font-semibold">
        Our AI-powered assistant tailors job recommendations, crafts compelling
        resumes and cover letters, and provides real-time feedback to enhance
        your applications and chances of getting hired. Start your journey to
        career success today!
      </p>

      {/* Call to Action Button */}
      <Button className="relative z-10 bg-primary text-white shadow-lg">
        Get started!
      </Button>
    </div>
  );
}
