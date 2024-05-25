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
            <Text >
              В прошлом уроке мы пытались склеить строку с числом и у нас ничего
              не вышло, потому что число и строка — это разные типы данных.
            </Text>
            <Text>
              В Питоне есть функции для преобразования из одного типа в другой.
              Например функция str преобразует переданный аргумент в строку.
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
                  Переменной b присвойте результат конкатенации строки "Сумма="
                  и преобразованной в строку переменной a.
                </ListItem>
                <ListItem>
                  Переменная a должна остаться целым числом. Преобразование
                  числа в строку можно сделать с помощью вспомогательной
                  переменной и функции преобразования типа str. Вспомогательную
                  переменную можете назвать как хотите.
                </ListItem>
                <ListItem>Переменную b выведите на экран.</ListItem>
              </UnorderedList>
            </Box>
            
              <PythonCompiler />
              
            <Heading>Из строки в число</Heading>
            <Text>Для преобразования строки в число в Питоне есть функция int. То есть для того, чтобы из строки получить целое число нужно написать</Text>
            <CodeFragment
              language="python"
              code={`a = "123"
b = int(a)`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>Но что, если в строке вместо правильного числа написать что‑то другое?</Text>
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
            <Text>Конечно, Вы вряд ли напишете такой код, потому что понимаете, что "Привет, мир!" никак не может быть преобразован в целое число. Но что, если значение переменной a получено от пользователя при помощи input, а пользователь ввел совсем не число?</Text>
            <Text>Нужно делать проверки в программе и о том, как их делать мы поговорим чуть позже.</Text>
            <Text>А пока Вам придется написать программу без проверок, хлипкую и «падающую» с ошибкой при неправильном вводе пользователя. Ведь сейчас пользователь — это вы сами и уж наверняка не захотите ломать свою программу. Поэтому для получения числа от пользователя пока что можете писать что‑то вроде</Text>
            <CodeFragment
              language="python"
              code={`a = int(input())`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>без проверок и ограничений.</Text>
          
          <Heading>Мини-калькулятор</Heading>
          <Text>В этом уроке надо сделать некое подобие калькулятора. В отличие от настоящего калькулятора, наш будет уметь только складывать и только два числа.</Text>
          <Text>С помощью функции input присвойте переменным a и b значения, введённые пользователем. Программа должна сложить эти две переменные и вывести на экран результат конкатенации строки «Сумма=» и преобразованной в строку сумму переменных a и b.</Text>
          <Text>То есть, если пользователь введет 10 и 3, программа должна вывести</Text>
          <CodeFragment
              language="python"
              code={`Сумма=13`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>На это задание может потребоваться больше времени чем обычно. Не переживайте, если что‑то не получается или вы что‑то забыли. Просмотрите предыдущие уроки, там всё есть.</Text>
            <Text>А еще вы вполне можете использовать в этом задании дополнительные переменные, если конечно это понадобится.</Text>
            
            
              <PythonCompiler />
            

        <Heading>Из строки в дробное число</Heading>
        <Text>Кроме целых чисел, в Python есть и числа дробные. Для преобразования строки в такое дробное число пригодится встроенная функция float</Text>

          <CodeFragment
              language="python"
              code={`a = "4.04"
b = float(a)`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>Разделителем целой и дробной части в строке должна быть точка. Если вместо точки написать запятую</Text>
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
            <Text>Дробная или целая часть числа в строке может отсутствовать, функция float все равно сработает верно
</Text>
<CodeFragment
              language="language"
              code={`print(float(".1"))
print(float("1"))
print(float("1."))`}
              showLineNumbers={false}
            ></CodeFragment>
            <Text>Для закрепления можете переделать калькулятор из предыдущего урока, чтобы он воспринимал не только целые, но и дробные числа. Хотя это и не обязательно для прохождения урока, все же попробуйте это сделать. Чем больше практики — тем лучше.</Text>
            <PythonCompiler/>
          <NavigationButtons
            leftButtonLink="/lessons/strings_conc"
            rightButtonLink="/lessons/Variables_Operations"
          />
          </PythonProvider>
          </ChakraProvider>
        </Box>
        
      </Container>
    </div>
  );
}
