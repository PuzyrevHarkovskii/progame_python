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
              <Heading size={"3xl"} textAlign={"center"}>
                Операторы elif и логические операторы
              </Heading>
              <Heading>Оператор elif</Heading>
              <Text>
                elif — еще один оператор для использования в связке с if.
                Работает он почти как else, но для срабатывания ему надо
                передать дополнительное условие.
              </Text>
              <CodeFragment
                language="python"
                code={`a = int(input("Введите число"))
if a > 10:
    print("Больше десяти")
elif a == 10:
    print("Это десять")
else:
    print("Меньше десяти")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                То есть вы как бы указываете Питону: если a больше 10, делай
                то‑то, иначе если a равно 10, делай что‑то другое, иначе — делай
                что‑то еще.
              </Text>
              <Text>
                Операторов elif в связке с одним if может быть столько, сколько
                вам надо
              </Text>
              <CodeFragment
                language="python"
                code={`a = int(input("Введите число"))
if a > 10:
    print("Больше 10")
elif a == 10:
    print("Равно 10")
elif a == 0:
    print("Равно 0")
else:
    print("Меньше 10")`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Естественно, строки программы, относящиеся к elif должны быть с
                отступами в 4 пробела, а после условия нужно ставить двоеточие.
              </Text>
              <Heading>Программа с elif</Heading>
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
                    Напишите программу, которая в переменную number записывает
                    число, введённое пользователем.
                  </ListItem>
                  <ListItem>
                    Если число больше 0, программа должна вывести на экран +,
                    если число меньше 0, программа должна вывести на экран -, а
                    если число равно 0, программа должна вывести 0,
                  </ListItem>
                  <ListItem>
                    Для проверки используйте операторы if, else и elif
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />
              <Heading>Сложные логические выражения</Heading>
              <Text>
                Вы уже знаете, что в Питоне есть различные типы данных — это,
                например, строки, целые числа и числа с запятой. Также
                переменной можно присвоить и результат сравнения
              </Text>
              <CodeFragment
                language="python"
                code={`test = 10 > 5`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                В этом случае переменная test будет логического (булевого) типа.
                Такие переменные могут иметь только два значения — True(правда)
                и False(ложь).
              </Text>
              <Text>
                Выражения типа a {">"} 10 — простое логическое выражение, так
                как выполняется только одна логическая операция. Но на практике
                может понадобиться получить ответ «Правда» или «Ложь» в
                зависимости от результата двух или больше простых выражений.
              </Text>
              <Text>
                Например, «переменная b больше 30 или меньше 10» или «переменная
                a больше 12 и меньше 20». В таких случаях используют операторы,
                объединяющие два или больше простых логических выражения —
                логическое И and и логическое ИЛИ or.
              </Text>
              <Text>
                Правила, по которым or и and возвращают результат довольно
                просты. И о них вы узнаете в следующем уроке.
              </Text>
              <Heading>Логическое И</Heading>
              <Text>
                Оператор and возвращает True (правду) только тогда, когда оба
                операнда равны True.
              </Text>
              <Text>Например эта программа</Text>
              <CodeFragment
                language="python"
                code={`a = 10
print(a > 1 and a < 20)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет на экран</Text>
              <CodeFragment
                language="python"
                code={`True`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>А эта</Text>
              <CodeFragment
                language="python"
                code={`a = 10
print(a > 1 and a < 10)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет</Text>
              <CodeFragment
                language="python"
                code={`False`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Порядок операндов для and важен. Первым проверяется левый
                операнд и только в том случае, если он истинный, будет проверен
                правый операнд. Ведь если левый операнд ложный то и весь
                результат будет ложным, то есть правый операнд проверять нет
                никакой необходимости.
              </Text>
              <Text>Попробуйте запустить вот такой код</Text>
              <CodeFragment
                language="python"
                code={`a = 1
if a > 1 and b == 2:
print('Хорошо')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Использование переменной b не вызовет ошибки, потому что до
                проверки правого операнда дело даже не дойдет.
              </Text>
              <Text>А вот такой код</Text>
              <CodeFragment
                language="python"
                code={`a = 1
if a > 0 and b == 2:
print('Хорошо')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                закончится с ошибкой, потому что левый операнд истинный и Питон
                попытается проверить правый операнд.
              </Text>
              <Quiz
                question={question}
                options={options}
                correctAnswers={correctAnswers}
              />
              <Heading>Логическое ИЛИ</Heading>
              <Text>
                Оператор or возвращает True (правду) тогда, когда хотя бы один
                из операндов равен True.
              </Text>
              <Text>Вот эта программа</Text>
              <CodeFragment
                language="python"
                code={`b = 5
print(b > 1 or b < 3)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет на экран</Text>
              <CodeFragment
                language="python"
                code={`True`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>А эта</Text>
              <CodeFragment
                language="python"
                code={`b = 5
print(b > 10 or b < 5)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>выведет на экран</Text>
              <CodeFragment
                language="python"
                code={`False`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Если оба операнда равны True результатом также будет True
              </Text>
              <Text>
                Как и в случае с and, порядок операндов для оператора or важен,
                но условия для проверки правого операнда отличаются.
              </Text>
              <Text>
                Первым проверяется левый операнд и только в том случае, если он
                ложный, будет проверен правый операнд. Ведь если левый операнд
                истинный то и весь результат будет истинным, то есть правый
                операнд проверять нет никакой необходимости.
              </Text>
              <Text>
                Этот код не вызовет ошибок, потому что до проверки правого
                операнда дело даже не дойдет.
              </Text>
              <CodeFragment
                language="python"
                code={`a = 1
if a > 0 or b == 2:
print('Хорошо')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>А вот такой код</Text>
              <CodeFragment
                language="python"
                code={`a = 1
if a != 1 or b == 2:
print('Хорошо')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                закончится с ошибкой, потому что левый операнд ложный и Питон
                попытается проверить правый операнд.
              </Text>
              <Heading>Программа с логическими операторами</Heading>
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
                    Напишите программу, которая описывает одним словом
                    температуру, введённую пользователем. Программа должна
                    сохранить введённую температуру в переменную t в виде целого
                    числа.
                  </ListItem>
                  <ListItem>
                    Если число меньше −4, программа должна вывести «морозно».
                  </ListItem>
                  <ListItem>
                    Если число меньше 0 и больше либо равно −4, программа должна
                    вывести на экран «холодно».
                  </ListItem>
                  <ListItem>
                    Если число больше либо равно 0 и меньше 12 — «прохладно».
                  </ListItem>
                  <ListItem>
                    Если больше либо равно 12 и меньше 27 — «тепло».
                  </ListItem>
                  <ListItem>Если больше либо равно 27 — «жарко».</ListItem>
                  <ListItem>
                    При написании программы используйте операторы if, elif,
                    else, and и также операторы сравнения.
                  </ListItem>
                </UnorderedList>
              </Box>
              <PythonCompiler />

              <Heading>Логическое представление данных</Heading>
              <Text>
                К строкам и числам также могут быть применены понятия истина и
                ложь. Истиной Питон считает любое число, за исключением нуля. То
                есть 0 — это ложь, а любое другое число — истина.
              </Text>
              <Text>
                Со строками немного другая история. Любую строку, в которой есть
                хотя бы один символ, Питон считает истиной. А вот пустая строка
                для него будет ложью.
              </Text>
              <Text>
                Попробуйте выполнить вот такой код, изменяя значения переменных
                a и z
              </Text>
              <CodeFragment
                language="python"
                code={`a = 0
if a != 0:
    print('Хорошо')

z = ''
if z != '':
    print('Неплохо')

if z != '' and a != 0:
    print('Очень хорошо  :-)')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                После попробуйте выполнить вот этот код, также изменяя
                переменные
              </Text>
              <CodeFragment
                language="python"
                code={`a = 0
if a:
    print('Хорошо')

z = ''
if z:
    print('Неплохо')

if z and a:
    print('Очень хорошо  :-)')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Первый и второй вариант работают совершенно одинаково, но второй
                читается лучше и выглядит аккуратнее.
              </Text>
              <Heading>Логическое отрицание</Heading>
              <Text>Логическое отрицание</Text>
              <Text>Например, эта программа выведет на экран True</Text>

              <CodeFragment
                language="python"
                code={`a = 10
print(a == 10)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Если же перед условием поставить оператор not — на экран будет
                выведено False
              </Text>
              <CodeFragment
                language="python"
                code={`a = 10
print(not a == 10)`}
                showLineNumbers={false}
              ></CodeFragment>

              <Text>
                Кстати, точно такой же результат мы получим, если напишем
                условие немного по‑другому — без оператора not
              </Text>
              <CodeFragment
                language="python"
                code={`a = 10
print(a != 10)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Разумеется, оператор not можно использовать и со сложными
                логическими выражениями. Например, эта программа выведет на
                экран False, отрицая истинное выражение внутри скобок.
              </Text>
              <CodeFragment
                language="python"
                code={`a = 10
print(not (a > 1 and a < 20))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Эту программу тоже можно переписать по‑другому</Text>
              <CodeFragment
                language="python"
                code={`a = 10
print(a <= 1 or a >= 20)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                А вот так, используя логическое представление строк и оператор
                not, можно сделать проверку пользовательского ввода
              </Text>
              <CodeFragment
                language="python"
                code={`anything = input("Напишите что-нибудь")
if not anything:
    print('Так нельзя. Надо что-нибудь написать!')`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Если пользователь ничего не введет, переменная anything будет
                пустой строкой и Питон будет считать ее ложью. Применив оператор
                not, мы превратим ложь в истину и условный оператор if
                сработает.
              </Text>
              <Heading>Приоритеты логических операторов</Heading>
              <Text>
                Как и у арифметических, у логических операторов есть свой
                приоритет в выполнении. Самый высокий приоритет у скобок. После
                идут операторы сравнения, за ними оператор not, оператор and и
                оператор or.
              </Text>
              <Text>Если запустить такой код</Text>
              <CodeFragment
                language="python"
                code={`x = 0
y = 2
                
result = x > 1 and x == 10 or y < 5
print(result) 
                
                result = x > 1 and (x == 10 or y < 5)
print(result)
                `}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                то в первом выражении сначала будет вычислен результат работы
                оператора сравнения {`>`} и так как этот результат будет ложным,
                то и результат работы оператора and будет ложным. Этот ложный
                результат станет левым операндом для оператора or. После будет
                вычислен результат работы оператора сравнения {"<"}. Получается,
                что левый операнд для оператора or — ложь, а правый — истина. В
                итоге результатом всего выражения будет истина.
              </Text>
              <Text>
                Во втором варианте, с помощью скобок, мы изменили приоритеты
                выполнения. Поэтому сначала будут выполнены операции сравнения и
                or, а результат выражения в скобках станет правым операндом для
                and. Все выражение целиком будет ложным.
              </Text>

              <Heading>Оператор pass</Heading>
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
else: print('Это 10!')
                `}
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
    print('Число меньше либо равно 10')')
                `}
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
    print('Число меньше либо равно 10')
                
                `}
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
    message = 'Вы отказались'')
                `}
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
                print(message)
                `}
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
                message = 'Вы согласились' if confirm == 'да'
                `}
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
            leftButtonLink="/lessons/branching"
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
