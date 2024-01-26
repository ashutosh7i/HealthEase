import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Stack,
  VStack,
  Avatar,
  UnorderedList,
  ListItem,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

function DashBoard() {
  return (
    <>
      <Box
        w={["95%", "95%", "80%", "80%"]}
        mx={"2"}
        bg={"#F5F5F5"}
        m={"auto"}
        border={"2px solid #11448A"}
        borderRadius={"8"}
        colorScheme={"blue"}
      >
        <Flex
          justifyContent={"flex-start"}
          alignContent={"center"}
          spacing={"md"}
          wrap={"wrap"}
          p={"2"}
          direction={{ base: "column", md: "row" }}
        >
          <VStack
            gap={"1"}
            justify={"center"}
            align={"center"}
            w={["md", "sm"]}
            //   border={"1px solid red"}
            my={"7"}
          >
            <Avatar
              size="xl"
              name="Aditya Paliwal"
              src="https://avatars.githubusercontent.com/u/115174888?v=4"
            />

            <Heading fontSize={"md"} fontFamily={"Raleway"} lineHeight={"1"}>
              Aditya Paliwal
            </Heading>
            <Text fontSize={"sm"} fontFamily={"Raleway"}>
              adityapaliwal243@gmail.com
            </Text>
          </VStack>

          <Stack justify={"center"} align={"center"} my={"4"}>
            <Heading fontSize={"lg"} fontFamily={"Raleway"} lineHeight={"1"}>
              User Details :
            </Heading>
            <UnorderedList>
              <ListItem fontSize={"sm"}>
                <b>Name :</b> Aditya Paliwal
              </ListItem>
              <ListItem fontSize={"sm"}>
                <b>Age :</b> 20
              </ListItem>
              <ListItem fontSize={"sm"}>
                <b>Gender :</b> Male
              </ListItem>
            </UnorderedList>
          </Stack>

          <Stack justify={"center"} align={"center"} mx={"8"}>
            <Heading fontSize={"lg"} fontFamily={"Raleway"} lineHeight={"1"}>
              Graph Readings :
            </Heading>
            <UnorderedList>
              <ListItem fontSize={"sm"}>
                <b>BPM :</b> Aditya Paliwal
              </ListItem>
              <ListItem fontSize={"sm"}>
                <b>SPO2 :</b> 20
              </ListItem>
              <ListItem fontSize={"sm"}>
                <b>Glucose :</b> Male
              </ListItem>
            </UnorderedList>
          </Stack>
        </Flex>
      </Box>

      {/* here is the heading for chart section */}

      <Heading
        fontSize={"3xl"}
        fontFamily={"Raleway"}
        fontWeight={"bold"}
        lineHeight={"6"}
        color={"#11448A"}
        mx={"9"}
        mt={"20"}
      >
        <Text as="span" color="#000">
          Here are your
        </Text>{" "}
        Graph readings..... 📈
      </Heading>

      {/* Starting from here is the chart section */}

      <Box mt={"16"}>
        <Flex alignItems="center" justifyContent="center" gap="20" my="7">
          <Stack align={"center"} justify={"center"} gap={"10"}>
            <Box w={["60vw", "50vw"]}>
              <Line
                data={{
                  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                  datasets: [
                    {
                      label: "SPO2",
                      data: [10, 40, 60, 87, 90, 80],
                    },
                  ],
                }}
              />
            </Box>
            <Box w={["60vw", "50vw"]}>
              <Line
                data={{
                  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                  datasets: [
                    {
                      label: "Glucose",
                      data: [200, 234, 757, 234, 234, 234, 234],
                    },
                  ],
                }}
              />
            </Box>

            <Box w={["60vw", "50vw"]}>
              <Line
                data={{
                  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                  datasets: [
                    {
                      label: "BPM",
                      data: [200, 234, 757, 234, 234, 234, 234],
                    },
                  ],
                }}
              />
            </Box>
          </Stack>
        </Flex>

        <ButtonGroup
          display={"flex"}
          justifyContent={"flex-end"}
          gap={"2"}
          mx={"4"}
        >
          <Button variant={"ghost"}>Share</Button>
          <Button variant={"ghost"}>Export</Button>
        </ButtonGroup>
      </Box>
    </>
  );
}

export default DashBoard;
