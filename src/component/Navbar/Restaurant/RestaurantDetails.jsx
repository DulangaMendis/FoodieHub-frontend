import { Divider, FormControl, Grid, RadioGroup, Typography, FormControlLabel, Radio } from '@mui/material';
import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { MenuCard } from './MenuCard';

const categories = [
    "pizza",
    "Biriyani",
    "burger",
    "Ramen",
    "Kottu"
];
const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarion only", value: "vegetarion" },
    { label: "Non-Vegetarion", value: "non_vegetarion" }
];
const menu = [1, 1, 1, 1,]

export const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all")
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)
    }
    return (
        <div className="px-5 lg:px-20 text-white pt-7">
            <section>
                <h3>Home/SriLanka/Nishan Restaurant/3</h3>
                <div>
                    <Grid container spacing={3} className="px-4">
                        <Grid item xs={12}>
                            <img
                                className="w-full h-[40vh] object-cover rounded-md"
                                src="https://cdn.pixabay.com/photo/2022/02/10/05/45/lantern-7004643_1280.jpg"
                                alt="Lantern"
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img
                                className="w-full h-[40vh] object-cover rounded-md"
                                src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg"
                                alt="Lantern"
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img
                                className="w-full h-[40vh] object-cover rounded-md"
                                src="https://cdn.pixabay.com/photo/2020/09/17/12/41/cafe-5579069_640.jpg"
                                alt="Lantern"
                            />
                        </Grid>
                    </Grid>
                </div>

                <div className="pt-3 pb-5">
                    <h1 className="text-4xl font-semibold">Nishan Restaurant</h1>
                    <p className="text-gray-500 flex items-center gap-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consequuntur culpa facere cumque, repellat rem perferendis ducimus officiis eum a omnis fuga illum ex. Iure obcaecati labore quas ex molestias!
                    </p>
                    <p className="text-gray-500 flex items-center gap-3 pt-4">
                        <LocationOnIcon />
                        <span>Unawatuna,Galle</span>
                    </p>
                    <p className="text-gray-500 flex items-center gap-3 pt-2">
                        <CalendarMonthIcon />
                        <span>Mon-Sun: 9.00 AM - 9 PM (Today)</span>
                    </p>
                </div>
                <Divider sx={{ my: 2 }} />

            </section>

            <section className="py-8 lg:flex relative">
                <div className="space-y-10 lg:w-[20%] p-5 shadow-md">
                    <div className="box space-y-5 lg:sticky lg:top-28 d">
                        <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                            Food Type
                        </Typography>
                        <FormControl component="fieldset" className="space-y-5">
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                {foodTypes.map((item) => (
                                    <FormControlLabel
                                        key={item.value}
                                        value={item.value}
                                        control={<Radio />}
                                        label={item.label}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                        <Divider />
                        <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                            Food Categories
                        </Typography>
                        <FormControl component="fieldset" className="space-y-5">
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                {categories.map((item) => (
                                    <FormControlLabel
                                        key={item}
                                        value={item}
                                        control={<Radio />}
                                        label={item}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>


                <div className="space-y-5 lg:w-[80%] lg:pl-10">
                    {menu.map((item) => <MenuCard />)}
                </div>
            </section>
        </div>
    );
};
