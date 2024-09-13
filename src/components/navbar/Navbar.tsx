'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React, { useState } from 'react';
import AuthComponent from './AuthComponent';

// TODO - Make the services routes a dropdown on hover
//      - Fix the dropdown for the user profile
const routes: { title: string; href: string }[] = [
  { title: 'About Us', href: '/about-us' },
  { title: 'Services', href: '/services' },
  { title: 'FAQs', href: '#' },
];

function MobileMenu({
  toggleMenu,
  children,
}: {
  toggleMenu: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="absolute right-0 top-16 flex h-[calc(100vh-64px)] w-full flex-col">
      <div className="flex w-full grow flex-col gap-1 bg-background px-4 pb-2 sm:hidden">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            // onClick={toggleMenu}
            className="inline-flex h-10 w-full items-center text-sm text-muted-foreground transition-colors hover:text-accent-foreground sm:w-auto"
          >
            {route.title}
          </Link>
        ))}
        {children}
      </div>
      <div className="h-screen w-full bg-background/60 sm:hidden" />
    </div>
  );
}

export function Navbar({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex w-full justify-center px-4 sm:px-6">
      <div className="w-full max-w-[1320px]">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="shrink-0">
            <h1 className="text-2xl font-bold text-accent-foreground">
              WannaBeHired.ai
            </h1>
          </Link>

          <div className="hidden grow justify-center md:flex">
            <div className="flex gap-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="inline-flex h-10 items-center px-4 py-2 text-[16px] text-muted-foreground transition-colors hover:text-accent-foreground"
                >
                  {route.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-4 hidden md:block">{children}</div>
            <button type="button" onClick={toggleMenu} className="md:hidden">
              {menuOpen ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <MobileMenu toggleMenu={toggleMenu}>
          <AuthComponent />
        </MobileMenu>
      )}
    </div>
  );
}

export function MemberNavbar({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="[1484px]:px-0 flex w-full justify-center px-4">
      <div className="flex h-16 w-full max-w-[1484px] items-center justify-between">
        <Link href="/" className="shrink-0">
          <h1 className="text-2xl font-bold text-accent-foreground">
            WannaBeHired.ai
          </h1>
        </Link>

        <div className="flex items-center">
          <div className="hidden md:block">{children}</div>
          <button type="button" onClick={toggleMenu} className="md:hidden">
            {menuOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <MobileMenu toggleMenu={toggleMenu}>
          <AuthComponent />
        </MobileMenu>
      )}
    </div>
  );
}
