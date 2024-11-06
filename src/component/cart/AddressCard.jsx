import React from 'react';
import { Button, Card } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';


export const AddressCard = ({ item, showButton, handleSelectAddress }) => { // Destructure `showButton` here
  return (
    <Card className='flex gap-5 w-64 p-5'>
      <HouseIcon style={{ color: 'white' }} />
      <div className='space-y-3 text-gray-500'>
        <h1 className='font-semibold text-lg text-white'>Home</h1>
        <p>NO:132/Unawatuna, Galle, Sri Lanka</p>
        {/* Render button conditionally based on showButton */}
        {showButton && (
          <Button
            variant='outlined'
            fullWidth
            onClick={handleSelectAddress(item)}
          >
            Select
          </Button>
        )}
      </div>
    </Card>
  );
};
