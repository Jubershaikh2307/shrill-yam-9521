import { Box,Popover,Text,Select,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor, } from '@chakra-ui/react'
export function Todayspaper(){
    return(
    
       
    <Box
    fontSize={"12px"}
    fontWeight="bold"
      tabIndex='0'
      role='button'
      aria-label='Some box'
      p={3}
    //   w='120px'
      bg='white'
      children="TODAY'S PAPER"
      color='gray.500'
      />
      
    )
    
}
export function News(){
    return(
    
        <Box><Popover>
  <PopoverTrigger>
    <Box
    fontSize={"12px"}
    fontWeight="bold"
      tabIndex='0'
      role='button'
      aria-label='Some box'
      p={3}
    //   w='120px'
      bg='white'
      children="NEWS"
      color='gray.500'
      marginLeft={"-30px"}
    />
  </PopoverTrigger>
  <PopoverContent bg='while' color='black' w="150px">
    {/* <PopoverHeader fontWeight='semibold'>Customization</PopoverHeader> */}
    <PopoverArrow bg='white' />
    {/* <PopoverCloseButton bg='white' /> */}
    <PopoverBody>
    
      <Text as="p">INDIA</Text>
      <Text as="p">WORLD</Text>
      <Text as="p">STATES</Text>
      <Text as="p">CITIES</Text>
    </PopoverBody>
  </PopoverContent>
</Popover></Box>
    )
    
}
export function Opinion(){
    return(
    
        <Box><Popover>
  <PopoverTrigger>
    <Box
    fontSize={"12px"}
    fontWeight="bold"
      tabIndex='0'
      role='button'
      aria-label='Some box'
      p={3}
    //   w='120px'
      bg='white'
      children="OPINION"
      color='gray.500'
    />
  </PopoverTrigger>
  <PopoverContent bg='while' color='black' w="150px">
    {/* <PopoverHeader fontWeight='semibold'>Customization</PopoverHeader> */}
    <PopoverArrow bg='white' />
    {/* <PopoverCloseButton bg='white' /> */}
    <PopoverBody>
    
      <Text as="p">CARTOONS</Text>
      <Text as="p">COLUMNS</Text>
      <Text as="p">EDITORIAL</Text>
      <Text as="p">INTERVIEW</Text>
      <Text as="p">LEAD</Text>
      <Text as="p">READER'S EDITOR</Text>
      <Text as="p">COMMENT</Text>
      <Text as="p">OPEN PAGE</Text>
      <Text as="p">LETTERS</Text>
    </PopoverBody>
  </PopoverContent>
</Popover></Box>
    )
    
}
export function Business(){
    return(
    
        <Box><Popover>
  <PopoverTrigger>
    <Box
    fontSize={"12px"}
    fontWeight="bold"
      tabIndex='0'
      role='button'
      aria-label='Some box'
      p={3}
    //   w='120px'
      bg='white'
      children="BUSINESS"
      color='gray.500'
    />
  </PopoverTrigger>
  <PopoverContent bg='while' color='black' w="150px">
    {/* <PopoverHeader fontWeight='semibold'>Customization</PopoverHeader> */}
    <PopoverArrow bg='white' />
    {/* <PopoverCloseButton bg='white' /> */}
    <PopoverBody>
    
      <Text as="p">AGRI-BUSINESS</Text>
      <Text as="p">INDUSTRY</Text>
      <Text as="p">ECONOMY</Text>
      <Text as="p">MARKETS</Text>
      <Text as="p">BUDGET 2022</Text>
      <Text as="p">STOCK QUOTES</Text>
    </PopoverBody>
  </PopoverContent>
</Popover></Box>
    )
    
}
export function Sport(){
    return(
    
        <Box><Popover>
  <PopoverTrigger>
    <Box
    fontSize={"12px"}
    fontWeight="bold"
      tabIndex='0'
      role='button'
      aria-label='Some box'
      p={3}
    //   w='120px'
      bg='white'
      children="SPORT"
      color='gray.500'
    />
  </PopoverTrigger>
  <PopoverContent bg='while' color='black' w="150px">
    {/* <PopoverHeader fontWeight='semibold'>Customization</PopoverHeader> */}
    <PopoverArrow bg='white' />
    {/* <PopoverCloseButton bg='white' /> */}
    <PopoverBody>
    
      <Text as="p">CRICKET</Text>
      <Text as="p">FOOTBALL</Text>
      <Text as="p">HOCKEY</Text>
      <Text as="p">TENNIS</Text>
      <Text as="p">ATHELETICS</Text>
      <Text as="p">MOTOSPORT</Text>
      <Text as="p">RACES</Text>
      <Text as="p">OTHER SPORTS</Text>
      
    </PopoverBody>
  </PopoverContent>
</Popover></Box>
    )
    
}
export function Entertainment(){
  return(
  
      <Box><Popover>
<PopoverTrigger>
  <Box
  fontSize={"12px"}
  fontWeight="bold"
    tabIndex='0'
    role='button'
    aria-label='Some box'
    p={3}
  //   w='120px'
    bg='white'
    children="ENTERTAINMENT"
    color='gray.500'
  />
</PopoverTrigger>
<PopoverContent bg='while' color='black' w="150px">
  {/* <PopoverHeader fontWeight='semibold'>Customization</PopoverHeader> */}
  <PopoverArrow bg='white' />
  {/* <PopoverCloseButton bg='white' /> */}
  <PopoverBody>
  
    <Text as="p">ART</Text>
    <Text as="p">DANCE</Text>
    <Text as="p">MOVIES</Text>
    <Text as="p">MUSIC</Text>
    <Text as="p">REVIEWS</Text>
    <Text as="p">THEATRE</Text>
  </PopoverBody>
</PopoverContent>
</Popover></Box>
  )
  
}
export function Crossword(){
  return(
  
      
  <Box
    fontSize={"12px"}
    fontWeight="bold"
    tabIndex='0'
    role='button'
    aria-label='Some box'
    p={3}
    // w='120px'
    bg='white'
    children="CROSSWORD+"
    color='gray.500'
  />

  )
  
}
export function Science(){
  return(
  
      
  <Box
  fontSize={"12px"}
    fontWeight="bold"
    tabIndex='0'
    role='button'
    aria-label='Some box'
    p={3}
  //   w='120px'
    bg='white'
    children="SCIENCE"
    color='gray.500'
  />

  )
  
}
