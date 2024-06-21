"use client"

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface SessionPProps {
    children: React.ReactNode;
    session: Session | null;
  }  

export default function SessionP({children, session}: SessionPProps){
    return <>
    <SessionProvider session={session}>{children}</SessionProvider>
    </>
}