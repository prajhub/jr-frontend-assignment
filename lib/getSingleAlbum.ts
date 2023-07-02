

// import { useSpotifyStore } from "@/store/useStore";

// export default async function getSingleAlbum(albumId: string) {

    
//     const spotifyStore = useSpotifyStore()

//     const { access_token} = spotifyStore.auth;

//     var authParams = {
       
//        headers: {
//            'Content-Type': 'application/json',
//            Authorization: `Bearer ${access_token}`
//        },
       
//    }
   
//     const res = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, authParams);
  
//     if (!res.ok) throw new Error("Failed to load product");
  
//     return res.json();
//   }
  