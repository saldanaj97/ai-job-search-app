import Link from 'next/link';

type Feature = {
  icon: string;
  feature_name: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: '🔍',
    feature_name: 'AI-Powered Job Search',
    description:
      'Our AI-powered job search engine will help you find the best jobs for you.',
  },
  {
    icon: '📝',
    feature_name: 'Resume Optimization',
    description:
      'Our resume optimization tool will help you create a resume that stands out.',
  },
  {
    icon: '📚',
    feature_name: 'Learning Resources',
    description:
      'Access our library of learning resources to help you grow your skills.',
  },
];

const FeatureList = ({ features }: { features: Feature[] }) => {
  return (
    <div className="flex flex-row gap-12">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col gap-7 text-center">
          <div className="text-[48px]">{feature.icon}</div>
          <div className="text-2xl font-bold">{feature.feature_name}</div>
          <div className="">{feature.description}</div>
          <Link href="/" className="">
            Learn More &rarr;
          </Link>
        </div>
      ))}
    </div>
  );
};

export default function HowItWorks() {
  return (
    <div className="flex h-screen flex-col justify-around px-16">
      <div className="flex flex-col items-center gap-20">
        <h3 className="max-w-3xl text-center text-[40px] font-bold tracking-tight">
          Unlock Your Job Search Potential with AI-Powered Optimization
        </h3>
        <FeatureList features={features} />
      </div>
    </div>
  );
}
