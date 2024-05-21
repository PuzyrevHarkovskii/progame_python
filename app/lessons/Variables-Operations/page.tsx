"use client";
import { Container, Box, Heading, Text, Code } from "@chakra-ui/react";
import { PythonProvider } from "react-py";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { List, ListItem, UnorderedList, Image } from "@chakra-ui/react";
import PythonCompiler from "@/components/PythonCompiler";
import CodeFragment from "@/components/CodeFragment";

export default function Operations() {
  return (
    <div>
      <Container maxW="container.md">
        <Box p={5}>
          <Heading mb="0.5em" mt="1em" size="3xl" textAlign={"center"}>
            Операции над переменными
          </Heading>
          <Heading mb="0.5em" mt="1em" size="xl" textAlign={"left"}>
            Вывод переменных на экран
          </Heading>
          <Text py={2}>
            Для того чтобы вывести значение переменной на экран можно
            использовать точно такой же способ, как и в самой первой программе.
            Только вместо приветствия нужно написать имя переменной.
          </Text>
          <Text py={2}>
            То есть, если у нас в программе есть какая‑то переменная, на экран
            ее значение можно вывести так
          </Text>
          <CodeFragment
            code={`a = 1
print(a)`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text py={2}>
            Вообще <Code colorScheme="blue">print</Code> — это одна из
            встроенных функций языка Python. Функции в программировании — это
            какие‑либо действия. То есть, если вы напишите слово{" "}
            <Code colorScheme="blue">print</Code>, Python поймет, что нужно
            действовать: в данном случае вывести что‑то на экран.
          </Text>
          <Text py={2}>
            Если, например, нужно вывести несколько переменных, можно как
            использовать функцию print несколько раз
          </Text>
          <CodeFragment
            code={`a = 1
b = 2
c = 3
print(a)
print(b)
print(c)`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text py={2}>
            так и просто написать имена переменных в скобках через запятую
          </Text>
          <CodeFragment
            code={`a = 1
b = 2
c = 3
print(a, b, c)`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text py={2}>
            В первом случае значение каждой переменной выведется на новой
            строке, во втором — в одну строку.
          </Text>
          <Heading mb="0.5em" mt="1em" size="xl" textAlign={"left"}>
            Отступы важны
          </Heading>
          <Text py={2}>
            Если вы попробуете запустить программу с «ненужным» отступом для
            print
          </Text>
          <CodeFragment
            code={`a = 1
print(a)`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text py={2}>она не заработает и закончится с ошибкой:</Text>
          <CodeFragment
            code={`IndentationError: unexpected indent`}
            language={"language"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text py={2}>
            Отступы очень важны в Питоне. О том, зачем они нужны будет
            рассказано в разделе про ветвление. А сейчас постарайтесь не думать
            об этом, а просто пишите каждую строчку программы без лишних
            отступов.
          </Text>
          <Heading mb="0.5em" mt="1em" size="xl" textAlign={"left"}>
            Программа с переменными
          </Heading>
          <Text py={2}>
            Присвойте переменной с именем first любое значение. Неважно, какое
            значение ей присвоить — важно чтобы ее имя было first.
          </Text>
          <Text py={2}>
            Чтобы объявить переменную, нужно написать её имя, потом оператор
            присваивания и значение, с которым эта переменная будет создана.
          </Text>
          <Text py={2}>
            Следующей строкой напечатайте значение переменной с помощью функции
            print.
          </Text>
          <Text py={2}>
            Напишите программу и обязательно проверьте, как она выполняется,
            нажав на кнопку "Запустить код"
          </Text>
          <PythonProvider>
            <PythonCompiler />
          </PythonProvider>
          <Heading mb="0.5em" mt="1em" size="xl" textAlign={"left"}>
            Сложение и вычитание
          </Heading>
          <Text py={2}>
            Переменным можно присваивать не только простые значения, вроде 13
            или, например, 22. Такие значения, кстати, называются литералами. То
            есть литерал — это значение, напрямую записанное в исходном коде.
          </Text>
          <Text py={2}>
            Так вот, переменным можно присваивать не только фиксированные
            значения-литералы. Им можно присваивать результат работы других
            операторов. В этой программе, например, переменной a будет присвоен
            результат работы оператора сложения, а переменной b — результат
            работы оператора вычитания.
          </Text>
          <CodeFragment
            code={`a = 13 + 5
b = 13 - 5
print(a, b)`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text py={2}>
            Вместо чисел можно подставить имена переменных и это тоже сработает.
          </Text>
          <Text py={2}>Эта программа, например, выведет на экран 26</Text>
          <CodeFragment
            code={`a = 13 + 5
b = 13 - 5
c = a + b
print(c)`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text py={2}>
            В этих примерах правым операндом для оператора присваивания является
            выражение, то есть часть кода, которая вычисляется в значение.
            Выражение может состоять из различных комбинаций переменных,
            литералов и операторов.
          </Text>
        </Box>
      </Container>
    </div>
  );
}
