import { Footer } from '~/components/ui/footer';

const Header = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-20 bg-black/50 px-16 py-28">
      <div className="flex flex-col items-start justify-start gap-6">
        <div className="flex flex-col items-start justify-start gap-4 self-stretch">
          <div className="flex text-base font-semibold text-white">
            Streamline
          </div>
          <div className="flex flex-col items-start justify-start gap-6 self-stretch">
            <div className="flex self-stretch text-6xl font-bold text-white">
              Track Your Progress
            </div>
            <div className="flex self-stretch text-lg font-normal text-white">
              Stay organized and keep track of all your job applications in one
              place.
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4 pt-4">
          <div className="flex items-center justify-center gap-2 border border-black bg-black px-6 py-3">
            <div className="flex text-base font-normal text-white">
              Learn More
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 border border-white px-6 py-3">
            <div className="flex text-base font-normal text-white">Sign Up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature1 = () => {
  return (
    <div className="mb-20 flex flex-col items-center justify-start gap-20 px-16 py-28">
      <div className="flex flex-col items-center justify-start gap-4">
        <div className="flex flex-col items-center justify-start gap-6 self-stretch">
          <div className="flex self-stretch text-center text-6xl font-bold">
            Stay Organized with Our Job Tracking Dashboard
          </div>
          <div className="flex self-stretch text-center text-lg font-normal">
            Our job tracking table provides a clear overview of your job search
            progress, allowing you to easily see which applications you've
            submitted, which interviews you've had, and which offers you've
            received.
          </div>
        </div>
        <div className="flex items-center justify-start gap-6 pt-4">
          <div className="flex items-center justify-center gap-2 border border-black px-6 py-3">
            <div className="flex text-base font-normal">Learn More</div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex text-base font-normal">Sign Up</div>
            <div className="relative w-6" />
          </div>
        </div>
      </div>
      <div className="relative flex h-96 w-full items-center justify-center">
        <img
          className="absolute left-0 h-[192px] w-[928px] object-cover"
          src="https://via.placeholder.com/928x192"
        />
        <img
          className="absolute left-[128px] top-0 h-[704px] w-[1056px] object-cover"
          src="https://via.placeholder.com/1056x704"
        />
        <img
          className="absolute bottom-0 right-0 h-[192px] w-[192px] object-cover"
          src="https://via.placeholder.com/192x192"
        />
      </div>
    </div>
  );
};

const CallToAction = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-20 px-16 py-28">
      <div className="flex items-center justify-start gap-20 self-stretch">
        <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-6">
          <div className="flex flex-col items-start justify-start gap-6 self-stretch">
            <div className="flex self-stretch text-5xl font-bold">
              Streamline Your Job Search Today
            </div>
            <div className="flex self-stretch text-lg font-normal">
              Sign up for WannabeEmployed.ai and start using the Job Tracking
              Dashboard today.
            </div>
          </div>
          <div className="flex items-start justify-start gap-4 pt-4">
            <div className="flex items-center justify-center gap-2 border border-black bg-black px-6 py-3">
              <div className="flex text-base font-normal text-white">
                Sign Up
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 border border-black px-6 py-3">
              <div className="flex text-base font-normal">Learn More</div>
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

export const JobTrackerPage = () => {
  return (
    <div className="flex flex-col items-start justify-start">
      <Header />
      <Feature1 />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default JobTrackerPage;
