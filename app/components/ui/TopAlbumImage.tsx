"use client";

import {  useState} from 'react'
import Image from "next/image"
import { TopAlbum } from '@/types/album';

type Props = {
    album: TopAlbum;
    fill?: boolean;
}


export default function TopAlbumImage({album, fill}: Props) {
    const [loading, setLoading] = useState(true)




    return <>
    
    {fill ? (
        <Image
        src={album.images[0]?.url}
          alt={album.name}
          fill
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }}`}
          onLoadingComplete={() => setLoading(false)}
        />
      ) : (
        <Image
        src={album.images[0]?.url}
        alt={album.name}
          width={400}
          height={1000}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }}`}
          onLoadingComplete={() => setLoading(false)}
        />
      )}
    
    </>
}