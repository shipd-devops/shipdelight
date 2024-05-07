
import Image from 'next/image';
import React, { FC } from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/slider.css'
import LinkArrow from '../../../public/images/link-arrow.svg'

interface Props {
    slides: any;
    sectionYellow?: any;
}

const SliderCommon: FC<Props> = ({ slides, sectionYellow }) => {
    return (
        <div className="swiper--contaier">
            {/* <Swiper
                spaceBetween={24}
                slidesPerView={'auto'}
                // freeMode={true}
                grabCursor={true}
            > */}
                {slides.map((slide: any, index: number) => (
                    // <SwiperSlide key={index}>
                        <div className={`${slide.full ? "swiperslide--slide full" : "swiperslide--slide"} ${sectionYellow ? 'section-yellow' : ''}`} key={index}>
                            <div>
                                <h3>{slide.title}</h3>
                                <p>{slide.text}</p>
                                {slide.link && <Link className="arrow-link" href={slide.link}>{slide.linkText} <LinkArrow /></Link>}
                            </div>
                            <Image src={slide.image} alt="swiper image" />
                        </div>
                    // </SwiperSlide>
                ))}
            {/* </Swiper> */}
        </div>
    )
}

export default SliderCommon