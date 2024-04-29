'use client'
import React from 'react'
import { Button, Space, Input, Flex } from 'antd';
import Image from "next/image";
//IMAGES
import Feature1 from "../../../../public/images/communication-feature.webp"
import Feature2 from "../../../../public/images/communication-feature-2.webp"
import Feature3 from "../../../../public/images/communication-feature-3.webp"
import SolutionBannerImage from '../../../../public/images/sol-banner-b2b-7.webp'
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
            title: 'Omnichannel',
            titleHightlight: 'Communication',
            text: "ShipDelight's Communication Tool enables brands to communicate with customers across  WhatsApp, SMS, and Email. This approach ensures that brands reach customers on their preferred platforms, maximizing engagement.",
            image: Feature1,
            sectionColor: 'section-grey',
            reverse: true
        },
        {
            type:'Features',
            title: 'Personalized',
            titleHightlight: 'Messaging',
            text: "Our tool allows brands to send messages tailored to customer's preferences and behaviour. From order updates to promotional offers, brands can create custom messages that resonate with their audience.",
            image: Feature2,
            sectionColor: 'section-yellow',
            reverse: true
        },
        {
            type:'Features',
            title: 'Two-Way',
            titleHightlight: 'Communication',
            text: "Two-way communication allows customers to interact with brands and vice versa. Whether it's responding to customer inquiries, resolving issues, or soliciting feedback, brands can engage in meaningful conversations with their audience.",
            image: Feature3,
            sectionColor: 'section-grey',
            reverse: true
        }
    ];
    const workflowData = [
        {
            title: 'Message Creation',
            text: "Brands create personalized messages for various communication purposes, such as order confirmations, shipping updates, and customer service inquiries."
        },
        {
            title: 'Channel Selection',
            text: "ShipDelight's Communication Tool allows brands to select communication channels based on customer preferences and message type, including WhatsApp, SMS, and Email."
        },
        {
            title: 'Automation Setup',
            text: "Brands set up automated notifications and workflows for routine communication tasks, such as order confirmations and shipping updates, ensuring timely and consistent messaging to customers."
        },
        {
            title: 'Engagement',
            text: "Analytics and insights into communication performance allows brands to monitor engagement metrics, analyze trends, and optimize messaging strategies for better results."
        }
    ]
    const benefitData = [
        {
            title: 'Reduced NDRs',
            text: "Reduce non-delivery reports (NDRs) by providing timely updates and reminders to customers, ensuring that they are aware of their order status and delivery schedule."
        },
        {
            title: 'Less WISMO (Where is my Order) Calls',
            text: 'Reduces the number of "Where is my Order" (WISMO) calls by proactively providing order updates and tracking information to customers via their preferred communication channels. '
        },
        {
            title: 'Brand Personality through Custom Messaging',
            text: "Custom communication templates enable Brands to showcase their brand personality and voice. By crafting personalized messages that reflect the brand's values, Brands can connect with customers on a deeper level and build emotional resonance."
        },
    ];
    return (
        <main>
            <section className="solution gradient-section">
                <div className="container side">
                    <div className='banner-info-section'>
                        <div>
                            <p className='banner-info-section--title'>Communciations</p>
                            <h2>Connect Everywhere, Delight Anytime with ShipDelight</h2>
                            <p className="title-desc">An omnichannel communication strategy is essential for brands to meet customers' evolving expectations and preferences.</p>
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
                            <h2>Craft Your Brand's Voice with <span> ShipDelight's Custom Communications.</span></h2>
                            <p className="">An omnichannel communication strategy is essential for brands to meet customers' evolving expectations and preferences. By being present on multiple communication channels such as WhatsApp, SMS, and Email, brands can reach customers wherever they are. Whether it's order confirmations, shipping updates, or promotional offers, an omnichannel approach ensures that brands stay connected with their audience.</p>
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