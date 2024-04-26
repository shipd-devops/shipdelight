'use client'
import React from 'react'
import { Button, Space, Input, Flex } from 'antd';
import Image from "next/image";
//IMAGES
import Feature1 from "../../../../public/images/exchange-feature.webp"
import Feature2 from "../../../../public/images/exchange-feature-2.webp"
import Feature3 from "../../../../public/images/exchange-feature-3.webp"
import SolutionBannerImage from '../../../../public/images/sol-banner-b2b-5.webp'
import HandMap from '../../../../public/images/hand-map.webp'
import BenefitImg from '../../../../public/images/benefit-img.webp'
import BottomImg from '../../../../public/images/bottom-section.webp'
import ShopifyIcon from '../../../../public/images/shopify.svg'
// COMPONENTS
import FeatureSection from '@/app/components/FeatureSection';
import WorkFlowCard from '@/app/components/WorkFlowCard';
import BenefitCard from '@/app/components/BenefitCard';
import { reverse } from 'dns';


const page = () => {
    const featureSlides = [
        {
            type:'Features',
            title: 'Variety of',
            titleHightlight: 'Exchange Movements',
            text: "ShipDelight's Exchanges Tool supports a variety of exchange movements, including like-for-like exchanges, size/color exchanges, and product upgrades/downgrades. This flexibility allows brands to cater to diverse customer interactions.",
            image: Feature1,
            sectionColor: 'section-grey',
            reverse: true
        },
        {
            type:'Features',
            title: 'QC-based',
            titleHightlight: 'Exchanges',
            text: 'Our tool offers QC-based exchanges, allowing brands to automate exchange processes based on predefined quality control criteria. This feature ensures that only eligible items are accepted for exchange.',
            image: Feature2,
            sectionColor: 'section-yellow',
            reverse: true
        },
        {
            type:'Features',
            title: 'Easy',
            titleHightlight: 'Exchange Initiation',
            text: "With our tool, customers can initiate exchanges effortlessly through Brands website or app. An intuitive interface guides customers through the exchange process, providing clear instructions and options for selecting the desired exchange item.",
            image: Feature3,
            sectionColor: 'section-grey',
            reverse: true
        }
    ];
    const workflowData = [
        {
            title: 'Initiate Exchange',
            text: "Customers initiate exchanges through your website or app, selecting the reason for exchange and preferred exchange item (like-for-like, size/color change, etc.)."
        },
        {
            title: 'Exchange Authorization',
            text: "ShipDelight's Exchanges Tool automatically reviews exchange requests based on predefined criteria, authorizing eligible exchanges and notifying customers of the next steps."
        },
        {
            title: 'Exchange Processing',
            text: "Exchanged items are received and processed by your fulfillment team, who verify the condition of the items and facilitate the exchange process according to the predefined exchange policy."
        },
        {
            title: 'Exchange Resolution',
            text: "ShipDelight's Exchanges Tool updates the status of exchanged items in real-time, allowing customers to track the progress of their exchanges and providing merchants with insights into exchange trends and performance."
        }
    ]
    const benefitData = [
        {
            title: 'Reduced Exchange Processing Time',
            text: "By automating exchange authorization, tracking, and resolution, ShipDelight's Exchanges Tool minimizes exchange processing time, enabling faster resolution of exchange requests and improving operational efficiency."
        },
        {
            title: 'Enhanced Exchange Management',
            text: "ShipDelight's Exchanges Tool provides real-time tracking and reporting of exchanges, enabling merchants to monitor exchange trends, identify root causes of exchanges, and implement targeted strategies for improvement."
        },
        {
            title: 'Increased Customer Confidence',
            text: "A clear and simple exchange policy, facilitated by ShipDelight's Exchanges Tool, instills confidence in customers, encouraging them to explore new products and make purchases without hesitation. This builds trust and loyalty to your brand, ultimately driving business growth and success."
        },
    ];
    return (
        <main>
            <section className="solution gradient-section">
                <div className="container side">
                    <div className='banner-info-section'>
                        <div>
                            <p className='banner-info-section--title'>Exchanges</p>
                            <h2>Unlock the Power of Easy Exchanges with ShipDelight</h2>
                            <p className="title-desc">A clear and simple exchange policy is a strategic investment for brands.</p>
                        </div>
                        <Flex className='solutionWrap' align='center' gap={20}>
                            <div className="search-bar book-demo">
                                <Space.Compact style={{ width: '100%' }}>
                                    <Input type='email' placeholder="Your work email address" />
                                    <Button type="primary" className="btn-main">Book a Demo</Button>
                                </Space.Compact>
                            </div>
                            <a href="https://apps.shopify.com/instareturns" target="_blank" type='primary' className='ant-btn ant-btn-primary shopify'><ShopifyIcon />Install Shopify App</a>
                        </Flex>
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
                            <h2>Turn Returns into Revenues with <span> Effortless Exchanges by ShipDelight.</span></h2>
                            <p className="">It provides customers with the flexibility and confidence to explore new products, knowing that they have the option to exchange if needed. By offering exchanges, brands can salvage potentially lost sales, retain customers, and build long-term relationships based on trust and satisfaction.</p>
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