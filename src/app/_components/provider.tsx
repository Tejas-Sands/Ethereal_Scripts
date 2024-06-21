"use client"

import { SessionProvider } from "next-auth/react";

interface SessionPProps {
    children: React.ReactNode;
    session: Session;
  }  

export default function SessionP({children, session}: SessionPProps){
    return <>
    <SessionProvider session={session}>{children}</SessionProvider>
    </>
}