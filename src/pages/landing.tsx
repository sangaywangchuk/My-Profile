import {
	Flex,
	Container,
	Heading,
	Stack,
} from "@chakra-ui/react";

export default function Landing() {
	return (
		<Container maxW={"5xl"}>
			<Stack
				textAlign={"center"}
				align={"center"}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 20, md: 28 }}
			>
				<Heading>
					WELCOME
				</Heading>
				<Stack spacing={6} direction={"row"}></Stack>
				<Flex w={"full"}>
					<div id="loader-wrapper">
						<div id="loader"></div>
					</div>
				</Flex>
			</Stack>
		</Container>
	);
}
