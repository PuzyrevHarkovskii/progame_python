
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { dracula } from '@uiw/codemirror-theme-dracula';

function PythonEditor() {
  const [value, setValue] = React.useState("print('hello world')");
  const onChange = React.useCallback((val: string, viewUpdate: any) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  return <CodeMirror value={value}
   height="200px"
      extensions={[python()]}
     onChange={onChange}
     theme={dracula}
     />;
}
export default PythonEditor;
