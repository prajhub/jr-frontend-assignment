
"use client";


import TopAlbumImage from "@/app/components/ui/TopAlbumImage"



type Params = {
    params: {
        albumId: string
    }
}



export default async  function AlbumPage({ params: { albumId}}: Params) {






   return (
    <div>{albumId}</div>
   )
    
}