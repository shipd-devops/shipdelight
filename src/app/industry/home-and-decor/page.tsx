'use client'
import React from 'react'
import { Button, Collapse, Flex } from 'antd';
import Image from "next/image";
import type { CollapseProps } from 'antd';
import SmallCard from '@/app/components/SmallCard';
import StateCard from '@/app/components/StateCard';
// IMAGES
import ValueImg from "../../../../public/images/key-feature-home.webp"
import ValueImg2 from "../../../../public/images/key-feature-home-2.webp"
import ValueImg3 from "../../../../public/images/key-feature-home-3.webp"
import WhatLogix from '../../../../public/images/role-shipdelight-home.webp'
import AnnouncePersonImage from '../../../../public/images/announce-person.webp'
import PlusImage from '../../../../public/images/plus.svg'
import MinusImage from '../../../../public/images/minus.svg'
import ThreeDotsSvg from '../../../../public/images/three-dots.svg'

const page = () => {
    const stats = [
        {
            stats: "The revenue is $1.75Bn in India",
            description: "As more individuals prioritize enhancing their living spaces and seek aesthetically pleasing interiors, the market continues to witness sustained growth and innovation."

        },
        {
            stats: "Seamless Access to Diverse Products: The E-commerce Advantage",
            description: "E-commerce has made it easier for consumers to access a wide range of products, from furniture to furnishings, with just a few clicks."

        },
        {
            stats: 'The Indian interior design market exhibits a growth rate (CAGR) of 8.81%',
            description: "As the real estate sector burgeons and urbanization accelerates, the market is poised for sustained growth."

        },
    ];
    const list = [
        {
            title: 'Cost Savings',
            text: 'With ShipDelight’s weight freezing and discrepancy management, Home and Decor businesses can improve profit margins and remain competitive in the market.'
        },
        {
            title: 'Dedicated Account Management',
            text: "ShipDelight assigns dedicated account managers to Brands, serving as a single point of contact for all logistics-related inquiries and support needs."
        },
        {
            title: 'Reverse Logistics Management',
            text: 'By efficiently managing reverse logistics processes, ShipDelight helps businesses minimize return-related costs and maintain customer satisfaction.'
        }
    ];
    const cards = [
        {
            title: 'Weight Discrepancy Management',
            des: "Weight discrepancy management is crucial for the Home and Decor industry to ensure accurate shipping costs and prevent billing disputes.",
            image: ValueImg
        },
        {
            title: 'Warehouse Network',
            des: "Located near major urban centers and consumer hubs, allowing for faster delivery times and reduced transportation costs.",
            image: ValueImg2
        },
        {
            title: 'Appointment-based deliveries',
            des: "This service caters to businesses operating within malls and stores, facilitating seamless and efficient delivery processes.",
            image: ValueImg3
        },
    ];
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'What is the average delivery time for orders within metro cities?',
            children: <p>Our average delivery time for metro cities is 2-3 business days.</p>,
        },
        {
            key: '2',
            label: 'Can you handle large-sized items like furniture and home décor pieces?',
            children: <p>Absolutely, we have the capability to handle and deliver large-sized items with care.</p>,
        },
        {
            key: '3',
            label: 'What measures do you take to prevent damage to items during transit?',
            children: <p>We use high-quality packaging materials and implement careful handling procedures to minimize the risk of damage during transit.</p>,
        },
        {
            key: '4',
            label: 'Do you offer warehousing solutions for storing our inventory?',
            children: <p>Yes, we offer warehousing solutions for storing your inventory and ensuring efficient order fulfillment.</p>,
        },
        {
            key: '5',
            label: 'Do you provide insurance coverage for shipments?',
            children: <p>Yes, we offer insurance coverage for shipments to provide added protection against loss or damage during transit.</p>,
        }
    ];
    const handleChange = (key: string | string[]) => {
        console.log(key);
    };
    return (
        <main>
            <section className="industry about bg-section common-section bg-section-6">
                <div className="container side small">
                    <div className='banner-info-section'>
                        <div>
                            <h2>Transforming Spaces, One Delivery at a Time</h2>
                            <p className="title-desc">The home and decor industry in India is experiencing a remarkable surge, fueled by changing lifestyle preferences, urbanization, and a growing emphasis on interior design.</p>
                        </div>
                        <Button type="primary" className='btn-main'>
                            Get Started
                        </Button>
                    </div>
                </div>
            </section>
            <section className='solution normal-section common-section'>
                <div className="container small">
                    <div className="banner-info-section full">
                        <div>
                            <h6>Why home & decor industry</h6>
                            <h2>Charting New Horizons in <span>Home Decor</span></h2>
                        </div>
                    </div>
                    <StateCard stats={stats} card></StateCard>
                </div>
            </section>
            <section className="section-yellow normal-section info-product" id="overviewProduct">
                <div className="container small">
                    <h6>Role of Shipdelight</h6>
                    <h2>Elevating Home Decor Logistics with <span>Shipdelight</span></h2>
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
                            <h2>Key Features for <span>home & decor Logistics Excellence</span></h2>
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