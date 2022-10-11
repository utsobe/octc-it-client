import React, { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
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
        bnrTitle: 'Microsoft Office Course',
        bnrBody: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sit reprehenderit unde fuga nemo repellat commodi illo. Doloribus animi provident reprehenderit ducimus consequuntur recusandae doloremque incidunt, ipsa officiis eum quis.'
    },
    {
        image: bnr2,
        bnrTitle: 'Complete Graphic Design Course',
        bnrBody: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sit reprehenderit unde fuga nemo repellat commodi illo. Doloribus animi provident reprehenderit ducimus consequuntur recusandae doloremque incidunt, ipsa officiis eum quis.'
    },
    {
        image: bnr3,
        bnrTitle: 'Digital Marketing Course',
        bnrBody: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sit reprehenderit unde fuga nemo repellat commodi illo. Doloribus animi provident reprehenderit ducimus consequuntur recusandae doloremque incidunt, ipsa officiis eum quis.'
    },
];


const Banner = () => {
    return (
        <div className="lg:max-w-7xl mx-auto lg:px-12 pt-3">
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
                        <SwiperSlide className="h-full lg:px-7 py-5">
                            <div className="flex items-center justify-between">
                                <div className="w-full">
                                    <h1 className="text-5xl font-semibold">{data.bnrTitle}</h1>
                                    <p className="font-light py-5">{data.bnrBody}</p>
                                    <button className="text-base-100 py-3 px-6 bg-primary rounded-md hover:bg-secondary  duration-200 flex items-center">Enroll Now <FaArrowRight className="ml-2" /></button>
                                </div>
                                <div className="w-full max-h-[500px] p-7">
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