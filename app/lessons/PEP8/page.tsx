"use client";
import { Container, Box, Heading, Text, Code } from "@chakra-ui/react";
import { PythonProvider } from "react-py";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { List, ListItem, UnorderedList, Image } from "@chakra-ui/react";
import PythonCompiler from "@/components/PythonCompiler";
import CodeFragment from "@/components/CodeFragment";

export default function PEP8() {
  return (
    <div>
      <Container maxW="container.md">
        <Box p={5}>
        <Heading mb="0.5em" mt="1em" size="3xl" textAlign={"center"}>
        Что такое PEP8?
          </Heading>
          <Text py={2}>PEP8 — это документ с рекомендациями, как писать код для языка Python.</Text>
          <Text py={2}>Ключевая идея создателя языка, Гвидо Ван Россума, в том, что код программы читается намного больше раз, чем пишется. Рекомендации о стиле написания кода направлены на то, чтобы улучшить читаемость кода и сделать его согласованным между большим числом проектов. В идеале, весь код будет написан в едином стиле, и любой сможет легко его прочесть.</Text>
          <Text py={2}>Мы будем давать выдержки из этих рекомендаций постепенно, по мере прохождения курса, для того, чтобы ваш код не только работал, но и соответствовал PEP8.</Text>
          <Text py={2}>Одна из первых вещей, о которых говорит PEP8 — это использование пробелов. Избегайте использования пробелов в следующих ситуациях:</Text>
          <Text py={2}>Непосредственно внутри круглых скобок</Text>
          <Text py={2}>Правильно</Text>
          <CodeFragment
            code={`print(1, 2, 3)`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text py={2}>Неправильно</Text>
          <CodeFragment
            code={`print( 1, 2, 3 )`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text py={2}>Непосредственно перед запятой</Text>
          <Text py={2}>Правильно</Text>
          <CodeFragment
            code={`print(1, 2, 3)`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text py={2}>Неправильно</Text>
          <CodeFragment
            code={`print(1 , 2 , 3)`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text py={2}>Сразу перед открывающей скобкой, после которой начинается список аргументов при вызове функции</Text>
          <Text py={2}>Правильно</Text>
          <CodeFragment
            code={`print(1, 2, 3)`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text py={2}>Неправильно</Text>
          <CodeFragment
            code={`print (1, 2, 3)`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text py={2}>Не используйте более одного пробела вокруг оператора присваивания (или любого другого) для того, чтобы выровнять его с другим. Рекомендуется всегда окружать операторы одним пробелом с каждой стороны.</Text>
          <Text py={2}>Правильно</Text>
          <CodeFragment
            code={`x = 1
y = 2
long_variable = 3`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
           <Text py={2}>Неправильно</Text>
           <CodeFragment
            code={`x             = 1
y             = 2
long_variable = 3`}
            language={"python"}
            showLineNumbers={false}
          ></CodeFragment>
          <Text py={2}>Просмотрите программы, которые вы уже написали и исправьте, если они не соответствуют PEP8. В последующих программах придерживайтесь этих рекомендаций.</Text>
        </Box>
      </Container>
    </div>
  );
}
