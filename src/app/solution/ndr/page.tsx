'use client'
import React from 'react'
import { Button, Space, Input, Flex } from 'antd';
import Image from "next/image";
//IMAGES
import Feature1 from "../../../../public/images/ndr-features.webp"
import Feature2 from "../../../../public/images/ndr-features-2.webp"
import Feature3 from "../../../../public/images/ndr-features-3.webp"
import SolutionBannerImage from '../../../../public/images/sol-banner-b2b-3.webp'
import HandMap from '../../../../public/images/hand-map.webp'
import BenefitImg from '../../../../public/images/benefit-img.webp'
import BottomImg from '../../../../public/images/bottom-section.webp'
// COMPONENTS
import FeatureSection from '@/app/components/FeatureSection';
import WorkFlowCard from '@/app/components/WorkFlowCard';
import BenefitCard from '@/app/components/BenefitCard';
import BookDemo from '@/app/components/BookDemo';


const page = () => {
    const featureSlides = [
        {
            type:'Features',
            title: 'Automate',
            titleHightlight: 'NDRs',
            text: 'Our platform enables Brands to automate NDR processes by creating rules based on predefined scenarios. By setting up automated workflows for common NDR scenarios, brands can reduce manual human interventions.',
            image: Feature1,
            sectionColor: 'section-grey',
            reverse: true
        },
        {
            type:'Features',
            title: 'Know the',
            titleHightlight: 'Right Reason for NDR',
            text: 'Record detailed NDR reasons such as the door being locked, incorrect address, customer refusal, or destination inaccessibility. By accurately identifying the root cause of NDRs, brands can devise targeted strategies to prevent recurrence and improve delivery success rates effectively.',
            image: Feature2,
            sectionColor: 'section-yellow',
            reverse: true
        },
        {
            type:'Features',
            title: 'Manage',
            titleHightlight: 'Actions on Delivery',
            text: "With an intuitive interface and functionalities, brands can direct LSP Partners to reattempt delivery, hold the order, or return it to the origin. ShipDelight's interface ensures swift and coordinated actions to address NDRs effectively.",
            image: Feature3,
            sectionColor: 'section-grey',
            reverse: true
        }
    ];
    const workflowData = [
        {
            title: 'Auto-NDR Detection',
            text: "ShipDelight's NDR Tool automatically detects undeliverable shipments based on carrier notifications and triggers proactive communication with buyers."
        },
        {
            title: 'Multi-Channel Communication',
            text: "ShipDelight's NDR Tool sends communication messages to buyers via WhatsApp, SMS, or Email, providing real-time updates on delivery status and addressing any delivery issues."
        },
        {
            title: 'Customizable Templates',
            text: "Brands customize communication templates to ensure personalized and relevant messaging for each buyer and delivery situation, enhancing the effectiveness of communication efforts."
        },
        {
            title: 'Real-Time Monitoring and Intervention',
            text: "Brands can monitor NDR occurrences using ShipDelight's NDR Tool, enabling proactive intervention to resolve delivery issues and prevent NDRs, ultimately improving delivery success rates."
        }
    ]
    const benefitData = [
        {
            title: 'Reduced NDR Occurrences',
            text: "NDR Tool helps brands minimize undeliverable shipments by facilitating proactive communication with buyers and addressing delivery issues promptly, resulting in fewer NDR occurrences and improved delivery success rates."
        },
        {
            title: 'Enhanced Customer Satisfaction',
            text: "By keeping buyers informed about their shipment status and addressing concerns in real-time, ShipDelight's NDR Tool enhances customer satisfaction and loyalty, fostering positive brand experiences and encouraging repeat purchases."
        },
        {
            title: 'Improved Operational Visibility',
            text: "Our NDR Tool provides brands with real-time insights into delivery performance and NDR occurrences, enabling them to monitor and analyze delivery trends, identify root causes of NDRs, and implement targeted strategies for improvement."
        },
    ];
    return (
        <main>
            <section className="solution gradient-section">
                <div className="container side">
                    <div className='banner-info-section'>
                        <div>
                            <p className='banner-info-section--title'>NDR</p>
                            <h2>Deliver Every Time with ShipDelight's NDR Tool</h2>
                            <p className="title-desc">Brands can significantly reduce NDR occurrences by establishing proactive communication channels with buyers.</p>
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
                            <h2>Minimize Delivery Hurdles with ShipDelight's <span> NDR Tool</span></h2>
                            <p className="">ShipDelight's NDR Tool has a seamless communication channel on WhatsApp, SMS, and email, allowing brands to keep buyers informed about their shipment status, delivery updates, and any potential delivery issues, thereby improving Delivery Success Rate.</p>
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