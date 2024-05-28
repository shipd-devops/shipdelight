'use client'
import React, { useState } from 'react'
import { Button, Form, Input, Select, Collapse } from 'antd';
import Image from "next/image";
import type { CollapseProps } from 'antd';
import Modal from 'react-modal';
// IMAGES
import AboutBanner from "../../../public/images/reports-main-page.webp"
import InustryGuideImmage from "../../../public/images/industry-guide.webp"
import AnnouncePersonImage from '../../../public/images/announce-person.webp'
import PlusImage from '../../../public/images/plus.svg'
import MinusImage from '../../../public/images/minus.svg'
import ChevrotDown from '../../../public/images/chevrot-down-fill.svg'
import CrossIcon from '../../../public/images/cross-icon.svg'
import FlyContact from '../../../public/images/fly-contact.webp'

const page = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const { Option } = Select;
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Pricing Model lorium ipsume is simpply dummy text that will go here to increase width?',
            children: <p>Lorem ipsum dolor sit amet consectetur. Fringilla nulla fermentum tempor sed aliquam. Eros nibh egestas scelerisque odio mauris vitae sed pharetra diam. Gravida tortor.</p>,
        },
        {
            key: '2',
            label: 'Pricing Model lorium ipsume is simpply dummy text that will go here to increase width?',
            children: <p>Lorem ipsum dolor sit amet consectetur. Fringilla nulla fermentum tempor sed aliquam. Eros nibh egestas scelerisque odio mauris vitae sed pharetra diam. Gravida tortor.</p>,
        },
        {
            key: '3',
            label: 'Pricing Model lorium ipsume is simpply dummy text that will go here to increase width?',
            children: <p>Lorem ipsum dolor sit amet consectetur. Fringilla nulla fermentum tempor sed aliquam. Eros nibh egestas scelerisque odio mauris vitae sed pharetra diam. Gravida tortor.</p>,
        },
        {
            key: '4',
            label: 'Pricing Model lorium ipsume is simpply dummy text that will go here to increase width?',
            children: <p>Lorem ipsum dolor sit amet consectetur. Fringilla nulla fermentum tempor sed aliquam. Eros nibh egestas scelerisque odio mauris vitae sed pharetra diam. Gravida tortor.</p>,
        },
        {
            key: '5',
            label: 'Pricing Model lorium ipsume is simpply dummy text that will go here to increase width?',
            children: <p>Lorem ipsum dolor sit amet consectetur. Fringilla nulla fermentum tempor sed aliquam. Eros nibh egestas scelerisque odio mauris vitae sed pharetra diam. Gravida tortor.</p>,
        },
        {
            key: '6',
            label: 'Pricing Model lorium ipsume is simpply dummy text that will go here to increase width?',
            children: <p>Lorem ipsum dolor sit amet consectetur. Fringilla nulla fermentum tempor sed aliquam. Eros nibh egestas scelerisque odio mauris vitae sed pharetra diam. Gravida tortor.</p>,
        },
    ];
    const handleChange = (key: string | string[]) => {
        console.log(key);
    };
    type FieldType = {
        name?: string;
        number?: string;
        mail?: string;
        company?: string;
        platform?: string;
    };
    const onFinish = (values: any) => {
        console.log('Success 1:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <main>
            <section className="industry about gradient-section common-section">
                <div className="container side small reports-section">
                    <div className='banner-info-section small'>
                        <div>
                            <h2>Shipdelight acquires spoton to boost B2B capabilities</h2>
                            <p className="title-desc">Lorem ipsum do etur. Ut eu odio donec bibendum nulla. Cincidunt turpis.</p>
                        </div>
                        <Button type="primary" className='btn-main' onClick={openModal}>
                            Download Now
                        </Button>
                    </div>
                    <Image src={AboutBanner} alt='about us banner' className=''></Image>
                </div>
                <div className='indutry-banner'>
                    <Image src={InustryGuideImmage} alt='about us banner' className='industry-guide'></Image>
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
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button className='close-modal' onClick={closeModal}><CrossIcon /></button>
                <div className="contact-div">
                    <div className="fly-contact">
                      <Image src={FlyContact} alt='fly contact' />
                    </div>
                    <div>
                        <h2>Want To Take Your Business To <span>Next Level?</span></h2>
                        <p>Shoot us an email at support@shipdelight.com. With the right people, anything's possible. Let's make things happen, together.</p>
                    </div>
                    <div>
                        <Form
                            name="signin"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
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
                                name="number"
                                rules={[{ required: true, message: 'Please enter your phone number!' },
                                { pattern: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit number.' }, ]}
                                hasFeedback
                            >
                                <Input type='number' placeholder='Phone number' />
                            </Form.Item>
                            <Form.Item<FieldType>
                                name="company"
                                rules={[{ required: true, message: 'Please enter your Company Name!' }]}
                                hasFeedback
                            >
                                <Input type='text' placeholder='Company' />
                            </Form.Item>
                            <Form.Item<FieldType> name="platform" rules={[{ required: true, message: 'Please fill this field!' }]}>
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
                                <Button type="primary" htmlType="submit" className="btn-main">
                                    Download Report
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Modal>
        </main >
    )
}

export default page