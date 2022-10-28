import React from 'react';
import Head from 'next/head';
import config from '../../data/config';
import officers from '../../data/officers';
import socials from '../../data/socials';

import {
  Container,
  Heading,
  Link,
  Text,
	SimpleGrid,
	Box,
	useColorModeValue,
	Stack,
	Flex,
	Image,
	Button,
	Tag
} from '@chakra-ui/react';

export default function JoinTeam(){
  return (
  <>
    <Head>
    	<title>Join our Team{config.titleSuffix}</title>
			<meta property="og:title" content={`Join our Team${config.titleSuffix}`} key="ogtitle"/>
			<meta name="description" content="Help us run the club!"/>
			<meta property="og:description" content="Help us run the club!" key="ogdesc"/>
    </Head>

    <Container maxW="container.xl" p={12} align="center">
			<Heading as="h1" size="2xl" my={2} color="brand.red">
				Join our Team	
			</Heading>
			<Heading as="h2" size="md" my={2} fontWeight="normal">
				Come help us plan our club for the 2022-2023 school year.
			</Heading>
    </Container>

		<Container maxW="container.lg">
			<Heading textAlign = "center" as="h2" size="lg" my={2} fontWeight="normal">
				We're no longer looking for specific officers. Come back next year for more opportunities!
				{/* We're looking for officers with the positions listed below. */}
			</Heading>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} py={8} px={4}>
				{officers.map(position =>
					<Box p={8} bg={useColorModeValue("gray.50", "gray.900")} boxShadow="xs" borderRadius="lg" key={position.title}>
						<Box minH={200} mb={2}>
							<Heading as="h2" size="lg">{position.title}</Heading>
							<Text fontSize="lg" mt={2}>{position.description}</Text>
							<Box align="center" mt={2}>
								<Image h={125}  src={position.image}/>
							</Box>
						</Box>
					</Box>
				)}
				</SimpleGrid>
		</Container>

		<Container maxW="container.xl" p={12} pt={4} align="center">
        <Heading as="h2" size="xl" my={1}>
          <Text as="span" color="brand.red">Interested?</Text>
        </Heading>
        <Text fontSize="xl">
          Contact Allen Liu '23 or Mark Platonov '23.
        </Text>
        <Link href={socials.gc} style={{ textDecoration: "none" }} isExternal>
          <Button colorScheme="blue" mt={4}>Join the Google Classroom</Button>
        </Link>
      </Container>
  </>
  );
}
