import { useToast } from "@chakra-ui/react";
import {
  SimpleGrid,
  GridItem,
  chakra,
  Box,
  Divider,
  FormLabel,
  Input,
  Button,
  Flex,
  Text,
  Heading,
  Stack,
  Checkbox,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Textarea,
  FormHelperText,
  Avatar,
  Icon,
  VisuallyHidden,
  Radio,
  RadioGroup,
  Select,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const toast = useToast();
  return (
    <>
      <Text
        textAlign={"center"}
        color={"#001B40"}
        fontSize={"md"}
        fontFamily={"Raleway"}
        fontWeight={"semibold"}
      >
        Already have an account ??{" "}
        <Link to={"/login"}>
          <Text as={"span"} color={"blue"}>
            Log In
          </Text>
        </Link>
      </Text>

      <Box
        _dark={{
          bg: "#111",
        }}
        p={10}
      >
        <Box>
          <SimpleGrid
            display={{
              base: "initial",
              md: "grid",
            }}
            columns={{
              md: 3,
            }}
            spacing={{
              md: 6,
            }}
          >
            <GridItem
              colSpan={{
                md: 1,
              }}
            >
              <Box px={[4, 0]}>
                <Heading
                  fontSize="2xl"
                  fontWeight="semibold"
                  color="#001B40"
                  lineHeight="6"
                  fontFamily={"Raleway"}
                  _dark={{
                    color: "blue",
                  }}
                >
                  Profile
                </Heading>
                <Text
                  mt={1}
                  fontSize="sm"
                  color="black"
                  _dark={{
                    color: "white",
                  }}
                >
                  This information will be displayed publicly so be careful what
                  you share.
                </Text>
              </Box>
            </GridItem>
            <GridItem
              mt={[5, null, 0]}
              colSpan={{
                md: 2,
              }}
              border={"1px solid #F8EEEC"}
            >
              <chakra.form
                method="POST"
                shadow="base"
                rounded={[null, "md"]}
                overflow={{
                  sm: "hidden",
                }}
              >
                <Stack
                  px={4}
                  py={5}
                  bg="white"
                  _dark={{
                    bg: "#141517",
                  }}
                  spacing={6}
                  p={{
                    sm: 6,
                  }}
                >
                  <SimpleGrid columns={3} spacing={6}>
                    <FormControl as={GridItem} colSpan={[3, 2]}>
                      <FormLabel
                        fontSize="xl"
                        fontWeight="semibold"
                        color="#001B40"
                        _dark={{
                          color: "white",
                        }}
                      >
                        Website
                      </FormLabel>
                      <InputGroup size="sm">
                        <InputLeftAddon
                          bg="black.50"
                          _dark={{
                            bg: "black.800",
                          }}
                          color="black.500"
                          rounded="md"
                        >
                          http://
                        </InputLeftAddon>
                        <Input
                          type="link"
                          placeholder="www.example.com"
                          focusBorderColor="brand.400"
                          rounded="md"
                        />
                      </InputGroup>
                    </FormControl>
                  </SimpleGrid>

                  <div>
                    <FormControl id="email" mt={1}>
                      <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="black.700"
                        _dark={{
                          color: "black.50",
                        }}
                      >
                        About
                      </FormLabel>
                      <Textarea
                        placeholder="you@example.com"
                        mt={1}
                        rows={3}
                        shadow="sm"
                        focusBorderColor="brand.400"
                        fontSize={{
                          sm: "sm",
                        }}
                      />
                      <FormHelperText>
                        Brief description for your profile. URLs are
                        hyperlinked.
                      </FormHelperText>
                    </FormControl>
                  </div>

                  <FormControl>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color="black.700"
                      _dark={{
                        color: "black.50",
                      }}
                    >
                      Photo
                    </FormLabel>
                    <Flex alignItems="center" mt={1}>
                      <Avatar
                        boxSize={12}
                        bg="black.100"
                        src="https://avatars.githubusercontent.com/u/115174888?v=4"
                        _dark={{
                          bg: "black.800",
                        }}
                        icon={
                          <Icon
                            as={FaUser}
                            boxSize={9}
                            mt={3}
                            rounded="full"
                            color="black.300"
                            _dark={{
                              color: "black.700",
                            }}
                          />
                        }
                      />
                      <Button
                        type="button"
                        ml={5}
                        variant="outline"
                        size="sm"
                        fontWeight="medium"
                        _focus={{
                          shadow: "none",
                        }}
                      >
                        Change
                      </Button>
                    </Flex>
                  </FormControl>

                  <FormControl>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="semibold"
                      color="black.700"
                      _dark={{
                        color: "white",
                      }}
                    >
                      Cover photo
                    </FormLabel>
                    <Flex
                      mt={1}
                      justify="center"
                      px={6}
                      pt={5}
                      pb={6}
                      borderWidth={2}
                      _dark={{
                        color: "black.500",
                      }}
                      borderStyle="dashed"
                      rounded="md"
                    >
                      <Stack spacing={1} textAlign="center">
                        <Icon
                          mx="auto"
                          boxSize={12}
                          color="black.400"
                          _dark={{
                            color: "black.500",
                          }}
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </Icon>
                        <Flex
                          fontSize="sm"
                          color="black.600"
                          _dark={{
                            color: "black.400",
                          }}
                          alignItems="baseline"
                        >
                          <chakra.label
                            htmlFor="file-upload"
                            cursor="pointer"
                            rounded="md"
                            fontSize="md"
                            color="brand.600"
                            _dark={{
                              color: "brand.200",
                            }}
                            pos="relative"
                            _hover={{
                              color: "brand.400",
                              _dark: {
                                color: "brand.300",
                              },
                            }}
                          >
                            <span>Upload a file</span>
                            <VisuallyHidden>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                              />
                            </VisuallyHidden>
                          </chakra.label>
                          <Text pl={1}>or drag and drop</Text>
                        </Flex>
                        <Text
                          fontSize="xs"
                          color="black.500"
                          _dark={{
                            color: "black.50",
                          }}
                        >
                          PNG, JPG, GIF up to 10MB
                        </Text>
                      </Stack>
                    </Flex>
                  </FormControl>
                </Stack>
                <Box
                  px={{
                    base: 4,
                    sm: 6,
                  }}
                  py={3}
                  bg="black.50"
                  _dark={{
                    bg: "#121212",
                  }}
                  textAlign="right"
                >
                  <Button
                    type="submit"
                    colorScheme="brand"
                    color={"black"}
                    border={"1px solid #001B04"}
                    _focus={{
                      shadow: "",
                    }}
                    fontWeight="md"
                  >
                    Save
                  </Button>
                </Box>
              </chakra.form>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Divider
          my="5"
          borderColor="black.300"
          _dark={{
            borderColor: "whiteAlpha.300",
          }}
          visibility={{
            base: "hidden",
            sm: "visible",
          }}
        />

        <Box mt={[10, 0]}>
          <SimpleGrid
            display={{
              base: "initial",
              md: "grid",
            }}
            columns={{
              md: 3,
            }}
            spacing={{
              md: 6,
            }}
          >
            <GridItem
              colSpan={{
                md: 1,
              }}
            >
              <Box px={[4, 0]}>
                <Heading
                  fontSize="2xl"
                  fontWeight="semibold"
                  lineHeight="6"
                  fontFamily={"Raleway"}
                  color={"#001B40"}
                  _dark={{
                    color: "blue",
                  }}
                >
                  Personal Information
                </Heading>
                <Text
                  mt={1}
                  fontSize="sm"
                  color="black.600"
                  _dark={{
                    color: "white",
                  }}
                >
                  Use a permanent address where you can receive mail.
                </Text>
              </Box>
            </GridItem>
            <GridItem
              mt={[5, null, 0]}
              colSpan={{
                md: 2,
              }}
              border={"1px solid #F8EEEC"}
            >
              <chakra.form
                method="POST"
                shadow="base"
                rounded={[null, "md"]}
                overflow={{
                  sm: "hidden",
                }}
              >
                <Stack
                  px={4}
                  py={5}
                  p={[null, 6]}
                  bg="white"
                  _dark={{
                    bg: "#141517",
                  }}
                  spacing={6}
                >
                  <SimpleGrid columns={6} spacing={6}>
                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="first_name"
                        fontSize="sm"
                        fontWeight="md"
                        color="black"
                        _dark={{
                          color: "black.50",
                        }}
                      >
                        First name
                      </FormLabel>
                      <Input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="last_name"
                        fontSize="sm"
                        fontWeight="md"
                        color="black"
                        _dark={{
                          color: "black.50",
                        }}
                      >
                        Last name
                      </FormLabel>
                      <Input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 4]}>
                      <FormLabel
                        htmlFor="email_address"
                        fontSize="sm"
                        fontWeight="md"
                        color="black"
                        _dark={{
                          color: "black.50",
                        }}
                      >
                        Email address
                      </FormLabel>
                      <Input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autoComplete="email"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 4]}>
                      <FormLabel
                        htmlFor="aadhar_no"
                        fontSize="sm"
                        fontWeight="md"
                        color="black"
                        _dark={{
                          color: "black.50",
                        }}
                      >
                        Aadhar Card No.
                      </FormLabel>

                      <Input
                        type="number"
                        name="aadhar_no"
                        id="aadhar_no"
                        autoComplete="aadhar"
                        required
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="country"
                        fontSize="sm"
                        fontWeight="md"
                        color="black.700"
                        _dark={{
                          color: "black.50",
                        }}
                      >
                        Country / Region
                      </FormLabel>
                      <Select
                        id="country"
                        name="country"
                        autoComplete="country"
                        placeholder="Select option"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      >
                        <option>India</option>
                        <option>Canada</option>
                        <option>America</option>
                        <option>United Arab Emirates</option>
                        <option>United Kingdom</option>
                        <option>Mexico</option>
                      </Select>
                    </FormControl>

                    <FormControl as={GridItem} colSpan={6}>
                      <FormLabel
                        htmlFor="street_address"
                        fontSize="sm"
                        fontWeight="md"
                        color="black.700"
                        _dark={{
                          color: "black.50",
                        }}
                      >
                        Street address
                      </FormLabel>
                      <Input
                        type="text"
                        name="street_address"
                        id="street_address"
                        autoComplete="street-address"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                      <FormLabel
                        htmlFor="city"
                        fontSize="sm"
                        fontWeight="md"
                        color="black.700"
                        _dark={{
                          color: "black.50",
                        }}
                      >
                        City
                      </FormLabel>
                      <Input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="city"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                      <FormLabel
                        htmlFor="state"
                        fontSize="sm"
                        fontWeight="md"
                        color="black.700"
                        _dark={{
                          color: "black.50",
                        }}
                      >
                        State / Province
                      </FormLabel>
                      <Input
                        type="text"
                        name="state"
                        id="state"
                        autoComplete="state"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                      <FormLabel
                        htmlFor="postal_code"
                        fontSize="sm"
                        fontWeight="md"
                        color="black.700"
                        _dark={{
                          color: "black.50",
                        }}
                      >
                        ZIP / Postal
                      </FormLabel>
                      <Input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autoComplete="postal-code"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>
                  </SimpleGrid>
                </Stack>
                <Box
                  px={{
                    base: 4,
                    sm: 6,
                  }}
                  py={3}
                  bg="black.50"
                  _dark={{
                    bg: "#121212",
                  }}
                  textAlign="right"
                >
                  <Button
                    type="submit"
                    color={"black"}
                    border={"1px solid #001B40"}
                    bg={"none"}
                    _focus={{
                      shadow: "",
                    }}
                    fontWeight="md"
                  >
                    Save
                  </Button>
                </Box>
              </chakra.form>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Divider
          my="5"
          borderColor="black.300"
          _dark={{
            borderColor: "whiteAlpha.300",
          }}
          visibility={{
            base: "hidden",
            sm: "visible",
          }}
        />

        <Box mt={[10, 0]}>
          <SimpleGrid
            display={{
              base: "initial",
              md: "grid",
            }}
            columns={{
              md: 3,
            }}
            spacing={{
              md: 6,
            }}
          >
            <GridItem
              colSpan={{
                md: 1,
              }}
            >
              <Box px={[4, 0]}>
                <Heading
                  fontSize="2xl"
                  fontWeight="semibold"
                  lineHeight="6"
                  color={"#001B40"}
                  fontFamily={"Raleway"}
                  _dark={{
                    color: "blue",
                  }}
                >
                  Notifications
                </Heading>
                <Text
                  mt={1}
                  fontSize="sm"
                  color="black.600"
                  _dark={{
                    color: "black.400",
                  }}
                >
                  Decide which communications you'd like to receive and how.
                </Text>
              </Box>
            </GridItem>
            <GridItem
              mt={[5, null, 0]}
              colSpan={{
                md: 2,
              }}
              border={"1px solid #F8EEEC"}
            >
              <chakra.form
                method="POST"
                shadow="base"
                rounded={[null, "md"]}
                overflow={{
                  sm: "hidden",
                }}
              >
                <Stack
                  px={4}
                  py={5}
                  p={[null, 6]}
                  bg="white"
                  _dark={{
                    bg: "#141517",
                  }}
                  spacing={6}
                >
                  <chakra.fieldset>
                    <Box
                      as="legend"
                      fontSize="md"
                      color="black.900"
                      _dark={{
                        color: "black.50",
                      }}
                    >
                      By Email
                    </Box>
                    <Stack mt={4} spacing={4}>
                      <Flex alignItems="start">
                        <Flex alignItems="center" h={5}>
                          <Checkbox
                            color={"black"}
                            borderColor="brand.700"
                            _dark={{
                              borderColor: "black.50",
                            }}
                            id="comments"
                            rounded="md"
                          />
                        </Flex>
                        <Box ml={3} fontSize="sm">
                          <chakra.label
                            htmlFor="comments"
                            fontWeight="md"
                            color="black.700"
                            _dark={{
                              color: "black.50",
                            }}
                          >
                            Comments
                          </chakra.label>
                          <Text
                            color="black.500"
                            _dark={{
                              color: "black.400",
                            }}
                          >
                            Get notified when someones posts a comment on a
                            posting.
                          </Text>
                        </Box>
                      </Flex>
                      <Flex alignItems="start">
                        <Flex alignItems="center" h={5}>
                          <Checkbox
                            color={"black"}
                            borderColor="brand.700"
                            _dark={{
                              borderColor: "black.50",
                            }}
                            id="candidates"
                            rounded="md"
                          />
                        </Flex>
                        <Box ml={3} fontSize="sm">
                          <chakra.label
                            htmlFor="candidates"
                            fontWeight="md"
                            color="black.700"
                            _dark={{
                              color: "black.50",
                            }}
                          >
                            Candidates
                          </chakra.label>
                          <Text
                            color="black.500"
                            _dark={{
                              color: "black.400",
                            }}
                          >
                            Get notified when a candidate applies for a job.
                          </Text>
                        </Box>
                      </Flex>
                      <Flex alignItems="start">
                        <Flex alignItems="center" h={5}>
                          <Checkbox
                            color={"black"}
                            borderColor="brand.700"
                            _dark={{
                              borderColor: "black.50",
                            }}
                            id="offers"
                            rounded="md"
                          />
                        </Flex>
                        <Box ml={3} fontSize="sm">
                          <chakra.label
                            htmlFor="offers"
                            fontWeight="md"
                            color="black.700"
                            _dark={{
                              color: "black.50",
                            }}
                          >
                            Offers
                          </chakra.label>
                          <Text
                            color="black.500"
                            _dark={{
                              color: "black.400",
                            }}
                          >
                            Get notified when a candidate accepts or rejects an
                            offer.
                          </Text>
                        </Box>
                      </Flex>
                    </Stack>
                  </chakra.fieldset>
                  <chakra.fieldset>
                    <Box
                      as="legend"
                      fontSize="md"
                      color="black.900"
                      _dark={{
                        color: "black.50",
                      }}
                    >
                      Push Notifications
                      <Text
                        fontSize="sm"
                        color="black.500"
                        _dark={{
                          color: "black.400",
                        }}
                      >
                        These are delivered via SMS to your mobile phone.
                      </Text>
                    </Box>
                    <RadioGroup
                      fontSize="sm"
                      color="black"
                      _dark={{
                        color: "black.50",
                        borderColor: "black.50",
                      }}
                      mt={4}
                      defaultValue="1"
                      borderColor="brand.700"
                    >
                      <Stack spacing={4}>
                        <Radio spacing={3} value="1">
                          Everything
                        </Radio>
                        <Radio spacing={3} value="2">
                          Same as email
                        </Radio>
                        <Radio spacing={3} value="3">
                          No push notifications
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </chakra.fieldset>
                </Stack>
                <Box
                  px={{
                    base: 4,
                    sm: 6,
                  }}
                  py={3}
                  bg="black.50"
                  _dark={{
                    bg: "#121212",
                  }}
                  textAlign="right"
                >
                  <Button
                    type="submit"
                    colorScheme="brand"
                    _focus={{
                      shadow: "",
                    }}
                    fontWeight="md"
                  >
                    Save
                  </Button>
                </Box>
              </chakra.form>
            </GridItem>
          </SimpleGrid>
        </Box>
        <Button
          ml={"90%"}
          mt={"4"}
          borderRadius={"5"}
          _hover={{
            border: "1px solid #112136",
          }}
          onClick={() => {
            // Create an example promise that resolves in 5s
            const examplePromise = new Promise((resolve, reject) => {
              setTimeout(() => resolve(200), 5000);
            });

            // Will display the loading toast until the promise is either resolved
            // or rejected.
            toast.promise(examplePromise, {
              success: {
                title: "Registered Successfully",
                description: "Welcome to Healthease",
              },
              error: {
                title: "Submission ",
                description: "Something wrong",
              },
              loading: {
                title: "Submitting your data...",
                description: "Please wait",
              },
            });
          }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Register;
