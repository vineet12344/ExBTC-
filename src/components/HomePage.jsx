import React from 'react';
import { keyframes } from '@chakra-ui/react';
import { Heading,Text,Box,Flex ,Button} from "@chakra-ui/react";


const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

function AnimatedBg() {
  return (
   
           <Flex
           bg={'black'}
        width={"100vw"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        
      >
        
        <Box         
          backdropBlur={"10%"}
          maxW={"2xl"}
          m={"0 auto"}
          background={"blueviolet"}
          padding={"100px"}
          border={"2px solid white"}
          borderRadius={"10px"}
          color={"white"}
        >
          <Heading mb={'10px'} as={"h1"} textAlign={"center"} mt={"30px"}>
            Welcome to ExBTC
          </Heading>
          <Text w={"fit-content"} fontFamily={"inherit"} fontSize={"large"}>
            Crypto Exchange made Easy! Now you can use BitCoin Everywhere!!
          </Text>
          <Flex align={'center'} justify={'center'}>
            <Button alignSelf={"center"} mt={"20px"} alignItems={"center"}>
              Get Started
            </Button>
          </Flex>
        </Box>
      </Flex>
  )
}

export default AnimatedBg;
