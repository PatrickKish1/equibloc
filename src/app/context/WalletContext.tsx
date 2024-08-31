import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Web3 } from "web3";
import { ZKsyncPlugin } from "web3-plugin-zksync";
import { CONTRACT_ADDRESS, abi } from '../constant';
import { Models, ORAPlugin, Chain } from "@ora-io/web3-plugin-ora";



interface WalletContextType {
  account: string | null;
  isWalletConnected: boolean;
  web3: Web3 | null;
  gigsHubContract: any;
  connectWallet: () => Promise<void>;
  generateText:(prompt: string) => Promise<void>
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

  const generateText = async (prompt: string) =>{
    const web3 = new Web3("https://1rpc.io/sepolia");
    web3.registerPlugin(new ORAPlugin(Chain.SEPOLIA))

    const estimatedFee = await web3.ora.estimateFee(Models.LLAMA2);
    const tx = await web3.ora.calculateAIResult("0xA1a9E8c73Ecf86AE7F4858D5Cb72E689cDc9eb3e", Models.LLAMA2, prompt, estimatedFee.toString());
  console.log("Estimated fee: ", estimatedFee);

  setTimeout(async () => {
    const result = await web3.ora.getAIResult(Models.LLAMA2, prompt);
    console.log("Inference result: ", result);
    //→ Inference result:  QmQkxg31E9b8mCMAW8j2LYB46LM8ghExbXrQHob26WLos1
}, 30000);
  }
  
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
      console.log(gigsHubContract)
      console.log(img,description,kpis,bounty)
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
    <WalletContext.Provider value={{ account, isWalletConnected, web3, gigsHubContract, connectWallet, createGig, generateText }}>
      {children}
    </WalletContext.Provider>
  );
};
