'use client'
import React from 'react'
import { Button, Space, Input, Flex } from 'antd';
import Image from "next/image";
//IMAGES
import Feature1 from "../../../../public/images/return-features.webp"
import Feature2 from "../../../../public/images/return-features-2.webp"
import Feature3 from "../../../../public/images/return-features-3.webp"
import Feature4 from "../../../../public/images/return-features-4.webp"
import SolutionBannerImage from '../../../../public/images/sol-banner-b2b-4.webp'
import HandMap from '../../../../public/images/hand-map.webp'
import BenefitImg from '../../../../public/images/benefit-img.webp'
import BottomImg from '../../../../public/images/bottom-section.webp'
import ShopifyIcon from '../../../../public/images/shopify.svg'
// COMPONENTS
import FeatureSection from '@/app/components/FeatureSection';
import WorkFlowCard from '@/app/components/WorkFlowCard';
import BenefitCard from '@/app/components/BenefitCard';
import BookDemo from '@/app/components/BookDemo';


const page = () => {
    const featureSlides = [
        {
            type:'Features',
            title: 'Easy',
            titleHightlight: 'Initiation',
            text: "With ShipDelight's Returns Tool, customers can initiate returns easily through Brand's website or app. A curated interface guides users through the returns process, providing clear instructions and options for returning items, exchange, refund, or store credit.",
            image: Feature1,
            sectionColor: 'section-grey',
            reverse: true
        },
        {
            type:'Features',
            title: 'QC-based',
            titleHightlight: 'Returns',
            text: 'Only allow returns based on predefined criteria. Check images, and gather reasons to ensure that only eligible returns are accepted, reducing the likelihood of fraudulent returns and minimizing processing time.',
            image: Feature2,
            sectionColor: 'section-yellow',
            reverse: true
        },
        {
            type:'Features',
            title: 'Automated',
            titleHightlight: 'Returns Authorization',
            text: "By setting up predefined rules and criteria, you can expedite return authorization and ensure consistent handling of return requests, reducing manual intervention and processing time.",
            image: Feature3,
            sectionColor: 'section-grey',
            reverse: true
        },
        {
            type:'Features',
            title: 'Real-time',
            titleHightlight: 'Returns Tracking',
            text: "With real-time tracking of returns,  both customers and merchants can monitor the status of returned items throughout the process. This transparency builds trust and confidence in the returns process.",
            image: Feature4,
            sectionColor: 'section-yellow',
            reverse: true
        }
    ];
    const workflowData = [
        {
            title: 'Initiate Returns',
            text: "Customers initiate returns through your website or app, selecting the reason for the return and preferred return option (exchange, refund, store credit)."
        },
        {
            title: 'Returns Authorization',
            text: "Images are attached with each request to review return requests based on predefined criteria, authorizing eligible returns and notifying customers of the next steps."
        },
        {
            title: 'Returns Processing',
            text: "Returned items are received and processed by your fulfillment team, who verify the condition of the items and take appropriate action based on the returns policy (exchange, refund, store credit)."
        },
        {
            title: 'Returns Resolution',
            text: "ShipDelight's Returns Tool updates the status of returned items in real-time, allowing customers to track the progress of their returns and providing merchants with insights into returns trends and performance."
        }
    ]
    const benefitData = [
        {
            title: 'Enhanced Customer Satisfaction',
            text: "ShipDelight's Returns Tool simplifies the returns process, making it easy and convenient for customers to return items and receive resolution promptly. This enhances customer satisfaction and loyalty, leading to repeat purchases and positive word-of-mouth."
        },
        {
            title: 'Reduced Processing Time',
            text: "By automating returns authorization, tracking, and resolution, ShipDelight's Returns Tool minimizes returns processing time, enabling faster resolution of return requests and improving operational efficiency."
        },
        {
            title: 'Improved Management',
            text: "ShipDelight's Returns Tool provides real-time tracking and reporting of returns, enabling merchants to monitor returns trends, identify root causes of returns, and implement targeted strategies for improvement."
        },
    ];
    return (
        <main>
            <section className="solution gradient-section">
                <div className="container side">
                    <div className='banner-info-section'>
                        <div>
                            <p className='banner-info-section--title'>Returns</p>
                            <h2>Seamless Returns, Happy Customers</h2>
                            <p className="title-desc">Our Returns and Exchanges Tool is designed to streamline your returns process and enhance customer satisfaction.</p>
                        </div>
                        <Flex className='solutionWrap' align='center' gap={20}>
                            <BookDemo data={true} />
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
                            <h2>Simplify Your Returns Journey with <span> One Click</span></h2>
                            <p className="">A clear and simple return policy not only attracts new buyers but also encourages repeat customers to experiment with new items on your website.</p>
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
                            <BookDemo data={true} />
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