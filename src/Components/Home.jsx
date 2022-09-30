import {Box,Image,Heading,Text} from "@chakra-ui/react"
import Logo from "./Logo"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useState } from "react"
import { useEffect } from "react"
import {Link} from "react-router-dom"
export default function Home(){
    const [data,setData]=useState([])
    async function getData(){
        let res= await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=0a3c3a373a274287bc52b85f679828b8`)
        let data=await res.json();
        setData(data.articles)
    }
    // let [sample,setSample]=useState(1)
    // function getData(){
    // fetch()
    // .then((res)=>res.json())
    // .then((res)=>setData(res.articles))
    // .catch((err)=>console.log(err))
    
    // }
    useEffect(()=>{
        // setTimeout(getData(),1000)
        getData()
        
    },[])
    // window.onbeforeunload=()=>{
    //     localStorage.setItem("sample",JSON.stringify(sample))
    // }
    // window.onload=()=>{
    //     let x=JSON.parse(localStorage.getItem("sample"))
    //     setSample(x)
    //     sample++
    // }
    console.log(data)
    // console.log(data[0].urlToImage)
    return<Box display="flex">
        <Box w="12%" h="640px" border="1px red" position="sticky" top="0">
        <a href="https://www.amazon.in/"><Image h="100%" w="100%" src="https://tpc.googlesyndication.com/simgad/7649669636389231315" alt="1img"/></a>
        </Box>
        <Box w="76%">
            <Logo/>
            <Navbar/>
            <Box h="540px" w="97.5%" m="auto" marginBottom="40px" border="1px blue" display="flex" justifyContent="space-between">
                <Box h="100%" w="32%" border="1px violet">
                    <Box w="100%" h="73.6%" border="1px yellow" marginBottom="7%">
                        <Box w="100%" h="50%" border="1px purple">
                            <Image h="100%" w="100%" src="https://th-i.thgim.com/public/incoming/e8brbi/article65673877.ece/alternates/LANDSCAPE_320/80717_27_5_2022_18_56_47_2_PARTHACHATTERJEE2.JPG" alt="Mimg"/>
                        </Box>
                        <Box w="100%" h="50%" border="1px purple" bg="#133B5A" paddingBottom="10px">
                            <Heading color="white" fontFamily="TundraWeb" fontWeight="regular" textAlign="left" fontSize="24px">ED arrests West Bengal Minister Partha Chatterjee in school recruitment scam</Heading>
                            <Text color="white" fontFamily="Firasans" fontWeight="600" textAlign="left" fontSize="11px" mt="10px">Shiv Sahay Singh</Text>
                            <Text color="gray" fontFamily="TundraWeb" fontWeight="regular" textAlign="left" fontSize="14px" mt="10px">On Saturday morning ED officials arrested the TMC leader from his residence in south Kolkata after almost 24 hours of questioning</Text>
                        </Box>
                    </Box>
                    <Box w="100%" h="22.4%" border="1px brown" display="flex" justifyContent="space-between">
                        <Box w="37%" h="100%" border="1px black">
                        <Image h="100%" w="100%" src="https://th-i.thgim.com/public/incoming/akwygx/article65672243.ece/alternates/SQUARE_115/LEAD%20IMAGE_IMG_20220610_092516.jpg" alt="1img"/>
                        </Box>
                        <Box w="61%" h="100%" border="1px black">
                            <Text textAlign="left" color="red" fontSize="12px" fontFamily="Fira Sans">GROUND ZERO <Text color="#133B5A" as="span">OTHER STATE</Text></Text>
                            <Text textAlign="left" color="black" fontSize="16px" fontFamily="TundraWeb">Being Sarna: a fight to define tribal identity in Jharkhand</Text>
                        </Box>
                    </Box>
                </Box>
                <Box h="100%" w="32%" border="1px violet">
                    <Box h="22.4%" w="100%" border="1px black" mb="6%" display="flex" justifyContent="space-between">
                    <Box w="37%" h="100%" border="1px black">
                        <Image h="100%" w="100%" src="https://th-i.thgim.com/public/incoming/gij4t7/article65673876.ece/alternates/SQUARE_115/IMG_7406_copy.jpg" alt="1img"/>
                        </Box>
                        <Box w="61%" h="100%" border="1px black">
                            <Text textAlign="left" color="#133B5A" fontSize="12px" fontFamily="Fira Sans">OTHER STATES</Text>
                            <Text textAlign="left" color="black" fontSize="16px" fontFamily="TundraWeb">Rajasthan’s Bharatpur-based anti-mining seer who set himself on fire dies in Delhi</Text>
                        </Box>
                    </Box>
                    <Box h="22.4%" w="100%" border="1px black" mb="6%" display="flex" justifyContent="space-between">
                    <Box w="37%" h="100%" border="1px black">
                        <Image h="100%" w="100%" src="https://th-i.thgim.com/public/incoming/rxrgyp/article65673734.ece/alternates/SQUARE_115/IMG_Dinesh_Gunawardena_i_2_1_JCA2H8QD.jpg" alt="1img"/>
                        </Box>
                        <Box w="61%" h="100%" border="1px black">
                            <Text textAlign="left" color="#133B5A" fontSize="12px" fontFamily="Fira Sans">WORLD</Text>
                            <Text textAlign="left" color="black" fontSize="16px" fontFamily="TundraWeb">Sri Lanka crisis live updates | Human rights group urges Ranil Wickremesinghe not to use force on protesters</Text>
                        </Box>
                    </Box>
                    <Box h="22.4%" w="100%" border="1px black" mb="6%" display="flex" justifyContent="space-between">
                    <Box w="37%" h="100%" border="1px black">
                        <Image h="100%" w="100%" src="https://th-i.thgim.com/public/incoming/4dffd3/article65673775.ece/alternates/SQUARE_115/PTI06_23_2022_000038B.jpg" alt="1img"/>
                        </Box>
                        <Box w="61%" h="100%" border="1px black">
                            <Text textAlign="left" color="#133B5A" fontSize="12px" fontFamily="Fira Sans">INDIA</Text>
                            <Text textAlign="left" color="black" fontSize="16px" fontFamily="TundraWeb">BSF fires at Pakistani drone detected along IB in Jammu; search launched</Text>
                        </Box>
                    </Box>
                    <Box h="22.4%" w="100%" border="1px black" display="flex" justifyContent="space-between">
                    <Box w="37%" h="100%" border="1px black">
                        <Image h="100%" w="100%" src="https://th-i.thgim.com/public/incoming/ry01c1/article65673798.ece/alternates/SQUARE_115/Dabangg_22.jpg" alt="1img"/>
                        </Box>
                        <Box w="61%" h="100%" border="1px black">
                            <Text textAlign="left" color="#133B5A" fontSize="12px" fontFamily="Fira Sans">MUMBAI</Text>
                            <Text textAlign="left" color="black" fontSize="16px" fontFamily="TundraWeb">Salman Khan meets Mumbai top cop; applies for weapon license</Text>
                        </Box>
                    </Box>
                </Box>
                <Box h="100%" w="32%" border="1px violet">
                    <Box h="48%" w="100%" border="1px purple" mb="7%">
                    <a href="https://www.amazon.in/"><Image h="100%" w="100%" src="https://tpc.googlesyndication.com/simgad/16035701901677211158?" alt="1img"/></a>
                    </Box>
                    <Box h="48%" w="100%" border="1px purple">
                        <Box h="41%" w="100%" border="1px brown" mb="6%">
                        <Image h="100%" w="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6VOWzpopm13wQkNJ5Oiqv2vczm-ubLbbvA&usqp=CAU" alt="1img"/>
                        </Box>
                        <Box h="41%" w="100%" border="1px brown">
                        <a href="https://www.amazon.in/">
                        <Image h="100%" w="100%" src="https://tpc.googlesyndication.com/simgad/12340129004741262474" alt="1img"/></a>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer/>
        </Box>
        <Box w="12%" h="640px" border="1px green" position="sticky" top="0">
        <a href="https://www.amazon.in/"><Image h="100%" w="100%" src="https://tpc.googlesyndication.com/simgad/6000423311556170963" alt="1img"/></a>
        </Box>
    </Box>
}