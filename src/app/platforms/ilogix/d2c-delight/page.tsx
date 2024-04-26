'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Collapse, Space, Input } from 'antd';
import type { CollapseProps } from 'antd';
import { useRouter } from "next/navigation";
import BrandList from "@/app/components/BrandsList";
import SmallCard from "@/app/components/SmallCard";
import CommonLeftRight from "@/app/components/CommonLeftRight";
import WorkContainer from "@/app/components/WorkContainer";
// IMAGES
import Ilogix from '../../../../../public/images/ilogix.svg'
import Platform from '../../../../../public/images/main-platform.webp'
import PlatformFooter from '../../../../../public/images/main-platform--footer.webp'
import WhiteGuide from '../../../../../public/images/white-guide.webp'
import ThreeDotsSvg from '../../../../../public/images/three-dots.svg'
import D2c from '../../../../../public/images/d2c-interagte.webp'
import D2cM from '../../../../../public/images/d2c-interagte-mobile.webp'
import Star from '../../../../../public/images/star-red.svg'
import TruckIcon from '../../../../../public/images/integration-icon.svg'
import TruckIcon1 from '../../../../../public/images/integration-icon-2.svg'
import TruckIcon2 from '../../../../../public/images/integration-icon-3.svg'
import SemiCircle from '../../../../../public/images/two-semi-circle.svg'
import SemiCircleSmall from '../../../../../public/images/small-semi-circle.svg'
import GuidesMerge from '../../../../../public/images/guides-merge.svg'
import IntegrateIcon from '../../../../../public/images/integrate-main-icon.svg'
import SocialIcon from '../../../../../public/images/social-icon-1.svg'
import SocialIcon2 from '../../../../../public/images/social-icon-2.svg'
import SocialIcon3 from '../../../../../public/images/social-icon-3.svg'
import SocialIcon4 from '../../../../../public/images/social-icon-4.svg'
import SocialIcon5 from '../../../../../public/images/social-icon-5.svg'
import SocialIcon6 from '../../../../../public/images/social-icon-6.svg'
import PlusImage from '../../../../../public/images/plus.svg'
import MinusImage from '../../../../../public/images/minus.svg'
import WhatLogix from '../../../../../public/images/what-logix.webp'
import SmallCardImage from '../../../../../public/images/small-cardimg.webp'
import SmallCardImage2 from '../../../../../public/images/small-cardimg-2.webp'
import SmallCardImage3 from '../../../../../public/images/small-cardimg-3.webp'
import SmallCardImage4 from '../../../../../public/images/small-cardimg-4.webp'
import SmallCardImage5 from '../../../../../public/images/small-cardimg-5.webp'
import SmallCardImage6 from '../../../../../public/images/small-cardimg-6.webp'
import SolutionImage from '../../../../../public/images/solution-left.webp'
import SolutionImage1 from '../../../../../public/images/solution-left-2.webp'
import SolutionImage2 from '../../../../../public/images/solution-left-3.webp'
import SolutionImage3 from '../../../../../public/images/solution-left-4.webp'
import SolutionImage4 from '../../../../../public/images/solution-left-5.webp'
import SolutionImage5 from '../../../../../public/images/solution-left-6.webp'
import AnnouncePersonImage from '../../../../../public/images/announce-person.webp'
import WhatLogixImage from '../../../../../public/images/what-guides-logix.webp'
import WhatLogixImage2 from '../../../../../public/images/guies-logix-2.webp'


