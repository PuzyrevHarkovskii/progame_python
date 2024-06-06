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
                Что такое функция?
              </Heading>
              <Text>
                Как вы уже знаете, программа — это последовательность команд для
                компьютера. Бывает так, что какая‑то часть программы
                неоднократно повторяется. Чтобы устранить эти повторы
                программного кода, используют функции. Функция — это именованный
                блок кода, который вызывается в нужных местах программы по
                имени.
              </Text>
              <Text>
                В предыдущих уроках вы уже сталкивались с функциями, которые,
                например, вычисляют длину строки или рисуют квадрат. Создать,
                или, как говорят программисты, объявить свою функцию можно с
                помощью ключевого слова def
              </Text>
              <Text>Если выполнить следующий код</Text>

              <CodeFragment
                language="python"
                code={`def my_function():
print("Эта строка напечатана из функции")
print("И вторая строка")


my_function()
my_function()`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>на экран будет выведено</Text>
              <CodeFragment
                language="python"
                code={`Эта строка напечатана из функции
И вторая строка
Эта строка напечатана из функции
И вторая строка`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Обратите внимание, что функцию my_function() мы вызываем дважды
                и она дважды выводит на экран заданный текст
              </Text>
              <Heading>Аргументы функции</Heading>
              <Text>
                В предыдущих уроках вы уже познакомились с множеством встроенных
                функций. Почти всем из них можно было передавать входящие
                параметры — аргументы. Свои функции тоже можно объявить с
                аргументами. Например, функция для приветствия может выглядеть
                так:
              </Text>
              <CodeFragment
                language="python"
                code={`def greet(name):
    print('Привет, ', name)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Этим кодом мы как бы говорим Питону, что функция greet принимает
                аргумент name. Вызвать greet можно точно также, как и встроенные
                функции. Этот код
              </Text>
              <CodeFragment
                language="python"
                code={`def greet(name):
    print('Привет, ', name)

greet('Иван')
greet('Петр')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет на экран</Text>
              <CodeFragment
                language="python"
                code={`Привет,  Иван
Привет,  Петр`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Если параметров два или больше, их нужно писать через запятую
              </Text>
              <CodeFragment
                language="python"
                code={`def my_sum(a, b):
    c = a + b
    print('Сумма=', c)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>То есть, чтобы объявить функцию, нужно:</Text>
              <UnorderedList>
                <ListItem>Написать ключевое слово def</ListItem>
                <ListItem>
                  Написать имя функции. Правила для имен функций такие же, как и
                  для имен переменных.
                </ListItem>
                <ListItem>
                  Если в функции должны быть аргументы, надо написать их имена в
                  скобках через запятую. Аргументы — это переменные, которые вы
                  сможете использовать внутри функции
                </ListItem>
                <ListItem>
                  Если у функции нет аргументов, скобки все равно нужно
                  поставить. После скобок обязательно должно стоять двоеточие
                </ListItem>
                <ListItem>
                  Тело функции пишется с отступом в четыре пробела — так Питон
                  определит, какие строки кода относятся к функции, а какие нет
                </ListItem>
              </UnorderedList>
              <Text>
                И не забывайте, что при вызове функции скобки тоже обязательны.
                Нет разницы, есть у функции аргументы или нет. По скобкам Python
                понимает, что перед ним функция, а не переменная, и эту функцию
                надо вызвать.
              </Text>
              <Heading>Программа с функцией</Heading>
              <Text>
                В этом уроке нужно написать программу со своей функцией, которая
                высчитывает и выводит на экран факториал числа, введенного
                пользователем.
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
                <UnorderedList>
                  <ListItem>
                    Факториал натурального числа n — это произведение всех
                    натуральных чисел от 1 до n включительно.
                  </ListItem>
                  <ListItem>
                    В программе, первым делом, напишите функцию factorial,
                    которая аргументом принимает n. Внутри функции расчитайте
                    факториал и выведите результат на экран. Для расчета
                    понадобится цикл. Используйте for или while на свое
                    усмотрение. Также внутри функции понадобятся дополнительные
                    переменные: назовите их, как хотите.
                  </ListItem>
                  <ListItem>
                    Затем нужно получить число от пользователя. Сделайте это с
                    помощью input() и int().
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Возврат результата</Heading>
              <Text>
                Такие функции как len или str, возвращают значения в зависимости
                от аргументов. То есть, если написать
              </Text>
              <CodeFragment
                language="python"
                code={`a = len("Строка")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                то в переменной a будет значение, которое вернет функция len для
                строки "Строка".
              </Text>
              <Text>
                Для того, чтобы вернуть что‑то из функции, нужно использовать
                ключевое слово return. Например, эта программа
              </Text>
              <CodeFragment
                language="python"
                code={`def sum(a, b):
    c = a + b
    return c

z = sum(5, 2)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>запишет в переменную z значение 7.</Text>
              <Text>
                Если из функции ничего не возвращать и не использовать return,
                функция вернет None:
              </Text>
              <CodeFragment
                language="python"
                code={`def sum(a, b):
    c = a + b

z = sum(5 ,3)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Здесь переменная z будет равна None.</Text>
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
                    В этом уроке нужно усовершенствовать программу из
                    предыдущего. Перепишите функцию factorial так, чтобы она
                    возвращала, а не печатала результат вычисления факториала.
                    Выводить результат на экран не обязательно.
                  </ListItem>
                  <ListItem>
                    Получать параметр функции с помощью input в этом уроке не
                    нужно.
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Необязательные аргументы</Heading>
              <Text>
                Аргумент функции может быть необязательным. Для этого ему надо
                назначить значение по‑умолчанию. Например, эта программа
              </Text>
              <CodeFragment
                language="python"
                code={`def sum(a, b=2):
    c = a + b
    return c

z = sum(5)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                запишет в переменную z значение 7. То есть, если не передать в
                функцию sum второй аргумент, его значение будет равно 2.
              </Text>
              <Text>
                PEP8 рекомендует не использовать пробелы вокруг знака =, если он
                используется для обозначения именованного аргумента или значения
                параметров по умолчанию. Вот так будет правильно:
              </Text>
              <CodeFragment
                language="python"
                code={`def sum(a, b=2):
    return a + b`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>а так — неправильно:</Text>
              <CodeFragment
                language="python"
                code={`def sum(a, b = 2):
    return a + b`}
                showLineNumbers={false}
              ></CodeFragment>
              <Box
                py={3}
                px={3}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                borderLeftColor="blue.300"
                borderLeftWidth="6px"
              >
                Измените программу из предыдущего так, чтобы n было
                необязательным аргументом, а значение n по‑умолчанию было бы
                равно 13.
              </Box>
              <PythonCompiler />
              <Heading>Особенности значений по умолчанию</Heading>
              <Text>
                Значения по‑умолчанию вычисляются только один раз — в момент
                объявления функции. Это важная особенность, незнание которой
                может привести к сюрпризам. Попробуйте запустить следующий
                пример:
              </Text>
              <CodeFragment
                language="python"
                code={`default_value = 1

def f(value=default_value):
    print(value)

f(4)    # выведет 4
f()     # выведет 1 – значение по-умолчанию
default_value = 10
f()     # все равно 1, так как default_value 
        # было равно 1 на момент объявления
`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Допустим, мы хотим сделать функцию, которая принимает в качестве
                аргументов какое‑то значение и список, добавляет это значение в
                список и выводит список на экран. Причем, если список не
                передан, по умолчанию он должен быть равен пустому списку:
              </Text>
              <CodeFragment
                language="python"
                code={`def add_value(value, values=[]):
    values.append(value)
    print(values)
`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Если попробовать вызвать такую функцию несколько раз без второго
                аргумента, получится не совсем то, чего нам хотелось бы:
              </Text>
              <CodeFragment
                language="python"
                code={`add_value(1)
                add_value(2)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                При втором вызове функции add_value мы не передаем список в
                качестве аргумента и хотим, чтобы он был пустым, однако в нем
                уже есть значение из первого вызова функции:
              </Text>
              <CodeFragment
                language="python"
                code={`[1]
[1, 2]`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Проблема тут в том, что переменная values будет ассоциирована с
                пустым списком один раз, и между вызовами будет сохранять свое
                значение.
              </Text>
              <Text>Правильно будет объявить нашу функцию таким образом:</Text>
              <CodeFragment
                language="python"
                code={`def add_value(value, values=None):
    if values is None:
        values = []
    values.append(value)
    print(values)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Проверьте, теперь программа работает так, как задумано.
              </Text>
              <Heading>Области видимости</Heading>
              <Text>
                Все переменные, созданные в функции, будут видны только в
                функции. Если попробовать обратиться к переменной, созданной в
                функции не внутри этой функции, вы получите ошибку NameError.
              </Text>
              <Text>
                То есть, переменная, созданная внутри функции, находится в
                локальной области видимости этой функции:
              </Text>
              <CodeFragment
                language="python"
                code={`def f():
    a = "Локальная переменная"
    print(a)

f()`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Такая программа выполнится без ошибок и выведет на экран
                «Локальная переменная». Если же попробовать сделать вот так:
              </Text>
              <CodeFragment
                language="python"
                code={`def f():
    a = "Локальная переменная"
    print(a)

f()
print(a)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>программа завершится с ошибкой NameError.</Text>
              <Text>
                Если переменной a присвоить значение вне функции, то программа,
                разумеется, заработает без ошибок, а переменная a будет
                находиться в глобальной области видимости:
              </Text>
              <CodeFragment
                language="python"
                code={`a = "Глобальная переменная"

def f():
    a = "Локальная переменная"
    print(a)

f()
print(a)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Вывод на экран этой программы будет таким:</Text>
              <CodeFragment
                language="python"
                code={`Локальная переменная
Глобальная переменная`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Обратите внимание, что переменная a внутри функции не
                переопределяет значение глобальной переменной а. То есть, по
                сути — это две разных переменных в разных областях видимости, но
                с одинаковым названием.
              </Text>
              <Text>
                Если внутри функции нет переменной а, но она есть глобально в
                файле, то при попытке обратиться к переменной a внутри функции,
                будет использована глобальная переменная:
              </Text>
              <CodeFragment
                language="python"
                code={`a = "Глобальная переменная"

def f():
    print(a)

f()
print(a)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Эта программа выведет на экран:</Text>
              <CodeFragment
                language="python"
                code={`Глобальная переменная
Глобальная переменная`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Если попробовать изменить глобальную переменную из функции:
              </Text>
              <CodeFragment
                language="python"
                code={`a = "Глобальная переменная"

def f():
    a = a + " с дополнением из функции"
    print(a)

print(a)
f()`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                произойдет ошибка UnboundLocalError. Все потому, что если
                присваивание выполняется в пределах функции, имя становится
                локальным по отношению к этой функции. В примере выше, создается
                локальная переменная a и ее же мы пытаемся использовать в
                конкатенации a + " с дополнением из функции"
              </Text>
              <Text>
                В общем, чтобы изменить глобальную переменную из функции, нужно
                использовать ключевое слово global. Так мы можем заставить
                Python изменить не локальную, а глобальную переменную.
              </Text>
              <CodeFragment
                language="python"
                code={`a = "Глобальная переменная"

def f():
    global a
    a = a + " с дополнением из функции"
    print(a)

print(a, '(до вызова функции)')
f()
print(a, '(после вызова функции)')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Однако, даже с учетом того, что такая возможность есть, не нужно изменять глобальные переменные внутри функции. Сообщество Python объявило такую практику нежелательной, так как из‑за этого изменение кода становится намного сложнее.</Text>
              <Text>Попробуйте позапускать эти примеры, чтобы лучше прочувствовать всю эту историю с областями видимости.</Text>
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
