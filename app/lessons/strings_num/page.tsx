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

const options = ["Ошибку", "24", "1410", "Приветствие"];
const correctAnswers = ["1410"];
const question = "Что выведет на экран эта программа?";

export default function StringsNum() {
  return (
    <div>
      <Container maxW="container.md">
        <Box p={5}>
          <ChakraProvider theme={MainTheme}>
            <Heading size={"3xl"} textAlign={"center"}>
              Из числа в строку
            </Heading>
            <Text >
              В прошлом уроке мы пытались склеить строку с числом и у нас ничего
              не вышло, потому что число и строка — это разные типы данных.
            </Text>
            <Text>
              В Питоне есть функции для преобразования из одного типа в другой.
              Например функция str преобразует переданный аргумент в строку.
            </Text>
            <Text>
              То есть, если переписать программу из прошлого урока, она
              заработает без ошибок
            </Text>
            <CodeFragment
              language="python"
              code={`result = 55 + 125
result = str(result)
print("Результат=" + result)`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Второй строкой мы присваиваем переменной result новое значение,
              которое возвращает функция str. То есть str как бы превращает
              число в строку.
            </Text>
            <Text>
              Возможно, вы могли подумать что есть решение проще — обернуть
              числа в кавычки
            </Text>
            <CodeFragment
              language="python"
              code={`result = "55" + "125"
print("Результат=" + result)`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Эта программа выполнится без ошибок — но и результат будет
              неверным
            </Text>
            <CodeFragment
              language="python"
              code={`Результат=55125`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              потому что Питон склеит 55 и 125 по правилам строк, а не по
              правилам чисел.
            </Text>

            <Quiz
              question={question}
              options={options}
              correctAnswers={correctAnswers}
            />
            <CodeFragment
              language="python"
              code={`a = "14"
b = "10"
print(a + b)`}
              showLineNumbers={false}
            ></CodeFragment>

            <Box
              py={3}
              px={3}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="md"
              borderLeftColor="blue.300"
              borderLeftWidth="6px"
            >
              <UnorderedList>
                <ListItem>
                  Переменной a присвойте результат выражения 55 + 105.
                  Переменной b присвойте результат конкатенации строки "Сумма="
                  и преобразованной в строку переменной a.
                </ListItem>
                <ListItem>
                  Переменная a должна остаться целым числом. Преобразование
                  числа в строку можно сделать с помощью вспомогательной
                  переменной и функции преобразования типа str. Вспомогательную
                  переменную можете назвать как хотите.
                </ListItem>
                <ListItem>Переменную b выведите на экран.</ListItem>
              </UnorderedList>
            </Box>
            <PythonProvider>
              <PythonCompiler />
            </PythonProvider>
          </ChakraProvider>
          <NavigationButtons
            leftButtonLink="/lessons/strings_conc"
            rightButtonLink="/lessons/Variables_Operations"
          />
        </Box>
      </Container>
    </div>
  );
}
