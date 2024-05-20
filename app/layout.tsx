import ProgressBar from "@/components/ui/ProgressBar/ProgressBar";
import Navbar from "@/components/ui/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/ui/Footer";
import "./globals.css";
import { GeistProvider, CssBaseline } from '@geist-ui/core'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pyteezy",
  description: "Учебник Python!",
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
        <Navbar/>
        <ProgressBar/>
       
        {children}
    
          <Footer/>
          </ChakraProvider></body>
    </html>
  );
}
