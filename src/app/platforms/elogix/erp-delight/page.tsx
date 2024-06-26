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
import BookDemo from "@/app/components/BookDemo";
import { useRouter } from "next/navigation";

// IMAGES
import Ilogix from '../../../../../public/images/elogix.svg'
import Platform from '../../../../../public/images/main-platform--footer--elogix.webp'
import Platform2 from '../../../../../public/images/main-platform--footer--erp.webp'
import Platform2M from '../../../../../public/images/main-platform--footer--erp--mobile.webp'
import PlatformFooter from '../../../../../public/images/main-platform--footer--elogix.webp'
import WhiteGuide from '../../../../../public/images/white-guide.webp'
import ThreeDotsSvg from '../../../../../public/images/three-dots.svg'
import PlusImage from '../../../../../public/images/plus.svg'
import MinusImage from '../../../../../public/images/minus.svg'
import WhatLogix from '../../../../../public/images/what-logix-erp.webp'
import SmallCardImage from '../../../../../public/images/small-cardimg-erp.webp'
import SmallCardImage2 from '../../../../../public/images/small-cardimg-erp-2.webp'
import SmallCardImage3 from '../../../../../public/images/small-cardimg-erp-3.webp'
import SmallCardImage4 from '../../../../../public/images/small-cardimg-erp-4.webp'
import SmallCardImage5 from '../../../../../public/images/small-cardimg-erp-5.webp'
import SmallCardImage6 from '../../../../../public/images/small-cardimg-erp-6.webp'
import SolutionImage from '../../../../../public/images/solution-left-erp.webp'
import SolutionImage1 from '../../../../../public/images/solution-left-erp-2.webp'
import SolutionImage2 from '../../../../../public/images/solution-left-erp-3.webp'
import SolutionImage3 from '../../../../../public/images/solution-left-erp-4.webp'
import SolutionImage4 from '../../../../../public/images/solution-left-erp-5.webp'
import SolutionImage5 from '../../../../../public/images/solution-left-erp-6.webp'
import AnnouncePersonImage from '../../../../../public/images/announce-person.webp'
import WhatLogixImage from '../../../../../public/images/what-guides-logix.webp'
import WhatLogixImage2 from '../../../../../public/images/guies-logix-2.webp'


