import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router";
import Nav from "./Components/Nav";
import HomePage from "./Pages/HomePage.jsx";
import CreatePage from "./Pages/CreatePage.jsx";

const App = () => {
  return (
    <Box minH={"100vh"}>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
};

export default App;
