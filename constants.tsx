
import React from 'react';
import { Youtube, Instagram, Music2, DollarSign } from 'lucide-react';
import { SocialLink } from './types';

export const AVATAR_URL = "https://i.imgur.com/aAdJ2Pe.png";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'livepix',
    label: 'Apoie via LivePix',
    url: 'https://livepix.gg/felipedual',
    icon: 'dollar',
    color: 'bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600',
    description: 'Apoie o canal e as lives!'
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
    case 'tiktok': return <Music2 className="w-6 h-6" />;
    case 'dollar': return <DollarSign className="w-6 h-6" />;
    default: return null;
  }
};
