import {Box,Button,Heading, Text,Image} from "@chakra-ui/react"
import "./Gettrial.css"
export function Gettrial(){
    return <Box h="670px"display="flex" bg="#133B5A">
        <Box w="50%" border="1px green">
            <Heading color="white" fontSize="34px" mt="50px" mb="10px" fontFamily="TundraWeb-MediumW03-Regular">Start your 14-day Free Trial!</Heading>
            <Heading color="white" fontSize="24px" mb="40px" fontFamily="TundraWeb-MediumW03-Regular" ml="-150px">or <Text as="span" textDecoration="underline" fontStyle="italic">purchase a subscription</Text></Heading>
            <Heading color="white" fontSize="22px" fontFamily="Helvetica,Arial,sans-serif" ml="-138px">Why try The Hindu Digital?</Heading>
            <Heading color="white" fontSize="14px" fontFamily="Fira Sans" mt="10px" ml="-138px">{">"} No Limits-read as many articles as you want</Heading>
            <Heading color="white" fontSize="14px" fontFamily="Fira Sans" mt="10px" ml="-60px">{">"} Live updates-access them anytime on web and mobile app</Heading>
            <Heading color="white" fontSize="14px" fontFamily="Fira Sans" mt="10px" ml="-53px">{">"} Premium content-enjoy all our subscriber-exclusive articles</Heading>
            <Heading color="white" fontSize="14px" fontFamily="Fira Sans" mt="10px" ml="-147px">{">"} No disruptions-bid goodbye to intrusive ads</Heading>
            <Heading color="white" fontSize="14px" fontFamily="Fira Sans" mt="10px" ml="-108px">{">"} No delays-enjoy a smooth and seamless experience</Heading>
            <Button bg="yellow" color="#133B5A" ml="-100px" mt="45px" padding="30px" fontFamily="TundraWeb-BoldW03-Regular" fontWeight="bold" fontSize="24px" >Start your free trial today</Button>
            <Heading fontFamily="Helvetica,Arial,sans-serif" fontSize="24px" color="white" mt="10px" ml="-245px" fontWeight="regular">No card needed.</Heading>
            <Heading color="white" fontSize="22px" fontFamily="Helvetica,Arial,sans-serif" mt="20px" ml="32px">Subscribers get all this and more,including:</Heading>
            <Heading color="white" fontSize="14px" fontFamily="Fira Sans" mt="10px" ml="-228px">{">"} Invitation to exclusive webinars</Heading>
            <Heading color="white" fontSize="14px" fontFamily="Fira Sans" mt="10px" ml="-286px">{">"} Curated daily updates</Heading>
            <Heading color="white" fontSize="10px" fontFamily="Helvetica,Arial,sans-serif" mt="25px" ml="56px">*Available only to new customers who have not avaited a free trial or purchased a subscription before.</Heading>
        </Box>
        <Box w="50%" border="1px red"><Box h="72%" w="65%" border="1px black" mt="55px" ml="80px"><Image src='https://campaign.thehindubusinessline.com/wp-content/uploads/2021/09/Sustenance-Post-1.gif' alt='Getrial' /></Box></Box>
    </Box>
}