/* eslint-disable prettier/prettier */
import { type ReactNode } from 'react';
import AuthComponent from '~/components/navbar/AuthComponent';
import { MemberNavbar } from '~/components/navbar/Navbar';
import { Footer } from '~/components/ui/footer';

// TODO - Different navbar for members
export default async function MembersLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <MemberNavbar>
        <AuthComponent />
      </MemberNavbar>
      <div className="flex flex-col items-center justify-center gap-4">
        {children}
      </div>
      <Footer />
    </div>
  );
}
