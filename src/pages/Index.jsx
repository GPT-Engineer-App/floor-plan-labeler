import React, { useState } from "react";
import { Container, VStack, Input, Button, Box, Image, Text } from "@chakra-ui/react";
import { Rnd } from "react-rnd";

const Index = () => {
  const [image, setImage] = useState(null);
  const [labels, setLabels] = useState([]);
  const [newLabel, setNewLabel] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAddLabel = () => {
    setLabels([...labels, { text: newLabel, x: 50, y: 50 }]);
    setNewLabel("");
  };

  const handleLabelChange = (index, data) => {
    const updatedLabels = labels.map((label, i) => (i === index ? { ...label, ...data } : label));
    setLabels(updatedLabels);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && (
          <Box position="relative" width="100%" height="auto" border="1px solid #ccc">
            <Image src={image} alt="Floor Plan" width="100%" />
            {labels.map((label, index) => (
              <Rnd
                key={index}
                default={{
                  x: label.x,
                  y: label.y,
                  width: 100,
                  height: 50,
                }}
                bounds="parent"
                onDragStop={(e, d) => handleLabelChange(index, { x: d.x, y: d.y })}
              >
                <Box bg="black" color="white" p={2} borderRadius="md">
                  {label.text}
                </Box>
              </Rnd>
            ))}
          </Box>
        )}
        <Input
          placeholder="Enter label text"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
        />
        <Button onClick={handleAddLabel} colorScheme="blue">
          Add Label
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;