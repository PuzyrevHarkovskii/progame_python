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
import { NextUIProvider } from "@nextui-org/system";
import Link from "next/link";
import "./globals.css";
import Quiz from "@/components/Quiz";
import CodeFragment from "../components/CodeFragment";
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
              <Link href="/lessons/GetStarted">
                <Heading size="xl">1. Начало</Heading>
              </Link>
            </ListItem>
            <ListItem as="h3" fontSize="xl">
              <Link href="/lessons/Variables-Start">
                {" "}
                <Heading size="xl">2. Переменные</Heading>
              </Link>
              <UnorderedList>
                <ListItem fontSize="lg">
                  <Link href="/lessons/Variables-Start">
                    <Heading size="md" pl="10">
                      Что такое переменная?
                    </Heading>
                  </Link>
                </ListItem>
                <ListItem fontSize="lg">
                  <Link href="/lessons/Variables-Operations">
                    <Heading size="md" pl="10">
                      {" "}
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
              <Heading size="xl">3. Строки</Heading>
            </ListItem>
          </OrderedList>
          <NavigationButtons
            leftButtonLink="/lessons/Variables-Start"
            rightButtonLink="/lessons/Variables-Operations"
          />
          <ColorModeToggle />
        </Box>
      </Container>
    </>
  );
}
