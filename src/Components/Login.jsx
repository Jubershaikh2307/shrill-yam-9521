import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Text,
    Box,
    Image,
    Checkbox
  } from '@chakra-ui/react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {getData,postData} from "./Api"
export default function Login() {
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [number,setNumber]=useState("")
  const navigate=useNavigate()
  return (
    <>
      <Button onClick={modal1.onOpen} color="#133B5A" border="1px solid #133B5A">Log In</Button>

      <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          
          <ModalCloseButton />
          <ModalBody w="80%" m="auto">
            <a href="https://mail.google.com"><Button w="100%" border="1px solid gray" borderRadius="0px" bg="white" mt="20px"><Box w="15px" h="15px" mr="15px"><Image h="100%" w="100%"src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="google"/></Box>
            Continue with Google</Button></a>
            <a href="https://www.apple.com"><Button w="100%" border="1px solid gray" borderRadius="0px" bg="white" mt="10px" mb="70px"><Box w="15px" h="15px" mr="15px"><Image h="100%" w="100%"src="https://cdn.icon-icons.com/icons2/936/PNG/512/apple-logo_icon-icons.com_73680.png" alt="google"/></Box>Continue with Apple</Button></a>
            {/* <Lorem count={2} /> */}
            <FormControl>
              <Input w="100%" ref={initialRef} placeholder='Enter email address and hit enter' mb="15px" onChange={(e)=>setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
              <Input w="100%" ref={initialRef} placeholder='password' mb="50px" onChange={(e)=>setPassword(e.target.value)} />
            </FormControl>
            <Button w="100%" borderRadius="0px" bg="#133B5A" mt="10px" color="white" mb="15px" onClick={()=>{
              getData(email,password)
              .then((res)=>{
                if(res.data.length==0)
                {
                  modal2.onOpen()
                }
                else{
                  // navigate("/")
                  modal1.onClose()
                }
              })
            }}>Next</Button>
            <Text textAlign="center" color="gray.600" fontSize="17px">Don't have any account?</Text>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3} onClick={modal1.onClose}>
              Close
            </Button> */}
            
            <Button onClick={modal2.onOpen} variant='ghost' m="auto" mt="-20px" fontSize="17px" color="gray.600">Sign up {">"}</Button>
            <Modal isOpen={modal2.isOpen} onClose={modal2.onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody w="80%" m="auto">
          <a href="https://mail.google.com"><Button w="100%" border="1px solid gray" borderRadius="0px" bg="white" mt="20px"><Box w="15px" h="15px" mr="15px"><Image h="100%" w="100%"src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="google"/></Box>
            Continue with Google</Button></a>
            <a href="https://www.apple.com"><Button w="100%" border="1px solid gray" borderRadius="0px" bg="white" mt="10px" mb="70px"><Box w="15px" h="15px" mr="15px"><Image h="100%" w="100%"src="https://cdn.icon-icons.com/icons2/936/PNG/512/apple-logo_icon-icons.com_73680.png" alt="google"/></Box>Continue with Apple</Button></a>
            {/* <Lorem count={2} /> */}
            <FormControl>
              <Input w="100%" ref={initialRef} placeholder='Enter email address and hit enter' mb="15px" onChange={(e)=>setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
              <Input w="100%" ref={initialRef} placeholder='password' mb="15px" onChange={(e)=>setPassword(e.target.value)}/>
            </FormControl>
            <FormControl>
              <Input w="100%" ref={initialRef} placeholder='enter your 10 digit mobile number' mb="20px" onChange={(e)=>setNumber(e.target.value)}/>
            </FormControl>
            <Checkbox color="gray" fontSize="15px" defaultChecked mb="15px">I'd like to receive updates and offers from THG via email and messages</Checkbox>
            <br/>
            <Checkbox color="gray" fontSize="15px" defaultChecked mb="30px">Contact me via Whatsapp</Checkbox>
            <Button w="100%" borderRadius="0px" bg="#133B5A" mt="10px" color="white" mb="15px" onClick={()=>{
              postData(email,password,number)
              .then((res)=>{
                modal2.onClose();
                modal1.onClose();
                navigate("/")
              })
            }}>Sign up</Button>
            <Text textAlign="center" color="gray.600" fontSize="17px">Already have an account?</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}  onClick={()=>{
              modal2.onClose();
              modal1.onClose();
            }}>
              Close
            </Button>
            <Button m="auto" mt="-20px" onClick={()=>{
              modal2.onClose();
              // modal1.onClose();
            }} variant='ghost'>Log In {">"}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}