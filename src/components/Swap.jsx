// import {
//   BitcoinNetwork,
//   BitcoinWallet,
//   BitcoinProvider,
//   EVMWallet,
// } from "@catalogfi/wallets";
// import { JsonRpcProvider, Wallet } from "ethers";
// import { Chains } from "@gardenfi/orderbook";
// import { GardenJS } from "@gardenfi/core";
// import {
//   BitcoinOTA,
// } from "@catalogfi/wallets";
// import { JsonRpcSigner, BrowserProvider } from "ethers";
// import { Orderbook } from "@gardenfi/orderbook";
// import { Actions, parseStatus } from '@gardenfi/orderbook';
// import { Assets } from "@gardenfi/orderbook";


// const provider = new BitcoinProvider(BitcoinNetwork.Mainnet);
// const signer = await new BrowserProvider(window.ethereum).getSigner();

// const ota = new BitcoinOTA(provider, signer);

// const bitcoinProvider = new BitcoinProvider(BitcoinNetwork.Mainnet);
// const bitcoinPk = "BTC Pvt key";

// const bitcoinWallet = BitcoinWallet.fromPrivateKey(bitcoinPk, bitcoinProvider);

// const ethereumPk =
//   "ETH Pvt Key";
// const ethereumProvider = new JsonRpcProvider("https://rpc.ankr.com/eth");
// // const signer = new Wallet(ethereumPk, ethereumProvider);

// const evmWallet = new EVMWallet(signer);

// console.log(evmWallet);

// (async () => {
//   const orderbook = await Orderbook.init({
//     url: "https://orderbook-testnet.garden.finance/",
//     signer: signer,
//     opts: {
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       domain: (window as any).location.host,
//       store: localStorage,
//     },
//   });
//   const wallets = {
//     [Chains.bitcoin]: bitcoinWallet,
//     [Chains.ethereum]: evmWallet,
//   };
//   const garden = new GardenJS(orderbook, wallets);

//   const sendAmount = 0.0001 * 1e8;
//   const receiveAmount = (1 - 0.3 / 100) * sendAmount;

//   const orderId = await garden.swap(
//     Assets.bitcoin.BTC,
//     Assets.ethereum.WBTC,
//     sendAmount,
//     receiveAmount
//   );

//   garden.subscribeOrders(await evmWallet.getAddress(), async (orders) => {
//     // filter the order we have just created
//     const order = orders.filter((order) => order.ID === orderId)[0];
//     if (!order) return;
  
//     // get the action we can perform on the order right now
//     const action = parseStatus(order);
  
//     if (action === Actions.UserCanInitiate || action === Actions.UserCanRedeem) {
//       const swapper = garden.getSwap(order);
//       // if it is UserCanInitiate, this step will lock the funds in the contract.
//       // if it is UserCanRedeem, this step will unlocks the funds from the contract.
//       const performedAction = await swapper.next();
//       console.log(
//         `Completed Action ${performedAction.action} with transaction hash: ${performedAction.output}`
//       );
//     }
//   });
  
// })();


// export default performedAction;

import React, { useEffect } from 'react';
import {
  BitcoinNetwork,
  BitcoinWallet,
  BitcoinProvider,
  EVMWallet,
  BitcoinOTA
} from "@catalogfi/wallets";
import { JsonRpcProvider, BrowserProvider } from "ethers";
import { Chains, Orderbook, Actions, parseStatus, Assets } from "@gardenfi/orderbook";
import { GardenJS } from "@gardenfi/core";

const Swap = () => {
  useEffect(() => {
    const initialize = async () => {
      try {
        // Initialize Bitcoin Provider
        const bitcoinProvider = new BitcoinProvider(BitcoinNetwork.Mainnet);
        const bitcoinPk = "BTC PVT KEY"
        const bitcoinWallet = BitcoinWallet.fromPrivateKey(bitcoinPk, bitcoinProvider);

        // Initialize Ethereum Provider and Signer
        const ethereumProvider = new JsonRpcProvider("https://rpc.ankr.com/eth");
        const browserProvider = new BrowserProvider(window.ethereum);
        const signer = await browserProvider.getSigner();

        const evmWallet = new EVMWallet(signer);
        console.log(evmWallet);

        // Initialize Orderbook
        const orderbook = await Orderbook.init({
          url: "https://orderbook-testnet.garden.finance/",
          signer: signer,
          opts: {
            domain: window.location.host,
            store: localStorage,
          },
        });

        // Initialize GardenJS
        const wallets = {
          [Chains.bitcoin]: bitcoinWallet,
          [Chains.ethereum]: evmWallet,
        };
        const garden = new GardenJS(orderbook, wallets);

        // Define amounts for swap
        const sendAmount = 0.0001 * 1e8;
        const receiveAmount = (1 - 0.3 / 100) * sendAmount;

        // Create swap order
        const orderId = await garden.swap(
          Assets.bitcoin.BTC,
          Assets.ethereum.WBTC,
          sendAmount,
          receiveAmount
        );

        // Subscribe to orders
        garden.subscribeOrders(await evmWallet.getAddress(), async (orders) => {
          // Filter the order we have just created
          const order = orders.filter((order) => order.ID === orderId)[0];
          if (!order) return;

          // Get the action we can perform on the order right now
          const action = parseStatus(order);
          console.log('action Order:', order);
          console.log('action Action:', action);

          if (action === Actions.UserCanInitiate || action === Actions.UserCanRedeem) {
            const swapper = garden.getSwap(order);
            // If it is UserCanInitiate, this step will lock the funds in the contract.
            // If it is UserCanRedeem, this step will unlock the funds from the contract.
            const performedAction = await swapper.next();
            console.log('Performed Action:', performedAction);
            console.log(
              `Completed Action ${performedAction.action} with transaction hash: ${performedAction.output}`
            );
          }
        });
      } catch (error) {
        console.error('Error initializing:', error);
      }
    };

    initialize();
  }, []);

  return <div className='font-mono text-white' >This is Swap component</div>;
};

export default Swap;
