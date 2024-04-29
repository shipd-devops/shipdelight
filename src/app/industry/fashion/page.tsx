'use client'
import React from 'react'
import { Button, Collapse, Flex } from 'antd';
import Image from "next/image";
import type { CollapseProps } from 'antd';
import Link from 'next/link';
import SmallCard from '@/app/components/SmallCard';
import StateCard from '@/app/components/StateCard';
// IMAGES
import ValueImg from "../../../../public/images/key-feature-fashion.webp"
import ValueImg2 from "../../../../public/images/key-feature-fashion-2.webp"
import ValueImg3 from "../../../../public/images/key-feature-fashion-3.webp"
import WhatLogix from '../../../../public/images/role-shipdelight-fashion.webp'
import AnnouncePersonImage from '../../../../public/images/announce-person.webp'
import PlusImage from '../../../../public/images/plus.svg'
import MinusImage from '../../../../public/images/minus.svg'
import ThreeDotsSvg from '../../../../public/images/three-dots.svg'

const page = () => {
    const stats = [
        {
            stats: 'Expected clothings revenue is $105.50Bn by 2024',
            description: 'This growth can be attributed to factors such as increasing disposable income, evolving fashion trends, and a burgeoning middle-class population.'

        },
        {
            stats: "Women's apparel holds market volume of $51.05Bn in 2024.",
            description: "With its substantial market volume, Women's Apparel remains a key driver of growth in the Indian apparel industry."

        },
        {
            stats: 'Expected volume of the apparel market is 40.1Bn by 2028.',
            description: "The market's expansion highlights opportunities for brands to innovate and cater to a diverse range of preferences and needs."

        },
    ];
    const list = [
        {
            title: 'Enhanced Customer Experience',
            text: 'Build trust and loyalty by ensuring timely deliveries, providing real-time tracking, and offering hassle-free returns and exchanges.'
        },
        {
            title: 'Scalability and Flexibility',
            text: "Whether it's handling peak seasons, launching new product lines, or expanding into new markets, our logistics solutions can meet evolving business needs."
        },
        {
            title: 'Cost Savings',
            text: 'By optimizing shipping routes, consolidating shipments, and negotiating favorable rates with carriers, ShipDelight helps businesses reduce shipping expenses.'
        }
    ];
    const cards = [
        {
            title: 'Easy Exchanges',
            des: "Never lose a sale due to size or style preferences. With seamless exchange processes, customers can easily swap sizes or return products.",
            image: ValueImg
        },
        {
            title: 'Managed Returns and Refunds',
            des: "By automating return requests, conducting product inspections, and managing refunds efficiently,  build customer trust and loyalty.",
            image: ValueImg2
        },
        {
            title: 'Flexible Shipping Options',
            des: "By providing flexibility in shipping choices, ShipDelight enables customers to select the option that best suits their needs ensuring conversions.",
            image: ValueImg3
        },
    ];
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Do you offer express delivery options for fashion products?',
            children: <p>Yes, we offer express delivery options for fashion products to ensure quick delivery for time-sensitive orders.</p>,
        },
        {
            key: '2',
            label: 'How do you handle returns for fashion products?',
            children: <p>We have a streamlined returns and exchanges process to ensure hassle-free returns and exchanges for your fashion brand.</p>,
        },
        {
            key: '3',
            label: 'Do you have Exchange options for Customers',
            children: <p>ShipDelight's Exchanges Tool supports a variety of exchange movements, including like-for-like exchanges, size/color exchanges, and product upgrades/downgrades. </p>,
        },
        {
            key: '4',
            label: 'Do you have QC Based Returns and Exchanges?',
            children: <p>We offer QC-based exchanges, allowing brands to automate exchange processes based on predefined quality control criteria. This ensures that only eligible items are accepted for exchange, maintaining product integrity.</p>,
        },
        {
            key: '5',
            label: 'Can you integrate with our existing order management system?',
            children: <p>Yes, we offer seamless integration with existing order management systems to streamline the logistics process for your fashion brand.</p>,
        }
    ];
    const handleChange = (key: string | string[]) => {
        console.log(key);
    };
    return (
        <main>
            <section className="industry about bg-section common-section bg-section-2">
                <div className="container side small">
                    <div className='banner-info-section'>
                        <div>
                            <h2>Seamlessly Connecting Fashion to Customers</h2>
                            <p className="title-desc">India's fashion industry is experiencing a remarkable evolution, driven by a burgeoning middle class, increasing disposable income, and a growing preference for online shopping.</p>
                        </div>
                        <Link href="/contact-us" className='ant-btn ant-btn-primary btn-main'><span>Get Started</span></Link>
                    </div>
                </div>
            </section>
            <section className='solution normal-section common-section'>
                <div className="container small">
                    <div className="banner-info-section full">
                        <div>
                            <h6>Why Fashion Industry</h6>
                            <h2>The <span>Fashion Industry</span> is on the Rise...</h2>
                        </div>
                    </div>
                    <StateCard stats={stats} card></StateCard>
                </div>
            </section>
            <section className="section-yellow normal-section info-product" id="overviewProduct">
                <div className="container small">
                    <h6>Role of Shipdelight</h6>
                    <h2>Elevating Fashion Logistics with <span>Shipdelight</span></h2>
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
                            <h2>Key Features for <span>Fashion Logistics Excellence</span></h2>
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