
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import WriteupCard from '../components/WriteupCard';
import Footer from '../components/Footer';
import { toast } from "sonner";

// Tech keywords for image search
const techKeywords = ['cybersecurity', 'hacking', 'coding', 'technology', 'programming', 'computer', 'network', 'data', 'security'];

// Function to get a random image
const getRandomImage = (index: number) => {
  const keyword = techKeywords[index % techKeywords.length];
  return `https://source.unsplash.com/featured/800x600?${keyword}&sig=${Math.random()}`;
};

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
    imageUrl: ''
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
    imageUrl: ''
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
    imageUrl: ''
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
    imageUrl: ''
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
    imageUrl: ''
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
    imageUrl: ''
  },
];

const WriteupsList: React.FC = () => {
  const [sortBy, setSortBy] = useState('Most Recent');
  const [writeups, setWriteups] = useState(recentWriteups);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Assign random images to each writeup
    const updatedWriteups = recentWriteups.map((writeup, index) => ({
      ...writeup,
      imageUrl: getRandomImage(index)
    }));
    
    // Simulate API loading
    setTimeout(() => {
      setWriteups(updatedWriteups);
      setIsLoading(false);
    }, 500);
  }, []);

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
            {isLoading ? (
              // Show skeleton loaders while images are loading
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-[#1B2023] rounded-lg border border-[#1B2023] overflow-hidden">
                  <div className="w-full h-40 bg-[#1B2023] animate-pulse"></div>
                  <div className="p-4">
                    <div className="flex gap-2 mb-2">
                      <div className="bg-[#2A3137] h-6 w-16 rounded animate-pulse"></div>
                      <div className="bg-[#2A3137] h-6 w-20 rounded animate-pulse"></div>
                    </div>
                    <div className="h-6 bg-[#2A3137] rounded mb-2 animate-pulse"></div>
                    <div className="h-4 bg-[#2A3137] rounded mb-4 animate-pulse"></div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#2A3137] animate-pulse"></div>
                        <div className="h-4 w-20 bg-[#2A3137] rounded animate-pulse"></div>
                      </div>
                      <div className="h-4 w-16 bg-[#2A3137] rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              writeups.map((writeup) => (
                <WriteupCard
                  key={writeup.id}
                  {...writeup}
                />
              ))
            )}
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
