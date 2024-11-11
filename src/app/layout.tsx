"use client"

import Footer from "@/components/footer";
import Header from "@/components/header";
import ThemeSwitch from "@/components/theme-switch";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  const [logoSrc, setLogoSrc] = useState('/favicon.ico');

  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`font-plexmono antialiased text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
      <div className="bg-[#f8704674] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#9bbcffa5] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header logoSrc={logoSrc} />
          <ThemeSwitch  />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
        <Toaster position="top-right" />
        </ThemeContextProvider>
      </body>
    </html>
  );
}