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
  `foo = "Роза"`,
  "foo = [1, 2, 3]",
  "foo = 13",
  'foo = ["Р", "о", "з", "а"]',
];
const correctAnswers = [`foo = "Роза"`, "foo = 13"];
const question = "При каком значении foo программа завершится с ошибкой";

export default function App() {
  return (
    <div>
      <Container maxW="container.md">
        <Box p={5}>
          <ChakraProvider theme={MainTheme}>
            <PythonProvider>
              <Heading size={"3xl"} textAlign={"center"}>
                Цикл for
              </Heading>
              <Text>
                В одном из прошлых уроков про цикл while, вы писали программу
                для вывода строки по буквам:
              </Text>

              <CodeFragment
                language="python"
                code={`string = "Тестовая строка"
i = 0
while i < len(string):
    print(string[i])
    i = i + 1`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Точно также можно перебрать все элементы списка:</Text>
              <CodeFragment
                language="python"
                code={`list_ = [1, 2, 3, 66, 13]
i = 0
while i < len(list_):
    print(list_[i])
    i = i + 1`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Обратите внимание, что мы назвали переменную list_, а не list,
                потому что list — встроенная функция Python и называть
                переменную так не стоит.
              </Text>
              <Text>
                Цикл for делает то же, что и while — повторяет действия,
                заданные программистом. Но for при переборе списков выглядит
                более изящно:
              </Text>
              <CodeFragment
                language="python"
                code={`list_ = [1, 2, 3, 66, 13]
for el in list_:
    print(el)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                В этом коде el — это текущий элемент списка для итерации. Код
                внутри цикла выполнится 5 раз. По одному разу на каждый элемент
                списка. В первой итерации el будет равен первому элементу списка
                (1), во второй — второму (2), а в пятой — пятому (13).
              </Text>
              <Text>
                Для того чтобы создать цикл for, нужно написать слово for, потом
                имя переменной, в которую будет сохраняться элемент
                последовательности для каждой итерации. После надо написать
                слово in, имя переменной со списком и двоеточие. Все, что
                относится к телу цикла нужно отделять четырьмя пробелами, как и
                в других конструкциях.
              </Text>
              <Text>
                Операторы break и continue внутри цикла for, а также слово else
                после него, работают точно так же, как и с циклом while.
              </Text>
              <Heading>Не тот оператор in</Heading>
              <Text>
                Обратите внимание, что in в цикле — это не тот оператор in, про
                который рассказывалось в разделе «Продвинутые строки». for
                вместе с in — конструкция для создания цикла, то есть
                воспринимать ее надо как единое целое.
              </Text>
              <Text>
                Кстати «тот» оператор in может работать не только со строками,
                но и со списками
              </Text>
              <CodeFragment
                language="python"
                code={`x = [1, 2, 3, 4, "Hello"]
print(1 in x)
print("Bye" in x)
print("Hello" in x)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Если оператор in используется со списком, он проверяет наличие
                элемента в этом списке. Оцените простоту и дружественность
                Python — один и тот же оператор работает с разными данными
                похожим образом!
              </Text>
              <Heading>Самое длинное слово</Heading>
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
                    Чтобы пройти этот урок, нужно написать программу, которая
                    находит самое длинное слово в предложении, введенном
                    пользователем.
                  </ListItem>
                  <ListItem>
                    Для того чтобы все получилось правильно, программа должна
                    разбить текст, полученный от пользователя, на слова.
                  </ListItem>
                  <ListItem>
                    В программе должна быть переменная для хранения самого
                    длинного слова. Начальное значение для этой переменной —
                    пустая строка. Название переменной может быть любым.
                  </ListItem>
                  <ListItem>
                    После этого, с помощью цикла for, программа должна
                    «пробежаться» по списку. Каждую итерацию цикла программа
                    должна сравнивать длину текущего слова из списка с длиной
                    самого длинного слова. В том случае, если длина текущего
                    слова больше, самому длинному слову должно быть присвоено
                    значение этого текущего слова.
                  </ListItem>
                  <ListItem>
                    После завершения цикла самое длинное слово должно быть
                    выведено на экран.
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Коллекции</Heading>
              <Text>
                Вы уже заметили, что списки, строки и действия над ними, похожи
                друг на друга. Доступ к элементу, срезы и получение длины — все
                это делается одинаково и для списков и для строк.
              </Text>
              <Text>
                Коллекция — это общее название для таких структур данных,
                которые содержат в себе набор значений одного или разных типов,
                и позволяющих обращаться к этим значениям. То есть, и списки, и
                строки — это коллекции.
              </Text>
              <Text>Цикл for может перебирать любую коллекцию. И список</Text>
              <CodeFragment
                language="python"
                code={`collection = [1, "1", 1.5, 12]
                for c in collection:
                    print(c)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>и строку</Text>
              <CodeFragment
                language="python"
                code={`string = "Строка для перебора"
for s in string:
    print(s)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Конечно, между строками и списками есть отличия. Например,
                методы строк и списков отличаются друг от друга. И это логично —
                странно искать подстроку в списке чисел, или, например,
                сортировать буквы в строке по возрастанию.
              </Text>
              <Heading>Перевернутое предложение</Heading>
              <Text>
                Как уже было сказано, доступ к элементу и срезы доступны в обоих
                уже известных вам коллекциях — строках и списках. Чтобы немного
                попрактиковаться, напишите программу, которая переворачивает
                слова в предложении.
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
                    Предложение должно быть получено от пользователя с помощью
                    встроенной функции input и разбито на слова с помощью метода
                    split.
                  </ListItem>
                  <ListItem>
                    Полученный список слов нужно перевернуть при помощи среза с
                    отрицательным шагом. Вы уже делали такое со строками в
                    задаче про палиндром.
                  </ListItem>
                  <ListItem>
                    Далее, из перевернутого списка слов нужно снова получить
                    предложение. То есть склеить все слова в одну строку через
                    пробел. Полученную строку нужно вывести на экран. То есть,
                    если пользователь введет текст «Это интересная задача»,
                    программа должна вывести на экран
                  </ListItem>

                  <CodeFragment
                    language="python"
                    code={`задача интересная Это`}
                    showLineNumbers={false}
                  ></CodeFragment>
                  <ListItem>
                    Склеить список в одну строку проще всего будет при помощи
                    метода строк join.
                  </ListItem>
                  <CodeFragment
                    language="python"
                    code={`# элементы списка будут "склеены" через разделитель
# в одну строку. В нашем случае разделитель -- это пробел
result = ' '.join(['один', 'два', 'три']) 
print(result)`}
                    showLineNumbers={false}
                  ></CodeFragment>
                  <Text>
                    Запустите этот пример и вам сразу станет понятно, как этот
                    метод работает. Описание этого метода есть в нашем
                    справочнике метода строк.
                  </Text>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Изменяемые и неизменяемые данные</Heading>
              <Text>
                Кроме разных методов, у строк и списков есть еще одно важное
                отличие. Если попробовать выполнить такой код в надежде
                исправить слово «Хобот» на «Робот»,
              </Text>
              <CodeFragment
                language="python"
                code={`string = 'Хобот'
string[0] = 'Р'
print(string)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Питон выдаст ошибку о том, что строка не поддерживает назначение
                элементов
              </Text>
              <CodeFragment
                language="python"
                code={`TypeError: 'str' object does not support item assignment`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Если же аналогичное действие попытаться провернуть со списком,
                все будет хорошо и эта программа
              </Text>
              <CodeFragment
                language="python"
                code={`arr = [1, 2, 3, 4]
arr[0] = "Замена"
print(arr)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет на экран</Text>
              <CodeFragment
                language="python"
                code={`['Замена', 2, 3, 4]`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Получается, что список — это изменяемая коллекция, а строка —
                неизменяемая.
              </Text>
              <Text>
                Если все же понадобится заменить букву в строке, это можно
                сделать либо с помощью replace
              </Text>
              <CodeFragment
                language="python"
                code={`string = 'Хобот'
string = string.replace("Х", "Р")
print(string)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>либо с помощью среза</Text>
              <CodeFragment
                language="python"
                code={`string = 'Хобот'
                string = "Р" + string[1:]
                print(string)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                В этих примерах мы не изменяем строку, а создаем новую со старым
                именем.
              </Text>
              <Heading>Небольшой тест</Heading>
              <CodeFragment
                language="python"
                code={`foo[0] = "К"
print(foo)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Quiz
                question={question}
                options={options}
                correctAnswers={correctAnswers}
              />
              <Heading>Методы списков</Heading>
              <Text>
                Как и у строк, с помощью методов со списками можно делать всякие
                полезные действия. Но есть одно глобальное отличие. Методы
                обработки строк, например upper или lower, возвращают новую
                строку. То есть для получения результата мы должны были сделать
                так:
              </Text>
              <CodeFragment
                language="python"
                code={`string = string.upper()`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>То есть присвоить переменной результат вызова метода.</Text>
              <Text>
                С некоторыми методами списка этого делать не нужно, так как они
                изменяют исходный список. Примером такого метода может быть
                метод sort. Такая программа
              </Text>
              <CodeFragment
                language="python"
                code={`list_ = [5, 2, 3, 0, 1]
                list_.sort()
                print(list_)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет на экран</Text>
              <CodeFragment
                language="python"
                code={`[0, 1, 2, 3, 5]`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                То есть метод sort отсортирует исходный список list_, изменив
                саму переменную list_.
              </Text>
              <Text>
                Если же попробовать вывести на экран значение, которое
                возвращает метод sort
              </Text>
              <CodeFragment
                language="python"
                code={`list_ = [5, 2, 3, 0, 1]
                result = list_.sort()
                print(result)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>на экран будет выведено</Text>
              <CodeFragment
                language="python"
                code={`None`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>так как метод sort ничего не возвращает.</Text>
              <Text>
                Некоторые методы списков могут как изменять список, так и
                возвращать значения. Чтобы представлять, какие методы есть у
                списков и как они работают, не поленитесь просмотреть
                справочник. К тому же, в следующем уроке один из методов
                пригодится для решения задачи.
              </Text>
              <Heading>Сколько раз встречается слово</Heading>
              <Text>
                Нужно написать программу, которая подсчитывает и выводит на
                экран, сколько раз заданное слово встречается в предложении. И
                слово, и предложение, должны быть получены от пользователя с
                помощью функции input.
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
                    Первым по очереди должно быть получено предложение, а вторым
                    — слово для подсчета.
                  </ListItem>
                  <ListItem>
                    Для примера, если пользователь введет предложение «Хвалился,
                    хвалился, да под гору и свалился» и слово «хвалился»,
                    программа должна вывести на экран
                  </ListItem>
                  <CodeFragment
                    language="python"
                    code={`2`}
                    showLineNumbers={false}
                  ></CodeFragment>
                  <ListItem>
                    Разбить на слова будет проще, если предварительно заменить
                    точки и запятые на символы пробела. Слова должны считаться
                    одинаковыми без учёта регистра. То есть «Хвалился» и
                    «хвалился» — одно и то же слово. Для преобразования к одному
                    регистру можно использовать уже известные вам методы строк
                    upper или lower.
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Фильтруем слова</Heading>
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
                  <Text>
                    Нужно написать программу, которая из текста, введенного
                    пользователем, создает список слов. В список должны попадать
                    слова, в которых есть только цифры и/или буквы. Остальные
                    слова должны игнорироваться.
                  </Text>
                  <ListItem>
                    Вначале получите строку с текстом от пользователя с помощью
                    функции input. Из этой строки программа должна получить
                    список, разбив ее по символу пробела с помощью метода строки
                    split.
                  </ListItem>
                  <ListItem>
                    Потом нужно создать переменную с пустым списком. В него мы
                    будем добавлять отфильтрованные слова
                  </ListItem>
                  <CodeFragment
                    language="python"
                    code={`words = []`}
                    showLineNumbers={false}
                  ></CodeFragment>
                  <ListItem>
                    С помощью цикла for программа должна перебрать элементы
                    списка, получившегося после разбития строки и добавить в
                    список words слова, которые состоят только из цифр и/или
                    букв. Проверить это можно с помощью метода строки isalnum.
                    Отфильтрованные слова нужно вывести на экран одной строкой.
                  </ListItem>
                  <ListItem>
                    Метод списка для добавления элементов вы сможете найти в
                    справочнике.
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Программа с сортировкой</Heading>
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
                    Напишите программу, которая получает строку от пользователя
                    с помощью input. Из этой строки программа должна получить
                    список, разбив ее по символу пробела с помощью метода строки
                    split.
                  </ListItem>
                  <ListItem>
                    Потом программа должна создать переменную с пустым списком.
                  </ListItem>

                  <CodeFragment
                    language="python"
                    code={`numbers = []`}
                    showLineNumbers={false}
                  ></CodeFragment>
                  <ListItem>
                    С помощью цикла for программа должна перебрать элементы
                    списка, получившегося после разбития строки и добавить в
                    список numbers элементы, которые являются числами. Проверить
                    это можно с помощью метода строки isdigit При добавлении
                    нужно преобразовывать элементы к целочисленному типу с
                    помощью функции int.
                  </ListItem>
                  <ListItem>
                    После этого нужно отсортировать список numbers по
                    возрастанию и вывести его на экран с помощью функции print
                  </ListItem>
                  <ListItem>
                    Методы списков для добавления и сортировки элементов вы
                    сможете найти в справочнике .
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Списковые включения</Heading>
              <Text>
                Скорее всего вы заметили кое‑что общее в двух предыдущих
                задачах. Мы брали один список и создавали на его основе другой
                из элементов, удовлетворяющих определенному условию. Вообще,
                создание одного списка из другого с фильтрацией и/или изменением
                элементов — довольно частая история в программировании.
              </Text>
              <Text>
                В Python есть удобная конструкция, с помощью которой эту
                операцию можно сделать проще и красивее. Называется эта
                конструкция списковым включением (англ. list comprehension) и в
                общем виде выглядит так
              </Text>
              <CodeFragment
                language="python"
                code={`[выражение for элемент in коллекция if условие]`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Можно сказать, что это упрощенный однострочный цикл for,
                создающий список из элементов коллекции, которые удовлетворяют
                условию. С помощью выражения эти элементы могут быть обработаны.
                Например, создать список из четных чисел на основе списка всех
                чисел, можно так
              </Text>
              <CodeFragment
                language="python"
                code={`numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = [i for i in numbers if i % 2 == 0]
print(even_numbers)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                В качестве выражения мы используем просто i, то есть оставляем
                исходный элемент без изменений. Если, например, нам нужно
                преобразовать целые числа в строки (мало ли?), можно
                использовать знакомую вам функцию str
              </Text>
              <CodeFragment
                language="python"
                code={`numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = [str(i) for i in numbers if i % 2 == 0]
print(even_numbers)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Выражение и условие для обработки элемента могут быть любыми, но
                не стоит сильно усердствовать с их сложностью. Ведь чем сложнее
                выражение или условие, тем сложнее будет читать вашу программу.
                А это уже будет не совсем в стиле Python.
              </Text>
              <Text>
                Да, если нужно просто обработать элементы списка не
                отфильтровывая, условие можно опустить
              </Text>
              <CodeFragment
                language="python"
                code={`numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                even_numbers = [str(i) for i in numbers]
                print(even_numbers)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Heading>Еще раз фильтруем слова</Heading>
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
                    В этом уроке нужно усовершенствовать программу из урока про
                    фильтрацию слов, используя списковые включения вместо
                    полноценного цикла for для фильтрации. В остальном условия
                    не меняются: текст, полученный от пользователя надо разбить
                    на слова, в список words должны попасть только те из них,
                    которые состоят только из цифр и букв, отфильтрованный
                    список слов нужно вывести на экран одной строкой.
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>И еще одна сортировка</Heading>
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
                    В этом уроке нужно усовершенствовать программу с
                    сортировкой. Вместо полноценного цикла for нужно
                    использовать списковое включение. В остальном все должно
                    остаться по‑прежнему: текст, полученный от пользователя надо
                    разбить с помощью split(), список numbers должен быть
                    заполнен целыми числами, отсортирован по возрастанию и
                    выведен на экран.
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Примеры списковых включений</Heading>
              <Text>Список квадратов чисел от 1 до 5</Text>
              <CodeFragment
                language="python"
                code={`squares = [x * x for x in (1, 2, 3, 4, 5)]`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Все фрукты, в которых есть буква «а»</Text>
              <CodeFragment
                language="python"
                code={`fruits = ["яблоко", "банан", "вишня", "киви", "манго"]
                filtered_fruits = [x for x in fruits if "а" in x]`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Список цен со скидкой</Text>
              <CodeFragment
                language="python"
                code={`original_prices = [100, 200, 500, 1100]
discount = 0.15  # 15%
new_prices = [i * (1 - discount) for i in original_prices]
print(new_prices)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Тернарный оператор как выражение для обработки элемента
              </Text>
              <CodeFragment
                language="python"
                code={`text = 'Сколько лет, сколько зим'
parts = ['*' if i == 'о' else i for i in text]
new_text = ''.join(parts)
print(new_text)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Списковые выражения можно передавать в качестве аргументов
                методам и функциям,
              </Text>
              <CodeFragment
                language="python"
                code={`text = 'Сколько лет, сколько зим'
new_text = ''.join(['*' if i == 'о' else i for i in text])
print(new_text)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Списковые выражения — удобная синтаксическая конструкция для
                решения определенных задач. Однако, не стоит применять их везде
                и всюду. Помните, что читаемость программы очень важна. И если
                применение спискового включения ухудшает ее — лучше его не
                использовать.
              </Text>
              <Heading>Перетасовка дел</Heading>
              <Text>
                Часто бывает так, что у нас есть список дел на день. И так же
                часто мы не можем решить, с чего начать и в каком порядке эти
                дела делать. В этом уроке вы напишите программу, которая поможет
                с порядком выполнения дел.
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
                    Первым делом нужно создать пустой список tasks. В него мы
                    будем добавлять дела пользователя. Напишите бесконечный цикл
                    while. В теле цикла с помощью функции input нужно получать
                    очередное дело от пользователя и добавлять его в список
                    tasks. Если пользователь просто нажмет кнопку ⏎ и функция
                    input вернет пустую строку, цикл должен завершится с помощью
                    оператора break.
                  </ListItem>
                  <ListItem>
                    Затем нужно перетасовать список с делами. Сделать это можно
                    с помощью модуля random, который отвечает в Python за
                    случайность. Полное описание модуля random и его функций
                    есть в нашем справочнике. В этом задании нам понадобится
                    функция shuffle, которая как раз и поможет перемешать наш
                    список дел. Обратите внимание на то, что эта функция, как и
                    метод, ничего не возвращает, а меняет исходный список. То
                    есть, использовать ее надо так
                  </ListItem>
                  <CodeFragment
                    language="python"
                    code={`random.shuffle(tasks)`}
                    showLineNumbers={false}
                  ></CodeFragment>
                  <ListItem>
                    После того как дела будут перемешаны, нужно вывести их на
                    экран с помощью цикла for. Каждое дело должно быть выведено
                    на отдельной строке.
                  </ListItem>
                  <ListItem>
                    P.S. Не забудьте импортировать модуль random в начале
                    программы.
                  </ListItem>
                </UnorderedList>
              </Box>
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
