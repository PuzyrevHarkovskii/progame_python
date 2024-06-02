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
import Head from "next/head";

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
              Форматирование строк
            </Heading>
          
          <PythonProvider>
            <Text>
              Часто бывает нужно подставить в строку данные, полученные во время
              выполнения программы. Это может быть строка, введённая
              пользователем или какое‑то число, посчитанное программой.
            </Text>
            <Text>
              Такую подстановку можно сделать в лоб с помощью конкатенации. Вы
              уже делали это в мини-калькуляторе: склеивали строку «Сумма=» и
              результат сложения чисел.
            </Text>
            <Text>
              На практике это не очень удобно, если вы хотите вывести на экран
              не просто сумму, но и входные данные. Даже в такой простой
              программе уже можно запутаться:
            </Text>

            <CodeFragment
              language="python"
              code={`a = 10
b = 3
c = a + b
result = str(a) + "+" + str(b) + "=" + str(c)
print(result)
`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Если же это будет что‑то более сложное, строка превратится в
              нечитаемую мешанину из кавычек, операторов и функций str.
            </Text>
            <Text>
              Чтобы сделать подстановки более читаемыми, в Python есть несколько
              различных способов. И первый из них — это %-форматирование
            </Text>

            <CodeFragment
              language="python"
              code={`a = 10
b = 3
c = a + b
result = "%d+%d=%d" % (a, b, c)
print(result)
`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Как вы наверняка догадались, все встреченные %d будут заменены на
              значения переменных a, b и c. Символ % указывает на то, что в эту
              позицию строки нужно подставить значение очередной переменной, а
              символ после этого знака задает тип переменной. d — это целое
              число. Если типы не будут совпадать, программа завершится с
              ошибкой
            </Text>
            <CodeFragment
              language="python"
              code={`digit = 1
string = "Номер"
result = "%d %d" % (digit, string)
print(result)
`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Чтобы все сработало как надо, для строк нужно использовать символ
              s.
            </Text>
            <CodeFragment
              language="python"
              code={`digit = 1
string = "Номер"
result = "%d %s" % (digit, string)
print(result)
`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              На самом деле возможностей у этого способа подстановки гораздо
              больше. Можно, например, задавать точность, с которой будет
              подставлено число. К тому же можно использовать типы данных, о
              которых вы пока еще ничего не знаете.
            </Text>
            <Text>
              Вообще этот способ считается устаревшим, поэтому сильно в него
              углубляться не будем. Просто знайте, что такой способ есть и его
              вполне можно встретить в чужом исходном коде. Мы же рассмотрим
              более предпочтительные способы форматирования строк.
            </Text>
            <Heading>Метод format</Heading>
            <Text>
              Еще один способ подстановки — с помощью метода строк format. Этот
              способ более современный и если есть выбор между %-форматированием
              и использованием метода format выбирайте метод format.
            </Text>
            <CodeFragment
              language="python"
              code={`a = 10
              b = 3
              c = a + b
              print("{}+{}={}".format(a, b, c))
`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Метод строки format последовательно заменяет встреченные в строке
              символы {} на аргументы, с которыми он вызван. То есть первые
              встреченные {} он заменит на значение переменной a, вторые — на
              значение b, а третьи — на значение c.
            </Text>
            <Text>
              Можно указать произвольный порядок подстановки аргументов, указав
              индекс внутри фигурных скобок
            </Text>
            <CodeFragment
              language="python"
              code={`a = 10
              b = 3
              c = a + b
              print("{1}+{0}={2}".format(a, b, c))
`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Никаких ошибок с типами при использовании format не будет, все
              аргументы будут преобразованы автоматически
            </Text>
            <CodeFragment
              language="python"
              code={`digit = 1
string = "Номер"
result = "{0}, {1}".format(digit, string)
print(result)`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Это самое простое применение метода форматирования строк. Все
              возможности метода format можно посмотреть тут. Учить наизусть это
              не нужно, вы всегда сможете вернуться к справочнику и посмотреть
              что к чему.
            </Text>
            <Heading>F-строки</Heading>
            <Text>
              Самый современный способ форматирования — это f-строки. Их
              использование улучшает читаемость кода и работают быстрее всех
              остальных способов форматирования. Для использования всех
              возможностей f-строк, достаточно поставить перед строкой символ
              «f». Оцените, насколько использование f-строк проще и читаемее,
              чем все остальные
            </Text>
            <CodeFragment
              language="python"
              code={`digit = 1
string = "Номер"
              
# Метод format
result_1 = "{0}, {1}".format(digit, string)
# % - форматирования
result_2 = "%d, %s" % (digit, string)
# f-строки
result_3 = f"{digit}, {string}"
              
print(result_1, result_2, result_3)
              `}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Мы сразу можем написать имена переменных внутри строки, не мучаясь
              с их передачей в строку через метод или %. Круто, да?
            </Text>
            <Text>
              Кроме переменных, f-строки могут работать и с выражениями. То
              есть, вполне можно сделать так и это будет прекрасно работать
            </Text>
            <CodeFragment
              language="python"
              code={`a = 10
b = 22
result = f'{a} + {b} = {a + b}'
print(result)
              `}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>Также в f-строках можно вызывать методы и функции</Text>
            <CodeFragment
              language="python"
              code={`name = "Алесь"
age = 38.5
result = f'{name.upper()}, возраст {round(age)}'
print(result)
              `}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>Срезы, кстати, тоже будут работать</Text>
            <CodeFragment
              language="python"
              code={`string = "Перевернутая строка"
result = f'{string[::-1]} -- перевернутая строка'
print(result) `}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Если нужно, чтобы в строке были символы фигурных скобок,
              достаточно просто поставить две открывающих или две закрывающих
              скобки подряд.
            </Text>
            <CodeFragment
              language="python"
              code={`result = f'{{ Текст в скобках }}'
print(result) `}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>
              Обязательно попробуйте запустить примеры из этого урока и
              посмотрите, как они работают вживую.
            </Text>
            <PythonCompiler/>
          </PythonProvider>
          </ChakraProvider>
          <NavigationButtons
            leftButtonLink="/lessons/adv_strings_index"
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
