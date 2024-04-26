'use client'
import React, { useState } from 'react'
import { Button, Flex } from 'antd';
import type { CollapseProps } from 'antd';
import Image from "next/image";
import SimpleTwoCol from '../components/SimpleTwoCol';
import Openings from '../components/Openings';
// IMAGES
import AboutBanner from "../../../public/images/career-banner.webp"
import BenefitImage from "../../../public/images/benefitImage-2.svg"
import BenefitImage2 from "../../../public/images/benefitImage2-2.svg"
import BenefitImage3 from "../../../public/images/benefitImage3-2.svg"
import HandMap from '../../../public/images/hand-map.webp'
import OurMission from '../../../public/images/our-mission.webp'

const page = () => {
    const benefits = [
        {
            title: 'Team Work',
            text: 'Collaboration is at the heart of everything we do. Join our team and experience the power of collective effort towards achieving common goals.',
            img: <BenefitImage />
        },
        {
            title: 'Secured Future',
            text: "We believe in investing in our employees' future. Join ShipDelight and embark on a journey of growth and stability, with ample opportunities for career advancement.",
            img: <BenefitImage2 />
        },
        {
            title: 'Learning Opportunity',
            text: 'ShipDelight is committed to nurturing talent and fostering continuous learning. Join us to expand your skill set, grow professionally, and stay ahead in a dynamic industry.',
            img: <BenefitImage3 />
        }
    ];
    const openingTab = ['Commercial', 'Marketing', 'Development', 'Designer'];
    const [selectedTab, setSelectedTab] = useState('Commercial');
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 
            <div className='opening-collapse--head'>
                <p>Business Development Representative</p>
                <a href="">Apply Now</a>
            </div>,
            children:
            <div className='w-full'>
                <div className='opening-collapse--body'>
                    <Flex gap={5}>
                        <p>Location:</p><p>Ahmedabad, India (On-site)</p>
                    </Flex>
                    <Flex gap={5}>
                        <p>Start Date:</p><p>ASAP</p>
                    </Flex>
                    <Flex gap={5}>
                        <p>Working Hours:</p><p>Full-time, Monday to Friday, UK timings equivalent to 2 PM - 11 PM (1 PM - 10 PM during DST)</p>
                    </Flex>
                    <Flex gap={5}>
                        <p>About Us:</p><p>Shipdelight is seeking a dynamic Sales/Business Development Representative in Ahmedabad. With 6 months to 1 year of recruitment or sales experience, join us to drive business within the healthcare sector, targeting hospitals, care homes, and related clients.</p>
                    </Flex>
                </div>
            </div>
        },
        {
            key: '2',
            label: 
            <div className='opening-collapse--head'>
                <p>Business Development Representative</p>
                <a href="">Apply Now</a>
            </div>,
            children:
            <div className='w-full'>
                <div className='opening-collapse--body'>
                    <Flex gap={5}>
                        <p>Location:</p><p>Ahmedabad, India (On-site)</p>
                    </Flex>
                    <Flex gap={5}>
                        <p>Start Date:</p><p>ASAP</p>
                    </Flex>
                    <Flex gap={5}>
                        <p>Working Hours:</p><p>Full-time, Monday to Friday, UK timings equivalent to 2 PM - 11 PM (1 PM - 10 PM during DST)</p>
                    </Flex>
                    <Flex gap={5}>
                        <p>About Us:</p><p>Shipdelight is seeking a dynamic Sales/Business Development Representative in Ahmedabad. With 6 months to 1 year of recruitment or sales experience, join us to drive business within the healthcare sector, targeting hospitals, care homes, and related clients.</p>
                    </Flex>
                </div>
            </div>
        },
        {
            key: '3',
            label: 
            <div className='opening-collapse--head'>
                <p>Business Development Representative</p>
                <a href="">Apply Now</a>
            </div>,
            children:
            <div className='w-full'>
                <div className='opening-collapse--body'>
                    <Flex gap={5}>
                        <p>Location:</p><p>Ahmedabad, India (On-site)</p>
                    </Flex>
                    <Flex gap={5}>
                        <p>Start Date:</p><p>ASAP</p>
                    </Flex>
                    <Flex gap={5}>
                        <p>Working Hours:</p><p>Full-time, Monday to Friday, UK timings equivalent to 2 PM - 11 PM (1 PM - 10 PM during DST)</p>
                    </Flex>
                    <Flex gap={5}>
                        <p>About Us:</p><p>Shipdelight is seeking a dynamic Sales/Business Development Representative in Ahmedabad. With 6 months to 1 year of recruitment or sales experience, join us to drive business within the healthcare sector, targeting hospitals, care homes, and related clients.</p>
                    </Flex>
                </div>
            </div>
        },
        {
            key: '4',
            label: 
            <div className='opening-collapse--head'>
                <p>Business Development Representative</p>
                <a href="">Apply Now</a>
            </div>,
            children:
            <div className='w-full'>
                <div className='opening-collapse--body'>
                    <Flex gap={5}>
                        <p>Location:</p><p>Ahmedabad, India (On-site)</p>
                    </Flex>
                    <Flex gap={5}>
                        <p>Start Date:</p><p>ASAP</p>
                    </Flex>
                    <Flex gap={5}>
                        <p>Working Hours:</p><p>Full-time, Monday to Friday, UK timings equivalent to 2 PM - 11 PM (1 PM - 10 PM during DST)</p>
                    </Flex>
                    <Flex gap={5}>
                        <p>About Us:</p><p>Shipdelight is seeking a dynamic Sales/Business Development Representative in Ahmedabad. With 6 months to 1 year of recruitment or sales experience, join us to drive business within the healthcare sector, targeting hospitals, care homes, and related clients.</p>
                    </Flex>
                </div>
            </div>
        },
        {
            key: '5',
            label: 
            <div className='opening-collapse--head'>
                <p>Business Development Representative</p>
                <a href="">Apply Now</a>
            </div>,
            children:
            <div className='w-full'>
                <div className='opening-collapse--body'>
                    <Flex gap={5}>
                        <p>Location:</p><p>Ahmedabad, India (On-site)</p>
                    </Flex>
                    <Flex gap={5}>
                        <p>Start Date:</p><p>ASAP</p>
                    </Flex>
                    <Flex gap={5}>
                        <p>Working Hours:</p><p>Full-time, Monday to Friday, UK timings equivalent to 2 PM - 11 PM (1 PM - 10 PM during DST)</p>
                    </Flex>
                    <Flex gap={5}>
                        <p>About Us:</p><p>Shipdelight is seeking a dynamic Sales/Business Development Representative in Ahmedabad. With 6 months to 1 year of recruitment or sales experience, join us to drive business within the healthcare sector, targeting hospitals, care homes, and related clients.</p>
                    </Flex>
                </div>
            </div>
        }
    ];
    return (
        <main>
            <section className="career gradient-section common-section">
                <div className="container side small">
                    <div className='banner-info-section'>
                        <div>
                            <h2>Unleash Your Career With ShipDelight</h2>
                            <p className="title-desc">At ShipDelight, we're not just shaping the future of logistics; we're redefining it with innovative solutions that drive excellence in every aspect of our operations.</p>
                        </div>
                        {/* <Button type="primary" className='btn-main'>
                            Explore Openings
                        </Button> */}
                    </div>
                    <div className=''>
                        <Image src={AboutBanner} alt='about us banner' className=''></Image>
                    </div>
                </div>
            </section>
            <section className='common-section normal-section'>
                <div className="container small">
                    <div>
                        <h6>Benefits</h6>
                        <h2>Why you Should Join <span>Our Awesome Team</span></h2>
                    </div>
                    <SimpleTwoCol data={benefits} />
                </div>
            </section>
            <section className='solution common-section normal-section section-yellow'>
                <div className="container side start">
                    <div className='banner-info-section'>
                        <div>
                            <h6>Culture</h6>
                            <h2>ShipDelight's People First Culture</h2>
                            <p className="title-desc">At ShipDelight, our people are our greatest asset. We foster a culture of inclusivity, respect, and support, where every team member is empowered to contribute their unique talents and ideas. From comprehensive training programs to regular feedback sessions, we prioritize the well-being and professional growth of our employees.</p>
                        </div>
                    </div>
                    <div className='sub-img-section'>
                        <Image src={HandMap} alt="graph" className="banner-img" />
                    </div>
                </div>
            </section>
            <section className='common-section normal-section'>
                <div className="container small">
                    <div>
                        <h6>Openings</h6>
                        <h2>Current<span>Job Openings</span></h2>
                        <h4>No open position available!</h4>
                    </div>
                    {/* <div className='opening-container'>
                        <div className='opening-container--tabs'>
                            {openingTab.map((item, index)=>(
                                <p key={index} className={item === selectedTab ? 'active' : ''} onClick={()=>{setSelectedTab(item)}}>{item}</p>
                            ))}
                        </div>
                        <div style={{width : '100%'}}>
                           
                            <Openings data={items} />
                        </div>
                    </div> */}
                </div>
            </section>
            <section className='solution common-section normal-section section-yellow'>
                <div className="container side start">
                    <div className='banner-info-section'>
                        <div>
                            <h6>Values</h6>
                            <h2>Our <span>Misson & Vision</span></h2>
                            <p className="title-desc">Our mission is to lead a logistics revolution powered by smart technology for modern Bharat.</p>
                        </div>
                    </div>
                    <div className='sub-img-section'>
                        <Image src={OurMission} alt="graph" className="banner-img" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page