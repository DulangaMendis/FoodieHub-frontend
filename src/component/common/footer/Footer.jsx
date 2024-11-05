import React from 'react'
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { Divider } from '@mui/material';

export const Footer = () => {
    return (
        <footer className="text-white py-8 pb-4">
            <Divider className='pb-10' />
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center pt-10">
                <div className="mb-6 lg:mb-0 lg:w-1/3">
                    <h1 className="text-2xl font-semibold">FoodieHub</h1>
                    <p className="text-gray-400 mt-2">
                        At FoodieHub, we bring the world of flavors right to your doorstep. Satisfy your cravings with a click!
                    </p>
                </div>
                <div>
                    <div className="mt-8 border-gray-700 pb-10 text-center text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} FoodieHub. All rights reserved.
                    </div>
                </div>
                <div className="lg:w-1/3 flex justify-center lg:justify-end space-x-4">
                    <a
                        href="https://facebook.com"
                        className="text-gray-400 hover:text-white"
                        aria-label="Facebook"
                    >
                        <Facebook />
                    </a>
                    <a
                        href="https://twitter.com"
                        className="text-gray-400 hover:text-white"
                        aria-label="Twitter"
                    >
                        <Twitter />
                    </a>
                    <a
                        href="https://instagram.com"
                        className="text-gray-400 hover:text-white"
                        aria-label="Instagram"
                    >
                        <Instagram />
                    </a>
                    <a
                        href="https://linkedin.com"
                        className="text-gray-400 hover:text-white"
                        aria-label="LinkedIn"
                    >
                        <LinkedIn />
                    </a>
                </div>
            </div>
        </footer>
    )
}
