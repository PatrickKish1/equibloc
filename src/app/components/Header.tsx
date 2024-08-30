"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Web3 from 'web3';
import Notification from './Notification';

const Header = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setIsWalletConnected(true);
        } else {
          setIsWalletConnected(false);
          setWalletAddress('');
        }
      });
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      try {
        const accounts = await web3.eth.requestAccounts();
        setWalletAddress(accounts[0]);
        setIsWalletConnected(true);
      } catch (error) {
        setNotification('Error connecting wallet. Please try again.');
        console.error('Error connecting wallet:', error);
      }
    } else {
      setNotification('MetaMask is not installed. Please install it to use this feature.');
    }
  };

  const disconnectWallet = () => {
    setIsWalletConnected(false);
    setWalletAddress('');
    setIsDropdownOpen(false);
  };

  const handleCloseNotification = () => {
    setNotification(null);
  };

  return (
    <header className="flex items-center justify-between p-5 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/assets/equibloc-logo.png" alt="EquiBloc Logo" height={40} width={160} />
        </Link>
      </div>
      <nav>
        <ul className="flex list-none">
          <li className="mx-5">
            <Link href="/" className="text-gray-800 font-medium border-b-2 border-red-500">
              Home
            </Link>
          </li>
          <li className="mx-5">
            <Link href="/jobs" className="text-gray-800 font-medium">
              Jobs
            </Link>
          </li>
          <li className="mx-5">
            <Link href="/about" className="text-gray-800 font-medium">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center">
        {isWalletConnected && (
          <>
            <button className="bg-white text-[#ff0909] border-2 border-[#ff0909] px-5 py-2 rounded font-bold">
              Hire
            </button>
            <button className="bg-white text-[#ff0909] border-2 border-[#ff0909] ml-2 px-5 py-2 rounded font-bold">
              Apply
            </button>
          </>
        )}
        <div className="relative">
          <button
            onClick={isWalletConnected ? () => setIsDropdownOpen(!isDropdownOpen) : connectWallet}
            className="bg-[#ff0909] text-white px-5 py-2.5 rounded font-bold flex items-center ml-3"
          >
            <Image src="/assets/wallet.svg" alt="Wallet Icon" height={16} width={16} />
            <span className="ml-2">
              {isWalletConnected ? walletAddress.slice(0, 6) + '...' + walletAddress.slice(-4) : 'Connect Wallet'}
            </span>
          </button>
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-50"
            >
              <button
                onClick={disconnectWallet}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Disconnect
              </button>
            </div>
          )}
        </div>
      </div>
      <Notification message={notification || ''} show={!!notification} onClose={handleCloseNotification} />
    </header>
  );
};

export default Header;
