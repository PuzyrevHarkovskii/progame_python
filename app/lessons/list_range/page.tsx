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
            <PythonProvider>
              <Heading size={"3xl"} textAlign={"center"}>
                Функция range
              </Heading>
              <Text>
                Встроенная функция языка range нужна для того, чтобы
                генерировать последовательности чисел. Результат работы range
                очень похож на список и с ним можно работать также, как со
                списком. Например, использовать для создания цикла for. Вот этот
              </Text>
              <CodeFragment
                code={`i = 0
while i < 100:
    print(i)
    i += 1`}
                language={"python"}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>и этот код</Text>
              <CodeFragment
                code={`for i in range(100):
print(i)`}
                language={"python"}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                выполнятся и дадут одинаковый результат. Однако, второй вариант
                легче читается и выглядит лучше. В нем нет лишней
                переменной-счетчика и условия, в котором легко можно сделать
                ошибку.
              </Text>
              <OrderedList>
                <Text>Есть три способа вызова range:</Text>
                <ListItem>с одним аргументом — range(стоп)</ListItem>
                <ListItem>с двумя — range(старт, стоп)</ListItem>
                <ListItem>и с тремя — range(старт, стоп, шаг)</ListItem>
              </OrderedList>
              <Text>
                Вызвав range с одним аргументом, вы получите последовательность
                чисел от 0 до числа, которое вы обозначили как конечное.
                Конечное число не будет включено в последовательность. Эта
                программа
              </Text>
              <CodeFragment
                code={`for i in range(3):
print(i)`}
                language={"python"}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет на экран</Text>
              <CodeFragment
                code={`0
1
2`}
                language={"python"}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                При вызове range с двумя аргументами, будет создана
                последовательность от числа старт и до числа стоп. То есть эта
                программа
              </Text>
              <CodeFragment
                code={`for i in range(5, 8):
print(i)`}
                language={"python"}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет на экран</Text>
              <CodeFragment
                code={`5
6
7`}
                language={"python"}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Третий параметр задает шаг, с которым будут увеличиваться или
                уменьшаться числа в последовательности. Выводом на экран этой
                программы
              </Text>
              <CodeFragment
                code={`for i in range(1, 10, 3):
print(i)`}
                language={"python"}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>будет</Text>
              <CodeFragment
                code={`1
4
7`}
                language={"python"}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Параметр шаг может быть отрицательным. В этом случае параметр
                старт должен быть больше параметра стоп
              </Text>
              <CodeFragment
                code={`for i in range(10, 1, -3):
print(i)`}
                language={"python"}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет на экран</Text>
              <CodeFragment
                code={`10
7
4`}
                language={"python"}
                showLineNumbers={false}
              ></CodeFragment>
              <Heading>Генератор паролей</Heading>
              <Text>
                В современном мире у каждого человека если не сотни, то десятки
                разных учетных записей на самых разных сайтах. И надежный пароль
                к каждой учетной записи очень важен. И хоть для создания
                случайных паролей уже существует огромное множество программ, в
                этом уроке мы напишем еще одну.
              </Text>
              <Box
                py={3}
                px={3}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                borderLeftColor="blue.300"
                borderLeftWidth="6px"
              ><UnorderedList>
                <ListItem>Первым делом создайте строку с допустимыми для пароля символами. Она должна называться symbols и может выглядеть примерно так</ListItem>
                <CodeFragment
                code={`symbols = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'`}
                language={"python"}
                showLineNumbers={false}
              ></CodeFragment>
              <ListItem>После этого нужно получить от пользователя длину пароля с помощью функции input. Далее нужно написать цикл for и в каждой его итерации получать случайный символ из строки symbols с помощью функции choice из уже знакомого вам модуля random. Ее описание можно посмотреть в нашем справочнике.</ListItem>
              <ListItem>Для того чтобы написать цикл for на нужное количество итераций, используйте функцию range. Сгенерированный пароль из заданного количества символов нужно вывести на экран одной строкой.</ListItem>
                </UnorderedList></Box>
            <PythonCompiler/>
            </PythonProvider>
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
