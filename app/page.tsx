'use client'
import { PythonProvider } from 'react-py'
import  Codeblock  from '@/components/PythonCell'
import { createContext, useEffect } from 'react'
import Playground from '@/components/Playground';
import PythonEditor from '@/components/PythonCell-2';
import CodeEditor from '@/components/React-py';

import "./globals.css";


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
     
    <main>
        <Codeblock />
      </main>
      
    </PythonProvider>
    </>
  );
}
