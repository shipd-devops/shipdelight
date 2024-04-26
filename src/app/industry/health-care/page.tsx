'use client'
import React from 'react'
import { Button, Collapse, Flex } from 'antd';
import Image from "next/image";
import type { CollapseProps } from 'antd';
import SmallCard from '@/app/components/SmallCard';
import StateCard from '@/app/components/StateCard';
// IMAGES
import ValueImg from "../../../../public/images/key-feature-health.webp"
import ValueImg2 from "../../../../public/images/key-feature-health-2.webp"
import ValueImg3 from "../../../../public/images/key-feature-health-3.webp"
import WhatLogix from '../../../../public/images/role-shipdelight-4.webp'
import AnnouncePersonImage from '../../../../public/images/announce-person.webp'
import PlusImage from '../../../../public/images/plus.svg'
import MinusImage from '../../../../public/images/minus.svg'
import ThreeDotsSvg from '../../../../public/images/three-dots.svg'

const page = () => {
    const stats = [
        {
            stats: 'Current vale of industry is $50 Bn in india',
            description: "With a rich legacy of producing high-quality pharmaceuticals and a burgeoning domestic market, India's pharmaceutical industry continues to steady expansion globally."

        },
        {
            stats: "Indian Pharma meets 40% of the generic demand in US",
            description: "This significant contribution underscores India's pivotal role as a global leader in pharmaceutical manufacturing and export."

        },
        {
            stats: 'Expected Market Growth is 32.5% by 2032',
            description: "This projection underscores the industry's resilience and potential for  expansion amid evolving landscapes and market dynamics."

        },
    ];
    const list = [
        {
            title: 'Enhanced Regulatory Compliance',
            text: 'With expertise in pharmaceutical logistics and regulatory affairs, we ensure adherence to quality, safety, and regulatory requirements throughout the supply chain.'
        },
        {
            title: 'Track and Trace',
            text: "ShipDelight's track and trace capabilities enable health and pharma businesses to monitor the movement of their products in real-time and maintain visibility across the supply chain."
        },
        {
            title: 'Efficient Order Processing',
            text: 'With automated order management systems, minimize the time it takes to fulfil orders and deliver products with improved operational efficiency.'
        }
    ];
    const cards = [
        {
            title: 'Cross-border Shipping',
            des: "We facilitate cross-border shipping for health and pharma businesses, enabling them to expand their reach and tap into international markets. ",
            image: ValueImg
        },
        {
            title: 'Distribution Support',
            des: "By leveraging our extensive network of distribution centers and logistics partners, we minimize stockouts and ensure product availability.",
            image: ValueImg2
        },
        {
            title: 'Weight Discrepancy Management',
            des: "By proactively freezing weight, businesses minimize shipping expenses and optimize logistics costs, contributing to improved profitability",
            image: ValueImg3
        },
    ];
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'How do you handle customer inquiries or complaints related to pharmaceutical product deliveries?',
            children: <p>We have a dedicated customer support team trained to address inquiries or complaints related to pharmaceutical product deliveries promptly and effectively.</p>,
        },
        {
            key: '2',
            label: 'What steps do you take to ensure the safety and security of pharmaceutical shipments during transit, including protection against contamination or tampering?',
            children: <p>We implement stringent security measures and use tamper-evident packaging to protect pharmaceutical shipments against contamination or tampering during transit.</p>,
        },
        {
            key: '3',
            label: 'Can you accommodate customized delivery schedules or time-sensitive deliveries for pharmaceutical products?',
            children: <p>Yes, we offer flexible delivery scheduling options and expedited services to accommodate time-sensitive deliveries for pharmaceutical products.</p>,
        },
        {
            key: '4',
            label: 'Can you provide real-time tracking and monitoring of pharmaceutical shipments to ensure timely delivery and proactive issue resolution?',
            children: <p>Yes, we offer real-time tracking and monitoring capabilities for pharmaceutical shipments to ensure timely delivery and proactive issue resolution.</p>,
        },
        {
            key: '5',
            label: 'How do you ensure the confidentiality of pharmaceutical product information, including sensitive data?',
            children: <p>We have strict confidentiality policies and secure data management systems to safeguard sensitive pharmaceutical product information and sensitive data.</p>,
        }
    ];
    const handleChange = (key: string | string[]) => {
        console.log(key);
    };
    return (
        <main>
            <section className="industry about bg-section common-section bg-section-4">
                <div className="container side small">
                    <div className='banner-info-section'>
                        <div>
                            <h2>Ensuring Seamless Delivery of Vital Healthcare Products</h2>
                            <p className="title-desc">India's health and pharma industry is a cornerstone of public health, providing essential medicines, vaccines, and healthcare products all across the Globe.</p>
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
                            <h6>Why Healthcare Industry</h6>
                            <h2>Healthy Horizons of the <span>Healthcare Industry</span></h2>
                        </div>
                    </div>
                    <StateCard stats={stats} card></StateCard>
                </div>
            </section>
            <section className="section-yellow normal-section info-product" id="overviewProduct">
                <div className="container small">
                    <h6>Role of Shipdelight</h6>
                    <h2>Elevating Healthcare Logistics with <span>Shipdelight</span></h2>
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
                            <h2>Key Features for <span>Healthcare Logistics Excellence</span></h2>
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