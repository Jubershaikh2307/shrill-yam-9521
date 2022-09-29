import { Spacer, Center, HStack } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

export default function Socialbar() {
  return (
    <HStack margin="auto" w="70%">
      {/* <Center> */}
      <Center>
        <Avatar size="sm" name="Facebook" src="https://bit.ly/dan-abramov" />
      </Center>
      <Center>
        <Avatar size="sm" name="Facebook" src="https://bit.ly/dan-abramov" />
      </Center>
      <Center>
        <Avatar size="sm" name="Facebook" src="https://bit.ly/dan-abramov" />
      </Center>
      <Center>
        <Avatar size="sm" name="Facebook" src="https://bit.ly/dan-abramov" />
      </Center>
      <Center>
        <Avatar size="sm" name="Facebook" src="https://bit.ly/dan-abramov" />
      </Center>
      <Center>
        <Avatar size="sm" name="Facebook" src="https://bit.ly/dan-abramov" />
      </Center>
      <Center>
        <Avatar size="sm" name="Facebook" src="https://bit.ly/dan-abramov" />
      </Center>
      <Center>
        <Avatar size="sm" name="Facebook" src="https://bit.ly/dan-abramov" />
      </Center>
      <Center>
        <Avatar size="sm" name="Facebook" src="https://bit.ly/dan-abramov" />
      </Center>
      <Spacer />
      <Input w="250px" placeholder="Search Here" />
      <Avatar size="sm" marginLeft="10px" name="ePaper" src="https://bit.ly/dan-abramov" />
      {/* </Center> */}
    </HStack>
    // <Stack align="stretch" bg="red.100">
    //   <HStack>
    //     <Avatar size="xs" name="Facebook" src="https://bit.ly/dan-abramov" />
    //     <Avatar size="xs" name="Tweeter" src="https://bit.ly/dan-abramov" />
    //     <Avatar size="xs" name="Linkdin" src="https://bit.ly/dan-abramov" />
    //     <Avatar size="xs" name="Instagram" src="https://bit.ly/dan-abramov" />
    //     <Avatar size="xs" name="Telegram" src="https://bit.ly/dan-abramov" />
    //     <Avatar size="xs" name="Email" src="https://bit.ly/dan-abramov" />
    //     <Avatar size="xs" name="Mobile" src="https://bit.ly/dan-abramov" />
    //     <Avatar size="xs" name="ePaper" src="https://bit.ly/dan-abramov" />
    //     <Avatar size="xs" name="ePaper" src="https://bit.ly/dan-abramov" />

    //     <HStack spacing="24px">
    // <Input placeholder="Search Here" />
    // <Avatar size="xs" name="ePaper" src="https://bit.ly/dan-abramov" />
    //     </HStack>
    //   </HStack>
    // </Stack>
  );
}
