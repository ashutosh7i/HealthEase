// import React from "react";
// import { ChakraProvider } from "@chakra-ui/react";
// import Header from "./components/header";
// import Hero from "./components/hero";
// import Footer from "./components/footer";
// const App = () => {
//   return (
//     <ChakraProvider>
//       <Header />
//       <Hero />
//       <Footer />
//     </ChakraProvider>
//   );
// };

// App.js
import React from "react";
import { ChakraProvider, CSSReset, Box, extendTheme } from "@chakra-ui/react";
import DashBoard from "./components/dashboard";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";

import Register from "./components/register";

import PublicDashboard from "./components/PublicDashboard";

const theme = extendTheme(/* your theme configuration */);

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />

        <Route path="/dashboard" element={<DashBoard />} />

        <Route path="/register" element={<Register />} />

        <Route path="/publicdashboard" element={<PublicDashboard/>} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
