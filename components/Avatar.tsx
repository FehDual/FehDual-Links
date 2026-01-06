
import React from 'react';
import { AVATAR_URL } from '../constants.tsx';

const Avatar: React.FC = () => {
  return (
    <div className="relative group flex justify-center items-end h-[380px] w-full">
      <div className="absolute bottom-2 w-56 h-48 rounded-3xl bg-gradient-to-b from-yellow-500/10 to-transparent border border-yellow-500/20 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-yellow-400/40 group-hover:scale-105 shadow-2xl">
        <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      <div className="absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-yellow-400/25 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

      <div 
        className="relative z-10 w-[550px] h-full transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 pointer-events-none flex items-start justify-center overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 98%)',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 98%)'
        }}
      >
        <img 
          src={AVATAR_URL} 
          alt="FelipeDual Minecraft Avatar"
          className="w-full h-full object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] animate-float"
          style={{ 
            transform: 'translateY(22%)',
            filter: 'drop-shadow(0 0 30px rgba(250, 204, 21, 0.2))' 
          }}
        />
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(22%); }
          50% { transform: translateY(18%); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Avatar;
