'use client'
import { useState, useEffect } from "react";
import { Suspense } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'
import Link from "next/link";
import { Button, Flex, Form, Input, Select, message } from 'antd';
// IMAGES
import PricingImage from '../../../public/images/pricing--image.webp'
import ChevrotDown from '../../../public/images/chevrot-down-fill.svg'
import LogoImage from '../../../public/images/logo.svg'

export default function Home() {
    const router = useRouter();
    const { Option } = Select;
    const [messageApi, contextHolder] = message.useMessage();
    const [steps, setSteps] = useState(0);
    const errorHnale = () => {
        messageApi.open({
          type: 'error',
          content: 'Somethin went wrong! Please check your details!',
          className: 'error-message',
        });
    };
    type FieldType = {
        name?: string;
        number?: string;
        mail?: string;
        companyName?: string;
        source?: string;
        features?: any;
    };
    const onFinish = async (values: any) => {
        console.log(values.services, 'values')
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
                "Attribute": "mx_Features",
                "Value": JSON.stringify(values.features)
            },
            {
                "Attribute": "Source",
                "Value": "D2C Landing Page"
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
            setSteps(steps +  1);
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
            <section className="normal-section pricing-section">
                <div className="container">
                    <div className="pricing--content">
                        {
                            steps !== 2 ?
                            <Flex gap={17} className="pricing-steps">
                                <div className="pricing-step active"></div>
                                <div className={steps === 1 ?"pricing-step active":"pricing-step"}></div>
                            </Flex> : ''
                        }
                        { steps === 0 ? 
                            <div className="pricing-steps--content second">
                                <h1 className="small">Let us know how we can reach you.</h1>
                                <div className="contact-div full">
                                    <Form
                                        name="get-in-touhD2C"
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        autoComplete="off"
                                        key={'normal'}
                                    >
                                        <Form.Item<FieldType>
                                            name="name"
                                            rules={[{ required: true, message: 'Please enter your name!' }]}
                                            hasFeedback
                                        >
                                            <Input placeholder='Full Name' />
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
                                            rules={[{ required: true, message: 'Please enter your Comapny name!' }]}
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
                                        <Form.Item<FieldType> name="features" rules={[{ required: true, message: 'Please select services!' }]}>
                                            <Select
                                                placeholder="Select features"
                                                mode="multiple"
                                                allowClear
                                                suffixIcon={<ChevrotDown />}
                                            >
                                                <Option value="shipping-gateway">Shipping Gateway</Option>
                                                <Option value="returns-and-exchange">Returns and Exchange</Option>
                                                <Option value="ndr">NDR</Option>
                                                <Option value="customer-communication">Customer Communication</Option>
                                                <Option value="brand-experience">Brand experience</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item>
                                            <Flex justify="space-between" gap={10}>
                                                <Button onClick={() => router.back()}>
                                                    Back
                                                </Button>
                                                <Button type="primary" htmlType="submit" className="btn-main fserv-button-submit">
                                                    Submit
                                                </Button>
                                            </Flex>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>  :
                            <div className="pricing-steps--content">
                                <h1 className="small">Thank you for reaching out to us!  🎉</h1>
                                <p>Your request has been successfully received. We're here to ensure your experience with us is seamless and tailored to your requirements.</p>
                                <p>A Brand Specialist will be in touch with you shortly to assist you further.</p>
                                <p>We look forward to connecting with you soon!</p>
                            </div>
                        }
                    </div>
                    <div className="pricing--image">
                        <Image src={PricingImage} alt="pricing--image" />
                    </div>
                </div>
            </section>
        </main>
    );
}
