"use client"

import Editor from '@monaco-editor/react';

const Playground = () => {
    return (
        <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />
    )
}


export default Playground;