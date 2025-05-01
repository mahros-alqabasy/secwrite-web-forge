
import React from 'react';
import { Link } from 'react-router-dom';

interface Author {
  id: string;
  username: string;
  avatar: string;
}

interface WriteupCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  platform: string;
  tags: string[];
  date: string;
  author: Author;
  imageUrl?: string;
  size?: 'small' | 'large';
}

const WriteupCard: React.FC<WriteupCardProps> = ({
  id,
  title,
  description,
  difficulty,
  platform,
  tags,
  date,
  author,
  imageUrl,
  size = 'small'
}) => {
  const getDifficultyClass = () => {
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
    <Link to={`/writeup/${id}`} className={`block ${size === 'large' ? 'col-span-2' : ''}`}>
      <div className="bg-[#0A1117] rounded-lg border border-[#1B2023] overflow-hidden hover:border-primary/50 transition-all">
        {imageUrl && (
          <div className="w-full h-40 overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="p-4">
          <div className="flex gap-2 mb-2">
            <span className={getDifficultyClass()}>{difficulty}</span>
            <span className="platform-badge">{platform}</span>
            {tags.slice(0, 2).map((tag) => (
              <span key={tag} className="platform-badge">{tag}</span>
            ))}
          </div>
          
          <h3 className="text-lg font-semibold mb-2 text-[#F5F1F1]">{title}</h3>
          <p className="text-sm text-gray-400 mb-4 line-clamp-2">{description}</p>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={author.avatar} alt={author.username} className="w-6 h-6 rounded-full" />
              <span className="text-sm text-[#F5F1F1]">{author.username}</span>
            </div>
            <span className="text-xs text-gray-400">{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WriteupCard;
