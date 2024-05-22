import {
  Flex,
  HStack,
  Button,
  useColorModeValue,
  chakra,
  Image,
  Box, 
  VStack, 
  IconButton, 
  CloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';

const Header: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <header>
        <chakra.header
          bg={bg}
          w="full"
          maxW="7xl"
          mx="auto"
          px={{
            base: 2,
            sm: 4,
          }}
          py={2}
          shadow="0px 1px 0px rgba(0, 0, 0, 0.2)"
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <Link href="/" passHref>
                <chakra.a
                  title="Home page"
                  display="flex"
                  alignItems="center"
                >
                  <Image h="auto" w="2.5em" src="/images/header_logo3.png" alt="ITEEZY Logo" />
                  <chakra.h1 fontSize="xl" fontWeight="bold" ml="2" mt="3">
                    ITEEZY
                  </chakra.h1>
                </chakra.a>
              </Link>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack spacing={1} mr={1} color="brand.500">
                <Button
                  leftIcon={<MdCall />}
                  variant="ghost"
                  as="a"
                  href="tel:+79114030090"
                  display={{
                    base: 'none',
                    md: 'inline-flex',
                  }}
                >
                  +7 (911) 403-00-90
                </Button>
                <Button
                  variant="outline"
                  borderColor="brand.500"
                  as="a"
                  href="https://wa.me/7911704198"
                  size={{
                    base: 'sm',
                    md: 'md',
                  }}
                >
                  WhatsApp
                </Button>
              </HStack>
              <Box
                display={{
                  base: 'inline-flex',
                  md: 'none',
                }}
              >
                <IconButton
                  aria-label="Open menu"
                  icon={<AiOutlineMenu />}
                  variant="ghost"
                  onClick={mobileNav.onOpen}
                />
                {mobileNav.isOpen && (
                  <VStack
                    pos="absolute"
                    top={0}
                    left={0}
                    right={0}
                    p={2}
                    bg={bg}
                    spacing={3}
                    shadow="sm"
                  >
                    <CloseButton
                      aria-label="Close menu"
                      onClick={mobileNav.onClose}
                    />
                    <Button
                      as="a"
                      href="tel:+79114030090"
                    >
                      +7 (911) 403-00-90
                    </Button>
                    <Button
                      as="a"
                      href="https://wa.me/7911704198"
                    >
                      WhatsApp
                    </Button>
                  </VStack>
                )}
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </header>
    </React.Fragment>
  );
};

export default Header;
