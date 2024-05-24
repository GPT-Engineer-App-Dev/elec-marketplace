import { Box, Button, Container, Flex, Heading, HStack, Image, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justify="space-between" align="center">
        <Heading size="md">ElectroShop</Heading>
        <HStack spacing={8}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="blue.600" color="white" py={20} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="teal" size="lg">Shop Now</Button>
      </Box>

      {/* Featured Products Section */}
      <Box as="section" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={10}>Featured Products</Heading>
        <Flex wrap="wrap" justify="center" spacing={10}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/150" alt="Product 1" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>Product 1</Heading>
              <Text>$299.99</Text>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/150" alt="Product 2" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>Product 2</Heading>
              <Text>$399.99</Text>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/150" alt="Product 3" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>Product 3</Heading>
              <Text>$499.99</Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* About Us Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={10}>About Us</Heading>
        <Container maxW="container.md">
          <Text fontSize="lg">
            ElectroShop is a leading retailer of electronic products, offering a wide range of gadgets and devices to meet all your tech needs. Our mission is to provide high-quality products at competitive prices, with exceptional customer service.
          </Text>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box as="section" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={10}>Contact Us</Heading>
        <Container maxW="container.md">
          <VStack spacing={4}>
            <Input placeholder="Your Name" size="lg" />
            <Input placeholder="Your Email" size="lg" />
            <Textarea placeholder="Your Message" size="lg" />
            <Button colorScheme="teal" size="lg">Send Message</Button>
          </VStack>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;