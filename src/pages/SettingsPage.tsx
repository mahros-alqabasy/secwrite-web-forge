
import React, { useState } from 'react';
import { User, Shield, Settings as SettingsIcon } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [displayName, setDisplayName] = useState('@alice_cybersec');
  const [email, setEmail] = useState('alice@securewrite.com');
  const [bio, setBio] = useState('Security researcher specializing in web application security and CTF challenges.');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [markdownStyle, setMarkdownStyle] = useState('default');

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update logic
    console.log('Profile updated:', { displayName, email, bio });
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password change logic
    console.log('Password changed');
  };

  const handlePreferencesUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle preferences update logic
    console.log('Preferences updated:', { darkMode, markdownStyle });
  };

  const handleAccountDelete = () => {
    // In a real application, this would show a confirmation dialog
    console.log('Account deletion requested');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A1117]">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
        <p className="text-gray-400 mb-8">Manage your profile, security, and preferences</p>
        
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 mb-6 md:mb-0">
            <div className="bg-[#0A1117] border border-[#1B2023] rounded-lg overflow-hidden">
              <button 
                onClick={() => setActiveTab('profile')}
                className={`flex items-center gap-3 w-full px-4 py-3 text-left ${
                  activeTab === 'profile' 
                    ? 'border-l-4 border-primary bg-primary/10' 
                    : ''
                }`}
              >
                <User size={18} className={activeTab === 'profile' ? 'text-primary' : 'text-gray-400'} />
                <span className={activeTab === 'profile' ? 'text-[#F5F1F1]' : 'text-gray-400'}>Profile</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('security')}
                className={`flex items-center gap-3 w-full px-4 py-3 text-left ${
                  activeTab === 'security' 
                    ? 'border-l-4 border-primary bg-primary/10' 
                    : ''
                }`}
              >
                <Shield size={18} className={activeTab === 'security' ? 'text-primary' : 'text-gray-400'} />
                <span className={activeTab === 'security' ? 'text-[#F5F1F1]' : 'text-gray-400'}>Security</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('preferences')}
                className={`flex items-center gap-3 w-full px-4 py-3 text-left ${
                  activeTab === 'preferences' 
                    ? 'border-l-4 border-primary bg-primary/10' 
                    : ''
                }`}
              >
                <SettingsIcon size={18} className={activeTab === 'preferences' ? 'text-primary' : 'text-gray-400'} />
                <span className={activeTab === 'preferences' ? 'text-[#F5F1F1]' : 'text-gray-400'}>Preferences</span>
              </button>
            </div>
          </aside>
          
          <div className="flex-grow">
            {activeTab === 'profile' && (
              <div className="bg-[#0A1117] border border-[#1B2023] rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img 
                      src="public/lovable-uploads/89d13a5f-f0e7-4d9f-8a00-e5daed4d8eb2.png"
                      alt="Profile" 
                      className="w-24 h-24 rounded-full object-cover" 
                    />
                    <button className="absolute bottom-0 right-0 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                  <button className="bg-primary text-white px-4 py-2 rounded text-sm">
                    Upload New Photo
                  </button>
                  <div className="text-xs text-gray-400">JPG, GIF or PNG. Max size 2MB</div>
                </div>
                
                <form onSubmit={handleProfileUpdate}>
                  <div className="mb-4">
                    <label htmlFor="displayName" className="block text-[#F5F1F1] mb-1">Display Name</label>
                    <input 
                      type="text" 
                      id="displayName" 
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="input-secwrite w-full" 
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-[#F5F1F1] mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-secwrite w-full" 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="bio" className="block text-[#F5F1F1] mb-1">Bio</label>
                    <textarea 
                      id="bio" 
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="input-secwrite w-full h-32" 
                    />
                  </div>
                  
                  <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
                    Save Changes
                  </button>
                </form>
              </div>
            )}
            
            {activeTab === 'security' && (
              <div className="bg-[#0A1117] border border-[#1B2023] rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
                
                <form onSubmit={handlePasswordChange}>
                  <div className="mb-4">
                    <label htmlFor="currentPassword" className="block text-[#F5F1F1] mb-1">Current Password</label>
                    <input 
                      type="password" 
                      id="currentPassword" 
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="input-secwrite w-full" 
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="newPassword" className="block text-[#F5F1F1] mb-1">New Password</label>
                    <input 
                      type="password" 
                      id="newPassword" 
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="input-secwrite w-full" 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-[#F5F1F1] mb-1">Confirm New Password</label>
                    <input 
                      type="password" 
                      id="confirmPassword" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="input-secwrite w-full" 
                    />
                  </div>
                  
                  <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
                    Update Password
                  </button>
                </form>
              </div>
            )}
            
            {activeTab === 'preferences' && (
              <div className="bg-[#0A1117] border border-[#1B2023] rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-6">Preferences</h2>
                
                <form onSubmit={handlePreferencesUpdate}>
                  <div className="mb-6">
                    <label className="flex items-center justify-between">
                      <span className="text-[#F5F1F1]">Dark Mode</span>
                      <div className="relative">
                        <input 
                          type="checkbox" 
                          checked={darkMode}
                          onChange={() => setDarkMode(!darkMode)}
                          className="sr-only" 
                        />
                        <div 
                          className={`block w-14 h-8 rounded-full ${darkMode ? 'bg-primary' : 'bg-gray-600'}`}
                        />
                        <div 
                          className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
                            darkMode ? 'transform translate-x-6' : ''
                          }`}
                        />
                      </div>
                    </label>
                    <p className="text-gray-400 text-sm mt-1">Currently system-wide dark theme only</p>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-[#F5F1F1] mb-3">Markdown Preview Style</label>
                    <div className="flex gap-2">
                      <button 
                        type="button"
                        onClick={() => setMarkdownStyle('default')}
                        className={`px-4 py-2 rounded ${
                          markdownStyle === 'default' 
                            ? 'bg-primary text-white' 
                            : 'bg-[#0A1117] border border-[#1B2023] text-[#F5F1F1]'
                        }`}
                      >
                        Default
                      </button>
                      <button 
                        type="button"
                        onClick={() => setMarkdownStyle('minimal')}
                        className={`px-4 py-2 rounded ${
                          markdownStyle === 'minimal' 
                            ? 'bg-primary text-white' 
                            : 'bg-[#0A1117] border border-[#1B2023] text-[#F5F1F1]'
                        }`}
                      >
                        Minimal
                      </button>
                      <button 
                        type="button"
                        onClick={() => setMarkdownStyle('classic')}
                        className={`px-4 py-2 rounded ${
                          markdownStyle === 'classic' 
                            ? 'bg-primary text-white' 
                            : 'bg-[#0A1117] border border-[#1B2023] text-[#F5F1F1]'
                        }`}
                      >
                        Classic
                      </button>
                    </div>
                  </div>
                  
                  <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
                    Save Preferences
                  </button>
                </form>
              </div>
            )}
            
            {activeTab === 'preferences' && (
              <div className="bg-[#0A1117] border border-[#1B2023] rounded-lg p-6 mt-6">
                <h2 className="text-xl font-semibold mb-2 text-destructive">Danger Zone</h2>
                <p className="text-gray-400 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                
                <button 
                  onClick={handleAccountDelete}
                  className="w-full border border-destructive text-destructive px-4 py-2 rounded hover:bg-destructive/5 transition-colors flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete Account
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SettingsPage;
