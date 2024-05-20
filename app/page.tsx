'use client'
import { PythonProvider } from 'react-py'
import  Codeblock  from '@/components/PythonCell'
import { createContext, useEffect } from 'react'
import CodeSnippet from '@/components/Snippet'
import { NextUIProvider } from '@nextui-org/system'
import Link from 'next/link'






export default function Home() {
  useEffect(() => {
    navigator.serviceWorker
      .register('/react-py-sw.js')
      .then((registration) =>
        console.log(
          'Service Worker registration successful with scope: ',
          registration.scope
        )
      )
      .catch((err) => console.log('Service Worker registration failed: ', err))
  }, [])
  
  return (
    <>
    <PythonProvider>
    <NextUIProvider>
    <CodeSnippet/>
    <Link href="/lessons">К уроку</Link>
    <main>
      
        <Codeblock />
      </main>
      </NextUIProvider>
    </PythonProvider>
    </>
  );
}
