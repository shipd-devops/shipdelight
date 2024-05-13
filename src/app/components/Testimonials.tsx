
import Image from 'next/image';
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import '../styles/slider.css'
import Quotes from '../../../public/images/quotes.webp'

interface Props {
    slides: any;
    version?: boolean;
}

const Testimonial: FC<Props> = ({ slides, version }) => {
    return (
        <div className={version ? "testimonials version-testimonial" : "testimonials"}>
           <Swiper
                spaceBetween={24}
                slidesPerView={2}
                pagination={{
                    type: version ? 'bullets' : 'fraction',
                    clickable: true,
                }}
                navigation={version ? false : true}
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
                        <div className={version ? "testimonial--slide version" : "testimonial--slide"}>
                            <div className="testimonial--content">
                                <div className="testimonial--content--upper">
                                    {version && <Image className='quotes--image' src={Quotes} alt='quote' />}                                    
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