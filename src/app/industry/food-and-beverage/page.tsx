'use client'
import React from 'react'
import { Button, Collapse, Flex } from 'antd';
import Image from "next/image";
import type { CollapseProps } from 'antd';
import SmallCard from '@/app/components/SmallCard';
import StateCard from '@/app/components/StateCard';
import Link from 'next/link';
// IMAGES
import ValueImg from "../../../../public/images/key-feature-food.webp"
import ValueImg2 from "../../../../public/images/key-feature-food-2.webp"
import ValueImg3 from "../../../../public/images/key-feature-food-3.webp"
import WhatLogix from '../../../../public/images/role-shipdelight-5.webp'
import AnnouncePersonImage from '../../../../public/images/announce-person.webp'
import PlusImage from '../../../../public/images/plus.svg'
import MinusImage from '../../../../public/images/minus.svg'
import ThreeDotsSvg from '../../../../public/images/three-dots.svg'

const page = () => {
    const stats = [
        {
            stats: "India's F&B sector holds 27% of the share in the D2C space. ",
            description: "With a focus on agility, innovation, and customer engagement, F&B brands are well-positioned to harness the immense potential of the D2C channel."

        },
        {
            stats: "Revenue in the F&B market is $905.20Bn in 2023.",
            description: "With innovative products, market dynamics, and evolving consumer behaviors, F&B players are poised to capitalize on emerging trends."

        },
        {
            stats: 'CAGR 2023-2028, The market is expected to grow annually by 8.40%',
            description: "By leveraging technology, and focusing on product differentiation  F&B players can meet preferences of Indian consumers."

        },
    ];
    const list = [
        {
            title: 'Supply Chain Visibility',
            text: 'ShipDelight offers supply chain visibility tools that allow food and beverage businesses to track the movement of their products from production to delivery.'
        },
        {
            title: 'Risk Management',
            text: "By offering contingency planning, alternative routing options, and proactive risk mitigation strategies, ShipDelight helps businesses minimize the impact of unforeseen events and maintain business continuity."
        },
        {
            title: 'Seasonal Demand Management',
            text: 'ShipDelight helps food and beverage businesses manage seasonal demand fluctuations by offering flexible shipping and storage solutions. '
        }
    ];
    const cards = [
        {
            title: 'Distribution Network',
            des: "With strategically located warehouses and distribution centers, ShipDelight ensures timely and efficient delivery of products, even to remote and rural areas, expanding market reach and accessibility.",
            image: ValueImg
        },
        {
            title: 'Global Standard of FEFO',
            des: "By prioritizing the dispatch of products according to the global standard of First Expired, First Out (FEFO), we help businesses reduce the risk of expired inventory and maintain product quality throughout the supply chain.",
            image: ValueImg2
        },
        {
            title: 'Multi-channel Distribution',
            des: "We support multi-channel distribution, enabling them to reach customers through various sales channels, including e-commerce platforms and offline channels.",
            image: ValueImg3
        },
    ];
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Do you offer value-added services, such as labeling or repackaging, for food products?',
            children: <p>Yes, we provide value-added services, including labeling and repackaging, to meet the specific requirements of food products.</p>,
        },
        {
            key: '2',
            label: 'How do you handle the transportation of bulk food items, such as grains or liquids?',
            children: <p>We have specialized equipment and expertise to handle the transportation of bulk food items, ensuring safe and efficient delivery.</p>,
        },
        {
            key: '3',
            label: 'Can you provide references or case studies of your successful handling of food shipments for other clients in the industry?',
            children: <p>Yes, on request we can provide references or case studies demonstrating our successful track record in handling food shipments for other clients in the industry.</p>,
        },
        {
            key: '4',
            label: 'What steps do you take to prevent contamination or spoilage of food products during transit?',
            children: <p>We provide an inventory management system which adheres to the global standard of First Expired, First Out (FEFO)</p>,
        },
        {
            key: '5',
            label: 'What is FEFO?',
            children: <p>FEFO stands for "First Expired, First Out." It's a method of inventory management in the food and beverage industry where products with the earliest expiration dates are used or sold first to minimize waste and ensure product freshness.</p>,
        }
    ];
    const handleChange = (key: string | string[]) => {
        console.log(key);
    };
    return (
        <main>
            <section className="industry about bg-section common-section bg-section-5">
                <div className="container side small">
                    <div className='banner-info-section'>
                        <div>
                            <h2>Delivering Quality and Freshness to Every Table</h2>
                            <p className="title-desc">India's food and beverage industry is a vibrant and integral part of the nation's culture and economy.</p>
                        </div>
                        <Link href="/contact-us" className='ant-btn ant-btn-primary btn-main'><span>Get Started</span></Link>
                    </div>
                </div>
            </section>
            <section className='solution normal-section common-section'>
                <div className="container small">
                    <div className="banner-info-section full">
                        <div>
                            <h6>Why Food & Beverage Industry</h6>
                            <h2>Why Logistics is Essential for the <span>Food & Beverage Industry?</span></h2>
                        </div>
                    </div>
                    <StateCard stats={stats} card></StateCard>
                </div>
            </section>
            <section className="section-yellow normal-section info-product" id="overviewProduct">
                <div className="container small">
                    <h6>Role of Shipdelight</h6>
                    <h2>Elevating Food & Beverage Logistics with <span>Shipdelight</span></h2>
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
                            <h2>Key Features for <span>Food & Beverage Logistics Excellence</span></h2>
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