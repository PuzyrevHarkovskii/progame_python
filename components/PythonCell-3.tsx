'use client'
import { useState, useEffect, useCallback } from 'react'
import { usePython } from 'react-py'
import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { FaPlay } from "react-icons/fa";
import { Container, Box, Heading, Text, Code } from '@chakra-ui/react';
import {  Flex, Button, Input, VStack, useColorModeValue } from '@chakra-ui/react';


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
    <Flex
      
      justify="center"
      minHeight="1vh"
     
      p={4}
    >
      <div className="relative color-red mb-10 flex flex-col">
        {isLoading ? <p>Загрузка...</p> : <p>Компилятор готов</p>}
        <form onSubmit={handleSubmit}>
        <div className="p-4 sm:min-w-[35em] bg-gray-800 rounded-xl shadow-lg shadow-gray-700/50 ">
          <CodeMirror
            value={input}
            height="20vh"
            extensions={[python()]}
            onChange={handleEditorChange}
            theme={dracula}
            
            style={{ fontSize: '1.5em', }}
          />
          </div>
          
          <input
            type="submit"
            value={!isRunning ? 'Запуск кода' : 'В процессе...'}
            disabled={isLoading || isRunning}
            className={`px-4 py-2 rounded-md text-white font-semibold 
    ${isLoading || isRunning ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'}
  `}
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
            <button type="submit">Ввести</button>
          </form>
        )}

        <p>Результат: </p>
        <pre>
          <code>{stdout}</code>
        </pre>
        <p>Ошибка: </p>
        <pre>
          <code className="text-red-500">{stderr}</code>
        </pre>
      </div>
      </Flex>
    </>
  )
}

export default Codeblock3
