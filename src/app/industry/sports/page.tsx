'use client'
import React from 'react'
import { Button, Collapse, Flex } from 'antd';
import Image from "next/image";
import type { CollapseProps } from 'antd';
import SmallCard from '@/app/components/SmallCard';
import StateCard from '@/app/components/StateCard';
import Link from 'next/link';
// IMAGES
import ValueImg from "../../../../public/images/key-feature-3.webp"
import ValueImg2 from "../../../../public/images/key-feature-2.webp"
import ValueImg3 from "../../../../public/images/key-feature.webp"
import WhatLogix from '../../../../public/images/role-shipdelight-1.webp'
import AnnouncePersonImage from '../../../../public/images/announce-person.webp'
import PlusImage from '../../../../public/images/plus.svg'
import MinusImage from '../../../../public/images/minus.svg'
import ThreeDotsSvg from '../../../../public/images/three-dots.svg'

const page = () => {
    const cards = [
        {
            title: 'Strong Exchanges Feature',
            des: "Whether it's a size issue or a preference change, our platform ensures a seamless exchange process, enhancing customer satisfaction and loyalty.",
            image: ValueImg3
        },
        {
            title: 'Managed Weight Discrepancy',
            des: "Shipping sports equipment involves variance weight and dimensions, hence we ensure accurate shipping costs, and eliminate surprises for both businesses and customers.",
            image: ValueImg2
        },
        {
            title: 'COD for Tier-3 and Rural Locations',
            des: "Cash on Delivery services tailored specifically for tier-3 cities and rural areas, enabling businesses to penetrate deeper into these markets with confidence.",
            image: ValueImg
        },
    ];
    const stats = [
        {
            stats: 'Revenues crossed over ₹14000 Cr.',
            description: 'Indian sports industry revenues crossed (The spending includes sports sponsorship, media spends and endorsements).'

        },
        {
            stats: '20% increment in Merchandise sales',
            description: 'The advent of digital platforms has revolutionized online sports merchandise sales witnessing a significant surge, indicating a strong demand for sports-related products and apparel.'

        },
        {
            stats: 'Adult Participation increased',
            description: "With a young and increasingly health-conscious population, there's a surge in youth participation in sports and fitness activities."

        },
    ];
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Do you provide real-time tracking for shipments?',
            children: <p>Yes, we offer real-time tracking for all shipments, providing visibility from pickup to delivery.</p>,
        },
        {
            key: '2',
            label: 'What is your network coverage for delivering sports equipment across India?',
            children: <p>We have a nationwide network covering 27000+ pin codes for seamless delivery.</p>,
        },
        {
            key: '3',
            label: 'Can you handle bulk orders during peak seasons?',
            children: <p> Yes, we have the capacity to manage high volumes of orders during peak seasons efficiently.</p>,
        },
        {
            key: '4',
            label: 'How do you handle Cash on Delivery (COD) payments for our customers?',
            children: <p>We provide COD payment options with efficient payment reconciliation processes.</p>,
        },
        {
            key: '5',
            label: 'Do you offer insurance coverage for shipments?',
            children: <p>Yes, we offer coverage for shipments to protect against loss or damage as well as Certificate of Fact.</p>,
        },
        {
            key: '6',
            label: 'Can you handle both B2C and B2B shipments?',
            children: <p>Yes, we have the capabilities to handle both B2C and B2B shipments seamlessly.</p>,
        },
        {
            key: '7',
            label: 'Can you accommodate specific delivery timeframes or schedules for our customers?',
            children: <p>Yes, we offer flexible delivery options, including scheduled deliveries, to meet your customers' needs.</p>,
        },
    ];
    const handleChange = (key: string | string[]) => {
        console.log(key);
    };
    const list = [
        {
            title: 'Facilitating Seamless Transactions',
            text: 'We streamline the entire e-commerce process, from order placement to delivery, ensuring a seamless and hassle-free experience.'
        },
        {
            title: 'Brand Reputation Enhancement',
            text: 'Build trust and credibility among customers by consistently delivering on-time, accurate shipments.'
        },
        {
            title: 'Expanding Market Reach',
            text: 'We enable businesses to expand their customer base and reach new demographics in Bharat, thereby fueling growth in the sports industry.'
        }
    ];
    return (
        <main>
            <section className="industry about bg-section common-section">
                <div className="container side small">
                    <div className='banner-info-section'>
                        <div>
                            <h2>Unlocking Potential: Empowering the Sports Industry</h2>
                            <p className="title-desc">India's sports industry is experiencing unprecedented growth, fuelled by increasing participation, rising disposable income, and a growing appetite for fitness and leisure activities.</p>
                        </div>
                        <Link href="/contact-us" className='ant-btn ant-btn-primary btn-main'><span>Get Started</span></Link>
                    </div>
                </div>
            </section>
            <section className='solution normal-section common-section'>
                <div className="container small">
                    <div className="banner-info-section full">
                        <div>
                            <h6>Why Sports Industry</h6>
                            <h2>The Indian<span> Sports Story</span></h2>
                        </div>
                    </div>
                    <StateCard stats={stats} card></StateCard>
                </div>
            </section>
            <section className="section-yellow normal-section info-product" id="overviewProduct">
                <div className="container small">
                    <h6>Role of Shipdelight</h6>
                    <h2>Elevating Sports Logistics with <span>Shipdelight</span></h2>
                    <div className='info-product--info'>
                        <div className="info-product--detail-list">
                            {list.map((item, index) => (
                                <Flex gap={12} vertical key={index}>
                                    <h4>{item.title}</h4>
                                    <div className="info-product--detail-list--item">
                                        <ThreeDotsSvg />
                                        <p>{item.text}</p>
                                    </div>
                                </Flex>
                            ))}
                        </div>
                        <div>
                            <Image src={WhatLogix} alt="Platform" className="platform" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='solution common-section normal-section'>
                <div className="container small">
                    <div className="banner-info-section full">
                        <div>
                            <h6>Features</h6>
                            <h2>Key Features for <span>Sports Logistics Excellence</span></h2>
                        </div>
                    </div>
                    <SmallCard cards={cards} />
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
    )
}

export default page