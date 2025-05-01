
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Share2 } from 'lucide-react';
import Header from '../components/Header';

const WriteupEditor: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [platform, setPlatform] = useState('');
  const [difficulty, setDifficulty] = useState('Medium');
  const [readingTime, setReadingTime] = useState('0');
  const [visibility, setVisibility] = useState('Public');
  const [tags, setTags] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [flagName, setFlagName] = useState('');
  const [flagValue, setFlagValue] = useState('');
  
  const handleAddTag = () => {
    if (tags.trim() !== '' && !tagList.includes(tags)) {
      setTagList([...tagList, tags]);
      setTags('');
    }
  };
  
  const handleRemoveTag = (tag: string) => {
    setTagList(tagList.filter(t => t !== tag));
  };
  
  const handleAddFlag = () => {
    if (flagName.trim() !== '' && flagValue.trim() !== '') {
      // Add flag logic would go here
      setFlagName('');
      setFlagValue('');
    }
  };
  
  const handlePublish = () => {
    // Publish logic would go here
    console.log('Publishing writeup:', {
      title,
      content,
      platform,
      difficulty,
      readingTime,
      visibility,
      tags: tagList,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A1117]">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Create New Writeup</h1>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#0A1117] border border-[#1B2023] text-[#F5F1F1]">
              <Eye size={18} />
              Preview
            </button>
            <button 
              onClick={handlePublish}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white"
            >
              <Share2 size={18} />
              Publish
            </button>
          </div>
        </div>
        
        <div className="mb-6">
          <input 
            type="text" 
            placeholder="Enter your writeup title..." 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-secwrite w-full text-lg py-3"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm mb-1 text-gray-400">Platform</label>
            <select 
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="input-secwrite w-full"
            >
              <option value="" disabled>Select Platform</option>
              <option value="hackTheBox">HackTheBox</option>
              <option value="tryHackMe">TryHackMe</option>
              <option value="picoCTF">PicoCTF</option>
              <option value="vulnHub">VulnHub</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm mb-1 text-gray-400">Difficulty</label>
            <div className="flex gap-4">
              <button 
                onClick={() => setDifficulty('Easy')}
                className={`px-4 py-2 rounded-md ${
                  difficulty === 'Easy' 
                    ? 'bg-accent text-black' 
                    : 'bg-[#0A1117] border border-[#1B2023] text-[#F5F1F1]'
                }`}
              >
                Easy
              </button>
              <button 
                onClick={() => setDifficulty('Medium')}
                className={`px-4 py-2 rounded-md ${
                  difficulty === 'Medium' 
                    ? 'bg-[#F79F08] text-black' 
                    : 'bg-[#0A1117] border border-[#1B2023] text-[#F5F1F1]'
                }`}
              >
                Medium
              </button>
              <button 
                onClick={() => setDifficulty('Hard')}
                className={`px-4 py-2 rounded-md ${
                  difficulty === 'Hard' 
                    ? 'bg-destructive text-white' 
                    : 'bg-[#0A1117] border border-[#1B2023] text-[#F5F1F1]'
                }`}
              >
                Hard
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm mb-1 text-gray-400">Reading Time (minutes)</label>
            <input 
              type="number" 
              placeholder="0" 
              value={readingTime}
              onChange={(e) => setReadingTime(e.target.value)}
              className="input-secwrite w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm mb-1 text-gray-400">Visibility</label>
            <div className="flex gap-4">
              <button 
                onClick={() => setVisibility('Public')}
                className={`px-4 py-2 rounded-md ${
                  visibility === 'Public' 
                    ? 'bg-primary text-white' 
                    : 'bg-[#0A1117] border border-[#1B2023] text-[#F5F1F1]'
                }`}
              >
                Public
              </button>
              <button 
                onClick={() => setVisibility('Draft')}
                className={`px-4 py-2 rounded-md ${
                  visibility === 'Draft' 
                    ? 'bg-primary text-white' 
                    : 'bg-[#0A1117] border border-[#1B2023] text-[#F5F1F1]'
                }`}
              >
                Draft
              </button>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm mb-1 text-gray-400">Tags</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Add tags (press Enter to add)..." 
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddTag();
                }
              }}
              className="input-secwrite w-full"
            />
          </div>
          
          {tagList.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tagList.map((tag, index) => (
                <div 
                  key={index}
                  className="bg-[#1B2023] text-[#F5F1F1] px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {tag}
                  <button 
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-gray-400 hover:text-white"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm mb-1 text-gray-400">Content</label>
            <div className="border border-[#1B2023] rounded-md">
              <div className="flex border-b border-[#1B2023] p-2">
                <button className="p-1 text-[#F5F1F1] hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h6m6 0H12m0 0V6m0 6v6" />
                  </svg>
                </button>
                <button className="p-1 text-[#F5F1F1] hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
                <button className="p-1 text-[#F5F1F1] hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </button>
                <button className="p-1 text-[#F5F1F1] hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </button>
              </div>
              <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Start writing your writeup content here..."
                className="w-full h-96 bg-[#0A1117] text-[#F5F1F1] p-4 focus:outline-none"
              ></textarea>
            </div>
          </div>
          
          <div>
            <label className="block text-sm mb-1 text-gray-400">Preview</label>
            <div className="border border-[#1B2023] rounded-md h-[430px] overflow-auto">
              <div className="p-4">
                {content ? (
                  <div className="prose prose-invert">
                    {/* This would typically use a markdown renderer */}
                    <pre className="text-[#F5F1F1] whitespace-pre-wrap">{content}</pre>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-400">
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mb-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Your content preview will appear here</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm mb-1 text-gray-400">Screenshots</label>
          <div className="border border-dashed border-[#1B2023] rounded-md p-8 flex flex-col items-center justify-center">
            <div className="mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-center text-[#F5F1F1] mb-2">Drop images here or click to upload</p>
            <p className="text-center text-gray-400 text-sm">PNG, JPG up to 5MB</p>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm mb-1 text-gray-400">Flags</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input 
              type="text" 
              placeholder="Flag name..." 
              value={flagName}
              onChange={(e) => setFlagName(e.target.value)}
              className="input-secwrite"
            />
            <input 
              type="text" 
              placeholder="Flag value..." 
              value={flagValue}
              onChange={(e) => setFlagValue(e.target.value)}
              className="input-secwrite"
            />
            <button 
              onClick={handleAddFlag}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
            >
              Add Flag
            </button>
          </div>
        </div>
        
        <div className="flex justify-end gap-4">
          <button className="px-4 py-2 bg-[#0A1117] border border-[#1B2023] text-[#F5F1F1] rounded">
            Save as Draft
          </button>
          <button 
            onClick={handlePublish}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
          >
            Publish Writeup
          </button>
        </div>
      </main>
    </div>
  );
};

export default WriteupEditor;
