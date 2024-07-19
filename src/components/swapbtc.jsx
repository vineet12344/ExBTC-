import {
    BitcoinNetwork,
    BitcoinWallet,
    BitcoinProvider,
    EVMWallet,
  } from "@catalogfi/wallets";
  import {
    Orderbook,
    Chains,
    Assets,
    Actions,
    parseStatus,
  } from "@gardenfi/orderbook";
  import { GardenJS } from "@gardenfi/core";
  import { JsonRpcProvider, Wallet } from "ethers";
  
  // create your bitcoin wallet
  const bitcoinWallet = BitcoinWallet.fromPrivateKey(
    "Your PK",
    new BitcoinProvider(BitcoinNetwork.Mainnet)
  );
  
  // create your evm wallet
  const evmWallet = new EVMWallet(
    new Wallet("Your PK", new JsonRpcProvider("https://rpc.ankr.com/eth"))
  );
  
  (async () => {
    const orderbook = await Orderbook.init({
      signer: wallet,
    });
  
    const wallets = {
      [Chains.bitcoin]: bitcoinWallet,
      [Chains.ethereum]: evmWallet,
    };
  
    const garden = new GardenJS(orderbook, wallets);
  
    const sendAmount = 0.0001 * 1e8;
    const receiveAmount = (1 - 0.3 / 100) * sendAmount;
  
    const orderId = await garden.swap(
      Assets.bitcoin.BTC,
      Assets.ethereum.WBTC,
      sendAmount,
      receiveAmount
    );
  
    garden.subscribeOrders(await evmWallet.getAddress(), async (orders) => {
      const order = orders.filter((order) => order.ID === orderId)[0];
      if (!order) return;
  
      const action = parseStatus(order);
  
      if (action === Actions.UserCanInitiate || Actions.UserCanRedeem) {
        const swapper = garden.getSwap(order);
        const swapOutput = await swapper.next();
        console.log(
          `Completed Action ${swapOutput.action} with transaction hash: ${swapOutput.output}`
        );
      }
    });
  })();