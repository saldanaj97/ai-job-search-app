import Link from 'next/link';
import features from '~/copywriting/landing-page-features-list.json';

type Detail = {
  icon: string;
  feature_name: string;
  description: string;
};

type Feature = {
  subtitle: string;
  title: string;
  description: string;
  details: Detail[];
  imageLocation: string;
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

function SectionTitle({ feature }: { feature: Feature }) {
  if (!feature) {
    return null;
  }

  return (
    <div className="flex h-full flex-col gap-8">
      <p className="font-semibold">{feature.subtitle}</p>
      <div className="flex flex-col gap-4">
        <h2 className="text-5xl font-bold">{feature.title}</h2>
        <p className="text-lg">{feature.description}</p>
      </div>
    </div>
  );
}

// TODO: Make sure to go back and edit the icons in the JSON file
function DetailList({ details: detailList }: { details: Detail[] }) {
  return (
    <div className="flex flex-row gap-6">
      {details.map((detail) => (
        <div key={detail.feature_name} className="flex flex-col gap-4">
          <div className="text-[48px]">{detail.icon}</div>
          <div className="text-xl font-bold">{detail.feature_name}</div>
          <p className="text-lg">{detail.description}</p>
        </div>
      ))}
    </div>
  );
}

// TODO Buttons not linked to correct pages
function Buttons() {
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
}

function FeatureComponent({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  return (
    <div className="flex h-full flex-row items-center justify-center gap-20">
      <div className="flex flex-col gap-6">
        <div key={index}>
          <SectionTitle feature={feature} />
          <DetailList details={details} />
          <Buttons />
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

export default function MainFeatures() {
  // TODO: Add skeleton loading state
  if (!features) {
    return;
  }

  return features.map((feature, index) => (
    <div className="flex h-screen w-full justify-evenly px-16 py-28">
      <FeatureComponent feature={feature} index={index} />
    </div>
  ));
}
