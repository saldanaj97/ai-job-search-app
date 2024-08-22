import Link from 'next/link';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

// TODO: Implement the correct links for the buttons
export const CallToAction = ({}) => {
  return (
    <div className="mx-16 my-28">
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
            <Link href={'/'}>Get Started</Link>
          </Button>
          <Button className="bg-secondary">
            <Link href={'/'}>Learn More</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
