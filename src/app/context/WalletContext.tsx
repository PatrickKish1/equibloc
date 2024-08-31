import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Web3 } from "web3";
import { ZKsyncPlugin } from "web3-plugin-zksync";
import { CONTRACT_ADDRESS, abi } from '../constant';


interface WalletContextType {
  account: string | null;
  isWalletConnected: boolean;
  web3: Web3 | null;
  gigsHubContract: any;
  connectWallet: () => Promise<void>;
  createGig: (img: string, description: string, kpis: string[], bounty: string) => Promise<void>;
  // Add other contract functions here...
}
const web3 = new Web3();
web3.registerPlugin(new ZKsyncPlugin("https://sepolia.era.zksync.dev"))
const zksync: ZKsyncPlugin = web3.ZKsync;


const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [gigsHubContract, setGigsHubContract] = useState<any>(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
 
  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    } else {
      console.log('MetaMask is not installed');
    }
  }, []);

  
  const connectWallet = async () => {
    if (web3) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setIsWalletConnected(true)
        const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS)
        setGigsHubContract(contract)
        console.log(account, gigsHubContract)
      } catch (error) {
        console.log('Error connecting wallet. Please try again.');
        console.error('Error connecting wallet:', error);
      }
    } else {
      console.log('MetaMask is not installed. Please install it to use this feature.');
    }
  };

  const createGig = async (img: string, description: string, kpis: string[], bounty: string) => {
    if (gigsHubContract && account) {
      try {
        await gigsHubContract.methods
          .createGig(img, description, kpis)
          .send({ from: account, value: web3!.utils.toWei(bounty, 'ether') });
        console.log('Gig created successfully');
      } catch (error) {
        console.error('Error creating gig:', error);
      }
    }
  };

  return (
    <WalletContext.Provider value={{ account, isWalletConnected, web3, gigsHubContract, connectWallet, createGig }}>
      {children}
    </WalletContext.Provider>
  );
};
