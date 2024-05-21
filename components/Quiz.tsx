// components/Quiz.tsx
import { useState } from 'react';
import { Box, Button, Checkbox, Stack, Text } from '@chakra-ui/react';

interface QuizProps {
  options: string[];
  correctAnswers: string[];
}

const Quiz: React.FC<QuizProps> = ({ options, correctAnswers }) => {
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
    setResult(isCorrect ? 'Correct!' : 'Incorrect, try again.');
  };

  return (
    <Box textAlign="center" py={10}>
      <Stack spacing={5} direction="column" align="center">
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
        Submit
      </Button>
      {result && (
        <Text mt={5} fontSize="lg" color={result === 'Correct!' ? 'green.500' : 'red.500'}>
          {result}
        </Text>
      )}
    </Box>
  );
};

export default Quiz;
