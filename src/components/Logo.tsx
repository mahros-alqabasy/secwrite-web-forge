
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'small';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="text-primary">
        <svg width={variant === 'small' ? 24 : 32} height={variant === 'small' ? 24 : 32} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 16.5L12 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 7.5L12 7.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 10.5L7 7.5L17 7.5L17 16.5L7 16.5L7 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {variant === 'default' && (
        <span className="text-xl font-bold text-white">SecWrite</span>
      )}
    </Link>
  );
};

export default Logo;
