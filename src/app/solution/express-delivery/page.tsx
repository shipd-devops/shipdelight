'use client'
import React from 'react'
import { Button, Space, Input, Flex } from 'antd';
import Image from "next/image";
//IMAGES
import Feature1 from "../../../../public/images/express-features.webp"
import Feature2 from "../../../../public/images/express-features-2.webp"
import Feature3 from "../../../../public/images/express-features-3.webp"
import Feature4 from "../../../../public/images/express-features-4.webp"
import SolutionBannerImage from '../../../../public/images/sol-banner-b2b-9.webp'
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
            stats: '76%',
            description: 'customers expect companies to understand their needs and expectations.'
        },
        {
            stats: '32%',
            description: 'Customers would stop doing business with a brand they loved after just one bad experience.'
        },
        {
            stats: '73%',
            description: 'Customers say that extraordinary experience from a Brand raises expectations from other Brands.'
        },
        {
            stats: '96%',
            description: 'Customers say that customer service is an important factor in their loyalty to a brand. '
        },
    ]
    const featureSlides = [
        {
            type:'Features',
            title: 'Delivery',
            titleHightlight: 'Same Day',
            text: "ShipDelight's Express Delivery Service offers same-day delivery for orders placed within a specified timeframe. Customers can enjoy the convenience of receiving their purchases on the same day, maximizing satisfaction and reducing waiting time.",
            image: Feature1,
            sectionColor: 'section-yellow',
        },
        {
            type:'Features',
            title: 'Delivery',
            titleHightlight: 'Next Day',
            text: "Brands can also opt for next-day delivery. This service caters to Brands who want to ensure speed without breaking the bank.",
            image: Feature2,
            sectionColor: 'section-grey',
        },
        {
            type:'Features',
            title: 'Dedicated',
            titleHightlight: 'Customer Support',
            text: "ShipDelight's Express Delivery Service includes dedicated customer support for any delivery-related inquiries or issues. Customers can reach out to a knowledgeable support team for assistance.",
            image: Feature3,
            sectionColor: 'section-yellow',
            reverse: true
        },
        {
            type:'Features',
            title: 'Options',
            titleHightlight: 'Flexible Delivery',
            text: "We offer flexible delivery options, including time-slot selection and delivery to alternate addresses. Customers can choose the delivery option that best suits their preferences and schedule, enhancing convenience and satisfaction.",
            image: Feature4,
            sectionColor: 'section-grey',
        }
    ];
    const workflowData = [
        {
            title: 'Order Placement',
            text: "Customers place orders through ShipDelight's online platform, selecting the Express Delivery option at checkout."
        },
        {
            title: 'Order Processing',
            text: "ShipDelight's fulfillment team receives and processes the order, prioritizing Express Delivery requests for immediate dispatch."
        },
        {
            title: 'Delivery Preparation',
            text: "The order is prepared for delivery, with special attention given to packaging and handling to ensure the safety and integrity of the items."
        },
        {
            title: 'Speedy Delivery',
            text: "ShipDelight's logistics network facilitates speedy delivery of the order, with dedicated carriers assigned to fulfill Express Delivery requests."
        }
    ]
    const benefitData = [
        {
            title: 'Increased Sales',
            text: "Fast delivery encourages impulse purchases and repeat business, driving sales and revenue for brands leveraging ShipDelight's Express Delivery Service."
        },
        {
            title: 'Improved Brand Reputation',
            text: "Consistently delivering orders quickly and efficiently enhances brand reputation and fosters positive word-of-mouth, further attracting new customers and enhancing customer loyalty."
        },
        {
            title: 'Competitive Advantage',
            text: "Offering Express Delivery gives brands a competitive edge in the market, attracting customers who prioritize speed and convenience in their shopping experience."
        },
    ];
    return (
        <main>
            <section className="solution gradient-section">
                <div className="container side">
                    <div className='banner-info-section'>
                        <div>
                            <p className='banner-info-section--title'>Express Delivery</p>
                            <h2>Faster Delivery, Happier Customers with ShipDelight Express</h2>
                            <p className="title-desc">Express delivery plays a crucial role in the Indian eCommerce Landscape. It not only meets customer expectations but also helps brands stand out in a competitive market.</p>
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
                            <h2>Speed of Thought, Power of Action: <span> ShipDelight's Express Delivery</span></h2>
                            <p className="">There will never come a time when customers will say they want a slower service; they always want their purchases faster than they did yesterday. With ShipDelight Express, brands can exceed customer expectations by delivering orders in record time, ensuring satisfaction and loyalty.</p>
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