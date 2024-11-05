import React from 'react'
import "./Home.css"
import { MultiItemCarousel } from './MultiItemCarousel'
import { RestaurantCart } from '../Restaurant/RestaurantCart'

const restaurant = [1, 1]
export const Home = () => {
    return (
        <div className='pb-20'>
            <section className="banner -z-50 relative flex flex-col justify-center items-center">
                <div className='cover absoulute top-0 left-0 right-0'>
                    <div className=" home-paragraph w-[50vw] z-0 text-center">
                        <p className="text-2xl lg:text-6xl font-bold z-10 py-5 text-white">FoodieHub</p>
                        <p className="z-10 text-gray-300 text-xl lg:text-4xl">Welcome to FoodieHub!..Order delicious meals from your favorite restaurants in just a few clicks. Enjoy the taste of happiness!</p>
                    </div>
                </div>
                <div className='fadout'>


                </div>

            </section>
            <section className='p-10 lg:py-10 lb-px-10 '>
                <p className='text-2xl font-semibold text-gray-400 pb-10'>Top Meels</p>
                <MultiItemCarousel></MultiItemCarousel>
            </section>
            <section className="px-5 lg:px-20 pt-10">
                <h1 className='text2xl font-semibold text-gray-400 pb-8'>Order From Our Handpicked Favourite </h1>
                <div className='flex flex-wrap items-center justify-around gap-2'>
                    {
                        restaurant.map((item) => <RestaurantCart></RestaurantCart>)

                    }
                </div>
            </section>
        </div>
    )
}
