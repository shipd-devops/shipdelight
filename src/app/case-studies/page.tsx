'use client'
import { Button, Input, Space } from 'antd';
import CaseStudies from '../components/CaseStudies';
// IMAGES
import SerachImage from '../../../public/images/search.svg'
import DummyImage from '../../../public/images/dummy-case.webp'
import DummyImage2 from '../../../public/images/dummy-case-2.webp'
import DummyImage3 from '../../../public/images/dummy-case-3.webp'

export default function Home() {
    const cardData = [
        {
            image: DummyImage,
            text: 'Global manufacturer & Retailer',
            title: 'Innovating logistics for convenience stores',
            link: '/case-study-detail',
        },
        {
            image: DummyImage2,
            text: 'Global manufacturer & Retailer',
            title: 'Innovating logistics for convenience stores',
            link: '/case-study-detail',
        },
        {
            image: DummyImage3,
            text: 'Global manufacturer & Retailer',
            title: 'Innovating logistics for convenience stores',
            link: '/case-study-detail',
        },
        {
            image: DummyImage,
            text: 'Global manufacturer & Retailer',
            title: 'Innovating logistics for convenience stores',
            link: '/case-study-detail',
        },
        {
            image: DummyImage2,
            text: 'Global manufacturer & Retailer',
            title: 'Innovating logistics for convenience stores',
            link: '/case-study-detail',
        },
        {
            image: DummyImage3,
            text: 'Global manufacturer & Retailer',
            title: 'Innovating logistics for convenience stores',
            link: '/case-study-detail',
        }
    ]
    return (
        <main>
            <section className="gradient-section banner-section common-section">
                <div className="container small">
                    <h1 className="small">Case Studies Prove That Our <br/> Customers Get Results</h1>
                    <p className="title-desc">Lorem ipsum dolor sit amet consectetur. Vulputate hendrerit amet fringilla ultrices. Velit bibendum nam ultricies mollis luctus </p>
                    <div className="search-bar">
                        <Space.Compact style={{ width: '100%' }}>
                            <Input placeholder="Search Case Studies" prefix={<SerachImage />} />
                            <Button type="primary" className="btn-main">Search </Button>
                        </Space.Compact>
                    </div>
                </div>
            </section>
            <section className="common-section normal-section">
                <div className="container small">
                    <div className="blogs-main-container large">
                        <div>
                            <h6>Work</h6>
                            <h2>Our <span>Case Studies</span></h2>
                            <CaseStudies cardData={cardData} />
                        </div>
                        <Button type='link'>Load More</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
