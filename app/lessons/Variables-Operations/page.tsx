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
          <Heading mb="0.5em" mt="1em" size="xl" textAlign={"left"}>
            Программа с переменными
          </Heading>
          <UnorderedList>
            <Text py={2}>Напишите программу в которой:</Text>
            <ListItem>
              Переменной a присвоено значение, равное результату выражения 667
              минус 13
            </ListItem>
            <ListItem>
              Переменной b присвоено значение, которое на 101 больше значения
              переменной a
            </ListItem>
            <ListItem>
              Переменной c присвоено значение, которое равно сумме значений
              переменных a и b
            </ListItem>
            <ListItem>
              Переменные a, b и c выведены на экран одной строкой
            </ListItem>
          </UnorderedList>

          <Text py={2}>
            Если вы что‑то забыли, можно вернуться к предыдущим урокам и найти
            там нужную информацию.
          </Text>
          <PythonProvider>
            <PythonCompiler />
          </PythonProvider>
          <Heading mb="0.5em" mt="1em" size="xl" textAlign={"left"}>
            Умножение и деление
          </Heading>
          <Text py={2}>
            Питон умеет не только вычитать и складывать. Он умеет умножать и
            делить!
          </Text>
          <Text py={2}>
            Например вот эта программа выведет на экран 12 и 2.4
          </Text>
          <CodeFragment
            code={`a = 2 * 6
b = a / 5
print(a, b)`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text py={2}>
            Результат умножения напечатался без точки (12), а результат деления
            (2.4) — с точкой между целой и дробной частью.
          </Text>
          <Text py={2}>
            То есть, в Питоне есть как целые числа, так и числа дробные (или
            вещественные). Получается, что переменной можно присвоить не только
            целое, но и дробное значение:
          </Text>
          <Text py={2}>Например</Text>
          <CodeFragment
            code={`pi = 3.14
e = 2.7182`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Heading mb="0.5em" mt="1em" size="xl" textAlign={"left"}>
            Другие операции
          </Heading>
          <Text py={2}>
            Другие арифметические операции можно посмотреть по этой ссылке, а на
            сам справочник всегда можно попасть из меню профиля, выбрав пункт
            «Справочник Python»
          </Text>
          <Text py={2}>С порядком вычисления лучше пояснить на примере:</Text>
          <CodeFragment
            code={`a = 2 + 3 * 4`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text py={2}>Что производится раньше: сложение или умножение?</Text>
          <Text py={2}>
            Школьный курс математики говорит нам, что умножение должно
            производиться в первую очередь. Это означает, что оператор умножения
            имеет более высокий приоритет, чем оператор сложения.
          </Text>
          <Text py={2}>
            Самая приоритетная из арифметических операций — возведение в
            степень. Потом идут умножение, деление, целочисленное деление и
            остаток от деления. И в самом конце — сложение и вычитание.
          </Text>
          <Text py={2}>
            Для изменения порядка вычисления можно использовать скобки.
            Например, если сложение необходимо произвести раньше умножения,
            можно записать это так
          </Text>
          <CodeFragment
            code={`a = (2 + 3) * 4`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Heading mb="0.5em" mt="1em" size="xl" textAlign={"left"}>
            Немного практики
          </Heading>
          <UnorderedList>
            <Text py={2}>Напишите программу в которой:</Text>
            <ListItem>
              Переменной a присвоено значение, равное результату умножения 10.5
              на 2
            </ListItem>
            <ListItem>
              Переменной b присвоено значение, равное сумме a и a / 3
            </ListItem>
            <ListItem>
              Переменной c присвоено значение, равное сумме переменных a и b,
              умноженной на 2
            </ListItem>
            <ListItem>
              Переменные a, b и c выведены на экран одной строкой
            </ListItem>
          </UnorderedList>
          <PythonProvider>
            <PythonCompiler />
          </PythonProvider>
        </Box>
      </Container>
    </div>
  );
}
