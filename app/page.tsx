'use client'
import { PythonProvider } from 'react-py'
import  Codeblock  from '@/components/PythonCell'
import { createContext } from 'react'
import Playground from '@/components/Playground';
import CodeEditor from '@/components/CodeEditor';

export default function Home() {
  return (
    <>
    <PythonProvider>
      <main>
        <Codeblock />
      </main>
      <Playground/>
      
    </PythonProvider>
    </>
  );
}
