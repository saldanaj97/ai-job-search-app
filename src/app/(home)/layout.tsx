import React, { type ReactNode } from 'react';
import { Footer } from '~/components/ui/footer';

const RootLayout: React.FC<{ children: ReactNode }> = async ({ children }) => {
  return (
    <div className="min-h-screen">
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
