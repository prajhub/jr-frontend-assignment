
"use client";


import TopAlbumImage from "@/app/components/ui/TopAlbumImage"
import getSingleAlbum from "@/lib/getSingleAlbum";
import { Album } from "@/types/album";
import { useSpotifyStore } from "@/store/useStore";
import Image from "next/image";



type Params = {
    params: {
        albumId: string
    }
}



export default async  function AlbumPage({ params: { albumId}}: Params) {

    const spotifyStore = useSpotifyStore();
    const { access_token } = spotifyStore.auth;


    const albumData: Promise<Album> = getSingleAlbum(albumId, access_token)

    const album = await albumData
    console.log(album)

    const trackList = album

   return (
   <>
    
    {album ? <div className="container mx-auto p-6">
      <div className="flex flex-col items-center gap-8 justify-center md:flex-row">
        <div className=" mt-4  ">
           <TopAlbumImage album={album} />
           </div>

           <div className=" ">
           <h2 className="text-4xl font-bold mb-4">{album.name}</h2>
          <p className="text-gray-600 mb-2">
            By: {album.artists[0]?.name}
          </p>

          <p className="text-gray-600 mb-2">
            Out on: {album.release_date}
          </p>
           </div>
   </div>


   <section>
   <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
   <div className="max-w-3xl mx-auto text-center">
   <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
        Tracklist
      </h2>
   </div>
   <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
   <div className="-my-4 divide-y divide-gray-200 ">
   {album.tracks.items.map((track) => (
    <div key={track.id} className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
   <p className="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
          {track.track_number}
          </p>
          <h3 className="text-lg font-semibold text-gray-900 ">
            <p  className="hover:underline">{track.name}</p>
          </h3>
   </div>
   ))}
   
   </div>
   </div>
   </div>
   </section>
   </div> : <p>Loading...</p>}
   </>
   )
    
}