'use client'
import React from 'react'
import { Button, Space, Input, Flex } from 'antd';
import Image from "next/image";
//IMAGES
import Feature1 from "../../../../public/images/omni-features.webp"
import Feature2 from "../../../../public/images/omni-features-2.webp"
import Feature3 from "../../../../public/images/omni-features-3.webp"
import SolutionBannerImage from '../../../../public/images/sol-banner-b2b-8.webp'
import HandMap from '../../../../public/images/hand-map.webp'
import BenefitImg from '../../../../public/images/benefit-img.webp'
import BottomImg from '../../../../public/images/bottom-section.webp'
import ShopifyIcon from '../../../../public/images/shopify.svg'
// COMPONENTS
import FeatureSection from '@/app/components/FeatureSection';
import WorkFlowCard from '@/app/components/WorkFlowCard';
import BenefitCard from '@/app/components/BenefitCard';
import StateCard from '@/app/components/StateCard';
import { reverse } from 'dns';

const page = () => {
    const stats = [
        {
            stats: '31.7%',
            description: 'CAGR Omnichannel Growth from 2021-2026'
        },
        {
            stats: '$200 Bn',
            description: 'By 2025, the Indian e-commerce market is expected to reach'
        },
        {
            stats: '73%',
            description: 'Consumers expect brands offer for  seamless shopping experience across online and offline channels'
        },
        {
            stats: '50%',
            description: 'of customers consult three channels for high-value purchases.'
        },
    ]
    const featureSlides = [
        {
            type:'Features',
            title: 'Unified',
            titleHightlight: 'Inventory Management',
            text: "Our integrated platform offers unified inventory management across all sales channels, allowing brands to track stock levels, manage replenishment, and prevent stockouts in real-time.",
            image: Feature1,
            sectionColor: 'section-grey',
            reverse: true
        },
        {
            type:'Features',
            title: 'Order',
            titleHightlight: 'Routing and Allocation',
            text: "ShipDelight's Omnichannel Fulfilment Service automatically routes orders to the nearest fulfilment center based on customer location, inventory availability, and shipping preferences. This dynamic order routing ensures timely delivery and minimizes shipping costs.",
            image: Feature2,
            sectionColor: 'section-yellow',
            reverse: true
        },
        {
            type:'Features',
            title: 'Flexible',
            titleHightlight: 'Fulfilment Options',
            text: "We offer flexible fulfillment options, including ship-from-store, pick-up-in-store, and ship-to-store, allowing brands to leverage their physical locations as distribution centers.",
            image: Feature3,
            sectionColor: 'section-grey',
            reverse: true
        }
    ];
    const workflowData = [
        {
            title: 'Order Placement',
            text: "Customers place orders through various sales channels, including online stores, mobile apps, social media platforms, and physical stores."
        },
        {
            title: 'Order Processing',
            text: "Our integrated plactform automatically routes orders to the nearest fulfillment center based on inventory availability, shipping preferences, and customer location."
        },
        {
            title: 'Fulfillment',
            text: "Orders are picked, packed, and shipped from the designated fulfillment center, leveraging ShipDelight's trusted logistics network and fulfillment capabilities."
        },
        {
            title: 'Delivery and Tracking',
            text: "Customers receive their orders and can track the status of their delivery in real-time through ShipDelight's tracking system, ensuring a seamless and satisfying shopping experience."
        }
    ]
    const benefitData = [
        {
            title: 'Improved Customer Satisfaction',
            text: "ShipDelight's Omnichannel Fulfilment Service ensures timely delivery, flexible fulfilment options, and transparent order tracking, enhancing the overall customer experience and driving satisfaction and loyalty."
        },
        {
            title: 'Cost Optimization',
            text: "By leveraging ShipDelight's intelligent order routing and inventory management capabilities, brands can optimize shipping costs, reduce order fulfillment times, and minimize stockouts, leading to improved operational efficiency and cost savings."
        },
        {
            title: 'Enhanced Scalability',
            text: "ShipDelight's Omnichannel Fulfilment Service is scalable and adaptable to accommodate fluctuations in demand, seasonal peaks, and business expansion, allowing brands to grow and evolve with confidence."
        },
    ];
    return (
        <main>
            <section className="solution gradient-section">
                <div className="container side">
                    <div className='banner-info-section'>
                        <div>
                            <p className='banner-info-section--title'>Omnichannel Fulfilment</p>
                            <h2>Effortless Fulfillment, Endless Possibilities.</h2>
                            <p className="title-desc">Omnichannel is not just a strategy; it should be a core vision for consumer brands aiming to provide a cohesive and consistent shopping experience across all touchpoints.</p>
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
                            <h2>Your Brand, Everywhere: <span> ShipDelight's Omnichannel Approach.</span></h2>
                            <p className="">With ShipDelight, brands can synchronize their online and offline operations, ensuring that every customer interaction is cohesive, personalized, and satisfying.</p>
                        </div>
                    </div>
                    <div className='sub-img-section'>
                        <Image src={HandMap} alt="graph" className="banner-img" />
                    </div>
                </div>
                <div className="container">
                    <StateCard stats={stats}></StateCard>
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
            {/* <section className="solution gradient-section common-section b-0">
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
            </section> */}
        </main>
    )
}

export default page