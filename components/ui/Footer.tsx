"use client";

import {
  Box,
  chakra,
  Container,
  Stack, Image,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYandex, FaVk } from "react-icons/fa";
import { ReactNode } from "react";

const Logo = (props: any) => {
  return (
    <Image
      src="/images/header_logo.png" // путь к картинке в папке public/images
      alt="Your Logo"
      height={14}
      width={'auto'}
      {...props}
    />
  )
}

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      mt={5}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Text>© 2024 made by @app1e.jews</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"VK"} href={"https://vk.com/iteezy"}>
            <FaVk />
          </SocialButton>
          <SocialButton label={"Yandex"} href={"https://yandex.ru/maps/org/iteezy/55155813438/?ll=30.368662%2C59.829070&z=17"}>
          <FaYandex />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