export default function Home() {
    const router = useRouter();
    const cards = [
        {
            title: 'Forward and Reverse B2C Movement',
            des: 'From initial order placement to product returns and exchanges,  ensure efficient handling and tracking.',
            image: SmallCardImage
        },
        {
            title: 'Branch and Hub Management',
            des: 'Manage operations, monitor performance, and allocate resources across multiple branches and hubs.',
            image: SmallCardImage2
        },
        {
            title: 'COD Management',
            des: 'Track COD payments, reconcile accounts, and manage cash flow effectively to reduce financial risks.',
            image: SmallCardImage3
        },
        {
            title: 'Easy Scanning',
            des: "Scans and Sorting feature ShipDelight's Logistics ERP offers real-time visibility into shipment status.",
            image: SmallCardImage4
        },
        {
            title: 'Bag and Bin Management',
            des: 'Advanced bag and bin management features enables fleet owners to optimize storage space and improve warehouse efficiency.',
            image: SmallCardImage5
        },
        {
            title: 'Manifest Management',
            des: 'Simple manifest management for ensuring compliance with regulatory requirements and enhancing operational efficiency.',
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
        `Centralized platform to manage all incoming orders, track shipment status, and coordinate delivery schedules.`,
        `Monitor driver performance metrics such as delivery times, route optimization, and customer feedback.`,
        `Handle both quality control (QC) and non-QC returns efficiently, minimizing processing times, and expanding offerings.`,
        `Efficiently resolve non-delivery issues, minimize return-to-origin (RTO) rates, and improve delivery success rates.`
    ];
    const solutions = [
        {
            title: `Consolidated <span>Order Control</span>`,
            des: 'Logistics ERP offers fleet owners a centralized platform to manage all aspects of order fulfilment, including order processing, inventory management, and delivery scheduling, streamlining operations and improving efficiency.',
            image: SolutionImage
        },
        {
            title: `Driver <span>Performance Optimization</span>`,
            des: "Fleet owners can optimize driver performance with ShipDelight's Logistics ERP, enabling them to track driver activities, analyze performance metrics, and identify opportunities for improvement, leading to enhanced service quality and customer satisfaction.",
            image: SolutionImage1
        },
        {
            title: `COD <span>Visibility and Reconciliation</span>`,
            des: "Our Solution provides fleet owners with comprehensive visibility into COD transactions, facilitating accurate reconciliation, minimizing financial risk, and ensuring transparency in financial operations.",
            image: SolutionImage2
        },
        {
            title: `NDR Management <span>to boost Conversions</span>`,
            des: "Fleet owners can efficiently manage non-delivery issues with ShipDelight's Logistics ERP, minimizing return-to-origin (RTO) rates, reducing operational costs, and enhancing delivery success rates, leading to improved customer satisfaction and loyalty.",
            image: SolutionImage3
        },
        {
            title: `Returns <span>Management Efficiency</span>`,
            des: "Streamlines returns management processes for fleet owners, enabling them to handle returns efficiently and minimize processing times, resulting in cost savings and improved customer service.",
            image: SolutionImage4
        },
        {
            title: `Scalability <span>and Growth</span>`,
            des: "ShipDelight's Logistics ERP is scalable and adaptable to meet the evolving needs of fleet owners, supporting growth and expansion into new markets, new service offerings, and new business opportunities, ensuring long-term success.",
            image: SolutionImage5
        },
    ];
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'How is it different form other inventory management system?',
            children: <p>Unlike other inventory management systems, ours is made to support the next generation - quick commerce. Your inventory needs to move very fast.</p>,
        },
        {
            key: '2',
            label: 'Is there additional cost of using inventory management system?',
            children: <p>Inventory management system is on-demand service. Yes, there is a cost of using the system and will require configurations to need your requirements. Please contact you account manager to know more.</p>,
        },
        {
            key: '3',
            label: "How can you transfer migrate to using ShipDelight's inventory system?",
            children: <p>We support multiple methods, that are automated. It can be done easily. Please inform your account manager about your existing inventory system, he will guide you or he will do it for you.</p>,
        },
        {
            key: '4',
            label: 'Can I also manage inventory that is for global fulfilment?',
            children: <p>Yes, you can manage inventory for global fulfilment. You need to provide your API of global delivery partners, our system will take care of inventory syncs.</p>,
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
                    <h1 className="small">Maximize Income, Optimize Operations with ShipDelight's Logistics ERP.</h1>
                    <BookDemo data={true} />
                    <Image src={WhiteGuide} alt="white guide" className="white-guide" />
                    <div className="platform-banner--image">
                        <Image src={Platform2} alt="Platform" />
                        <Image src={Platform2M} alt="Platform" />
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
                            <h6>what is ERP Delight?</h6>
                            <h2>Navigate eCommerce <span>Logistics with Clear Operational Insight</span></h2>
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
                            <Image src={WhatLogix} alt="Platform" className="platform new" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="common-section normal-section" id="featuresProduct">
                <div className="container small">
                    <h6>Features</h6>
                    <h2>Key Features of the <span>Shipdelight's Logistics Platform</span></h2>
                    <SmallCard cards={cards} />
                    <Button className="btn-main features-btn" type="primary">Book a Demo</Button>
                </div>
            </section>
            <section className="common-section section-grey normal-section" id="solutionsProduct">
                <div className="container small">
                    <h6>Solutions </h6>
                    <h2>Business Benefits of <span>ShipDelight's Logistics ERP</span></h2>
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
                    <BookDemo data={true} />
                    <Image src={WhiteGuide} alt="white guide" className="white-guide" />
                    <div className="platform-banner--image">
                        <Image src={PlatformFooter} alt="Platform" />
                    </div>
                </div>
            </section>
        </main>
    );
}
