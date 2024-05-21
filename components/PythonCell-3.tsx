"use client";
import { useState, useEffect, useCallback } from "react";
import { usePython } from "react-py";
import CodeMirror from "@uiw/react-codemirror";
import { placeholder } from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { FaPlay } from "react-icons/fa";
import { EditorState } from "@uiw/react-codemirror";
import { EditorView } from "@uiw/react-codemirror";
import { Container, Box, Heading, Text, Code } from "@chakra-ui/react";
import { basicSetup } from "@uiw/react-codemirror";
import {
  Flex,
  Button,
  Input,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

function PythonCompiler() {
  const [input, setInput] = useState(" ");
  const startState = EditorState.create({
    doc: 'Hello World',
    extensions: [placeholder('placeholder text')]
  })  
  
  
  useEffect(() => {
    navigator.serviceWorker
      .register("/react-py-sw.js")
      .then((registration) =>
        console.log(
          "Service Worker registration прошла успешно: ",
          registration.scope
        )
      )
      .catch((err) =>
        console.log("Service Worker registration не удалась: ", err)
      );
  }, []);

  // Use the usePython hook to run code and access both stdout and stderr
  const {
    runPython,
    stdout,
    stderr,
    isLoading,
    isRunning,
    isAwaitingInput,
    sendInput,
  } = usePython();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    runPython(input);
  };

  const handleEditorChange = useCallback((val: string, viewUpdate: any) => {
    console.log("val:", val);
    setInput(val);
  }, []);

  return (
    <>
      <Flex justify="center"  pt={5} pb={1}>
        <div className="relative color-red mb-10 flex flex-col">
          <form onSubmit={handleSubmit}>
            <div className="p-4 sm:min-w-[30em] md:min-w-[40em] bg-gray-800 rounded-md shadow-lg shadow-gray-700/50 width-100%">
              <CodeMirror
                value={input}
                height="100%"
                width="100%"
                extensions={[python()]}
                onChange={handleEditorChange}
                theme={dracula}
                style={{ fontSize: "1.4em" }}
                placeholder="Code goes here..."
              />
            </div>

            <input
              type="submit"
              value={!isRunning ? "Запуск кода" : "В процессе..."}
              disabled={isLoading || isRunning}
              className={`px-4 my-3 py-2 rounded-md text-white font-semibold 
    ${
      isLoading || isRunning
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
    }
  `}
            />
          </form>

          {isAwaitingInput && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const inputElement = form.elements.namedItem(
                  "input"
                ) as HTMLInputElement;
                if (inputElement) {
                  sendInput(inputElement.value);
                  inputElement.value = "";
                }
              }}
            >
              <Input
                name="input"
                type="text"
                placeholder="Ввод: "
                size="md"
                borderColor="gray.300"
                focusBorderColor="blue.500"
                borderRadius="md"
                mb={3}
              />
              <Button my={2} type="submit" colorScheme="blue" size="md">
                Ввести
              </Button>
            </form>
          )}

          <Box
            as="pre"
            bg="rgba(0, 0, 0, 0.05)" // Полупрозрачный фон
            p="1em"
            mb={"0.5em"}
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.200"
            whiteSpace="pre-wrap" // Для отображения длинных строк
            overflowX="auto"
          >
            <code>
              <Text sx={{ userSelect: "none" }} color={"gray.500"}>
                Результат:{" "}
              </Text>
              {stdout}
            </code>
          </Box>
          <Box
            as="pre"
            bg="rgba(0, 0, 0, 0.05)" // Полупрозрачный фон
            p="1em"
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.200"
            whiteSpace="pre-wrap" // Для отображения длинных строк
            overflowX="auto"
            color="red.500"
          >
            <code>
              <Text sx={{ userSelect: "none" }} color={"gray.500"}>
                Ошибка:{" "}
              </Text>
              {stderr}
            </code>
          </Box>
        </div>
      </Flex>
    </>
  );
}

export default PythonCompiler;
