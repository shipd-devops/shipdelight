'use client'
import {useContext, useRef, useEffect, useState} from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, Form, Input, Flex, message } from 'antd';
import BrandListBig from "../components/BrandListBig";
import SmallCard from "../components/SmallCard";
import { GlobalContext } from "@/app/context/srore";
// IMAGES
import AlertIcon from '../../../public/images/alert.svg'
import OurObjective from "../../../public/images/question-icon.webp"
import Sucess from "../../../public/images/right-success-icon.svg"
import QuickCommerce from "../../../public/images/quick-commerce-1.webp"
import QuickCommerce2 from "../../../public/images/quick-commerce-2.webp"
import QuickCommerce3 from "../../../public/images/quick-commerce-3.webp"
import QuickCommerce4 from "../../../public/images/quick-commerce-4.webp"

export default function Home() {
    const { TextArea } = Input;
    const cards = [
        {
            title: 'Empower Your Brand, Not Marketplaces:',
            des: 'ShipDelight gives you control over your quick commerce offering, bypassing marketplace limitations.'
        },
        {
            title: 'Trusted by Leaders, Built for Success:',
            des: `Top brands rely on ShipDelight's robust features to optimize delivery and customer satisfaction.`
        },
        {
            title: 'End-to-End Solutions, Seamless Delivery',
            des: 'Our comprehensive services and technology empower you to offer quick commerce with ease.'
        },
    ];
    const challenges = [
        '<strong>Brand Rejection:</strong> 8 out of 10 brands are rejected by quick commerce marketplaces due to strict criteria, limiting their reach and potential sales.',
        '<strong>High Commission Fees:</strong> Marketplaces charge high commissions, cutting into profit margins.',
        '<strong>Category Manager Constraints:</strong> Brands are often at the mercy of category managers whose KPIs focus on maximizing returns per square foot, limiting brand accommodation due to space constraints.'
    ];
    type FieldType = {
        name?: string;
        number?: string;
        mail?: string;
        companyName?: string;
        query?: string;
    };
    const onFinish = async (values: any) => {
        console.log(values, 'values');
        const apiUrl = 'https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?accessKey=u$rbfb42d135952938f62e7764d1d33ee22&secretKey=00c332128197e768fca341da764053530842f760';
        const formData = [
            {
                "Attribute": "FirstName",
                "Value": values.name
            },
            {
                "Attribute": "Phone",
                "Value": values.number
            },
            {
                "Attribute": "EmailAddress",
                "Value": values.mail
            },
            {
                "Attribute": "Company",
                "Value": values.companyName
            },
            {
                "Attribute": "query",
                "Value": values.query
            },
            {
                "Attribute": "Source",
                "Value": "Quick Commerce Sollution Page"
            }
        ];
        console.log(formData, 'formData')
        try {
            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            susHandle()
            console.log('Form data sent successfully:', responseData);
          } catch (error) {
            console.error('Error sending form data:', error);
            errorHnale()
        }
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const [messageApi] = message.useMessage();
    const errorHnale = () => {
        messageApi.open({
          type: 'error',
          content: 'Form was not sent',
        });
    };
    const susHandle = () => {
        messageApi.open({
          type: 'success',
          content: 'Form sent sucessfully',
        });
    };
    const { shake, setShake } = useContext(GlobalContext);
    const inputRef = useRef<any>(null);
    const router = useRouter();
    useEffect(() => {
      if (inputRef.current) {
        if(shake) {
            inputRef?.current?.focus();
        }
      }
    }, [shake]);
    const handleShake = () => {
        setShake(true);
        setTimeout(() => {
            setShake(false);
        }, 300);
    }
    const quickCards = [
        {
            title: 'Same & Next Day Delivery',
            list: [
                `<strong>Average Turnaround Time (TAT) of 3 Hours Within City:</strong> Micro-fulfillment centers enable rapid order processing and delivery within just a few hours.`,
                `<strong>Services Present in 8 Major Cities:</strong> By being strategically located in key urban areas, customers across multiple cities can enjoy the benefits of fast, reliable delivery services.`
            ],
            img: QuickCommerce
        },
        {
            title: 'Multi-Location Pickups',
            list: [
                `<strong>Facilitated Multi-Location Pickups:</strong> We ensure seamless and efficient logistics operations by enabling pickups from multiple store locations or warehouses.`,
                `<strong>Enhanced Customer Convenience with Multiple Pickup Points:</strong> By offering multiple pickup points, we provide greater flexibility and convenience for customers.`
            ],
            img: QuickCommerce2
        },
        {
            title: 'Multiple Pickups Per Day',
            list: [
                `<strong>Minimized Fulfilment Turnaround Time (TAT):</strong> By offering multiple pickups per day, we ensure the least fulfilment turnaround time and keep your inventory moving swiftly.`,
                `<strong>Increased Inventory Turnover and Efficiency:</strong> Frequent pickups help maintain a steady flow of inventory, reducing the chances of stockouts and overstocks.`
            ],
            img: QuickCommerce3
        },
        {
            title: 'Integrated Dashboard',
            list: [
                `<strong>Manage and Measure Performance Effectively:</strong> Our integrated dashboard enables you to manage multiple partners and measure their performance, providing real-time insights and data.`,
                `<strong>Comprehensive Analytics for Informed Decisions:</strong> Access detailed analytics on order fulfilment, and delivery times, allowing you to make informed decisions.`
            ],
            img: QuickCommerce4
        }
    ];
    const [activeTab, setActiveTab] = useState(0);
    const intervalRef = useRef<any>(null);
    const setupInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        setActiveTab(prevCount => (prevCount + 1) % 4);
      }, 8000);
    };
    useEffect(() => {
        setupInterval();
        return () => clearInterval(intervalRef.current);
    }, []);
    const handleChangeCount = (newCount: number) => {
        setActiveTab(newCount);
        setupInterval();
    };
    const emailDomainValidator = (rule: any, value: any) => {
        if (!value) {
          return Promise.resolve(); 
        }
        const personalEmailDomainsPatterns = [
            /@gmail\./i,
            /@yahoo\./i,
            /@outlook\./i,
            /@hotmail\./i,
            /@aol\./i,
            /@icloud\./i,
            /@live\./i,
            /@msn\./i,
            /@protonmail\./i,
        ];
        const isPersonalEmail = personalEmailDomainsPatterns.some(pattern => pattern.test(value));
        if (isPersonalEmail) {
            return Promise.reject('Personal email addresses are not allowed.');
        }
        return Promise.resolve();
    };
    return (
        <main>
            <section className="solution gradient-2 normal-section dtc-home">
                <div className="container position-relative">
                    <Flex className="quick-commerce-banner">
                        <div className="">
                            <h1>Quick Commerce <br />Solutions for the  <span>Health and Supplements Industry</span></h1>
                            <p className="banner-desc">Quick Forward Movement + Quick RVP Movement and Everything In Between</p>
                        </div>
                        <div className="contact-div no-flex" id="Contact" style={{paddingTop: 60, marginTop: '-60px'}}>
                            <p>Let us know how we can reach you.</p>
                            <Form
                                name="contactFormQuickCommerce"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item<FieldType>
                                    name="name"
                                    rules={[{ required: true, message: 'Please enter your name!' }]}
                                    hasFeedback
                                >
                                    <Input ref={inputRef} placeholder='Full Name' />
                                </Form.Item>
                                <Form.Item<FieldType>
                                    name="mail"
                                    rules={[
                                        { required: true, message: 'Please enter your email!' },
                                        { type: 'email', message: 'Please enter a valid email!' },
                                        { validator: emailDomainValidator },
                                    ]}
                                    hasFeedback
                                >
                                    <Input type='email' placeholder='Official Company Email' />
                                </Form.Item>
                                <Form.Item<FieldType>
                                    name="companyName"
                                    rules={[{ required: true, message: 'Please enter your copany name!' }]}
                                    hasFeedback
                                >
                                    <Input placeholder='Your company name or URL' />
                                </Form.Item>
                                <Form.Item<FieldType>
                                    name="number"
                                    rules={[{ required: true, message: 'Please enter your phone number!' },
                                    { pattern: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit number.' }, ]}
                                    hasFeedback
                                >
                                    <Input type='number' placeholder='Phone number' minLength={10} />
                                </Form.Item>
                                <Form.Item<FieldType>
                                    name="query"
                                >
                                    <TextArea rows={4} placeholder="Tell us about your business..." />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="btn-main">
                                        Get In Touch
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Flex>
                </div>
            </section>
            <section className="product-brand normal-section">
                <div className="container small">
                    <h2>Brands <span>We are connected with</span></h2>
                    <BrandListBig white={true} second />
                </div>
            </section>
            <section className='normal-section common-section section-yellow'>
                <div className="container small">
                    <Flex className='challenges-container left' align="center">
                        <div>
                            <h2 style={{fontWeight: 700}}>Challenges with <span>Quick <br />Commerce Marketplaces</span></h2>
                            <p>Consumers now view health supplements like medicines. Quick commerce platforms are reshaping expectations, increasing demand for faster health product deliveries.</p>
                            <Flex vertical className="challenges">
                                {challenges.map((item, index)=>(
                                    <Flex key={index}>
                                        <div style={{paddingTop: '2px'}}>
                                            <AlertIcon />
                                        </div>
                                        <p dangerouslySetInnerHTML={{__html: item}} />
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
            <section className="normal-section common-section your-terms">
                <div className="container">
                    <h2 className='purpose-h2 font-700'>Quick Commerce on <span>Your Terms</span></h2>
                    <p>ShipDelight enables the health and supplements industry to overcome these challenges and offer quick commerce services directly.</p>
                    <Flex className="your-terms--tabs">
                        <div className={`your-terms--tab ${activeTab === 0 ? 'active' : activeTab > 0 ? 'activated active' : ''}`} onClick={()=>{handleChangeCount(0)}}>
                            <p>Same & Next Day Delivery</p>
                        </div>
                        <div className={`your-terms--tab ${activeTab === 1 ? 'active' : activeTab > 1 ? 'activated active' : ''}`} onClick={()=>{handleChangeCount(1)}}>
                            <p>Multi-Location Pickups</p>
                        </div>
                        <div className={`your-terms--tab ${activeTab === 2 ? 'active' : activeTab > 2 ? 'activated active' : ''}`}  onClick={()=>{handleChangeCount(2)}}>
                            <p>Multiple Pickups Per Day</p>
                        </div>
                        <div className={`your-terms--tab ${activeTab === 3 ? 'active' : activeTab > 3 ? 'activated active' : ''}`}  onClick={()=>{handleChangeCount(3)}}>
                            <p>Integrated Dashboard</p>
                        </div>
                    </Flex>
                    {quickCards.map((card, index) => (
                        <div className={index === activeTab ? "quick-commerce-card full" : "quick-commerce-card hide"} key={index}>
                            <Flex className="quick-commerce-card--items" justify='space-between'>
                                <Flex vertical gap={20} className='quick-commerce-card--inner'>
                                    {card.list.map((cardItem, inerrIndex) => (
                                        <Flex gap={12} key={inerrIndex}>
                                            <div>
                                                <Sucess/>
                                            </div>
                                            <p dangerouslySetInnerHTML={{__html: cardItem}} />
                                        </Flex>
                                    ))}
                                </Flex>
                                <Image src={card.img} alt={card.title ? card.title : "Same & Next Day Delivery"} />
                            </Flex>
                        </div>
                    ))}
                    <Flex justify='center' style={{marginTop: '40px'}}>
                        <Button type='primary' className='btn-main head-btn' style={{display: 'flex !important'}} onClick={()=>{router.push('/health-and-supplements-industry/#Contact'); handleShake();}}>
                            Get In Touch
                        </Button>
                    </Flex>
                </div>
            </section>
            <section className="normal-section common-section">
                <div className="container">
                    <h2 className="purpose-h2 font-700"><span>Why Choose ShipDelight</span> for <br /> Quick Commerce in Electronics?</h2>
                    <p>With ShipDelight, you gain the power to control your logistics and, consequently, your customer experience. Offer quick commerce services on your own terms, bypass the constraints of traditional marketplaces, and enjoy the benefits of efficient, reliable, and fast delivery solutions.</p>
                    <SmallCard noImage cards={cards} />
                </div>
            </section>
        </main>
    );
}
