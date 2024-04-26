'use client'
import React from 'react'
import { Button, Collapse } from 'antd';
import Image from "next/image";
import type { CollapseProps } from 'antd';
import ValueCards from '../components/ValueCards';
import RolesCard from '../components/RolesCard';
// IMAGES
import AboutBanner from "../../../public/images/industry-banner-2.webp"
import RoleImage2 from "../../../public/images/role-img-3.svg"
import ValueImg from "../../../public/images/values-img.webp"
import ValueImg2 from "../../../public/images/values-img-2.webp"
import ValueImg3 from "../../../public/images/values-img-3.webp"
import InustryGuideImmage from "../../../public/images/industry-guide.webp"
import JoinImage from '../../../public/images/join-bg.webp'
import AnnouncePersonImage from '../../../public/images/announce-person.webp'
import PlusImage from '../../../public/images/plus.svg'
import MinusImage from '../../../public/images/minus.svg'

const page = () => {
    const valueData = [
        {
            title: 'Temperature-Controlled Sports Beverages',
            text: 'Lorem ipsum is a dummy text which can be replaced later.',
            img: ValueImg3,
            type: 'card-grey'
        },
        {
            title: 'Global Distribution logistic Network',
            text: 'Lorem ipsum is a dummy text which can be replaced later.',
            img: ValueImg2,
            type: 'card-yellow'
        },
        {
            title: 'Reverse Logistics for Merchandise',
            text: 'Lorem ipsum is a dummy text which can be replaced later.',
            img: ValueImg,
            type: 'card-grey'
        },
    ];
    const roles= [
        {
            title: 'Lorem Ipsum',
            text: 'Lorem ipsum dolor sit amet consectetu r. Volutpat sed velit lobortis convallis. Egestas ac nam id euismod nulla amet eget enim dictum.',
            img: <RoleImage2 />
        },
        {
            title: 'Lorem Ipsum',
            text: 'Lorem ipsum dolor sit amet consectet ur. Volutpat sed velit lobortis convallis. Egestas ac nam id euismod nulla amet eget enim dictum.',
            img: <RoleImage2 />
        },
        {
            title: 'Lorem Ipsum',
            text: 'Lorem ipsum dolor sit amet consecte tur. Volutpat sed velit lobortis convallis. Egestas ac nam id euismod nulla amet eget enim dictum.',
            img: <RoleImage2 />
        }
    ]
    const stats = [
        {
            stats: '15%',
            description: 'Timely equipment deliveries lead to improvement in training and game preparedness.'

        },
        {
            stats: '20%',
            description: 'Setup time reduced with well coordinated event logistics.'

        },
        {
            stats: '30%',
            description: 'Lead times reduced with optimized supply chains Solution.'

        },
    ];
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
    return (
        <main>
            <section className="industry about gradient-section common-section">
                <div className="container side small">
                    <div className='banner-info-section'>
                        <div>
                            <h2>Partner With ShipDelight</h2>
                            <p className="title-desc">We make your business complete. Ut eu odio donec bibendum nulla. Cincidunt turpis. Aliquet diam etiam erat sed ac nunc id.</p>
                        </div>
                        <Button type="primary" className='btn-main'>
                            Get Started
                        </Button>
                    </div>
                </div>
                <div className='indutry-banner'>
                    <Image src={AboutBanner} alt='about us banner' className=''></Image>
                    <Image src={InustryGuideImmage} alt='about us banner' className='industry-guide'></Image>
                </div>
            </section>
            <section className='common-section normal-section'>
                <div className="container small">
                    <div className="banner-info-section full">
                        <div>
                            <h6>Benefits</h6>
                            <h2>Why Join Our<span> Partnership Program</span></h2>
                        </div>
                    </div>
                    <RolesCard simple roles={roles} />
                </div>
            </section>
            <section className='image-content-section normal-section'>
                <div className="container small">
                    <div>
                        <h6>Join</h6>
                        <h2>Ready To Join Our <span> Partnership Program?</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Porttitor ultricies adipiscing lacus mauris nibh mattis leo pharetra.</p>
                        <Button type="primary" className='btn-main'>
                            Become Partner
                        </Button>
                    </div>
                    <div className="image-content-section--image">
                        <Image src={JoinImage} alt='JoinImage' />
                    </div>
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
        </main>
    )
}

export default page