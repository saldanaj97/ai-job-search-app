import Link from 'next/link';

type Detail = {
  icon: string;
  feature_name: string;
  description: string;
};

const details: Detail[] = [
  {
    icon: '↗️',
    feature_name: 'SEO Optimization',
    description:
      'Increase your visibility on LinkedIn and get noticed by recruiters.',
  },
  {
    icon: '👽',
    feature_name: 'Get Noticed',
    description:
      'Create an enagaging LinkedIn profile that stands out from the competition.',
  },
];

const SectionTitle = ({}) => {
  return (
    <div className="flex h-full flex-col gap-8">
      <p className="font-semibold">Attract</p>
      <div className="flex flex-col gap-4">
        <h2 className="text-5xl font-bold">
          Stand Out with Compelling LinkedIn Optimization
        </h2>
        <p className="text-lg">
          Generate an attention-grabbing LinkedIn profile that will impress
          recruiters and incrase your chances of getting contacted.
        </p>
      </div>
    </div>
  );
};

const DetailList = ({ details }: { details: Detail[] }) => {
  return (
    <div className="flex flex-row gap-6">
      {details.map((detail, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="text-[48px]">{detail.icon}</div>
          <div className="text-xl font-bold">{detail.feature_name}</div>
          <p className="text-lg">{detail.description}</p>
        </div>
      ))}
    </div>
  );
};

const Buttons = ({}) => {
  return (
    <div className="flex flex-row gap-2 pt-4">
      <Link href="/" className="rounded-lg px-6 py-3 text-white">
        Learn More
      </Link>
      <Link href="/" className="rounded-lg px-6 py-3">
        Sign Up {'>'}
      </Link>
    </div>
  );
};

export default function MainFeatures() {
  return (
    <div className="flex h-screen w-full justify-evenly px-16 py-28">
      <div className="flex h-full flex-row items-center justify-center gap-20">
        <div className="flex flex-col gap-6">
          <SectionTitle />
          <DetailList details={details} />
          <Buttons />
        </div>
        <div className="flex-grow-1 flex flex-shrink-0 flex-row gap-6">
          <img
            src="/placeholder.png"
            alt="Placeholder"
            className="h-[640px] w-[616px]"
          />
        </div>
      </div>
    </div>
  );
}
