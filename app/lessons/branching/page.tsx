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
            <PythonProvider>
              <Heading size={"3xl"} textAlign={"center"}>
                Ветвление
              </Heading>
              <Text>
                В предыдущих уроках вы уже использовали оператор присваивания
                для того, чтобы связывать имя переменной со значением.
              </Text>
              <Text>
                В Питоне есть и другие операторы. Одни из них — это операторы
                сравнения.
              </Text>
              <Text>
                Операторы сравнения, как понятно из названия, сравнивают
                значения или переменные и возвращают результат — правду или
                ложь.
              </Text>
              <Text>
                Например, оператор == сравнивает значения операндов и возвращает
                правду, если они равны и ложь если нет.
              </Text>
              <Text>
                Например, эта программа выведет на экран True, то есть правда
              </Text>
              <CodeFragment
                language="python"
                code={`a = 10
print(a == 10)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>а эта — False, то есть ложь</Text>
              <CodeFragment
                language="python"
                code={`a = 11
print(a == 10)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Не путайте = и ==. Одинарный знак равно — это оператор
                присваивания. А двойное равно — сравнения.
              </Text>
              <Text>
                Есть и другие операторы сравнения. Вот эта программа выведет на
                экран True
              </Text>
              <CodeFragment
                language="python"
                code={`a = 10
print(a > 5)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>А эта — False</Text>
              <CodeFragment
                language="python"
                code={`a = 10
print(a < 5)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                PEP8 рекомендует окружать операторы сравнения одним пробелом с
                каждой стороны.
              </Text>
              <Text>
                Список операторов сравнения вы можете посмотреть в нашем
                справочнике
              </Text>
              <Heading>Условный оператор if</Heading>
              <Text>
                Оператор if управляет выполнением кода. Условия выполнения можно
                задавать с помощью операторов сравнения из прошлого урока.
              </Text>
              <CodeFragment
                language="python"
                code={`a = int(input("Введите число"))
if a > 10:
print("Число больше 10")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Часть программы под оператором if выполнится только тогда, когда
                переменная a будет больше 10. Чтобы Питон понял, что строка
                программы
              </Text>
              <CodeFragment
                language="python"
                code={`print("Число больше 10")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                относится к оператору if, ее нужно отделить отступом — четырьмя
                пробелами (использовать пробелы в качестве отступов рекомендует
                PEP8). Например в этом примере «Ура!» будет выведено на экран в
                любом случае.
              </Text>
              <CodeFragment
                language="python"
                code={`a = int(input("Введите число"))
if a > 10:
print("Число больше 10")
print("Ура!")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>А в этом — только если сработает оператор if</Text>
              <CodeFragment
                language="python"
                code={`a = int(input("Введите число"))
if a > 10:
print("Число больше 10")
print("Ура!")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                То есть использовать оператор if надо так: сначала пишем if,
                потом какое‑то условие и двоеточие. А строки программы, которые
                должны выполнится при этом условии надо писать с отступами в
                четыре пробела.
              </Text>
              <Text>
                В этих примерах текст «Число больше 10» — просто текст, который
                может быть любым. Например «Число больше десяти» или «Это очень
                много». Текста может вовсе и не быть. А вместо вывода на экран
                программа может делать что‑то более полезное.
              </Text>
              <Heading>Программа с if </Heading>
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
                    Напишите программу, в которой переменной a присвоено
                    значение, введённое пользователем. Переменная a должна быть
                    целым числом. Не забудьте преобразовать строку, полученную
                    из input в число с помощью функции int.
                  </ListItem>
                  <ListItem>
                    Потом программа должна проверить значение переменной a. Если
                    ее значение больше 5 — программа должна вывести на экран
                    значение переменной a. Лишнего текста на экран выводить не
                    нужно. Только значение переменной.
                  </ListItem>
                  <ListItem>
                    К слову, если нажать кнопку TAB, редактор исходного кода
                    автоматически поставит четыре пробела.
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Оператор else</Heading>
              <Text>
                else может использоваться только в связке с оператором if.
              </Text>
              <Text>
                Часть программы под оператором else будет выполняться только
                тогда, когда не сработает if. То есть вы как бы пишите указание
                для Питона: если какое‑то условие верно, то делай что‑то, иначе
                — делай что‑то другое.
              </Text>
              <CodeFragment
                language="python"
                code={`a = int(input("Введите число"))
if a > 10:
    print("Больше десяти")
else:
    print("Меньше либо равно десяти")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Как и с оператором if, строки программы, относящиеся к else
                должны быть с отступами в четыре пробела, а после else нужно
                поставить двоеточие.
              </Text>
              <Heading>Программа с else</Heading>
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
                    Напишите программу, в которой переменной a присвоено
                    значение, введённое пользователем. Переменная a должна быть
                    целым числом. Не забудьте преобразовать строку, полученную
                    из input в число с помощью функции int.
                  </ListItem>
                  <ListItem>
                    Потом программа должна проверить значение переменной a. Если
                    ее значение больше 5 — программа должна вывести на экран
                    значение переменной a. Лишнего текста на экран выводить не
                    нужно. Только значение переменной.
                  </ListItem>
                  <ListItem>
                    К слову, если нажать кнопку TAB, редактор исходного кода
                    автоматически поставит четыре пробела.
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Оператор else</Heading>
              <Text>
                else может использоваться только в связке с оператором if.
              </Text>
              <Text>
                Часть программы под оператором else будет выполняться только
                тогда, когда не сработает if. То есть вы как бы пишите указание
                для Питона: если какое‑то условие верно, то делай что‑то, иначе
                — делай что‑то другое.
              </Text>

              <CodeFragment
                language="python"
                code={`a = int(input("Введите число"))
if a > 10:
    print("Больше десяти")
else:
    print("Меньше либо равно десяти")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Как и с оператором if, строки программы, относящиеся к else
                должны быть с отступами в четыре пробела, а после else нужно
                поставить двоеточие.
              </Text>
              <Heading>Программа с else</Heading>
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
  Напишите программу для проверки пароля, введённого пользователем.
  </ListItem>
  <ListItem>
  В программе должна быть переменная с именем password — в ней будет храниться правильный пароль. Эта переменная будет строкой.
  </ListItem>
  <ListItem>Значение второй переменной с именем user_password, должно быть получено с помощью функции input. Переменная user_password тоже должна быть строкой.</ListItem>
  <ListItem>Если пользователь ввел правильный пароль, программа должна выводить надпись «Входите». Иначе — «Доступ запрещён». Для сравнения введённого и правильного пароля используйте оператор сравнения ==</ListItem>
</UnorderedList>
</Box>
<PythonCompiler/>
            </PythonProvider>
          </ChakraProvider>
          <NavigationButtons
            leftButtonLink="/lessons/strings_num"
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
