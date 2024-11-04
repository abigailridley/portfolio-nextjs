"use client"

import Footer from "@/components/footer";
import Header from "@/components/header";
import ThemeSwitch from "@/components/theme-switch";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  const [logoSrc, setLogoSrc] = useState('/favicon.ico');

  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`font-plexmono antialiased text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <ActiveSectionContextProvider>
          <Header logoSrc={logoSrc} />
          <ThemeSwitch setLogoSrc={setLogoSrc} />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}