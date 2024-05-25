
import ProgressBar from "@/components/ui/ProgressBar/ProgressBar";
import Navbar from "@/components/ui/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import MainTheme from "@/components/MainTheme";
import LargeWithLogoLeft from "@/components/ui/Foter";
import '../public/fonts.css';
import { Global } from "@emotion/react";





const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pyteezy",
  description: "Учебник Python",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
       
          <Nav/>
          <ProgressBar />
          <main>
           
          {children}
          
          </main>
          
          {/* <BackToTopButton/> */}
          <LargeWithLogoLeft/>
        </ChakraProvider>
      </body>
    </html>
  );
}
