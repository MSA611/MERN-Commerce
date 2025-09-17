import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import ProductCard from "../Components/ProductCard";
import ProductStore from "../zustand";
import { useEffect, useState } from "react";

const HomePage = () => {
  const { fetchProduct, product } = ProductStore();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <Box>
      <VStack>
        <Heading as="h1" size="2xl" mb={"6"}>
          Your Products
        </Heading>
      </VStack>
      <Box p={"6"} w={"full"}>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
        >
          {product.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default HomePage;
