import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../State/Authentication/Action';

const menu = [
    { title: "Orders", icon: <ShoppingBagIcon /> },
    { title: "Favourites", icon: <FavoriteIcon /> },
    { title: "Address", icon: <HomeIcon /> },
    { title: "Payments", icon: <AccountBalanceWalletIcon /> },
    { title: "Notifications", icon: <NotificationsIcon /> },
    { title: "Events", icon: <EventIcon /> },
    { title: "Logout", icon: <LogoutIcon /> }
];

export const ProfileNavigation = ({ open, handleClose }) => {
    const isSmallScreen = useMediaQuery("(max-width:900px)");
    const navigate = useNavigate();
    const dispatch = useDispatch();  // Call useNavigate as a function here

    const handleNavigate = (item) => {
        if(item.title === "Logout" ){
            dispatch(logOut());
            navigate("/")
        }
        else
        navigate(`/my-profile/${item.title.toLowerCase()}`);
    };

    return (
        <div>
            <Drawer
                variant={isSmallScreen ? "temporary" : "permanent"}
                onClose={handleClose}
                open={isSmallScreen ? open : true}
                anchor='left'
                sx={{ zIndex: 1, position: "sticky" }}
            >
                <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16'>
                    {menu.map((item, i) => (
                        <React.Fragment key={i}>
                            <div
                                onClick={() => handleNavigate(item)}
                                className='px-5 flex items-center space-x-5 cursor-pointer'
                            >
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                            {i !== menu.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </div>
            </Drawer>
        </div>
    );
};
