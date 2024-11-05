import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const MenuCard = () => {
  return (
 <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <div className='lg:flex items-center justify-between'>
        <div className='lg:flex item-center lg:gap-5'>
            <img className='w-[7rem] h-[7rem] object-cover'
             src='https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_640.jpg' 
             alt=''/>
        </div>
        <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
            <p className='font-semibold text-xl text-white'>Burger</p>
            <p className='text-white'>499LKR</p>
            <p className='text-white'>nice food and very delicious !</p>
        </div>
      </div>
    </AccordionSummary>
    <AccordionDetails className='text-white'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </AccordionDetails>
  </Accordion>
  )
}
