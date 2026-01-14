import React from 'react';
import { Youtube, Instagram, MonitorPlay, Twitch } from 'lucide-react';
import { SocialLink } from './types.ts';

export const AVATAR_URL = "https://i.imgur.com/aAdJ2Pe.png";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'livepix',
    label: 'Mande uma mensagem na tela!',
    url: 'https://livepix.gg/felipedual',
    icon: 'pix',
    color: 'bg-[#32BCAD]',
    description: 'Apoie o canal e as lives!'
  },
  {
    id: 'kick',
    label: 'Kick.com/FelipeDual',
    url: 'https://kick.com/felipedual',
    icon: 'kick',
    color: 'bg-[#53FC18]',
    description: 'Lives exclusivas aqui!'
  },
  {
    id: 'twitch',
    label: 'Twitch.tv/FelipeDual',
    url: 'http://twitch.tv/FelipeDual',
    icon: 'twitch',
    color: 'bg-[#9146FF]',
    description: 'Lives também por aqui!'
  },
  {
    id: 'youtube',
    label: 'YouTube @FehDual',
    url: 'https://youtube.com/@FehDual',
    icon: 'youtube',
    color: 'bg-[#FF0000]',
    description: 'Vídeos novos toda semana'
  },
  {
    id: 'instagram',
    label: 'Instagram @FelipeDual',
    url: 'https://instagram.com/FelipeDual',
    icon: 'instagram',
    color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
    description: 'Acompanhe meu dia a dia'
  },
  {
    id: 'tiktok',
    label: 'TikTok @FelipeDual',
    url: 'https://tiktok.com/@FelipeDual',
    icon: 'tiktok',
    color: 'bg-[#000000]',
    description: 'Clipes e trends'
  }
];

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'youtube': return <Youtube className="w-6 h-6" />;
    case 'instagram': return <Instagram className="w-6 h-6" />;
    case 'tiktok': return (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"/>
      </svg>
    );
    case 'pix': return (
      <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
        <path d="M11.917 11.71a2.046 2.046 0 0 1-1.454-.602l-2.1-2.1a.4.4 0 0 0-.551 0l-2.108 2.108a2.044 2.044 0 0 1-1.454.602h-.414l2.66 2.66c.83.83 2.177.83 3.007 0l2.667-2.668h-.253zM4.25 4.282c.55 0 1.066.214 1.454.602l2.108 2.108a.39.39 0 0 0 .552 0l2.1-2.1a2.044 2.044 0 0 1 1.453-.602h.253L9.503 1.623a2.127 2.127 0 0 0-3.007 0l-2.66 2.66h.414z"/>
        <path d="m14.377 6.496-1.612-1.612a.307.307 0 0 1-.114.023h-.733c-.379 0-.75.154-1.017.422l-2.1 2.1a1.005 1.005 0 0 1-1.425 0L5.268 5.32a1.448 1.448 0 0 0-1.018-.422h-.9a.306.306 0 0 1-.109-.021L1.623 6.496c-.83.83-.83 2.177 0 3.008l1.618 1.618a.305.305 0 0 1 .108-.022h.901c.38 0 .75-.153 1.018-.421L7.375 8.57a1.034 1.034 0 0 1 1.426 0l2.1 2.1c.267.268.638.421 1.017.421h.733c.04 0 .079.01.114.024l1.612-1.612c.83-.83.83-2.178 0-3.008z"/>
      </svg>
    );
    case 'kick': return (
      <svg width="24" height="24" viewBox="0 0 512 512" fill="currentColor">
        <path d="M37 .036h164.448v113.621h54.71v-56.82h54.731V.036h164.448v170.777h-54.73v56.82h-54.711v56.8h54.71v56.82h54.73V512.03H310.89v-56.82h-54.73v-56.8h-54.711v113.62H37V.036z" />
      </svg>
    );
    case 'twitch': return <Twitch className="w-6 h-6" />;
    default: return null;
  }
};