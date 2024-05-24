"use client";
import { useState, useEffect, useCallback } from "react";
import { usePython } from "react-py";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { Box, Text } from "@chakra-ui/react";
import {
  Flex,
  Button,
  Input,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

function PythonCompiler() {
  const [input, setInput] = useState("");
  const {
    runPython,
    stdout,
    stderr,
    isLoading,
    isReady,
    isRunning,
    interruptExecution,
    isAwaitingInput,
    sendInput,
  } = usePython();

  useEffect(() => {
    navigator.serviceWorker
      .register("/react-py-sw.js")
      .then((registration) =>
        console.log(
          "Service Worker registration прошла успешно :)   : ",
          registration.scope
        )
      )
      .catch((err) =>
        console.log("Service Worker registration не удалась :(    ): ", err)
      );
  }, []);

  // const ensurePyodideHttp = async () => {
  //   if (isReady) {
  //     try {
  //       await runPython(`
  //         import micropip
  //         await micropip.install("pyodide-http")
  //       `);
  //       console.log("pyodide-http loaded successfully");
  //     } catch (error) {
  //       console.error("Error loading pyodide-http:", error);
  //     }
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // await ensurePyodideHttp(); // Установка пакета перед выполнением кода
    runPython(input);
  };

  const handleEditorChange = useCallback((val: string, viewUpdate: any) => {
    console.log("val:", val);
    setInput(val);
  }, []);

  return (
    <>
      <Flex justify="center" pt={5} pb={1}>
        <div className="relative color-red mb-10 flex flex-col">
          <form onSubmit={handleSubmit}>
            <div className="p-4 sm:w-full md:min-w-[43em] bg-gray-800 rounded-md shadow-lg shadow-gray-700/50 width-100%">
              <CodeMirror
                value={input}
                height="100%"
                width="100%"
                extensions={[python()]}
                onChange={handleEditorChange}
                theme={dracula}
                style={{ fontSize: "1.2em" }}
                placeholder="Здесь можно писать и запускать код!"
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
          {isLoading ? <p>Loading...</p> : <p>Ready!</p>}
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
            bg="rgba(0, 0, 0, 0.05)"
            p="1em"
            mb={"0.5em"}
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.200"
            whiteSpace="pre-wrap"
            overflowX="auto"
          >
            <code>
              <Text sx={{ userSelect: "none" }} color={"gray.500"}>
                Результат:{""}
              </Text>
              {stdout}
            </code>
          </Box>
          <Box
            as="pre"
            bg="rgba(0, 0, 0, 0.05)"
            p="1em"
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.200"
            whiteSpace="pre-wrap"
            overflowX="auto"
            color="red.500"
          >
            <code>
              <Text sx={{ userSelect: "none" }} color={"gray.500"}>
                Ошибка:{""}
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
