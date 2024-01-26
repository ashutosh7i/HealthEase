import React from "react";
import { useEffect } from "react";
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Hero = (props) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    // Your authentication logic to determine if the user is logged in
    // Update the isLoggedIn state accordingly
    // For demonstration purposes, I'm setting it to true after 2 seconds
    const timeout = setTimeout(() => {
      setIsLoggedIn(false);
    }, 2000);
    return () => clearTimeout(timeout); // Cleanup the timeout to avoid memory leaks
  }, []);

  return (
    <>
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        minH="70vh"
        px={8}
        mb={16}
        {...props}
      >
        <Stack
          spacing={4}
          w={{ base: "80%", md: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}
        >
          <Text
            color="#001B40"
            fontWeight="bold"
            fontSize="4xl"
            lineHeight="1.2"
            _dark={{
              color: "blue",
            }}
          >
            The smart and easy way to monitor{" "}
            <Text as="span" color="#11448A">
              your health.
            </Text>
          </Text>
          <Text
            color="black"
            mb={4}
            fontSize="lg"
            lineHeight="1.2"
            _dark={{
              color: "white",
            }}
          >
            Keep track of your blood sugar along with additional health metrics.
          </Text>

          {isLoggedIn ? (
            <Button
              bg="none"
              color="black"
              borderRadius="6px"
              border={"0.5px solid grey"}
              _hover={{
                bg: "#11448A",
                color: "white",
              }}
              _dark={{
                color: "white",
              }}
            >
              Explore
            </Button>
          ) : (
            <>
              <Link href="/register">
                <Button
                  bg="none"
                  color="black"
                  borderRadius="6px"
                  border={"0.5px solid grey"}
                  _hover={{
                    bg: "#11448A",
                    color: "white",
                  }}
                  _dark={{
                    color: "white",
                  }}
                >
                  Create your account
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  bg="none"
                  color="black"
                  borderRadius="6px"
                  border={"0.5px solid grey"}
                  _hover={{
                    bg: "#11448A",
                    color: "white",
                  }}
                  _dark={{
                    color: "white",
                  }}
                >
                  Login
                </Button>
              </Link>
            </>
          )}
        </Stack>
        {/* <Spacer /> */}
        <Box
          w={{ base: "50%", sm: "50%", md: "40%" }}
          mb={{ base: 12, md: 0 }}
        >
          <Image src="../assest/logo.png" alt="logo" />
        </Box>
      </Flex>

      {/* main section  for hero page */}

      <Box
        width={"80vw"}
        height={"210vh"}
        borderRadius={"10px"}
        m={"auto"}
        bg="linear-gradient(270deg, #011228 -21.91%, rgba(1, 18, 40, 0.83) 100.84%, rgba(1, 18, 40, 0.77) 101.34%, rgba(1, 18, 40, 0.77) 102.73%, rgba(1, 18, 40, 0.00) 105.07%, rgba(1, 18, 40, 0.79) 105.07%)"
        boxShadow="4px 4px 4px 3px rgba(0, 0, 0, 0.2)"
      >
        <Text
          color={"white"}
          fontSize={"2xl"}
          paddingTop={"20"}
          px={"8"}
          fontFamily={"Raleway"}
          textShadow={"2px 2px 4px rgba(0, 0, 0, 0.25)"}
          lineHeight={"6"}
        >
          Here’s how you can do a{" "}
          <Text as="span" color={"#29C9FB"}>
            Test...
          </Text>
        </Text>
        <Text px={"8"} color={"#79A3E0"} fontFamily={"Raleway"}>
          Hint: It’s incredibly easy
        </Text>

        {/* <Box boxSize={"sm"}>
            <Image src="../assest/heroimg.png"></Image>
          </Box> */}

        <Flex
          justifyContent={"space-evenly"}
          alignContent={"center"}
          spacing={"md"}
          wrap={"wrap"}
          px={"8"}
          py={"8"}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Stack
            align={["center", "center", "flex-start", "flex-start"]}
            justify={"center"}
            // spacing={"2"}
            spacing={"2"}
            w={{ base: "80%", md: "40%" }}
          >
            <Text
              color={"white"}
              fontSize={"3xl"}
              fontFamily={"Raleway"}
              lineHeight={"1.2"}
            >
              Find a physical node in your{" "}
              <Text as="span" color={"#29C9FB"} fontFamily={"Raleway"}>
                area
              </Text>
            </Text>
            <Text color={"#E0EDFF"}>
              Locate the nearest node in your area .
            </Text>

            <Link href="/location">
              <Button
                size={"md"}
                gap={"2"}
                bg={"none"}
                border={"1px solid #E0EDFF"}
                color={"white"}
                borderRadius={"8px"}
                lineHeight={"1.2"}
                _hover={{
                  bg: "#11448A",
                  color: "white",
                  border: "none",
                }}
              >
                Locate Node
              </Button>
            </Link>
          </Stack>

          <Box
            w={{ base: "50%", sm: "60%", md: "35%" }}
            mb={{ base: 12, md: 0 }}
          >
            <Image src="../assest/locate.png" alt="logo" w={"200px"} />
          </Box>
        </Flex>

        {/* second frame  */}

        <Flex
          justifyContent={"space-evenly"}
          alignContent={"center"}
          spacing={"md"}
          wrap={"wrap"}
          px={"8"}
          py={"8"}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Box
            w={{ base: "50%", sm: "60%", md: "35%" }}
            mb={{ base: 12, md: 0 }}
          >
            <Image src="../assest/details.png" alt="logo" w={"200px"} />
          </Box>
          <Stack
            align={["center", "center", "flex-start", "flex-start"]}
            justify={"center"}
            // spacing={"2"}
            spacing={"2"}
            w={{ base: "80%", md: "40%" }}
          >
            <Text
              color={"white"}
              fontSize={"3xl"}
              fontFamily={"Raleway"}
              lineHeight={"1.2"}
            >
              Enter your{" "}
              <Text as="span" color={"#29C9FB"} fontFamily={"Raleway"}>
                details.
              </Text>
            </Text>
            <Text color={"#E0EDFF"}>
              Enter personal details for accurate measurements following device
              instructions.
            </Text>
          </Stack>
        </Flex>

        {/* third frame */}

        <Flex
          justifyContent={"space-evenly"}
          alignContent={"center"}
          spacing={"md"}
          wrap={"wrap"}
          px={"8"}
          py={"8"}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Stack
            align={["center", "center", "flex-start", "flex-start"]}
            justify={"center"}
            // spacing={"2"}
            spacing={"2"}
            w={{ base: "80%", md: "40%" }}
          >
            <Text
              color={"white"}
              fontSize={"3xl"}
              fontFamily={"Raleway"}
              lineHeight={"1.2"}
            >
              Pay for the test with a{" "}
              <Text as={"span"} color={"yellow"}>
                coin
              </Text>{" "}
              or pay{" "}
              <Text as="span" color={"#29C9FB"} fontFamily={"Raleway"}>
                online with ease
              </Text>
            </Text>
            <Text color={"#E0EDFF"}>
              A simple payment gateway where you can pay either with a coin or
              you can use any UPI -app to complete your payment.
            </Text>
          </Stack>

          <Box
            w={{ base: "50%", sm: "60%", md: "35%" }}
            mb={{ base: 12, md: 0 }}
          >
            <Image src="../assest/contacts.png" alt="logo" w={"200px"} />
          </Box>
        </Flex>

        <Text
          my={"10"}
          textAlign={"center"}
          color={"rgba(255, 255, 255, 0.60)"}
          // border={"1px solid #E0EDFF"}
          alignItems={"center"}
          fontFamily={"Raleway"}
          fontSize={"md"}
          lineHeight={"1.2"}
          m={"auto"}
          w={{ base: "60%", sm: "20%", md: "50%" }}
        >
          *The metrics would get{" "}
          <Text as={"span"} color={"#29C9FB"} fontFamily={"Raleway"}>
            automatically
          </Text>{" "}
          stored in our app or website. You can easily monitor or send it to a{" "}
          <Text as={"span"} color={"#29C9FB"} fontFamily={"Raleway"}>
            {" "}
            doctor
          </Text>{" "}
          *.
        </Text>
      </Box>

      {/* Another section for the hero page */}

      <Box
        w={"80vw"}
        h={"135vh"}
        borderRadius={"30px 0px 0px 0px"}
        m={"auto"}
        bg={"white"}
        mt={"14"}
        border={"1px solid #000"}
      >
        <Flex
          justifyContent={"space-evenly"}
          alignContent={"center"}
          spacing={"md"}
          wrap={"wrap"}
          px={"8"}
          py={"8"}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Text
            w={"70%"}
            fontFamily={"Raleway"}
            fontSize={"3xl"}
            lineHeight={"1"}
            fontWeight={"700"}
            color={"#001B40"}
            textShadow={"0px 2px 60px rgba(0, 0, 0, 0.25)"}
          >
            Unlock{" "}
            <Text as={"span"} color={"#11448A"}>
              additional benefits
            </Text>{" "}
            by upgrading your plans.
          </Text>
          <Link href="#">
            <Button
              fontFamily={"Raleway"}
              fontSize={"sm"}
              color={"white"}
              borderRadius={"8px"}
              border={"1px solid #11448A"}
              boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
              bgGradient={
                "linear(to-r, #11448A 0%, rgba(17, 68, 138, 0.68) 131.78%, rgba(17, 68, 138, 0.00) 140.44%)" /* fallback for old browsers */
              }
            >
              Apply Now
            </Button>
          </Link>
        </Flex>

        {/* second section */}

        <Flex
          align={"flex-start"}
          justify={"space-evenly"}
          bg="linear-gradient(270deg, #011228 -21.91%, rgba(1, 18, 40, 0.83) 100.84%, rgba(1, 18, 40, 0.77) 101.34%, rgba(1, 18, 40, 0.77) 102.73%, rgba(1, 18, 40, 0.00) 105.07%, rgba(1, 18, 40, 0.79) 105.07%)"
          px={"8"}
          py={"8"}
          h={"50vh"}
          borderRadius={"15px 15px 0px 0px "}
        >
          <Text color={"#FFF"} fontFamily={"Raleway"} fontSize={"xl"}>
            Monthly Access Pass
            <Text fontSize={"sm"} fontFamily={"Raleway"} lineHeight={"2"}>
              Monthly pass of 189/-
            </Text>
            <Text fontSize={"sm"} fontFamily={"Raleway"} lineHeight={"2"}>
              Multiple tests.
            </Text>
          </Text>

          <Text color={"#29C9FB"} fontFamily={"Raleway"} fontSize={"xl"}>
            Half-year Membership
            <Text
              color={"white"}
              fontSize={"sm"}
              fontFamily={"Raleway"}
              lineHeight={"2"}
            >
              Pass of 499/-
            </Text>
            <Text
              color={"white"}
              fontSize={"sm"}
              fontFamily={"Raleway"}
              lineHeight={"2"}
            >
              Unlimited test.
            </Text>
            <Text
              color={"white"}
              fontSize={"sm"}
              fontFamily={"Raleway"}
              lineHeight={"2"}
            >
              Recommendation of doctors nearby.
            </Text>
            <Text
              color={"white"}
              fontSize={"sm"}
              fontFamily={"Raleway"}
              lineHeight={"2"}
            >
              Get a free consultation with a doctors.
            </Text>
          </Text>

          <Text color={"#FFB540"} fontFamily={"Raleway"} fontSize={"xl"}>
            Yearly Membership
            <Text
              color={"white"}
              fontSize={"sm"}
              fontFamily={"Raleway"}
              lineHeight={"2"}
            >
              Yearly pass of 799/-
            </Text>
            <Text
              color={"white"}
              fontSize={"sm"}
              fontFamily={"Raleway"}
              lineHeight={"2"}
            >
              Unlimited test.
            </Text>
            <Text
              color={"white"}
              fontSize={"sm"}
              fontFamily={"Raleway"}
              lineHeight={"2"}
            >
              Recommendation of doctors nearby.
            </Text>
            <Text
              color={"white"}
              fontSize={"sm"}
              fontFamily={"Raleway"}
              lineHeight={"2"}
            >
              Get a free consultation with a doctors.
            </Text>
          </Text>
        </Flex>

        <Flex
          justifyContent={"space-around"}
          alignContent={"center"}
          spacing={"sm"}
          wrap={"wrap"}
          px={"5"}
         
          pt={"3"}
          direction={{ base: "column-reverse", md: "row" }}
          mt={"5"}
          gap={"4"}
        >
          <Stack>
            <Text
              w={"70%"}
              fontFamily={"Raleway"}
              fontSize={{ base: "xl", sm: "sm", md: "medium" }}
              lineHeight={"1"}
              fontWeight={"700"}
              color={"#001B40"}
              textShadow={"0px 2px 60px rgba(0, 0, 0, 0.25)"}
            >
              Find a node in your{" "}
              <Text as={"span"} color={"#11448A"}>
                area
              </Text>{" "}
              and get your test done.
            </Text>
            <Text
              mt={"5"}
              fontSize={"sm"}
              fontFamily={"Raleway"}
              color={"#000"}
            >
              Click here to locate a node in your nearby areas
            </Text>
            <Button
              my={"4"}
              w={{ base: "50%", sm: "20%", md: "30%" }}
              fontFamily={"Raleway"}
              fontSize={"sm"}
              color={"white"}
              borderRadius={"8px"}
              border={"1px solid #11448A"}
              boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
              bgGradient={
                "linear(to-r, #11448A 0%, rgba(17, 68, 138, 0.68) 131.78%, rgba(17, 68, 138, 0.00) 140.44%)" /* fallback for old browsers */
              }
            >
              Locate Now
            </Button>
          </Stack>
          <Text
            fontSize={"sm"}
            w={{ base: "50%", sm: "20%", md: "30%" }}
            color={"#000"}
            fontFamily={"Raleway"}
            fontWeight={"700"}
          >
            *
            <Text as={"span"} color={"red"}>
              Note
            </Text>
            * : Make sure to keep your hand sanitized before doing the test. And
            follow the instructions carefully to get the correct result.
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Hero;
