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
                Объектно-ориентированное программирование
              </Heading>
              <Text>
                До этого урока код в наших программах состоял из блоков,
                выражений и максимум, как мы организовывали его, это писали
                функции. Такой подход к программированию называется
                процедурно-ориентированным. В этом подходе нет ничего плохого и
                его вполне можно использовать. Однако, когда сложность и объем
                программы растет, становится трудно удержать все детали в
                голове.
              </Text>
              <Text>
                Собственно, чтобы улучшить организацию и восприятие кода, был
                придуман объектно-ориентированный подход к программированию.
              </Text>
              <Text>
                Основополагающие понятия объектно-ориентированного
                программирования — это класс и объект. Когда программист создает
                класс, он по сути создает свой собственный тип данных. А вот
                объект — это конкретный экземпляр класса.
              </Text>
              <Text>
                Чтобы лучше разобраться в этом, приведу пример с уже знакомым
                вам встроенным типом данных
              </Text>
              <CodeFragment
                language="python"
                code={`string = "Любая строка"
print(type(string))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                В этой программе переменная string — это объект класса str
              </Text>
              <CodeFragment
                language="python"
                code={`<class 'str'>`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Создать класс можно с помощью ключевого слова class</Text>
              <CodeFragment
                language="python"
                code={`class ExampleClass:
    pass`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                То есть, мы пишем ключевое слово class, название класса и
                двоеточие. Как и при создании функции, тело класса мы пишем с
                отступом. Про то, что может быть телом класса вы узнаете в
                следующем уроке. Пока оставим его пустым и в этом нам поможет
                оператор pass.
              </Text>
              <Text>
                Обратите внимание на то, как написано название класса. Такой
                стиль именования называется CamelCase и именно этот стиль
                предпочтителен для названий классов. CamelCase переводится с
                английского как ВерблюжийРегистр. Слова при таком стиле пишутся
                без пробелов, каждое слово с заглавной буквы. Эти заглавные
                буквы напоминают горбы верблюда. Отсюда и такое название.
              </Text>
              <Heading>Создание объекта класса</Heading>
              <Text>
                Как вы помните, для создания объектов встроенных типов
                используются различные способы. Например, списки создаются с
                помощью квадратных скобок
              </Text>
              <CodeFragment
                language="python"
                code={`data = []`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Помимо этого способа, можно использовать и создание через
                название класса.
              </Text>
              <CodeFragment
                language="python"
                code={`data = list()`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                То есть, мы пишем название класса list, скобки и в итоге
                получаем созданный список (то есть объект класса list) в
                переменной data.
              </Text>
              <Text>
                Все это будет работать и с нашим классом ExampleClass из
                предыдущего урока
              </Text>
              <CodeFragment
                language="python"
                code={`class ExampleClass:
    pass

example = ExampleClass()`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Теперь в переменной example у нас хранится объект(или экземпляр)
                класса ExampleClass.
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
                    Чтобы пройти этот урок, напишите программу, в которой будет
                    создан один класс с названием MyFirstClass и переменная с
                    именем first_object, в которой будет храниться экземпляр
                    класса MyFirstClass.
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Поля объекта</Heading>
              <Text>
                Каждый объект может хранить данные в своих внутренних
                переменных. Чтобы было немного веселее, мы будем моделировать
                кота в объектно-ориентированном стиле. Проще говоря, создадим
                объект «кота» и сохраним в «него» какие‑то данные
              </Text>
              <CodeFragment
                language="python"
                code={`class Cat:
    pass

fil = Cat()
fil.name = 'Филимон'`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Переменные объекта называются полями. К ним можно получить
                доступ только через объект. То есть вот такой код, разумеется,
                вызовет ошибку
              </Text>
              <CodeFragment
                language="python"
                code={`class Cat:
    pass

fil = Cat()
fil.name = 'Филимон'
print(name)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>а вот такой сработает как надо</Text>
              <CodeFragment
                language="python"
                code={`class Cat:
    pass

fil = Cat()
fil.name = 'Филимон'
print(fil.name)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Полей может быть сколько угодно и типы этих полей могут быть
                любыми: числа, строки, списки и так далее
              </Text>
              <CodeFragment
                language="python"
                code={`class Cat:
    pass

fil = Cat()
fil.name = 'Филимон'
fil.age = 7
fil.fails = ['Упал в аквариум', 'Украл рыбу']`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Поля еще называют атрибутами или свойствами. То есть, если вы
                слышите эти два слова, скорее всего речь идет о полях.
              </Text>
              <Text>
                Скорее всего, эта история чем‑то напоминает вам словари, но не
                торопитесь с выводами. В следующем уроке вы узнаете про методы и
                все перевернется с головы на ноги.
              </Text>
              <Heading>Методы объекта и self</Heading>
              <Text>
                Метод объекта — это функция, которая принадлежит объекту. По
                аналогии с полями получить доступ, то есть вызвать, такую
                функцию можно только через объект.
              </Text>
              <Text>
                Пишутся методы внутри тела класса. У каждого метода должен быть
                как минимум один аргумент и называть этот аргумент принято
                словом self.
              </Text>
              <CodeFragment
                language="python"
                code={`class Cat:
    def ask_for_food(self):
        print('Хозяин, я требую пищу')

fil = Cat()
fil.name = 'Филимон'
fil.ask_for_food()`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Обратите внимание, что при вызове метода этот аргумент
                передавать не нужно. Python автоматически передает в метод
                экземпляр класса, у которого этот метод вызван. Немного
                переделаем нашу программу, чтобы коты говорили о себе в третьем
                лице
              </Text>
              <CodeFragment
                language="python"
                code={`class Cat:
    def ask_for_food(self):
        print('Хозяин, кот {} требует пищу'.format(self.name))

fil = Cat()
fil.name = 'Филимон'
fil.ask_for_food()

var = Cat()
var.name = 'Варежка'
var.ask_for_food()`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Обратите внимание, что метод у каждого из объектов вызван
                одинаково, однако в каждом из вызовов значения self отличаются.
                Да, если заменить self на любое другое название, программа
                по‑прежнему будет работать правильно
              </Text>
              <CodeFragment
                language="python"
                code={`class Cat:
    def ask_for_food(instance):
        print('Хозяин, кот {} требует пищу'.format(instance.name))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Но делать этого не стоит. По традиции это все‑таки self и если
                какой‑нибудь программист увидит, что вместо self вы используете
                какое‑то другое слово, последствия могут быть плачевными.
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
                    Для того, чтобы пройти этот урок, напишите программу, в
                    которой будет написан хотя бы один класс с методом.
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Метод __init__</Heading>
              <Text>
                Возможно вы заметили, что создание полей у объектов в прошлых
                уроках выглядит как‑то хлипко. Я имею в виду, что если мы,
                например, забудем присвоить коту имя, то при попытке вызвать
                метод ask_for_food мы, естественно, получим ошибку.
              </Text>
              <CodeFragment
                language="python"
                code={`class Cat:
    def ask_for_food(self):
        print('Хозяин, кот {} требует пищу'.format(self.name))

fil = Cat()
fil.ask_for_food()`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Программа выше вызовет ошибку AttributeError, так как мы
                обращаемся к полю, которого в объекте попросту нет.
              </Text>
              <Text>
                Такое вполне может случится, если коты создаются в разных местах
                программы или мы решили создать целую стаю котов. К тому же,
                некоторые поля наверняка захочется инициализировать при создании
                объекта какими‑то начальными значениями, чтобы не делать это
                каждый раз после создания
              </Text>
              <CodeFragment
                language="python"
                code={`class Cat:
    pass

fil = Cat()

# создаем пустой список, чтобы в процессе выполнения 
# программы добавлять неудачи в послужной список
fil.fails = []`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                В общем, если вы хотите присвоить какие‑либо значения полям
                объекта во время создания, нужно использовать специальный метод
                инициализации __init__. Как и для обычных методов объекта,
                первым параметром __init__ будет self. После него можно указать
                все аргументы, которые необходимы для создания объекта
              </Text>
              <CodeFragment
                language="python"
                code={`class Cat:
    def __init__(self, name):
        self.name = name

fil = Cat('Филимон')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Еще раз обратите внимание на то, что в определении метода у нас
                два аргумента, а при создании объекта мы передаем только один.
                Все точно так же, как и в обычных методах: объект self Python
                передаст нам автоматически.
              </Text>
              <Text>
                Так как методы — это те же самые функции, то мы можем указывать
                значение по умолчанию для аргументов. Например, вот так
              </Text>
              <CodeFragment
                language="python"
                code={`class Cat:
    def __init__(self, name, is_fluffy=False):
        self.name = name
        self.is_fluffy = is_fluffy

fil = Cat('Филимон')

if not fil.is_fluffy:
    print('Непушистый {}'.format(fil.name))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                И еще один важный момент. Аргументы метода инициализации (да и
                любого метода объекта на самом деле) никак не связаны с полями
                объекта. То есть self.name и name — разные переменные. И до тех
                пор, пока вы явно не присвоите self.name значение name, никакого
                поля у объекта, конечно же, не будет.
              </Text>
              <Text>
                Ну и разумеется, мы можем создавать поля для объекта вообще
                никак не связанные с аргументами метода __init__
              </Text>
              <CodeFragment
                language="python"
                code={`class Cat:
    def __init__(self, name, is_fluffy=False):
        self.name = name
        self.is_fluffy = is_fluffy
        self.fails = []`}
                showLineNumbers={false}
              ></CodeFragment>
              <Heading>Инкапсуляция</Heading>
              <Text>
                Можно ли обойтись без классов и объектов? Разумеется. Можно
                использовать словарь для хранения данных, метод ask_for_food
                заменить на функцию и передавать в нее весь словарь целиком
              </Text>
              <CodeFragment
                language="python"
                code={`fil = {
    "name": 'Филимон',
    "is_fluffy": False,
    "fails": []
}

def ask_for_food(cat):
    print('Хозяин, кот {} требует пищу'.format(cat['name']))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Это будет работать. Но что, если кроме котов нам понадобятся
                собаки, которые, как и коты, хотят поесть? Программа, скорее
                всего, будет выглядеть так
              </Text>
              <CodeFragment
                language="python"
                code={`den = {
    "name": 'Дэн',
    "is_fluffy": False,
    "fails": []
}

fil = {
    "name": 'Филимон',
    "is_fluffy": False,
    "fails": []
}

def cat_asks_for_food(cat):
    print('Хозяин, кот {} требует пищу'.format(cat['name']))

def dog_asks_for_food(dog):
    print('Хозяин, пёс {} требует косточку'.format(dog['name']))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Теперь для каждого питомца у нас своя функция. Если мы передадим
                в функцию dog_asks_for_food переменную fil, просьба кота будет
                выведена на экран по‑собачьи. А если вдруг мы «заведем» енота,
                придется «заводить» и третью функцию raccoon_asks_food.
              </Text>
              <Text>
                В общем, чем больше питомцев, тем больше бардак. Можно, конечно,
                добавить дополнительный ключ 'type' и оставить одну функцию
              </Text>

              <CodeFragment
                language="python"
                code={`def ask_for_food(pet):
    if pet['type'] == 'cat':
        print('Хозяин, кот {} требует пищу'.format(pet['name']))
    elif pet['type'] == 'dog':
        print('Хозяин, пёс {} требует косточку'.format(pet['name']))
    # и так далее для все питомцев`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Ну вдруг нам понадобится написать еще какую‑то функцию для
                действий с питомцами? Все условия в ней придется писать
                повторно. К тому же, если мы захотим добавить в питомцы хомяка,
                нам нужно не забыть добавить условие уже в две функции.
              </Text>
              <Text>
                Если внимательно следить за всеми переменными и функциями, можно
                писать программы и таким способом. Однако,
                объектно-ориентированное программирование дает более подходящий
                инструмент для реализации подобного: класс связывает данные с
                методами в единое целое. Это связывание называется инкапсуляцией
                и это один из китов, на котором стоит объектно-ориентированное
                программирование.
              </Text>
              <Text>
                Для того, чтобы почувствовать прелесть инкапсуляции на практике,
                напишите программу, в которой будет три класса: Cat, Dog и
                Raccoon.
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
                    У каждого из них должен быть определен метод инициализации
                    __init__ с параметром name.
                  </ListItem>
                  <ListItem>
                    Метод инициализации должен создавать поле объекта name со
                    значением параметра, переданного при создании объекта.
                  </ListItem>
                  <ListItem>
                    У каждого класса должен быть реализован метод ask_for_food.
                    Он должен выводить на экран текст, в котором содержится
                    значение поля name.
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Наследование</Heading>
              <Text>
                Написав программу из прошлого урока, вы, скорее всего,
                почувствовали, что что‑то не так. Код метода init был одинаковым
                для всех классов.
              </Text>
              <CodeFragment
                language="python"
                code={`def __init__(self, name):
    self.name = name`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                То есть от дублирования кода мы не избавились. И это не очень
                хорошо. Писать все в одном классе, а потом расставлять условия в
                методе ask_for_food — не вариант, ведь мы как раз от этого и
                хотели избавиться.
              </Text>
              <Text>
                К счастью, при использовании классов и объектно-ориентированного
                подхода у нас появляется мощный инструмент: наследование.
              </Text>
              <Text>
                Наследование — это создание нового класса на основе уже
                существующего. При этом вновь созданный класс будет использовать
                код, написанный в существующем классе.
              </Text>
              <Text>
                Собственно, не будем тянуть кота за хвост и попробуем что‑нибудь
                отнаследовать. Создадим класс Pet в котором будет одинаковый для
                всех питомцев метод инициализации
              </Text>
              <CodeFragment
                language="python"
                code={`class Pet:
    def __init__(self, name):
        self.name = name`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Классы Cat, Dog и Raccoon отнаследуем от этого класса. Синтаксис
                наследования прост: достаточно в скобках после название класса
                написать название класса, от которого мы наследуемся.
              </Text>
              <CodeFragment
                language="python"
                code={`class Cat(Pet):
    def ask_for_food(self):
        print('Кот {} требует пищу'.format(self.name))


class Dog(Pet):
    def ask_for_food(self):
        print('Пёс {} хочет есть'.format(self.name))


class Raccoon(Pet):
    def ask_for_food(self):
        print('Енот {} уже начинает воровать'.format(self.name))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                В терминах объектно-ориентированного программирования класс Pet
                будет супер-классом для классов Cat, Dog и Raccoon. Также его
                вполне можно назвать базовым или родительским. Классы Cat, Dog и
                Raccoon будут подклассами или потомками.
              </Text>
              <Text>
                Эти термины стоит запомнить, потому что дальше мы будем
                пользоваться именно ими.
              </Text>
              <Heading>Метод __str__ </Heading>
              <Text>
                Чтобы осознать предыдущий урок, может потребоваться время.
                Поэтому пока сделаем небольшой перерыв в сложных понятиях и
                рассмотрим простой, но практически всегда необходимый метод
                __str__.
              </Text>
              <Text>
                Если попробовать вывести на экран какой‑либо объект написанного
                нами класса, вы увидите на экране информацию о том, что это за
                объект и из какого он модуля. Попробуйте запустить вот такую
                программу
              </Text>
              <CodeFragment
                language="python"
                code={`class AnyClass:
    pass

any_object = AnyClass()
print(any_object)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Это можно изменить, определив в классе метод __str__</Text>
              <CodeFragment
                language="python"
                code={`class Cat:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return "Кот {}".format(self.name)


fil = Cat("Филимон")
print(fil)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Все довольно просто, а в результате мы получаем читаемое
                строковое представление наших объектов.
              </Text>
              <Heading>Тренируемся с наследованием </Heading>
              <Text>
                Коты, собаки и еноты — это хорошо. Но давайте поупражняемся с
                какими‑то более приближенными к реальности вещами. Предположим,
                вы участвуете в разработке прогрессивного интернет-банкинга.
                Ваша работа — написать классы для пластиковых карт. Эти классы в
                свою очередь будут использовать другие программисты при
                отображении карточек в интерфейсе, выписках и т. д.
              </Text>
              <Text>
                Итак, напишите класс Card. В его метод инициализации должны
                передаваться следующие параметры: number, holder, valid_date и
                ccv. Далее должны создаваться поля с такими же названиями. Все
                поля (как и параметры метода инициализации) — это строки.
              </Text>
              <Text>
                Также в этом классе должен быть реализован метод
                get_hidden_number. Его задача — вернуть замаскированный с
                помощью звездочек номер карточки, то есть первые два символа из
                номера карточки, потом 10 звездочек и в самом конце последние 4
                символа из номера карточки. Для номера
              </Text>
              <CodeFragment
                language="python"
                code={`4200000000000001`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>метод get_hidden_number должен вернуть</Text>
              <CodeFragment
                language="python"
                code={`42** **** **** 0001`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Можете смело рассчитывать на то, что в номере карточки всегда
                будет 16 символов. Пробелы для разбивки номера на 4 части
                необязательны.
              </Text>
              <Text>
                Кроме класса Card должны быть написаны еще два: MasterCard и
                Visa. Родителем для этих двух классов должен быть класс Card.
                Каждый из классов MasterCard и Visa должен реализовывать свой
                метод __str__. Метод должен возвращать строку с наименованием
                карты, замаскированным номером и квадратными скобками в начале и
                конце.
              </Text>
              <Text>К примеру, для номера</Text>
              <CodeFragment
                language="python"
                code={`4200000000000001`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>и класса MasterCard это будет</Text>
              <CodeFragment
                language="python"
                code={`[mastercard 42** **** **** 0001]`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>а для класса Visa</Text>
              <CodeFragment
                language="python"
                code={`[visa 42** **** **** 0001]`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Для получения замаскированного номера используйте вызов метода
                get_hidden_number внутри метода __str__.
              </Text>
              <PythonCompiler />
              <Heading>Передача по ссылке</Heading>
              <Text>
                При присваивании переменным, объекты передаются по ссылке. Точно
                так же, как, например, списки и словари. Если взять класс одного
                из прошлых уроков и попробовать написать вот такую программу
              </Text>
              <CodeFragment
                language="python"
                code={`class Cat:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return 'Кот {}'.format(self.name)


fil = Cat('Филимон')
cat = fil
cat.name = 'Мурлыч'

print(fil)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                то переменные cat и fil будут ссылаться на один и тот же объект.
              </Text>
              <Heading>Две важные функции</Heading>
              <Text>
                Две важные функции в объектно-ориентированном программировании —
                это isinstance и issubclass.
              </Text>
              <Text>
                Первая из них, isinstance проверяет, является ли объект
                экземпляром указанного класса (одного из классов) или его
                подкласса
              </Text>
              <CodeFragment
                language="python"
                code={`class Pet:
    def __init__(self, name):
        self.name = name


class Cat(Pet):
    pass


class Dog(Pet):
    pass


fil = Cat('Филимон')
dan = Dog('Дэн')

print(isinstance(fil, Cat))
print(isinstance(dan, Cat))

# Dog это подкласс Pet
# поэтому isinstance вернет True
print(isinstance(dan, Pet))

# Вторым параметром функции может быть
# и кортеж классов
print(isinstance(fil, (Dog, Cat)))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Вторая, issubclass, проверяет, является ли класс потомком класса
                или одного из классов
              </Text>
              <CodeFragment
                language="python"
                code={`print(issubclass(Cat, Dog))
print(issubclass(Cat, Pet))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Вторым аргументом этой функции также может быть кортеж из
                классов.
              </Text>
              <Heading>Функция super</Heading>
              <Text>
                Для того чтобы показать, что все рассказанное в этом уроке может
                встретиться в реальных программах, примеры будут взяты из
                серверной части нашей платформы. Разумеется, много кода в них
                будет убрано, чтобы показать только саму суть.
              </Text>
              <Text>
                Все подписки, которые можно купить, описаны классами. Часть
                методов этих классов отвечает за отображение информации
                пользователю, а часть служит для взаимодействия с платежными
                системами. Так вот, одна из таких подписок — это подписка на
                месяц. Если очень сильно все упростить и убрать все лишнее, то
                получится класс с методом, который возвращает цену
              </Text>
              <CodeFragment
                language="python"
                code={`class TariffOneMonth:
    # На самом деле, тут у нас еще много всякого кода 
    # для отображения в списках, работы 
    # с платежными системами, валютой и так далее


    def get_price(self):
        return 10`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Бывает, что мы устраиваем распродажи и на этот случай у нас есть
                отдельный класс, который наследуется от TariffOneMonth. В нем мы
                переопределяем только метод get_price. То есть, получаем всю
                функциональность, только с другой ценой. Вот самый первый
                вариант кода для этого класса
              </Text>
              <CodeFragment
                language="python"
                code={`class TariffOneMonthDiscounted(TariffOneMonth):

    # Цена с 50% скидкой
    def get_price(self):
        return 5
`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Выглядит неплохо. Однако, есть один существенный недостаток. Стоимость подписки может измениться и цену придется менять в двух местах. И это только для одной из подписок. Плюс еще есть цены в разных валютах. Изменение цен — дело нечастое. Поэтому, с большой долей вероятности, кто‑нибудь обязательно забудет какую‑то из цен изменить.

</Text>
              <Text>Представьте, цена подписки на месяц уменьшится в два раза, а цифру в подписке со скидкой никто не поменяет. В итоге получится две одинаковые цены и никаких реальных скидок. Вряд ли кого‑то это обрадует.

</Text>
              <Text>В общем, хотелось бы получить цену от родительского класса и вычислять скидку от нее, чтобы описанного выше казуса не произошло. Для этого можно использовать функцию super, а итоговый вариант будет выглядеть так

</Text>
<CodeFragment
                language="python"
                code={`class TariffOneMonthDiscounted(TariffOneMonth):

    # Цена с 50% скидкой
    def get_price(self):
        price = super().get_price()
        return int(price / 2)
`}
                showLineNumbers={false}
              ></CodeFragment>
<Text>Обязательно запустите этот код, попробуйте изменить цену в TariffOneMonth и посмотрите, как это работает.</Text>
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
