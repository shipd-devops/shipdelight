'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Flex } from 'antd';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import SliderCommon from "../components/SliderCommon";
import BrandList from "../components/BrandsList";
import ImageTab from "../components/ImageTab";
import Testimonial from "../components/Testimonials";
import StateCard from "../components/StateCard";
// IMAGES
import AlertIcon from '../../../public/images/alert.svg'
import Brands from '../../../public/images/brands.webp'
import SwiperImage from '../../../public/images/slide-feature--d2c.webp'
import SwiperImage2 from '../../../public/images/slide-feature--d2c-2.webp'
import SwiperImage3 from '../../../public/images/slide-feature--d2c-3.webp'
import SwiperImage4 from '../../../public/images/slide-feature--d2c-4.webp'
import SwiperImage5 from '../../../public/images/slide-feature-5.webp'
import OurObjective from "../../../public/images/question-icon.webp"
import ImageIndia from '../../../public/images/india-shipdelight.webp'
import D2CIcons from '../../../public/images/announcement.webp'
import PlusImage from '../../../public/images/plus.svg'
import MinusImage from '../../../public/images/minus.svg'
import D2c from '../../../public/images/d2c-interagte.webp'
import Fullslider from '../../../public/images/fullslider.webp'
import FullsliderMobile from '../../../public/images/fullslider--mobile.webp'
import D2cM from '../../../public/images/d2c-interagte-mobile.webp'
import AnnouncePersonImage from '../../../public/images/announce-person.webp'
import OnePlusImage from '../../../public/images/shop-stop.svg'
import DrSeth from '../../../public/images/dr-seth.svg'
import Xiomi from '../../../public/images/xiomi-testimonial.svg'
import ClientImage from '../../../public/images/client-img.webp'
import RightIcon from '../../../public/images/right-success-icon.svg'
import End2End from '../../../public/images/end-to-end--image.webp'
import WindLeft from '../../../public/images/wind-left.webp'
import WindRight from '../../../public/images/wind-right.webp'

