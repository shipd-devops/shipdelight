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


export default function Home() {
    const router = useRouter();
    const { Option } = Select;
    const [steps, setSteps] = useState(1);
    const [messageApi, contextHolder] = message.useMessage();
    const errorHnale = () => {
        messageApi.open({
          type: 'error',
          content: 'Form was not sent',
        });
    };
    // const searchParams: any = useSearchParams();
    // const search: any = searchParams?.get('email');
    const [mailLocal, setMailLocal] = useState<any>('');
    const [forceRender, setForceRender] = useState(false);
    useEffect(() => {
        const item = localStorage.getItem('email');
        setMailLocal(item)
    }, []);
    useEffect(() => {
        setForceRender(prevState => !prevState);
    }, [mailLocal]);
    const initialValues = {
        mail: mailLocal || ''
    };
    console.log(initialValues, mailLocal)
    type FieldType = {
        name?: string;
        number?: string;
        mail?: string;
        companyName?: string;
        source?: string;
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
                "Attribute": "SourceMedium",
                "Value": values.source
            },
            {
                "Attribute": "Source",
                "Value": "Booking A Demo"
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
            setSteps(2)
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
                        {steps === 1 ? 
                            <div className="pricing-steps--content second">
                                <h1 className="small">Help us respond quickly by providing basic info.</h1>
                                <div className="contact-div full">
                                    <Form
                                        name="bookDemo"
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        initialValues={initialValues}
                                        autoComplete="off"
                                        key={forceRender ? 'forceRender' : 'normal'}
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
                                            rules={[{ required: true, message: 'Please enter your phone number!' }]}
                                            hasFeedback
                                        >
                                            <Input type='number' placeholder='Phone number' minLength={10} />
                                        </Form.Item>
                                        <Form.Item<FieldType> name="source" rules={[{ required: true, message: 'Please enter source!' }]}>
                                            <Select
                                                placeholder="How did you find us?"
                                                // onChange={onGenderChange}
                                                allowClear
                                                suffixIcon={<ChevrotDown />}
                                            >
                                                <Option value="Linkedin">Linkedin</Option>
                                                <Option value="Newspaper">Newspaper</Option>
                                                <Option value="Google">Google</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item>
                                            <Flex justify="space-between" gap={10}>
                                                <Button onClick={() => router.back()}>
                                                    Back
                                                </Button>
                                                <Button type="primary" htmlType="submit" className="btn-main">
                                                    Book A Demo
                                                </Button>
                                            </Flex>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div> :
                            <div className="pricing-steps--content">
                                <h1 className="small">Success! 🎉</h1>
                                <p>We've received your request for a demo.</p>
                                <p>Check your email inbox for a link to kickstart your journey with us.</p>
                                <p>Welcome aboard!"</p>
                                <Button onClick={()=>{router.push('/')}} type="primary" className="btn-main">
                                    Go to Home Page
                                </Button>
                            </div>
                        }
                    </div>
                    <div className="pricing--image">
                        <Image src={PricingImage} alt="kl" />
                    </div>
                </div>
            </section>
        </main>
    );
}
