import React, { useState } from "react";
import { Box, Button, Input, VStack, HStack, Text, Container, Heading } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const Index = () => {
  const [setA, setSetA] = useState([]);
  const [setB, setSetB] = useState([]);
  const [setC, setSetC] = useState([]);

  // Converts a comma-separated string into an array of elements
  const parseSet = (input) => {
    return input.split(",").map((element) => element.trim());
  };

  // Calculates A\(B u C)
  const differenceUnion = () => {
    const unionBC = [...new Set([...setB, ...setC])]; // B u C
    return setA.filter((element) => !unionBC.includes(element)); // A\(B u C)
  };

  // Calculates (A\B) n (A\C)
  const intersectionDifference = () => {
    const differenceAB = setA.filter((element) => !setB.includes(element)); // A\B
    const differenceAC = setA.filter((element) => !setC.includes(element)); // A\C
    return differenceAB.filter((element) => differenceAC.includes(element)); // (A\B) n (A\C)
  };

  return (
    <Container>
      <VStack spacing={4} align="stretch" mt={8}>
        <Heading textAlign="center">Set Operation Visualizer</Heading>
        <HStack>
          <Input placeholder="Set A (comma-separated)" onChange={(e) => setSetA(parseSet(e.target.value))} />
          <Input placeholder="Set B (comma-separated)" onChange={(e) => setSetB(parseSet(e.target.value))} />
          <Input placeholder="Set C (comma-separated)" onChange={(e) => setSetC(parseSet(e.target.value))} />
        </HStack>
        <Button leftIcon={<FaCheck />} colorScheme="green" onClick={() => {}}>
          Calculate
        </Button>
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Text fontWeight="semibold">A\(B u C):</Text>
          <Text>{differenceUnion().join(", ")}</Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Text fontWeight="semibold">(A\B) n (A\C):</Text>
          <Text>{intersectionDifference().join(", ")}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
