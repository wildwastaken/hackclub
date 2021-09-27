import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link'

import config from '../../data/config';
import team from '../../data/team';

import {
  Container,
  Heading,
  Link,
  Text,
	SimpleGrid,
	Box,
	Stack,
	Image,
	Button,
	useColorModeValue,
} from '@chakra-ui/react';

export default function JoinTeam(){
  return (
  <>
    <Head>
    	<title>Our Team{config.titleSuffix}</title>
			<meta property="og:title" content={`Our Team${config.titleSuffix}`} key="ogtitle"/>
			<meta name="description" content="The leaders and officers that run the club."/>
			<meta property="og:description" content="The leaders and officers that run the club." key="ogdesc"/>
    </Head>

    <Container maxW="container.xl" p={12} align="center">
			<Heading as="h1" size="2xl" my={2} color="brand.red">
				Our Team
			</Heading>
    </Container>

		<Container maxW="container.md" mb={{ base: 2, md: 8 }}>
			<Stack direction={{ base: "column", md: "row" }} spacing={{ base: 2, md: 8 }} justify="center">
				{team.captains.map(member =>
					<Box 
						align="center" p={4} 
						key={member.name}
					>
						<Box>
							<Image w="100%" maxW="200px" borderRadius="50%" src={member.image} alt={member.name}/>
						</Box>
						<Link href={member.link} isExternal>
							<Heading as="h3" size="md" mt={5}>{member.name}</Heading>
						</Link>
						<Text fontSize="md" lineHeight={1.2}>{member.description}</Text>
					</Box>
				)}
			</Stack>
		</Container>
  </>
  );
}