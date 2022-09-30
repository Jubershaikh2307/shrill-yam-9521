import { Flex, Box, Button } from "@chakra-ui/react";
import {
  Todayspaper,
  Opinion,
  Business,
  Sport,
  News,
  Entertainment,
  Science,
  Crossword,
} from "./Navcomp";
import Login from "./Login";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Box>
      <Flex w="100%" gap="10px" ml="-5px">
        <Todayspaper />
        <News />
        <Opinion />
        <Business />
        <Sport />
        <Entertainment />
        <Crossword />
        <Science />
        <Link to={"/gettrial"}>
          <Button bg="#133B5A" color="white" fontSize={"13px"}>
            Get Trial
          </Button>
        </Link>
        <Button bg="yellow" color="black" fontSize={"13px"}>
          Subscribe Now
        </Button>
        <Login />
      </Flex>
    </Box>
  );
}
