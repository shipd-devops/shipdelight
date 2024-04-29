'use client'
import React from 'react'
import { Button, Collapse, Flex } from 'antd';
import Image from "next/image";
import Link from 'next/link';
import type { CollapseProps } from 'antd';
import SmallCard from '@/app/components/SmallCard';
import StateCard from '@/app/components/StateCard';
// IMAGES
import ValueImg from "../../../../public/images/key-feature-elec.webp"
import ValueImg2 from "../../../../public/images/key-feature-elec-2.webp"
import ValueImg3 from "../../../../public/images/key-feature-elec-3.webp"
import WhatLogix from '../../../../public/images/role-shipdelight-elec.webp'
import AnnouncePersonImage from '../../../../public/images/announce-person.webp'
import PlusImage from '../../../../public/images/plus.svg'
import MinusImage from '../../../../public/images/minus.svg'
import ThreeDotsSvg from '../../../../public/images/three-dots.svg'

const page = () => {
    const stats = [
        {
            stats: 'Expected Market Size is $34Bn by 2025',
            description: "The increasing penetration of smartphones and other electronic devices in India's urban and rural areas is driving demand for consumer electronics."
        },
        {
            stats: "Current internet users are 750Mn in India",
            description: "India boasts one of the largest online populations globally. Driving various sectors, including e-commerce, digital payments, etc."
        },
        {
            stats: 'The market is expected to grow at a CAGR of 6.8%',
            description: "This growth reflects the increasing purchasing power of consumers, evolving lifestyles and a growing appetite for innovative devices."
        },
    ];
    const list = [
        {
            title: 'Efficient Issue Resolution',
            text: 'By offering proactive notifications and real-time tracking, ShipDelight enables businesses to swiftly resolve issues and maintain customer satisfaction.'
        },
        {
            title: 'Secondary Movement',
            text: "Alongside primary movement we support secondary movements from Customer Homes to Repair Centres and vice Versa."
        },
        {
            title: 'Faster Order Processing',
            text: 'With automated order management systems and optimized logistics processes, we help businesses to  improve order turnaround times.'
        }
    ];
    const cards = [
        {
            title: 'Omnichannel Pickup',
            des: "We offer omnichannel pickup options, to reach customers faster from designated store locations or warehouses, leading to improved customer satisfaction and reduced costs.",
            image: ValueImg
        },
        {
            title: 'Auto NDR to Boost Conversions',
            des: "Our automated Non-Delivery Report (NDR) management system helps electronics businesses boost order conversions by automatically rescheduling deliveries.",
            image: ValueImg2
        },
        {
            title: 'Brand Experience Page',
            des: "Multi-purpose page to reduce Where is My Order (WISMO) calls, Increase upsell opportunities, and enhance Customer Satisfaction.",
            image: ValueImg3
        },
    ];
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Can you integrate with our existing eCommerce platforms for seamless order processing?',
            children: <p>Yes, we offer integrations with major eCommerce platforms for seamless order processing and fulfillment.</p>,
        },
        {
            key: '2',
            label: 'How do you handle returns and exchanges for electronic products?',
            children: <p>We offer a streamlined process for returns and exchanges, ensuring a hassle-free experience for your customers.</p>,
        },
        {
            key: '3',
            label: 'Can you provide detailed reporting and analytics on our electronic equipment shipments?',
            children: <p>Yes, we offer comprehensive reporting and analytics on electronic equipment shipments, including delivery performance and customer feedback.</p>,
        },
        {
            key: '4',
            label: 'What is your process for handling customer inquiries or complaints related to electronic equipment deliveries?',
            children: <p>We have a dedicated customer support team to address inquiries or complaints promptly and ensure customer satisfaction with electronic equipment deliveries.</p>,
        },
        {
            key: '5',
            label: 'How do you handle reverse logistics for electronic products?',
            children: <p>We have a dedicated reverse logistics process that includes QC/Non-QC options at Customer Location.</p>,
        },
        {
            key: '6',
            label: 'Can you integrate with our existing eCommerce platforms for seamless order processing?',
            children: <p>Yes, we offer integrations with major eCommerce platforms for seamless order processing and fulfillment.</p>,
        }
    ];
    const handleChange = (key: string | string[]) => {
        console.log(key);
    };
    return (
        <main>
            <section className="industry about bg-section common-section bg-section-3">
                <div className="container side small">
                    <div className='banner-info-section'>
                        <div>
                            <h2>Step into the future of electronics shipping with ShipDelight</h2>
                            <p className="title-desc">India's electronics industry is thriving, driven by technological advancements, increasing consumer demand, and a rapidly expanding digital economy.</p>
                        </div>
                        <Link href="/contact-us" className='ant-btn ant-btn-primary btn-main'><span>Get Started</span></Link>
                    </div>
                </div>
            </section>
            <section className='solution normal-section common-section'>
                <div className="container small">
                    <div className="banner-info-section full">
                        <div>
                            <h6>Why Electronics Industry</h6>
                            <h2>The <span>Electronics Industry</span> riding high waves</h2>
                        </div>
                    </div>
                    <StateCard stats={stats} card></StateCard>
                </div>
            </section>
            <section className="section-yellow normal-section info-product" id="overviewProduct">
                <div className="container small">
                    <h6>Role of Shipdelight</h6>
                    <h2>Elevating Electronics Logistics with <span>Shipdelight</span></h2>
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
                            <h2>Key Features for <span>Electronics Logistics Excellence</span></h2>
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