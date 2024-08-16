"use client";

import { FaArrowDown } from "react-icons/fa";
import { TypingEffect } from "~/components/hero/TypingEffect";
import { Button } from "~/components/ui/button";

export default function Hero() {
  return (
    <div className="container relative mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center text-center">
      {/* Hero Heading */}
      <h1 className="relative z-10 mb-4 text-6xl font-bold tracking-tight sm:text-8xl">
        <TypingEffect
          word="Tired of being overlooked?"
          simulateErrors={false}
        />
      </h1>

      {/* Hero Subheading */}
      <p className="relative z-10 mb-8 w-full text-xl font-normal tracking-tight sm:text-xl sm:font-semibold">
        Our AI-powered assistant tailors job recommendations, crafts compelling
        resumes and cover letters, and provides real-time feedback to enhance
        your applications and chances of getting hired. Start your journey to
        career success today!
      </p>

      {/* Call to Action Button */}
      <Button className="animate-gradientMove relative z-10 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
        Get started!
        <FaArrowDown className="animate-bounce" size={18} />
      </Button>
    </div>
  );
}
