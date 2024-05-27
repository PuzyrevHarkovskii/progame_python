"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { usePython } from "react-py";
import CodeMirror from "@uiw/react-codemirror";
import { placeholder } from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { Box, Text, Flex, Button, Input, VStack } from "@chakra-ui/react";
import { EditorState } from "@uiw/react-codemirror";

interface InputProps {
  prompt: string;
  onSubmit: (value: string) => void;
}

function PythonCompiler2() {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  
  const startState = EditorState.create({
    doc: "Hello World",
    extensions: [placeholder("placeholder text")],
  });

  useEffect(() => {
    navigator.serviceWorker
      .register("/react-py-sw_copy.js")
      .then((registration) =>
        console.log(
          "Service Worker registration прошла успешно: ",
          registration.scope
        )
      )
      .catch((err) =>
        console.log("Service Worker registration не удалась: ", err)
      );

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const {
    runPython,
    stdout,
    stderr,
    isLoading,
    isRunning,
    interruptExecution,
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

  const handleInputSubmit = (value: string) => {
    setInput(value);
    runPython(value);
  };

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
                style={{ fontSize: "1.4em" }}
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
                Результат:{""}
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
                Ошибка:{""}
              </Text>
              {stderr}
            </code>
          </Box>
        </div>
      </Flex>

      <Flex justify="center" pt={5} pb={1}>
        <div className="mt-4 lg:w-1/2">
          <label
            htmlFor="input"
            className="block text-sm font-medium text-gray-700 dark:text-gray-100"
          >
            Input
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <input
                ref={inputRef}
                type="text"
                name="input"
                id="input"
                className="block w-full rounded-l-md border-none bg-neutral-200 px-2 py-1.5 placeholder-gray-400 shadow-sm focus:ring-0 dark:bg-neutral-600 sm:text-sm"
                placeholder="Введите код"
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleInputSubmit(input)}
              />
            </div>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-none border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:cursor-pointer hover:bg-gray-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              onClick={() => handleInputSubmit(input)}
            >

              <span>Submit</span>
            </button>
          </div>
        </div>
      </Flex>
    </>
  );
}

export default PythonCompiler2;
