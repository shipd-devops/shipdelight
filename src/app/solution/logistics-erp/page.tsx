'use client'
import React from 'react'
import { Button, Space, Input, Flex } from 'antd';
import Image from "next/image";
//IMAGES
import Feature1 from "../../../../public/images/erp-features.webp"
import Feature2 from "../../../../public/images/erp-features-2.webp"
import Feature3 from "../../../../public/images/erp-features-3.webp"
import Feature4 from "../../../../public/images/erp-features-4.webp"
import Feature5 from "../../../../public/images/erp-features-5.webp"
import SolutionBannerImage from '../../../../public/images/sol-banner-b2b-14.webp'
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
            titleHightlight: 'Forward and Reverse',
            title: 'B2C Movement',
            text: "Logistics ERP facilitates both forward and reverse movement of B2C shipments, allowing seamless handling of deliveries and returns, thereby enhancing customer satisfaction and loyalty.",
            image: Feature1,
            sectionColor: 'section-yellow'
        },
        {
            type:'Features',
            titleHightlight: 'Cash On Delivery',
            title: 'Solutions',
            text: "With integrated COD management capabilities, Logistics ERP enables efficient handling of cash on delivery transactions, ensuring transparency and accountability in financial transactions.",
            image: Feature2,
            sectionColor: 'section-grey'
        },
        {
            type:'Features',
            titleHightlight: 'Scans and Sorting',
            title: 'Visibility -',
            text: "Logistics ERP provides real-time visibility into package scans and sorting processes, enabling logistics teams to track and monitor the movement of shipments throughout the supply chain, enhancing operational efficiency and accuracy.",
            image: Feature3,
            sectionColor: 'section-yellow',
            reverse: true
        },
        {
            type:'Features',
            title: 'Bag and',
            titleHightlight: 'Bin Management',
            text: "Logistics ERP offers advanced bag and bin management features, allowing logistics teams to organize and manage packages efficiently, optimizing space utilization and streamlining warehouse operations.",
            image: Feature4,
            sectionColor: 'section-grey',
            reverse: true
        },
        {
            type:'Features',
            title: 'Manifest',
            titleHightlight: 'Management',
            text: "Logistics ERP streamlines manifest management processes, enabling logistics teams to generate, edit, and track manifests seamlessly, ensuring compliance with regulatory requirements and facilitating smooth order fulfillment.",
            image: Feature5,
            sectionColor: 'section-yellow',
            reverse: true
        }
    ];
    const workflowData = [
        {
            title: 'Pick-Up Coordination',
            text: "Logistics ERP facilitates seamless coordination for package pick-ups from suppliers or warehouses, ensuring timely and efficient collection of goods for further processing."
        },
        {
            title: 'Branch and Hub Scans',
            text: "Upon receipt at branch or hub locations, packages undergo scanning and sorting processes facilitated by Logistics ERP, ensuring accurate handling and routing for onward transportation."
        },
        {
            title: 'Mid-Mile Processing',
            text: "Logistics ERP optimizes mid-mile processes, including transportation and sorting, to facilitate efficient movement of packages between distribution centers and delivery hubs, minimizing transit times and enhancing delivery speed."
        },
        {
            title: 'Last-Mile Delivery',
            text: "Logistics ERP streamlines last-mile delivery operations, enabling drivers to efficiently navigate routes, manage deliveries, and provide real-time updates to customers, ensuring prompt and reliable order fulfillment."
        }
    ]
    const benefitData = [
        {
            title: 'Driver Performance Monitoring',
            text: "With Logistics ERP, logistics companies can monitor driver performance metrics, such as delivery times and completion rates, enabling them to identify areas for improvement and optimize resource allocation for enhanced operational efficiency."
        },
        {
            title: 'COD Visibility',
            text: 'Logistics ERP provides transparent visibility into COD transactions, allowing logistics teams to track cash collection and remittance status in real-time, ensuring accuracy and accountability in financial transactions.'
        },
        {
            title: 'NDR Management to Reduce RTOs',
            text: "Logistics ERP offers advanced NDR (Non-Delivery Report) management capabilities, enabling logistics teams to proactively address delivery challenges and minimize the incidence of return-to-origin (RTO) shipments, thereby reducing costs and improving customer satisfaction."
        },
    ];
    return (
        <main>
            <section className="solution gradient-section">
                <div className="container side">
                    <div className='banner-info-section'>
                        <div>
                            <p className='banner-info-section--title'>Logistics ERP</p>
                            <h2>Drive Customer Satisfaction with Precision: Logistics ERP</h2>
                            <p className="title-desc">Your Solution for eCommerce Logistics Excellence.</p>
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
                            <h2><span>Empower Your Journey </span>With Next-Level Logistics</h2>
                            <p className="">In the realm of eCommerce, logistics is not just about moving packages from point A to point B—it's about delivering exceptional customer experiences. At ShipDelight, we understand the critical role that logistics plays in eCommerce success. That's why we've developed Logistics ERP, a comprehensive system designed to optimize and streamline every aspect of eCommerce logistics.</p>
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