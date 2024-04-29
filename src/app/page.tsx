'use client'
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Space, Input, Flex, Form } from 'antd';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import SliderCommon from "./components/SliderCommon";
import BrandList from "./components/BrandsList";
import ImageTab from "./components/ImageTab";
import Testimonial from "./components/Testimonials";
import Head from "next/head";
// IMAGES
import TruckGif from '../../public/images/truck.gif'
import HomeBannerAward from '../../public/images/home-bannner-award.webp'
import HomeBanner from '../../public/images/home-banner.webp'
import SwiperImage from '../../public/images/slide-feature.webp'
import SwiperImage2 from '../../public/images/slide-feature-2.webp'
import SwiperImage3 from '../../public/images/slide-feature-3.webp'
import SwiperImage4 from '../../public/images/slide-feature-4.webp'
import SwiperImage5 from '../../public/images/slide-feature-5.webp'
import SwiperImageSolution from '../../public/images/slide-solution.webp'
import SwiperImageSolution2 from '../../public/images/slide-solution-2.webp'
import ImageSolution from '../../public/images/solutions-solution.webp'
import ImageSolution2 from '../../public/images/solutions-solution-2.webp'
import ImageSolution3 from '../../public/images/solutions-solution-3.webp'
import ImageSolution4 from '../../public/images/solutions-solution-4.webp'
import TabImage from '../../public/images/tab-image.webp'
import TabImage2 from '../../public/images/tab-image-2.webp'
import TabImage3 from '../../public/images/tab-image-3.webp'
import OnePlusImage from '../../public/images/shop-stop.svg'
import DrSeth from '../../public/images/dr-seth.svg'
import ClientImage from '../../public/images/client-img.webp'
import PlusImage from '../../public/images/plus.svg'
import MinusImage from '../../public/images/minus.svg'
import TrafficImage from '../../public/images/traffic.svg'
import PlatformFooter from '../../public/images/main-platform--footer.webp'
import ShopifyIcon from '../../public/images/shopify.svg'
import StateCard from "./components/StateCard";



