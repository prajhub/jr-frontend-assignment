"use client";

import {useQuery} from '@tanstack/react-query'
import { useSpotifyStore } from "@/store/useStore";
import {  TopAlbum } from '@/types/album';
import Link from 'next/link';
import TopAlbumImage from './ui/TopAlbumImage';
import Spinner from './ui/Spinner';



export default function TopAlbums() {

     const spotifyStore = useSpotifyStore()

     const { access_token, } = spotifyStore.auth;

     var authParams = {
        
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`
        },
        
    }
    


     const {data: topAlbums, isLoading} = useQuery<TopAlbum[]>({
        queryKey: ['topAlbums'],
        queryFn: () => fetch('https://api.spotify.com/v1/browse/new-releases', authParams ).then((res) => res.json()).then((data) => {
            
            return data.albums.items
        }),
        enabled: !!access_token,
        staleTime: Infinity, //Preventing refetching data continously,
     })

     console.log(topAlbums)


     if (isLoading) return <div className='flex w-full h-screen items-center justify-center'><Spinner/></div>
     

    return (
        <section className="flex flex-col mt-3 mx-auto max-w-7xl"> 
        <div className="my-4">
        <span className="font-semibold text-lg">Trending albums this week</span>
      </div>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {topAlbums?.map((album: TopAlbum) => (
                    <Link key={album.id} href={
                        `/album/${
                    album.id
                        }` } className="h-96 flex flex-col p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200">
                    
                    <div  className="relative max-h-72 flex-1">
                    <TopAlbumImage album={album} fill />
                   
                    </div>
                    <div className="font-semibold flex items-center justify-between mt-4 mb-1">
                    <p className="w-44 truncate">{album.artists[0]?.name}</p>
                   
            
                    </div>
                    </Link>
                ))}
            </div>
        </section>
    )

}