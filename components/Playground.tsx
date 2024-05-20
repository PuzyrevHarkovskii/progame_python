"use client"

import Editor from '@monaco-editor/react';

const Playground = () => {
    return (
        <Editor height="40vh" defaultLanguage="python" defaultValue="// some comment" options={{
            fontSize: 20,
            language: 'python',
        }}/>
    )
}


export default Playground;