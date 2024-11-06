import React from 'react'
import { Navbar } from '../component/common/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../component/Navbar/Home/Home'
import { RestaurantDetails } from '../component/Navbar/Restaurant/RestaurantDetails'
import { Cart } from '../component/cart/Cart'
import { Profile } from '../component/profile/Profile'

export const CustomerRouter = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/account/:register' element={<Home/>} />
            <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/my-profile/*' element={<Profile/>} />
        </Routes>

    </div>
  )
}
