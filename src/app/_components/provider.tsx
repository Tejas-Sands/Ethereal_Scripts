// components/ClientSessionProvider.tsx
'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { Session } from 'next-auth';

interface ClientSessionProviderProps {
  children: React.ReactNode;
  session: Session | null;
}

const ClientSessionProvider: React.FC<ClientSessionProviderProps> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default ClientSessionProvider;
