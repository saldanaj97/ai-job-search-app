// TODO: - Across the board edit the links and buttons to lead to the correct place
//       - Fix the global padding issue

function Newsletter() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col">
        <p className="text-lg font-semibold">Get Exclusive Updates</p>
        <p className="text-base font-normal">
          Subscribe to our newsletter today
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <input
            type="text"
            placeholder="Enter your email"
            className="gap-8 rounded-lg border border-inherit bg-transparent p-3"
          />
          <button
            children="Subscribe"
            className="gap-2 rounded-lg bg-primary px-6 py-3 text-white"
          />
        </div>
        <p className="gap-2 text-[12px] text-base font-normal">
          By subscribing, you agree to our{' '}
          <a className="underline" href="/">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="flex flex-row justify-between gap-10">
      <div className="w-1/4">
        <p className="text-2xl font-bold">WannabeHired.ai</p>
        <p className="text-base font-normal">
          AI-powered job application assistant that boosts your chances of
          getting noticed. Optimize your job search, create compelling resumes,
          and land more interviews with our intelligent tools.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-base font-semibold">Company</p>
        <a href="/">
          <p className="py-2 text-[14px] font-normal">About Us</p>
        </a>
        <a href="/">
          <p className="py-2 text-[14px] font-normal">Careers</p>
        </a>
        <a href="/">
          <p className="py-2 text-[14px] font-normal">Contact Us</p>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-base font-semibold">Resources</p>
        <a href="/">
          <p className="py-2 text-[14px] font-normal">Blog</p>
        </a>
        <a href="/">
          <p className="py-2 text-[14px] font-normal">FAQs</p>
        </a>
        <a href="/">
          <p className="py-2 text-[14px] font-normal">Help Center</p>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-base font-semibold">Legal</p>
        <a href="/">
          <p className="py-2 text-[14px] font-normal">Privacy Policy</p>
        </a>
        <a href="/">
          <p className="py-2 text-[14px] font-normal">Terms of Service</p>
        </a>
      </div>
    </div>
  );
}

function Credits() {
  return (
    <div className="flex flex-row justify-between border-t-2 pt-8">
      <div className="flex flex-row gap-6 text-[14px]">
        <p>© 2024 WannabeHired.ai. All Rights Reserved.</p>
        <p className="underline">
          <a href="/">Terms of Service</a>
        </p>
        <p className="underline">
          <a href="/">Privacy Policy</a>
        </p>
        <p className="underline">
          <a href="/">Cookies Policy</a>
        </p>
      </div>
      <div className="flex flex-row gap-3 text-[14px] italic">
        <a href="/">Social</a>
        <a href="/">Media</a>
        <a href="/">Icons</a>
        <a href="/">Here</a>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="flex flex-col gap-20 px-16 py-20">
      <Newsletter />
      <Links />
      <Credits />
    </div>
  );
}
