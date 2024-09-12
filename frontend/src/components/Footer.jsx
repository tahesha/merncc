import { Box, Text, useColorModeValue } from "@chakra-ui/react";

function Footer() {
    return (
        <Box
            as="footer"
            py={4}
            textAlign="center"
            bg={useColorModeValue("gray.200", "gray.800")}
            color={useColorModeValue("gray.700", "gray.200")}
            position="relative"
            bottom={0}
            width="full"
        >
            <Text>&copy; {new Date().getFullYear()} Website Created By Tahesha Orji. All rights reserved.</Text>
        </Box>
    );
}

export default Footer;