export default function Home() {
    const router = useRouter();
    const cards = [
        {
            title: 'Returns & Exchange',
            des: 'Attract new customers by offering hassle-free returns on your D2C website, providing peace of mind and confidence in purchasing from brand.',
            image: SmallCardImage
        },
        {
            title: 'NDR (Non-Delivery Resolution)',
            des: 'Boost delivery conversion rates by efficiently resolving non-delivery issues, hence minimizing RTOs.',
            image: SmallCardImage2
        },
        {
            title: 'Brand Experience Page',
            des: 'Upsell and promote new sales through a dedicated brand experience page on your D2C website.',
            image: SmallCardImage3
        },
        {
            title: 'Communication Tool',
            des: 'Enable WhatsApp and SMS to provide order updates, address inquiries, and reduce "Where is my Order" calls.',
            image: SmallCardImage4
        },
        {
            title: 'Business Intelligence',
            des: 'Harnesses the power of advanced analytics and data visualization tools to provide actionable insights into your business operations.',
            image: SmallCardImage5
        },
        {
            title: 'Custom Rule Engine',
            des: 'Automate check on serviceability, customer info and fastest delivery route. Further you can setup auto order allocation process based on zone, weight and rates.',
            image: SmallCardImage6
        },
    ];
    const workCards = [
        {
            title: 'Connect with Our QCommerce Expert',
            des: 'Reach out to our dedicated QCommerce expert to discuss your business needs and explore how our solutions can benefit your operations.'
        },
        {
            title: 'Get Your Custom Integration Plan',
            des: 'Collaborate with our team to design a personalized integration plan tailored to your business model and operational workflow.'
        },
        {
            title: 'Onboard Your Team and Get Started',
            des: 'Invite your team members to join the platform and provide comprehensive training and support.'
        }
    ]
    const list = [
        'D2C website helps maintain full control over brand messaging, aesthetics, and customer experience.',
        'Collect valuable customer data, enabling personalized marketing campaigns, targeted promotions, and improved customer segmentation.',
        'Selling directly to consumers eliminates marketplace fees and commissions, leading to higher profit margins and increased revenue.',
        'Tailor your website to suit your unique brand identity, product offerings, and customer preferences.'
    ];
    const solutions = [
        {
            title: `Unified Order <span>Processing</span>`,
            des: 'Centralized order management, provides brands with a unified view of all orders, LSP performance, and customer interactions, streamlining operations and improving efficiency.',
            image: SolutionImage
        },
        {
            title: `<span>LSP (Logistics Service Provider)</span> Performance`,
            des: "Monitor and optimize logistics performance through ShipDelight's D2C Delight, ensuring timely delivery, reducing transit times, and enhancing customer satisfaction.",
            image: SolutionImage1
        },
        {
            title: `Branding Through <span>Custom Communication</span>`,
            des: "ShipDelight's D2C Delight enables brands to strengthen brand identity and foster customer loyalty through personalized communication channels, reinforcing brand values and building trust.",
            image: SolutionImage2
        },
        {
            title: `<span>Auto-NDR</span> (Non-Delivery Resolution)`,
            des: "Reduce return-to-origin (RTO) rates and improve delivery success rates leveraging automated NDR solutions to efficiently resolve delivery issues and minimize disruptions.",
            image: SolutionImage3
        },
        {
            title: `Efficient <span>Returns and Exchanges</span>`,
            des: "Streamline returns and exchanges processes with ShipDelight's D2C Delight, offering hassle-free options for customers and reducing operational overheads associated with reverse logistics.",
            image: SolutionImage4
        },
        {
            title: `Enhanced <span>Customer Experience</span>`,
            des: 'Provide seamless order fulfillment, transparent communication, and responsive support, fostering long-term customer relationships and driving repeat business.',
            image: SolutionImage5
        },
    ];
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'How can my Customer process return?',
            children: <p>Your customers can return orders from the tracking page. Once they open the tracking page, they can click on the return request. They will have to verify by entering the OTP, then select the item and reason they want to return.</p>,
        },
        {
            key: '2',
            label: 'How can my customer process exchange?',
            children: <p>Your customer can also request exchange product from the tracking page. Once they open the tracking page, they can click on the exchange request link. They will have to verify by entering the OTP.</p>,
        },
        {
            key: '3',
            label: 'How long it takes to process returns?',
            children: <p>For your customer, it is a simple process to raise the request. ShipDelight will help you manage these requests, once approved the delivery company will pick the order on next working day.</p>,
        },
        {
            key: '4',
            label: 'What type of policies can I set for returns and exchange?',
            children: <p>You can set return or exchange policies on product type, days, product usage status. These can be configured through our settings section.</p>,
        },
        {
            key: '5',
            label: 'How can I configure returns with Refunds?',
            children: <p>You can connect you payment gateway, wallet or even UPIs with our ShipDelight platform. You can request more details to your account manager.</p>,
        },
        {
            key: '6',
            label: 'Can I give real-time instructions for rescheduling the delivery?',
            children: <p>Yes! This is one of the powerful features. While shipment is in transit or if a delivery attempt has failed, you can communicate with the customer and decide on rescheduled delivery. You can do this simply by editing delivery info in your InstaShipin Order screen, and the update shall be conveyed online to the Courier on the ground.</p>,
        },
    ];
    const handleChange = (key: string | string[]) => {
        console.log(key);
    };
    return (
        <main>
            <section className="gradient-section platform-banner">
                <div className="container">
                    <Ilogix />
                    <h1 className="small">Take Control of Your Brand's Destiny with ShipDelight D2C Delight.</h1>
                    <div className="search-bar book-demo">
                        <Space.Compact style={{ width: '100%' }}>
                            <Input type='email' placeholder="Your work email address" />
                            <Button type="primary" className="btn-main">Book a Demo</Button>
                        </Space.Compact>
                    </div>
                    <Image src={WhiteGuide} alt="white guide" className="white-guide" />
                    <div className="platform-banner--image">
                        <Image src={Platform} alt="Platform" />
                    </div>
                </div>
            </section>
            <section className="product-brand normal-section">
                <div className="container small">
                    <h6>Brands</h6>
                    <h2>Strategic Solutions <span>Commanding Results</span></h2>
                    <BrandList normal={true} />
                </div>
            </section>
            <section className="section-yellow normal-section info-product" id="overviewProduct">
                <div className="container small">
                    <div className="info-product--container">
                        <div className="info-product--detail">
                            <h6>what is D2C Delight?</h6>
                            <h2>Enhance Customer Experience through <span>Direct Brand Interaction</span></h2>
                            <div className="info-product--detail-list">
                                {list.map((item, index) => (
                                    <div className="info-product--detail-list--item" key={index}>
                                        <ThreeDotsSvg />
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="info-product--image">
                            <Image src={WhatLogix} alt="Platform" className="platform" />
                            <Image src={WhatLogixImage} alt="guides-img" />
                            <Image src={WhatLogixImage2} alt="guides-img" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="common-section normal-section" id="featuresProduct">
                <div className="container small">
                    <h6>Features</h6>
                    <h2>Key Features of the <span>Logistics Intelligence Platform</span></h2>
                    <SmallCard cards={cards} />
                    <Button onClick={()=>{router.push('/book-a-demo')}} className="btn-main features-btn" type="primary">Book a Demo</Button>
                </div>
            </section>
            <section className="common-section section-grey normal-section" id="solutionsProduct">
                <div className="container small">
                    <h6>Solutions </h6>
                    <h2>Business Benefits of <span>D2C Delight</span></h2>
                    <CommonLeftRight details={solutions} />
                </div>
            </section>
            <section className="common-section normal-section position-relative" id="howWorksProduct">
                <div className="container small">
                    <h6>How does it works</h6>
                    <h2>Simplified Workflow <span>Unraveling Shipdelight's Magic</span></h2>
                    <WorkContainer cards={workCards} />
                </div>
            </section>
            <section className="integration section-yellow normal-section">
                <div className="container small">
                    <h6>Integration</h6>
                    <h2>Seamless Integration Making <span>Shipdelight Your Own</span></h2>
                    {/* <div className="position-relative">
                        <div className="integration--main-icon">
                            <IntegrateIcon />
                        </div>
                        <div className="integration--title">
                            <Star/> <p>Blends with the ecosystem of 3rd Party Apps</p>
                        </div>
                        <div className="svg">
                            <GuidesMerge />
                        </div>
                        <div className="svg reverse">
                            <GuidesMerge />
                        </div>
                        <div className="svg center">
                            <SemiCircle />
                        </div>
                        <div className="svg center bottom">
                            <SemiCircleSmall/>
                        </div>
                        <div className="integration--icons">
                            <div className="integration--icons--list">
                                <div className="integration--icon">
                                    <SocialIcon />
                                </div>
                                <div className="integration--icon">
                                    <SocialIcon2 />
                                </div>
                                <div className="integration--icon">
                                    <SocialIcon3 />
                                </div>
                            </div>
                            <div className="integration--icons--list">
                                <div className="integration--icon">
                                    <SocialIcon4 />
                                </div>
                                <div className="integration--icon">
                                    <SocialIcon5 />
                                </div>
                            </div>
                            <div className="integration--icons--list">
                                <div className="integration--icon">
                                    <SocialIcon6 />
                                </div>
                            </div>
                        </div>
                        <div className="integration--icons reverse">
                        <div className="integration--icons--list">
                                <div className="integration--icon">
                                    <SocialIcon />
                                </div>
                                <div className="integration--icon">
                                    <SocialIcon2 />
                                </div>
                                <div className="integration--icon">
                                    <SocialIcon3 />
                                </div>
                            </div>
                            <div className="integration--icons--list">
                                <div className="integration--icon">
                                    <SocialIcon4 />
                                </div>
                                <div className="integration--icon">
                                    <SocialIcon5 />
                                </div>
                            </div>
                            <div className="integration--icons--list">
                                <div className="integration--icon">
                                    <SocialIcon6 />
                                </div>
                            </div>
                        </div>
                        <div className="integration--cards">
                            <div className="integration--cards--card">
                                <TruckIcon />
                                <p>Order <br/> Management</p>
                            </div>
                            <div className="integration--cards--card">
                                <TruckIcon1 />
                                <p>Inventory <br/> Management</p>
                            </div>
                            <div className="integration--cards--card">
                                <TruckIcon2 />
                                <p>Last Mile <br/> Partner</p>
                            </div>
                        </div>
                    </div> */}
                    <Image className="inte--desktop" src={D2c} alt="D2c" />
                    <Image className="inte--mobile" src={D2cM} alt="D2c" />
                </div>
            </section>
            <section className="common-section normal-section faq faq-bodered position-relative">
                <div className="container">
                    <h6>FAQ’s</h6>
                    <h2>Still Unsure? <span>Find Answer you are looking</span></h2>
                    <Collapse 
                        expandIcon={({ isActive }) => (isActive ? <MinusImage /> : <PlusImage />)} 
                        items={items} defaultActiveKey={['1']} onChange={handleChange} 
                    />
                </div>
                <Image src={AnnouncePersonImage} alt="announcement" className="announce-person" />
            </section>
            <section className="gradient-section platform-banner platform-footer">
                <div className="container">
                    <h2>Explore More Logistics Solutions from <span>iLogix</span></h2>
                    <div className="search-bar book-demo">
                        <Space.Compact style={{ width: '100%' }}>
                            <Input type='email' placeholder="Your work email address" />
                            <Button type="primary" className="btn-main">Book a Demo</Button>
                        </Space.Compact>
                    </div>
                    <Image src={WhiteGuide} alt="white guide" className="white-guide" />
                    <div className="platform-banner--image">
                        <Image src={PlatformFooter} alt="Platform" />
                    </div>
                </div>
            </section>
        </main>
    );
}
