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
              Методы строк
            </Heading>

            <PythonProvider>
              <Text>
                Из прошлых уроков вы уже знаете, что строки — это отдельный тип
                данных в Питоне для хранения текстовой информации. Строки,
                содержащие только цифры, можно преобразовывать в число, а любое
                число можно преобразовать в строку. Также строки можно
                конкатенировать, то есть склеивать.
              </Text>
              <Text>
                Кроме этого у строк есть методы, с помощью которых можно делать
                разные полезные действия. Находить слова в строке, заменять
                какое‑то слово в строке на другое или, например, преобразовывать
                буквы строки в заглавные.
              </Text>
              <Text>
                Чтобы вызвать метод, нужно сразу после строки поставить точку и
                написать название метода. Например эта программа
              </Text>

              <CodeFragment
                language="python"
                code={`print("Привет, мир!".upper())`}
                showLineNumbers={false}
              ></CodeFragment>

              <Text>
                выведет на экран исходную строку, все буквы которой
                преобразованы в заглавные
              </Text>
              <CodeFragment
                language="python"
                code={`ПРИВЕТ, МИР!`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                При вызове метода, как и при вызове функции, нужно обязательно
                ставить скобки, даже если аргументов у метода нет. Вот такой код
              </Text>
              <CodeFragment
                language="python"
                code={`print("Привет, мир!".upper)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                не вызовет метод upper, а просто выведет на экран строковое
                представление метода
              </Text>
              <CodeFragment
                language="python"
                code={`<built-in method upper of str object>`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Разумеется, методы строк можно использовать и с переменными. Вот
                эта программа
              </Text>
              <CodeFragment
                language="python"
                code={`my_string = "Ещё раз привет!"
my_string = my_string.upper()
print(my_string)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>тоже сделает все буквы строки заглавными</Text>
              <CodeFragment
                language="python"
                code={`ЕЩЁ РАЗ ПРИВЕТ!`}
                showLineNumbers={false}
              ></CodeFragment>
              <Heading>Программа с методами строк</Heading>
              <Box
                py={3}
                px={3}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                borderLeftColor="blue.300"
                borderLeftWidth="6px"
              >
                <Text>
                  Напишите программу, в которой переменной string присвоено
                  значение, введённое пользователем. Тип переменной string —
                  строка.
                </Text>
                <Text>
                  Программа должна преобразовать строку, введённую пользователем
                  в верхний регистр с помощью метода upper и вывести на экран
                  преобразованную строку.
                </Text>
                <Text>
                  В этом уроке для решения можно использовать дополнительные
                  переменные по своему усмотрению.
                </Text>
              </Box>
              <PythonCompiler />
              <Heading>В нижний регистр!</Heading>
              <Box
                py={3}
                px={3}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                borderLeftColor="blue.300"
                borderLeftWidth="6px"
              >
                <Text>
                  Эта программа должна делать почти то же самое, что и
                  предыдущая. В общем, напишите программу, в которой переменной
                  string присвоено значение, введённое пользователем. Тип
                  переменной string — строка.
                </Text>
                <Text>
                  Программа должна преобразовать строку, введённую пользователем
                  в нижний регистр с помощью метода lower и вывести на экран
                  преобразованную строку.
                </Text>
                <Text>
                  В этом уроке для решения можно использовать дополнительные
                  переменные по своему усмотрению.
                </Text>
              </Box>
              <PythonCompiler />
              <Box
                py={3}
                px={3}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                borderLeftColor="blue.300"
                borderLeftWidth="6px"
              >
                <Text>
                  В одном из прошлых уроков вы написали мини-калькулятор,
                  который складывал два числа и выводил результат на экран. Если
                  пользователь вместо цифр вводил буквы, работа калькулятора
                  завершалась ошибкой. В этом уроке надо будет устранить этот
                  недостаток.
                </Text>
                <Text>
                  С помощью функции input присвойте переменным a и b значения,
                  введённые пользователем. Не торопитесь преобразовывать
                  переменные a и b в числа.
                </Text>
                <Text>
                  Потом программа должна проверить, являются ли обе переменные
                  строками, содержащими только цифры. Сделать это надо с помощью
                  метода строк isdigit(). Если в строке есть только цифры —
                  вызов метода вернёт True. Если есть буквы или строка пустая —
                  False. Чтобы проверить обе строки, используйте логический
                  оператор and.
                </Text>
                <Text>
                  Если обе переменные — строки, которые содержат только цифры,
                  преобразуйте их в числа с помощью функции int, сложите их и
                  выведите на экран результат конкатенации строки «Сумма=» и
                  преобразованной в строку сумму переменных a и b. Иначе
                  выведите на экран текст «Ошибка».
                </Text>
                <Text>
                  При написании программы используйте операторы if и else, а
                  также любые дополнительные переменные по своему усмотрению.
                </Text>
                <Text>
                  Программа, которая получится в итоге, не будет пропускать
                  отрицательные числа. При прохождении это не обязательно, но
                  если хотите немного потренироваться, подумайте, почему так
                  происходит и как это можно исправить.
                </Text>
                <Text>
                  Для поиска подходящего метода используйте справочник.
                  Получившимся решением с проверкой отрицательных чисел можно
                  смело поделиться в комментариях.
                </Text>
              </Box>
              <PythonCompiler />

              <Heading>Длина строки</Heading>
              <Text>
                Для определения длины строки в Питоне есть функция len.
                Достаточно вызвать ее, в качестве аргумента передав строку,
                длину которой мы хотим узнать. Например, эта программа
              </Text>
              <CodeFragment
                language="python"
                code={`string = input()
string_length = len(string)
print(string_length)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                выведет на экран длину строки, которую ввёл пользователь.
              </Text>
              <Text>
                Для проверки минимальной длины строки, введённой пользователем,
                можно написать
              </Text>
              <CodeFragment
                language="python"
                code={`string = input()
if len(string) < 5:
    print("Ошибка! Введите больше пяти символов!")
`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Если нужно проверить, ввёл ли пользователь хотя бы один символ,
                лучше написать вот так
              </Text>
              <CodeFragment
                language="python"
                code={`string = input()
if not string:
    print("Ошибка! Введите хоть что-нибудь!")
`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Разумеется, такая проверка тоже заработает</Text>
              <CodeFragment
                language="python"
                code={`string = input()
if len(string) == 0:
    print("Ошибка! Введите хоть что-нибудь!")
`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Однако первый вариант проверки на пустую строку лаконичнее и
                красивее.
              </Text>
              <Text>
                Такой код, как в первом варианте проверки, сработает из‑за
                логического представления строк. Питон считает, что пустая
                строка — это ложь False, а строка, в которой есть хотя бы один
                символ — истина True.
              </Text>
            </PythonProvider>
          </ChakraProvider>
          <NavigationButtons
            leftButtonLink="/lessons/adv_strings"
            rightButtonLink="/lessons/adv_strings_index"
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
