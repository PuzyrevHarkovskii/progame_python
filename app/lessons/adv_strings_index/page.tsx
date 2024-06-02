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
              <Heading>Первая и последняя буква</Heading>
              <Box
                py={3}
                px={3}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                borderLeftColor="blue.300"
                borderLeftWidth="6px"
              >
                Напишите программу, которая записывает строку, введённую
                пользователем в переменную string. Программа должна проверить
                длину строки. Если длина строки больше либо равна двум —
                программа должна вывести первый и последний символ этой строки.
                Иначе — программа должна вывести надпись «Ошибка»
              </Box>
              <PythonCompiler />
              <Heading>Срезы строк</Heading>
              <Text>
                Обращаться можно не только к отдельным символам строки, но и к
                частям строки. Это делается с помощью срезов строк.
              </Text>
              <Text>
                Для получения среза строки надо написать саму строку или имя
                переменной, открывающую квадратную скобку [, индекс начала
                среза, двоеточие, индекс конца среза и закрывающую квадратную
                скобку ]. Как и при доступе к отдельному символу строки, индексы
                могут быть отрицательными — Питон понимает, что в таком случае
                индекс считается с конца строки.
              </Text>
              <Text>Например, эта программа выведет на экран «мир»</Text>
              <CodeFragment
                language="python"
                code={`foo = "Привет, мир!"
print(foo[8:11])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>А эта — «ивет»</Text>
              <CodeFragment
                language="python"
                code={`foo = "Привет, мир!"
print(foo[-10:-6])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Обратите внимание, что символ с индексом начала среза включается
                в результат, а символ с индексом окончания — нет.
              </Text>
              <Text>
                Индекс начала среза можно не указывать — в этом случае Питон
                будет считать началом среза начало самой строки. Вот эта
                программа выведет на экран «Привет» — то есть первые 6 символов
                исходной строки.
              </Text>
              <CodeFragment
                language="python"
                code={`foo = "Привет, мир!"
print(foo[:6])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Индекс конца среза также можно не указывать. Концом среза в этом
                случае будет конец самой строки. Например, эта программа выведет
                на экран «мир!» — последние 4 символа исходной строки.
              </Text>
              <CodeFragment
                language="python"
                code={`foo = "Привет, мир!"
print(foo[-4:]))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Указание несуществующих индексов в срезах не приведёт к ошибке,
                как это было при доступе к отдельному символу строки. Например,
                эта программа выведет на экран «Привет, мир!» — то есть всю
                строку целиком.
              </Text>
              <CodeFragment
                language="python"
                code={`foo = "Привет, мир!"
print(foo[:100])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                А эта не выведет ничего, потому что индексы среза больше длины
                строки
              </Text>
              <CodeFragment
                language="python"
                code={`foo = "Привет, мир!"
print(foo[200:300])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Разумеется, как и в случае с индексом, начало и конец среза
                можно указывать с помощью переменных и арифметических выражений.
                В программе ниже на экран будет выведено 3 символа строки,
                начиная с символа, указанного пользователем.
              </Text>
              <CodeFragment
                language="python"
                code={`i = int(input())
foo = "Привет, мир!"
print(foo[i:i+3])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Как и для индексов, это могут быть только целые числа, а
                использование переменных других типов приведет к ошибке.
              </Text>
              <Heading>Программа со срезами</Heading>
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
                  Напишите программу, которая записывает строку, введённую
                  пользователем в переменную string. Программа должна проверить
                  длину строки. Если длина строки больше либо равна пяти —
                  программа должна вывести первые три и последние три символа
                  введенной строки. Иначе — программа должна вывести надпись
                  «Ошибка»
                </Text>
              </Box>
              <PythonCompiler />
              <Heading>Шаги срезов</Heading>
              <Text>
                Кроме начала и конца, в срезе можно задать шаг. Следующая
                программа выведет на экран каждый второй символ исходной строки.
              </Text>
              <CodeFragment
                language="python"
                code={`foo = "Привет, мир!"
print(foo[::2])`}
                showLineNumbers={false}
              ></CodeFragment>
              <CodeFragment
                language="python"
                code={`Пие,мр`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                В этом примере мы не указываем начало и конец среза и берём
                каждый второй символ исходной строки целиком. Если же указать в
                качестве начала второй символ
              </Text>
              <CodeFragment
                language="python"
                code={`foo = "Привет, мир!"
print(foo[1::2])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                то результатом будет каждый второй символ, начиная со второго
              </Text>
              <CodeFragment
                language="python"
                code={`рвт и!`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Если указать отрицательный шаг, символы будут идти в обратном
                порядке. Вот так, например, можно перевернуть исходную строку
              </Text>
              <CodeFragment
                language="python"
                code={`foo = "Привет, мир!"
print(foo[::-1])`}
                showLineNumbers={false}
              ></CodeFragment>
              <CodeFragment
                language="python"
                code={`!рим ,тевирП`}
                showLineNumbers={false}
              ></CodeFragment>
              <Heading>Проверяем палиндром</Heading>

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
                  В этом уроке вам надо будет написать программу, которая
                  определяет, является ли введённый пользователем текст
                  палиндромом.
                </Text>
                <Text>
                  Палиндром — это слово или предложение, которое одинаково
                  читается слева направо и справа налево. Такие слова или
                  предложения еще называют перевертышами.
                </Text>
                <Text>
                  Четких указаний для выполнения в этом уроке не будет —
                  придумать решение вы должны самостоятельно. Единственное, чего
                  нет в предыдущих уроках, но понадобится для решения — описание
                  метода строк replace, который заменяет символы, переданные
                  первым аргументом, на символы, переданные вторым аргументом.
                </Text>
                <Text>
                  Эта программа, например, заменит все символы пробела в строке
                  string на пустые строки
                </Text>
                <CodeFragment
                  language="python"
                  code={`string = "А роза упала на лапу Азора"
string = string.replace(" ", "")
print(string)`}
                  showLineNumbers={false}
                ></CodeFragment>
                <Text>и выведет на экран следующий текст</Text>
                <CodeFragment
                  language="python"
                  code={`АрозаупаланалапуАзора`}
                  showLineNumbers={false}
                ></CodeFragment>
                <Text>
                  Стоит запомнить, что пробел " " — это такой же символ, как и
                  все остальные, а пустая строка "" — это не символ, а
                  отсутствие каких‑либо символов.
                </Text>
                <Text>
                  Это задание может потребовать больше времени на выполнение,
                  чем обычно. Не переживайте, если что‑то не получается, лучше
                  попробуйте вывести введённую и перевернутую строку функцией
                  print и сравнить их. Это поможет понять, что именно пошло не
                  так.
                </Text>
                <Text>
                  Программа должна вывести на экран «да», если введённый текст —
                  палиндром и «нет» — если нет.
                </Text>
              </Box>
              <PythonCompiler />
              <Heading>Повтор строк</Heading>
              <Text>
                Для повтора строки в Питоне можно использовать оператор
                умножения. Эта программа выведет на экран
                «КолбасаКолбасаКолбаса»
              </Text>
              <CodeFragment
                language="python"
                code={`string = "Колбаса"
string = string * 3
print(string)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                То есть, если использовать оператор умножения со строкой и
                числом, результатом будет повтор строки. Число, на которое можно
                «умножить» строку может быть только целым. Строку на строку
                умножить нельзя, это вызовет ошибку.
              </Text>
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
                  Напишите программу, которая преобразует номер телефона,
                  введённого пользователем в защищённый вид.
                </Text>
                <Text>
                  Программа должна проверить длину введённой строки. Если длина
                  строки больше либо равна 8 и строка содержит только цифры,
                  программа должна оставить в строке последние 4 цифры, а вместо
                  начальных цифр вставить символ *. Этих звёздочек будет на 4
                  меньше, чем всего символов в исходной строке.
                </Text>
                <Text>
                  Программа должна вывести на экран преобразованную строку. То
                  есть, если пользователь ввел 375292003040, программа должна
                  вывести
                </Text>
                <CodeFragment
                  language="python"
                  code={`********3040`}
                  showLineNumbers={false}
                ></CodeFragment>
                <Text>
                  Если длина введённой строки меньше 8 или если в строке есть
                  что‑то, кроме цифр — программа должна вывести на экран надпись
                  «Ошибка». Программа не должна выводить ничего, кроме номера
                  или надписи «Ошибка». То есть никаких лишних вызовов print
                  быть не должно.
                </Text>

                <Text>
                  В этом уроке, как и в прошлом, не будет конкретных указаний
                  для выполнения. Думать придется самостоятельно.
                </Text>
              </Box>
              <PythonCompiler />
              <Heading>Оператор in</Heading>
              <Text>
                С помощью этого оператора можно узнать, содержит ли строка
                определенную подстроку.
              </Text>
              <Text>
                В любом языке программирования, подстрокой строки называют любую
                связанную непустую часть этой строки.
              </Text>
              <Text>
                Для примера возьмем строку «Привет». Так вот, «Пр», «При»,
                «иве», «ивет» и даже «Привет» — это подстроки строки «Привет». А
                вот «Прве» уже нельзя назвать подстрокой, так как в ней две
                несвязанных части строки «Пр» и «ве».
              </Text>
              <Text>
                То есть, подстрока это как бы вырезанный кусок строки.
              </Text>
              <Text>
                Так вот, для того, чтобы узнать, есть ли подстрока в строке, как
                раз и используют оператор in. Чтобы все сработало как надо,
                сначала напишите подстроку, потом оператор in, а после него —
                строку
              </Text>
              <CodeFragment
                language="python"
                code={`print("Пр" in "Привет")
print("ивет" in "Привет")
print("Прве" in "Привет")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Разумеется, все сработает и с переменными</Text>
              <CodeFragment
                language="python"
                code={`string = input("Введите строку")
substring = input("Введите подстроку")
if substring in string:
    print("Подстрока найдена")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Heading>Поиск позиции подстроки</Heading>
              <Text>
                Подстроку в строке можно искать не только с помощью оператора
                in. Как вы заметили, он позволяет установить только факт наличия
                подстроки в строке. Но что, если нужно узнать и позицию этой
                подстроки в строке?
              </Text>
              <Text>
                Для такого поиска подстроки в строке есть метод find. Подстрока
                для поиска — единственный аргумент для вызова этого метода.
                Результатом вызова find будет позиция, в которой Python первый
                раз нашел подстроку. Номера позиций начинаются с 0. Если
                подстрока не найдена, вызов find вернет −1.
              </Text>
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
                  Программа, которую вы напишете в этом уроке, должна получить
                  строку от пользователя с помощью input. Если в строке найден
                  символ #, программа должна вывести часть строки до этого
                  символа. Иначе — программа должна вывести на экран исходную
                  строку.
                </Text>
              </Box>
              <PythonCompiler/>
            </PythonProvider>
          </ChakraProvider>
          <NavigationButtons
            leftButtonLink="/lessons/adv_strings"
            rightButtonLink="/lessons/adv_strings_format"
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
