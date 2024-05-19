"use client"

import { useState } from 'react'
import { usePython } from 'react-py'
import Editor from '@monaco-editor/react'

const CodeEditor = () => {
    const [input, setInput] = useState('')

    // Use the usePython hook to run code and access both stdout and stderr
    const { runPython, stdout, stderr, isLoading, isRunning } = usePython()

    const handleEditorChange = (value) => {
        setInput(value)
    }

    return (
        <>
            <Editor
                height="90vh"
                defaultLanguage="python"
                value={input}
                onChange={handleEditorChange}
            />
            {isLoading ? <p>Loading...</p> : <p>Ready!</p>}
            <input
                type="submit"
                value={!isRunning ? 'Run' : 'Running...'}
                disabled={isLoading || isRunning}
                onClick={(e) => {
                    e.preventDefault()
                    runPython(input)
                }}
            />
            <p>Output</p>
            <pre>
                <code>{stdout}</code>
            </pre>
            <p>Error</p>
            <pre>
                <code>{stderr}</code>
            </pre>
        </>
    )
}

export default CodeEditor
