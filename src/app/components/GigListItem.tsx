"use client";

import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import gigsData from '../components/Gigs';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GigDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the gig details from the gigsData array
  const gig = gigsData.find((g) => g.id === id);

  if (!gig) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">{gig.jobTitle}</h1>
          <div className="flex items-center mb-4">
            <Image src={gig.companyLogo} alt={gig.companyName} className="w-20 h-20 mr-4" />
            <div>
              <h2 className="text-xl font-semibold">{gig.companyName}</h2>
              <p>{gig.duration}</p>
              <p>{gig.rate}</p>
              <p>{gig.type}</p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">About Us:</h3>
            <p>
              EquiBloc is at the forefront of innovation, specializing in cutting-edge blockchain technology and decentralized applications. We are on a mission to revolutionize the digital landscape by building robust, secure, and scalable solutions for the next generation of the internet. Our team is driven by passion, creativity, and a deep commitment to advancing Web3 technologies.
            </p>
            <h3 className="text-lg font-semibold mb-2 mt-4">Job Description:</h3>
            <p>
              We are seeking a skilled and experienced Web3.js Developer to join our dynamic team for a 3-month contract. As a Web3.js Developer, you will be responsible for designing, developing, and maintaining blockchain-based applications. You will collaborate closely with our product, design, and engineering teams to implement decentralized solutions that are both functional and user-friendly.
            </p>
            <h3 className="text-lg font-semibold mb-2 mt-4">KPIs:</h3>
            <ul className="list-disc ml-5">
              <li>Develop and deploy 5 Solidity-based smart contracts within 6 months, with successful security audits.</li>
              <li>Achieve 99% uptime for Ethereum interactions via Web3.js, fully integrated into front-end apps within 3 months.</li>
              <li>Maintain zero critical security breaches in blockchain applications over the next 12 months.</li>
              <li>Reduce blockchain system latency by 15% and ensure 95% performance efficiency within 6 months.</li>
              <li>Resolve blockchain integration issues within 24 hours, maintaining a 98% resolution rate over 6 months.</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2 mt-4">Required Qualifications:</h3>
            <ul className="list-disc ml-5">
              <li>Strong proficiency in Web3.js and Ethereum blockchain.</li>
              <li>Solid experience with smart contract development using Solidity.</li>
              <li>Familiarity with front-end technologies like React.js, Angular, or Vue.js.</li>
              <li>Experience with blockchain wallets (e.g., MetaMask) and decentralized applications (DApps).</li>
              <li>Understanding of Ethereum Virtual Machine (EVM) and blockchain fundamentals.</li>
              <li>Knowledge of IPFS, ENS, and other decentralized storage and domain systems.</li>
              <li>Strong problem-solving skills and attention to detail.</li>
              <li>Excellent communication and teamwork abilities.</li>
              <li>Experience with version control systems (e.g., Git).</li>
            </ul>
          </div>
          <div className="mt-8">
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              onClick={() => {
                // Navigate to the application page or trigger the application process
                window.location.href = '/apply';
              }}
            >
              Apply Now
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GigDetailPage;
