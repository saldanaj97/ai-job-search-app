import { CounterClockwiseClockIcon } from '@radix-ui/react-icons';
import { Metadata } from 'next';
import Image from 'next/image';

import { Button } from '~/components/ui/button';
import { Label } from '~/components/ui/label';
import { Separator } from '~/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Textarea } from '~/components/ui/textarea';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { Certifications } from './components/forms/certifications-form';
import { Education } from './components/forms/education-form';
import { EmploymentHistory } from './components/forms/employment-history-form';
import { ExtraLinks } from './components/forms/extra-links-form';
import { JobDetails } from './components/forms/job-detail-form';
import { PersonalInfo } from './components/forms/personal-info-form';
import { ProfessionalSummary } from './components/forms/professional-summary-form';
import { Skills } from './components/forms/skills-form';
import { PresetActions } from './components/preset-actions';
import { PresetSave } from './components/preset-save';
import { PresetSelector } from './components/preset-selector';
import { PresetShare } from './components/preset-share';
import { presets } from './data/presets';

export const metadata: Metadata = {
  title: 'Resume Builder',
  description: 'Build your resume with our AI resume builder.',
};

// TODO - Update the function names to be more descriptive
//      - Check mark on each dropdown after completion of form field

function ComponentHeader() {
  return (
    <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
      <h2 className="flex w-full flex-row text-lg font-semibold">
        Resume Builder
      </h2>
      <div className="ml-auto flex w-full space-x-2 sm:justify-end">
        <PresetSelector presets={presets} />
        <PresetSave />
        <div className="hidden space-x-2 md:flex">
          <PresetShare />
        </div>
        <PresetActions />
      </div>
    </div>
  );
}

function UserInformationColumn() {
  return (
    <div className="flex h-full w-full flex-col">
      <h2 className="pb-4 text-lg font-bold">Content</h2>
      <Separator />
      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>Personal Information</AccordionTrigger>
          <AccordionContent>
            <PersonalInfo />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Professional Summary</AccordionTrigger>
          <AccordionContent>
            <ProfessionalSummary />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Employment History</AccordionTrigger>
          <AccordionContent>
            <EmploymentHistory />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Education</AccordionTrigger>
          <AccordionContent>
            <Education />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Websites & Social Links</AccordionTrigger>
          <AccordionContent>
            <ExtraLinks />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Skills</AccordionTrigger>
          <AccordionContent>
            <Skills />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Certifications</AccordionTrigger>
          <AccordionContent>
            <Certifications />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function ResumePreviewArea() {
  return (
    <>
      <TabsContent value="cover-letter" className="mt-0 border-0 p-0">
        <div className="flex h-full flex-col space-y-4">
          <Textarea
            placeholder="Resume Preview Will Be Here"
            className="min-h-[400px] flex-1 border-0 bg-gray-500/10 p-4 shadow-lg md:min-h-[700px] lg:min-h-[700px]"
          />
          <div className="flex items-center space-x-2">
            <Button>Submit</Button>
            <Button variant="secondary">
              <span className="sr-only">Show history</span>
              <CounterClockwiseClockIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="resume" className="mt-0 border-0 p-0">
        <div className="flex flex-col space-y-4">
          <div className="grid h-full gap-6 lg:grid-cols-2">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-1 flex-col space-y-2">
                <Label htmlFor="input">Input</Label>
                <Textarea
                  id="input"
                  placeholder="We is going to the market."
                  className="flex-1 lg:min-h-[580px]"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="instructions">Instructions</Label>
                <Textarea id="instructions" placeholder="Fix the grammar." />
              </div>
            </div>
            <div className="mt-[21px] min-h-[400px] rounded-md border bg-muted lg:min-h-[700px]" />
          </div>
          <div className="flex items-center space-x-2">
            <Button>Submit</Button>
            <Button variant="secondary">
              <span className="sr-only">Show history</span>
              <CounterClockwiseClockIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </TabsContent>
    </>
  );
}

function JobDetailsColumn() {
  return (
    <div className="flex h-full w-full flex-col space-y-2">
      <div className="grid gap-2">
        <h2 className="text-lg font-bold">Document</h2>
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="cover-letter">
            <span className="text-center">Cover Letter</span>
          </TabsTrigger>
          <TabsTrigger value="resume">
            <span className="text-center">Resume</span>
          </TabsTrigger>
        </TabsList>
        <Separator />
      </div>
      <h2 className="text-lg font-bold">Job Details</h2>
      <JobDetails />
    </div>
  );
}

export default function ResumeBuilderPage() {
  return (
    <div className="w-full">
      <div className="md:hidden">
        <Image
          src="/examples/playground-light.png"
          width={1280}
          height={916}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/playground-dark.png"
          width={1280}
          height={916}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-col md:flex">
        <ComponentHeader />
        <Separator />
        <Tabs defaultValue="complete" className="flex-1">
          <div className="container h-full">
            <div className="grid h-full items-stretch gap-6 bg-background py-4 md:grid-cols-[1fr_4fr_1fr]">
              <div className="hidden flex-col sm:flex md:order-1">
                <UserInformationColumn />
              </div>
              <div className="rounded-md md:order-2">
                <ResumePreviewArea />
              </div>
              <div className="hidden flex-col space-y-4 sm:flex md:order-3">
                <JobDetailsColumn />
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
