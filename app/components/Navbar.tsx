"use client";



import Link from "next/link";
import {useState} from 'react'
import {InputAdornment, Modal, TextField, } from '@mui/material';
import Box from '@mui/material/Box/Box';
import {HiBackspace} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'

const style = {
    position: 'absolute' as 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

export default function Navbar() {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

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
                <div className='border bg-white rounded-md p-1 text-xs font-semibold'>Ctrl+K</div>
            </button>

            <Modal open={open}
                onClose={handleClose}>
                    <Box sx={style}>
                    <div className='modal-content'>
                    <div className='flex gap-1 items-center  '>
                    <TextField sx={
                                    {width: 1000}
                                }
                               
                                placeholder='Search'
                                variant='outlined'
                                size='small'
                                autoFocus
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
                                }/>
                    </div>
                    </div>
                    </Box>
                </Modal>
                </div>
                
                </div>
            </nav>
       
    )
}