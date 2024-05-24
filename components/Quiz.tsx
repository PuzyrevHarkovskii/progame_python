// components/Quiz.tsx
import { useState } from 'react';
import { Box, Button, Checkbox, Stack, Text, Heading } from '@chakra-ui/react';

interface QuizProps {
  question: string;
  options: string[];
  correctAnswers: string[];
}

const Quiz: React.FC<QuizProps> = ({ question, options, correctAnswers }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = () => {
    const isCorrect =
      selectedOptions.length === correctAnswers.length &&
      selectedOptions.every((option) => correctAnswers.includes(option));
    setResult(isCorrect ? 'Правильно! 👏😎' : 'Неверно, попробуйте снова 🫵 😹');
  };

  return (
    <Box textAlign="center" py={10}>
      <Heading mb="0.5em" size="md" textAlign="left">
        {question}
      </Heading>
      <Text pb={4} align="left">
      Выберите все правильные варианты.
          </Text>
      <Stack spacing={5} direction="column" align="left">
        {options.map((option) => (
          <Checkbox
            key={option}
            value={option}
            isChecked={selectedOptions.includes(option)}
            onChange={() => handleChange(option)}
          >
            {option}
          </Checkbox>
        ))}
      </Stack>
      <Button mt={5} colorScheme="teal" onClick={handleSubmit}>
        Проверить
      </Button>
      {result && (
        <Text mt={5} fontSize="xl" color={result === 'Правильно! 👏😎' ? 'green.500' : 'red.500'}>
          {result}
        </Text>
      )}
    </Box>
  );
};

export default Quiz;
