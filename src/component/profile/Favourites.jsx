import React from 'react'
import { RestaurantCart } from '../Navbar/Restaurant/RestaurantCart'

export const Favourites = () => {
    return (
        <div>
            <h1 className='py-5 text-xl font-semibold text-center'>My Favourites</h1>

            <div className='flex flex-wrap justify-center gap-5'>

                {[1, 1, 1].map((item) => <RestaurantCart />)}

            </div>
        </div>
    )
}
