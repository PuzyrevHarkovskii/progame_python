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

const options = ["a > 1 and a < 10", 'a > 1 and a < 6', "a > 1 and a <= 6", 'a > 1 and a <= 3'];
const correctAnswers = ["a > 1 and a < 10", "a > 1 and a <= 6"];
const question = "Отметьте выражения, которые вернут True (правду), если переменная a равна 6";

export default function App() {
  return (
    <div>
      <Container maxW="container.md">
        <Box p={5}>
          <ChakraProvider theme={MainTheme}>
            <PythonProvider>
              <Heading size={"3xl"} textAlign={"center"}>
                Операторы elif и логические операторы
              </Heading>
              <Heading>Оператор elif</Heading>
              <Text>
                elif — еще один оператор для использования в связке с if.
                Работает он почти как else, но для срабатывания ему надо
                передать дополнительное условие.
              </Text>
              <CodeFragment
                language="python"
                code={`a = int(input("Введите число"))
if a > 10:
    print("Больше десяти")
elif a == 10:
    print("Это десять")
else:
    print("Меньше десяти")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                То есть вы как бы указываете Питону: если a больше 10, делай
                то‑то, иначе если a равно 10, делай что‑то другое, иначе — делай
                что‑то еще.
              </Text>
              <Text>
                Операторов elif в связке с одним if может быть столько, сколько
                вам надо
              </Text>
              <CodeFragment
                language="python"
                code={`a = int(input("Введите число"))
if a > 10:
    print("Больше 10")
elif a == 10:
    print("Равно 10")
elif a == 0:
    print("Равно 0")
else:
    print("Меньше 10")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Естественно, строки программы, относящиеся к elif должны быть с
                отступами в 4 пробела, а после условия нужно ставить двоеточие.
              </Text>
              <Heading>Программа с elif</Heading>
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
                    Напишите программу, которая в переменную number записывает
                    число, введённое пользователем.
                  </ListItem>
                  <ListItem>
                    Если число больше 0, программа должна вывести на экран +,
                    если число меньше 0, программа должна вывести на экран -, а
                    если число равно 0, программа должна вывести 0,
                  </ListItem>
                  <ListItem>
                    Для проверки используйте операторы if, else и elif
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Сложные логические выражения</Heading>
              <Text>
                Вы уже знаете, что в Питоне есть различные типы данных — это,
                например, строки, целые числа и числа с запятой. Также
                переменной можно присвоить и результат сравнения
              </Text>
              <CodeFragment
                language="python"
                code={`test = 10 > 5`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                В этом случае переменная test будет логического (булевого) типа.
                Такие переменные могут иметь только два значения — True(правда)
                и False(ложь).
              </Text>
              <Text>
                Выражения типа a {">"} 10 — простое логическое выражение, так
                как выполняется только одна логическая операция. Но на практике
                может понадобиться получить ответ «Правда» или «Ложь» в
                зависимости от результата двух или больше простых выражений.
              </Text>
              <Text>
                Например, «переменная b больше 30 или меньше 10» или «переменная
                a больше 12 и меньше 20». В таких случаях используют операторы,
                объединяющие два или больше простых логических выражения —
                логическое И and и логическое ИЛИ or.
              </Text>
              <Text>
                Правила, по которым or и and возвращают результат довольно
                просты. И о них вы узнаете в следующем уроке.
              </Text>
              <Heading>Логическое И</Heading>
              <Text>
                Оператор and возвращает True (правду) только тогда, когда оба
                операнда равны True.
              </Text>
              <Text>Например эта программа</Text>
              <CodeFragment
                language="python"
                code={`a = 10
print(a > 1 and a < 20)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет на экран</Text>
              <CodeFragment
                language="python"
                code={`True`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>А эта</Text>
              <CodeFragment
                language="python"
                code={`a = 10
print(a > 1 and a < 10)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет</Text>
              <CodeFragment
                language="python"
                code={`False`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Порядок операндов для and важен. Первым проверяется левый
                операнд и только в том случае, если он истинный, будет проверен
                правый операнд. Ведь если левый операнд ложный то и весь
                результат будет ложным, то есть правый операнд проверять нет
                никакой необходимости.
              </Text>
              <Text>Попробуйте запустить вот такой код</Text>
              <CodeFragment
                language="python"
                code={`a = 1
if a > 1 and b == 2:
print('Хорошо')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Использование переменной b не вызовет ошибки, потому что до
                проверки правого операнда дело даже не дойдет.
              </Text>
              <Text>А вот такой код</Text>
              <CodeFragment
                language="python"
                code={`a = 1
if a > 0 and b == 2:
print('Хорошо')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                закончится с ошибкой, потому что левый операнд истинный и Питон
                попытается проверить правый операнд.
              </Text>
              <Quiz
              question={question}
              options={options}
              correctAnswers={correctAnswers}
            />
            </PythonProvider>
          </ChakraProvider>
          <NavigationButtons
            leftButtonLink="/lessons/branching"
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
>
<UnorderedList>
  <ListItem>
    Переменной a присвойте результат выражения 55 + 105.
    Переменной b присвойте результат конкатенации строки
    "Сумма=" и преобразованной в строку переменной a.
  </ListItem>
  <ListItem>
    Переменная a должна остаться целым числом. Преобразование
    числа в строку можно сделать с помощью вспомогательной
    переменной и функции преобразования типа str.
    Вспомогательную переменную можете назвать как хотите.
  </ListItem>
  <ListItem>Переменную b выведите на экран.</ListItem>
</UnorderedList>
</Box> */
}
