'use client'
import { Button, Input, Space } from 'antd';
import BlogCard from '../components/BlogCard';
import Link from 'next/link';
import Events from '../components/Events';
// IMAGES
import SerachImage from '../../../public/images/search.svg'
import DummyImage from '../../../public/images/dummy-case.webp'
import DummyImage2 from '../../../public/images/dummy-case-2.webp'
import DummyImage3 from '../../../public/images/dummy-case-3.webp'
import EventImage from '../../../public/images/events-image.webp'


export default function Home() {
    const cardData = [
        {
            image: DummyImage,
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/news-detail',
            date: '12/10/2023'
        },
        {
            image: DummyImage2,
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/news-detail',
            date: '12/10/2023'
        },
        {
            image: DummyImage3,
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/news-detail',
            date: '12/10/2023'
        },
        {
            image: DummyImage3,
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/news-detail',
            date: '12/10/2023'
        },
        {
            image: DummyImage,
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/news-detail',
            date: '12/10/2023'
        },
        {
            image: DummyImage2,
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/news-detail',
            date: '12/10/2023'
        },
        {
            image: DummyImage2,
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/news-detail',
            date: '12/10/2023'
        },
        {
            image: DummyImage3,
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/news-detail',
            date: '12/10/2023'
        },
        {
            image: DummyImage,
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/news-detail',
            date: '12/10/2023'
        }
    ];
    const eventData = [
        {
            img: EventImage,
            cat: '21/11/2023',
            title: 'Shipdelight acquires spoton to boost B2B capabilities',
            link:'/news-detail',
            linkText: 'Read More'
        },
        {
            img: EventImage,
            cat: '21/11/2023',
            title: 'Shipdelight acquires spoton to boost B2B capabilities',
            link:'/news-detail',
            linkText: 'Read More'
        },
        {
            img: EventImage,
            cat: '21/11/2023',
            title: 'Shipdelight acquires spoton to boost B2B capabilities',
            link:'/news-detail',
            linkText: 'Read More'
        }
    ]
    return (
        <main>
            <section className="gradient-section banner-section common-section">
                <div className="container small">
                    <h1 className="small">News & PRs</h1>
                    <p className="title-desc">Lorem ipsum dolor sit amet consectetur. Vulputate hendrerit amet fringilla ultrices. Velit bibendum nam ultricies mollis luctus </p>
                    <div className="search-bar">
                        <Space.Compact style={{ width: '100%' }}>
                            <Input placeholder="Search News" prefix={<SerachImage />} />
                            <Button type="primary" className="btn-main">Search </Button>
                        </Space.Compact>
                    </div>
                </div>
            </section>
            <section className="common-section normal-section">
                <div className="container small">
                    <h6>Featured</h6>
                    <h2>Featured <span>News</span></h2>
                    <div className="news-container">
                        <div className="news-main">
                            <div className='news-main--content'>
                                <div>
                                    <p>21/11/2023</p>
                                    <p>Shipdelight acquires spoton to boost B2B capabilities</p>
                                </div>
                                <Link className='link-text-underline' href={'/news-detail'}>Read More</Link>
                            </div>
                        </div>
                        <Events cardData={eventData} small />
                    </div>
                </div>
            </section>
            <section className="common-section normal-section section-yellow">
                <div className="container small">
                    <h6>Memories</h6>
                    <h2>All <span>News & Press Release</span></h2>
                    <BlogCard cardData={cardData} />
                </div>
            </section>
        </main>
    );
}
