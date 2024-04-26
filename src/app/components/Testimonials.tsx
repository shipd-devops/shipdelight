
import Image from 'next/image';
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import '../styles/slider.css'

interface Props {
    slides: any;
}

const Testimonial: FC<Props> = ({ slides }) => {
    return (
        <div className="testimonials">
           <Swiper
                spaceBetween={24}
                slidesPerView={2}
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
                        slidesPerView: 2,
                    },
                }}
            >
                {slides.map((slide: any, index: number) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial--slide">
                            <div className="testimonial--content">
                                <div className="testimonial--content--upper">
                                    <p>{slide.text}</p>
                                    <div className="testimonial--content--details">
                                        <div>
                                            <p className='name'>{slide.name}</p>
                                            <p>{slide.role}</p>
                                        </div>
                                        <slide.image />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Testimonial