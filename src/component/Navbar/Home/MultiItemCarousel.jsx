import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import { CarouselItem } from "./CarouselItem";

// Define the data array for the carousel items
const topMeel = [
    { image: "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg", title: "Pizza" },
    { image: "https://cdn.pixabay.com/photo/2024/08/30/14/50/ai-generated-9009466_640.png", title: "Nasi Goreng" },
    { image: "https://cdn.pixabay.com/photo/2021/06/03/01/37/kottu-6305693_640.jpg", title: "Kottu" },
    { image: "https://cdn.pixabay.com/photo/2021/01/19/08/47/sandwich-5930496_640.jpg", title: "Burger" },
    { image: "https://cdn.pixabay.com/photo/2024/06/18/07/13/ramen-8837174_640.png", title: "Ramen" },
    { image: "https://cdn.pixabay.com/photo/2023/06/27/15/16/rice-8092512_1280.jpg", title: "Biriyani" },
    { image: "https://cdn.pixabay.com/photo/2015/07/01/08/42/cake-827399_640.jpg", title: "Chocolate Lava Cake" },
    { image: "https://cdn.pixabay.com/photo/2020/02/15/20/38/noodles-4851996_640.jpg", title: "Spaghetti" },
    { image: "https://cdn.pixabay.com/photo/2014/08/12/20/30/beef-416967_640.jpg", title: "BBQ" },
    { image: "https://cdn.pixabay.com/photo/2017/05/28/01/55/fruit-salad-2349908_640.jpg", title: "Fruit Salads" }
];

export const MultiItemCarousel = () => {
    // Configure carousel settings for multiple items
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrow: false

    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {topMeel.map((item, index) => (
                    <CarouselItem key={index} image={item.image} title={item.title} />
                ))}
            </Slider>
        </div>
    );
};
