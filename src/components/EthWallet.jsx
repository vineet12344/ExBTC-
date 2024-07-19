// import { EVMWallet } from "@catalogfi/wallets";
// import { JsonRpcProvider, Wallet } from "ethers";

// const provider = new JsonRpcProvider("https://rpc.ankr.com/eth");
// const privateKey = "0x85DE50dA339e3b125FFe6F5c1aBC4051E357dD6d";
// const wallet = new Wallet(privateKey, provider);

// const evmWallet = new EVMWallet(wallet);


import { EVMWallet } from "@catalogfi/wallets";
import { JsonRpcSigner, BrowserProvider } from "ethers";

const signer = await new BrowserProvider(window.ethereum).getSigner();
const evmWallet = new EVMWallet(signer);

export default evmWallet;