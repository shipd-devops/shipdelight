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
        services?: any;
    };
    const onFinish = async (values: any) => {
        console.log(values.services, 'values')
        // console.log(values, 'values')
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
                "Attribute": "mx_SelectedServices",
                "Value": JSON.stringify(values.services)
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

            console.log('Form data sent successfully:', responseData);
            window.lintrk('click', { conversion_id: 6615508 });
            window.gtag('event', 'conversion', { 'send_to': 'AW-728181268/IJHnCL6C_58DEJTUnNsC' });
            console.log('check network')
            router.push('/thankyou')
            window.gtag('event', 'conversion', { 'send_to': 'AW-728181268/IJHnCL6C_58DEJTUnNsC', 'value': 1.0, 'currency': 'INR' });
          } catch (error) {
            console.error('Error sending form data:', error);
            errorHnale()
        }
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
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
            {contextHolder}
            <section className="normal-section pricing-section">
                <div className="container">
                    <div className="pricing--content">
                        {
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
                                            rules={[
                                                { required: true, message: 'Please enter your email!' },
                                                { type: 'email', message: 'Please enter a valid email!' },
                                                { validator: emailDomainValidator },
                                            ]}
                                            hasFeedback
                                        >
                                            <Input type='email' placeholder='Company Email' />
                                        </Form.Item>
                                        <Form.Item<FieldType>
                                            name="companyName"
                                            rules={[{ required: true, message: 'Please enter your company name!' }]}
                                            hasFeedback
                                        >
                                            <Input placeholder='Your company name' />
                                        </Form.Item>
                                        <Form.Item<FieldType>
                                            name="number"
                                            rules={[{ required: true, message: 'Please enter your phone number!' },
                                            { pattern: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit number.' } ]}
                                            hasFeedback
                                        >
                                            <Input type='number' placeholder='Phone number' minLength={10} />
                                        </Form.Item>
                                        <Form.Item<FieldType> name="source" rules={[{ required: true, message: 'Please select source!' }]}>
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
                                        <Form.Item<FieldType> name="services" rules={[{ required: true, message: 'Please select services!' }]}>
                                            <Select
                                                placeholder="Select features"
                                                mode="multiple"
                                                allowClear
                                                suffixIcon={<ChevrotDown />}
                                            >
                                                <Option value="Non-delivery-Management">Non-delivery Management</Option>
                                                <Option value="Returns">Returns</Option>
                                                <Option value="Exchanges">Exchanges</Option>
                                                <Option value="Refunds">Refunds</Option>
                                                <Option value="Communications">Communications</Option>
                                                <Option value="Omni-channel Fulfilment">Omni-channel Fulfilment</Option>
                                                <Option value="Express Delivery">Express Delivery</Option>
                                                <Option value="Cash-on-Delivery">Cash-on-Delivery</Option>
                                                <Option value="Warehouse">Warehouse</Option>
                                                <Option value="B2B Logistics">B2B Logistics</Option>
                                                <Option value="E-commerce Logistics">E-commerce Logistics</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item>
                                            <Flex justify="space-between" gap={10}>
                                                <Button onClick={() => router.back()}>
                                                    Back
                                                </Button>
                                                <Button type="primary" htmlType="submit" className="btn-main fserv-button-submit">
                                                    Book A Demo
                                                </Button>
                                            </Flex>
                                        </Form.Item>
                                    </Form>
                                </div>
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
