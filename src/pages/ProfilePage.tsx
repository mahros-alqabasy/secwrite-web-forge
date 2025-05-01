
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProfilePage: React.FC = () => {
  // Mock data
  const user = {
    username: '@alice_cybersec',
    name: 'Alice Cybersec',
    avatar: 'public/lovable-uploads/89d13a5f-f0e7-4d9f-8a00-e5daed4d8eb2.png',
    bio: 'Security researcher specializing in web application security and CTF challenges. Contributing author at HackTheBox and TryHackMe. Sharing knowledge through detailed writeups and tutorials.',
    joinDate: 'Feb 2025',
    verified: true,
    isPro: true,
    stats: {
      writeups: 124,
      views: '45.2K',
      platforms: 6,
      solutions: 89
    },
    social: {
      github: 'https://github.com/alice_cybersec',
      twitter: 'https://twitter.com/alice_cybersec',
      website: 'https://alice_cybersec.com'
    }
  };
  
  const writeups = [
    {
      id: '1',
      title: 'SQL Injection: A Practical Guide',
      description: 'A comprehensive guide to understanding and exploiting SQL injection vulnerabilities in web applications.',
      difficulty: 'Easy',
      platform: 'Web',
      readingTime: '15 min read',
      views: '2.4K'
    },
    {
      id: '2',
      title: 'Memory Analysis with Volatility',
      description: 'Deep dive into memory forensics using Volatility Framework. Learn how to extract valuable forensic artifacts.',
      difficulty: 'Medium',
      platform: 'Forensics',
      readingTime: '25 min read',
      views: '1.8K'
    },
    {
      id: '3',
      title: 'Advanced Buffer Overflow',
      description: 'Advanced exploitation techniques for buffer overflow vulnerabilities including ASLR bypass and ROP chains.',
      difficulty: 'Hard',
      platform: 'Pwn',
      readingTime: '35 min read',
      views: '3.1K'
    },
  ];

  const getDifficultyClass = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'badge-easy';
      case 'Medium':
        return 'badge-medium';
      case 'Hard':
        return 'badge-hard';
      default:
        return 'badge-medium';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A1117]">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#0A1117]">
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            </div>
            {user.isPro && (
              <div className="absolute bottom-0 right-0 bg-primary text-white text-xs px-2 py-1 rounded-full">
                Pro
              </div>
            )}
          </div>
          
          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-[#F5F1F1]">{user.username}</h1>
              {user.verified && (
                <div className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-3 text-gray-400 mb-6">
              <span>Member since {user.joinDate}</span>
            </div>
            
            <p className="text-[#F5F1F1] mb-6">{user.bio}</p>
            
            <div className="flex gap-4 mb-6">
              <Link to={user.social.github} className="text-gray-400 hover:text-primary transition-colors" target="_blank">
                <Github size={20} />
              </Link>
              <Link to={user.social.twitter} className="text-gray-400 hover:text-primary transition-colors" target="_blank">
                <Twitter size={20} />
              </Link>
              <Link to={user.social.website} className="text-gray-400 hover:text-primary transition-colors" target="_blank">
                <Globe size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#0A1117] p-6 rounded-lg border border-[#1B2023]">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400">Total Writeups</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#08B6F7">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-primary mt-2">{user.stats.writeups}</p>
          </div>
          
          <div className="bg-[#0A1117] p-6 rounded-lg border border-[#1B2023]">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400">Total Views</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#08B6F7">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-primary mt-2">{user.stats.views}</p>
          </div>
          
          <div className="bg-[#0A1117] p-6 rounded-lg border border-[#1B2023]">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400">Platforms</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#08B6F7">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-primary mt-2">{user.stats.platforms}</p>
          </div>
          
          <div className="bg-[#0A1117] p-6 rounded-lg border border-[#1B2023]">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400">Solutions</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#08B6F7">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-primary mt-2">{user.stats.solutions}</p>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Latest Writeups</h2>
            <div className="flex items-center gap-2">
              <button className="border border-[#1B2023] bg-[#0A1117] text-[#F5F1F1] px-2 py-1 rounded">
                All Platforms
              </button>
              <button className="border border-[#1B2023] bg-[#0A1117] text-[#F5F1F1] px-2 py-1 rounded">
                All Difficulties
              </button>
              <button className="border border-[#1B2023] bg-[#0A1117] text-[#F5F1F1] px-2 py-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {writeups.map((writeup) => (
              <div key={writeup.id} className="bg-[#0A1117] rounded-lg border border-[#1B2023] overflow-hidden">
                <div className="p-6">
                  <div className="flex gap-2 mb-2">
                    <span className={getDifficultyClass(writeup.difficulty)}>{writeup.difficulty}</span>
                    <span className="platform-badge">{writeup.platform}</span>
                  </div>
                  
                  <Link to={`/writeup/${writeup.id}`}>
                    <h3 className="text-xl font-semibold mb-2 text-[#F5F1F1] hover:text-primary transition-colors">{writeup.title}</h3>
                  </Link>
                  
                  <p className="text-gray-400 mb-4 line-clamp-2">{writeup.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{writeup.readingTime}</span>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {writeup.views} views
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <button className="border border-primary text-primary px-6 py-2 rounded hover:bg-primary/10 transition-colors">
              Load More Writeups
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;
