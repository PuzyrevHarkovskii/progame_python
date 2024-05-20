'use client'
import Link from 'next/link';
import { Container, Box, Heading, Text, Code } from '@chakra-ui/react';
import Codeblock from '@/components/PythonCell';
import { PythonProvider } from 'react-py';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import Codeblock3 from '@/components/PythonCell-3';


export default function SecondSteps() {
  return (
    <div>
      <PythonProvider>
     <Codeblock3/>
     </PythonProvider>
    </div>
  );
}