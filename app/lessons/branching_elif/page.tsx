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

const options = [
  "a > 1 and a < 10",
  "a > 1 and a < 6",
  "a > 1 and a <= 6",
  "a > 1 and a <= 3",
];
const correctAnswers = ["a > 1 and a < 10", "a > 1 and a <= 6"];
const question =
  "Отметьте выражения, которые вернут True (правду), если переменная a равна 6";

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
              <Heading>Логическое ИЛИ</Heading>
              <Text>
                Оператор or возвращает True (правду) тогда, когда хотя бы один
                из операндов равен True.
              </Text>
              <Text>Вот эта программа</Text>
              <CodeFragment
                language="python"
                code={`b = 5
print(b > 1 or b < 3)`}
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
                code={`b = 5
print(b > 10 or b < 5)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет на экран</Text>
              <CodeFragment
                language="python"
                code={`False`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Если оба операнда равны True результатом также будет True
              </Text>
              <Text>
                Как и в случае с and, порядок операндов для оператора or важен,
                но условия для проверки правого операнда отличаются.
              </Text>
              <Text>
                Первым проверяется левый операнд и только в том случае, если он
                ложный, будет проверен правый операнд. Ведь если левый операнд
                истинный то и весь результат будет истинным, то есть правый
                операнд проверять нет никакой необходимости.
              </Text>
              <Text>
                Этот код не вызовет ошибок, потому что до проверки правого
                операнда дело даже не дойдет.
              </Text>
              <CodeFragment
                language="python"
                code={`a = 1
if a > 0 or b == 2:
print('Хорошо')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>А вот такой код</Text>
              <CodeFragment
                language="python"
                code={`a = 1
if a != 1 or b == 2:
print('Хорошо')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                закончится с ошибкой, потому что левый операнд ложный и Питон
                попытается проверить правый операнд.
              </Text>
              <Heading>Программа с логическими операторами</Heading>
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
                    Напишите программу, которая описывает одним словом
                    температуру, введённую пользователем. Программа должна
                    сохранить введённую температуру в переменную t в виде целого
                    числа.
                  </ListItem>
                  <ListItem>
                    Если число меньше −4, программа должна вывести «морозно».
                  </ListItem>
                  <ListItem>
                    Если число меньше 0 и больше либо равно −4, программа должна
                    вывести на экран «холодно».
                  </ListItem>
                  <ListItem>
                    Если число больше либо равно 0 и меньше 12 — «прохладно».
                  </ListItem>
                  <ListItem>
                    Если больше либо равно 12 и меньше 27 — «тепло».
                  </ListItem>
                  <ListItem>Если больше либо равно 27 — «жарко».</ListItem>
                  <ListItem>
                    При написании программы используйте операторы if, elif,
                    else, and и также операторы сравнения.
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />

              <Heading>Логическое представление данных</Heading>
              <Text>
                К строкам и числам также могут быть применены понятия истина и
                ложь. Истиной Питон считает любое число, за исключением нуля. То
                есть 0 — это ложь, а любое другое число — истина.
              </Text>
              <Text>
                Со строками немного другая история. Любую строку, в которой есть
                хотя бы один символ, Питон считает истиной. А вот пустая строка
                для него будет ложью.
              </Text>
              <Text>
                Попробуйте выполнить вот такой код, изменяя значения переменных
                a и z
              </Text>
              <CodeFragment
                language="python"
                code={`a = 0
if a != 0:
    print('Хорошо')

z = ''
if z != '':
    print('Неплохо')

if z != '' and a != 0:
    print('Очень хорошо  :-)')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                После попробуйте выполнить вот этот код, также изменяя
                переменные
              </Text>
              <CodeFragment
                language="python"
                code={`a = 0
if a:
    print('Хорошо')

z = ''
if z:
    print('Неплохо')

if z and a:
    print('Очень хорошо  :-)')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Первый и второй вариант работают совершенно одинаково, но второй
                читается лучше и выглядит аккуратнее.
              </Text>
              <Heading>Логическое отрицание</Heading>
              <Text>Логическое отрицание</Text>
              <Text>Например, эта программа выведет на экран True</Text>

              <CodeFragment
                language="python"
                code={`a = 10
print(a == 10)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Если же перед условием поставить оператор not — на экран будет
                выведено False
              </Text>
              <CodeFragment
                language="python"
                code={`a = 10
print(not a == 10)`}
                showLineNumbers={false}
              ></CodeFragment>

              <Text>
                Кстати, точно такой же результат мы получим, если напишем
                условие немного по‑другому — без оператора not
              </Text>
              <CodeFragment
                language="python"
                code={`a = 10
print(a != 10)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Разумеется, оператор not можно использовать и со сложными
                логическими выражениями. Например, эта программа выведет на
                экран False, отрицая истинное выражение внутри скобок.
              </Text>
              <CodeFragment
                language="python"
                code={`a = 10
print(not (a > 1 and a < 20))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Эту программу тоже можно переписать по‑другому</Text>
              <CodeFragment
                language="python"
                code={`a = 10
print(a <= 1 or a >= 20)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                А вот так, используя логическое представление строк и оператор
                not, можно сделать проверку пользовательского ввода
              </Text>
              <CodeFragment
                language="python"
                code={`anything = input("Напишите что-нибудь")
if not anything:
    print('Так нельзя. Надо что-нибудь написать!')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Если пользователь ничего не введет, переменная anything будет
                пустой строкой и Питон будет считать ее ложью. Применив оператор
                not, мы превратим ложь в истину и условный оператор if
                сработает.
              </Text>
              <Heading>Приоритеты логических операторов</Heading>
              <Text>
                Как и у арифметических, у логических операторов есть свой
                приоритет в выполнении. Самый высокий приоритет у скобок. После
                идут операторы сравнения, за ними оператор not, оператор and и
                оператор or.
              </Text>
              <Text>Если запустить такой код</Text>
              <CodeFragment
                language="python"
                code={`x = 0
y = 2
                
result = x > 1 and x == 10 or y < 5
print(result) 
                
                result = x > 1 and (x == 10 or y < 5)
print(result)
                `}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                то в первом выражении сначала будет вычислен результат работы
                оператора сравнения {`>`} и так как этот результат будет ложным,
                то и результат работы оператора and будет ложным. Этот ложный
                результат станет левым операндом для оператора or. После будет
                вычислен результат работы оператора сравнения {"<"}. Получается,
                что левый операнд для оператора or — ложь, а правый — истина. В
                итоге результатом всего выражения будет истина.
              </Text>
              <Text>
                Во втором варианте, с помощью скобок, мы изменили приоритеты
                выполнения. Поэтому сначала будут выполнены операции сравнения и
                or, а результат выражения в скобках станет правым операндом для
                and. Все выражение целиком будет ложным.
              </Text>
            </PythonProvider>
          </ChakraProvider>
          <NavigationButtons
            leftButtonLink="/lessons/branching"
            rightButtonLink="/lessons/branching_pass"
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
