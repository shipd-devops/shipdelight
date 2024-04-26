'use client'
import { useState } from 'react';
import { Button, Input, Space, Select } from 'antd';
import BlogCard from '../components/BlogCard';
import Image from 'next/image';
import StateCard from '../components/StateCard';
// IMAGES
import SerachImage from '../../../public/images/search.svg'
import DummyImage from '../../../public/images/dummy-case.webp'
import DummyImage2 from '../../../public/images/dummy-case-2.webp'
import DummyImage3 from '../../../public/images/dummy-case-3.webp'
import EventsImage from '../../../public/images/events-2.webp'
import ThreeDotsSvg from '../../../public/images/three-dots.svg'

export default function Page() {
    const cardData = [
        {
            image: DummyImage,
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/reports-detail',
            date: '12/10/2023',
            tag: 'Financial'
        },
        {
            image: DummyImage2,
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/reports-detail',
            date: '12/10/2023',
            tag: 'Financial'
        },
        {
            image: DummyImage3,
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/reports-detail',
            date: '12/10/2023',
            tag: 'Financial'
        },
        {
            image: DummyImage3,
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/reports-detail',
            date: '12/10/2023',
            tag: 'Financial'
        },
        {
            image: DummyImage,
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/reports-detail',
            date: '12/10/2023',
            tag: 'Financial'
        },
        {
            image: DummyImage2,
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/reports-detail',
            date: '12/10/2023',
            tag: 'Financial'
        },
        {
            image: DummyImage2,
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/reports-detail',
            date: '12/10/2023',
            tag: 'Financial'
        },
        {
            image: DummyImage3,
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/reports-detail',
            date: '12/10/2023',
            tag: 'Financial'
        },
        {
            image: DummyImage,
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/reports-detail',
            date: '12/10/2023',
            tag: 'Financial'
        }
    ];
    const list = [
        'Event Highlights',
        'Acquirement Insights',
        'Latest News',
        'Expert Commentary'
    ];
    const stats = [
        {
            stats: '1500+',
            description: 'total attendance'
        },
        {
            stats: '90+',
            description: 'Knowledge sharing talks'
        },
        {
            stats: '30+',
            description: 'Expert speakers'
        },
        {
            stats: '10%',
            description: 'Lorem ipsum'
        },
    ];
    const tabs = [
        'All',
        'Financial',
        'Operational',
        'Customer service',
        'Sales and Marketing',
        'Logistics and Supply Chain'
    ];
    const [activeTab, setAsctiveTab] = useState(0);
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    return (
        <main>
            <section className="gradient-section banner-section common-section">
                <div className="container small">
                    <h1 className="small">Unlock Insights, Stay Informed with <span>Shipdelight Reports</span></h1>
                    <p className="title-desc">Your Source for Comprehensive Event Reports, Industry Acquirements, and Latest News.</p>
                    <div className="search-bar">
                        <Space.Compact style={{ width: '100%' }}>
                            <Input placeholder="Search by keywords" prefix={<SerachImage />} />
                            <Button type="primary" className="btn-main">Search </Button>
                        </Space.Compact>
                    </div>
                </div>
            </section>
            <section className="common-section normal-section">
                <div className="container small">
                    <div className="event-content">
                        <div>
                            <h6>Report</h6>
                            <div className='event-content--list'>
                                <h2>What You'll Get in These Reports?</h2>
                                <p>Our reports offer a deep dive into various aspects of the logistics industry, providing valuable insights, analysis, and trends.</p>
                                <div className="info-product--detail-list">
                                    {list.map((item, index) => (
                                        <div className="info-product--detail-list--item" key={index}>
                                            <ThreeDotsSvg />
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='reports-image'>
                                <Image src={EventsImage} alt='Event' />
                            </div>
                        </div>
                    </div>
                    <StateCard stats={stats}></StateCard>
                </div>
            </section>
            <section className="common-section normal-section section-yellow">
                <div className="container small">
                    <div className="blog-tabs">
                        <h2>All <span>Reports</span></h2>
                        <div className="reports-select">
                            <Select
                                defaultValue="2023"
                                style={{ width: 120 }}
                                onChange={handleChange}
                                options={[
                                    { value: '2023', label: '2023' },
                                    { value: '2022', label: '2022' },
                                    { value: '2021', label: '2021' },
                                    { value: '2020', label: '2020'},
                                ]}
                            />
                            <Select
                                defaultValue="Q1"
                                style={{ width: 120 }}
                                onChange={handleChange}
                                options={[
                                    { value: 'Q1', label: 'Q1' },
                                    { value: 'Q2', label: 'Q2' },
                                    { value: 'Q3', label: 'Q3' },
                                    { value: 'Q4', label: 'Q4'},
                                ]}
                            />
                        </div>
                    </div>
                    <div className="blog-tabs--list">
                        {tabs.map((tab, index) => (
                            <button onClick={() => {setAsctiveTab(index)}} key={index} className={activeTab === index ? 'active' : ''}>
                                {tab}
                            </button>
                        ))}
                    </div>
                    <BlogCard cardData={cardData} />
                </div>
            </section>
        </main>
    );
}
