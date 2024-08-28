import { type ReactNode } from 'react';
import AuthComponent from '~/components/navbar/AuthComponent';
import Navbar from '~/components/navbar/Navbar';

export default async function ServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-col items-center justify-center gap-4">
        <Navbar>
          <AuthComponent />
        </Navbar>
        {children}
      </div>
    </div>
  );
}
