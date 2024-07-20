import {
    BitcoinOTA,
    BitcoinProvider,
    BitcoinNetwork,
} from "@catalogfi/wallets";
import { JsonRpcSigner, BrowserProvider } from "ethers";
import { sign } from "viem/accounts";

const provider = new BitcoinProvider(BitcoinNetwork.Mainnet);
const signer = await new BrowserProvider(window.ethereum).getSigner();

export const ota = new BitcoinOTA(provider, signer);

console.log(ota);
console.log(signer); 
export default {provider,signer,ota};                                          