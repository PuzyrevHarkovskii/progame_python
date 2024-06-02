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

const options = ["Ошибку", "24", "1410", "Приветствие"];
const correctAnswers = ["1410"];
const question = "Что выведет на экран эта программа?";

export default function StringsNum() {
  return (
    <div>
      <Container maxW="container.md">
        <Box p={5}>
          <ChakraProvider theme={MainTheme}>
            <PythonProvider>
              <Heading size={"3xl"} textAlign={"center"}>
                Из числа в строку
              </Heading>
              <Text>
                В прошлом уроке мы пытались склеить строку с числом и у нас
                ничего не вышло, потому что число и строка — это разные типы
                данных.
              </Text>
              <Text>
                В Питоне есть функции для преобразования из одного типа в
                другой. Например функция str преобразует переданный аргумент в
                строку.
              </Text>
              <Text>
                То есть, если переписать программу из прошлого урока, она
                заработает без ошибок
              </Text>
              <CodeFragment
                language="python"
                code={`result = 55 + 125
result = str(result)
print("Результат=" + result)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Второй строкой мы присваиваем переменной result новое значение,
                которое возвращает функция str. То есть str как бы превращает
                число в строку.
              </Text>
              <Text>
                Возможно, вы могли подумать что есть решение проще — обернуть
                числа в кавычки
              </Text>
              <CodeFragment
                language="python"
                code={`result = "55" + "125"
print("Результат=" + result)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Эта программа выполнится без ошибок — но и результат будет
                неверным
              </Text>
              <CodeFragment
                language="python"
                code={`Результат=55125`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                потому что Питон склеит 55 и 125 по правилам строк, а не по
                правилам чисел.
              </Text>

              <Quiz
                question={question}
                options={options}
                correctAnswers={correctAnswers}
              />
              <CodeFragment
                language="python"
                code={`a = "14"
b = "10"
print(a + b)`}
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
              </Box>

              <PythonCompiler />

              <Heading>Из строки в число</Heading>
              <Text>
                Для преобразования строки в число в Питоне есть функция int. То
                есть для того, чтобы из строки получить целое число нужно
                написать
              </Text>
              <CodeFragment
                language="python"
                code={`a = "123"
b = int(a)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Но что, если в строке вместо правильного числа написать что‑то
                другое?
              </Text>
              <CodeFragment
                language="python"
                code={`a = "Привет, мир!"
b = int(a)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>Питон выдаст примерно такую ошибку</Text>
              <CodeFragment
                language="language"
                code={`Traceback (most recent call last):
module __main__ line 2
b = int(a)
ValueError: invalid literal for int() with base 10: 'Привет, мир!'`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Конечно, Вы вряд ли напишете такой код, потому что понимаете,
                что "Привет, мир!" никак не может быть преобразован в целое
                число. Но что, если значение переменной a получено от
                пользователя при помощи input, а пользователь ввел совсем не
                число?
              </Text>
              <Text>
                Нужно делать проверки в программе и о том, как их делать мы
                поговорим чуть позже.
              </Text>
              <Text>
                А пока Вам придется написать программу без проверок, хлипкую и
                «падающую» с ошибкой при неправильном вводе пользователя. Ведь
                сейчас пользователь — это вы сами и уж наверняка не захотите
                ломать свою программу. Поэтому для получения числа от
                пользователя пока что можете писать что‑то вроде
              </Text>
              <CodeFragment
                language="python"
                code={`a = int(input())`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>без проверок и ограничений.</Text>

              <Heading>Мини-калькулятор</Heading>
              <Text>
                В этом уроке надо сделать некое подобие калькулятора. В отличие
                от настоящего калькулятора, наш будет уметь только складывать и
                только два числа.
              </Text>
              <Text>
                С помощью функции <Code>input</Code> присвойте переменным <Code>a</Code> и <Code>b</Code> значения,
                введённые пользователем. Программа должна сложить эти две
                переменные и вывести на экран результат конкатенации строки
                «Сумма=» и преобразованной в строку сумму переменных a и b.
              </Text>
              <Text>
                То есть, если пользователь введет <Code>10</Code> и <Code>3</Code>, программа должна
                вывести
              </Text>
              <CodeFragment
                language="python"
                code={`Сумма=13`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                На это задание может потребоваться больше времени чем обычно. Не
                переживайте, если что‑то не получается или вы что‑то забыли.
                Просмотрите предыдущие уроки, там всё есть.
              </Text>
              <Text>
                А еще вы вполне можете использовать в этом задании
                дополнительные переменные, если конечно это понадобится.
              </Text>

              <PythonCompiler />

              <Heading>Из строки в дробное число</Heading>
              <Text>
                Кроме целых чисел, в Python есть и числа дробные. Для
                преобразования строки в такое дробное число пригодится
                встроенная функция float
              </Text>

              <CodeFragment
                language="python"
                code={`a = "4.04"
b = float(a)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Разделителем целой и дробной части в строке должна быть точка.
                Если вместо точки написать запятую
              </Text>
              <CodeFragment
                language="python"
                code={`a = '4,04'
b = float(a)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>или же попробовать преобразовать совсем не число</Text>
              <CodeFragment
                language="python"
                code={`string = 'Просто какая-то строка'
c = float(string)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>программа завершится с ошибкой</Text>
              <CodeFragment
                language="language"
                code={`Traceback (most recent call last):
module float.py line 2
ValueError: Could not convert to float()`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Дробная или целая часть числа в строке может отсутствовать,
                функция float все равно сработает верно
              </Text>
              <CodeFragment
                language="python"
                code={`print(float(".1"))
print(float("1"))
print(float("1."))`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Для закрепления можете переделать калькулятор из предыдущего
                урока, чтобы он воспринимал не только целые, но и дробные числа.
                Хотя это и не обязательно для прохождения урока, все же
                попробуйте это сделать. Чем больше практики — тем лучше.
              </Text>
              <PythonCompiler />
              <Heading>Что такое None?</Heading>
              <Text>
                В одном из прошлых уроков мы говорили, что функция print ничего
                не возвращает. Но что, если попробовать сделать так:
              </Text>
              <CodeFragment
                language="python"
                code={`result = print('Что вернет функция print?')
print(result)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Первой строкой эта программа выведет текст Что вернет функция
                print?, а второй — слово None.
              </Text>
              <Text>
                Специально для обозначения «ничего» в Питоне есть отдельный тип
                данных NoneType. Переменные этого типа могут иметь только одно
                значение — None. None — это «никакое» или «неопределенное»
                значение. В программе выше переменная result как раз и будет
                иметь значение None. Это одно из ключевых слов языка и, если вы
                хотите присвоить None переменной, его надо писать как есть, без
                кавычек:
              </Text>
              <CodeFragment
                language="python"
                code={`z = None`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                В ближайшее время использовать этот тип данных вы скорее всего
                не будете. Просто держите в голове, что для обозначения ничего
                есть свой тип данных и не пугайтесь, если вдруг где‑то увидите
                слово None.
              </Text>
              <Heading>Комментарии </Heading>
              <Text>
                Комментарии в исходном коде — это то, что язык программирования
                пропускает мимо себя. То есть, если Вы напишете комментарий в
                программе, Питон как бы не увидит этого.
              </Text>
              <Text>
                Комментарии нужны для того, чтобы делать записи в исходном коде.
                Например, почему какая‑то часть программы написана именно так
                или зачем используется именно такая переменная. Это полезно,
                когда в вашей программе не две или три строки, а сотни и тысячи
                строк. То есть комментарии нужны для того, чтобы не запутаться в
                своей же программе или дать подсказки другим программистам.
              </Text>
              <Text>
                Комментарии в Питоне начинаются с символа решётки # — и
                продолжаются до конца строки. Комментарии могут находиться как в
                начале строки, так и следовать за кодом — но не содержаться
                внутри строки. Символ решётки в строке остаётся лишь символом
                решётки
              </Text>
              <CodeFragment
                language="python"
                code={`# Первый комментарий
a = 1 # Это второй комментарий
# и еще один комментарий
string = "# А это не комментарий."`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Еще с помощью комментариев можно временно отключать или включать
                какой‑либо код:
              </Text>
              <CodeFragment
                language="python"
                code={`a = 13
#print(a)`}
                showLineNumbers={false}
              ></CodeFragment>
              <Text>
                Здесь, например, «закомментирован» вывод переменной a на экран.
                В любой момент его можно «раскомментировать», убрав символ
                решетки.
              </Text>
              <NavigationButtons
                leftButtonLink="/lessons/strings_conc"
                rightButtonLink="/lessons/branching"
              />
            </PythonProvider>
          </ChakraProvider>
        </Box>
      </Container>
    </div>
  );
}
