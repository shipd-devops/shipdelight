'use client'
import React from 'react'
import { Button, Space, Input, Flex } from 'antd';
import Image from "next/image";
//IMAGES
import Feature1 from "../../../../public/images/btb-features.webp"
import Feature2 from "../../../../public/images/btb-features-2.webp"
import Feature3 from "../../../../public/images/btb-features-3.webp"
import SolutionBannerImage from '../../../../public/images/sol-banner-b2b.webp'
import HandMap from '../../../../public/images/hand-map.webp'
import BenefitImg from '../../../../public/images/benefit-img.webp'
import BottomImg from '../../../../public/images/bottom-section-btb.webp'
// COMPONENTS
import FeatureSection from '@/app/components/FeatureSection';
import WorkFlowCard from '@/app/components/WorkFlowCard';
import BenefitCard from '@/app/components/BenefitCard';
import BookDemo from '@/app/components/BookDemo';


const page = () => {
    const featureSlides = [
        {
            type:'Features',
            title: 'Trusted',
            titleHightlight: 'Network of Partners',
            text: 'We collaborate with a trusted network of Industry Leading Logistics Partners to ensure seamless and reliable delivery services, enhancing your retail operations.',
            image: Feature1,
            sectionColor: 'section-grey',
            reverse: true
        },
        {
            type:'Features',
            title: 'Advanced',
            titleHightlight: 'Tracking and Visibility',
            text: 'Clients can access detailed shipment information, including pickup and delivery times, route updates, and proof of delivery, clients can maintain full visibility and control over their deliveries.',
            image: Feature2,
            sectionColor: 'section-yellow',
            reverse: true
        },
        {
            type:'Features',
            title: 'Customized',
            titleHightlight: 'Delivery Solutions',
            text: "Whether it's bulk shipments, scheduled deliveries, or specialized handling requirements, ShipDelight ensures that every delivery is optimized for efficiency and reliability.",
            image: Feature3,
            sectionColor: 'section-grey',
            reverse: true
        }
    ];
    const workflowData = [
        {
            title: 'Order Placement and Preparation',
            text: "B2B clients upload their Purchase Order in our System which inturn generates necessary invoice number, e-way Bill and the LR Number."
        },
        {
            title: 'Pickup and Transportation',
            text: "ShipDelight assigns the order to a Delivery Partner and schedules a pick-up from the Client's location for the prepared shipments."
        },
        {
            title: 'Transit and Delivery',
            text: "ShipDelight's entrusted carriers transport the shipments to their designated destinations, adhering to predefined routes and schedules."
        },
        {
            title: 'Confirmation and Follow-Up',
            text: "Once the shipments are delivered, ShipDelight obtains proof of delivery, including signatures or electronic confirmations, to verify successful receipt."
        }
    ]
    const benefitData = [
        {
            title: 'Higher Satisfaction Among Strategic Partners',
            text: "By providing reliable and efficient B2B delivery services, ShipDelight helps strengthen relationships with strategic partners such as distributors and wholesalers."
        },
        {
            title: 'Reduced Risk of Stockouts and Delays',
            text: "ShipDelight's advanced tracking systems and proactive communication enable businesses to monitor shipments in real time and address any potential issues before they escalate, reducing the risk of lost sales and customer dissatisfaction."
        },
        {
            title: 'Unified View of ERP and Warehouse',
            text: "ShipDelight seamlessly integrates with existing enterprise resource planning (ERP) and Warehouse Management Systems (WMS), enabling businesses to synchronize order and delivery data across their organization."
        },
    ];
    return (
        <main>
            <section className="solution gradient-section">
                <div className="container side">
                    <div className='banner-info-section'>
                        <div>
                            <p className='banner-info-section--title'>Retail Shipping</p>
                            <h2>Elevating B2B Logistics</h2>
                            <p className="title-desc">Retail Delight by ShipDelight offers a unified logistics solution, harmonizing Offline Operations to elevate your Retail Experience.</p>
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
                            <h2>Unlocking Omnichannel <br/>Success in Indian<span> Retail Shipping</span></h2>
                            <p className="">In the bustling realm of Indian retail, where customer satisfaction reigns supreme, efficiency emerges as the North Star of B2B logistics. In a market driven by diverse consumer preferences and rapid digitalization, omnichannel presence is not just a strategy but a necessity. We understand this dynamic landscape and offer comprehensive solutions tailored to meet the evolving needs of businesses across India.</p>
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