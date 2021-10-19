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
        <title>Today's Workshop!{config.titleSuffix}</title>
      </Head>

      <Flex minH="90vh" align="center" justify="center">
        <Box align="center">
          <Heading as="h1" size="2xl" color="brand.red">Hack Club Workshops</Heading>
          <Text fontSize="lg">Welcome to today's workshop! Click the link below.</Text>
          <Link href="https://workshops.hackclub.com/personal_website/" style={{ textDecoration: "none" }}>
            <Button colorScheme="red" mt={4}>Workshop</Button>
          </Link>
        </Box>
      </Flex>
    </>
  );
}
