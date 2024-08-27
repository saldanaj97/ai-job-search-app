import Link from 'next/link';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Footer } from '~/components/ui/footer';

type Feature = {
  subtitle: string;
  title: string;
  description: string;
  imageLocation: string;
};

function Header() {
  return (
    <div className="flex flex-col justify-start gap-20 bg-transparent px-20 py-28">
      <div className="flex justify-start gap-20">
        <div className="flex flex-col items-start justify-start gap-4">
          <div className="text-center text-base font-semibold">Empowerment</div>
          <div className="text-5xl font-bold">
            Transforming Job Applications
          </div>
        </div>
        <div className="flex w-3/5 flex-col justify-start gap-6">
          <div className="flex text-lg font-normal">
            At WannabeEmployed.ai, our mission is to revolutionize the job
            application process by leveraging the power of AI. We believe that
            everyone deserves a chance to showcase their skills and talents, and
            our AI-powered job application assistant is designed to help users
            optimize their job search and increase their chances of landing
            interviews. With our platform, you can generate compelling LinkedIn
            headlines and &quot;About Me&quot; sections, craft resumes and cover
            letters using AI, and track your job applications all in one place.
            Join us on this journey and let us help you take your career to new
            heights.
          </div>
          <div className="flex justify-start gap-4 pt-4">
            <div className="flex items-center justify-center gap-2 border border-black bg-black px-6 py-3">
              <div className="text-base font-normal">Learn More</div>
            </div>
            <div className="flex items-center justify-center gap-2 border border-black px-6 py-3">
              <div className="text-base font-normal">Sign Up</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mission() {
  return (
    <div className="flex flex-row justify-center px-16 py-28">
      <div className="flex max-w-3xl flex-col items-center justify-start gap-20 bg-transparent">
        <div className="flex flex-col items-center justify-start gap-6">
          <div className="flex text-center text-[40px] font-bold">
            Empowering job seekers with AI tools to optimize their job search.
          </div>
          <div className="flex text-center text-lg font-normal">
            At WannabeEmployed.ai, our mission is to increase your chances of
            landing interviews by providing AI-powered tools that help you craft
            compelling LinkedIn headlines, resumes, and cover letters. Our job
            tracking dashboard keeps your job search organized and efficient.
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureComponent({ feature }: { feature: Feature }) {
  return (
    <div className="flex h-full flex-row items-center justify-center gap-20 px-20">
      <div className="flex flex-col gap-6">
        <div className="flex h-full flex-col gap-8">
          <p className="text-[80px] font-semibold">{feature.subtitle}</p>
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-bold">{feature.title}</h2>
            <p className="text-lg">{feature.description}</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 pt-4">
          <Link href="/" className="rounded-lg px-6 py-3 text-white">
            Learn More
          </Link>
          <Link href="/" className="rounded-lg px-6 py-3">
            Sign Up {'>'}
          </Link>
        </div>
      </div>
      <div className="flex-grow-1 flex flex-shrink-0 flex-row gap-6">
        <img
          src={feature.imageLocation}
          alt="Placeholder"
          className="h-[640px] w-[616px]"
        />
      </div>
    </div>
  );
}

function CallToAction() {
  return (
    <div className="px-20 py-28">
      <Card className="gap-2 bg-transparent p-16">
        <CardHeader className="gap-6 text-center">
          <CardTitle className="text-5xl font-bold">
            Optimize Your Job Search Today!
          </CardTitle>
          <CardDescription className="text-base text-inherit">
            Sign up now and let WannabeEmployed.ai help you land your dream job.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-row justify-center gap-4 py-4">
          <Button>
            <Link href="/">Get Started</Link>
          </Button>
          <Button className="bg-secondary">
            <Link href="/">Learn More</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

// TODO: To clean up, put the padding from each component into the component itself
export default function AboutUs() {
  const feature = {
    subtitle: '🚀',
    title: 'Transforming job search with AI-powered technology',
    description:
      'At WannabeEmployed.ai, our ivsion is to be the leading platform for job search optimization. We strive to make the job application process seamless and effective for everyone.',
    imageLocation: '/placeholder.png',
  };

  return (
    <div className="flex flex-col justify-center">
      <Header />
      <Mission />
      <FeatureComponent feature={feature} />
      <CallToAction />
      <Footer />
    </div>
  );
}
