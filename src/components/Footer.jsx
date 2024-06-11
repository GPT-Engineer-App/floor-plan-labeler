import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="blue.500" color="white" py={4} textAlign="center" mt="auto">
      <Text>&copy; {new Date().getFullYear()} CVS Visualizer. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;