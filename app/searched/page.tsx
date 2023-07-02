"use client";

import { useSpotifyStore } from "@/store/useStore";
import {  TopAlbum } from "@/types/album";
import Link from "next/link";
import TopAlbumImage from "../components/ui/TopAlbumImage";


export default function Searched() {

    const { albums } = useSpotifyStore();

    





    return (
        <section className="flex flex-col mt-3 mx-auto max-w-7xl">
          <div className="my-4">
            <span className="font-semibold text-lg">
              Albums by: {albums[0]?.artists[0]?.name}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {albums &&
              albums.map((album: TopAlbum) => (
                <Link
                  key={album.id}
                  href={`/album/${album.id}`}
                  className="h-96 flex flex-col p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200"
                >
                  <div className="relative max-h-72 flex-1">
                    <TopAlbumImage album={album} fill />
                  </div>
                  <div className="font-semibold flex items-center justify-between mt-4 mb-1">
                    <p className="w-44 truncate">{album.name}</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      );
}