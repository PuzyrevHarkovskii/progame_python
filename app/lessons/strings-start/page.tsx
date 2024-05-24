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

export default function Variables() {
  return (
    <div>
      <Container maxW="container.md">
        <Box p={5}>
          <ChakraProvider theme={MainTheme}>
            <Heading size={"3xl"} textAlign={"center"}>
              Строки
            </Heading>
            <Heading>Что такое строки</Heading>
            <Text>
              Переменной в Питоне можно присвоить не только число, но и строку:
            </Text>

            <CodeFragment
              code={`a = "Пример строки"`}
              language={"python"}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Питон понимает, что это строка по кавычкам с двух сторон от
              строки. Это тоже часть синтаксиса языка — с двух сторон от строки
              должны быть кавычки.
            </Text>
            <Text>Если кавычку не закрыть</Text>
            <CodeFragment
              code={`a = "Пример строки`}
              language={"python"}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>Питон выдаст ошибку</Text>
            <CodeFragment
              code={`SyntaxError: EOL while scanning string literal`}
              language={"language"}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Кавычки могут быть как двойные, так и одинарные. Главное, чтобы
              закрывающая кавычка была такой же, как и открывающая.
            </Text>
            <CodeFragment
              code={`a = "Пример строки"
b = 'Второй пример с одинарными кавычками'`}
              language={"python"}
              showLineNumbers={false}
            ></CodeFragment>
            <Quiz
              question={question}
              options={options}
              correctAnswers={correctAnswers}
            />

            <Heading>Программа со строками</Heading>
            <Text>
              Для написания программы из этого урока вы можете создать новый
              файл, либо очистить файл с программой из предыдущего урока.
              Главное, чтобы в файле был только тот исходный код, который
              относится к текущей задаче.
            </Text>
            <Text>
              Присвойте переменной с именем <Code>string</Code> любой текст. То
              есть значение для переменной <Code>string</Code> должно быть
              создано с помощью кавычек.
            </Text>
            <Text>
              Следующей строкой программы напечатайте значение переменной
              функцией <Code colorScheme="blue">print</Code>.
            </Text>
            <PythonCompiler />
            <Heading>Подробнее о функциях</Heading>
            <Text>
              В своих программах вы уже использовали встроенную функцию print.
              И, скорее всего, уже понимаете, что переменные хранят данные, а
              функции что‑то с этими данными делают.
            </Text>
            <Text>
              Так вот, чтобы функция сделала то, что должна, ее надо запустить
              или другими словами вызвать. Python понимает, что функцию надо
              вызвать по скобкам, которые мы пишем после названия функции. Все,
              что находится внутри скобок, называется аргументами или
              параметрами функции.
            </Text>
            <Text>Тут например a, b и c — это аргументы функции print</Text>
            <CodeFragment
              code={`print(a, b, c)`}
              language={"python"}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Эти два понятия нужно запомнить, так как в дальнейшем мы будем
              использовать только их. То есть, вместо «поставить скобки после
              имени функции», мы будем говорить «вызвать функцию», а вместо
              «написать в скобках названия переменных через запятую», мы будем
              говорить «передать аргументы».
            </Text>
            <Text>
              При вызове функции, код основной программы останавливается,
              управление передается функции и ее код начинает выполняться. После
              того как выполнение закончено, управление возвращается в основную
              программу вместе с результатом, если он есть.
            </Text>
            <Text>
              Встроенная функция print не возвращает результат. Она просто
              выводит текст на экран. А функция abs, например, возвращает в
              основную программу модуль переданного ей в качестве аргумента
              числа.
            </Text>
            <CodeFragment
              code={`m = abs(-10)`}
              language={"python"}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Здесь в переменную m будет записано число 10, то есть результат
              (модуль числа −10), который вернула функция abs.
            </Text>
            <Text>
              Возвращаемое значение это еще одно понятие, которое нужно
              запомнить в этом уроке. В дальнейшем мы так и будем говорить —
              «функция такая‑то возвращает то‑то».
            </Text>
            <Heading>Пользовательский ввод</Heading>
            <Text>
              Встроенная в Python функция input возвращает строку, введённую
              пользователем.
            </Text>
            <Text>Это означает, что после запуска такой программы</Text>
            <CodeFragment
              code={`a = input()`}
              language={"python"}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              в поле «Результат» замигает курсор и программа будет ждать до тех
              пор, пока вы введете какой‑либо текст и нажмете клавишу ⏎
              (Enter/Ввод).
            </Text>
            <Text>
              Все, что вы туда введете, будет возвращено функцией input. В
              примере выше весь текст, что вы введете с клавиатуры, будет
              записан в переменную a.
            </Text>
            <Text>
              Также можно задать текст, который будет выведен пользователю в
              ожидании ввода. А переменную, в которую записан результат вызова
              input, можно вывести на экран:
            </Text>
            <CodeFragment
              code={`name = input("Как вас зовут? ")
print('Привет,', name)`}
              language={"python"}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Обратите внимание, что текст для пользователя тоже заключен в
              кавычки.
            </Text>
            <Text>
              Обязательно попробуйте запустить такую программу и посмотрите, как
              она работает.
            </Text>
            <Text>
              Функция input всегда возвращает строку. То есть, даже если
              пользователь ввел число 13, input вернёт строку "13"
            </Text>
            <Text>
              Для того чтобы «превратить» такую строку в число нужно
              преобразовать ее тип. Об этом будет рассказано в одном из
              следующих уроков. Пока, по возможности, не думайте об этом.
            </Text>
           
            <Heading>Программа с input()</Heading>
            <Text>Присвойте переменной с именем string значение, полученное с помощью функции input.</Text>
            <Text>Следующей строкой напечатайте значение переменной функцией print.</Text>
            <PythonCompiler />
           
          </ChakraProvider>
          <NavigationButtons
            leftButtonLink="/lessons/PEP8"
            rightButtonLink="/lessons/variables-conc"
          />
        </Box>
      </Container>
    </div>
  );
}
