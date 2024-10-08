import '~/styles/globals.css';

import { GeistSans } from 'geist/font/sans';
import { cookies } from 'next/headers';

import React from 'react';
import ThemeProvider from '~/components/ThemeProvider';
import { Toaster } from '~/components/ui/toaster';
import { TRPCReactProvider } from '~/trpc/react';

export const metadata = {
  title: 'WannabeHired.ai',
  description:
    'WannabeEmployed.ai - AI-powered job application assistant that boosts your chances of getting noticed. Optimize your job search, create compelling resumes, and land more interviews with our intelligent tools.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable}`}
    >
      <body className="flex w-full justify-center">
        <div className="w-full max-w-[1620px]">
          <TRPCReactProvider cookies={cookies().toString()}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </TRPCReactProvider>
        </div>
      </body>
    </html>
  );
}
