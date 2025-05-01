
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Share2, Bookmark, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WriteupDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would typically be fetched from an API based on the ID
  const writeup = {
    id: '1',
    title: 'Hack The Planet: A Complete Walkthrough',
    author: {
      name: 'John Smith',
      avatar: 'public/lovable-uploads/89d13a5f-f0e7-4d9f-8a00-e5daed4d8eb2.png',
      date: 'Apr 3, 2025',
    },
    readingTime: '15 min read',
    tags: ['Hack The Box', 'Easy', 'Web', 'PHP', 'SQLi'],
    content: `
      <h2>Introduction</h2>
      <p>In this writeup, we'll explore how to tackle the "Hack The Planet" challenge on Hack The Box. This is a newly-rated machine that focuses on web exploitation and SQL injection techniques.</p>
      
      <div class="code-block">
        <pre><code>SELECT * FROM users WHERE username = 'admin' AND password = '' OR '1'='1'</code></pre>
      </div>
      
      <img src="public/lovable-uploads/fddae0c4-207d-4e68-97d5-92d3d72e798c.png" alt="Terminal Output" class="my-4 rounded" />
      
      <p>After gaining access to the dashboard, we can extract the flag:</p>
      
      <div class="code-block">
        <pre><code>HTB{F4k3_Fl4g_f0r_d3m0}</code></pre>
      </div>
    `,
    likes: 123,
    comments: 12,
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A1117]">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/dashboard" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Back to Dashboard
          </Link>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-[#F5F1F1]">{writeup.title}</h1>
          
          <div className="flex items-center mb-6">
            <img src={writeup.author.avatar} alt={writeup.author.name} className="w-8 h-8 rounded-full mr-3" />
            <span className="text-[#F5F1F1] mr-2">{writeup.author.name}</span>
            <span className="text-gray-400 text-sm mr-2">•</span>
            <span className="text-gray-400 text-sm">{writeup.author.date}</span>
            <span className="text-gray-400 text-sm mx-2">•</span>
            <span className="text-gray-400 text-sm">{writeup.readingTime}</span>
          </div>
          
          <div className="flex gap-2 mb-8">
            {writeup.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 text-sm rounded-full ${
                  tag === 'Easy' ? 'badge-easy' :
                  tag === 'Medium' ? 'badge-medium' :
                  tag === 'Hard' ? 'badge-hard' :
                  'platform-badge'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="prose prose-invert max-w-none mb-8">
            <div className="bg-[#0A1117] rounded-lg border border-[#1B2023] p-6" dangerouslySetInnerHTML={{ __html: writeup.content }}></div>
          </div>
          
          <div className="border-t border-[#1B2023] pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-[#F5F1F1]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>{writeup.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-[#F5F1F1]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <span>{writeup.comments}</span>
                </button>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="text-[#F5F1F1] hover:text-primary transition-colors">
                  <Bookmark size={20} />
                </button>
                <button className="text-[#F5F1F1] hover:text-primary transition-colors">
                  <Share2 size={20} />
                </button>
                <a href="#" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                  View on HTB
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WriteupDetail;
