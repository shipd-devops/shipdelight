'use client'
import React from 'react'
import { Button, Space, Input, Flex } from 'antd';
import Image from "next/image";
//IMAGES
import Feature1 from "../../../../public/images/biker-features.webp"
import Feature2 from "../../../../public/images/biker-features-2.webp"
import Feature3 from "../../../../public/images/biker-features-3.webp"
import Feature4 from "../../../../public/images/biker-features-4.webp"
import Feature5 from "../../../../public/images/biker-features-5.webp"
import SolutionBannerImage from '../../../../public/images/sol-banner-b2b-13.webp'
import HandMap from '../../../../public/images/hand-map.webp'
import BenefitImg from '../../../../public/images/benefit-img.webp'
import BottomImg from '../../../../public/images/bottom-section.webp'
// COMPONENTS
import FeatureSection from '@/app/components/FeatureSection';
import WorkFlowCard from '@/app/components/WorkFlowCard';
import BenefitCard from '@/app/components/BenefitCard';


const page = () => {
    const featureSlides = [
        {
            type:'Features',
            titleHightlight: 'End-to-end',
            title: 'Movement Support',
            text: "The Biker App facilitates both forward and reverse movement of B2C shipments, allowing bikers to efficiently handle deliveries and returns with ease.",
            image: Feature1,
            sectionColor: 'section-grey'
        },
        {
            type:'Features',
            titleHightlight: 'COD',
            title: 'Management',
            text: "With integrated COD management capabilities, the Biker App enables bikers to collect cash on delivery payments seamlessly, ensuring transparency and accountability in financial transactions.",
            image: Feature2,
            sectionColor: 'section-yellow'
        },
        {
            type:'Features',
            titleHightlight: 'GPS-enabled',
            title: 'Order Visibility',
            text: "Bikers can access real-time order visibility through GPS-enabled tracking, allowing them to navigate to delivery locations efficiently and keep customers informed about the status of their orders.",
            image: Feature3,
            sectionColor: 'section-grey',
        },
        {
            type:'Features',
            titleHightlight: 'Doorstep Discount',
            title: 'to Boost Sales Conversion',
            text: "The Biker App empowers bikers to offer doorstep discounts to customers, incentivizing purchases and boosting sales conversion rates, thereby driving business growth for LSPs.",
            image: Feature4,
            sectionColor: 'section-yellow',
        },
        {
            type:'Features',
            titleHightlight: 'Custom Brand',
            title: 'Experience Flows',
            text: "Biker App allows LSPs to create custom brand experience flows, enabling bikers to deliver a personalized and consistent brand experience to customers, enhancing brand loyalty and customer satisfaction.",
            image: Feature5,
            sectionColor: 'section-grey'
        },
    ];
    const workflowData = [
        {
            title: 'Registration',
            text: "Prospective bikers register through the Biker App by providing essential details such as contact information, vehicle details, and identification documents."
        },
        {
            title: 'Background Check (KYC)',
            text: "ShipDelight conducts comprehensive background checks and Know Your Customer (KYC) verification to ensure the reliability and integrity of registered bikers."
        },
        {
            title: 'Training and Support',
            text: "Approved bikers undergo training sessions to familiarize themselves with the Biker App's features, delivery protocols, and customer service standards. ShipDelight provides ongoing support and guidance to help bikers navigate their roles effectively."
        },
        {
            title: 'Activation and Deployment',
            text: "Once training is complete and all requirements are met, bikers are activated and deployed for delivery assignments. They receive continuous support and assistance to ensure smooth operations and optimal performance."
        }
    ]
    const benefitData = [
        {
            title: 'Centralized Order Management for Bikers',
            text: "The Biker App provides a centralized platform for order management, allowing bikers to access and manage delivery assignments efficiently, streamlining operations and improving productivity."
        },
        {
            title: 'COD Visibility',
            text: 'Biker App offers transparent COD visibility, enabling bikers to track cash collection and remittance status in real-time, ensuring accuracy and accountability in financial transactions.'
        },
        {
            title: 'Efficient Returns Management (QC and Non-QC)',
            text: "The Biker App facilitates efficient management of returns, both quality-checked (QC) and non-quality-checked (non-QC), enabling bikers to process returns swiftly and accurately, enhancing customer satisfaction and retention."
        },
    ];
    return (
        <main>
            <section className="solution gradient-section">
                <div className="container side">
                    <div className='banner-info-section'>
                        <div>
                            <p className='banner-info-section--title'>Biker App</p>
                            <h2>Seamless Deliveries, Happy Bikers: ShipDelight's Biker Application</h2>
                            <p className="title-desc">At ShipDelight, we understand that bikers are the backbone of last-mile delivery in India.</p>
                        </div>
                        <div className="search-bar book-demo">
                            <Space.Compact style={{ width: '100%' }}>
                                <Input type='email' placeholder="Your work email address" />
                                <Button type="primary" className="btn-main">Book a Demo</Button>
                            </Space.Compact>
                        </div>
                    </div>
                    <div className='banner-img-section'>
                        <Image src={SolutionBannerImage} alt="solution page banner" className="banner-img" />
                    </div>
                </div>
            </section>
            <section className='solution common-section normal-section over-section'>
                <div className="container side start">
                    <div className='banner-info-section'>
                        <div>
                            <h6>OVERVIEW</h6>
                            <h2><span>Mastering Last-Mile Logistics for </span>Bikers on the Move</h2>
                            <p className="">Biker navigate through bustling streets and winding alleys, expanding the reach of logistics service providers (LSPs) and ensuring timely deliveries to customers' doorsteps. That's why we've developed the Biker App, a powerful tool designed to empower and support these unsung heroes of the logistics industry. With features tailored to enhance efficiency, visibility, and customer satisfaction, the Biker App is your key to unlocking the full potential of last-mile delivery.</p>
                        </div>
                    </div>
                    <div className='sub-img-section'>
                        <Image src={HandMap} alt="graph" className="banner-img" />
                    </div>
                </div>
            </section>
            <div className='position-relative'>
                <FeatureSection sticky={true} featureSlides={featureSlides}></FeatureSection>
            </div>
            <section className='solution common-section section-yellow'>
                <div className="container">
                    <div className="banner-info-section full">
                        <div>
                            <h6>HOW DOES IT WORK</h6>
                            <h2>Simplified Workflow for<span> Seamless Shipping</span></h2>
                        </div>
                    </div>
                    <WorkFlowCard workflowData={workflowData}></WorkFlowCard>
                </div>
            </section>
            <section className='solution common-section benefit-section-not-common'>
                <div className="container">
                    <div className='benefit-container'>
                        <div className='benefit-logo section-grey'>
                            <div className="">
                                <div>
                                    <h6>Benefits</h6>
                                    <h2>Other<span> Benefits</span></h2>
                                </div>
                                <div className='benefit-img'>
                                    <Image src={BenefitImg} alt='image of a girl reading' className='benefit-icon' ></Image>
                                </div>
                            </div>
                        </div>
                        <div className='benefit-info section-grey'>
                            <BenefitCard benefitData={benefitData}></BenefitCard>
                        </div>
                    </div>
                </div>
            </section>
            <section className="solution gradient-section common-section b-0">
                <div className="container">
                    <div className='banner-info-section full center footer'>
                        <Flex vertical align='center'>
                            <h2>Explore More Logistics Solutions from <span> ShipDelight </span></h2>
                            <div className="search-bar book-demo">
                                <Space.Compact style={{ width: '100%' }}>
                                    <Input type='email' placeholder="Your work email address" />
                                    <Button type="primary" className="btn-main">Book a Demo</Button>
                                </Space.Compact>
                            </div>
                        </Flex>
                        <div className='solution-footer-img'>
                            <Image src={BottomImg} alt="bottom image" className="banner-img" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page