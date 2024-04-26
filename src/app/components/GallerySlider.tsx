import Image from 'next/image';
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import '../styles/slider.css'

interface Props {
    galleryData: any;
}

const GallerySlider: FC<Props> = ({ galleryData }) => {
    return (
        <div className='team-memeber-container testimonials'>
            <Swiper
                spaceBetween={20}
                slidesPerView={2.1}
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
                        slidesPerView: 1.4,
                    },
                    1025: {
                        slidesPerView: 2.1,
                    },
                }}
            >
                {galleryData.map((slide: any, index: number) => (
                    <SwiperSlide key={index}>
                        <div className="gallery-item">
                            <Image src={slide.img} alt={slide.alt} className='gallery-img'></Image>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default GallerySlider