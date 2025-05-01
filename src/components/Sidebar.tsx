
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, User, BarChart2, Award, Settings } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
  selectedOptions: string[];
  onToggle: (id: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, options, selectedOptions, onToggle }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xs uppercase text-gray-400 mb-2">{title}</h3>
      {options.map((option) => (
        <div key={option.id} className="flex items-center mb-2">
          <input
            type="checkbox"
            id={option.id}
            checked={selectedOptions.includes(option.id)}
            onChange={() => onToggle(option.id)}
            className="mr-2 h-4 w-4 rounded border-gray-600 text-primary focus:ring-primary"
          />
          <label htmlFor={option.id} className={`text-sm ${option.id === 'medium' ? 'text-[#F79F08]' : option.id === 'hard' ? 'text-destructive' : option.id === 'easy' ? 'text-accent' : 'text-[#F5F1F1]'}`}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

interface SidebarProps {
  variant?: 'navigation' | 'filters';
}

const Sidebar: React.FC<SidebarProps> = ({ variant = 'navigation' }) => {
  const location = useLocation();
  const [difficultyFilters, setDifficultyFilters] = React.useState(['medium']);
  const [platformFilters, setPlatformFilters] = React.useState(['tryHackMe', 'hackTheBox']);
  const [categoryFilters, setCategoryFilters] = React.useState(['webExploitation', 'reverseEngineering']);
  const [dateFilter, setDateFilter] = React.useState('lastMonth');
  
  const toggleDifficultyFilter = (id: string) => {
    setDifficultyFilters(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
  const togglePlatformFilter = (id: string) => {
    setPlatformFilters(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
  const toggleCategoryFilter = (id: string) => {
    setCategoryFilters(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const menuItems = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: FileText, label: 'Writeups', path: '/writeups' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: BarChart2, label: 'Stats', path: '/stats' },
    { icon: Award, label: 'Leaderboard', path: '/leaderboard' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const difficultyOptions = [
    { id: 'easy', label: 'Easy' },
    { id: 'medium', label: 'Medium' },
    { id: 'hard', label: 'Hard' },
  ];

  const platformOptions = [
    { id: 'tryHackMe', label: 'TryHackMe' },
    { id: 'hackTheBox', label: 'HackTheBox' },
    { id: 'picoCTF', label: 'PicoCTF' },
    { id: 'vulnHub', label: 'VulnHub' },
  ];

  const categoryOptions = [
    { id: 'webExploitation', label: 'Web Exploitation' },
    { id: 'cryptography', label: 'Cryptography' },
    { id: 'digitalForensics', label: 'Digital Forensics' },
    { id: 'reverseEngineering', label: 'Reverse Engineering' },
    { id: 'binaryExploitation', label: 'Binary Exploitation' },
    { id: 'osint', label: 'OSINT' },
  ];

  if (variant === 'filters') {
    return (
      <aside className="w-64 bg-[#0A1117] p-4 border-r border-[#1B2023] min-h-[calc(100vh-65px)]">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        
        <FilterSection 
          title="DIFFICULTY" 
          options={difficultyOptions}
          selectedOptions={difficultyFilters}
          onToggle={toggleDifficultyFilter}
        />
        
        <FilterSection 
          title="PLATFORM" 
          options={platformOptions}
          selectedOptions={platformFilters}
          onToggle={togglePlatformFilter}
        />
        
        <FilterSection 
          title="CATEGORY" 
          options={categoryOptions}
          selectedOptions={categoryFilters}
          onToggle={toggleCategoryFilter}
        />
        
        <div className="mb-6">
          <h3 className="text-xs uppercase text-gray-400 mb-2">DATE</h3>
          <select 
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="input-secwrite w-full text-sm"
          >
            <option value="lastMonth">Last Month</option>
            <option value="last3Months">Last 3 Months</option>
            <option value="lastYear">Last Year</option>
            <option value="allTime">All Time</option>
          </select>
        </div>
        
        <button className="w-full py-2 bg-transparent border border-[#1B2023] text-[#F5F1F1] rounded hover:bg-[#1B2023]/50 transition-colors">
          Clear Filters
        </button>
      </aside>
    );
  }

  return (
    <aside className="w-64 bg-[#0A1117] border-r border-[#1B2023] min-h-[calc(100vh-65px)]">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 p-2 rounded ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-[#F5F1F1] hover:bg-[#1B2023]/50'
                  } transition-colors`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
