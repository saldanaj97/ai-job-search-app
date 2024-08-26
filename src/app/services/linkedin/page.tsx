import { Button } from '~/components/ui/button';
import { Footer } from '~/components/ui/footer';

// TODO - Add where needed
const Header = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-20 bg-black/50 px-16 py-28">
      <div className="flex flex-col items-start justify-start gap-6">
        <div className="flex flex-col items-start justify-start gap-4 self-stretch">
          <div className="text-base font-semibold">Optimize</div>
          <div className="28 flex flex-col items-start justify-start gap-6 self-stretch">
            <div className="self-stretch text-6xl font-bold">Stand Out Now</div>
            <div className="self-stretch text-lg font-normal">
              Let our AI personalize your LinkedIn profile to attract more
              opportunities.
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4 pt-4">
          <a href="/services">
            <Button>Get Started</Button>
          </a>
          <a href="/services">
            <Button className="bg-secondary">Learn More</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Feature1 = () => {
  return (
    <div className="color-primary flex flex-col items-start justify-start gap-20 px-16 py-28">
      <div className="flex items-start justify-start gap-16 self-stretch">
        <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-20">
          <div className="flex flex-col items-start justify-start gap-4 self-stretch">
            <div className="self-stretch text-base font-semibold">Enhance</div>
            <div className="self-stretch text-5xl font-bold">
              Optimize Your LinkedIn Profile with AI Assistance
            </div>
          </div>
          <img
            className="self-stretch"
            src="https://via.placeholder.com/624x624"
          />
        </div>
        <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-8 self-stretch">
          <img
            className="self-stretch"
            src="https://via.placeholder.com/624x624"
          />
          <div className="flex shrink grow basis-0 flex-col items-start justify-end gap-4 self-stretch pl-8 pr-16">
            <div className="self-stretch text-lg font-normal">
              Our AI-powered job application assistant generates impactful
              LinkedIn headlines and personalized "About Me" sections that
              showcase your strengths and align with your career goals. Increase
              your profile's visibility and stand out to recruiters and hiring
              managers.
            </div>
            <div className="flex items-center justify-start gap-6 pt-4">
              <div className="border-Color Neutral-black flex items-center justify-center gap-2 border px-6 py-3">
                <div className="text-base font-normal">Learn More</div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="text-base font-normal">Sign Up</div>
                <div className="relative" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature2 = () => {
  return (
    <div className="color-primary 96 flex flex-col items-start justify-start gap-20 px-16 py-28">
      <div className="flex items-center justify-start gap-20 self-stretch">
        <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-8">
          <div className="flex flex-col items-start justify-start gap-6 self-stretch">
            <div className="10 self-stretch text-4xl font-bold">
              Crafted LinkedIn Headlines That Make You Stand Out
            </div>
            <div className="self-stretch text-lg font-normal">
              Our AI-powered assistant generates personalized "About Me"
              sections that highlight your strengths and align with your career
              goals, increasing your profile's visibility.
            </div>
          </div>
          <div className="flex items-start justify-start gap-6 self-stretch py-2">
            <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-4">
              <div className="relative w-12" />
              <div className="self-stretch text-xl font-bold">
                Showcase Yourself
              </div>
              <div className="self-stretch text-base font-normal">
                Tailored content that highlights your strengths and aligns with
                your career goals.
              </div>
            </div>
            <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-4">
              <div className="relative w-12" />
              <div className="self-stretch text-xl font-bold">
                Enhance Visibility
              </div>
              <div className="self-stretch text-base font-normal">
                Optimize your LinkedIn profile to get noticed by potential
                employers and recruiters.
              </div>
            </div>
          </div>
        </div>
        <img
          className="shrink grow basis-0"
          src="https://via.placeholder.com/616x640"
        />
      </div>
    </div>
  );
};

const Feature3 = () => {
  return (
    <div className="color-primary flex flex-col items-center justify-start gap-20 px-16 py-28">
      <div className="flex items-center justify-start gap-20 self-stretch">
        <img
          className="shrink grow basis-0"
          src="https://via.placeholder.com/616x640"
        />
        <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-6">
          <div className="self-stretch text-4xl font-bold">
            Craft Professional Outreach Emails to Connect with Potential
            Employers or Network Contacts
          </div>
          <div className="self-stretch text-lg font-normal">
            With our Cold Email Generator, you can effortlessly create
            personalized and impactful outreach emails that leave a lasting
            impression. Connect with potential employers or network contacts in
            a professional and effective way.
          </div>
        </div>
      </div>
    </div>
  );
};

const CallToAction = () => {
  return (
    <div className="color-primary flex flex-col items-start justify-start gap-20 px-16 py-28">
      <div className="flex items-center justify-start gap-20 self-stretch">
        <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-6">
          <div className="flex flex-col items-start justify-start gap-6 self-stretch">
            <div className="self-stretch text-5xl font-bold">
              Optimize Your LinkedIn Profile Today!
            </div>
            <div className="self-stretch text-lg font-normal">
              Enhance your professional presence and attract more opportunities
              with WannabeEmployed.ai
            </div>
          </div>
          <div className="flex items-start justify-start gap-4 pt-4">
            <div className="bg-Color Neutral-black flex items-center justify-center gap-2 border px-6 py-3">
              <div className="text-base font-normal">Sign Up</div>
            </div>
            <div className="flex items-center justify-center gap-2 border px-6 py-3">
              <div className="text-base font-normal">Learn More</div>
            </div>
          </div>
        </div>
        <img
          className="shrink grow basis-0"
          src="https://via.placeholder.com/616x400"
        />
      </div>
    </div>
  );
};

export const LinkedInServicesPage = () => {
  return (
    <div className="flex flex-col items-start justify-start">
      <Header />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LinkedInServicesPage;
