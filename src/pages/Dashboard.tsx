import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import WriteupCard from '../components/WriteupCard';
import Footer from '../components/Footer';

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
    id: '2',
    title: 'Memory Analysis with Volatility',
    description: 'Deep dive into memory forensics using Volatility Framework. Learn how to extract valuable forensic artifacts.',
    difficulty: 'Medium' as const,
    platform: 'Forensics',
    tags: ['Memory', 'Forensics', 'Volatility'],
    date: '25 min read',
    views: '1.8K',
    author: {
      id: '2',
      username: 'ForensicExpert',
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

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A1117]">
      <Header />
      
      <div className="flex flex-grow">
        <Sidebar />
        
        <main className="flex-grow p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Latest Writeups</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {writeups.map(writeup => (
                <WriteupCard
                  key={writeup.id}
                  {...writeup}
                />
              ))}
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
