'use client'

import { ReactNode } from 'react'

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text, Image,
  useColorModeValue,
} from '@chakra-ui/react'

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

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg='#2C314D'
      >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo />
            </Box>
            <Text color={'white'} fontSize={'sm'}>© 2022 Chakra Templates. All rights reserved</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader >Product</ListHeader>
            <Box color={'white'} as="a" href={'#'}>
              Overview
            </Box>
            <Box color={'white'} as="a" href={'#'}>
              Features
            </Box>
            <Box color={'white'} as="a" href={'#'}>
              Tutorials
            </Box>
            <Box color={'white'} as="a" href={'#'}>
              Pricing
            </Box>
            <Box color={'white'} as="a" href={'#'}>
              Releases
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader >Company</ListHeader>
            <Box color={'white'} as="a" href={'#'}>
              About
            </Box>
            <Box color={'white'} as="a" href={'#'}>
              Press
            </Box>
            <Box color={'white'} as="a" href={'#'}>
              Careers
            </Box>
            <Box color={'white'} as="a" href={'#'}>
              Contact
            </Box>
            <Box color={'white'} as="a" href={'#'}>
              Partners
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader >Support</ListHeader>
            <Box color={'white'} as="a" href={'#'}>
              Help Center
            </Box>
            <Box color={'white'} as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box color={'white'} as="a" href={'#'}>
              Legal
            </Box>
            <Box color={'white'} as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box color={'white'} as="a" href={'#'}>
              Status
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader >Follow Us</ListHeader>
            <Box color={'white'} as="a" href={'#'}>
              Facebook
            </Box>
            <Box color={'white'} as="a" href={'#'}>
              Twitter
            </Box>
            <Box color={'white'} as="a" href={'#'}>
              Dribbble
            </Box>
            <Box color={'white'} as="a" href={'#'}>
              Instagram
            </Box>
            <Box color={'white'} as="a" href={'#'}>
              LinkedIn
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}