'use client'
import React from 'react'
import { Button, Space, Input, Flex } from 'antd';
import Image from "next/image";
//IMAGES
import Feature1 from "../../../../public/images/warehouse-features.webp"
import Feature2 from "../../../../public/images/warehouse-features-2.webp"
import Feature3 from "../../../../public/images/warehouse-features-3.webp"
import Feature4 from "../../../../public/images/warehouse-features-4.webp"
import Feature5 from "../../../../public/images/warehouse-features-5.webp"
import SolutionBannerImage from '../../../../public/images/sol-banner-b2b-11.webp'
import HandMap from '../../../../public/images/hand-map.webp'
import BenefitImg from '../../../../public/images/benefit-img.webp'
import BottomImg from '../../../../public/images/bottom-section.webp'
import ShopifyIcon from '../../../../public/images/shopify.svg'
// COMPONENTS
import FeatureSection from '@/app/components/FeatureSection';
import WorkFlowCard from '@/app/components/WorkFlowCard';
import BenefitCard from '@/app/components/BenefitCard';
import StateCard from '@/app/components/StateCard';
import BookDemo from '@/app/components/BookDemo';
import { reverse } from 'dns';

const page = () => {
    const stats = [
        {
            stats: '10-15%',
            description: 'CAGR growth is expected for the warehousing industry in India.'
        },
        {
            stats: '$6.8 Bn',
            description: 'In Investment was attracted by India’s warehousing sector.'
        },
        {
            stats: '21% YoY',
            description: 'Increase total stock of Grade A and B warehouse space in the top eight cities'
        },
        {
            stats: '$ 91.38 Bn',
            description: 'Planned government investment in infrastructure, logistics development, and multi-modal connectivity.'
        },
    ]
    const featureSlides = [
        {
            type:'Features',
            title: 'Presence',
            titleHightlight: 'across India',
            text: "ShipDelight's Warehouse Facility has a strategic presence in key regions across India, including North, South, East, and West, enabling businesses to optimize inventory management and streamline distribution operations nationwide.",
            image: Feature1,
            sectionColor: 'section-grey',
            reverse: true
        },
        {
            type:'Features',
            title: 'End-to-End',
            titleHightlight: 'Visibility',
            text: "ShipDelight's Warehouse Facility provides end-to-end visibility into inventory levels, order status, and shipment tracking, empowering businesses with real-time insights and control over their supply chain.",
            image: Feature2,
            sectionColor: 'section-yellow',
            reverse: true
        },
        {
            type:'Features',
            title: 'Fulfilment Service',
            titleHightlight: '“Done For You',
            text: `ShipDelight's Warehouse Facility offers a "Done For You" fulfillment service, handling every aspect of order fulfillment, including picking, packing, and shipping, allowing businesses to focus on core operations and growth strategies.`,
            image: Feature3,
            sectionColor: 'section-grey'
        },
        {
            type:'Features',
            title: 'Optimum',
            titleHightlight: 'Routing Methods',
            text: "ShipDelight's Warehouse Facility utilizes advanced routing methods and algorithms to optimize order fulfillment, minimizing transit times, reducing shipping costs, and enhancing delivery efficiency.",
            image: Feature4,
            sectionColor: 'section-yellow',
            reverse: true
        },
        {
            type:'Features',
            title: 'Scalable',
            titleHightlight: 'Infrastructure',
            text: "ShipDelight's Warehouse Facility features scalable infrastructure and flexible storage solutions, allowing businesses to adapt to changing demand patterns, seasonal fluctuations, and growth opportunities without disruption.",
            image: Feature5,
            sectionColor: 'section-grey',
            reverse: true
        }
    ];
    const workflowData = [
        {
            title: 'Inventory Management',
            text: "Businesses store their inventory in ShipDelight is strategically located warehouses, leveraging distributed inventory management to optimize storage and distribution."
        },
        {
            title: 'Order Processing',
            text: "When orders are received, ShipDelight's Warehouse Facility processes them efficiently, picking items from inventory, packing them securely, and preparing them for shipment."
        },
        {
            title: 'Shipping and Delivery',
            text: "We coordinate with logistics partners to ship orders to customers' destinations, utilizing optimal routing methods to ensure timely delivery and minimize transit times."
        },
        {
            title: 'Inventory Replenishment',
            text: "We continuously monitors inventory levels and request stock replenishments as needed, maintaining optimal inventory levels to meet customer demand and prevent stockouts."
        }
    ]
    const benefitData = [
        {
            title: 'Smooth Cashflow due to Fast Payout',
            text: "ShipDelight's COD Service ensures fast and reliable payments, enabling merchants to maintain smooth cash flow and liquidity, ultimately supporting business growth and expansion."
        },
        {
            title: 'New Customers in Tier 2 & 3 Cities of Bharat',
            text: "By offering COD as a payment option, brands can tap into new customer segments in tier 2 and 3 cities of India, where access to digital payments may be limited, expanding their customer base and market reach."
        },
        {
            title: 'Transparency in Terms of Earnings',
            text: "ShipDelight's COD Service provides detailed reports and analytics on COD transactions, offering transparency and visibility into earnings, order status, and payment reconciliation, enabling merchants to make informed decisions and optimize business performance."
        },
    ];
    return (
        <main>
            <section className="solution gradient-section">
                <div className="container side">
                    <div className='banner-info-section'>
                        <div>
                            <p className='banner-info-section--title'>Warehouse</p>
                            <h2>Your Inventory, Our Expertise: ShipDelight Warehouse Solutions</h2>
                            <p className="title-desc">With distributed inventory management, businesses can save time and support express delivery services such as Same Day Delivery and Next Day Delivery.</p>
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
                            <h2>Expand Horizons, Exceed Expectations: <span> ShipDelight's Warehousing Solutions</span></h2>
                            <p className="">By strategically locating inventory across multiple warehouses, ShipDelight enables faster order fulfillment and reduced transit times, ensuring timely delivery and exceptional customer satisfaction.</p>
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