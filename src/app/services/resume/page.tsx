import { Button } from '~/components/ui/button';
import { Footer } from '~/components/ui/footer';

// TODO - Add Icons where needed

function Header() {
  return (
    <div className="inline-flex w-full flex-col items-start justify-start gap-20 bg-black/50 px-16 py-28">
      <div className="flex flex-col items-start justify-start gap-6">
        <div className="flex flex-col items-start justify-start gap-4 self-stretch">
          <div className="text-Text-alternate text-base font-semibold leading-normal">
            Create
          </div>
          <div className="flex flex-col items-start justify-start gap-6 self-stretch">
            <div className="text-Text-alternate self-stretch text-6xl font-bold leading-10">
              Stand Out Resumes
            </div>
            <div className="text-Text-alternate self-stretch text-lg font-normal leading-relaxed">
              Craft tailored resumes and cover letters that highlight your
              skills and experiences.
            </div>
          </div>
        </div>
        <div className="inline-flex items-start justify-start gap-4 pt-4">
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
}

function Feature1() {
  return (
    <div className="bg-Background color-primary flex flex-col items-center justify-start gap-20 px-16 py-28">
      <div className="flex flex-col items-center justify-start gap-4">
        <div className="text-Text-primary text-center text-base font-semibold leading-normal">
          Optimize
        </div>
        <div className="flex flex-col items-center justify-start gap-6 self-stretch">
          <div className="text-Text-primary self-stretch text-center text-5xl font-bold leading-10">
            Craft Tailored Resumes and Cover Letters
          </div>
          <div className="text-Text-primary self-stretch text-center text-lg font-normal leading-relaxed">
            Our AI-powered tools analyze job descriptions and user input to
            highlight relevant skills and experiences, ensuring your resume and
            cover letter stand out to employers.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-12 self-stretch">
        <div className="inline-flex items-center justify-start gap-12 self-stretch">
          <div className="inline-flex w-72 flex-col items-center justify-start gap-16">
            <div className="flex flex-col items-center justify-start gap-6">
              <div className="relative w-12" />
              <div className="flex flex-col items-center justify-start gap-4 self-stretch">
                <div className="text-Text-primary self-stretch text-center text-2xl font-bold leading-loose">
                  Boost Your Chances of Success
                </div>
                <div className="text-Text-primary self-stretch text-center text-base font-normal leading-normal">
                  Let our AI-powered tools optimize your job application
                  materials for maximum impact.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-6">
              <div className="relative w-12" />
              <div className="flex flex-col items-center justify-start gap-4 self-stretch">
                <div className="text-Text-primary self-stretch text-center text-2xl font-bold leading-loose">
                  Stay Organized
                </div>
                <div className="text-Text-primary self-stretch text-center text-base font-normal leading-normal">
                  Track your job applications with our convenient job tracking
                  dashboard.
                </div>
              </div>
            </div>
          </div>
          <img
            className="shrink grow basis-0"
            src="https://via.placeholder.com/610x540"
            alt=""
          />
          <div className="inline-flex w-72 flex-col items-center justify-start gap-16">
            <div className="flex flex-col items-center justify-start gap-6">
              <div className="relative w-12" />
              <div className="flex flex-col items-center justify-start gap-4 self-stretch">
                <div className="text-Text-primary self-stretch text-center text-2xl font-bold leading-loose">
                  Save Time
                </div>
                <div className="text-Text-primary self-stretch text-center text-base font-normal leading-normal">
                  Let our AI generate compelling LinkedIn headlines and
                  &quot;About Me&quot; sections for you.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-6">
              <div className="relative w-12" />
              <div className="flex flex-col items-center justify-start gap-4 self-stretch">
                <div className="text-Text-primary self-stretch text-center text-2xl font-bold leading-loose">
                  Stand Out
                </div>
                <div className="text-Text-primary self-stretch text-center text-base font-normal leading-normal">
                  Craft resumes and cover letters that grab employers&apos;
                  attention.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex items-center justify-start gap-6 pt-4">
          <div className="flex items-start justify-start gap-4 pt-4">
            <a href="/services/resume">
              <Button>Learn More</Button>
            </a>
            <a href="/services/resume">
              <Button className="bg-secondary">Sign Up</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature2() {
  return (
    <div className="bg-Background color-primary flex flex-col items-start justify-start gap-20 px-16 py-28">
      <div className="inline-flex items-center justify-start gap-20 self-stretch">
        <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-8">
          <div className="flex flex-col items-start justify-start gap-6 self-stretch">
            <div className="text-Text-primary self-stretch text-4xl font-bold leading-10">
              Create Eye-Catching Resumes
            </div>
            <div className="text-Text-primary self-stretch text-lg font-normal leading-relaxed">
              Craft tailored resumes that highlight your most relevant
              qualifications for each job application. Our AI-powered tools
              analyze job descriptions and user input to ensure your resume
              stands out to employers.
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-6 self-stretch py-2">
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4">
              <div className="text-Text-primary self-stretch text-xl font-bold leading-7">
                Tailored Resumes
              </div>
              <div className="text-Text-primary self-stretch text-base font-normal leading-normal">
                Generate customized resumes that highlight your most relevant
                qualifications.
              </div>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4">
              <div className="text-Text-primary self-stretch text-xl font-bold leading-7">
                AI Analysis
              </div>
              <div className="text-Text-primary self-stretch text-base font-normal leading-normal">
                Our AI analyzes job descriptions and user input to ensure your
                resume stands out.
              </div>
            </div>
          </div>
        </div>
        <img
          className="shrink grow basis-0"
          src="https://via.placeholder.com/616x640"
          alt=""
        />
      </div>
    </div>
  );
}

function Feature3() {
  return (
    <div className="bg-Background color-primary flex flex-col items-center justify-start gap-20 px-16 py-28">
      <div className="inline-flex items-center justify-start gap-20 self-stretch">
        <img
          className="shrink grow basis-0"
          src="https://via.placeholder.com/616x640"
          alt=""
        />
        <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-8">
          <div className="flex flex-col items-start justify-start gap-6 self-stretch">
            <div className="text-Text-primary self-stretch text-4xl font-bold leading-10">
              Craft Tailored Resumes and Cover Letters with AI Analysis
            </div>
            <div className="text-Text-primary self-stretch text-lg font-normal leading-relaxed">
              Our AI-powered tools analyze job descriptions and user input to
              identify key skills and experiences. This ensures that your resume
              and cover letter stand out to employers.
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 self-stretch">
            <div className="inline-flex items-center justify-start gap-4 self-stretch">
              <div className="relative w-6" />
              <div className="text-Text-primary shrink grow basis-0 text-base font-normal leading-normal">
                Highlight Relevant Skills
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-4 self-stretch">
              <div className="relative w-6" />
              <div className="text-Text-primary shrink grow basis-0 text-base font-normal leading-normal">
                Identify Key Experiences
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-4 self-stretch">
              <div className="relative w-6" />
              <div className="text-Text-primary shrink grow basis-0 text-base font-normal leading-normal">
                Stand Out to Employers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CallToAction() {
  return (
    <div className="bg-Background color-primary flex flex-col items-start justify-start gap-20 px-16 py-28">
      <div className="inline-flex items-center justify-start gap-20 self-stretch">
        <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-6">
          <div className="flex flex-col items-start justify-start gap-6 self-stretch">
            <div className="text-Text-primary self-stretch text-5xl font-bold leading-10">
              Generate Your New Resume Today!
            </div>
            <div className="text-Text-primary self-stretch text-lg font-normal leading-relaxed">
              Enhance your professional presence and attract more opportunities
              with WannabeEmployed.ai
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-4 pt-4">
            <div className="bg-Color Neutral-black border-Color Neutral-black flex items-center justify-center gap-2 border px-6 py-3">
              <div className="text-Text-alternate text-base font-normal leading-normal">
                Sign Up
              </div>
            </div>
            <div className="border-Color Neutral-black flex items-center justify-center gap-2 border px-6 py-3">
              <div className="text-Text-primary text-base font-normal leading-normal">
                Learn More
              </div>
            </div>
          </div>
        </div>
        <img
          className="shrink grow basis-0"
          src="https://via.placeholder.com/616x400"
          alt=""
        />
      </div>
    </div>
  );
}

export function ResumeServicesPage() {
  return (
    <div className="inline-flex flex-col items-start justify-start">
      <Header />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default ResumeServicesPage;
