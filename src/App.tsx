import { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

import { Airdrop } from "./components/Airdrop";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
const App = () => {
  return (
    <ConnectionProvider
      endpoint={
        "https://solana-mainnet.g.alchemy.com/v2/Bu5ZzAxH1omhbsfoz-qYpnW5mBLrqPCX"
      }
    >
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <br />
          <WalletMultiButton />
          <br />
          <br />
          <WalletDisconnectButton />
          <br />
          <Airdrop />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
