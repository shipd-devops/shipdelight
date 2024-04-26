'use client'
import React from 'react'
import { Button, Space, Input, Flex } from 'antd';
import Image from "next/image";
//IMAGES
import Feature1 from "../../../../public/images/fr-features.webp"
import Feature2 from "../../../../public/images/fr-features-2.webp"
import Feature3 from "../../../../public/images/fr-features-3.webp"
import Feature4 from "../../../../public/images/fr-features-4.webp"
import Feature5 from "../../../../public/images/fr-features-5.webp"
import SolutionBannerImage from '../../../../public/images/sol-banner-b2b-12.webp'
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
            title: 'Admin Panel for',
            titleHightlight: 'LSP Brands',
            text: "From onboarding new franchisees to monitoring performance and compliance, the admin panel offers complete control and visibility over the franchise network for Courier Businesses.",
            image: Feature1,
            sectionColor: 'section-grey',
            reverse: true
        },
        {
            type:'Features',
            title: 'Franchise',
            titleHightlight: 'Onboarding Made Easy',
            text: "With Franchise Creator, onboarding franchise owners is a breeze. The platform streamlines the entire onboarding process, from initial registration to training and support, ensuring a smooth and seamless experience for both the franchisor and the franchisee.",
            text2: 'With Franchise Creator, onboarding franchise owners is a breeze. The platform streamlines the entire onboarding ',
            image: Feature2,
            sectionColor: 'section-yellow',
            reverse: true
        },
        {
            type:'Features',
            title: 'Total Control',
            titleHightlight: 'Over Operations',
            text: "From setting service standards and pricing to implementing branding guidelines, franchisors can maintain consistency and quality across their entire network, ensuring a unified brand experience for customers.",
            image: Feature3,
            sectionColor: 'section-grey',
            reverse: true
        },
        {
            type:'Features',
            title: 'Network Access',
            titleHightlight: 'Global Courier',
            text: "Franchisors get a comprehensive network of domestic and international courier services. Franchisors can seamlessly integrate trusted courier partners across regions and borders and offer top-tier shipping solutions to their franchisees.",
            image: Feature4,
            sectionColor: 'section-yellow'
        },
        {
            type:'Features',
            title: 'Comprehensive',
            titleHightlight: 'Reporting and Analytics',
            text: "Franchise Creator provides comprehensive reporting and analytics capabilities, giving franchisors valuable insights into their franchise network's performance. Our Platform provides from sales data to customer feedback, these insights enable data-driven decision-making and continuous improvement.",
            image: Feature5,
            sectionColor: 'section-grey',
            reverse: true
        },
    ];
    const workflowData = [
        {
            title: 'Registration',
            text: "They visit the Franchise Creator platform and fill out an online application form, providing details about their background, experience, and business goals."
        },
        {
            title: 'Screening',
            text: "Upon receiving the franchise applications, the franchisor conducts an initial screening  to assess applicant's qualifications, financial stability, and alignment with the brand's values."
        },
        {
            title: 'Training',
            text: "Approved franchisees undergo comprehensive training and onboarding sessions to familiarize themselves with the Brand's operations, systems, and procedures."
        },
        {
            title: 'Launch',
            text: "Post-training, the franchisor provides ongoing support and guidance to help franchisees navigate the challenges of running their business."
        }
    ]
    const benefitData = [
        {
            title: 'Expanded Market Reach',
            text: "Franchise Creator enables logistics brands to penetrate Tier 2 and 3 cities of Bharat by leveraging the local presence and network of franchisees. This expanded market reach opens up new opportunities for business growth and revenue generation."
        },
        {
            title: 'Local Expertise and Market Insights',
            text: 'Franchisees bring invaluable local expertise and insights into their respective markets. By partnering with franchise owners, logistics brands can gain valuable insights into local consumer preferences, market trends, and competitive dynamics.'
        },
        {
            title: 'Brand Consistency',
            text: "Franchise Creator empowers logistics brands to maintain consistent brand standards and service quality across their entire franchise network. By providing franchisors with total control over operations and branding guidelines, the platform ensures a unified brand experience for customers."
        },
    ];
    return (
        <main>
            <section className="solution gradient-section">
                <div className="container side">
                    <div className='banner-info-section'>
                        <div>
                            <p className='banner-info-section--title'>Franchise Creator</p>
                            <h2>From Local to Global: Franchise Creator - Your Gateway to Expansion.</h2>
                            <p className="title-desc">Welcome to Franchise Creator by ShipDelight, your key to unlocking unprecedented growth and market penetration for your logistics brand.</p>
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
                            <h2><span>Bridge the Gap, </span>Reach Every Corner of Bharat</h2>
                            <p className="">In today's dynamic landscape, reaching Tier 2 and 3 cities of Bharat is critical for expanding your presence and capturing new markets. Franchise Creator empowers logistics brands to achieve just that by opening up their network to franchisees, thereby extending their reach and fostering business growth.</p>
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