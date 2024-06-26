"use client";
import { Container, Box, Heading, Text, Code, ChakraProvider } from "@chakra-ui/react";
import { PythonProvider } from "react-py";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { List, ListItem, UnorderedList, Image } from "@chakra-ui/react";
import PythonCompiler from "@/components/PythonCompiler";
import CodeFragment from "@/components/CodeFragment";
import Link from "next/link";
import MainTheme from "@/components/MainTheme";
export default function FirstSteps() {
  return (
    <div>
      <ChakraProvider theme={MainTheme}>
      <Container maxW="container.md">
        <Box p={5}>
        <PythonProvider>
          <Heading mb="0.5em" mt="1em" size="3xl" textAlign={"center"}>
            Сразу к делу!
          </Heading>
          <Text py={2} >
            Лучший способ понять, как работает то, что вы изучаете — это
            практика. И у нас уже все готово для того, чтобы вы попрактиковались
            и написали свою первую программу.
          </Text>
          <Text py={2}>
            Любая программа на языке Python — это просто текст, который
            описывает то, что компьютер должен сделать. Этот текст называется
            исходным кодом. Он похож на обычный человеческий язык, но только с
            более строгими правилами.
          </Text>
          <Text py={2}>
            Изучение языка программирования принято начинать с написания
            программы, которая выводит на экран фразу «Привет, мир!». Мы будем
            придерживаться этой традиции.
          </Text>

          <Heading mb="0.5em" mt="1em" size="xl" textAlign={"left"}>
            Редактор кода
          </Heading>
          <Text py={2}>Наберите следующий текст в редакторе ниже. </Text>
          <CodeFragment
            code={`print("Привет, мир!")`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text py={2}>Обратите внимание на следующие моменты:</Text>

          <UnorderedList spacing={3}>
            <ListItem>
              {" "}
              Слово <Code>print</Code> должно быть написано строчными буквами.
              Python чувствителен к регистру, поэтому <Code>Print</Code> и{" "}
              <Code>print</Code> для него разные слова;
            </ListItem>
            <ListItem>
              Кавычки должны быть такими же, как в примере. Кавычки-елочки{" "}
              <Code> «» </Code>
              или кавычки-лапки <Code>“”</Code> вызовут ошибку;
            </ListItem>
          </UnorderedList>
          
            <PythonCompiler />
          
          <Heading mb="0.5em" mt="1em" size="xl" textAlign={"left"}>
            Запуск программы
          </Heading>
          <Text py={2}>
            Нажмите на кнопку "Запуск кода", чтобы запустить программу. Снизу, в
            поле результатов, вы увидите текст:
          </Text>
          <CodeFragment
            code={`Привет, мир!`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text mb={5} py={2}>
            Если все так и есть, поздравляю! Вы только что написали свою первую
            программу на Python!
          </Text>

          <Heading mb="0.5em" mt="1em" size="xl" textAlign={"left"}>
            Ошибки
          </Heading>
          <Text py={2}>
            Итак вы создали свою первую программу на Python: слово print,
            открывающая скобка, кавычка, приветствие, еще одна кавычка и скобка.
            Код был написан по правилам Python и поэтому все сработало, как
            надо. Эти правила называются синтаксисом и если нарушить их,
            программа не заработает.
          </Text>
          <Image src="/images/pythonhelloworld.png"></Image>
          <Text py={2}>
            Теперь мы сделаем ошибку специально и посмотрим на реакцию Python.
            Удалите одну из кавычек или скобок, а затем запустите программу.
            Если, например, вы удалили скобку в конце, ошибка будет такой:
          </Text>
          <CodeFragment
            code={`File "code", line 1
            print("Привет, мир!"
                 ^
        SyntaxError: '(' was never closed`}
            language={"language"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text py={2}>
            Здесь вы можете увидеть имя файла, номер строки, где возникла ошибка
            и её описание.
          </Text>
          <Text py={2}>
            Программирование — штука сложная и без ошибок не обойтись. Каждый
            программист, опытный или начинающий, сталкивается с ними ежедневно.
            Поэтому не стоит расстраиваться, если ваша программа не заработала с
            первого раза. Главное — не сдаваться.
          </Text>
          <Heading mb="0.5em" mt="1em" size="xl" textAlign={"left"}>
            Попробуйте сделать ошибку
          </Heading>
          <Text py={2}>
            Cделайте в программе хотя бы одну ошибку и нажмите кнопку запуска.
            Изучите сообщение об ошибке.
          </Text>

          
            <PythonCompiler />
         

          <Heading mb="0.5em" mt="1em" size="xl" textAlign={"left"}>
            Коротко о{" "}
            <Text as="span" color="blue.500">
              Python
            </Text>
          </Heading>
          <Text py={2}>
            Python — это язык программирования общего назначения. Это значит,
            что он может использоваться для решения самых разных задач. И это
            действительно так не только в теории, но и на практике. Python
            буквально вездесущ и его применение можно найти практически в любой
            отрасли: наука, игры, веб-сайты, искусственный интеллект и анализ
            данных и многое другое. Неудивительно, что в 2021 году Python стал
            самым популярным языком программирования. Кстати, автор языка, Гвидо
            ван Россум, назвал его не из‑за большой любви к змеям, а в честь
            комедийного шоу «Летающий цирк Монти Пайтона».
          </Text>
          {/* <Image
            py={"5"}
            rounded={'lg'}
            src={`/Images/monty_python.gif`}
          ></Image> */}
          <Text>
            Синтаксис Python легко освоить даже новичкам. Начать программировать
            на Python просто, но это не означает, что вы не сможете создавать
            потрясающие программы, решающие сложные задачи. Миллионы людей
            используют Python в реальных и интересных проектах.
          </Text>
          <Text py={2}>
            Несмотря на огромную мощь, начать программировать на Python довольно
            просто. Вам понадобится только редактор кода и интерпретатор Python.
            Редактор кода - это место, где вы пишете код. Вашу первую программу
            вы написали встроенным в Pyteezy редакторе. Интерпретатор Python -
            это программа, которая выполняет программы, написанные на Python (то
            есть он считывает текст вашей программы и выполняет все необходимые
            действия). Я думаю, вы уже поняли, что интерпретатор Python также
            встроен в Pyteezy, и вы можете запускать программы без установки
            дополнительного программного обеспечения.
          </Text>
          </PythonProvider>
        </Box>
      </Container>
      </ChakraProvider>
    </div>
  );
}
