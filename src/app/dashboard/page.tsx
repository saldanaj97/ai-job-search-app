import { type User } from '@supabase/supabase-js';
import React from 'react';

const DashboardPage: React.FC<{ user: User }> = ({ user }: { user: User }) => {
  const { email } = user;

  return (
    <div className="flex h-screen flex-col items-center">
      <div className="flex-column flex items-center justify-center gap-4">
        Dashboard
      </div>
      <div>Hello, {email}</div>
    </div>
  );
};

export default DashboardPage;