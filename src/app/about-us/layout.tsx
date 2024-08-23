import { type ReactNode } from 'react';

export default async function AboutUsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex-column flex items-center justify-center gap-4">
        {children}
      </div>
    </div>
  );
}
