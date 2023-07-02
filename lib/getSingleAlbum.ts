



export default async function getSingleAlbum(albumId: string, access_token: string) {

    
    

    var authParams = {
       
       headers: {
           'Content-Type': 'application/json',
           Authorization: `Bearer ${access_token}`
       },
       
   }
   
    const res = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, authParams);
  
    if (!res.ok) throw new Error("Failed to load product");
  
    return res.json();
  }
  