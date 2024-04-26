'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Collapse, Space, Input } from 'antd';
import type { CollapseProps } from 'antd';
import BrandList from "@/app/components/BrandsList";
import SmallCard from "@/app/components/SmallCard";
import CommonLeftRight from "@/app/components/CommonLeftRight";
import WorkContainer from "@/app/components/WorkContainer";
import { useRouter } from "next/navigation";

// IMAGES
import Ilogix from '../../../../../public/images/elogix.svg'
import Platform from '../../../../../public/images/main-platform-biker.webp'
import PlatformFooter from '../../../../../public/images/main-platform--footer--elogix.webp'
import WhiteGuide from '../../../../../public/images/white-guide.webp'
import ThreeDotsSvg from '../../../../../public/images/three-dots.svg'
import PlusImage from '../../../../../public/images/plus.svg'
import MinusImage from '../../../../../public/images/minus.svg'
import WhatLogix from '../../../../../public/images/what-logix-biker.webp'
import SmallCardImage from '../../../../../public/images/small-cardimg-biker.webp'
import SmallCardImage2 from '../../../../../public/images/small-cardimg-biker-2.webp'
import SmallCardImage3 from '../../../../../public/images/small-cardimg-biker-3.webp'
import SmallCardImage4 from '../../../../../public/images/small-cardimg-biker-4.webp'
import SmallCardImage5 from '../../../../../public/images/small-cardimg-biker-5.webp'
import SmallCardImage6 from '../../../../../public/images/small-cardimg-biker-6.webp'
import SolutionImage from '../../../../../public/images/solution-left-biker.webp'
import SolutionImage1 from '../../../../../public/images/solution-left-biker-2.webp'
import SolutionImage2 from '../../../../../public/images/solution-left-biker-3.webp'
import SolutionImage3 from '../../../../../public/images/solution-left-biker-4.webp'
import SolutionImage4 from '../../../../../public/images/solution-left-biker-5.webp'
import SolutionImage5 from '../../../../../public/images/solution-left-biker-6.webp'
import AnnouncePersonImage from '../../../../../public/images/announce-person.webp'
import WhatLogixImage from '../../../../../public/images/what-guides-logix.webp'
import WhatLogixImage2 from '../../../../../public/images/guies-logix-2.webp'


