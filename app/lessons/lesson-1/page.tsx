'use client'
import { Container, Box, Heading, Text, Code } from '@chakra-ui/react';
import { PythonProvider } from 'react-py';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import Codeblock3 from '@/components/PythonCell-3';


export default function FirstSteps() {
  return (
    <div>
      <Container maxW="container.lg">
        <Box p={5}>
      <Heading my='1em' size='3xl' textAlign={'center'}>
      Сразу к делу!
      </Heading>
      
      <Text>Лучший способ понять, как работает то, что вы изучаете — это практика. И у нас уже все готово для того, чтобы вы попрактиковались и написали свою первую программу.</Text>
      <Text>Любая программа на языке Python — это просто текст, который описывает то, что компьютер должен сделать. Этот текст называется исходным кодом. Он похож на обычный человеческий язык, но только с более строгими правилами.</Text>
      <Text>Изучение языка программирования принято начинать с написания программы, которая выводит на экран фразу «Привет, мир!». Мы будем придерживаться этой традиции.</Text>
        </Box>
        <Heading my='1em' size='xl' textAlign={'center'}>Редактор кода</Heading>
      <Text>Наберите следующий текст в редакторе ниже. </Text>

      <PythonProvider>
    <Codeblock3/>
    </PythonProvider>
    <Text>Обратите внимание на следующие моменты:</Text>
    <UnorderedList>
  <ListItem>Слово print должно быть написано строчными буквами. Python чувствителен к регистру, поэтому Printи print для него разные слова;</ListItem>
  <ListItem>Кавычки должны быть такими же, как в примере. Кавычки-елочки «» или кавычки-лапки “” вызовут ошибку;</ListItem>
  <Heading my='1em' size='xl' textAlign={'center'}>Запуск программы</Heading>
  <Text>Нажмите на кнопку, чтобы запустить программу. Внизу, в поле результатов, вы увидите текст:</Text>
</UnorderedList>
<Code>Привет, мир!</Code>
<Text>Если все так и есть, поздравляю! Вы только что написали свою первую программу на Python.</Text>
      </Container>
    </div>
  );
}