import { Flex, HStack, VStack, Button, IconButton, useColorModeValue, CloseButton } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useDisclosure, chakra, Logo, Image } from '@chakra-ui/react';
import { VisuallyHidden, VisuallyHiddenInput, Box } from '@chakra-ui/react'
import Link from 'next/link'; // Импортируем Link из Next.js
import React from 'react'
import logo from '@/public/images/header_logo.png'
import { FaWhatsapp , MdCall } from "react-icons/md"


//Доделать
const Header = () => {
  const bg = useColorModeValue("white", "gray.800");
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
              <Link href="/" passHref> {/* Заменяем a на Link из Next.js */}
                <chakra.a
                  title="Home page"
                  display="flex"
                  alignItems="center"
                >
                  
                  
                </chakra.a>
              </Link>
              <Flex alignItems="center">
              <Image h="auto" w="2.5em" src="/images/header_logo3.png" />
              <chakra.h1 fontSize="xl" fontWeight="bold" ml="2" mt="3">
                ITEEZY
              </chakra.h1>
              </Flex>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                
              >
                <Button leftIcon={<MdCall />} variant="ghost" href={`tel:+79114030090`} display={{
                  base: "none",
                  md: "inline-flex",
                }} >+7 (911) 403-00-90</Button>
                <Button variant="outline"  borderColor="brand.500" href="https://wa.me/7911704198" size={{ base: "sm", md: "md" }} >WhatsApp</Button>
              </HStack>
              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </header>
    </React.Fragment>
  );
};

export default Header;
