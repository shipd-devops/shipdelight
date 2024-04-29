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
import Ilogix from '../../../../../public/images/ilogix.svg'
import Platform from '../../../../../public/images/main-platform-retail.webp'
import PlatformFooter from '../../../../../public/images/main-platform--footer.webp'
import WhiteGuide from '../../../../../public/images/white-guide.webp'
import ThreeDotsSvg from '../../../../../public/images/three-dots.svg'
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
import D2c from '../../../../../public/images/retail-delight-interagte.webp'
import D2cM from '../../../../../public/images/retail-delight-interagte-mobile.webp'
import PlusImage from '../../../../../public/images/plus.svg'
import MinusImage from '../../../../../public/images/minus.svg'
import WhatLogix from '../../../../../public/images/what-logix-retail.webp'
import SmallCardImage from '../../../../../public/images/retail-small-cardimg.webp'
import SmallCardImage2 from '../../../../../public/images/retail-small-cardimg-2.webp'
import SmallCardImage3 from '../../../../../public/images/retail-small-cardimg-3.webp'
import SmallCardImage4 from '../../../../../public/images/retail-small-cardimg-4.webp'
import SmallCardImage5 from '../../../../../public/images/retail-small-cardimg-5.webp'
import SmallCardImage6 from '../../../../../public/images/retail-small-cardimg-6.webp'
import SolutionImage from '../../../../../public/images/retail-solution-left.webp'
import SolutionImage1 from '../../../../../public/images/retail-solution-left-2.webp'
import SolutionImage2 from '../../../../../public/images/retail-solution-left-3.webp'
import SolutionImage3 from '../../../../../public/images/retail-solution-left-4.webp'
import SolutionImage4 from '../../../../../public/images/retail-solution-left-5.webp'
import SolutionImage5 from '../../../../../public/images/retail-solution-left-6.webp'
import AnnouncePersonImage from '../../../../../public/images/announce-person.webp'
import WhatLogixImage from '../../../../../public/images/what-guides-logix.webp'
import WhatLogixImage2 from '../../../../../public/images/guies-logix-2.webp'


export default function Home() {
    const router = useRouter();
    const cards = [
        {
            title: 'Multi-Channel Integration',
            des: 'Seamlessly integrate multiple sales channels, including online stores, brick-and-mortar stores, and mobile apps.',
            image: SmallCardImage
        },
        {
            title: 'Documentation Management',
            des: 'Automates documentation processes, such as order invoices, shipping labels, and customs paperwork.',
            image: SmallCardImage2
        },
        {
            title: 'Order Visibility',
            des: 'Allows retailers and customers to track orders from placement to delivery in real-time.',
            image: SmallCardImage3
        },
        {
            title: 'Movement to Distributors and Wholesalers',
            des: 'Enables retailers to manage wholesale orders, bulk shipments, and distribution networks efficiently.',
            image: SmallCardImage4
        },
        {
            title: 'Primary and Secondary Movement',
            des: 'Facilitates to manage inbound and outbound logistics seamlessly helping to reduce Lead Time.',
            image: SmallCardImage5
        },
        {
            title: 'Trusted Network of Partners',
            des: 'A trusted network of Industry Leading Logistics Partners to ensure seamless and reliable delivery services.',
            image: SmallCardImage6
        },
    ];
    const workCards = [
        {
            title: 'Connect with Our QCommerce Expert.',
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
        `Ensuring customers receive a consistent brand experience across all touchpoints, whether they're shopping online, in-store, or via mobile app.`,
        `With an integrated system, retailers can efficiently manage orders from multiple channels.`,
        `Provide real-time visibility into inventory levels across all channels, allowing retailers to optimize stock levels and prevent stockouts.`,
        `Collect and consolidate data from multiple channels, providing retailers with valuable insights into customer behavior, preferences, and trends.`
    ];
    const solutions = [
        {
            title: `Increased <span>Efficiency</span>`,
            des: 'By automating repetitive tasks and optimizing workflows, Retail Delight empowers brands to allocate resources effectively and focus on strategic initiatives, leading to increased efficiency and productivity.',
            image: SolutionImage
        },
        {
            title: `Improved <span>Customer Satisfaction</span>`,
            des: "By providing a seamless and integrated shopping experience, Retail Delight enhances customer satisfaction, driving repeat purchases and positive word-of-mouth.",
            image: SolutionImage1
        },
        {
            title: `Cost <span>Savings</span>`,
            des: "Retail Delight optimizes inventory management, reduces stockouts and overstocking, and minimizes shipping and handling costs, resulting in significant cost savings for retailers.",
            image: SolutionImage2
        },
        {
            title: `Enhanced <span>Scalability</span>`,
            des: "Retail Delight scales with the growth of the business, accommodating increased order volumes, expanding product lines, and entering new markets seamlessly.",
            image: SolutionImage3
        },
        {
            title: `Better <span>Decision Making</span>`,
            des: "With access to real-time data and insights, Retail Delight enables retailers to make data-driven decisions about inventory, pricing, and promotions, maximizing sales and profitability.",
            image: SolutionImage4
        },
        {
            title: `Competitive <span>Advantage</span>`,
            des: 'By offering a superior omnichannel experience, Retail Delight helps retailers differentiate themselves from competitors, attract new customers, and retain existing ones, driving business growth and success.',
            image: SolutionImage5
        },
    ];
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Do I need technical help to integrate order sync?',
            children: <p>Yes! But our consultant guide you or you developer at every step. Some integration will only require you to share you keys while some integration will need your developer to work upon.</p>,
        },
        {
            key: '2',
            label: 'Can I sync my CRM or Warehouse or Other Omni-channels?',
            children: <p>You can. Please contact our Support Center. We would need some information about the software you use, and soon you’ll be all set.</p>,
        },
        {
            key: '3',
            label: 'Can I use other services with using OMS?',
            children: <p>Yes, you can use other services. Our Apps are modular and can be configured as required. Please note that there may be other configurations required. Please do mention this in your requirements when you are talking with your Consultant.</p>,
        },
        {
            key: '4',
            label: 'How do I track the order status?',
            children: <p>The tracking option is provided in the same screen panel that shows details of the shipment journey. With this option, you would be able to track your order status in real-time.</p>,
        },
        {
            key: '5',
            label: 'Can I integrate tracking feature on my website?',
            children: <p>Yes. We shall provide the ShipDelight Tracking URL. You can use it wherever required on your site to track the shipment status of any order placed through your online store.</p>,
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
                    <h1 className="small">Unlock Omnichannel Success with ShipDelight's Retail Delight.</h1>
                    <BookDemo data={true} />
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
                            <h6>what is Retail Delight?</h6>
                            <h2>Unify Your Brand Experience, <span>Amplify Customer Satisfaction</span></h2>
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
                    <h2>Key Features of the <span>ShipDelight's Retail Delight</span></h2>
                    <SmallCard cards={cards} />
                    <Button onClick={()=>{router.push('/book-a-demo')}} className="btn-main features-btn" type="primary">Book a Demo</Button>
                </div>
            </section>
            <section className="common-section section-grey normal-section" id="solutionsProduct">
                <div className="container small">
                    <h6>Solutions </h6>
                    <h2>Business Benefits of <span>ShipDelight's Retail Delight</span></h2>
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