export default function Home() {
    const router = useRouter();
    const cards = [
        {
            title: 'Dual Direction Fulfillment',
            des: 'Supports both forward and reverse logistics. Manage outbound deliveries and handle returns seamlessly.',
            image: SmallCardImage
        },
        {
            title: 'Cash Handling Solutions',
            des: 'Comprehensive COD management capabilities allows bikers to track cash on delivery transactions.',
            image: SmallCardImage2
        },
        {
            title: 'Order Visibility - GPS Enabled',
            des: 'GPS-enabled order visibility helps bikers to track order locations and provide accurate delivery estimates.',
            image: SmallCardImage3
        },
        {
            title: 'Doorstep Discount to Boost Sales Conversion',
            des: "The Biker App enables delivery bikers to offer doorstep discounts to customers, incentivizing purchases.",
            image: SmallCardImage4
        },
        {
            title: 'Create Custom Brand Experience Flows in Biker App',
            des: 'Offer Brands customized brand experience flows within the Biker App, to enhance customer engagement.',
            image: SmallCardImage5
        },
        {
            title: 'Payment Management',
            des: 'The app allows bikers to manage their payment details and view their earnings, including fixed and variable payments.',
            image: SmallCardImage6
        },
    ];
    const workCards = [
        {
            title: 'Connect with Our Logistics Consultant.',
            des: 'Reach out to our dedicated Logistics Consultant.'
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
        `Bikers can manage all incoming orders through the Biker App.`,
        `Comprehensive COD management capabilities to track cash on delivery transactions, collect payments, and reconcile accounts.`,
        `GPS-enabled order visibility for delivery bikers to track order locations in real-time.`,
        `Enable delivery bikers to offer doorstep discounts to customers.`
    ];
    const solutions = [
        {
            title: `Centralized <span>Order Management for Bikers</span>`,
            des: 'The Biker App provides delivery bikers with a centralized platform to manage all aspects of order fulfillment, including order tracking, navigation, and customer communication, improving efficiency and accuracy in delivery operations.',
            image: SolutionImage
        },
        {
            title: `COD <span>Visibility</span>`,
            des: "Delivery bikers can track cash on delivery transactions in real-time through the Biker App, ensuring transparency and accountability in financial transactions, and reducing the risk of fraud and discrepancies.",
            image: SolutionImage1
        },
        {
            title: `NDR Management <span>to Reduce RTOs</span>`,
            des: "The Biker App includes NDR management features, enabling delivery bikers to efficiently resolve non-delivery issues and minimize return-to-origin (RTO) rates, improving delivery success rates and customer satisfaction.",
            image: SolutionImage2
        },
        {
            title: `QC-based <span>Returns Management</span>`,
            des: "Delivery bikers can handle both quality control (QC) and non-QC returns seamlessly through the Biker App, streamlining returns management processes and reducing operational costs.",
            image: SolutionImage3
        },
        {
            title: `Competitive <span>Advantage</span>`,
            des: "In today's competitive market, providing exceptional delivery experiences can be a key differentiator for businesses. ShipDelight's Biker Application equips fleet owners with the tools and capabilities to offer superior delivery services.",
            image: SolutionImage4
        },
        {
            title: `Enhanced <span>Customer Experience</span>`,
            des: "The Biker App enables delivery bikers to provide exceptional service to customers, offering real-time order tracking, accurate delivery estimates, and personalized interactions, enhancing customer satisfaction and loyalty.",
            image: SolutionImage5
        },
    ];
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Can I track the location of my bikers in real-time?',
            children: <p>Yes, our app offers real-time GPS tracking, allowing you to monitor your bikers' locations throughout the delivery process.</p>,
        },
        {
            key: '2',
            label: 'Is there support for handling cash-on-delivery (COD) transactions?',
            children: <p>Yes, our app supports cash-on-delivery transactions, providing a seamless payment experience for both customers and bikers.</p>,
        },
        {
            key: '3',
            label: 'Can I assign multiple deliveries to a single biker for optimal route planning?',
            children: <p>Yes, our app supports batch deliveries, allowing you to optimize routes and maximize efficiency for your bikers.</p>,
        },
        {
            key: '4',
            label: 'Can I access analytics and performance metrics for my delivery operations?',
            children: <p>Yes, our app provides comprehensive analytics and performance metrics, allowing you to track key metrics and optimize your Hub and Branch operations.</p>,
        },
        {
            key: '5',
            label: 'Can you do Biker KYC?',
            children: <p>Yes, our Biker App has a streamlined process of conducting and verifying background checks of Bikers, so you hire the best and trustworthy employees only.</p>,
        }
    ];
    const handleChange = (key: string | string[]) => {
        console.log(key);
    };
    return (
        <main>
            <section className="gradient-section platform-banner">
                <div className="container">
                    <Ilogix />
                    <h1 className="small">Navigate Routes, Deliver Smiles: ShipDelight's Biker App.</h1>
                    <div className="search-bar book-demo">
                        <Space.Compact style={{ width: '100%' }}>
                            <Input type='email' placeholder="Your work email address" />
                            <Button onClick={()=>{router.push('/book-a-demo')}} className="btn-main features-btn" type="primary">Book a Demo</Button>
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
                    <div className="info-product--container small">
                        <div className="info-product--detail">
                            <h6>what is Biker Delight?</h6>
                            <h2>Navigate Last Mile Challenges with <span>Precision and Efficiency</span></h2>
                            <div className="info-product--detail-list">
                                {list.map((item, index) => (
                                    <div className="info-product--detail-list--item" key={index}>
                                        <ThreeDotsSvg />
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="">
                            <Image src={WhatLogix} alt="Platform" className="" />
                            {/* <Image src={WhatLogixImage} alt="guides-img" />
                            <Image src={WhatLogixImage2} alt="guides-img" /> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="common-section normal-section" id="featuresProduct">
                <div className="container small">
                    <h6>Features</h6>
                    <h2>Key Features of the <span>ShipDelight's Biker Application</span></h2>
                    <SmallCard cards={cards} />
                    <Button className="btn-main features-btn" type="primary">Book a Demo</Button>
                </div>
            </section>
            <section className="common-section section-grey normal-section" id="solutionsProduct">
                <div className="container small">
                    <h6>Solutions </h6>
                    <h2>Business Benefits of <span>ShipDelight's Biker Application</span></h2>
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
                    <h2>Explore More Logistics Solutions from <span>eLogix</span></h2>
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