export default function Home() {
    const slides = [
        {
            title: 'Seamless courier partner integration',
            text: 'Our team will directly integrate your preferred Courier Partners. Ready integration with 27+ courier partners available.',
            image: SwiperImage
        },
        {
            title: 'Auto-NDR to Boost Conversions',
            text: 'Customized auto-reattempt facility for better delivery conversion, our clients have experienced up to 10% improvements in conversion.',
            image: SwiperImage2
        },
        {
            title: 'Priority rule setting',
            text: 'We will set priority rules based on zone, weight, and rates to ensure optimal shipping decisions according to your current agreements.',
            image: SwiperImage3
        },
        {
            title: 'Unified Delivery Management',
            text: "Feel free to explore and activate Express Delivery options seamlessly from a single interface, optimizing your shipping process.",
            image: SwiperImage4
        }
    ];
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'What is included in the curated pilot offer for iLogix for up to 3000 orders?',
            children: <p>D2C Insider Members can avail end-to-end use of the iLogix platform for up to 3000 orders. This includes Forward Movement, Reverse Movement, NDR, Business Intelligence, etc.</p>,
        },
        {
            key: '2',
            label: 'What priority rules are set by ShipDelight?',
            children: <p>Priority rules are set by ShipDelight based on zone, weight, and rates to optimize shipping decisions.</p>,
        },
        {
            key: '3',
            label: 'What options are available for returns and exchanges, and how can brands choose between QC and Non-QC?',
            children: <p>Brands can choose between QC and Non-QC based on their Brand Policies for returns and exchanges, the same can be told to the ShipDelight Team.</p>,
        },
        {
            key: '4',
            label: "How does ShipDelight's Auto-NDR feature help boost conversions?",
            children: <p>ShipDelight's NDR feature enables the auto-reattempt facility for better delivery conversion, with clients experiencing up to 10% improvements.</p>,
        },
        {
            key: '5',
            label: 'How does ShipDelight ensure seamless integration with preferred courier partners?',
            children: <p>ShipDelight has ready API integrations with courier partners through its Logistics Intelligence Platform that can be enabled at a click.</p>,
        },
    ];
    const handleChange = (key: string | string[]) => {
        console.log(key);
    };
    const router = useRouter();
    const handleSendEmail = () => {
        router.push(`/get-in-touch-d2c`)
    }
    const testimonialSlides = [
        {
            text: 'They have delivered more than what they have committed. Their sophisticated platform has not only helped us to streamline our logistic processes and tracking mechanism, but has made us far more efficient.',
            name: 'Bhavin D.',
            role: 'MANAGER – LOGISTICS',
            image: OnePlusImage,
            clent: ClientImage
        },
        {
            text: 'Shipdelight has been very supportive to our technical business and requirements and their rule engine for last mile deliveries have helped us to deliver to our clients as per their expectations.',
            name: 'Nikhil C.',
            role: 'SR. MANAGER OPERATIONS',
            image: DrSeth,
            clent: ClientImage
        },
        {
            text: 'Our partnership with ShipDelight 1.5 years ago yielded immediate results. With their support, we expanded, improved customer experience, and achieved fast delivery. Their same-day service, delivering within 10-12 hours, was exceptional.',
            name: 'Sourav.',
            role: 'OPERATIONS MANAGER ',
            image: Xiomi,
            clent: ClientImage
        }
    ];
    const challenges = [
        'Higher logistics cost?',
        'Weight discrepancies leading to non-transparent billings?',
        'Higher TAT for Issue and Ticket Resolution?',
        'Reduced visibility on shipping-related issues such as lost packages or delivery errors?'
    ];
    const presents = [
        'Enable up to 5 Courier Partners of your choice',
        'Test 3000 Orders for 60 Days',
        'NDR API',
        'Booking and Tracking API ',
        'Returns and Exchange API'
    ];
    const [inView, setInView] = useState(false);
    const [currentValues, setCurrentValues] = useState([0, 0, 0]);
    const maxValues = [300, 100, 30];
    const timeFrame = 5000; // 5 seconds in milliseconds

    useEffect(() => {
        if (inView) {
        const increments = maxValues.map(max => max / (timeFrame / 5));
        let startTime: number | null = null;
        const animationFrame = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min(timestamp - startTime, timeFrame);
            const newValues = increments.map((increment, index) => {
            const value = increment * progress;
            return Math.min(value, maxValues[index]);
            });
            setCurrentValues(newValues);
            if (progress < timeFrame) {
            requestAnimationFrame(animationFrame);
            }
        };
        requestAnimationFrame(animationFrame);
        } else {
        setCurrentValues([0, 0, 0]);
        }
    }, [inView]);

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        if (entries && entries[0]) {
        setInView(entries[0].isIntersecting);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5,
        });

        const counterSection = document.getElementById('counter-section');
        if (counterSection) {
        observer.observe(counterSection);
        }

        return () => {
        observer.disconnect();
        };
    }, []);
    return (
        <main>
            
            <section className="solution gradient-2 normal-section text-center dtc-home">
                <div className="container position-relative">
                    <Image src={Brands} alt="Brands" className="dtc-brands" />
                    <Flex vertical align="center">
                        <div className="announce-div">
                            <Image src={D2CIcons} alt="shipdelight - India" />
                            <p>Enhance your D2C strategy now!</p>
                        </div>
                        <h1>Now Partner Directly with Couriers for the Best Rates and Unmatched Operational Efficiency</h1>
                        <Image src={ImageIndia} alt="shipdelight - India" className="shipdelight-in" />
                        <Button onClick={handleSendEmail} type="primary" className="btn-main">Get In Touch</Button>
                        <Image src={WindLeft} alt="WindLeft" className="wind-left" />
                        <Image src={WindRight} alt="WindRight" className="wind-right" />
                    </Flex>
                </div>
            </section>
            <section className="product-brand normal-section">
                <div className="container small">
                    <h6>Brands</h6>
                    <h2>Brands <span>We are connected with</span></h2>
                    <BrandList white={true} />
                </div>
            </section>
            <section className='normal-section common-section section-yellow'>
                <div className="container small">
                    <Flex className='challenges-container' align="center">
                        <div>
                            <h2 style={{fontWeight: 700}}>Are You Facing Any of This <span>Challenges in D2C Business?</span></h2>
                            <Flex vertical className="challenges">
                                {challenges.map((item, index)=>(
                                    <Flex key={index}>
                                        <div style={{paddingTop: '2px'}}>
                                            <AlertIcon />
                                        </div>
                                        <p>{item}</p>
                                    </Flex>
                                ))}
                            </Flex>
                        </div>
                        <div className="question-icon--container">
                            <Image src={OurObjective} alt='question' className="question-icon" />
                        </div>
                    </Flex>
                </div>
            </section>
            <section className="solution normal-section gradient-2 position-relative d2c-stats--section">
                <div className="container side">
                    <Flex className='d2c-insider' vertical>
                        <div>
                            <h2 style={{fontWeight: 700}}>For D2C Insider Community, <span>ShipDelight presents:</span></h2>
                            <Flex gap={20} wrap="wrap">
                                {presents.map((present, index)=>(
                                    <Flex key={index} className="d2c-insider--list" align="center" gap={12}>
                                        <RightIcon />
                                        <p>{present}</p>
                                    </Flex>
                                ))}
                            </Flex>
                        </div>
                        <Button onClick={handleSendEmail} type="primary" className="btn-main">Get in Touch</Button>
                    </Flex>
                    <Flex vertical className="d2c-stats" id="counter-section">
                        <div>
                            <p>{Math.round(currentValues[0])}+</p>
                            <p>Brands are associated with us</p>
                        </div>
                        <div>
                            <p>{Math.round(currentValues[1])}M+</p>
                            <p>Successful delivery experiences</p>
                        </div>
                        <div>
                            <p>{Math.round(currentValues[2])}+</p>
                            <p>Cities delivered next day</p>
                        </div>
                    </Flex>
                </div>
            </section>
            <section className='normal-section common-section end-to-end'>
                <div className="container">
                    <Flex className='end-to-end--container purpose'>
                        <div>
                            <h2 style={{fontWeight: 700}}>End-to-End <span>Shipment Puzzle doesn’t Need to be Complex.</span></h2>
                            <Flex vertical className="end-to-end--list">
                                <p><strong>Negotiate Volume Discounts:</strong> Businesses can negotiate volume discounts directly with their logistics partners.</p>
                                <p><strong>Automated Weight Verification:</strong> By integrating their systems with logistics partners' APIs, businesses can implement weight Freezing.</p>
                                <p><strong>Streamline Ticket Resolution:</strong> Allowing customer service representatives to access real-time shipment information and proactively address customer inquiries and issues.</p>
                                <p><strong>Utilize Tracking and Monitoring Tools:</strong> Integration with logistics partners' tracking and monitoring systems provides businesses with real-time visibility into the shipping process.</p>
                            </Flex>
                        </div>
                        <div className="end-2-end-div">
                            <Image src={End2End} alt='end-to-end-image' className="end-2-end--image" />
                        </div>
                    </Flex>
                </div>
            </section>
            <section className="common-section normal-section section-yellow w-fullsection">
                <div className="container position-relative">
                    <Flex vertical className="solutions-cta">
                        <h2 style={{fontWeight: 700}} className="mb-0 text-center">How Can We Redefine Your Customer's <br /> <span>Post-Purchase Experience Through Logistics?</span></h2>
                        <SliderCommon slides={slides} />
                        <div className="swiper--contaier position-relative">
                            <div className={`swiperslide--slide full image`}>
                                <div>
                                    <h3>Effortless Returns and Exchanges</h3>
                                    <p>Offer your customers hassle-free one-click returns and exchanges, as the ShipDelight Team will take the responsibility for coordinating. You can also choose from QC/Non-QC based on your Brand’s Policies.</p>
                                </div>
                                <div></div>
                                <Image className="fullslider mobile-hide" src={Fullslider} alt="D2c" />
                                <Image className="fullslider desktop-hide" src={FullsliderMobile} alt="D2c" />
                            </div>
                        </div>
                        <Button type="primary" className="btn-main" onClick={handleSendEmail}>Get In Touch</Button>
                    </Flex>
                </div>
            </section>
            <section className="normal-section common-section testimonial-section version-section">
                <div className="container">
                    <h2 style={{fontWeight: 700}}>Hear From <span>The Best in The Business...</span></h2>
                    <Testimonial version={true} slides={testimonialSlides} />
                </div>
            </section>
            <section className="integration section-yellow normal-section">
                <div className="container">
                    <Flex vertical gap={10} className="integration--d2c">
                        <h6 className="mb-0">Integration</h6>
                        <h2 style={{fontWeight: 700}} className="mb-0">Seamless <span>Integrations</span></h2>
                        <p>We seamlessly integrate with popular e-commerce platforms like Shopify, WooCommerce, Magento, and more, ensuring a smooth transition for your business.</p>
                    </Flex>
                    <Image className="inte--desktop" src={D2c} alt="D2c" />
                    <Image className="inte--mobile" src={D2cM} alt="D2c" />
                </div>
            </section>
            <section className="common-section normal-section faq faq-bodered position-relative">
                <div className="container">
                    <h6>FAQ’s</h6>
                    <h2 style={{fontWeight: 700}}>Still Unsure? <span>Find Answer you are looking</span></h2>
                    <Collapse 
                        expandIcon={({ isActive }) => (isActive ? <MinusImage /> : <PlusImage />)} 
                        items={items} defaultActiveKey={['1']} onChange={handleChange} 
                    />
                </div>
                <Image src={AnnouncePersonImage} alt="announcement" className="announce-person" />
            </section>
        </main>
    );
}
