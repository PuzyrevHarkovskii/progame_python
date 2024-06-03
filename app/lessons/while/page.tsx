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
                Зачем нужны циклы
              </Heading>
              <Text>
                Циклы нужны для того, чтобы повторно выполнять какие‑то
                действия. Каждый такой повтор называется итерацией. Запомните
                это слово, в программировании оно встретится вам точно не один и
                не два раза.
              </Text>
              <Text>
                Чтобы создать цикл на Питоне, можно использовать оператор while:
              </Text>

              <CodeFragment
                language="python"
                code={`i = 0
while i < 3:
    i = i + 1
    print(i)
print("конец")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Эта программа повторяет два действия: увеличивает переменную i
                на единицу и выводит на экран значение этой переменной. Как
                только условие while станет ложью, повторение действий
                прекратится, программа выведет на экран «конец» и завершится:
              </Text>
              <CodeFragment
                language="python"
                code={`1
2
3
конец`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Переменные, с помощью которых контролируют выполнение цикла — в
                нашей программе это переменная i — называют «счетчиками цикла».
                У таких переменных есть своя страница в Википедии. Почитайте,
                там есть полезная информация, которую неплохо бы знать.
              </Text>
              <Text>
                В общем, для того, чтобы создать цикл с условием, нужно:
                написать слово while, после написать условие выполнения и
                поставить двоеточие. А строки программы, которые должны
                повторяться, надо писать с отступами в четыре пробела.
              </Text>
              <Text>
                Кстати, увеличить переменную на какое‑либо число можно и немного
                по‑другому. Оператор += складывает левый операнд с правым и
                присваивает результат левому операнду. То есть, для чисел эти
                две строки эквивалентны:
              </Text>
              <CodeFragment
                language="python"
                code={`# Эта строка делает тоже самое
i = i + 1
# Что и эта строка
i += 1`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Похожие операторы есть и для других арифметических операций. Их
                список можно посмотреть в нашем справочнике.
              </Text>
              <Heading>Задача с чётными числами</Heading>
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
                    Напишите программу, которая выводит на экран все четные
                    числа начиная с 2 и заканчивая 20. Каждое из чисел должно
                    быть выведено на новой строке. Для создания цикла
                    используйте оператор while.
                  </ListItem>
                  <ListItem>
                    В этом уроке можно использовать любые переменные по своему
                    усмотрению.
                  </ListItem>
                </UnorderedList>
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
                <UnorderedList>
                  <ListItem>
                    Напишите программу, которая выводит на экран все нечетные
                    числа начиная с 31 и заканчивая 11. Каждое из чисел должно
                    быть выведено на новой строке. Для создания цикла
                    используйте оператор while.
                  </ListItem>
                  <ListItem>
                    В этом уроке можно использовать любые переменные по своему
                    усмотрению.
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Задача с нечётными числами</Heading>
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
                    Напишите программу, которая выводит на экран все нечетные
                    числа начиная с 31 и заканчивая 11. Каждое из чисел должно
                    быть выведено на новой строке. Для создания цикла
                    используйте оператор while.
                  </ListItem>
                  <ListItem>
                    В этом уроке можно использовать любые переменные по своему
                    усмотрению.
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Вывод строки по буквам</Heading>
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
                    Напишите программу, в которой переменной string присвоено
                    значение, введённое пользователем. Тип переменной string —
                    строка.
                  </ListItem>
                  <ListItem>
                    Программа должна вывести каждую букву переменной string на
                    новой строке. То есть, если пользователь ввёл «Привет»,
                    программа должна вывести:
                  </ListItem>
                </UnorderedList>
                <CodeFragment
                  language="python"
                  code={`П
р
и
в
е
т`}
                  showLineNumbers={false}
                ></CodeFragment>
              </Box>
              <PythonCompiler />
              <Heading>Оператор break</Heading>
              <Text>
                Оператор break прерывает выполнение цикла. Часть кода итерации
                до оператора break будет выполнена, а часть после — нет.
                Использовать break можно только внутри тела цикла.
              </Text>
              <Text>
                В прошлом уроке вы, скорее всего, написали что‑то похожее:
              </Text>
              <CodeFragment
                language="python"
                code={`string = input()
i = 0
while i < len(string):
    print(string[i])
    i = i + 1`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Но что, если надо останавливать цикл, если в строке встретится
                символ #?
              </Text>
              <Text>Можно добавить условие в сам цикл while:</Text>
              <CodeFragment
                language="python"
                code={`string = input()
i = 0
while i < len(string) and string[i] != '#':
    print(string[i])
    i = i + 1`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                А можно добавить выход из цикла с помощью оператора break:
              </Text>
              <CodeFragment
                language="python"
                code={`string = input()
i = 0
while i < len(string):
    if string[i] == '#':
        break
    print(string[i])
    i = i + 1`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Код с оператором break, как правило, выглядит изящнее, чем
                прописывание условий в операторе while. Однако, в каждом
                отдельном случае, вам придется решать, использовать break или
                нет.
              </Text>
              <Heading>Задача с выходом из цикла</Heading>
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
                    Напишите программу, в которой переменной string присвоено
                    значение, введённое пользователем. Тип переменной string —
                    строка.
                  </ListItem>
                  <ListItem>
                    Программа должна вывести каждую букву переменной string на
                    новой строке, используя цикл while. Если в строке встретятся
                    два символа # подряд, цикл должен быть остановлен с помощью
                    оператора break.
                  </ListItem>
                  <ListItem>
                    То есть, если пользователь ввёл «Привет, ##Василий»,
                    программа должна вывести только:
                  </ListItem>
                </UnorderedList>
                <CodeFragment
                  language="python"
                  code={`П
р
и
в
е
т
,`}
                  showLineNumbers={false}
                ></CodeFragment>
              </Box>
              <PythonCompiler />
              <Heading>Оператор continue</Heading>
              <Text>
                Оператор continue начинает следующую итерацию цикла, пропуская
                оставшееся после него тело цикла. Использовать continue, как и
                break, можно только внутри цикла.
              </Text>
              <Text>Например, эта программа</Text>
              <CodeFragment
                language="python"
                code={`string = 'АБ#ВГ'
i = 0
while i < len(string):
    symbol = string[i]
    i = i + 1
    if symbol == '#':
        continue
    print(symbol)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Выведет на экран только</Text>
              <CodeFragment
                language="python"
                code={`А
Б
В
Г`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                то есть пропустит вывод символа #, если он встретится в строке.
              </Text>
              <Heading>Слово else в циклах</Heading>
              <Text>Если после тела цикла написать слово else, оно проверит, как завершился цикл: «естественным» путем или с помощью break

</Text>
<CodeFragment
language="python"
code={`string = input()
i = 0
while i < len(string):
    if string[i] == '!':
        break
    print(string[i])
    i = i + 1
else:
    print('Восклицательного знака не найдено')`}
showLineNumbers={false}
></CodeFragment>
<Text>Эта программа выведет на экран «Восклицательного знака не найдено» только в том случае, если не сработает условие на 4-ой строке. Обратите внимание, что else пишется на одном уровне с while.</Text>
<Box
py={3}
px={3}
border="1px solid"
borderColor="gray.200"
borderRadius="md"
borderLeftColor="blue.300"
borderLeftWidth="6px"
><UnorderedList>
    <ListItem>Измените программу из урока «Задача с выходом из цикла» так, чтобы при отсутствии двух решеток подряд она выводила в конце своей работы надпись «проверено»</ListItem></UnorderedList></Box>
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
