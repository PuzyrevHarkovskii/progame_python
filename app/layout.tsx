import ProgressBar from "@/components/ui/ProgressBar/ProgressBar";
import Navbar from "@/components/ui/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import MainTheme from "@/components/MainTheme";
import LargeWithLogoLeft from "@/components/ui/Footer";
import "../public/fonts.css";
import localfont from "next/font/local";
import { Global } from "@emotion/react";
import "../public/fonts.css";
import BackToTopButton from "@/components/BackToTopButton";

const inter = Inter({ subsets: ["latin"] });

const euclid = localfont({
  src: [
    {
      path: "../public/fonts/EuclidCircularARegular.ttf",
      weight: "500",
    },
  ],
  variable: "--font-euclid",
});

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
      <body className={`${euclid.variable} font-sansmono`}>
        <ChakraProvider>
          <Nav />
          <ProgressBar />

          <main>{children}</main>

          {/* <BackToTopButton/> */}
          <LargeWithLogoLeft />
        </ChakraProvider>
      </body>
    </html>
  );
}
