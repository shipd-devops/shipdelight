'use client'
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Space, Input, Flex, Form } from 'antd';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import SliderCommon from "../components/SliderCommon";
import BrandList from "../components/BrandsList";
import ImageTab from "../components/ImageTab";
import Testimonial from "../components/Testimonials";
import StateCard from "../components/StateCard";
// IMAGES
import HomeBanner from '../../../public/images/home-banner.webp'
import SwiperImage from '../../../public/images/slide-feature.webp'
import SwiperImage2 from '../../../public/images/slide-feature-2.webp'
import SwiperImage3 from '../../../public/images/slide-feature-3.webp'
import SwiperImage4 from '../../../public/images/slide-feature-4.webp'
import SwiperImage5 from '../../../public/images/slide-feature-5.webp'
import OurObjective from "../../../public/images/our-objective.webp"
import ImageIndia from '../../../public/images/india-shipdelight.webp'
import D2CIcons from '../../../public/images/d2c-icons.webp'
import PlusImage from '../../../public/images/plus.svg'
import MinusImage from '../../../public/images/minus.svg'
import D2c from '../../../public/images/d2c-interagte.webp'
import D2cM from '../../../public/images/d2c-interagte-mobile.webp'
import AnnouncePersonImage from '../../../public/images/announce-person.webp'


export default function Home() {
    const slides = [
        {
            title: 'Seamless courier partner integration',
            text: 'Our team will directly integrate your preferred Courier Partners. Ready integration with 27+ courier partners available.',
            image: SwiperImage
        },
        {
            title: 'Auto-NDR to Boost Conversions',
            text: 'Customized auto-reattempt facility for better delivery conversion, our clients have experienced up to 10% improvements in conversion.',
            image: SwiperImage2
        },
        {
            title: 'Priority rule setting',
            text: 'We will set priority rules based on zone, weight, and rates to ensure optimal shipping decisions according to your current agreements.',
            link: '/solution/returns',
            linkText: 'Learn more',
            image: SwiperImage3
        },
        {
            title: 'Unified Delivery Management',
            text: "Feel free to explore and activate Express Delivery options seamlessly from a single interface, optimizing your shipping process.",
            link: '/solution/communications',
            linkText: 'Learn more',
            image: SwiperImage4
        },
        {
            title: 'Refunds',
            text: "Offer your customers hassle-free one-click returns and exchanges, as the ShipDelight Team will take the responsibility for coordinating. You can also choose from QC/Non-QC based on your Brand’s Policies.",
            full: true,
            image: SwiperImage5
        }
    ];
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'What is included in the curated pilot offer for iLogix for up to 3000 orders?',
            children: <p>D2C Insider Members can avail end-to-end use of the iLogix platform for up to 3000 orders. This includes Forward Movement, Reverse Movement, NDR, Business Intelligence, etc.</p>,
        },
        {
            key: '2',
            label: 'What priority rules are set by ShipDelight?',
            children: <p>Priority rules are set by ShipDelight based on zone, weight, and rates to optimize shipping decisions.</p>,
        },
        {
            key: '3',
            label: 'What options are available for returns and exchanges, and how can brands choose between QC and Non-QC?',
            children: <p>Brands can choose between QC and Non-QC based on their Brand Policies for returns and exchanges, the same can be told to the ShipDelight Team.</p>,
        },
        {
            key: '4',
            label: "How does ShipDelight's Auto-NDR feature help boost conversions?",
            children: <p>ShipDelight's NDR feature enables the auto-reattempt facility for better delivery conversion, with clients experiencing up to 10% improvements.</p>,
        },
        {
            key: '5',
            label: 'How does ShipDelight ensure seamless integration with preferred courier partners?',
            children: <p>ShipDelight has ready API integrations with courier partners through its Logistics Intelligence Platform that can be enabled at a click.</p>,
        },
    ];
    const handleChange = (key: string | string[]) => {
        console.log(key);
    };
    const router = useRouter();
    const handleSendEmail = (values: any) => {
        localStorage.setItem('email', values.email);
        router.push(`/book-a-demo`)
    }
    return (
        <main>
            <section className="solution gradient-2 position-relative">
                <div className="container side">
                    <div className='banner-info-section'>
                        <Image src={ImageIndia} alt="shipdelight - India" className="shipdelight-in" />
                        <div>
                            <h2>Get directly connected to Logistics Partners</h2>
                            <p className="title-desc">D2C Insider Members can now avail a Curated Pilot for iLogix for up to 3000 orders without switching their current OMS.</p>
                        </div>
                        <Button type="primary" className="btn-main">Get in Touch</Button>
                    </div>
                </div>
                <Image src={D2CIcons} alt="solution page banner" className="banner-img--d2c" />
            </section>
            <section className="product-brand normal-section">
                <div className="container small">
                    <h6>Brands</h6>
                    <h2>Brands <span>We are connected with</span></h2>
                    <BrandList white={true} />
                </div>
            </section>
            <section className='normal-section common-section section-yellow'>
                <div className="container small">
                    <Flex className='purpose'>
                        <div>
                            <h6>What we offer?</h6>
                            <h2 className="">Unlock super savings with <span>iLogix</span></h2>
                            <p>ShipDelight's logistics intelligence platform, iLogix, is your ticket to saving on logistics cost by directly connecting with the courier partners and getting the best prices. </p>
                            <Button type="primary" className="btn-main">Get Started</Button>
                        </div>
                        <div>
                            <Image src={OurObjective} alt='award' />
                        </div>
                    </Flex>
                </div>
            </section>
            <section className="common-section normal-yellow">
                <div className="container">
                    <h6>solutions</h6>
                    <h2>Revolutionize Retail with <span>Post Purchase Experience</span></h2>
                    <SliderCommon slides={slides} sectionYellow />
                    <Button type="primary" className="btn-main">Get in Touch</Button>
                </div>
            </section>
            <section className="integration section-yellow normal-section">
                <div className="container">
                    <h6>Integration</h6>
                    <h2>Seamless Integration Making <span>Shipdelight Your Own</span></h2>
                    <Image className="inte--desktop" src={D2c} alt="D2c" />
                    <Image className="inte--mobile" src={D2cM} alt="D2c" />
                </div>
            </section>
            <section className="common-section normal-section faq faq-bodered position-relative">
                <div className="container">
                    <h6>FAQ’s</h6>
                    <h2>Still Unsure? <span>Find Answer you are looking</span></h2>
                    <Collapse 
                        expandIcon={({ isActive }) => (isActive ? <MinusImage /> : <PlusImage />)} 
                        items={items} defaultActiveKey={['1']} onChange={handleChange} 
                    />
                </div>
                <Image src={AnnouncePersonImage} alt="announcement" className="announce-person" />
            </section>
        </main>
    );
}
