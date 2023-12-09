import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.scss';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <div className='container-fluid px-0'>
        <div className='slider'>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <div style={{ width:"100%", height:"600px", borderRadius:"40px"}}>
              <img style={{borderRadius:"10px"}} src="http://thegotrip.com/admin/uploads/account-541943542.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>  <div style={{width:"100%", height:"600px"}}>Slide 2</div></SwiperSlide>
        <SwiperSlide>  <div style={{ width:"100%", height:"600px"}}>Slide 3</div></SwiperSlide>
        <SwiperSlide>  <div style={{ width:"100%", height:"600px"}}>Slide 4</div></SwiperSlide>
   
      </Swiper>
      </div>
    </div>
  );
}
