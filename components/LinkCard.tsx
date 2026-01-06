
import React from 'react';
import { SocialLink } from '../types';
import { getIcon } from '../constants';

interface LinkCardProps {
  link: SocialLink;
}

const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  const isSpecial = link.id === 'livepix';

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative w-full p-4 rounded-2xl flex items-center justify-between
        transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-2xl
        ${isSpecial 
          ? 'bg-zinc-900 border-2 border-yellow-500/50 hover:border-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]' 
          : 'bg-zinc-900/50 border border-white/5 hover:bg-zinc-800/80 hover:border-white/20'
        }
        backdrop-blur-sm
      `}
    >
      {/* Background Glow for Special Link */}
      {isSpecial && (
        <div className="absolute inset-0 -z-10 bg-yellow-500/5 blur-2xl group-hover:bg-yellow-500/20 transition-all rounded-2xl" />
      )}

      <div className="flex items-center gap-4">
        <div className={`
          p-3 rounded-xl flex items-center justify-center text-white
          ${link.color} shadow-lg
          group-hover:scale-110 transition-transform duration-300
        `}>
          {getIcon(link.icon)}
        </div>
        
        <div className="flex flex-col">
          <span className="font-semibold text-zinc-100 text-lg group-hover:text-white transition-colors">
            {link.label}
          </span>
          {link.description && (
            <span className="text-sm text-zinc-400 font-medium group-hover:text-zinc-300 transition-colors">
              {link.description}
            </span>
          )}
        </div>
      </div>

      <div className={`transition-colors ${isSpecial ? 'text-yellow-500' : 'text-zinc-600 group-hover:text-yellow-500'}`}>
        <svg xmlns="http://www.w3.org/2000/00" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
};

export default LinkCard;
