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
  "a > 1 and a < 10",
  "a > 1 and a < 6",
  "a > 1 and a <= 6",
  "a > 1 and a <= 3",
];
const correctAnswers = ["a > 1 and a < 10", "a > 1 and a <= 6"];
const question =
  "Отметьте выражения, которые вернут True (правду), если переменная a равна 6";

export default function App() {
  return (
    <div>
      <Container maxW="container.md">
        <Box p={5}>
          <ChakraProvider theme={MainTheme}>
            <PythonProvider>
              <Heading size={"3xl"}>Оператор pass</Heading>
              <Text>
                Оператор pass — это оператор, который ничего не делает.
              </Text>
              <Text>
                Он может использоваться как заглушка в тех местах программы, где
                это синтаксически необходимо.
              </Text>
              <Text>Например, по правилам Питона, нельзя написать так:</Text>
              <CodeFragment
                language="python"
                code={`foo = input("Введите что-нибудь")
if not foo:
else:
  print(foo)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Такая программа завершится с ошибкой:</Text>

              <CodeFragment
                language="python"
                code={`IndentationError: expected an indented block`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Все потому, что оператор if требует обязательного «тела», то
                есть кода, который будет выполнен при срабатывании if.
              </Text>
              <Text>Используя оператор pass, можно написать так:</Text>
              <CodeFragment
                language="python"
                code={`foo = input("Введите что-нибудь")
if not foo:
  pass
else:
  print(foo)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                То есть, мы пишем по правилам языка, но в то же время ничего не
                делаем при срабатывании if.
              </Text>
              <Text>
                Операторы if, else и elif не все операторы, которые требуют
                обязательного наличия «тела». Позже вы познакомитесь с другими
                такими операторами, a пока просто запомните, что есть такой
                оператор pass, который может оказаться полезным в процессе
                программирования на Питоне.
              </Text>
              <Text>
                Например, сначала вы можете «набросать» скелет программы:
              </Text>
              <CodeFragment
                language="python"
                code={`t = input("Температура тела:")
t = float(t)
if t == 36.6:
  pass 
else:
  print("Вызывайте врача!")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                А уже потом, подумав над тем, что делать, если все в порядке
                дописать:
              </Text>
              <CodeFragment
                language="python"
                code={`t = input("Температура тела:")
t = float(t)
if t == 36.6:
  print("Радуйтесь, что все хорошо!") 
else:
  print("Вызывайте врача!")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Обязательно попробуйте писать последующие программы постепенно.
                То есть, сначала напишите общий скелет, расставьте заглушки, а
                уже потом детализируйте блоки. В процессе написания вы сможете
                без проблем запускать программу в частично готовом состоянии,
                потому что ошибок синтаксиса у вас не будет.
              </Text>
              <Text>
                Конечно, это необязательно, но во многих задачах такой подход
                может помочь.
              </Text>
              <Heading>Сравнение с None </Heading>
              <Text>
                PEP8 рекомендует проверять переменные на равенство или не
                равенство с None с помощью операторов is и is not, а не с
                помощью операторов сравнения.
              </Text>
              <Text>Правильно:</Text>
              <CodeFragment
                language="python"
                code={`if a is None: 
pass  # Какие-то полезные действия
            
if b is not None: 
  pass  # Какие-то полезные действия`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Неправильно:</Text>
              <CodeFragment
                language="python"
                code={`if a == None: 
  pass  # Какие-то беcполезные действия
            
if b != None: 
  pass  # Какие-то беcполезные действия`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Оператор ==, как вы помните, проверяет значения операндов на
                равенство. Оператор is работает немного по‑другому. Он
                проверяет, ссылаются ли операнды на один и тот же участок
                памяти.
              </Text>
              <Text>
                Однако, даже для разных переменных с простыми типами данных
                (числа и строки), оператор is будет возвращать True:
              </Text>
              <CodeFragment
                language="python"
                code={`a = "Hello, world!"
b = "Hello, world!"
print(a is b)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Так получается из‑за того, что Питон кеширует данные, чтобы
                уменьшить расход оперативной памяти.
              </Text>
              <Text>
                Различия == и is мы покажем немного позже, на более сложных
                типах данных. А пока просто держите в голове, что проверять
                значение переменной на None нужно с помощью оператора is, а не
                ==. В остальных же случаях используйте оператор ==.
              </Text>
              <Heading>Условие в одну строку</Heading>
              <Text>
                Если при срабатывании условия нужно выполнить только одну
                операцию, можно записать ее на той же строке, что и условие, без
                отступов
              </Text>
              <CodeFragment
                language="python"
                code={`a = int(input("Введите число"))
if a > 10: print("Число больше 10")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Для elif и else такая запись тоже будет работать</Text>
              <CodeFragment
                language="python"
                code={`a = int(input("Введите число"))
if a > 10: print("Число больше 10")
elif a < 10: print('Число меньше 10')
else: print('Это 10!')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Также можно написать один условный оператор с отступом, а парный
                ему оператор в одну строку, например так
              </Text>
              <CodeFragment
                language="python"
                code={`a = int(input("Введите число"))
if a > 10: print("Число больше 10")
else: 
  print('Число меньше либо равно 10')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Отступ для if, elif или else записанных в одну строку с
                действием делать нельзя. Например, вот такой код не заработает
              </Text>
              <CodeFragment
                language="python"
                code={`a = int(input("Введите число"))
if a > 10: print("Число больше")
  print('10')
else: 
  print('Число меньше либо равно 10')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Такую запись стоит использовать с осторожностью, так как она
                может ухудшить читаемость ваших программ.
              </Text>
              <Heading>Тернарный оператор</Heading>
              <Text>
                В программах часто бывает нужно присваивать переменной разные
                значения в зависимости от каких‑то условий. Обычно выглядит это
                как‑то так
              </Text>
              <CodeFragment
                language="python"
                code={`confirm = input('Введите "да" или "нет"')

if confirm == 'да':
  message = 'Вы согласились'
else:
  message = 'Вы отказались'')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Для того чтобы запись подобных частей программ была более
                лаконичной и красивой, в Python есть специальный тернарный
                оператор. Тернарным (от лат. ternarius — «тройной») он
                называется из‑за наличия трех операндов. Второй операнд этого
                оператора — условие, в зависимости от истинности которого будет
                возвращен либо первый, либо третий операнд.
              </Text>
              <CodeFragment
                language="python"
                code={`confirm = input('Введите "да" или "нет"')
message = 'Вы согласились' if confirm == 'да' else 'Вы отказались'
print(message)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Вторую строку буквально можно воспринимать так: присвоить
                переменной message значение 'Вы согласились' если переменная
                confirm равна 'да', иначе присвоить переменной значение 'Вы
                отказались'.
              </Text>
              <Text>
                Обратите внимание, что двоеточий в тернарном операторе ставить
                не нужно — if и else в этом случае нужно воспринимать как один
                оператор. Такой код, без else, вызовет ошибку
              </Text>
              <CodeFragment
                language="python"
                code={`confirm = input('Введите "да" или "нет"')
message = 'Вы согласились' if confirm == 'да'`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Так как if и else в тернарном операторе — это единое целое, elif
                тоже не заработает и вызовет ошибку.
              </Text>
              <Text>
                Разумеется условия могут быть сложнее, а в качестве значений для
                истинного и ложного условия могут быть целые выражения
              </Text>
              <CodeFragment
                language="python"
                code={`name = input('Введите ваше имя')
age = input('Введите ваш возраст')
message = 'Проходите, ' + name if int(age) >= 18 else 'Вам пока рано, ' + name
print(message)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Попробуйте запустить эти программы и посмотрите, как они
                работают.
              </Text>
              <Text>
                Делать условия и выражения в тернарном операторе слишком
                сложными не стоит. Так можно ухудшить читаемость программы, а
                это нам совсем не нужно.
              </Text>
              <Heading>Вложенные условия</Heading>
              <Text>
                Возможно, вы уже догадались, что условные операторы могут быть
                вложенными и вместо использования оператора and можно сделать
                вот так
              </Text>
              <CodeFragment
                language="python"
                code={`a = int(input("Введите число"))
if a > 10:
  if a < 20:
    print('Это число больше 10, но меньше 20')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Второе условие в этом примере будет проверяться только если
                сработает первое. Пробелов перед функцией вывода текста на экран
                будет уже не четыре, а восемь. То есть четыре пробела
                относительно первого условия.
              </Text>
              <Text>
                Стоит, однако, помнить, что излишняя вложенность ухудшает
                читаемость программы. И, скорее всего, использование and будет
                более правильным
              </Text>
              <CodeFragment
                language="python"
                code={`a = int(input("Введите число"))
if a > 10 and a < 20:
  print('Это число больше 10, но меньше 20')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Возможно, в каких‑то случаях, «выкрутиться» с помощью and не
                получится, и тогда со спокойной душой можно использовать
                вложенные друг в друга условные операторы.
              </Text>
            </PythonProvider>
          </ChakraProvider>
          <NavigationButtons
            leftButtonLink="/lessons/branching_elif"
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
>
<UnorderedList>
  <ListItem>
    Переменной a присвойте результат выражения 55 + 105.
    Переменной b присвойте результат конкатенации строки
    "Сумма=" и преобразованной в строку переменной a.
  </ListItem>
  <ListItem>
    Переменная a должна остаться целым числом. Преобразование
    числа в строку можно сделать с помощью вспомогательной
    переменной и функции преобразования типа str.
    Вспомогательную переменную можете назвать как хотите.
  </ListItem>
  <ListItem>Переменную b выведите на экран.</ListItem>
</UnorderedList>
</Box> */
}
