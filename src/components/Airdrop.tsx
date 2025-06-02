import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export const Airdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const sendAirDrop = () => {
    connection.requestAirdrop(wallet.publicKey, 1000000000);
  };

  return (
    <>
      <input type="text" placeholder="Enter SOL" />
      <button onClick={sendAirDrop}>Send Airdrop</button>
    </>
  );
};
