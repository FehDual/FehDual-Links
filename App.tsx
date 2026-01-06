
import React, { useState } from 'react';
import Avatar from './components/Avatar';
import LinkCard from './components/LinkCard';
import { SOCIAL_LINKS } from './constants';
import { Share2, Check } from 'lucide-react';

const App: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const livePix = SOCIAL_LINKS.find(l => l.id === 'livepix');
  const others = SOCIAL_LINKS.filter(l => l.id !== 'livepix');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-start pt-2 pb-12 px-6 md:px-12 overflow-x-hidden bg-zinc-950">
      
      {/* Dynamic Background Elements - Yellow/Amber Palette */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-500/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-yellow-600/5 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <main className="w-full max-w-lg z-10 flex flex-col items-center">
        {/* Header Section */}
        <Avatar />
        
        <div className="text-center mb-8 mt-2">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-2 italic uppercase">
            FELIPEDUAL
          </h1>
          <div className="h-1.5 w-20 bg-gradient-to-r from-yellow-400 to-amber-600 mx-auto rounded-full mb-4 opacity-90 shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
          <p className="text-zinc-400 font-medium max-w-xs mx-auto text-sm md:text-base leading-relaxed">
            Criador de conteúdo focado em <span className="text-yellow-400 font-bold">Minecraft</span> e entretenimento digital.
          </p>
        </div>

        {/* Links Grid */}
        <div className="w-full flex flex-col gap-4">
          {/* Priority Link */}
          {livePix && (
            <div className="group relative">
               <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <LinkCard link={livePix} />
            </div>
          )}

          {/* Social Links Separator */}
          <div className="flex items-center gap-4 my-6 px-2">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-500/20" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-yellow-600/80">Redes Sociais</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow-500/20" />
          </div>

          {/* Other Links */}
          <div className="grid grid-cols-1 gap-3 w-full">
            {others.map((link) => (
              <LinkCard key={link.id} link={link} />
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <button 
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 hover:text-white transition-all active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-500" />
                <span>Link Copiado!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Compartilhar Perfil</span>
              </>
            )}
          </button>

          <footer className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] text-center">
            <p className="hover:text-yellow-500/50 transition-colors cursor-default">
              &copy; {new Date().getFullYear()} FelipeDual • Todos os direitos reservados
            </p>
          </footer>
        </div>
      </main>

      {/* Subtle Floating Particles - Yellow */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-yellow-400/40 w-1 h-1 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.4)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-particle ${5 + Math.random() * 10}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          25% { opacity: 1; }
          50% { transform: translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px); }
          75% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default App;
