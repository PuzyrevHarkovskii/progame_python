import React, { ReactNode, useState } from 'react';
import { Box, Code, IconButton, useClipboard, Tooltip, Flex } from '@chakra-ui/react';
import { CopyIcon, CheckIcon } from '@chakra-ui/icons';
import { Wrap, WrapItem } from '@chakra-ui/react'

interface CodeSnippetProps {
  children: ReactNode;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ children }) => {
  const { hasCopied, onCopy } = useClipboard(children as string);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box 
      width="100%" 
      position="relative" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box whiteSpace="pre-wrap" width="100%" overflowX="auto" bg="gray.100" my={5} p={4} borderRadius="xl">
        <Code whiteSpace="pre-wrap" width="100%">
          {children}
        </Code>
      </Box>
      {isHovered && (
        <Tooltip label={hasCopied ? "Скопировано!" : "Копировать"} closeOnClick={false} hasArrow>
          <IconButton
            aria-label="Copy code"
            icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
            onClick={onCopy}
            size="sm"
            position="absolute"
            top="8px"
            right="8px"
          />
        </Tooltip>
      )}
    </Box>
  );
};

export default CodeSnippet;
