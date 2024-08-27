'use client';

import TypingEffect from '~/components/hero/TypingEffect';
import { Button } from '~/components/ui/button';

export default function Hero() {
  return (
    <div className="container z-30 flex h-screen max-w-3xl flex-col items-center justify-center text-center">
      <div className="flex flex-col gap-6">
        <h1 className="z-10 text-[56px] font-bold tracking-tight">
          Tired of being{' '}
          <TypingEffect word="rejected?" simulateErrors={false} />
        </h1>
        <p className="z-10 w-full text-[18px] font-normal tracking-tight">
          Welcome to WannabeHired.ai, your AI-powered job application assitant.
          We optimize and organize your job search to increase your chances of
          landing interviews.
        </p>
      </div>

      <div className="flex flex-row gap-4 pt-4">
        <Button className="relative z-10 bg-primary px-6 text-white shadow-lg">
          Get started
        </Button>
        <Button className="relative z-10 bg-secondary px-6 text-white shadow-lg">
          Learn more
        </Button>
      </div>
    </div>
  );
}
