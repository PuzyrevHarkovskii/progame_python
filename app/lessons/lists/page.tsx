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
                Списки, кортежи, цикл for
              </Heading>
              <Heading>Что такое список?</Heading>
              <Text>
                Список — это структура данных для упорядоченного хранения
                элементов различных типов. Список, как и другие типы данных в
                Питоне, можно сохранить в переменной.
              </Text>
              <Text>
                Часто в программах нужно хранить список чего‑либо. Это могут
                быть запланированные дела или, например, приглашенные гости. И
                список Python — отличная структура для хранения таких данных.
              </Text>
              <Text>
                Чтобы присвоить переменной значение с типом «список» нужно
                написать имя переменной, оператор присваивания и квадратную
                открывающую скобку. После нужно написать элементы списка — это
                могут быть данные любых типов Питона — через запятую. В конце
                списка обязательно ставится закрывающая квадратная скобка:
              </Text>
              <CodeFragment
                language="python"
                code={`my_list = [1, 13, 26]
my_list_str = ["Иван", "Петр", "Джон"]
my_list_mixed = ["Иван", 12, "Джон", 12.5]`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Получить элемент списка можно по индексу. Все в точности, как и
                у строк. Эта программа, например
              </Text>
              <CodeFragment
                language="python"
                code={`my_list = ["Первый", "Второй", "Последний"]
print(my_list[0])
print(my_list[-1])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет на экран первый и последний элемент списка</Text>
              <CodeFragment
                language="python"
                code={`Первый
Последний`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Для того чтобы код было удобнее читать, можно расположить
                элементы на разных строках:
              </Text>
              <CodeFragment
                language="python"
                code={`my_list_str = [
    "Иван", 
    "Петр", 
    "Джон"
]`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Python прочитает это как правильный список.</Text>
              <Text>Присвоить переменной пустой список можно так</Text>
              <CodeFragment
                language="python"
                code={`my_empty_list = []`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Питон считает пустой список ложью. Это, как и в случае со
                строками, можно использовать в целях проверки. Список, в котором
                есть хотя бы один элемент будет для Питона истиной.
              </Text>
              <Heading>Строковое представление данных</Heading>
              <Text>
                У каждой переменной в Python есть специальный метод __str__. Он
                возвращает строковое представление для переменной и
                автоматически вызывается, если печатать значение переменной
                функцией print или же преобразовывать переменную любого типа в
                строку.
              </Text>
              <Text>То есть, и такой</Text>
              <CodeFragment
                language="python"
                code={`a = 1
b = 2.15
z = str(b)
print(a, b, z)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>и такой вариант</Text>
              <CodeFragment
                language="python"
                code={`a = 1
b = 2.15
z = b.__str__()
print(a.__str__(), b.__str__(), z)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                сработают совершенно одинаково. Вторым вариантом, однако,
                пользоваться не стоит. Просто помните, что у каждой переменной
                любого типа в Python есть строковое представление. И список — не
                исключение. Если попробовать запустить такую программу
              </Text>
              <CodeFragment
                language="python"
                code={`a = [1, 2, 'one', 'two']
b = a.__str__()
c = str(a)
                
print(a, b, c)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                на экран будет выведено три одинаковых строковых представления
                списка, то есть
              </Text>
              <CodeFragment
                language="python"
                code={`[1, 2, 'one', 'two'] [1, 2, 'one', 'two'] [1, 2, 'one', 'two']`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                При выводе на экран первой переменной метод __str__ будет вызван
                автоматически. Значение второй переменной будет строкой,
                поскольку метод __str__ вызван напрямую (так все же делать не
                стоит и такой способ тут просто для примера). В третьей
                переменной тоже будет строка, функция strтоже вызовет метод
                __str__.
              </Text>
              <Heading>Простая задача со списками</Heading>
              <Box
py={3}
px={3}
border="1px solid"
borderColor="gray.200"
borderRadius="md"
borderLeftColor="blue.300"
borderLeftWidth="6px"
><Text>В этом уроке надо написать программу, в которой есть три переменные:</Text>
<UnorderedList>
    <ListItem>Первая должна называться first_list и быть списком только числовых значений. То есть элементы first_list могут быть только целые или дробные числа.</ListItem>
    <ListItem>Вторая переменная second_list должна быть списком строк, и, соответственно, содержать только строковые значения.</ListItem>
    <ListItem>Третья переменная third_list должна быть списком, в котором есть элементы как строчного, так и числового типа.</ListItem>
    <Text>Количество и значения элементов списка могут быть любыми. Главное в этом уроке — типы элементов.</Text>
    </UnorderedList></Box>
    <PythonCompiler/>
    <Heading>Подсчет слов</Heading>
    <Box
py={3}
px={3}
border="1px solid"
borderColor="gray.200"
borderRadius="md"
borderLeftColor="blue.300"
borderLeftWidth="6px"
><Text>В этом уроке надо написать программу, в которой есть три переменные:</Text>
<UnorderedList>
    <ListItem>требуется написать программу, которая подсчитывает количество слов в предложении, введенном пользователем. Предложение должно быть получено с помощью функции input и сохранено в переменной string. Тип этой переменной должен оставаться строкой.</ListItem>
    <ListItem>Далее, программа должна разбить предложение на слова. Сделать это можно с помощью метода split. Его подробное описание можно найти в справочнике. Внимательно прочитайте описание метода и ознакомьтесь с примерами.</ListItem>
    <ListItem>После, нужно вычислить длину получившегося списка слов. Для этого используйте встроенную функцию len. Эту же функцию мы уже использовали, когда нужно было найти длину строки.</ListItem>
    <Text>Получившееся количество слов программа должна вывести на экран.</Text>
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
