import { IconButton, Chip } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { purple } from '@mui/material/colors';

export const CartItem = () => {
    return (
        <div className='px-5'>
            <div className='lg:flex item-center lg:space-x-5'>
                <div>

                    <img className='w-[5rem] h-[5rem] object-cover' src="https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="" />


                </div>
                <div className='flex iten-center justify-between lg:w-[70%]'>
                    <div className='space-y-1 lg:space-y-3 w-full'>
                        <p className='text-white'>
                            biriyani
                        </p>
                        <div className='justify-between item-center'>
                            <div className='flex item-center space-x-1'>
                                <IconButton>
                                    <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>

                                </IconButton>
                                <div className='w-5 h-5 text-xs items-center justify-center pt-3'>
                                    {5}

                                </div>
                                <IconButton>
                                    <AddCircleOutlineIcon />
                                </IconButton>



                            </div>

                        </div>

                    </div>
                    <p>
                        LKR 1800
                    </p>

                </div>

            </div>
            <div className='pt-3 space-x-2'>

                {[1, 1, 1,].map((item) => <Chip label={"coca-cola"}></Chip>)}

            </div>

        </div>
    )
}
