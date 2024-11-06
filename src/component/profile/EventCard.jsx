import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia
          component="img" // Specify "img" to render as an image
          height="200" // Set the desired height for the image
          image="https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Event Image" // Add an alt text for accessibility
        />
        <CardContent>
          <Typography variant="h6" component="div">
            Nishan Restaurant
          </Typography>
          <Typography variant="body2" component="div">
            25% discount for first order
          </Typography>
          <div className='py-2 space-y-2'>
            <p>{"galle"}</p>
            <p className='text-sm text-blue-500'>November 6, 2024 15:00 PM</p>
            <p className='text-sm text-red-500'>November 6, 2024 15:00 PM</p>
          </div>
        </CardContent>
        {false && <CardActions>
            <IconButton>
                <DeleteIcon/>
                
            </IconButton>
        </CardActions>}
      </Card>
    </div>
  );
};
