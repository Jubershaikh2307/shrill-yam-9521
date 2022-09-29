import {
  HStack,
  Menu,
  MenuButton,
  IconButton,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

export default function NavBar() {
  let font = "12px";

  // Text={
  //     fontsize:"md"
  // }

  return (
    <HStack w="70%" m="auto">
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          aria-label="Menu"
          variant="outline"
        />
      </Menu>
      <Text fontFamily="Fira Sans" fontSize={font}>
        <Link>TODAY'S PAPER</Link>
      </Text>
      <Text fontSize={font}>
        <Link>NEWS</Link>
      </Text>
      <Text fontSize={font}>
        <Link>OPINION</Link>
      </Text>
      <Text fontSize={font}>
        <Link>BUSINESS</Link>
      </Text>
      <Text fontSize={font}>
        <Link>SPORT</Link>
      </Text>
      <Text fontSize={font}>
        <Link>ENTERTAINMENT</Link>
      </Text>
      <Text fontSize={font}>
        <Link>CROSSWORD + SCIENCE</Link>
      </Text>
      <Button fontSize={font} color="white" colorScheme="#00419B" bg="#00419B">
        <Link>GET TRIAL</Link>
      </Button>
      <Button
        fontSize={font}
        bg="#FFC000"
        _hover={{
          background: "#00419B",
          color: "white",
        }}
      >
        SUBSCRIBE NOW
      </Button>
      <Button
        variant="outline"
        colorScheme="teal"
        _hover={{
          background: "#00419B",
          color: "white",
        }}
        color="#00419B"
        fontSize={font}
      >
        LOG IN
      </Button>
    </HStack>
  );
}
