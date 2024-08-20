import React, { type ReactNode } from 'react';
import AuthComponent from '~/components/navbar/AuthComponent';
import Navbar from '~/components/navbar/Navbar';

const RootLayout: React.FC<{ children: ReactNode }> = async ({ children }) => {
  return (
    <div className="dark-background min-h-screen">
      <Navbar>
        <AuthComponent />
      </Navbar>
      {children}
    </div>
  );
};

export default RootLayout;