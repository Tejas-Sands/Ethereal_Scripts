import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import Nav from "./_components/Nav";
import { TRPCReactProvider } from "~/trpc/react";
import SessionP from "./_components/provider";
  
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Etherial_Scripts",
  description: "Write what you want to",
  icons: [{ rel: "icon", url: "Ethereal Scripts.png" }],
};

export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en">
        <SessionP>
          <body className={`font-sans ${inter.variable}`}>
          <div className="relative z-50 -mt-4 -ml-3 p-6 bg-zinc-900">
                <Nav/>
              </div>
            <TRPCReactProvider cookies={cookies().toString()}>
              {children}
            </TRPCReactProvider>
          </body>
        </SessionP>
        </html>
      );
}
