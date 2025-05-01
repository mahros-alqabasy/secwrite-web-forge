
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A1117] p-4">
      <div className="text-center">
        <div className="mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="#08B6F7" className="mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            <circle cx="18" cy="18" r="6" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 16.75L16.75 19.25M16.75 16.75L19.25 19.25" />
          </svg>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-[#F5F1F1]">Page Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The writeup you're looking for may have been moved or doesn't exist anymore.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center gap-2 bg-[#0A1117] border border-[#1B2023] text-[#F5F1F1] px-6 py-3 rounded hover:border-primary/50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Dashboard
          </Link>
          
          <Link
            to="/writeup/new"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded hover:bg-primary/90 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Submit a Writeup
          </Link>
        </div>
        
        <div className="mt-12 flex justify-center gap-8 text-gray-400">
          <Link to="/writeups" className="hover:text-primary transition-colors">
            Explore Writeups
          </Link>
          <Link to="/help" className="hover:text-primary transition-colors">
            Help Center
          </Link>
          <Link to="/report-issue" className="hover:text-primary transition-colors">
            Report Issue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
