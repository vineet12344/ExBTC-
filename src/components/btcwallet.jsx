import {
    BitcoinOTA,
    BitcoinProvider,
    BitcoinNetwork,
} from "@catalogfi/wallets";
import { JsonRpcSigner, BrowserProvider } from "ethers";

const provider = new BitcoinProvider(BitcoinNetwork.Mainnet);
const signer = await new BrowserProvider(window.ethereum).getSigner();

export const ota = new BitcoinOTA(provider, signer);

export default ota;


