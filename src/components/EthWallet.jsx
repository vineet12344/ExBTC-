import { EVMWallet } from "@catalogfi/wallets";
import { JsonRpcSigner, BrowserProvider } from "ethers";

const signer = await new BrowserProvider(window.ethereum).getSigner();
const evmWallet = new EVMWallet(signer);

export default {signer,evmWallet};