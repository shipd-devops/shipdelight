'use client'
import React from 'react'
import { Button, Space, Input, Flex } from 'antd';
import Image from "next/image";
//IMAGES
import Feature1 from "../../../../public/images/refunds-feature.webp"
import Feature2 from "../../../../public/images/refunds-feature-2.webp"
import Feature3 from "../../../../public/images/refunds-feature-3.webp"
import SolutionBannerImage from '../../../../public/images/sol-banner-b2b-6.webp'
import HandMap from '../../../../public/images/hand-map.webp'
import BenefitImg from '../../../../public/images/benefit-img.webp'
import BottomImg from '../../../../public/images/bottom-section.webp'
import ShopifyIcon from '../../../../public/images/shopify.svg'
// COMPONENTS
import FeatureSection from '@/app/components/FeatureSection';
import WorkFlowCard from '@/app/components/WorkFlowCard';
import BenefitCard from '@/app/components/BenefitCard';
import BookDemo from '@/app/components/BookDemo';
import { reverse } from 'dns';


const page = () => {
    const featureSlides = [
        {
            type:'Features',
            title: 'Refund',
            titleHightlight: 'Rule Settings',
            text: "Our Refund Tool offers flexible refund rule settings, allowing brands to customize refund policies based on specific criteria. Whether it's refund without return, refund after reaching the warehouse, or refund on pickup, brands can set up rules that align with their business needs and customer preferences.",
            image: Feature1,
            sectionColor: 'section-grey',
            reverse: true
        },
        {
            type:'Features',
            title: 'Refund',
            titleHightlight: 'Authorization Workflow',
            text: "ShipDelight's Refund Tool streamlines the refund authorization workflow, automating the approval process for refund requests. By setting up predefined rules and criteria, brands can expedite refund authorization and ensure consistent handling of refund requests, minimizing manual intervention and processing time.",
            image: Feature2,
            sectionColor: 'section-yellow',
            reverse: true
        },
        {
            type:'Features',
            title: 'Multiple',
            titleHightlight: 'Refund Options',
            text: "We support multiple refund options, including full refunds, partial refunds, store credits, or just product exchange without refund. Our flexible solution supports a host of Payment Gateways, this also allows brands to offer the most flexible refund plans without having to change their current provider. ",
            image: Feature3,
            sectionColor: 'section-grey',
            reverse: true
        }
    ];
    const workflowData = [
        {
            title: 'Initiate Refund Request',
            text: "Customers initiate refund requests through your website or app, selecting the reason for refund and preferred refund option (full refund, partial refund, store credit, etc.)."
        },
        {
            title: 'Refund Authorization',
            text: "ShipDelight's Refund Tool automatically reviews refund requests based on predefined criteria, authorizing eligible refunds and notifying customers of the next steps."
        },
        {
            title: 'Refund Processing',
            text: "Refunds are processed by your finance team, who verify the refund details and initiate the refund transaction through integrated payment gateways."
        },
        {
            title: 'Refund Resolution',
            text: "ShipDelight's Refund Tool updates the status of refund transactions in real-time, allowing customers to track the progress of their refunds and providing merchants with insights into refund trends and performance."
        }
    ]
    const benefitData = [
        {
            title: 'Increased Customer Confidence',
            text: "Building trust and confidence in customers, encouraging them to shop with peace of mind and trust in your brand. This fosters long-term relationships and drives business growth and success."
        },
        {
            title: 'Enhanced Refund Management',
            text: "Real-time tracking and reporting of refunds, enabling merchants to monitor refund trends, identify root causes of refunds, and implement targeted strategies for improvement."
        },
        {
            title: 'Reduced Refund Processing Time',
            text: "By automating refund authorization and processing, minimize refund processing time, enabling faster resolution of refund requests and improving operational efficiency."
        },
    ];
    return (
        <main>
            <section className="solution gradient-section">
                <div className="container side">
                    <div className='banner-info-section'>
                        <div>
                            <p className='banner-info-section--title'>Refunds</p>
                            <h2>Unlock the Power of Easy Exchanges with ShipDelight</h2>
                            <p className="title-desc">Speedy refunds are key to earning customer satisfaction and loyalty.</p>
                        </div>
                        <BookDemo data={true} />
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
                            <h2>Earn Customer Trust with Transparent <span> Refunds by ShipDelight.</span></h2>
                            <p className="">By processing refunds quickly, brands demonstrate their commitment to customer service and show that they value their customers' time and trust. A fast and hassle-free refund experience not only resolves customer issues promptly but also leaves a positive impression, fostering goodwill and encouraging repeat purchases. </p>
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