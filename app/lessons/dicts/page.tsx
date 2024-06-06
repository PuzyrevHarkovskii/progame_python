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

const options = ["KeyError", "IndexError", "ZeroDivisionError", "NameError"];
const correctAnswers = ["KeyError"];
const question = "Отметьте ответы, которые вы считаете верными.";

export default function App() {
  return (
    <div>
      <Container maxW="container.md">
        <Box p={5}>
          <ChakraProvider theme={MainTheme}>
            <PythonProvider>
              <Heading size={"3xl"} textAlign={"center"}>
                Что такое словарь?
              </Heading>
              <Text>
                Вы наверняка помните, что в списках или, например, кортежах,
                можно получить доступ к любому элементу по индексу. Индекс
                списка или кортежа целочисленный, начинается с нуля и по сути —
                это номер элемента в коллекции. В словаре индексом может быть
                любой неизменяемый тип данных.
              </Text>
              <Text>
                Словарь обозначается с помощью фигурных скобок, а индексы,
                которые в словаре принято называть ключами, разделяются со
                значениями двоеточием. Элементы у словаря, как и у списка,
                разделены запятыми. Эта программа
              </Text>
              <CodeFragment
                language="python"
                code={`my_dict = {"first": "Первый", "second": "Второй", 3: "Третий"}
print(my_dict["second"])
print(my_dict[3])
`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет на экран значения ключей "second" и 3</Text>
              <CodeFragment
                language="python"
                code={`Второй
Третий`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Для чего может понадобится такой тип данных? Представьте список
                покупок, который вы сделали перед походом в магазин. Название
                покупки в словаре будет ключом, а количество — значением.
              </Text>
              <CodeFragment
                language="python"
                code={`purchases = {"Батон": 1, "Пирожок": 3, "Беляш": 10}`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Конечно, это может быть не только список покупок, смысл я думаю
                понятен.
              </Text>
              <Text>
                Получить значение несуществующего в словаре ключа нельзя, а если
                попытаться
              </Text>
              <CodeFragment
                language="python"
                code={`my_dict = {"first": "Первый", "second": "Второй", 3: "Третий"}
print(my_dict["strange_key"])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Питон выдаст ошибку</Text>
              <CodeFragment
                language="python"
                code={`KeyError: strange_key`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Для того чтобы код было удобнее читать, при создании словаря
                можно расположить его элементы на разных строках:
              </Text>
              <CodeFragment
                language="python"
                code={`Kmy_dict = {
"first": "Первый", 
"second": "Второй", 
3: "Третий"
}`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Python прочитает это как правильный словарь.</Text>
              <Text>Создать пустой словарь можно так</Text>
              <CodeFragment
                language="python"
                code={`my_empty_dict = {}`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Питон считает пустой словарь ложью. Это, как и в случае со
                списками, можно использовать в целях проверки. Словарь, в
                котором есть хотя бы один ключ будет для Питона истиной.
              </Text>
              <Heading>Небольшой тест</Heading>
              <Text>С какой ошибкой завершится программа?</Text>
              <CodeFragment
                language="python"
                code={`my_dict = {"first": "Первый", "second": "Второй", 3: "Третий"}
print(my_dict["3"])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Quiz
                question={question}
                options={options}
                correctAnswers={correctAnswers}
              />
              <Heading>Добавление и обновление ключей</Heading>
              <Text>
                Словарь, как и список — изменяемый тип данных. Например, чтобы
                добавить новую пару ключ-значение в словарь можно сделать так
              </Text>
              <CodeFragment
                language="python"
                code={`my_dict = {}
my_dict["new_key"] = "Новое значение"`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Если в квадратных скобках указать существующий ключ, его
                значение будет заменено на новое, а старое будет удалено из
                словаря. Ключи в словаре уникальны и в словаре не может быть
                двух или более одинаковых ключей
              </Text>
              <CodeFragment
                language="python"
                code={`my_dict = {"key": 15}
my_dict["key"] = "Новое значение"`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Разумеется, указать ключ можно с помощью переменной. Эта
                программа
              </Text>
              <CodeFragment
                language="python"
                code={`my_dict = {"key": 15}
key_var = "key"
print(my_dict[key_var])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет на экран значение ключа "key"</Text>
              <CodeFragment
                language="python"
                code={`15`}
                showLineNumbers={false}
              ></CodeFragment>
              <Heading>Первая программа со словарем </Heading>
              <Text>
                В этом уроке надо написать программу, в которой переменной
                first_dict присвоен словарь.
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
                  <Text>В этом словаре должно быть три ключа:</Text>
                  <ListItem>
                    Первый ключ должен быть строкой, а его значение должно быть
                    целым числом. Значение строки и числа могут быть любыми.
                  </ListItem>
                  <ListItem>
                    Второй ключ должен быть любым кортежем, а его значение —
                    любым списком.
                  </ListItem>
                  <ListItem>
                    Третий ключ должен быть числом с плавающей запятой, а его
                    значение — любой строкой
                  </ListItem>
                </UnorderedList>
                <Text>
                  Программа должна вывести на экран значение каждого из ключей.
                </Text>
              </Box>
              <PythonCompiler />
              <Heading>Цикл по словарю</Heading>
              <Text>
                Словарь в Питоне — коллекция. Это значит, что словарь можно
                перебрать с помощью цикла for. Если сделать так
              </Text>
              <CodeFragment
                language="python"
                code={`my_dict = {"first": "Первый", "second": "Второй", 3: "Третий"}
for k in my_dict:
    print(k)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>то на экран будет выведено</Text>
              <CodeFragment
                language="python"
                code={`first
second
3`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Tо есть цикл for переберет все ключи словаря my_dict. Чтобы
                получить значение ключа в каждой итерации, нужно указать ключ k
                для my_dict в квадратных скобках. Например, эта программа
              </Text>
              <CodeFragment
                language="python"
                code={`my_dict = {"first": "Первый", "second": "Второй", 3: "Третий"}
for k in my_dict:
    print(k, '=', my_dict[k])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет на экран ключи и значение словаря my_dict</Text>
              <CodeFragment
                language="python"
                code={`first = Первый
second = Второй
3 = Третий`}
                showLineNumbers={false}
              ></CodeFragment>
              <Heading>Простой каталог товаров</Heading>
              <Text>
                Напишите программу, с помощью которой пользователь сможет
                заполнить простой каталог товаров.
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
                    В программе должен быть создан пустой словарь — catalog. С
                    помощью цикла программа должна предложить ввести
                    пользователю три товара. В каждой итерации цикла должно
                    вводиться два значения — наименование и количество товара.
                    Наименование и количество должны вводиться с помощью двух
                    разных вызовов функции input.
                  </ListItem>
                  <ListItem>
                    Каждое наименование и количество надо добавить в словарь
                    catalog. Наименование должно быть ключом, а количество —
                    значением этого ключа.
                  </ListItem>
                  <ListItem>
                    После ввода товаров, программа должна вывести на экран все
                    введенные товары с помощью цикла for — то есть ключи и
                    значения словаря catalog. Каждый товар должен быть выведен
                    на отдельной строке, а наименование и количество должны быть
                    разделены двоеточием.
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Словари и оператор in</Heading>
              <Text>
                Оператор in можно использовать не только со строками и списками.
                Со словарями этот оператор тоже сработает, только проверять он
                будет наличие ключей.
              </Text>
              <Text>
                Если ключ найден, возвращается True, если нет — False. То есть,
                если мы хотим знать, есть какой‑то ключ в словаре, нужно
                написать что‑то похожее
              </Text>
              <CodeFragment
                language="python"
                code={`my_dict = {"first": "Первый", "second": "Второй"}
if "first" in my_dict:
    print("Ключ first есть в словаре!")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                У программы из прошлого урока был недостаток. Если пользователь
                вводил несколько одинаковых названий, каждое из них переписывало
                предыдущее. Можете запустить программу из предыдущего урока,
                ввести три одинаковых названия с разными количествами и
                посмотреть, что программа выведет на экран.
              </Text>
              <Text>Улучшите программу из прошлого урока:</Text>
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
                    количество товара после ввода преобразуйте в тип int.
                    Проверять правильность ввода пользователя не нужно.
                    Понадеемся, что он будет вводить только числа
                  </ListItem>
                  <ListItem>
                    если пользователь вводит несколько одинаковых наименований
                    товара, их количество должно суммироваться в одном ключе
                    словаря
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Подсчёт одинаковых слов</Heading>
              <Text>
                Нужно написать программу, которая получает строку от
                пользователя с помощью input. Программа должна разделить строку
                на слова по символу пробела, точке или запятой и подсчитать,
                сколько раз каждое из слов встречается в строке. Разбить на
                слова будет проще, если предварительно заменить точки и запятые
                на символы пробела. Слова должны считаться одинаковыми без учёта
                регистра. То есть «Питон» и «питон» — одно и то же слово. Пустые
                слова, которые могут появиться из‑за двух и более пробелов
                подряд, не должны участвовать в подсчёте.
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
                    Программа должна вывести слово, знак двоеточия и число раз,
                    которое это слово встречается. Выглядеть это должно примерно
                    так:
                  </ListItem>
                  <CodeFragment
                    language="python"
                    code={`программировали : 2
да : 1
не : 1
выпрограммировали : 1`}
                    showLineNumbers={false}
                  ></CodeFragment>
                  <ListItem>
                    В этом уроке не будет конкретных указаний для выполнения.
                    Думать придется самостоятельно. Однако, можно с уверенностью
                    сказать, что знания о словарях вам пригодятся.
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Порядок ключей в словаре</Heading>
              <Text>
                Начиная с Python 3.6, ключи словаря перебираются в том порядке,
                в котором они были созданы. То есть, если вы создадите словарь и
                сделаете цикл по его ключам, их очередность сохранится
              </Text>
              <CodeFragment
                language="python"
                code={`foo = {"test": 1, "test_second": 1, 2: 1}
for k in foo:
    print(k, foo[k])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Это поведение, однако, может отличаться в более ранних версиях
                Python.
              </Text>
              <Text>
                В Python 2.7, например, словари неупорядоченны, то есть создав и
                перебрав словарь
              </Text>
              <CodeFragment
                language="python"
                code={`foo = {'color': 'red', 'foo_key': 2, 1: 'no'}
for k in foo:
    print k, foo[k] 
`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>вы получите такой результат</Text>
              <CodeFragment
                language="python"
                code={`color red
1 no
foo_key 2
`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Обратите внимание на порядок последнего и предпоследнего ключа.
              </Text>
              <Text>
                Об этой особенности словарей стоит помнить, если вы пишите
                программы на Python 3.5 или ниже.
              </Text>
              <Heading>Сортировка одинаковых слов</Heading>
              <Text>
                У словарей, точно также как у списков и строк, есть методы. Их
                полное описание можно найти в справочнике .
              </Text>
              <Text>
                Надо написать программу, которая делает тоже самое, что и в
                уроке «Подсчёт одинаковых слов» с одним лишь отличием — слова
                должны выводиться на экран в алфавитном порядке.
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
                    Для выполнения такой задачи пригодится метод словаря keys(),
                    который возвращает ключи в виде коллекции, похожей на
                    список. Чтобы эта коллекция стала действительно списком, ее
                    нужно преобразовать с помощью функции list.
                  </ListItem>
                  <ListItem>
                    После этого отсортируйте получившийся список и с помощью
                    цикла по нему выведите слова в алфавитном порядке, двоеточия
                    и количество раз, которое встречается каждое слово.
                  </ListItem>
                  <ListItem>
                    То есть, если пользователь введет предложение «Первое слово,
                    второе слово», программа должна вывести на экран
                  </ListItem>
                  <CodeFragment
                    language="python"
                    code={`второе : 1
первое : 1
слово : 2`}
                    showLineNumbers={false}
                  ></CodeFragment>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Метод items()</Heading>
              <Text>
                Этот метод словаря возвращает коллекцию, похожую на список. Эта
                коллекция — итерируемая. То есть ее можно перебрать с помощью
                цикла for. Каждый элемент этой коллекции — это кортеж. С помощью
                этого метода можно сделать цикл по словарю более лаконичным. Эта
              </Text>
              <CodeFragment
                language="python"
                code={`my_dict = {"first": "Первый", "second": "Второй", 3: "Третий"}
for key, value in my_dict.items():
    print(key, ':', value)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>и эта программы</Text>
              <CodeFragment
                language="python"
                code={`my_dict = {"first": "Первый", "second": "Второй", 3: "Третий"}
for key in my_dict:
    print(key, ':', my_dict[key])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>сделают одно и тоже, но немного разными способами.</Text>

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
                  Чтобы пройти этот урок, усовершенствуйте программу из урока
                  «Словари и оператор in». Единственное, что нужно там изменить
                  — это вывод результата на экран. Сделайте это с помощью метода
                  items().
                </Text>
              </Box>
              <PythonCompiler />
              <Heading>Передача по ссылке</Heading>
              <Text>
                Как вы уже знаете, в Питоне есть изменяемые и неизменяемые типы
                данных. К изменяемым относятся, например, список и словарь, а к
                неизменяемым — строки, числа и кортежи.
              </Text>
              <Text>
                У изменяемых типов данных есть особенность. Переменные
                изменяемых типов данных передаются по ссылке. Это может
                показаться не понятным, но на самом деле все довольно просто.
                Для примера возьмем вот такой код
              </Text>
              <CodeFragment
                language="python"
                code={`a = {"key_1": 1, "key_2": 2}
b = a
b["key_3"] = 3
print(a)
print(b)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Результат его выполнения может показаться странным: обе
                переменные совершенно одинаковы. Можно проверить это, используя
                встроенную функцию id, которая предназначена для получения
                идентификатора переменной
              </Text>
              <CodeFragment
                language="python"
                code={`a = {"key_1": 1, "key_2": 2}
b = a
b["key_3"] = 3
print(id(a))
print(id(b))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Эту особенность изменяемых данных нужно помнить, чтобы избежать
                неприятных сюрпризов при написании программ.
              </Text>
              <Text>
                Например, мы задумали сделать программу, которая создает список
                словарей с отличающимися значениями ключа "key"
              </Text>
              <CodeFragment
                language="python"
                code={`dicts = []
data = {}
for i in range(3):
    data['key'] = i
    dicts.append(data)
print(dicts)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Запустив эту программу, вы увидите, что словари внутри списка
                совершенно одинаковые. То есть, у нас в списке три ссылки на
                один и тот же словарь.
              </Text>
              <Text>
                Все изменится, если перенести создание словаря в цикл. Тогда на
                каждой итерации будет создаваться новый словарь и все элементы
                списка действительно будут разными
              </Text>

              <CodeFragment
                language="python"
                code={`dicts = []
for i in range(3):
    data = {}
    data['key'] = i
    dicts.append(data)
print(dicts)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Иногда может понадобится сделать копию существующего словаря или
                списка. Для списков можно использовать срез от начала и до конца
                списка
              </Text>
              <CodeFragment
                language="python"
                code={`a = [1, 2, 3]
b = a[:]
print(id(a), id(b))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Также у списков и словарей есть метод copy, который вернет копию
                существующего словаря либо списка
              </Text>
              <CodeFragment
                language="python"
                code={`a = {'key': 1}
b = a.copy()
print(id(a), id(b))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Heading>Разница между == и is</Heading>
              <Text>
                В одном из уроков раздела «Ветвление» мы обещали показать
                различия между операторами == и is. И теперь, когда вы уже в
                курсе про передачу по ссылке, самое время это сделать. Запустите
                вот такой код и посмотрите, как сработают оба оператора
              </Text>
              <CodeFragment
                language="python"
                code={`a = {"key": 1}
b = a
c = {"key": 1}

# a это b, то есть буквально
# это тот же самый объект в памяти
print(a is b) 

# ну и конечно же a равно b
print(a == b)

# a и c -- разные объекты в памяти.
# поэтому is вернет False
print(a is c)

# но в это же время они равны
# то есть у них одинаковые значения
print(a == c)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Аналогичным будет и работа со списками. Списки — это изменяемые
                данные, а значит тоже передаются по ссылке. Замените первые три
                строки программы на
              </Text>
              <CodeFragment
                language="python"
                code={`a = [1, 2, 3]
b = a
c = [1, 2, 3]`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>и убедитесь, что это действительно так.</Text>
              <Text>
                То есть, оператор == проверяет равенство значений объектов, а
                оператор is — идентичность.
              </Text>
              <Heading>Удаление ключей</Heading>
              <Text>
                Иногда бывает нужно удалить существующий ключ из словаря.
                Сделать это можно с помощью оператора del. Эта программа
              </Text>
              <CodeFragment
                language="python"
                code={`my_dict = {"first": "Первый", "second": "Второй", 3: "Третий"}
del my_dict['first']
print(my_dict)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет на экран</Text>
              <CodeFragment
                language="python"
                code={`{'second': 'Второй', 3: 'Третий'}`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>То есть ключ "first" будет удален из словаря.</Text>
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
