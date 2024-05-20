'use client'
import { useState, useEffect } from 'react'
import { usePython } from 'react-py'
import Editor from '@monaco-editor/react';

function Codeblock() {
  const [input, setInput] = useState('')

  useEffect(() => {
    navigator.serviceWorker
      .register('/react-py-sw.js')
      .then((registration) =>
        console.log(
          'Service Worker registration успешна с областью: ',
          registration.scope
        )
      )
      .catch((err) => console.log('Service Worker registration не удалась: ', err))
  }, [])
  
  // Use the usePython hook to run code and access both stdout and stderr
  const { runPython, stdout, stderr, isLoading, isRunning, isAwaitingInput, sendInput } = usePython()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    runPython(input)
  }

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setInput(value)
    }
  }

  return (
    <>
      <div className="relative color-black mb-10 flex flex-col">
        {isLoading ? <p>Загрузка...</p> : <p>Готово!</p>}
        <form onSubmit={handleSubmit}>
          <Editor
            onChange={handleEditorChange}
            height="20vh"
            defaultLanguage="python"
            defaultValue="// some comment"
            options={{
              fontSize: 20,
              language: 'python',
            }}
          />
         
          <input
            type="submit"
            value={!isRunning ? 'Run' : 'Running...'}
            disabled={isLoading || isRunning}
          />
        </form>

        {isAwaitingInput && (
          <form onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement
            const inputElement = form.elements.namedItem('input') as HTMLInputElement
            if (inputElement) {
              sendInput(inputElement.value);
              inputElement.value = '';
            }
          }}>
            <input
              name="input"
              type="text"
              placeholder='Enter'
            />
            <button type="submit">Submit</button>
          </form>
        )}

        <p>Output</p>
        <pre>
          <code>{stdout}</code>
        </pre>
        <p>Error</p>
        <pre>
          <code>{stderr}</code>
        </pre>
      </div>
    </>
  )
}
export default Codeblock
