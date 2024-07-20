import React from 'react'
import Starfield from "react-starfield";
import {
 
  Flex,
} from "@chakra-ui/react";

import performedAction from './Swap.jsx';

import ota from "./btcwallet.jsx"
import signer from './EthWallet.jsx';

function TransactionPage() {
  return (
    
    <>
      <Flex
      direction={"column"}
      bg={"black"}
      width={"100vw"}
      height={"100vh"}
      justifyContent={"start"}
      alignItems={"center"}
    >
     
      

    </Flex>
      {/* Meow Meow */}
    </>
    
  )
  
}

console.log(
  `Completed Action ${performedAction.action} with transaction hash: ${performedAction.output}`
);

export default TransactionPage
