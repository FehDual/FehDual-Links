import React from 'react';
import Avatar from './components/Avatar.tsx';
import LinkCard from './components/LinkCard.tsx';
import { SOCIAL_LINKS, getIcon } from './constants.tsx';

const App: React.FC = () => {
  const livePix = SOCIAL_LINKS.find(l => l.id === 'livepix');
  const kickLink = SOCIAL_LINKS.find(l => l.id === 'kick');
  const twitchLink = SOCIAL_LINKS.find(l => l.id === 'twitch');
  const socialMedias = SOCIAL_LINKS.filter(l => l.id !== 'livepix' && l.id !== 'kick' && l.id !== 'twitch');

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-start pt-2 pb-12 px-6 md:px-12 overflow-x-hidden bg-zinc-950">
      
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-500/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-yellow-600/5 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <main className="w-full max-w-lg z-10 flex flex-col items-center">
        <Avatar />
        
        <div className="text-center mb-8 mt-2">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-2 italic uppercase">
            FELIPEDUAL
          </h1>
          <div className="h-1.5 w-20 bg-gradient-to-r from-yellow-400 to-amber-600 mx-auto rounded-full mb-4 opacity-90 shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
          <p className="text-zinc-400 font-medium max-w-xs mx-auto text-sm md:text-base leading-relaxed">
            <span className="text-yellow-400 font-bold">Paiaço do Mine</span>
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          {/* APOIO SECTION */}
          {livePix && (
            <div className="group relative">
               <div className="absolute -inset-0.5 bg-[#32BCAD] rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <LinkCard link={livePix} />
            </div>
          )}

          {/* KICK & TWITCH / LIVE SECTION */}
          <div className="flex items-center gap-4 mt-8 mb-4 px-2">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-500/40" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-yellow-400 whitespace-nowrap">Assista ao vivo aqui</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow-500/40" />
          </div>

          <div className="flex flex-col gap-3">
            {kickLink && (
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-[#53FC18] rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                <LinkCard link={kickLink} />
              </div>
            )}

            {twitchLink && (
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-[#9146FF] rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                <LinkCard link={twitchLink} />
              </div>
            )}
          </div>

          {/* REDES SOCIAIS SECTION */}
          <div className="flex items-center gap-4 mt-8 mb-6 px-2">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-500/40" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-yellow-400 whitespace-nowrap">ME SEGUE AÊÊ!</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow-500/40" />
          </div>

          {/* SIDE-BY-SIDE SOCIAL ICONS */}
          <div className="flex flex-wrap justify-center gap-6 w-full px-4 mb-4">
            {socialMedias.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                className={`
                  relative p-4 rounded-2xl flex items-center justify-center text-white
                  ${link.color} shadow-lg transform transition-all duration-300
                  hover:scale-125 hover:-translate-y-2 hover:shadow-2xl active:scale-95
                `}
              >
                {getIcon(link.icon)}
                <div className="absolute -inset-1 bg-white/5 rounded-2xl opacity-0 hover:opacity-100 blur transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <footer className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] text-center">
            <p className="hover:text-yellow-500/50 transition-colors cursor-default">
              &copy; {new Date().getFullYear()} FelipeDual • Todos os direitos reservados
            </p>
          </footer>
        </div>
      </main>

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