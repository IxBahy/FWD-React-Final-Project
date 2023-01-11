import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

export const Error = () => {
    return (
        <>
            <NavBar />
            <div className='error-container'>
                <p>
                    The page you searched for is not found
                </p>
                <Link className='error-buttons' to='/' >Home</Link>
                <Link className='error-buttons' to='/search' >Back</Link>
            </div>
        </>
    )
}
