
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import WriteupCard from '../components/WriteupCard';
import Footer from '../components/Footer';
import { toast } from "sonner";
import { Link } from 'react-router-dom';

// Tech keywords for image search
const techKeywords = ['cybersecurity', 'hacking', 'coding', 'technology', 'programming', 'computer', 'network', 'data', 'security'];

// Function to get a random image
const getRandomImage = (index: number) => {
  const keyword = techKeywords[index % techKeywords.length];
  return `https://source.unsplash.com/featured/800x600?${keyword}&sig=${Math.random()}`;
};

// Mock data
const writeups = [
  {
    id: '1',
    title: 'SQL Injection: A Practical Guide',
    description: 'A comprehensive guide to understanding and exploiting SQL injection vulnerabilities in web applications.',
    difficulty: 'Easy' as const,
    platform: 'Web',
    tags: ['SQL', 'Web', 'Injection'],
    date: '15 min read',
    views: '2.4K',
    author: {
      id: '1',
      username: 'SQLMaster',
      avatar: 'public/lovable-uploads/89d13a5f-f0e7-4d9f-8a00-e5daed4d8eb2.png'
    }
  },
  {
    id: 'ninja-skills',
    title: 'Ninja Skills - TryHackMe Writeup',
    description: 'A detailed walkthrough for the TryHackMe Ninja Skills room, demonstrating Linux file system navigation and Bash scripting.',
    difficulty: 'Easy' as const,
    platform: 'TryHackMe',
    tags: ['Linux', 'Bash', 'Command-line'],
    date: '15 min read',
    views: '1.2K',
    author: {
      id: 'mahros',
      username: 'mahros',
      avatar: 'public/lovable-uploads/89d13a5f-f0e7-4d9f-8a00-e5daed4d8eb2.png'
    }
  },
  {
    id: '3',
    title: 'Advanced Buffer Overflow',
    description: 'Advanced exploitation techniques for buffer overflow vulnerabilities including ASLR bypass and ROP chains.',
    difficulty: 'Hard' as const,
    platform: 'Pwn',
    tags: ['Binary', 'Exploitation', 'Assembly'],
    date: '35 min read',
    views: '3.1K',
    author: {
      id: '3',
      username: 'ByteDetective',
      avatar: 'public/lovable-uploads/89d13a5f-f0e7-4d9f-8a00-e5daed4d8eb2.png'
    }
  }
];

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

const Dashboard: React.FC = () => {
  const [updatedWriteups, setUpdatedWriteups] = useState(writeups);
  const [updatedRecentWriteups, setUpdatedRecentWriteups] = useState(recentWriteups);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add random images to regular writeups
    const writeupWithImages = writeups.map((writeup, index) => ({
      ...writeup,
      imageUrl: writeup.id === 'ninja-skills' 
        ? 'public/lovable-uploads/6c559274-8b6c-499c-bfbf-c78a794d5642.png'
        : getRandomImage(index)
    }));
    
    // Add random images to recent writeups
    const recentWithImages = recentWriteups.map((writeup, index) => ({
      ...writeup,
      imageUrl: getRandomImage(index + writeups.length) // Offset to ensure different images
    }));
    
    // Simulate API loading
    setTimeout(() => {
      setUpdatedWriteups(writeupWithImages);
      setUpdatedRecentWriteups(recentWithImages);
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A1117]">
      <Header />
      
      <div className="flex flex-grow">
        <Sidebar />
        
        <main className="flex-grow p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Latest Writeups</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                // Show skeleton loaders while images are loading
                Array.from({ length: 3 }).map((_, i) => (
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
                updatedWriteups.map(writeup => (
                  writeup.id === 'ninja-skills' ? (
                    <Link to={`/writeup/ninja-skills`} key={writeup.id} className="block">
                      <div className="bg-[#0A1117] rounded-lg border border-[#1B2023] overflow-hidden hover:border-primary/50 transition-all">
                        <div className="w-full h-40 overflow-hidden">
                          <img src={writeup.imageUrl} alt={writeup.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4">
                          <div className="flex gap-2 mb-2">
                            <span className={writeup.difficulty === 'Easy' ? 'badge-easy' : writeup.difficulty === 'Medium' ? 'badge-medium' : 'badge-hard'}>
                              {writeup.difficulty}
                            </span>
                            <span className="platform-badge">{writeup.platform}</span>
                            {writeup.tags.slice(0, 1).map((tag) => (
                              <span key={tag} className="platform-badge">{tag}</span>
                            ))}
                          </div>
                          
                          <h3 className="text-lg font-semibold mb-2 text-[#F5F1F1]">{writeup.title}</h3>
                          <p className="text-sm text-gray-400 mb-4 line-clamp-2">{writeup.description}</p>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <img src={writeup.author.avatar} alt={writeup.author.username} className="w-6 h-6 rounded-full" />
                              <span className="text-sm text-[#F5F1F1]">{writeup.author.username}</span>
                            </div>
                            <span className="text-xs text-gray-400">{writeup.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <WriteupCard
                      key={writeup.id}
                      {...writeup}
                    />
                  )
                ))
              )}
            </div>
            
            <div className="mt-8 text-center">
              <button className="border border-primary text-primary px-6 py-2 rounded hover:bg-primary/10 transition-colors">
                Load More Writeups
              </button>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
