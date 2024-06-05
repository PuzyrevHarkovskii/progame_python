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
  "z = (1.2)",
  "z = 1, 2, 3",
  "z = 1,",
  "z = [1, 2, 3, (1, 2, )]",
];
const correctAnswers = ["z = 1, 2, 3", "z = 1,", "z = [1, 2, 3, (1, 2, )]"];
const question = "Отметьте пункты, в которых есть кортеж.";

export default function App() {
  return (
    <div>
      <Container maxW="container.md">
        <Box p={5}>
          <ChakraProvider theme={MainTheme}>
            <PythonProvider>
              <Heading size={"3xl"} textAlign={"center"}>
                Кортежи
              </Heading>
              <Text>
                Кортеж — это неизменяемый список. Все операции и методы, которые
                работают со списками, но не изменяют его, работают и с
                кортежами. Например, метод index есть как у списков, так и у
                кортежей. А метода append, который добавляет элементы списка, у
                кортежа нет.
              </Text>
              <Text>
                Разумеется, вместо кортежа всегда можно использовать список. Но
                иногда бывает необходима «защита от дурака» — то есть, чтобы
                какой‑то список никогда не менялся случайно или намерено. Да и
                памяти внутри компьютера кортеж занимает меньше. В общем, бывают
                случаи, когда кортежи действительно нужны.
              </Text>
              <Text>
                Кортеж обозначается с помощью запятых. Если в кортеже всего один
                элемент, после него нужно ставить запятую. Здесь переменные a, b
                и c будут кортежами, а d — строкой.
              </Text>
              <CodeFragment
                language="python"
                code={`a = (1, 2, 3)
b = 1, 2, 3
c = ("s", )
d = ("s")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Круглые скобки не обязательны, но лучше их все же ставить. Тем
                более, что бывают случаи, когда скобки все‑таки нужны. В первом
                print — это три параметра: 1, 2 и 3. А во втором — это один
                параметр — кортеж из трех элементов.
              </Text>
              <CodeFragment
                language="python"
                code={`print(1, 2, 3)
print((1, 2, 3))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Heading>Тест</Heading>
              <Quiz
                question={question}
                options={options}
                correctAnswers={correctAnswers}
              />
              <Heading>Распаковка последовательностей</Heading>
              <Text>Проще, конечно, показать на примере</Text>
              <CodeFragment
                language="python"
                code={`collection = [25, "Иван", 103]
age, name, weight = collection
print(age, name, weight)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Тут трём переменным age, name и weight, присваиваются значения
                элементов списка с индексами 0, 1 и 2 .
              </Text>
              <Text>
                Все что нужно сделать для распаковки — это указать переменные,
                которым будут присвоены элементы последовательности. Однако, для
                этого нужно знать, сколько элементов содержится в
                последовательности. Программа завершится с ошибкой, если
                количество переменных не совпадает с длиной последовательности.
              </Text>
              <Text>
                Есть одна штука, которую можно сделать с помощью распаковки. Это
                — обмен переменных значениями. Если вам понадобится это сделать,
                никогда не делайте так (да, в одном из уроков мы делали так, но
                только для того, чтобы показать, как выполняется программа)
              </Text>
              <CodeFragment
                language="python"
                code={`a = 1
b = 2
tmp = a
a = b
b = tmp`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Делайте только так</Text>
              <CodeFragment
                language="python"
                code={`a = 1
b = 2
a, b = b, a`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Мы обменяли a и b значениями, теперь a — это 2, а b — 1. Все
                выглядит просто и красиво.
              </Text>
              <Heading>Функция enumerate</Heading>
              <Text>
                Иногда бывает нужно знать индекс элемента при переборе
                коллекции. Можно, конечно, использовать переменную-счетчик
              </Text>
              <CodeFragment
                language="python"
                code={`i = 0
list_ = ["Первое слово", "Второе", "Третье слово"]
for e in list_:
    print(i, e)
    i += 1`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Однако выглядит это не очень, и лучше воспользоваться функцией
                enumerate. Эта функция преобразует каждый элемент
                последовательности в кортеж. Первым в кортеже будет идти индекс
                элемента последовательности. Вторым — сам элемент
                последовательности.
              </Text>
              <CodeFragment
                language="python"
                code={`list_ = ["Первое слово", "Второе", "Третье слово"]
for el in enumerate(list_):
    # в каждой итерации enumerate будет
    # создавать кортеж из двух элементов
    print(el[0], el[1])
    i += 1`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Этот кортеж можно распаковать в две переменные и тогда код
                станет чуточку лучше
              </Text>
              <CodeFragment
                language="python"
                code={`list_ = ["Первое слово", "Второе", "Третье слово"]
for el in enumerate(list_):
    i, e = el
    print(i, e)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                А благодаря удобству Python, кортеж можно распаковать прямо в
                управляющей строке цикла. Это даст нам самый простой и красивый
                код
              </Text>
              <CodeFragment
                language="python"
                code={`list_ = ["Первое слово", "Второе", "Третье слово"]
for i, e in enumerate(list_):
    # в каждой итерации enumerate будет
    # создавать кортеж из двух элементов.
    # Этот кортеж, в свою очередь,
    # будет распакован в переменные
    print(i, e)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Функции enumerate можно передать и второй параметр — номер, с
                которого начинается нумерация элементов последовательности.
              </Text>
              <Text>
                Чтобы пройти этот урок, напишите программу, которая делит
                введённое пользователем предложение на слова. Учтите, что между
                словами может быть больше одного пробела. После этого программа
                должна вывести на экран слова вместе с порядковыми номерами в
                предложении. Номера должны начинаться с единицы. То есть, если
                пользователь ввел «Китайские товары со всего мира», программа
                должна вывести на экран
              </Text>
              <CodeFragment
                language="python"
                code={`1 Китайские
2 товары
3 со
4 всего
5 мира`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Для решения можно использовать любые дополнительные переменные.
                Обязательно используйте функцию enumerate и цикл for.
              </Text>
              <Heading>Преобразование коллекций</Heading>
              <Text>
                Иногда бывает нужно преобразовать кортеж или, например, строку в
                список. Встроенная функция list() создана как раз для этого.
                Вообще, list() преобразует в список любую коллекцию.
              </Text>
              <Text>Эта программа</Text>
              <CodeFragment
                language="python"
                code={`my_string = "Моя строка"
                my_tuple = ("Мой", "кортеж")
                print(list(my_string))
print(list(my_tuple))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет на экран</Text>
              <CodeFragment
                language="python"
                code={`['М', 'о', 'я', ' ', 'с', 'т', 'р', 'о', 'к', 'а']
['Мой', 'кортеж']`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                То есть, каждая буква строки my_string и каждый элемент кортежа
                my_tuple стали элементами списка.
              </Text>
              <Text>
                Функция tuple() работает точно также, но на выходе будет не
                список, а кортеж. Результатом выполнения этого кода
              </Text>
              <CodeFragment
                language="python"
                code={`my_string = "Моя строка"
my_list = ["Мой", "список"]
print(tuple(my_string))
print(tuple(my_list))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>будет</Text>
              <CodeFragment
                language="python"
                code={`('М', 'о', 'я', ' ', 'с', 'т', 'р', 'о', 'к', 'а')
('Мой', 'список')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Если попробовать преобразовать в список или кортеж число,
                программа закончится с ошибкой
              </Text>
              <CodeFragment
                language="python"
                code={`list(13)`}
                showLineNumbers={false}
              ></CodeFragment>
              <CodeFragment
                language="python"
                code={`TypeError: 'int' object is not iterable`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                То есть, преобразование в список или кортеж возможно только из
                коллекций.
              </Text>
              <Heading>Итераторы и итерируемые объекты </Heading>
              <Text>
                В уроках этого раздела с помощью цикла for мы по шагам
                перебирали элементы списков. Также была программа с
                использованием функции range. Эта функция возвращает
                последовательность, похожую на список. Так вот, и список и
                последовательность, возвращенная range — итерируемые объекты, то
                есть объекты, по которым можно «пробежаться» циклом. Строка и
                кортеж — также итерируемые объекты.
              </Text>
              <Text>
                Результат функции enumerate — также итерируемый объект. Но этот
                объект немного отличается от всех объектов, приведенных выше.
              </Text>
              <Text>Попробуйте запустить вот такую программу</Text>
              <CodeFragment
                language="python"
                code={`a = range(10)
b = [1,2,3]
c = enumerate(b)

for i in a:
    print(i)

for i in b:
    print(i)

for i in c:
    print(i)

print(a[0])
print(b[0])
print(c[0])`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Ошибка произойдет в последней строке программы, при попытке
                получить элемент последовательности c. То есть, с одной стороны
                элементы есть. Мы можем «пробежаться» по ним циклом. А с другой
                стороны их нет, по крайней мере получить доступ к одному из
                элементов мы не можем.
              </Text>
              <Text>
                Такие объекты называются итераторами. Каждую итерацию цикла к
                такому объекту идет обращение с «просьбой» отдать следующее
                значение. Как раз в момент этого обращения нужное значение
                создается и возвращается. Для enumerate, например, каждое такое
                обращение создает кортеж из двух элементов — номера элемента
                следующего и самого следующего элемента.
              </Text>
              <Heading>Про экономию памяти</Heading>
              <Text>
                И получившийся в результате работы функции enumerate итератор, и
                последовательность чисел, полученная с помощью range могут быть
                преобразованы в список
              </Text>
              <CodeFragment
                language="python"
                code={`a = range(5)
b = enumerate(a)

print(a, b)

print(list(a))
print(list(b))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Обязательно запустите эту программу и посмотрите на результат ее
                работы.
              </Text>
              <CodeFragment
                language="python"
                code={`range(0, 5) <enumerate object>
[0, 1, 2, 3, 4]
[(0, 0), (1, 1), (2, 2), (3, 3), (4, 4)]`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Как видите, все сработало как надо и мы получили преобразованные
                списки.
              </Text>
              <Text>
                Нужно, однако, понимать цену такого преобразования. Итератор,
                получившийся в результате работы функции enumerate, как и
                последовательность чисел, полученная с помощью range «ленивы».
                Это означает, что они создают нужные значения в памяти только
                тогда, когда это требуется. В случае же преобразования в список,
                все значения будут записаны в память.
              </Text>
              <Text>
                Разумеется, разница в потребляемой памяти для таких примеров не
                велика. Но представьте, что range вызван с аргументом в
                несколько миллионов, а в enumerate передан список из нескольких
                сотен тысяч слов. В первом примере ниже, порядковый номер слова
                высчитывается только в нужный момент — только тогда, когда
                начинается новая итерация. То есть, на протяжении всего цикла
                это будет одно число в памяти, хоть и постоянно увеличивающееся
              </Text>
              <CodeFragment
                language="python"
                code={`# в каждой итерации enumerate будет 
# высчитывать порядковый номер слова
for i, e in enumerate(huge_list_of_words):
    print(i, e)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Во втором примере все будет по‑другому</Text>
              <CodeFragment
                language="python"
                code={`# в получившемся списке для каждого из 
# слов будет сохранен порядковый номер
for i, e in list(enumerate(huge_list_of_words)):
    print(i, e)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Для каждого слова будет сохранен порядковый номер, то есть на
                голом месте мы получили несколько сотен тысяч чисел, которые
                занимают лишнюю память.
              </Text>
              <Text>
                В общем, стоит помнить о том, что enumerate и range возвращают
                «ленивые» объекты. И преобразовывать эти последовательности в
                списки стоит с особенной аккуратностью и только тогда, когда это
                действительно необходимо.
              </Text>
              <Heading>Угадай число</Heading>
              <Text>
                Для того чтобы пройти этот урок, нужно написать программу, в
                которой предлагается угадать загаданное компьютером целое
                случайное число от 0 до 10 за три попытки.
              </Text>
              <Box
py={3}
px={3}
border="1px solid"
borderColor="gray.200"
borderRadius="md"
borderLeftColor="blue.300"
borderLeftWidth="6px"
> <UnorderedList>
    <ListItem>Первым делом присвойте переменной number значение, полученной с помощью функции randint из модуля random.</ListItem>
    <ListItem>После этого, программа должна дать три попытки на то, чтобы пользователь угадал число number. Для этого, с помощью цикла for и функции range надо создать цикл на три итерации.</ListItem>
    <ListItem>В каждой итерации программа должна запрашивать у пользователя число. Если загаданное число меньше, чем число, которое ввел пользователь, программа должна вывести на экран</ListItem>
    <CodeFragment
                language="python"
                code={`Загаданное число меньше`}
                showLineNumbers={false}
              ></CodeFragment>
              <ListItem>Если загаданное число больше, чем число, которое ввел пользователь, программа должна вывести на экран текст</ListItem>
              <CodeFragment
                language="python"
                code={`Загаданное число больше`}
                showLineNumbers={false}
              ></CodeFragment>
              <ListItem>Если пользователь угадал, на экран должно быть выведено</ListItem>
              <CodeFragment
                language="python"
                code={`Вы выиграли`}
                showLineNumbers={false}
              ></CodeFragment>
               <ListItem>Цикл при этом должен закончится с помощью break.</ListItem>
               <ListItem>Если за три попытки пользователь так и не угадал числа, программа должна вывести на экран текст</ListItem>
               <CodeFragment
                language="python"
                code={`Вы проиграли`}
                showLineNumbers={false}
              ></CodeFragment>
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
