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

export default function Variables() {
  return (
    <div>
      <Container maxW="container.md">
        <Box p={5}>
          <ChakraProvider theme={MainTheme}>
            <Heading size={"3xl"} textAlign={"center"}>
              Строки
            </Heading>
            <Heading>Что такое строки</Heading>
            <Text>
              Переменной в Питоне можно присвоить не только число, но и строку:
            </Text>

            <CodeFragment
              code={`a = "Пример строки"`}
              language={"python"}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Питон понимает, что это строка по кавычкам с двух сторон от
              строки. Это тоже часть синтаксиса языка — с двух сторон от строки
              должны быть кавычки.
            </Text>
            <Text>Если кавычку не закрыть</Text>
            <CodeFragment
              code={`a = "Пример строки`}
              language={"python"}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>Питон выдаст ошибку</Text>
            <CodeFragment
              code={`SyntaxError: EOL while scanning string literal`}
              language={"language"}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>Кавычки могут быть как двойные, так и одинарные. Главное, чтобы закрывающая кавычка была такой же, как и открывающая.</Text>
            <CodeFragment
              code={`a = "Пример строки"
b = 'Второй пример с одинарными кавычками'`}
              language={"python"}
              showLineNumbers={false}
            ></CodeFragment>
            <Quiz question={question} options={options} correctAnswers={correctAnswers} />
          </ChakraProvider>
          <NavigationButtons leftButtonLink="/lessons/PEP8"
            rightButtonLink="/lessons/Variables-Operations"/>
        </Box>
      </Container>
    </div>
  );
}