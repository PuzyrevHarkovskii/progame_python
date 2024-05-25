"use client";
import {
  Box,
  Container,
  Heading,
  OrderedList,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useEffect } from "react";
import Link from "next/link";
import "./globals.css";
import NavigationButtons from "@/components/ui/NavigationButtons";
import ColorModeToggle from "@/components/ui/darkTheme";

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
          <Heading mb="0.5em" mt="1em" size="3xl" textAlign={"left"}>
            Учебник Python
          </Heading>
          <OrderedList>
            <ListItem as="h3" fontSize="xl">
              <Link href="/lessons/get_started">
                <Heading size="xl">1. Начало</Heading>
              </Link>
            </ListItem>
            <ListItem as="h3" fontSize="xl">
              <Link href="/lessons/variables_start">
                <Heading size="xl">2. Переменные</Heading>
              </Link>
              <UnorderedList>
                <ListItem fontSize="lg">
                  <Link href="/lessons/variables_start">
                    <Heading size="md" pl="10">
                      Что такое переменная
                    </Heading>
                  </Link>
                </ListItem>
                <ListItem fontSize="lg">
                  <Link href="/lessons/variables_operations">
                    <Heading size="md" pl="10">
                      Операции над переменными
                    </Heading>
                  </Link>
                </ListItem>
                <ListItem fontSize="lg">
                  <Link href="/lessons/PEP8">
                    <Heading size="md" pl="10">
                      Что такое PEP8?
                    </Heading>
                  </Link>
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem as="h3" fontSize="xl">
              <Heading size="xl">
                <Link href="/lessons/strings_start">3. Строки</Link>
              </Heading>
              <UnorderedList>
                <ListItem fontSize="lg">
                  <Link href="/lessons/strings_start">
                    <Heading size="md" pl="10">
                      Что такое строки
                    </Heading>
                  </Link>
                </ListItem>
                <ListItem fontSize="lg">
                  <Link  href="/lessons/strings_conc">
                    <Heading size="md" pl="10">
                      Переносы, специальные символы, конкатенация
                    </Heading>
                  </Link>
                </ListItem>
              </UnorderedList>
            </ListItem>
          </OrderedList>
          <NavigationButtons
            leftButtonLink="/lessons/variables_start" 
            rightButtonLink="/lessons/variables_operations"
          />
          <ColorModeToggle />
        </Box>
      </Container>
    </>
  );
}
