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
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const correctAnswers = ["Option 1", "Option 3"];
  const question = "Какой самый большой океан на Земле?";
  return (
    <>
      <Container maxW="container.md">
        <Box p={5}>
          <Heading mb="0.5em" mt="1em" size="xl" textAlign={"left"}>
            Учебник Python
          </Heading>
          <OrderedList>
            <ListItem>
              <Link target="_blank" href="/lessons/GetStarted">
                Начало
              </Link>
            </ListItem>
            <ListItem>
              {" "}
              Переменные
              <UnorderedList>
                <ListItem>
                  <Link target="_blank" href="/lessons/Variables-Start">
                    Что такое переменная?
                  </Link>
                </ListItem>
                <ListItem>
                  <Link target="_blank" href="/lessons/Variables-Operations">
                    Операции над переменными
                  </Link>
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
          </OrderedList>
          <NavigationButtons
            
            leftButtonLink="/lessons/Variables-Start"
           
            rightButtonLink="/lessons/Variables-Operations"
          />
        </Box>
      </Container>
    </>
  );
}
