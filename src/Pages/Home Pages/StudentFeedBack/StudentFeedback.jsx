// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import feedbackimg from "../../../assets/images/feedbakusertry.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const StudentFeedback = () => {
    return (
        <div className='mt-32 px-[8%]'>
            <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='pb-20'>
            <img className='w-[5rem] mx-auto h-[5rem]  rounded-[50%]' src={feedbackimg} alt="" />

                <h1 className='text-2xl mt-6 font-bold text-center'>Web Development</h1>

                <p className='w-[50%] mt-4 text-gray-600 mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro itaque, quidem nobis optio dolorem veritatis harum totam voluptates ullam sed.</p>
               <div className=''>
                    <h3 className='text-lg text-gray-600 text-center mt-6 font-semibold'>Md Nahid Alam</h3>
               
               </div>
            </div>
        </SwiperSlide>





        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>
    );
};

export default StudentFeedback;