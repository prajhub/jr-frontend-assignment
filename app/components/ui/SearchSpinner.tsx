"use client";

import {ThreeDots} from 'react-loader-spinner'

export default function SearchSpinner() {
    return (
        <div><ThreeDots 
        height="40" 
        width="40" 
        radius="9"
        color="#4fa94d" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        
        visible={true}
         /></div>
    )
}