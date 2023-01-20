import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  HStack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { GrReactjs } from 'react-icons/gr';
import { IoLogoJavascript, IoLogoAngular, IoLogoHtml5, IoLogoCss3, IoLogoNodejs } from 'react-icons/io'
interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Home(props: {isVisible: boolean}) {
  return (
    <Box py={150} bg={useColorModeValue("gray.100", "gray.800")}>
      <Container maxW={'5xl'} py={12} >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex className={props?.isVisible? "slide-in-left": 'fade-out'}>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src="../../../assets/programming200.svg"
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4} className={props?.isVisible? "slide-in-right": 'fade-out'} >
          <Heading pt={50} className={props.isVisible? 'text-focus-in': 'fade-out'}>Skills</Heading>
          <Text color={'gray.500'} pt={8} py={8} fontSize={'lg'} className={props.isVisible? 'text-focus-in': 'fade-out'}>
            I am a frontend developer with skills in the latest frameworks, technologies and design principles.
          </Text>
          <HStack>
            <Stack
            spacing={3}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={<Icon as={GrReactjs} color={'blue.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'React'}
            />
            <Feature
              icon={
                <Icon as={IoLogoJavascript} color={'yellow.600'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Javascript'}
            />
             <Feature
              icon={
                <Icon as={IoLogoAngular} color={'red.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Angular'}
            />              
          </Stack>
          <Stack
            spacing={3}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
              <Feature
              icon={
                <Icon as={IoLogoHtml5} color={'orange.600'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Html'}
            />
              <Feature
              icon={
                <Icon as={IoLogoCss3} color={'blue.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Css'}
            />
              <Feature
              icon={
                <Icon as={IoLogoNodejs} color={'green.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('gray.300', 'purple.900')}
              text={'Node js'}
            />
          </Stack>
          </HStack>
          
        </Stack>
      </SimpleGrid>
      </Container>
    </Box>
  );
}