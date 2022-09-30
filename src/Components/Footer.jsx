import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box
  } from '@chakra-ui/react'
  import '../App.css';
export default function Footer(){
    return<Box w="100%">
        <TableContainer>
  <Table variant='unstyled'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr borderTop="1px solid black">
        <Th w="450px" borderRight="1px dashed black" color="blue.700">TRENDING TODAY</Th>
        <Th w="250px" borderRight="1px dashed black" color="blue.700">TRENDING TOPIC</Th>
        <Th color="blue.700">TRENDING ON OUR GROUP SITES</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr mb="-10" h="10">
        <Td borderRight="1px dashed black">In 2021, over 1.6 lakh Indians renounced citizenship</Td>
        <Td borderRight="1px dashed black">Human Interest</Td>
        <Td fontSize="13px" color="blue.500" fontWeight={"semibold"}>BUSINESSLINE</Td>
      </Tr>
      <Tr>
        <Td borderRight="1px dashed black">A train journey and two names to remember</Td>
        <Td>Haryana</Td>
      </Tr>
      <Tr>
        <Td borderRight="1px dashed black">Bangladesh praises Assam CM Himanta Biswa Sarma, invites him...</Td>
      </Tr>
      <Tr>
        <Td borderRight="1px dashed black">Haryana Police DSP run over by dumper truck at illegal mining...</Td>
      </Tr>
      <Tr>
        <Td borderRight="1px dashed black">SC grants interim bail to Alt News co-founder Mohammed Zubair</Td>
      </Tr>
    </Tbody>
    {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot> */}
  </Table>
</TableContainer>
    </Box>
}