import {
  Box,
  Button,
  Heading,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import ProductStore from "../zustand";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    img: "",
  });

  const { createProduct } = ProductStore();

  const toast = useToast();

  const post = async () => {
    const { success, message } = await createProduct(newProduct);
    if (success) {
      toast({
        status: "success",
        description: message,
        duration: 3000,
      });
      setNewProduct({ name: "", price: "", img: "" });
    } else {
      toast({
        status: "error",
        description: message,
        duration: 3000,
      });
    }
  };

  return (
    <Box>
      <VStack p={6}>
        <Heading mb={"6"} as="h2" size="3xl" noOfLines={1}>
          Create Product
        </Heading>
        <VStack p={"6"} w={"full"} spacing={"6"}>
          <Input
            placeholder="Enter Name..."
            size="lg"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />

          <Input
            placeholder="Enter Price..."
            type="text"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            size="lg"
          />

          <Input
            placeholder="Enter img..."
            size="lg"
            value={newProduct.img}
            onChange={(e) =>
              setNewProduct({ ...newProduct, img: e.target.value })
            }
          />

          <Button onClick={post} w={"full"} fontSize={22} colorScheme="blue">
            Create Product Now
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default CreatePage;
