import React, { FC } from 'react'

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import '../styles/slider.css'

interface Props {
    teamData: any;
}


const TeamSlider: FC<Props> = ({ teamData }) => {
  return (
    <div className='team-memeber-container testimonials'>
           <Swiper
                spaceBetween={20}
                slidesPerView={3.9}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                loop={true}
                modules={[Pagination, Navigation]}
                grabCursor={true}
                breakpoints={{
                    100: {
                        slidesPerView: 1,
                      },
                    768: {
                        slidesPerView: 2.4,
                    },
                    1025: {
                        slidesPerView: 3.9,
                    },
                }}
            >
                {teamData.map((slide: any, index: number) => (
                    <SwiperSlide key={index}>
                       <div className="team-item">
                        <div className="img-container">
                            <Image src={slide.img} alt={slide.name} className='member-img'></Image>
                        </div>
                        <div>
                            <p className='member-name'>{slide.name}</p>
                            <p className='member-title'>{slide.title}</p>
                        </div>
                       </div>
                       
                    </SwiperSlide>
                ))}
            </Swiper>
    </div>
  )
}

export default TeamSlider