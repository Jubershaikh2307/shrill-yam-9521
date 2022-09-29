import { HStack,Text } from "@chakra-ui/react";

export default function SubNavbar(){

    let font = "12px";

    return(
        <HStack w="70%" m="auto" spacing="3rem" fontSize={font}>
            <Text >TRENDING TODAY</Text>
            <Text>CORINAVIRUS</Text>
            <Text>RUSSIA-UKRAINE CRISIS</Text>
            <Text>BHARAT JODO YATRA</Text>
        </HStack>
    )
}