import React from "react";
import {
  Heading,
  Text,
  Box,
  Flex,
  Button,
  flexbox,
  Center,
} from "@chakra-ui/react";
import Ripples from "react-ripples";
import walletconnect from "./walletconnect";



function HomePage() {
  return (
    <Flex
      direction={"column"}
      bg={"black"}
      width={"100vw"}
      height={"100vh"}
      justifyContent={"start"}
      alignItems={"center"}
    >
      <Box
        // backdropBlur={"10%"}
        // maxW={"2xl"}
        m={"0 auto"}
        // background={"blueviolet"}
        padding={"100px"}
        // border={"2px solid white"}
        // borderRadius={"10px"}
        color={"white"}
        // display={'fl'}
      >
        <Heading
          mb={"10px"}
          as={"h1"}
          textAlign={"center"}
          // mt={"30px"}
          fontSize={"150px"}
          display={"flex"}
          gap={"10px"}
        >
          Welcome to
          <Text
            background={"-webkit-linear-gradient(#8894d4, #4000ff)"}
            css={{
              background: "-webkit-linear-gradient(#8894d4, #4000ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              border: "blue.600",
            }}
          >
            ExBTC
          </Text>
        </Heading>
        <Box display={"flex"} gap={"40px"} flexDirection={"column"}>
          <Box h={"160px"} padding={"12px"}>
            <Text w={"fit-content"} fontFamily={"inherit"} fontSize={"x-large"}>
              Convert Bitcoin (BTC) to Wrapped Bitcoin (WBTC) seamlessly with
              our decentralized application (DApp). Experience fast, secure, and
              transparent conversions directly on the blockchain. Our DApp
              leverages cutting-edge technology to ensure your transactions are
              executed efficiently and reliably. Join the decentralized finance
              (DeFi) revolution and start converting BTC to WBTC with ease
              today.
            </Text>
          </Box>

          <Box padding={"12px"} minW={"400px"}>
            <Flex justifyContent={"Center"}>
              <a
                onClick={walletconnect}
                className="relative cursor-pointer inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Get Started
                </span>
              </a>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default HomePage;
