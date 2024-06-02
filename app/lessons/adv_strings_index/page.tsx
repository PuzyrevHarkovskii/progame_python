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

export default function App() {
  return (
    <div>
      <Container maxW="container.md">
        <Box p={5}>
          <ChakraProvider theme={MainTheme}>
            <Heading size={"3xl"} textAlign={"center"}>
              Индексы строки
            </Heading>
            <PythonProvider>
              <Text>
                В Питоне можно получить символ из строки по его индексу.
                Нумерация индексов начинается с нуля.
              </Text>
              <Text>
                Для получения символа строки надо написать саму строку или имя
                переменной, открывающую квадратную скобку [, индекс символа — то
                есть его номер в строке и закрывающую квадратную скобку ].
              </Text>
              <Text>Например, эта программа выведет на экран букву «П»</Text>

              <CodeFragment
                language="python"
                code={`foo = "Привет!"
print(foo[0])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Если же указать несуществующий индекс</Text>
              <CodeFragment
                language="python"
                code={`foo = "Привет"
print(foo[999])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>программа выдаст ошибку</Text>
              <CodeFragment
                language="python"
                code={`IndexError: string index out of range`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Для того, чтобы таких ошибок не было, нужно делать проверки
                длины строки в программе.
              </Text>
              <Text>
                Также в Питоне поддерживаются отрицательные индексы. В этом
                случае нумерация идёт с конца строки. То есть −1 — последний
                символ строки, −2 — предпоследний и так далее до начала строки.
                Следующая программа выведет на экран «е» — предпоследнюю букву
                слова «Привет»
              </Text>
              <CodeFragment
                language="python"
                code={`foo = "Привет"
print(foo[-2])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Указание несуществующего отрицательного индекса также приведёт к
                ошибке IndexError.
              </Text>
              <Text>
                Также индекс можно указывать не напрямую, а с помощью переменной
                или даже с помощью арифметического выражения
              </Text>

              <CodeFragment
                language="python"
                code={`foo = "Привет"
i = 0
print(foo[i], foo[i + 1])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Однако, нужно помнить, что индексом может быть только целое
                число. Поэтому использование переменной не целого типа приведет
                к ошибке.
              </Text>
            </PythonProvider>
          </ChakraProvider>
          <NavigationButtons
            leftButtonLink="/lessons/adv_strings"
            rightButtonLink="/lessons/Variables-Operations"
          />
        </Box>
      </Container>
    </div>
  );
}

{
  /* <CodeFragment
language="python"
code={`result = 55 + 125
print("Результат=" + result)`}
showLineNumbers={false}
></CodeFragment> */
}

{
  /* <Box
py={3}
px={3}
border="1px solid"
borderColor="gray.200"
borderRadius="md"
borderLeftColor="blue.300"
borderLeftWidth="6px"
> */
}
