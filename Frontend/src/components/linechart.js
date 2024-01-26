// import React from "react";
// import ReactApexChart from "react-apexcharts";
// import { lineChartData , lineChartOptions } from "../variables/data";

// class LineChart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       chartData: [],
//       chartOptions: {},
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       chartData: lineChartData,
//       chartOptions: lineChartOptions,
//     });
//   }

//   render() {
//     return (
//       <ReactApexChart
//         options={this.state.chartOptions}
//         series={this.state.chartData}
//         type="area"
//         width="100%"
//         height="40%"
//       />
//     );
//   }
// }

// export default LineChart;






import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { lineChartData, lineChartOptions } from "../variables/data";
import { Box } from "@chakra-ui/react";

const LineChart = () => {
  const [chartData, setChartData] = useState([]);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData(lineChartData);
    setChartOptions(lineChartOptions);
  }, []);

  return (
    <Box width= "100" height="80">
    <ReactApexChart
      options={chartOptions}
      series={chartData}
      type="area"
      width="100%"
      height="100%"
    />
    </Box>
  );
};

export default LineChart;

