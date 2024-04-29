'use client'
import { Button, Input, Space } from 'antd';
import BlogCard from '../components/BlogCard';
// IMAGES
import MailIcon from '../../../public/images/mail-icon.svg'
import SearchIcon from '../../../public/images/search.svg'
import BlogImg1 from '../../../public/images/blog-1.webp'
import BlogImg2 from '../../../public/images/blog-2.webp'
import BlogImg3 from '../../../public/images/blog-3.webp'
import BlogImg4 from '../../../public/images/blog-4.webp'

import { useState } from 'react';

export default function Home() {
    const cardData = [
        {
            image: BlogImg1,
            text: 'Enhancing Customer Experience',
            title: 'Enhancing Customer Experience: Leveraging a Customer Engagement Tool in Shipping Management',
            link: '/enhancing-customer-experience-leveraging-a-customer-engagement-tool-in-shipping-management',
            category: 'Delivery',
            time: '4 Minutes',
            date: '03/08/2023'
        },
        {
            image: BlogImg2,
            text: 'Export Hub India',
            title: 'Export Hub India: Your Gateway to Global Success',
            link: '/export-hub-india-your-gateway-to-global-success',
            category: 'Delivery',
            time: '3 Minutes',
            date: '03/08/2023'
        },
        {
            image: BlogImg3,
            text: 'Streamlining Shipping Processes',
            title: 'Streamlining Shipping Processes: How a Shipping Management Platform Can Revolutionize Your Logistics',
            link: '/streamlining-shipping-processes',
            category: 'Delivery',
            time: '5 Minutes',
            date: '03/08/2023'
        },
        {
            image: BlogImg4,
            text: 'Effective Strategies to Reduce RTO in E-commerce',
            title: 'Effective Strategies to Reduce RTO in E-commerce',
            link: '/effective-strategies-to-reduce-rto-in-e-commerce',
            category: 'Delivery',
            time: '5 Minutes',
            date: '02/08/2023'
        },

    ];
    const tabs = [
        'All',
        'Delivery',
        'Logistics',
        'Packaging'
    ];
    const [activeTab, setAsctiveTab] = useState(0);
    return (
        <main>
            <section className="gradient-section banner-section common-section">
                <div className="container small">
                    <h1 className="small">Blogs & Articles</h1>
                    <p className="title-desc">Discover the Path to Logistics Excellence: Gain Valuable Insights, Strategies, and Inspiration from Industry Leaders.</p>
                    {/* <div className="search-bar email">
                        <Space.Compact style={{ width: '100%' }}>
                            <Input placeholder="Enter email to subscribe" prefix={<MailIcon />} />
                            <Button type="primary" className="btn-main">Subscribe Now </Button>
                        </Space.Compact>
                    </div> */}
                </div>
            </section>
            <section className="common-section normal-section">
                <div className="container small">
                    <div className="blogs-main-container">
                        <div>
                            <div className="blog-tabs">
                                <h2>Latest <span>Blogs</span></h2>
                            </div>
                            <BlogCard cardData={cardData} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}