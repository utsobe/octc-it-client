import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

import bnr1 from '../../assets/bnr-images/bnr-1.png';
import bnr2 from '../../assets/bnr-images/bnr-2.png';
import bnr3 from '../../assets/bnr-images/bnr-3.png';
import bnr4 from '../../assets/bnr-images/bnr-4.png';


const bnrData = [
    {
        image: bnr1,
        bnrTitle: 'This is the banner title',
        bnrBody: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sit reprehenderit unde fuga nemo repellat commodi illo. Doloribus animi provident reprehenderit ducimus consequuntur recusandae doloremque incidunt, ipsa officiis eum quis.'
    },
    {
        image: bnr2,
        bnrTitle: 'This is the banner title',
        bnrBody: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sit reprehenderit unde fuga nemo repellat commodi illo. Doloribus animi provident reprehenderit ducimus consequuntur recusandae doloremque incidunt, ipsa officiis eum quis.'
    },
    {
        image: bnr3,
        bnrTitle: 'This is the banner title',
        bnrBody: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sit reprehenderit unde fuga nemo repellat commodi illo. Doloribus animi provident reprehenderit ducimus consequuntur recusandae doloremque incidunt, ipsa officiis eum quis.'
    },
];

console.log(bnrData.length);


const Banner = () => {
    return (
        <div className="lg:max-w-7xl mx-auto lg:px-12">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >

                {
                    bnrData.map(data =>
                        <SwiperSlide className="min-h-screen lg:px-12">
                            <div className="flex items-center justify-between">
                                <div className="w-full">
                                    <h1 className="text-3xl font-bold">{data.bnrTitle}</h1>
                                    <p className="font-light">{data.bnrBody}</p>
                                </div>
                                <div className="w-full">
                                    <img src={data.image} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Banner;