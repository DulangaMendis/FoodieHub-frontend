import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

const demo = [
  {
    category: "Nuts & seeds",
    ingredients: ["Cashews"]
  },
  {
    category: "Protine",
    ingredients: ["Ground beef", "Bacon strips"]
  },
]


export const MenuCard = () => {
  const handleCheckBocChange=(value)=>{
    console.log("value")
  }
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
              alt='' />
          </div>
          <div className='space-y-1 lg:space-y-5 lg:max-w-2xl pl-3'>
            <p className='font-semibold text-xl text-white'>Burger</p>
            <p className='text-white'>499LKR</p>
            <p className='text-gray-500'>nice food and very delicious !</p>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails className='text-white'>
        <form>
          <div className='flex gap-5 flex-wrap'>
            {
              demo.map((item) =>
                <div>
                  <p>{item.category}</p>
                  <FormGroup>
                    {item.ingredients.map((item) =>
                    <FormControlLabel control={<Checkbox onChange={()=>handleCheckBocChange(item)}/>} label={item} />
                    )}

                  </FormGroup>
                </div>
              )
            }

          </div>
          <div className='pt-5'>
            <Button variant='contained' disabled={false} type='submit'>
              {true?"Add to Cart" : "Out of Stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  )
}
