import { AlbumArray} from '@/types/album';
import { create} from 'zustand'

interface AuthData {
    access_token: string | "";
    expires_in: number | null;
    token_type: string | "";
  }

  type Album = {
    album_group: string;
    album_type: string;
    artists: any[]; // You can specify the type for artists based on the actual structure
    external_urls: { spotify: string };
    href: string;
    id: string;
    images: any[]; // You can specify the type for images based on the actual structure
    is_playable: boolean;
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  };


interface Spotify {
   
  auth: AuthData
    
    setAuth: (authData: AuthData) => void;

    albums: Album[];
    setAlbums: (albums: Album[]) => void;
   
}


export const useSpotifyStore: any = create<Spotify>()((set) => ({
    auth: {
        access_token: '',
        expires_in: null,
        token_type: '',
      },
   
    setAuth: (authData) => set({ auth: authData }),

    albums: [],
    setAlbums: (albums) => set({ albums }),
}))