import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={2}>
      <Flex align="center">
        <Heading as="h1" size="lg" color="white">
          CVS Visualizer
        </Heading>
        <Spacer />
        <Button as={Link} to="/" colorScheme="teal" variant="ghost">
          Home
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;