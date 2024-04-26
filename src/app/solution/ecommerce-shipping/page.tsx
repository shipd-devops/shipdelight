'use client'
import React from 'react'
import { Button, Space, Input, Flex } from 'antd';
import Image from "next/image";


//IMAGES
import Feature1 from "../../../../public/images/e-commerce-features.webp"
import Feature2 from "../../../../public/images/e-commerce-features-2.webp"
import Feature3 from "../../../../public/images/e-commerce-features-3.webp"
import SolutionBannerImage from '../../../../public/images/sol-banner-b2b-2.webp'
import HandMap from '../../../../public/images/hand-map.webp'
import BenefitImg from '../../../../public/images/benefit-img.webp'
import FashionIcon from '../../../../public/images/fashion.webp'
import HealthIcon from '../../../../public/images/health.webp'
import ElectronicIcon from '../../../../public/images/electronics.webp'
import BottomImg from '../../../../public/images/bottom-section.webp'
import SerachImage from '../../../../public/images/search.svg'
// COMPONENTS
import StateCard from '@/app/components/StateCard';
import FeatureSection from '@/app/components/FeatureSection';
import WorkFlowCard from '@/app/components/WorkFlowCard';
import BenefitCard from '@/app/components/BenefitCard';
import IndustryCard from '@/app/components/IndustryCard';
import { reverse } from 'dns';

const page = () => {

    const stats = [
        {
            stats: '8%',
            description: 'Operating Margin'

        },
        {
            stats: '4%',
            description: 'D2C Revenue Lift'

        },
        {
            stats: '42.9%',
            description: 'eCommerce Funding went to D2C businesses'

        },
        {
            stats: '19%',
            description: 'eCommerce growth rate in India'

        },
    ]

    const featureSlides = [
        {
            type:'Features',
            title: 'Integrated',
            titleHightlight: 'Multi-Channel Shipping',
            text: 'Seamlessly integrate with popular e-commerce platforms and marketplaces, manage orders from multiple channels within a single interface. This approach streamlines order processing, reduces errors, and enhances operational efficiency.',
            image: Feature1,
            sectionColor: 'section-grey',
            reverse: true
        },
        {
            type:'Features',
            title: 'Customizable',
            titleHightlight: 'Shipping Options',
            text: 'From standard shipping to express delivery and same-day shipping, businesses can tailor their shipping methods to meet the needs of their target audience, thereby enhancing customer satisfaction and loyalty.',
            image: Feature2,
            sectionColor: 'section-yellow',
            reverse: true
        },
        {
            type:'Features',
            title: 'Automated',
            titleHightlight: 'Returns Management',
            text: 'Simplify returns initiation, processing, and resolution. With user-friendly returns portals, businesses can streamline returns processing, minimize return shipping costs, and without affecting overall customer experience.',
            image: Feature3,
            sectionColor: 'section-grey',
            reverse: true

        }
    ];

    const workflowData = [
        {
            title: 'Order Processing',
            text: "Businesses receive orders from their e-commerce platform or marketplace, which are automatically synced with ShipDelight's OMS."
        },
        {
            title: 'Shipping Preparation',
            text: "InstaLogix generates shipping labels and packaging instructions based on order details, allowing businesses to prepare shipments efficiently."
        },
        {
            title: 'Dispatch and Delivery',
            text: "Book your preferred Courier Partner for the pickup of shipments and ShipDelight coordinates with carriers for timely delivery to customer's doorsteps."
        },
        {
            title: 'Post-Delivery Experience',
            text: "ShipDelight provides post-delivery support, including order tracking, returns management, and customer feedback collection, to ensure a seamless end-to-end shipping experience."
        }
    ]

    const benefitData = [
        {
            title: 'Improved Brand Visibility and Reputation',
            text: "A positive shipping experience can significantly impact a brand's reputation and visibility in the marketplace. By consistently delivering orders on time and providing transparent tracking information, businesses can enhance their brand image."
        },
        {
            title: 'Enhanced Customer Engagement and Retention',
            text: "By offering a seamless and personalized shipping experience, businesses can enhance customer engagement and retention rates. ShipDelight's integrated multi-channel shipping and real-time order tracking capabilities enable businesses to connect with customers on a deeper level."
        },
        {
            title: 'Optimized Logistics Operations',
            text: "ShipDelight's data analytics and insights tools empower businesses to optimize their logistics operations for greater efficiency and cost-effectiveness. By analyzing shipping performance metrics, businesses can identify areas for improvement."
        },
    ]

    const industryData = [
        {
            title: 'Fashion',
            icon: FashionIcon,
            text: "Instant satisfaction with Same Day Delivery swift order processing and prompt doorstep",
        },
        {
            title: 'Electronics',
            icon: ElectronicIcon,
            text: "Instant satisfaction with Same Day Delivery swift order processing and prompt doorstep",
        },
        {
            title: 'Health & Beauty',
            icon: HealthIcon,
            text: "Instant satisfaction with Same Day Delivery swift order processing and prompt doorstep",
        },
        {
            title: 'Food & Beverages',
            icon: FashionIcon,
            text: "Instant satisfaction with Same Day Delivery swift order processing and prompt doorstep",
        },
        {
            title: 'Sports & Utility',
            icon: FashionIcon,
            text: "Instant satisfaction with Same Day Delivery swift order processing and prompt doorstep",
        },
        {
            title: 'Pet & Supplies',
            icon: FashionIcon,
            text: "Instant satisfaction with Same Day Delivery swift order processing and prompt doorstep",
        },
    ]


    return (
        <main>
            <section className="solution gradient-section">
                <div className="container side">
                    <div className='banner-info-section'>
                        <div>
                            <p className='banner-info-section--title'>Ecommerce Shipping</p>
                            <h2>Navigating Your E-commerce Journey</h2>
                            <p className="title-desc">In the competitive landscape of Indian e-commerce, attracting customers to your Direct-to-Consumer (D2C) website from marketplaces without compromising on the customer experience is paramount.</p>
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
                            <h2>Attracting Customers to Your<span> D2C Website</span></h2>
                            <p className="">ShipDelight streamlines marketplace-to-D2C transitions with optimized shipping, transparent tracking, and personalized incentives, ensuring consistent and satisfying shopping experiences across platforms.</p>
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
            {/* <section className="solution common-section">
                <div className="container">
                    <div className="banner-info-section full">
                        <div>
                            <h6>Industries</h6>
                            <h2>Revolutionize Retail with <span>Post Purchase Experience </span></h2>
                        </div>
                    </div>
                    <IndustryCard industryData={industryData}></IndustryCard>
                </div>
            </section> */}
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