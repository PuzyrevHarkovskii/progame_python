"use client";
import { PythonProvider } from "react-py";
import Codeblock from "@/components/PythonCell";
import { useEffect } from "react";
import { NextUIProvider } from "@nextui-org/system";
import Link from "next/link";
import PythonEditor from "@/components/PythonCell-2";
import "./globals.css";
import Quiz from "@/components/Quiz";

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
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const correctAnswers = ['Option 1', 'Option 3'];
  return (
    
    <>
      
        <NextUIProvider>
          <Link href="/lessons/lesson-1">К уроку</Link>
          <Link href="/lessons/lesson-2">К уроку</Link>

          <Quiz options={options} correctAnswers={correctAnswers} />
        </NextUIProvider>
     
    </>
  );
}
