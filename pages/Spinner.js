import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";



export default function Spinner() {
    return (
        <div className='text-center'>
           <img src='/Spinner.svg' className='w-25' alt='loading...' />
        </div>
    )
}