export default function Home() {
    const slides = [
        {
            title: 'NDR',
            text: 'Brands can significantly reduce NDR occurrences by establishing proactive communication channels with buyers.',
            link: '/solution/ndr',
            linkText: 'Learn more',
            image: SwiperImage
        },
        {
            title: 'Exchanges',
            text: 'Salvage potentially lost sales, retain customers, and build long-term relationships based on trust and satisfaction.',
            link: '/solution/exchanges',
            linkText: 'Learn more',
            image: SwiperImage2
        },
        {
            title: 'Returns',
            text: 'A clear and simple return policy not only attracts new buyers but also encourages repeat customers to experiment with new items on your website.',
            link: '/solution/returns',
            linkText: 'Learn more',
            image: SwiperImage3
        },
        {
            title: 'Communications',
            text: "An multi-channel communication strategy is essential for brands to meet customers' evolving expectations and preferences.",
            link: '/solution/communications',
            linkText: 'Learn more',
            image: SwiperImage4
        },
        {
            title: 'Refunds',
            text: "By processing refunds quickly, brands demonstrate their commitment to customer service and show that they value their customers' time and trust. ",
            link: '/solution/refunds',
            linkText: 'Learn more',
            full: true,
            image: SwiperImage5
        }
    ];
    const slides2 = [
        {
            title: 'B2B Logistics',
            text: 'In a market driven by diverse consumer preferences and rapid digitalization, omnichannel presence is not just a strategy but a necessity.',
            link: '/solution/b2b-logistics',
            linkText: 'Learn more',
            image: SwiperImageSolution
        },
        {
            title: 'E-commerce Logistics',
            text: 'Attracting customers to your Direct-to-Consumer (D2C) website from marketplaces without compromising on the customer experience is paramount.',
            link: '/solution/ecommerce-shipping',
            linkText: 'Learn more',
            image: SwiperImageSolution2
        }
    ];
    const slides3 = [
        {
            title: 'Omni-channel Fulfilment',
            text: 'Synchronize their online and offline operations, ensuring that every customer interaction is cohesive, personalized, and satisfying.',
            link: '/solution/omni-channel',
            linkText: 'Learn more',
            image: ImageSolution
        },
        {
            title: 'Express Delivery',
            text: 'Brands can exceed customer expectations by delivering orders in record time, ensuring satisfaction and loyalty.',
            link: '/solution/express-delivery',
            linkText: 'Learn more',
            image: ImageSolution2
        },
        {
            title: 'Cash-on-Delivery',
            text: 'COD is a phenomenon deeply ingrained in the Indian market, offering customers a sense of security and trust when purchasing from new or unfamiliar brands.',
            link: '/solution/cash-on-dilevry',
            linkText: 'Learn more',
            image: ImageSolution3
        },
        {
            title: 'Warehouse',
            text: 'Locating inventory across multiple India enables faster order fulfilment, reduced transit times, ensuring timely delivery, and exceptional customer satisfaction.',
            link: '/solution/warehouse',
            linkText: 'Learn more',
            image: ImageSolution4
        }
    ];
    const imagetabs = [
        {
            title: 'Integrated Business Planning',
            text: 'Align your D2C business strategies enables you to make strategic decisions that drive growth and improve profitability.',
            image: TabImage
        },
        {
            title: 'Data Intelligence',
            text: 'With this actionable intelligence, you can make informed decisions, optimize processes, and enhance the overall efficiency of your D2C business.',
            image: TabImage2
        },
        {
            title: 'AI & Predictive Insights',
            text: 'ShipDelight leverages AI and Predictive Insights to anticipate future demand, mitigate risks, and optimize resource allocation in your D2C business.',
            image: TabImage3
        },
    ];
    const testimonialSlides = [
        {
            text: 'They have delivered more than what they have committed. Their sophisticated platform has not only helped us to streamline our logistic processes and tracking mechanism, but has made us far more efficient.',
            name: 'Bhavin D.',
            role: 'MANAGER – ECOM LOGISTICS',
            image: OnePlusImage,
            clent: ClientImage
        },
        {
            text: 'Shipdelight has been very supportive to our technical business and requirements and their rule engine for last mile deliveries have helped us to deliver to our clients as per their expectations.',
            name: 'SR. MANAGER OPERATIONS',
            role: 'SR. MANAGER OPERATIONS',
            image: DrSeth,
            clent: ClientImage
        }
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
    const stats = [
        {
            stats: '300+',
            description: 'Brands are associated with us'

        },
        {
            stats: '30+',
            description: 'Cities Delivered Next Day'

        },
        {
            stats: '100M+',
            description: 'Successful delivery experiences'

        },
        {
            stats: '10M+',
            description: 'INR saved'

        },
    ];
    const router = useRouter();
    const handleSendEmail = (values: any) => {
        localStorage.setItem('email', values.email);
        router.push(`/book-a-demo`)
    }
    return (
        <main>
            {/* <Head>
                <title>Home Page</title>
                <meta name="description" content="This is the home page description." />
                <meta property="og:title" content="Home Page" />
                <meta property="og:description" content="This is the home page description." />
                <meta property="og:image" content="/images/home-og-image.jpg" />
            </Head> */}
            <section className="solution gradient-section home">
                <div className="container side">
                    <div className='banner-info-section'>
                        <div>
                            <Flex gap={8} className="home--info">
                                <Image className="home-banner-award" src={HomeBannerAward} alt="Home Banner Award" />
                            </Flex>
                            <h1>Own your logistics, Own your customer experience</h1>
                            <p className="title-desc">Intelligent logistics platform helping consumer brands in managing the entire product lifecycle.</p>
                        </div>
                        <div className="search-bar book-demo">
                            <Form onFinish={handleSendEmail}>
                                <Space.Compact style={{ width: '100%' }}>
                                    <Form.Item
                                        name="email"
                                        rules={[{ required: true, message: 'Please enter your email!' }]}
                                    >
                                        <Input name="email" type='email' placeholder="Your work email address" />
                                    </Form.Item>
                                    <Button htmlType="submit" type="primary" className="btn-main">Get Started</Button>
                                </Space.Compact>
                            </Form>
                        </div>
                    </div>
                    <div className='banner-img-section'>
                        <Image src={HomeBanner} alt="solution page banner" className="banner-img" />
                    </div>
                </div>
            </section>
            <div className="position-relative">
                <section className="brands">
                    <div className="brands-container section-yellow">
                        <div className="container">
                            <h6>Brands</h6>
                            <h2>Strategic Solutions <span>Commanding Results</span></h2>
                            <BrandList />
                            <StateCard stats={stats}></StateCard>
                        </div>
                    </div>
                </section>
                <section className="testimonial-part section-grey sticky-conainer">
                    <div className="sticky-div">
                        <div className="sticky-div--inner">
                            <TrafficImage />
                        </div>
                    </div>
                    <div className="container">
                        <h6>solutions</h6>
                        <h2>Revolutionize Retail with <span>Post Purchase Experience</span></h2>
                        <SliderCommon slides={slides} />
                    </div>
                </section>
                <section className="testimonial-part section-yellow sticky-conainer not-first">
                    <div className="sticky-div">
                        <div className="sticky-div--inner">
                            <TrafficImage />
                        </div>
                    </div>
                    <div className="container">
                        <h6>solutions</h6>
                        <h2>Revolutionize with <span>Shipping Solutions</span></h2>
                        <SliderCommon slides={slides2} />
                    </div>
                </section>
                <section className="testimonial-part section-grey sticky-conainer not-first">
                    <div className="sticky-div">
                        <div className="sticky-div--inner">
                            <TrafficImage />
                        </div>
                    </div>
                    <div className="container">
                        <h6>solutions</h6>
                        <h2>Revolutionize Retail with <span>Shipping Solutions</span></h2>
                        <SliderCommon slides={slides3} />
                    </div>
                </section>
            </div>
            <section className="gradient-section common-section">
                <div className="container">
                    <h6>Products</h6>
                    <h2>Other <span>Benefits</span></h2>
                    <ImageTab slides={imagetabs} />
                </div>
            </section>
            <section className="section-grey common-section testimonial-section mb-10">
                <div className="container">
                    <h6>TESTIMONIALS</h6>
                    <h2>Hear From The <span>Best in The Business</span></h2>
                    <Testimonial slides={testimonialSlides} />
                </div>
            </section>
            <section className="section-yellow common-section faq sticky-conainer">
                <div className="sticky-div">
                    <div className="sticky-div--inner">
                        <TrafficImage />
                    </div>
                </div>
                <div className="container">
                    <h6>FAQ’s</h6>
                    <h2>Still Unsure? <span>Find Answer you are looking</span></h2>
                    <Collapse 
                        expandIcon={({ isActive }) => (isActive ? <MinusImage /> : <PlusImage />)} 
                        items={items} defaultActiveKey={['1']} onChange={handleChange} 
                    />
                </div>
            </section>
            <section className="gradient-section platform-banner platform-footer home">
                <div className="container">
                    <h2>Introducing ShipDelight on <span>Shopify</span></h2>
                    <p>Elevating your Brand with Insta Returns for Effortless Returns and Exchanges.</p>
                    <a href="https://apps.shopify.com/instareturns" target="_blank" type='primary' className='ant-btn ant-btn-primary shopify'><ShopifyIcon />Install Shopify App</a>
                    <div className="platform-banner--image">
                        <Image src={PlatformFooter} alt="Platform" />
                    </div>
                </div>
            </section>
        </main>
    );
}
