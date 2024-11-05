import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const RestaurantCart = () => {
  return (
    <Card className='w-[18rem]'>

      <div className={`${true ? 'cursor-pointer' : "cursor-not-allowed"}relative`}>

        <img className='w-full h-[10rem] rounded-t-md object-cover'
          src="https://cdn.pixabay.com/photo/2022/02/10/05/45/lantern-7004643_640.jpg"
          alt=""

        />
        <Chip
          size="small"
          className="absoulute top-2 left-2"
          color={true ? "success" : "error"}
          label={true ? "open" : 'closed'}>

        </Chip>


      </div>
      <div className='p-4 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
          <p className='font-semibold text-lg'>Indian Fast Food</p>
          <p className='text-gray-500 text-sm'>
          perfect for both casual lunches and intimate dinners.
          </p>

        </div>

        <div>
          <IconButton>
            {true?<FavoriteIcon></FavoriteIcon>:<FavoriteBorderIcon></FavoriteBorderIcon>}
          </IconButton>
        </div>

      </div>

    </Card>
  )
}
