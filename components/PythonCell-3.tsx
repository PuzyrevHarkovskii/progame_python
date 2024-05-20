'use client'
import { useState, useEffect, useCallback } from 'react'
import { usePython } from 'react-py'
import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { FaPlay } from "react-icons/fa";


function Codeblock3() {
  const [input, setInput] = useState("print('hello world')")

  useEffect(() => {
    navigator.serviceWorker
      .register('/react-py-sw.js')
      .then((registration) =>
        console.log(
          'Service Worker registration прошла успешно: ',
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

  const handleEditorChange = useCallback((val: string, viewUpdate: any) => {
    console.log('val:', val)
    setInput(val)
  }, [])

  return (
    <>
      <div className="relative color-red mb-10 flex flex-col">
        {isLoading ? <p>Загрузка...</p> : <p>Компилятор готов</p>}
        <form onSubmit={handleSubmit}>
            
          <CodeMirror
            value={input}
            height="20vh"
            extensions={[python()]}
            onChange={handleEditorChange}
            theme={dracula}
            style={{ fontSize: '1.5em' }}
          />
          
          <input
            type="submit"
            value={!isRunning ? 'Запуск кода' : 'В процессе...'}
            disabled={isLoading || isRunning}
          />
        </form>

        {isAwaitingInput && (
          <form onSubmit={(e) => {
            e.preventDefault()
            const form = e.target as HTMLFormElement
            const inputElement = form.elements.namedItem('input') as HTMLInputElement
            if (inputElement) {
              sendInput(inputElement.value)
              inputElement.value = ''
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

        <p>Результат: </p>
        <pre>
          <code>{stdout}</code>
        </pre>
        <p>Ошибка: </p>
        <pre>
          <code>{stderr}</code>
        </pre>
      </div>
    </>
  )
}

export default Codeblock3
