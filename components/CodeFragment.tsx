'use client'
import { CopyBlock, dracula } from 'react-code-blocks';
import { Box } from '@chakra-ui/react';

interface CodeFragmentProps {
  code: string;
  language: string;
  showLineNumbers: boolean;
}

const CodeFragment: React.FC<CodeFragmentProps> = ({ code, language, showLineNumbers }) => {
  return (
    <Box borderRadius={"xl"} py={5} width="100%" style={{ fontFamily: 'monospace', fontSize: '1.2em' }}>
    <CopyBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
      codeBlock
      
    />
    </Box>
  );
}

export default CodeFragment;
