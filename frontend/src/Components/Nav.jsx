import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router";
import { GrAdd } from "react-icons/gr";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box w={"full"}>
      <Flex justifyContent={"space-around"} alignItems={"center"} w={"full"}>
        <Link to="/">
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            Welcome To Store
          </Text>
        </Link>
        <HStack>
          <Link to="/create">
            <Button colorScheme="blue">
              <GrAdd />
            </Button>
          </Link>
          <Button colorScheme="blue" onClick={toggleColorMode}>
            {colorMode === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Nav;
