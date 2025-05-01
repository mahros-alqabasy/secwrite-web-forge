
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A1117]">
      <Header variant="landing" />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto py-16 px-4 md:px-8 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#F5F1F1]">
                Read, Write, and Share Cybersecurity Writeups
              </h1>
              <p className="text-lg text-gray-400 mb-8">
                Explore real-world walkthroughs for TryHackMe, Hack The Box, PicoCTF, and more. Join our community of security enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/writeups" className="btn-primary px-8 py-3 text-center">
                  Explore Writeups
                </Link>
                <Link to="/signup" className="btn-secondary px-8 py-3 text-center">
                  Create Account
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="public/lovable-uploads/3133322c-34c9-44ab-917c-ce36a76dfd70.png" 
                alt="SecWrite Dashboard" 
                className="w-full rounded-lg shadow-lg border border-[#1B2023]"
              />
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-[#0A1117]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#F5F1F1]">Why Choose SecWrite</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-[#0A1117] rounded-lg border border-[#1B2023] text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#F5F1F1]">Write & Share</h3>
                <p className="text-gray-400">Create detailed writeups with markdown support using our formatting tools.</p>
              </div>
              
              <div className="p-6 bg-[#0A1117] rounded-lg border border-[#1B2023] text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#F5F1F1]">Search & Filter</h3>
                <p className="text-gray-400">Find exactly what you need with advanced searching and filtering options.</p>
              </div>
              
              <div className="p-6 bg-[#0A1117] rounded-lg border border-[#1B2023] text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#F5F1F1]">Learn & Grow</h3>
                <p className="text-gray-400">Improve your skills by following detailed solutions and explanations.</p>
              </div>
              
              <div className="p-6 bg-[#0A1117] rounded-lg border border-[#1B2023] text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 18 22 12 16 6"></path>
                    <path d="M8 6 2 12 8 18"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#F5F1F1]">Code Support</h3>
                <p className="text-gray-400">Share code snippets with syntax highlighting and copy functionality.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Platforms Section */}
        <section className="py-16 bg-[#0A1117]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 text-[#F5F1F1]">Supported Platforms</h2>
            <div className="flex justify-center gap-12">
              <div className="w-16 h-16 bg-[#0A1117] rounded-full border border-[#1B2023] flex items-center justify-center">
                <span className="text-primary text-2xl">H</span>
              </div>
              <div className="w-16 h-16 bg-[#0A1117] rounded-full border border-[#1B2023] flex items-center justify-center">
                <span className="text-primary text-2xl">T</span>
              </div>
              <div className="w-16 h-16 bg-[#0A1117] rounded-full border border-[#1B2023] flex items-center justify-center">
                <span className="text-primary text-2xl">P</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-16 bg-[#0A1117]">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto bg-[#0A1117] p-8 rounded-lg border border-[#1B2023]">
              <p className="text-lg italic text-[#F5F1F1] mb-6">
                "SecWrite has transformed how I document and share my cybersecurity learning journey. The platform's features and community are incredible."
              </p>
              <div className="flex items-center justify-center">
                <img 
                  src="public/lovable-uploads/84c92559-a79e-4fb9-a484-d07c079dd303.png"
                  alt="Alex Morgan" 
                  className="w-12 h-12 rounded-full mr-4" 
                />
                <div className="text-left">
                  <h4 className="font-semibold text-[#F5F1F1]">Alex Morgan</h4>
                  <p className="text-sm text-gray-400">Security Researcher</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;
