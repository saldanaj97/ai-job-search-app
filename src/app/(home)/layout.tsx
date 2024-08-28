import { type ReactNode } from 'react';
import AuthComponent from '~/components/navbar/AuthComponent';
import Navbar from '~/components/navbar/Navbar';
import { Footer } from '~/components/ui/footer';

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar>
        <AuthComponent />
      </Navbar>
      {children}
      <Footer />
    </div>
  );
}

export default RootLayout;
