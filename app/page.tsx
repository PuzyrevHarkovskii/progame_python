"use client";
import {
  Box,
  Container,
  Heading,
  OrderedList,
  ListItem,
  UnorderedList,
  ChakraProvider,
} from "@chakra-ui/react";
import { useEffect } from "react";
import Link from "next/link";
import "./globals.css";
import MainTheme from "@/components/MainTheme";
export default function Home() {
  useEffect(() => {
    navigator.serviceWorker
      .register("/react-py-sw.js")
      .then((registration) =>
        console.log(
          "Service Worker registration successful with scope: ",
          registration.scope
        )
      )
      .catch((err) => console.log("Service Worker registration failed: ", err));
  }, []);

  return (
    <>
      <Container maxW="container.md">
        <Box p={5}>
          <ChakraProvider theme={MainTheme}>
            <Heading mb="0.5em" mt="1em" size="3xl" textAlign={"left"}>
              Учебник Python
            </Heading>

            <Link href="/lessons/get_started">
              <Heading size="xl">1. Начало</Heading>
            </Link>

            <Link href="/lessons/variables_start">
              <Heading size="xl">2. Переменные</Heading>
            </Link>

            <Link href="/lessons/variables_start">
              <Heading size="md" pl="10">
                Что такое переменная
              </Heading>
            </Link>

            <Link href="/lessons/variables_operations">
              <Heading size="md" pl="10">
                Операции над переменными
              </Heading>
            </Link>

            <Link href="/lessons/PEP8">
              <Heading size="md" pl="10">
                Что такое PEP8?
              </Heading>
            </Link>

            <Heading size="xl">
              <Link href="/lessons/strings_start">3. Строки</Link>
            </Heading>

            <Link href="/lessons/strings_start">
              <Heading size="md" pl="10">
                Что такое строки
              </Heading>
            </Link>

            <Link href="/lessons/strings_conc">
              <Heading size="md" pl="10">
                Переносы, специальные символы, конкатенация
              </Heading>
            </Link>

            <Link href="/lessons/branching">
              <Heading size="xl">4. Ветвление</Heading>
            </Link>

            <Link href="/lessons/branching">
              <Heading size="md" pl="10">
                Условные операторы if, else
              </Heading>
            </Link>

            <Link href="/lessons/branching_elif">
              <Heading size="md" pl="10">
                Операторы elif, логические операторы
              </Heading>
            </Link>

            <Link href="/lessons/branching_pass">
              <Heading size="md" pl="10">
                Pass, сравнение с None, тернарный оператор
              </Heading>
            </Link>

            <Link href="/lessons/adv_strings">
              <Heading size="xl">5. Продвинутые строки</Heading>
            </Link>
            <Link href="/lessons/adv_strings_index">
              <Heading size="md" pl="10">
                Методы строк, регистр, длина строки
              </Heading>
            </Link>
            <Link href="/lessons/adv_strings_index">
              <Heading size="md" pl="10">
                Индексы строки, срезы строк и оператор in
              </Heading>
            </Link>
            <Link href="/lessons/adv_strings_format">
              <Heading size="md" pl="10">
                Форматирование строк
              </Heading>
            </Link>
            <Link href="/lessons/while">
              <Heading size="xl">6. Циклы, while</Heading>
            </Link>
            <Link href="/lessons/lists">
              <Heading size="xl">7. Списки, кортежи, цикл for</Heading>
            </Link>
            <Link href="/lessons/list_for">
              <Heading size="md" pl="10">
                Цикл for
              </Heading>
            </Link>
            <Link href="/lessons/list_for">
              <Heading size="md" pl="10">
                Range
              </Heading>
            </Link>
            <Link href="/lessons/list_for">
              <Heading size="md" pl="10">
                Tuple
              </Heading>
            </Link>
            <Link href="/lessons/lists">
              <Heading size="xl">8. Функции</Heading>
            </Link>
            <Link href="/lessons/lists">
              <Heading size="xl">9. ООП</Heading>
            </Link>
          </ChakraProvider>
        </Box>
      </Container>
    </>
  );
}
