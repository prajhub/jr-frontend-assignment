import { create} from 'zustand'

interface AuthData {
    access_token: string | "";
    expires_in: number | null;
    token_type: string | "";
  }


interface Spotify {
    isLoading: boolean
  auth: AuthData
    setIsLoading: (isLoading: boolean) => void
    setAuth: (authData: AuthData) => void;
   
}


export const useSpotifyStore: any = create<Spotify>()((set) => ({
    auth: {
        access_token: '',
        expires_in: null,
        token_type: '',
      },
    isLoading: false,
    setIsLoading: (isLoading: boolean) => set({isLoading}),
    setAuth: (authData) => set({ auth: authData }),
}))