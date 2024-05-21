"use client";
import { PythonProvider } from "react-py";
import Codeblock from "@/components/PythonCell";
import { useEffect } from "react";
import { NextUIProvider } from "@nextui-org/system";
import Link from "next/link";
import PythonEditor from "@/components/PythonCell-2";
import "./globals.css";

export default function Home() {
  useEffect(() => {
    navigator.serviceWorker
      .register("/react-py-sw.js")
      .then((registration) =>
        console.log(
          "Service Worker registration successful with scope: ",
          registration.scope
        )
      )
      .catch((err) => console.log("Service Worker registration failed: ", err));
  }, []);

  return (
    <>
      <PythonProvider>
        <NextUIProvider>
          <Link href="/lessons/lesson-1">К уроку</Link>
          <Link href="/lessons/lesson-2">К уроку</Link>

          <main>
            <PythonEditor />
          </main>
        </NextUIProvider>
      </PythonProvider>
    </>
  );
}
