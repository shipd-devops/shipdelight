'use client'
import { Button, Input, Space } from 'antd';
import Image from 'next/image';
import StateCard from "../components/StateCard";
import Events from '../components/Events';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import '../styles/slider.css'
// IMAGES
import SerachImage from '../../../public/images/search.svg'
import ThreeDotsSvg from '../../../public/images/three-dots.svg'
import EventsImage from '../../../public/images/events.webp'
import EventImage from '../../../public/images/events-image.webp'
import EventSliderImage from '../../../public/images/events-slider-image.webp'

export default function Home() {
    const list = [
        'Lorem ipsum dolor sit amet consectetur.',
        'Lorem ipsum dolor sit amet consectetur.',
        'Lorem ipsum dolor sit amet consectetur.',
        'Lorem ipsum dolor sit amet consectetur.'
    ];
    const stats = [
        {
            stats: '1500+',
            description: 'total attendance'
        },
        {
            stats: '90+',
            description: 'Knowledge sharing talks'
        },
        {
            stats: '30+',
            description: 'Expert speakers'
        },
        {
            stats: '10%',
            description: 'RTO Reduced'
        },
    ];
    const sliderData = [
        EventSliderImage,
        EventSliderImage,
        EventSliderImage,
        EventSliderImage
    ]
    const eventData = [
        {
            img: EventImage,
            cat: 'Marketing',
            title: 'Logistics Innovate Summit',
            detailsTimeStart: '11.00 AM',
            detailsTimeEnd: '3.00 PM',
            detailsAddrress: '402, Town Centre 2, Opp Times Square Building',
            desc:'Lorem ipsum dolor sit amet consectetur. Enim interdum rhoncus sit id elementum lectus.',
            link:'/',
            linkText: 'Register Now'
        },
        {
            img: EventImage,
            cat: 'Marketing',
            title: 'Global Supply Chain Forum',
            detailsTimeStart: '11.00 AM',
            detailsTimeEnd: '3.00 PM',
            detailsAddrress: '402, Town Centre 2, Opp Times Square Building',
            desc:'Lorem ipsum dolor sit amet consectetur. Enim interdum rhoncus sit id elementum lectus.',
            link:'/',
            linkText: 'Register Now'
        },
        {
            img: EventImage,
            cat: 'Marketing',
            title: 'Future of Freight Conference',
            detailsTimeStart: '11.00 AM',
            detailsTimeEnd: '3.00 PM',
            detailsAddrress: '402, Town Centre 2, Opp Times Square Building',
            desc:'Lorem ipsum dolor sit amet consectetur. Enim interdum rhoncus sit id elementum lectus.',
            link:'/',
            linkText: 'Register Now'
        },
        {
            img: EventImage,
            cat: 'Marketing',
            title: 'Future of Freight Conference',
            detailsTimeStart: '11.00 AM',
            detailsTimeEnd: '3.00 PM',
            detailsAddrress: '402, Town Centre 2, Opp Times Square Building',
            desc:'Lorem ipsum dolor sit amet consectetur. Enim interdum rhoncus sit id elementum lectus.',
            link:'/',
            linkText: 'Register Now'
        }
    ]
    return (
        <main>
            <section className="gradient-section banner-section common-section">
                <div className="container small">
                    <h1 className="small">Events & Seminars</h1>
                    <p className="title-desc">Lorem ipsum dolor sit amet consectetur. Vulputate hendrerit amet fringilla ultrices. Velit bibendum nam ultricies mollis luctus </p>
                    <div className="search-bar">
                        <Space.Compact style={{ width: '100%' }}>
                            <Input placeholder="Search Issue" prefix={<SerachImage />} />
                            <Button type="primary" className="btn-main">Search </Button>
                        </Space.Compact>
                    </div>
                </div>
            </section>
            <section className="common-section normal-section">
                <div className="container small">
                    <div className="event-content">
                        <div>
                            <h6>Event</h6>
                            <div className='event-content--list'>
                                <h2>Why you should attend our seminars & events </h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Enim interdum rhoncus sit id elementum lectus.</p>
                                <div className="info-product--detail-list">
                                    {list.map((item, index) => (
                                        <div className="info-product--detail-list--item" key={index}>
                                            <ThreeDotsSvg />
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src={EventsImage} alt='Event' />
                        </div>
                    </div>
                    <StateCard stats={stats}></StateCard>
                </div>
            </section>
            <section className="common-section normal-section section-yellow">
                <div className="container small">
                    <h6>Events & Seminars</h6>
                    <h2>Upcoming Events & Seminars</h2>
                    <Events cardData={eventData} />
                </div>
            </section>
            <section className="common-section normal-section">
                <div className="container small">
                    <h6>Memories</h6>
                    <h2>A Glimpse into <span>Our Events</span></h2>
                    <div className='testimonials normal-pagination'>
                        <Swiper
                            spaceBetween={24}
                            slidesPerView={1}
                            // freeMode={true}
                            pagination={{
                                type: 'fraction',
                            }}
                            navigation={true}
                            loop={true}
                            modules={[Pagination, Navigation]}
                            grabCursor={true}
                        >
                            {sliderData.map((data: any, index: number) => (
                                <SwiperSlide key={index}>
                                    <Image src={data} alt='events' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </main>
    );
}
