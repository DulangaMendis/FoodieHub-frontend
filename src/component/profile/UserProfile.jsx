import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

export const UserProfile = () => {
    const handleLogOut = () => {

    }
    return (
        <div className='min-h-[80vh] flex flex-col justify-center itmes-center text-center'>

            <div className='flex flex-col items-center justify-center'>
                <AccountCircleIcon sx={{ fontSize: "9rem" }} />
                <h1 className='py-5 text-2xl font-semibold'>Dulanga Mendis</h1>
                <p>Email : dulanga_example123@gmail.com</p>
                <Button variant='contained' onClick={handleLogOut} sx={{ margin: "2rem 0rem" }}>Logout</Button>

            </div>

        </div>
    )
}
