import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";

import "./globals.css";
// import ActiveSectionContextProvider from "@/context/active-section-context";
// import ThemeSwitch from "@/components/theme-switch";
// import ThemeContexrProvider from "@/context/theme-context";
// import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "Abigail's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={`font-plexmono antialiased text-gray-950 relative h-[50000px] pt-28 sm:pt-36`}>
        {/* <ThemeContextProvider>
          <ActiveSectionContextProvider> */}
        <div className="bg-[#f870467d] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-[#9bbcff82] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
          
          <Header />
          {children}
          <Footer />

          {/* <Toaster position="top-right" />
          <ThemeSwitch/>
          </ActiveSectionContextProvider>
        </ThemeContextProvider> */}
       
      </body>
    </html>
  );
}