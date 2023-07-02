"use client";



import Link from "next/link";
import {useState, useEffect} from 'react'
import {InputAdornment, Modal, TextField, } from '@mui/material';
import Box from '@mui/material/Box/Box';
import {HiBackspace} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'
import SearchSpinner from "./ui/SearchSpinner";

import {useQuery} from '@tanstack/react-query'
import { Auth } from "@/types/auth";
import { useSpotifyStore } from "@/store/useStore";
import {useForm} from 'react-hook-form'
import { useRouter } from "next/navigation";


const CLIENT_ID = "048f3d69a8e449629fc644d26417e921"
const CLIENT_SECRET = "78e88f5c354748a794b2935df2aca7f4"

const style = {
    position: 'absolute' as 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1100,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4
};

export default function Navbar() {

    const router = useRouter()

    const form = useForm()
    const {register, handleSubmit, formState} = form
    const {errors} = formState

    const spotifyStore = useSpotifyStore()
    const { access_token } = spotifyStore.auth;


    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleClose = () => {
        setOpen(false);
    };



//Requesting access token from Spotify API

    var authParams = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }


    

    const {data: authData} = useQuery<Auth[]>({
        queryKey: ['authkey'],
        queryFn: () => fetch('https://accounts.spotify.com/api/token', authParams).then((res) => res.json()).then((data) => {
            
            spotifyStore.setAuth(data);
            return data; 
          }),
          enabled: true
    })






    const formSubmit = async (searchdata: any) => {
       setLoading(true)
        const artistParams = {
       
                   headers: {
                       'Content-Type': 'application/json',
                       Authorization: `Bearer ${access_token}`
                   },
                   
               }

               var artist = await fetch('https://api.spotify.com/v1/search?q=' + searchdata.name + '&type=artist', artistParams).then((res) => res.json()).then(data => { return data.artists.items[0].id})


               var album = await fetch('https://api.spotify.com/v1/artists/' + artist + '/albums' + '?include_groups=album&market=US&limit=50', artistParams).then(res => res.json()).then(data => {
               return data.items
               })

               setTimeout(() => {
                spotifyStore.setAlbums(album);
                router.push('/searched');
                setOpen(false);
                setLoading(false)
              }, 5000); 

              
               
               
    }



    return (


        
        
      
        
            <nav className="   bg-gray-200 p-4">
                <div className=" flex justify-between max-w-[900px]">
                <Link href='/'>
                <h1 className=" font-semibold text-3xl">Music Sansar</h1>
                </Link>
                <div>
                <button onClick={
                    () => setOpen(true)
                }
                className='flex gap-3 bg-gray-100 items-center justify-center border  p-2 rounded-md text-gray-500'>
                <BiSearch size={20}/>
                <span className='text-xs font-semibold'>Search...</span>
                
            </button>

            <Modal open={open}
                onClose={handleClose}>
                    <Box sx={style}>
                        <form onSubmit={handleSubmit(formSubmit)}>
                    <div className='modal-content'>
                    <div className='flex flex-col gap-1 items-center  '>
                    {loading ? <SearchSpinner/> : <TextField sx={
                                    {width: 1000}
                                }
                               
                                placeholder='Search for your favorite artist...'
                                variant='outlined'
                                size='small'
                                autoFocus
                                {...register("name", {
                                    required: 'Insert valid artist or album name.'
                                })}
                                fullWidth
                                InputProps={
                                    {
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <BiSearch/>
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <HiBackspace size={20}/>
                                            </InputAdornment>
                                        )
                                    }
                                }/>}
                               { errors.name && (
                                        <span className="text-red-500 mt-2">
                                            {
                                            errors.name.message ?. toString()
                                        } </span>
                                    )}
                    </div>
                    </div>
                    </form>
                    </Box>
                </Modal>
                </div>
                
                </div>
            </nav>
       
    )
}