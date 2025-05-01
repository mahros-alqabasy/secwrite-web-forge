
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, Bell, User } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  variant?: 'landing' | 'dashboard';
}

const Header: React.FC<HeaderProps> = ({ variant = 'dashboard' }) => {
  if (variant === 'landing') {
    return (
      <header className="w-full p-4 bg-[#0A1117] border-b border-[#1B2023]">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/features" className="text-[#F5F1F1] hover:text-primary transition-colors">Features</Link>
            <Link to="/platforms" className="text-[#F5F1F1] hover:text-primary transition-colors">Platforms</Link>
            <Link to="/about" className="text-[#F5F1F1] hover:text-primary transition-colors">About</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-[#F5F1F1] hover:text-primary transition-colors">Log in</Link>
            <Link to="/signup" className="bg-primary text-white px-4 py-1 rounded hover:bg-primary/90 transition-colors">Sign up</Link>
          </div>
        </div>
      </header>
    );
  }
  
  return (
    <header className="w-full p-4 bg-[#0A1117] border-b border-[#1B2023]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Logo />
          <h1 className="text-xl font-semibold text-[#F5F1F1]">Writeups</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search writeups..." 
              className="input-secwrite pr-10 w-full md:w-64 lg:w-80"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <Link to="/writeup/new" className="bg-primary text-white px-4 py-2 rounded flex items-center gap-1 hover:bg-primary/90 transition-colors">
            <Plus size={18} />
            <span>New Writeup</span>
          </Link>
          <button className="relative p-2">
            <Bell size={20} className="text-[#F5F1F1]" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <Link to="/profile">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <User size={18} className="text-white" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
