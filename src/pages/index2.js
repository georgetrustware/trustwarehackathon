import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { ConnectButton } from "thirdweb/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">My Telegram Mini App</h1>
        
        {/* thirdweb ConnectButton */}
        <ConnectButton
          client={{ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID }}
        />

        <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Connect your wallet to get started!
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://thirdweb.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            thirdweb Dashboard
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://thirdweb.com/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn thirdweb
        </a>
      </footer>
    </div>
  );
}