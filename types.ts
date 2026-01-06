
export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string;
  color: string;
  description?: string;
}

export enum SocialType {
  YOUTUBE = 'youtube',
  INSTAGRAM = 'instagram',
  TIKTOK = 'tiktok',
  LIVEPIX = 'livepix'
}
