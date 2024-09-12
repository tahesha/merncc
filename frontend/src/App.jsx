import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <Box
            minH="100vh"
            display="flex"
            flexDirection="column"
            bg={useColorModeValue("gray.100", "gray.900")}
        >
            <Navbar />
            <Box flex="1">
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/create' element={<CreatePage />} />
                </Routes>
            </Box>
            <Footer />
        </Box>
    );
}

export default App;
