import { Flex, IconButton, Link, Text } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowRightIcon } from "@chakra-ui/icons";

interface NavigationButtonsProps {
  leftButtonLink: string;
  rightButtonLink: string;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  leftButtonLink,
  rightButtonLink
}) => (
  <Flex justifyContent="space-between" alignItems="center" p={4}>
    <Link href={leftButtonLink}>
      <IconButton
        aria-label="Navigate Left"
        icon={<ArrowBackIcon boxSize={6} />}
        variant="ghost"
      />
    </Link>
    <Link href={rightButtonLink}>
      <Text size={'lg'}>ДАЛЬШЕ</Text>
    </Link>
  </Flex>
);

export default NavigationButtons;
