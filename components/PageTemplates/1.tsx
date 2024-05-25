"use client";
import {
  Container,
  Box,
  Heading,
  Text,
  Code,
  OrderedList,
} from "@chakra-ui/react";
import { PythonProvider } from "react-py";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { List, ListItem, UnorderedList, Image } from "@chakra-ui/react";
import PythonCompiler from "@/components/PythonCompiler";
import CodeFragment from "@/components/CodeFragment";
import MainTheme from "@/components/MainTheme";
import {
  ChakraProvider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

import Quiz from "@/components/Quiz";
import NavigationButtons from "@/components/ui/NavigationButtons";

const options = ["'строка №1", '"строка №2"', "'строка №3'", 'строка №4"'];
const correctAnswers = ['"строка №2"', "'строка №3'"];
const question = "Какие строки верные с точки зрения Питона?";

export default function StringsConc() {
  return (
    <div>
      <Container maxW="container.md">
        <Box p={5}>
          <ChakraProvider theme={MainTheme}>
            <Heading size={'3xl'} textAlign={'center'}></Heading>
          </ChakraProvider>
          <NavigationButtons
            leftButtonLink="/lessons/PEP8"
            rightButtonLink="/lessons/Variables-Operations"
          />
        </Box>
      </Container>
    </div>
  );
}




{/* <CodeFragment
language="python"
code={`result = 55 + 125
print("Результат=" + result)`}
showLineNumbers={false}
></CodeFragment> */}

{/* <Box
py={3}
px={3}
border="1px solid"
borderColor="gray.200"
borderRadius="md"
borderLeftColor="blue.300"
borderLeftWidth="6px"
> */}
