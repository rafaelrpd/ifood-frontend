// app/Providers.jsx

'use client';

import { SessionProvider } from 'next-auth/react';
import NavigationBar from './components/Navbar';

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <NavigationBar />
      {children}
    </SessionProvider>
  );
}
