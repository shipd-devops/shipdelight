'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Form, Input, Flex, message } from 'antd';
// IMAGES
import ChevrotDown from '../../../public/images/chevrot-down-fill.svg'
import LocationIcon from '../../../public/images/location-contact.svg'
import PhoneIcon from '../../../public/images/phone-contact.svg'
import EmailIcon from '../../../public/images/email-contact.svg'


export default function Home() {
    const { TextArea } = Input;
    const cardBanner = [
        {
            title: 'Pricing',
            text: 'Contact our sales team to get answers about pricing and enterprise solutions.',
            link: '/pricing',
            linkText: 'Contact Us'
        },
        // {
        //     title: 'Customer Support',
        //     text: 'Already a customer? Get best support from our customer Service team.',
        //     link: '/',
        //     linkText: 'Contact Support'
        // },
        {
            title: 'Book Demo',
            text: 'Book a demo, see how our software boosts your business efficiency.',
            link: '/book-a-demo',
            linkText: 'Book Demo'
        }
    ];
    const [messageApi, contextHolder] = message.useMessage();
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
    const [mailLocal, setMailLocal] = useState<any>('');
    const [nameLocal, setNameLocal] = useState<any>('');
    const [forceRender, setForceRender] = useState(false);
    useEffect(() => {
        const item = localStorage.getItem('number');
        const item2 = localStorage.getItem('name');
        setMailLocal(item);
        setNameLocal(item2)
    }, []);
    useEffect(() => {
        setForceRender(prevState => !prevState);
    }, [mailLocal]);
    const initialValues = {
        number: mailLocal || '',
        name: nameLocal || ''
    };
    type FieldType = {
        name?: string;
        number?: string;
        mail?: string;
        companyName?: string;
        query?: string;
    };
    const onFinish = async (values: any) => {
        console.log(values, 'values')
        // Define the API endpoint
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
                "Value": "Contact Us Page"
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
    return (
        <main>
            {contextHolder}
            <section className="gradient-section banner-section">
                <div className="container small">
                    <h1 className="">We Are Here To Help</h1>
                    <p className="title-desc">Empower Your Growth Journey with Our Expert Assistance</p>
                </div>
            </section>
            <section className="common-section normal-section contact">
                <div className="container small">
                    <div>
                        <h6>CONNECT</h6>
                        <h2>Talk To <span>Our Team</span></h2>
                    </div>
                    <div className="banner-cards">
                        {
                            cardBanner.map((card, index) => (
                                <div className="banner-cards--item" key={index}>
                                    <div>
                                        <p className="banner-cards--title">{card.title}</p>
                                        <p>{card.text}</p>
                                    </div>
                                    <Link href={card.link}>{card.linkText}</Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="common-section normal-section">
                <div className="container small">
                    <div className="contact-div p-0">
                        <div>
                            <div className="contact-div--head">
                                <h2>Get In <span>Touch</span></h2>
                                <p>Tell us about you and our Brand Specialist will reach out shortly</p>
                            </div>
                            <Form
                                name="contactForm"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                initialValues={initialValues}
                                key={forceRender ? 'forceRender' : 'normal'}
                            >
                                <Form.Item<FieldType>
                                    name="name"
                                    rules={[{ required: true, message: 'Please enter your name!' }]}
                                    hasFeedback
                                >
                                    <Input placeholder='Name' />
                                </Form.Item>
                                <Form.Item<FieldType>
                                    name="mail"
                                    rules={[{ required: true, message: 'Please enter your email!' }]}
                                    hasFeedback
                                >
                                    <Input type='email' placeholder='Email' />
                                </Form.Item>
                                <Form.Item<FieldType>
                                    name="companyName"
                                    rules={[{ required: true, message: 'Please enter your copany name!' }]}
                                    hasFeedback
                                >
                                    <Input placeholder='Your company name' />
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
                                    <TextArea rows={4} placeholder="Type your query here" />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="btn-main">
                                        Send
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <Flex vertical className="contact-div--map">
                            <div className="maps-div--map">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15079.837611351288!2d72.86507183869739!3d19.109436839031424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c86cd7a7b401%3A0x61512c910ae71c37!2sTimes%20Square%20Building!5e0!3m2!1sen!2sin!4v1709556074132!5m2!1sen!2sin"
                                    style={{border: 0}} 
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                            <Flex className="contact-div--social-links">
                                <Flex className="contact-div--social-link" align="center">
                                    <PhoneIcon />
                                    <div>
                                        <p>Phone</p>
                                        <a href="tel:9154321234">+91 5432 1234</a>
                                    </div>
                                </Flex>
                                <Flex className="contact-div--social-link" align="center">
                                    <EmailIcon />
                                    <div>
                                        <p>Email</p>
                                        <a href="mailto:info@shipdelight.com">info@shipdelight.com</a>
                                    </div>
                                </Flex>
                            </Flex>
                            <Flex className="contact-div--social-link last" align="center">
                                <LocationIcon />
                                <p>402, Town Centre 2, Opp Times Square Building, Andheri - Kurla Rd, Marol, Andheri East, Mumbai-400059, India</p>
                            </Flex>
                        </Flex>
                    </div>
                </div>
            </section>
        </main>
    );
}