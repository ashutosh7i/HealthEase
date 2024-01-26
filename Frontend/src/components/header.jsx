import React, { useEffect } from "react";

import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Wrap,
  WrapItem,
  Avatar,
  useColorMode,
  Icon,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./logo";

const Header = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Set the initial state based on your authentication logic

  useEffect(() => {
    // Your authentication logic to determine if the user is logged in
    // Update the isLoggedIn state accordingly
    // For demonstration purposes, I'm setting it to true after 2 seconds
    const timeout = setTimeout(() => {
      setIsLoggedIn(false);
    }, 1000);
    return () => clearTimeout(timeout); // Cleanup the timeout to avoid memory leaks
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  const handleLoginClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <NavBarContainer {...props} bg={"bg"}>
      <Link to={"/"}>
        <Logo
          w="70px"
          color={"blue"}
        />
      </Link>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} isLoggedIn={isLoggedIn} />
    </NavBarContainer>
  );
};

function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Button onClick={toggleColorMode} bg={"none"}>
        {/* <Icon as={FaMoon} color={"blue"} bg={"none"}></Icon> */}
        {colorMode === "light" ? (
          <Icon as={FaMoon} color={"blue"}></Icon>
        ) : (
          <Icon as={FaSun} color={"blue"}></Icon>
        )}
      </Button>
    </Box>
  );
}

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, ...rest }) => {
  return (
    <Text display="block" {...rest}>
      {children}
    </Text>
  );
};

const MenuLinks = ({ isOpen, isLoggedIn }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={"center"}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem color=" blue " fontSize="m">
          <DarkMode />
        </MenuItem>
        <Link to={"/dashboard"}>
          <MenuItem
            color=" blue "
            fontSize="m"
            fontWeight="700"
            fontFamily="Raleway"
            _hover={{
              bg: "rgb(198,215,255)",
            }}
            p="2"
          >
            DashBoard
          </MenuItem>
        </Link>

        <Link to={"/locate"}>
          <MenuItem
            color=" blue "
            fontSize="m"
            fontWeight="700"
            fontFamily="Raleway"
            to="/locate"
            _hover={{
              bg: "rgb(198,215,255)",
            }}
            p="2"
          >
            Locate Node{" "}
          </MenuItem>
        </Link>

        <Link to={"/about"}>
          <MenuItem
            color=" blue "
            fontSize="m"
            fontWeight="700"
            fontFamily="Raleway"
            to="/about"
            _hover={{
              bg: "rgb(198,215,255)",
            }}
            p="2"
          >
            About{" "}
          </MenuItem>
        </Link>

        <Link to={"/contact"}>
          <MenuItem
            color=" blue "
            fontSize="m"
            fontWeight="700"
            fontFamily="Raleway"
            to="/contact"
            _hover={{
              bg: "rgb(198,215,255)",
            }}
            p="2"
          >
            Contact Us{" "}
          </MenuItem>
        </Link>
        {isLoggedIn ? (
          <Wrap>
            <WrapItem>
              <Link to={"/profile"}>
                <Avatar
                  name="Dan Abrahmov"
                  src="https://avatars.githubusercontent.com/u/115174888?v=4"
                />
              </Link>
            </WrapItem>
          </Wrap>
        ) : (
          <Link to={"/register"}>
            <MenuItem>
              <Button
                size="sm"
                rounded="md"
                color={["primary.500", "primary.500", "white", "white"]}
                bg={["black", "black", "primary.500", "primary.500"]}
                _hover={{
                  bg: ["blue"],
                  borderRadius: "14",
                }}
              >
                Register/Login
              </Button>
            </MenuItem>
          </Link>
        )}
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={4}
      boxShadow={"inset 0 -1px 0 0 #EAEAEA"}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["black", "black", "primary.700", "primary.700"]}
      top={"0"}
      position={"sticky"}
      backdropFilter={"blur(10px)"}
      zIndex={"1"}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Header;
