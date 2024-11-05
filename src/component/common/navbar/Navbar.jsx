import { Avatar, Badge, IconButton } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { purple } from '@mui/material/colors';
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className="px-5 z-50 py-[0.8rem] bg-[#5C2FC2] lg:px-20 flex justify-between items-center">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li className="logo font-semibold text-gray-300 text-2xl">
          FoodieHub
        </li>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-10">
        <div>
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div className="flex items-center justify-center h-full">
          <Avatar sx={{ bgcolor: "white", color: purple.A700 }}>C</Avatar>
        </div>
        <div>
          <IconButton>
            <Badge color="primary" badgeContent={3}>
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>

      </div>
    </div>
  );
};