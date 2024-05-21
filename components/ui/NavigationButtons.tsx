import { Flex, IconButton, Link } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

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
        icon={<ArrowLeftIcon />}
        variant="ghost"
      />
    </Link>
    <Link href={rightButtonLink}>
      <IconButton
        aria-label="Navigate Right"
        icon={<ArrowRightIcon />}
        variant="ghost"
      />
    </Link>
  </Flex>
);

export default NavigationButtons;
