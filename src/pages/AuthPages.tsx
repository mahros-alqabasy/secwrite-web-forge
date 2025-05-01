
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

interface AuthProps {
  type: 'login' | 'signup';
}

const AuthPages: React.FC<AuthProps> = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === 'signup' && password !== confirmPassword) {
      console.error("Passwords don't match");
      return;
    }
    // Handle authentication logic
    console.log(type === 'login' ? 'Login' : 'Signup', { email, password });
  };

  return (
    <div className="min-h-screen bg-[#0A1117] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#0A1117] border border-[#1B2023] rounded-lg p-8">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                stroke="#08B6F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <path 
                d="M12 16.5L12 11.5" 
                stroke="#08B6F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <path 
                d="M12 7.5L12 7.51" 
                stroke="#08B6F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-[#F5F1F1] mb-2">
            {type === 'login' ? 'Welcome back' : 'Create an account'}
          </h1>
          
          <p className="text-gray-400">
            {type === 'login' 
              ? 'Enter your credentials to access your account' 
              : 'Join our cybersecurity community today'}
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          {type === 'signup' && (
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-[#F5F1F1] mb-1">Full Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input 
                  id="fullName"
                  type="text" 
                  placeholder="John Doe" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="input-secwrite w-full pl-10" 
                />
              </div>
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#F5F1F1] mb-1">Email address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input 
                id="email"
                type="email" 
                placeholder="name@company.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-secwrite w-full pl-10" 
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-[#F5F1F1] mb-1">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input 
                id="password"
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-secwrite w-full pl-10" 
              />
              <button 
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-200"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          
          {type === 'signup' && (
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-[#F5F1F1] mb-1">Confirm Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input 
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="input-secwrite w-full pl-10" 
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-200"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          )}
          
          {type === 'login' ? (
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input 
                  id="remember-me" 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 rounded border-[#1B2023] text-primary focus:ring-primary" 
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link to="/forgot-password" className="text-primary hover:text-primary/80">
                  Forgot password?
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex items-center mb-6">
              <input 
                id="terms" 
                type="checkbox" 
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                required
                className="h-4 w-4 rounded border-[#1B2023] text-primary focus:ring-primary" 
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
                I agree to the <Link to="/terms" className="text-primary hover:text-primary/80">Terms and Conditions</Link>
              </label>
            </div>
          )}
          
          <button 
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            {type === 'login' ? 'Log in' : 'Create Account'}
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            {type === 'login' ? "Don't have an account?" : "Already have an account?"} {' '}
            <Link to={type === 'login' ? '/signup' : '/login'} className="text-primary hover:text-primary/80">
              {type === 'login' ? 'Create one' : 'Log in'}
            </Link>
          </p>
        </div>
        
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#1B2023]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#0A1117] text-gray-400">Supported platforms</span>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center space-x-8">
            <span className="inline-block">
              <span className="w-10 h-10 bg-[#0A1117] rounded-full border border-[#1B2023] flex items-center justify-center text-xl text-gray-400">H</span>
            </span>
            <span className="inline-block">
              <span className="w-10 h-10 bg-[#0A1117] rounded-full border border-[#1B2023] flex items-center justify-center text-xl text-gray-400">T</span>
            </span>
            <span className="inline-block">
              <span className="w-10 h-10 bg-[#0A1117] rounded-full border border-[#1B2023] flex items-center justify-center text-xl text-gray-400">P</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPages;
