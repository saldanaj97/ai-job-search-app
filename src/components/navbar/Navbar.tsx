'use client';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React, { useState } from 'react';
import AuthComponent from './AuthComponent';

const routes: { title: string; href: string }[] = [
  { title: 'About Us', href: '/about-us' },
  { title: 'Services', href: '#' },
  { title: 'FAQs', href: '#' },
];

export default function Navbar({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="top-0 z-50 flex h-16 w-full items-center justify-between px-6 lg:px-16">
      <Link href={'/'} className="shrink-0">
        <h1 className="w-[200px] text-2xl font-bold text-accent-foreground">
          WannaBeHired.ai
        </h1>
      </Link>

      {/* Center the links with auto margins */}
      <div className="hidden grow justify-center md:flex">
        <div className="flex gap-4">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.href}
              className={`inline-flex h-10 items-center px-4 py-2 text-[16px] text-muted-foreground transition-colors hover:text-accent-foreground`}
            >
              {route.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="w-[200px] shrink-0">{children}</div>

      {menuOpen && (
        <MobileMenu toggleMenu={toggleMenu}>
          <AuthComponent />
        </MobileMenu>
      )}

      <button onClick={toggleMenu} className="md:hidden">
        {menuOpen ? (
          <XMarkIcon className="h-7 w-7" />
        ) : (
          <Bars3Icon className="h-7 w-7" />
        )}
      </button>
    </div>
  );
}

const MobileMenu: React.FC<{
  toggleMenu: () => void;
  children: React.ReactNode;
}> = ({ toggleMenu, children }) => {
  return (
    <div className="absolute right-0 top-16 flex h-[calc(100vh-64px)] w-full flex-col">
      <div className="flex w-full grow flex-col gap-1 bg-background px-4 pb-2 sm:hidden">
        {routes.map((route, index) => (
          <Link
            key={index}
            href={route.href}
            // onClick={toggleMenu}
            className={`inline-flex h-10 w-full items-center text-sm text-muted-foreground transition-colors hover:text-accent-foreground sm:w-auto`}
          >
            {route.title}
          </Link>
        ))}
        {children}
      </div>
      <div className="h-screen w-full bg-background/60 sm:hidden" />
    </div>
  );
};
