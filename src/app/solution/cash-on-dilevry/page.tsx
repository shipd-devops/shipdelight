'use client'
import React from 'react'
import { Button, Space, Input, Flex } from 'antd';
import Image from "next/image";
//IMAGES
import Feature1 from "../../../../public/images/cod-features.webp"
import Feature2 from "../../../../public/images/cod-features-2.webp"
import Feature3 from "../../../../public/images/cod-features-3.webp"
import Feature4 from "../../../../public/images/cod-features-4.webp"
import SolutionBannerImage from '../../../../public/images/sol-banner-b2b-10.webp'
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
import { title } from 'process';

const page = () => {
    const stats = [
        {
            stats: '~50-60%',
            description: 'Cash on Delivery accounts for all e-commerce transactions in India.'
        },
        {
            stats: '62%',
            description: 'Consumers preferred cash on delivery as a payment method for their online purchases.'
        },
        {
            stats: ' 73%',
            description: 'of customers say that one extraordinary experience with a company raises their expectations of other companies.'
        },
        {
            stats: '96%',
            description: 'of customers say that customer service is an important factor in their loyalty to a brand.'
        },
    ]
    const featureSlides = [
        {
            type:'Features',
            titleHightlight: 'T+1 Payment Schedule',
            title: '(Fast Payout)',
            text: "ShipDelight's COD Service offers a fast payment schedule, with funds settled within one business day after successful delivery. This ensures smooth cash flow for merchants and reduces waiting time for payment reconciliation.",
            image: Feature1,
            sectionColor: 'section-grey',
        },
        {
            type:'Features',
            title: 'Throughout India',
            titleHightlight: '26000+ COD Enabled Pin codes',
            text: "ShipDelight's COD Service covers over 26000 pin codes across India, providing extensive coverage and reach for brands looking to offer COD as a payment option to customers nationwide.",
            image: Feature2,
            sectionColor: 'section-yellow',
        },
        {
            type:'Features',
            title: 'Easy',
            titleHightlight: 'Reconciliation',
            text: `ShipDelight's COD Service simplifies payment reconciliation, providing detailed reports and analytics on COD transactions, including order status, payment status, and delivery confirmation. This streamlines accounting processes and ensures transparency in financial transactions.`,
            image: Feature3,
            sectionColor: 'section-grey',
            reverse: true
        },
        {
            type:'Features',
            title: 'Customizable',
            titleHightlight: 'COD Limits',
            text: "ShipDelight's COD Service allows brands to set customizable COD limits, enabling them to control and manage cash flow, mitigate risk, and prevent fraudulent orders. Brands can specify maximum order value or restrict COD availability based on customer location or order history.",
            image: Feature4,
            sectionColor: 'section-yellow',
            reverse: true
        }
    ];
    const workflowData = [
        {
            title: 'Self-serve',
            text: "Login to our Platform and navigate to Settings > Services."
        },
        {
            title: 'Enable COD Services',
            text: "Flip the setting for COD services from off to on, activating COD as a payment option for your online store."
        },
        {
            title: 'Approve COD Orders',
            text: "Approve the COD-enabled orders that come from your online store, ensuring smooth processing and fulfillment of COD transactions."
        },
        {
            title: 'Receive Fast Payouts',
            text: "ShipDelight's COD Service ensures fast payouts, with funds settled within one business day after successful delivery, facilitating smooth cash flow and financial management."
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
            text: "By offering COD as a payment option, brands can tap into new customer segments in tier 2 and 3 cities of India, where access to digital payments may be limited, expanding their customer base and market reach."
        },
    ];
    return (
        <main>
            <section className="solution gradient-section">
                <div className="container side">
                    <div className='banner-info-section'>
                        <div>
                            <p className='banner-info-section--title'>Cash on Delivery</p>
                            <h2>Secure Transactions, Seamless Shopping with ShipDelight COD</h2>
                            <p className="title-desc">Cash on Delivery (COD)is a vital component of e-commerce in India, catering to the unique preferences and needs of Indian consumers.</p>
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
                            <h2>Bringing Trust to Your Doorstep: <span> ShipDelight's COD Solutions</span></h2>
                            <p className="">COD is a phenomenon deeply ingrained in the Indian market, offering customers a sense of security and trust when purchasing from new or unfamiliar brands.</p>
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