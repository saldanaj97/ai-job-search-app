import React from "react";
import AuthComponent from "~/components/navbar/AuthComponent";
import Navbar from "~/components/navbar/Navbar";

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <>
      <Navbar>
        <AuthComponent />
      </Navbar>
      {children}
    </>
  );
};

export default RootLayout;
