import React from "react";
import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Image,
  Text,
  Button,
  IconButton,
  LinkProps,
  Flex,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <Box
      p={{ base: 3, md: 5 }}
      maxW="100vw"
      marginInline="auto"
      mt={"5"}
      bg={
        "linear-gradient(270deg, #011228 -21.91%, rgba(1, 18, 40, 0.83) 100.84%, rgba(1, 18, 40, 0.77) 101.34%, rgba(1, 18, 40, 0.77) 102.73%, rgba(1, 18, 40, 0.00) 105.07%, rgba(1, 18, 40, 0.79) 105.07%)"
      }
    >
     
        <Box maxW="100vw">
          <Flex align={"center"} justify={"space-between"} w={"80vw"}
          m={"auto"}
          direction={{ base: "column", md: "row" }}>

          <Stack
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
      >
            
              <Text
                fontSize={"2xl"}
                fontWeight={"semibold"}
                fontFamily={"Raleway"}
               
                color={"white"}
              >
                HealthEase
              </Text>
              </Stack>
              <Text
                mt={2}
                
                fontSize="md"
                fontWeight={"500"}
                color={"white"}
              >
                "Health Metrices made simple and accessible"
              </Text>
            
          </Flex>
        </Box>
      
     
      <Text mt={"3"} color={"white"}
      fontSize={"md"}
      fontFamily={"Raleway"}
      fontWeight={"400"}
      textAlign={"center"}>© 2024 HealthEase All Right Reserved </Text>
      {/* <Stack direction={{ base: 'column', md: 'row' }} spacing={3} justifyContent="space-between">
        <Text fontSize="md">
          Built by{' '}
          <Link
            href="https://github.com/MA-Ahmad"
            textDecoration="underline"
            _hover={{ textDecoration: 'underline' }}
            isExternal
          >
            Muhammad Ahmad
          </Link>
        </Text>
        <Stack spacing={2} direction={{ base: 'column', md: 'row' }}>
          <Button leftIcon={<FaGithub />} as={Link} href="#" rounded="md" colorScheme="gray">
            Github Discussions
          </Button>
          <Button
            leftIcon={<BsDiscord />}
            as={Link}
            href="#"
            rounded="md"
            color="white"
            bg="purple.500"
            _hover={{ bg: 'purple.600' }}
          >
            Discord community
          </Button>
        </Stack>
      </Stack> */}
    </Box>
  );
};

const CustomLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link
      href="#"
      fontSize="sm"
      _hover={{ textDecoration: "underline" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Footer;
