import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Center,
  ChakraProvider,
  Flex,
  chakra,
  SimpleGrid,
  bg2,
  dataColor,
  bg,
  Stack,
  useColorMode,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
} from "@chakra-ui/react";



console.log(new Date());

function getDataFromQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  const Param1 = urlParams.get("name");
  const Param2 = urlParams.get("mobile");
  const Param3 = urlParams.get("datetime");
  const Param4 = urlParams.get("hr");
  const Param5 = urlParams.get("spo2");
  const Param6 = urlParams.get("gc");
   

  const parts = Param1 ? Param1.split(" ") : [];
  const Name =parts[0];
  const Surname =parts[1];
  const date = Param3.split("t")[0];
  const formattedDate = `${date.slice( 4)}/${date.slice(2, 4)}/${date.slice(0, 2)}`;

  const time = Param3.split("t")[1];
  const formattedTime = `${time.slice(0, 2)}:${time.slice(2)}`;

  return {
    date: formattedDate,
    time: formattedTime,
    name: Name,
    surname: Surname,
    mobile: Param2,
    hr: Param4,
    spo2: Param5,
    gc: Param6,
  };
}

export default function PublicDashboard() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setData(getDataFromQuery());
  }, []);

  return (
    <>
    <Heading></Heading>
      <Table variant="simple" w={"40vw"} mx={"auto"}
      border={"1px solid gray"}
      overflowX={"auto"}
      mb={"7"}>
        <Tbody>
            <Tr>
            <Th  border={"1px solid gray"}>Name</Th>
            <Td  border={"1px solid gray"}>{data.name}  {data.surname}</Td>
            </Tr>
          <Tr>
            <Th  border={"1px solid gray"}>Mobile</Th>
            <Td  border={"1px solid gray"}>{data.mobile}</Td>
          </Tr>
          <Tr>
            <Th  border={"1px solid gray"}>Date</Th>
            <Td Td border={"1px solid gray"}>{data.date}</Td>
          </Tr>
          <Tr>
            <Th  border={"1px solid gray"}>Time</Th>
            <Td  border={"1px solid gray"}>{data.time}</Td>
          </Tr>
          <Tr>
            <Th  border={"1px solid gray"}>HeartRate</Th>
            <Td  border={"1px solid gray"}>{data.hr}</Td>
          </Tr>
          <Tr>
            <Th  border={"1px solid gray"}>SpO2</Th>
            <Td  border={"1px solid gray"}>{data.spo2}</Td>
          </Tr>
          <Tr>
            <Th  border={"1px solid gray"}>Glucose</Th>
            <Td  border={"1px solid gray"}>{data.gc}</Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
}
