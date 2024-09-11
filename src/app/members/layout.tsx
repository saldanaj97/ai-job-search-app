/* eslint-disable prettier/prettier */
import { type ReactNode } from 'react';
import AuthComponent from '~/components/navbar/AuthComponent';
import Navbar from '~/components/navbar/Navbar';

// TODO - Different navbar for members
export default async function MembersLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Navbar>
        <AuthComponent />
      </Navbar>
      <div className="flex-column flex items-center justify-center gap-4">
        {children}
      </div>
    </div>
  );
}
