import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import WriteupCard from '../components/WriteupCard';
import Footer from '../components/Footer';

// Mock data
const recentWriteups = [
  {
    id: '4',
    title: 'Breaking RCE in NodeJS Application',
    description: 'A detailed walkthrough of exploiting a Node.js deserialization vulnerability to achieve RCE.',
    difficulty: 'Medium' as const,
    platform: 'HTB',
    tags: ['NodeJS', 'Web', 'RCE'],
    date: 'Apr 15, 2025',
    author: {
      id: '4',
      username: 'CyberNinja',
      avatar: 'public/lovable-uploads/89d13a5f-f0e7-4d9f-8a00-e5daed4d8eb2.png'
    },
    imageUrl: 'public/lovable-uploads/0e494b80-b79e-4a45-93d9-217ab70ef20b.png'
  },
  {
    id: '5',
    title: 'Network Traffic Analysis Basics',
    description: 'Learn how to use Wireshark to analyze suspicious network traffic and identify potential threats.',
    difficulty: 'Easy' as const,
    platform: 'THM',
    tags: ['Wireshark', 'Forensics', 'TCP/IP'],
    date: 'Apr 10, 2025',
    author: {
      id: '5',
      username: 'PacketQueen',
      avatar: 'public/lovable-uploads/89d13a5f-f0e7-4d9f-8a00-e5daed4d8eb2.png'
    },
    imageUrl: 'public/lovable-uploads/bc95795e-7331-4f7d-8ecc-61f60ad4966e.png'
  },
  {
    id: '6',
    title: 'Reversing Advanced Anti-Debug Techniques',
    description: 'An in-depth analysis of modern anti-debugging techniques found in malware and how to bypass them.',
    difficulty: 'Hard' as const,
    platform: 'HTB',
    tags: ['Reversing', 'Assembly', 'Anti-Debug'],
    date: 'Apr 8, 2025',
    author: {
      id: '6',
      username: 'ByteDetective',
      avatar: 'public/lovable-uploads/89d13a5f-f0e7-4d9f-8a00-e5daed4d8eb2.png'
    },
    imageUrl: 'public/lovable-uploads/0e494b80-b79e-4a45-93d9-217ab70ef20b.png'
  },
  {
    id: '7',
    title: 'Advanced SQL Injection Techniques',
    description: 'Exploring time-based blind SQL injection vulnerabilities and how to exploit them to exfiltrate data.',
    difficulty: 'Medium' as const,
    platform: 'THM',
    tags: ['SQL', 'Web', 'Injection'],
    date: 'Apr 5, 2025',
    author: {
      id: '7',
      username: 'SQLMaster',
      avatar: 'public/lovable-uploads/89d13a5f-f0e7-4d9f-8a00-e5daed4d8eb2.png'
    },
    imageUrl: 'public/lovable-uploads/5203a0e5-a410-40e7-a48a-b73badcaab5d.png'
  },
  {
    id: '8',
    title: 'Breaking RSA Implementation Flaws',
    description: 'A step-by-step guide to exploiting common implementation flaws in RSA encryption algorithms.',
    difficulty: 'Medium' as const,
    platform: 'THM',
    tags: ['Crypto', 'RSA', 'Math'],
    date: 'Apr 2, 2025',
    author: {
      id: '8',
      username: 'CryptoHacker',
      avatar: 'public/lovable-uploads/89d13a5f-f0e7-4d9f-8a00-e5daed4d8eb2.png'
    },
    imageUrl: 'public/lovable-uploads/aeffce6a-57ea-467b-b042-4f6081e10ccb.png'
  },
  {
    id: '9',
    title: 'Linux Privilege Escalation Cheatsheet',
    description: 'A comprehensive guide to common Linux privilege escalation techniques with examples and explanations.',
    difficulty: 'Easy' as const,
    platform: 'VulnHub',
    tags: ['Linux', 'PrivEsc', 'SUID'],
    date: 'Mar 28, 2025',
    author: {
      id: '9',
      username: 'RootMaster',
      avatar: 'public/lovable-uploads/89d13a5f-f0e7-4d9f-8a00-e5daed4d8eb2.png'
    },
    imageUrl: 'public/lovable-uploads/adc67a65-c2e5-4393-abbd-9145ba691647.png'
  },
];

const WriteupsList: React.FC = () => {
  const [sortBy, setSortBy] = useState('Most Recent');

  return (
    <div className="min-h-screen flex flex-col bg-[#0A1117]">
      <Header />
      
      <div className="flex flex-grow">
        <Sidebar variant="filters" />
        
        <main className="flex-grow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Recent Writeups</h2>
            <div className="flex items-center">
              <span className="text-sm text-gray-400 mr-2">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-secwrite text-sm py-1"
              >
                <option value="Most Recent">Most Recent</option>
                <option value="Most Popular">Most Popular</option>
                <option value="Highest Rated">Highest Rated</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {recentWriteups.map(writeup => (
              <WriteupCard
                key={writeup.id}
                {...writeup}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <button className="w-8 h-8 flex items-center justify-center rounded border border-[#1B2023] text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-[#1B2023] text-gray-400 hover:border-primary hover:text-primary">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-[#1B2023] text-gray-400 hover:border-primary hover:text-primary">
                3
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-[#1B2023] text-gray-400">
                ...
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-[#1B2023] text-gray-400 hover:border-primary hover:text-primary">
                10
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-[#1B2023] text-gray-400 hover:border-primary hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default WriteupsList;
