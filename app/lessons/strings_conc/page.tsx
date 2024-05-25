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
            <Heading size={"3xl"} textAlign={"center"}>
              Переносы, специальные символы, конкатенация
            </Heading>
            <Heading>Алгоритм и обмен значений двух переменных</Heading>
            <PythonProvider>
              <Text>
                В этом уроке нужно написать программу, которая обменивает две
                переменные значениями.
              </Text>
              <Text>
                Прежде чем начинать писать код, необходимо разработать алгоритм.
                Запомните это слово, оно точно пригодится не только в
                программировании, но и в жизни. Алгоритм — это
                последовательность шагов или операция для решения какой-либо
                задачи.
              </Text>
              <Text>
                Так вот, алгоритм для решения этой задачи будет выглядеть так:
              </Text>
              <UnorderedList>
                <ListItem>
                  Присвоить переменной с именем a строку, полученную с помощью
                  функции input. Второй переменной b присвойте другую строку,
                  также полученную от пользователя.
                </ListItem>
                <ListItem>
                  Создать дополнительную переменную, назвать ее например tmp и
                  присвоить ей значение переменной a.
                </ListItem>
                <ListItem>
                  Переменной a присвоить значение переменной b.
                </ListItem>
                <ListItem>
                  Переменной b присвоить значение дополнительной переменной tmp.
                  Это значение равно старому значению переменной a.
                </ListItem>
                <ListItem>
                  Убедиться, правильно ли вы все сделали. Для этого можно
                  вывести значения переменных на экран. Хотя это и необязательно
                  для прохождения задачи.
                </ListItem>
              </UnorderedList>
              <Text>
                В последующих задачах обязательно пробуйте разрабатывать
                алгоритм самостоятельно. Например, можете записывать шаги на
                листке бумаги. Это помогает раздробить крупную или сложную
                задачу на более мелкие и простые части.
              </Text>

              <Text>
                И еще, в Питоне есть более красивый способ обменять переменные
                значениями, но о нем будет рассказано немного позже. В этом же
                уроке важно понять, что код «в лоб»
              </Text>
              <CodeFragment
                language="python"
                code={`a = b
b = a`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                не сработает, потому что код выполняется последовательно, и при
                выполнении первой строки, значение a будет затерто значением b.
                То есть, после выполнения такого кода и в a и b будет храниться
                одно и тоже значение.
              </Text>
              <PythonCompiler />
            </PythonProvider>
            <Heading>Специальные символы</Heading>
            <Text>
              Бывает так, что в самой строке должна быть кавычка. Но Питон
              использует кавычки для того, чтобы понимать начало и конец строки,
              поэтому такая программа никогда не заработает
            </Text>
            <CodeFragment
              language="python"
              code={`a = "строка с " кавычкой "`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Конечно, можно попробовать выкрутиться из ситуации используя
              разные кавычки
            </Text>
            <CodeFragment
              language="python"
              code={`a = 'строка с " кавычкой'`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Но что, если вдруг понадобится два вида кавычек в одной строке?
            </Text>
            <Text>
              В общем получается, что добавить сходу в строку не так‑то просто.
              Но сделать это можно, используя символ обратной косой черты \. Это
              называется экранирование.
            </Text>
            <CodeFragment
              language="python"
              code={`a = "строка с \" кавычкой двойной и \' одинарной"
print(a)`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>Результатом работы этой программы будет</Text>
            <CodeFragment
              language="python"
              code={`строка с " кавычкой двойной и ' одинарной`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Чтобы в строке появился символ обратной косой черты (это тоже
              иногда бывает нужно), достаточно поставить две обратных косых
              черты подряд
            </Text>
            <CodeFragment
              language="python"
              code={`a = "Строка с обратным слешем \\"`}
              showLineNumbers={false}
            ></CodeFragment>
            <Heading>Перенос строки</Heading>
            <Text>
              Перенос строки — это тоже специальный символ. Например код
            </Text>
            <CodeFragment
              language="python"
              code={`a = "Первая строка (U+005C)nВторая строка"
print(a)
              `}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>выведет следующее</Text>
            <CodeFragment
              language="python"
              code={`Первая строка
Вторая строка`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              То есть \n поставит перенос строки между словами «Первая строка» и
              «Вторая строка».
            </Text>
            <Text>
              Сделать перенос строки в Питоне можно и другим способом — создать
              строку с помощью тройных кавычек. То есть вы расставляете переносы
              строк прямо в программе, записывая значение переменной на разных
              строках. Например, этот
            </Text>
            <CodeFragment
              language="python"
              code={`a = """Первая строка
Вторая строка"""
print(a)`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>или этот код</Text>
            <CodeFragment
              language="python"
              code={`a = '''Первая строка
Вторая строка'''
print(a)`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>выведет на экран то же, что и код из первого примера</Text>
            <CodeFragment
              language="python"
              code={`Первая строка
Вторая строка`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Со строками, созданными без тройных кавычек, так сделать не
              получится. Обе, и такая
            </Text>
            <CodeFragment
              language="python"
              code={`a = 'Первая строка
Вторая строка'
print(a)`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>и такая программа</Text>
            <CodeFragment
              language="python"
              code={`a = "Первая строка
Вторая строка"
print(a)`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>завершатся с ошибкой.</Text>
            <Text>
              И помните, что если строка начинается с трёх кавычек, то и
              заканчиваться она должна тремя такими же кавычками.
            </Text>

            <Heading>Для закрепления</Heading>
            <Box
              py={3}
              px={3}
              border="1px solid"
              borderColor="gray.100"
              borderRadius="md"
              borderLeftColor="blue.300"
              borderLeftWidth="6px"
            >
              <Text>
                Присвойте переменной с именем escape значение, в котором есть
                один перенос строки, двойная и одинарная кавычка, а также символ
                обратной косой черты \
              </Text>
              <Text>
                Значение переменной escape выведите на экран функцией print.
                Обязательно проверьте, чтобы все необходимые символы
                отобразились в поле «Результат» при выводе на экран.
              </Text>
            </Box>
            <PythonProvider>
              <PythonCompiler />
            </PythonProvider>
            <Heading>Конкатенация строк</Heading>
            <Text>
              Страшное слово «конкатенация» означает всего лишь склеивание
              нескольких строк в одну с помощью оператора +. То есть для чисел
              оператор + — это сложение. А для строк — это конкатенация.
            </Text>
            <Text>Результатом этой программы</Text>
            <CodeFragment
              language="python"
              code={`a = "Первая строка"
b = "Вторая строка"
c = a + b
print(c)`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>будет</Text>
            <CodeFragment
              language="python"
              code={`Первая строкаВторая строка`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              То есть оператор + может не только складывать числа, но и
              склеивать строки.
            </Text>
            <Heading>Улучшенное приветствие </Heading>
          
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
                Переменной hello присвойте значение «Привет,» или «Здравствуй,»
              </ListItem>
              <ListItem>
                Переменной name присвойте значение, полученное с помощью функции
                input от пользователя.
              </ListItem>
              <ListItem>
                Переменной greeting присвойте значение, равное склеенным строкам
                hello и name.
              </ListItem>
              <ListItem>
                Выведите значение переменной greeting на экран.
              </ListItem>
            </UnorderedList>
          </Box>
          <PythonProvider>
            <PythonCompiler />
          </PythonProvider>
          <Heading>Строка + число</Heading>
          <Text>
            Возможно, в Вашу голову уже закралась мысль о том, что будет если
            попробовать сложить строку с числом. Например вывести на экран
            результат какого‑нибудь арифметического действия.
          </Text>
          <CodeFragment
            language="python"
            code={`result = 55 + 125
print("Результат=" + result)`}
            showLineNumbers={false}
          ></CodeFragment>
          <Text>Результатом выполнения этой программы будет ошибка</Text>
          <CodeFragment
            language="language"
            code={`Traceback (most recent call last):
module __main__ line 2
print("Результат=" + result)
TypeError: Can't convert int to str implicitely`}
            showLineNumbers={false}
          ></CodeFragment>
          <Text>
            Этой ошибкой Питон подсказывает номер строки, на которой ошибка
            произошла. В тексте, который скорее всего сейчас напоминает вам
            древнюю письменность line 2 — это и есть «строка 2». После идет сама
            строка кода с ошибкой. А самой последней строкой Питон сообщает, что
            именно за ошибка произошла по его мнению. «Can't convert int to str
            implicitely» можно перевести как «Невозможно преобразовать число в
            строку неявно»
          </Text>
          <Text>
            Получается, что склеить строку и число нельзя. Но что делать, если
            очень хочется или очень надо? Об этом в следующем уроке!
          </Text></ChakraProvider>
          <NavigationButtons
            leftButtonLink="/lessons/strings-start"
            rightButtonLink="/lessons/strings-Operations"
          />
        </Box>
      </Container>
    </div>
  );
}
