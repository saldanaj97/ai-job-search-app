import { type ReactNode } from 'react';
import { Footer } from '~/components/ui/footer';

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      {children}
      <Footer />
    </div>
  );
}

export default RootLayout;
