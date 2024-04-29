'use client'
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, Flex, Form, Input, Select, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
// IMAGES
import PricingImage from '../../../public/images/pricing--image.webp'
import ChevrotDown from '../../../public/images/chevrot-down-fill.svg'


export default function Home() {
    const router = useRouter();
    const { Option } = Select;
    const buttons = [
        'Non-delivery Management',
        'Returns',
        'Exchanges',
        'Refunds',
        'Communications',
        'Omni-channel Fulfilment',
        'Express Delivery',
        'Cash-on-Delivery',
        'Warehouse',
        'B2B Logistics',
        'E-commerce Logistics'
    ];
    const [selectedButtons, setSelectedButtons] = useState<string[]>(['Non-delivery Management']);
    const handleButtonClick = (value: string) => {
        setSelectedButtons((prevSelectedButtons: string[]) => {
            if (prevSelectedButtons.includes(value) && prevSelectedButtons.length > 1) {
                return prevSelectedButtons.filter(item => item !== value);
            }
            if (!prevSelectedButtons.includes(value)) {
                return [...prevSelectedButtons, value];
            }
            return prevSelectedButtons;
        });
    };
    const [messageApi, contextHolder] = message.useMessage();
    const errorHnale = () => {
        messageApi.open({
          type: 'error',
          content: 'Form was not sent',
        });
    };
    const [steps, setSteps] = useState(0);
    type FieldType = {
        name?: string;
        number?: string;
        mail?: string;
        companyName?: string;
        source?: string;
        formName?: string;
    }; 

    const onFinish = async (values: any) => {
        console.log(values, 'values')
        // Define the API endpoint
        const apiUrl = 'https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?accessKey=u$rbfb42d135952938f62e7764d1d33ee22&secretKey=00c332128197e768fca341da764053530842f760';
        const formData = [
            {
                "Attribute": "mx_SelectedServices",
                "Value": JSON.stringify(selectedButtons)
            },
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
                "Value": "Pricing Landing Page"
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
            // setSteps(2)
            console.log('Form data sent successfully:', responseData);
          } catch (error) {
            console.error('Error sending form data:', error);
            errorHnale()
        }
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const initialValues = {
        formName: 'pricing'
    };
    const [form] = useForm();
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
                        {
                            steps === 0 ? 
                            <div className="pricing-steps--content">
                                <h1 className="small">Select the all features that you would like us to enable.</h1>
                                <div className="pricing-btns">
                                    {buttons.map((item, index) => (
                                        <button
                                            className={selectedButtons.includes(item) ? 'active' : ''}
                                            onClick={() => handleButtonClick(item)}
                                            key={index}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                                <Button type="primary" className="btn-main" onClick={()=>{setSteps(1)}}> Continue</Button>
                            </div> : steps === 1 ? 
                            <div className="pricing-steps--content second">
                                <h1 className="small">Let us know how we can reach you.</h1>
                                <div className="contact-div full">
                                    <Form
                                        form={form}
                                        name="pricing"
                                        initialValues={initialValues}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        autoComplete="off"
                                    >
                                        <Form.Item<FieldType>
                                            name="name"
                                            rules={[{ required: true, message: 'Please enter your name!' }]}
                                            hasFeedback
                                        >
                                            <Input placeholder='Full Name' />
                                        </Form.Item>
                                        <Form.Item<FieldType>
                                            name="formName"
                                            hasFeedback
                                            hidden
                                        >
                                            <Input placeholder='Pricing' />
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
                                        <Form.Item>
                                            <Flex justify="space-between" gap={10}>
                                                <Button onClick={()=>{setSteps(0)}}>
                                                    Back
                                                </Button>
                                                <Button type="primary" htmlType="submit" className="btn-main">
                                                    Submit
                                                </Button>
                                            </Flex>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div> :
                            <div className="pricing-steps--content">
                                <h1 className="small">We have received your request Successfully! 🎉</h1>
                                <p>We are working constantly to meet our customers requirements</p>
                                <p>Our representative will contact you very soon & we will get back to you with the latest quotation. </p>
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
