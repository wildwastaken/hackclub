import React from 'react';
import Head from 'next/head';
import config from '../data/config';

import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Button,
} from '@chakra-ui/react';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404!{config.titleSuffix}</title>
      </Head>

      <Flex minH="90vh" align="center" justify="center">
        <Box align="center">
          <Heading as="h1" size="2xl" color="brand.red">Whoops! 🚧</Heading>
          <Text fontSize="lg">Sorry, this page is still under construction. Please check back soon for an update!</Text>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button colorScheme="red" mt={4}>Go Home</Button>
          </Link>
        </Box>
      </Flex>
    </>
  );
}
