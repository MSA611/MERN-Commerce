import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import ProductStore from "../zustand";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { DeleteProduct, UpdateProduct } = ProductStore();
  const toast = useToast();

  const [data, setData] = useState(product);

  const Delete = async (id) => {
    const { success, message } = await DeleteProduct(id);
    if (success) {
      toast({
        description: message,
        status: "success",
        duration: 3000,
      });
    }
  };

  const put = async (p_id) => {
    const { success, message } = await UpdateProduct(p_id, data);
    if (success) {
      toast({
        description: message,
        status: "success",
        duration: 3000,
      });
      onClose();
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        maxW={"sm"}
        borderWidth={"1px"}
        borderColor={"blue.500"}
        borderRadius={"lg"}
        overflow={"hidden"}
      >
        <Image alt={product.name} src={product.img} />
        <Box p={"6"}>
          <Heading mt={"3.5"}>{product.name}</Heading>
          <Heading mt={"3.5"} as="h5" size="sm">
            Rs:{product.price}
          </Heading>
          <HStack mt={"3.5"}>
            <Button colorScheme="blue" onClick={onOpen}>
              Edit
            </Button>
            <Button colorScheme="red" onClick={() => Delete(product._id)}>
              Delete
            </Button>
          </HStack>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <ModalHeader>Update Product</ModalHeader>
            <ModalCloseButton />
            <VStack p={"2.5"}>
              <Input
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                size="md"
              />
              <Input
                value={data.price}
                onChange={(e) => setData({ ...data, price: e.target.value })}
                size="md"
              />
              <Input
                value={data.img}
                onChange={(e) => setData({ ...data, img: e.target.value })}
                size="md"
              />
            </VStack>
            <ModalFooter>
              <Button
                onClick={() => put(product._id)}
                colorScheme="blue"
                mr={3}
              >
                Update
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default ProductCard;
