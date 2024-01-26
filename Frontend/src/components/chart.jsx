import React from "react";
import { Box, Center, ChakraProvider,Flex } from "@chakra-ui/react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line} from "react-chartjs-2";

const Chart = () => {

 return(
    <ChakraProvider>
        <Flex alignItems= "center" justifyContent= "center" gap= "20"
        my="7">
    <Box width="500px" height="300px">
        <Bar
        data={{
            labels: ["A","B","C","E","F","G"],
            datasets : [
                {
                    label : "SPO2",
                    data : [10,40,60,87,90,80],
                },
            ],
        }}
        
        
        />
    </Box>
    <Box width="500px" height="300px">
        <Line 
         data={{
            labels : ["A","B","C","D","E","F","G"],
            datasets : [{
                label : "Glucose",
                data: [200,234,757,234,234,234,234],
            },
        ],

         }}
        
        
        />
    </Box>
    </Flex>

    </ChakraProvider>
 );

};

export default Chart;