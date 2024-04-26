'use client'
import React from 'react'
import { Button, Flex, Space, Input } from 'antd';
import Image from "next/image";
import StateCard from '../components/StateCard';
import BrandList from '../components/BrandsList';
import SimpleTwoCol from '../components/SimpleTwoCol';
import { useRouter } from "next/navigation";

// IMAGES
import PartOfJourney from "../../../public/images/part-of-journey.webp"
import OurObjective from "../../../public/images/our-objective.webp"
import Ambition from "../../../public/images/ambition.webp"
import Award from "../../../public/images/award.webp"
import BenefitImage from "../../../public/images/benefitImage.svg"
import BenefitImage2 from "../../../public/images/benefitImage2.svg"
import BenefitImage3 from "../../../public/images/benefitImage3.svg"

const page = () => {
    const stats = [
        {
            stats: '300+',
            description: 'Brands are associated with us'

        },
        {
            stats: '30+',
            description: 'Cities Delivered Next Day'

        },
        {
            stats: '100 Mn+',
            description: 'Delivery Experience Delivered'

        },
        {
            stats: '10%',
            description: 'RTO Reduced'

        },
    ]
    const benefits = [
        {
            title: 'Cutting-edge Technology',
            text: 'We continuously push the boundaries of the innovation & set new industry standards.',
            img: <BenefitImage />
        },
        {
            title: 'Personalized Service',
            text: "We tailor every interaction to meet the unique needs & preferences of each individual client.",
            img: <BenefitImage2 />
        },
        {
            title: 'Best Consumer Experiences',
            text: 'We strive to exceed expectations & create memorable interactions that delight & satisfy our customers.',
            img: <BenefitImage3 />
        }
    ];
    const router = useRouter();
    return (
        <main>
            <section className="industry about about-main bg-section common-section">
                <div className="container side small">
                    <div className='banner-info-section'>
                        <div>
                            <h2>Our mission is to lead a logistics revolution powered by smart technology for modern Bharat.</h2>
                        </div>
                        <div className="search-bar book-demo">
                            <Space.Compact style={{ width: '100%' }}>
                                <Input type='email' placeholder="Your work email address" />
                                <Button type="primary" className="btn-main">Book a Demo</Button>
                            </Space.Compact>
                        </div>
                    </div>
                </div>
            </section>
            <section className='solution about common-section normal-section section-yellow'>
                <div className="container small">
                    <h6>Partners & Solutions</h6>
                    <h2>Strategic Solutions<span> Commanding Results</span></h2>
                    <BrandList />
                </div>
            </section>
            <section className='normal-section common-section'>
                <div className="container small">
                    <Flex className='stats-two'>
                        <div>
                            <h6>Stats</h6>
                            <h2>Helping Small Businesses <span>Grow And Expand</span></h2>
                        </div>
                        <div>
                            <StateCard two={true} stats={stats}></StateCard>
                        </div>
                    </Flex>
                </div>
            </section>
            <section className='normal-section common-section section-yellow'>
                <div className="container small">
                    <Flex className='purpose'>
                        <div>
                            <h6>Purpose</h6>
                            <h2>Our <span>Objective</span></h2>
                            <p>With over two decades of domain expertise and a combined experience of 55 years, the founders of ShipDelight possess unparalleled insight into the challenges that arise from incomplete integration between e-commerce and logistics. </p>
                            <br />
                            <p>This profound understanding enables us to develop comprehensive solutions that address the root issues, ensuring seamless operations and optimal performance for our clients.</p>
                        </div>
                        <div>
                            <Image src={OurObjective} alt='award' />
                        </div>
                    </Flex>
                </div>
            </section>
            <section className='common-section normal-section'>
                <div className="container small">
                    <div>
                        <h6>Values</h6>
                        <h2>Driven by a <span>People-Centric Philosophy</span></h2>
                        <p className='vlause-carrer--text'>At ShipDelight, we are dedicated to being a people-first company.</p>
                    </div>
                    <SimpleTwoCol small={true} data={benefits} />
                </div>
            </section>
            <section className='normal-section common-section section-grey'>
                <div className="container small">
                    <Flex className='award'>
                        <div>
                            <h6>Award By Government of India</h6>
                            <h2>Recepient of <span>LEAPS award</span> for Innovation in Logistics</h2>
                            <p>The LEAPS initiative aims to highlight and advocate for exemplary approaches within the Indian logistics and supply chain domain. Its objective is to honor the unified vision outlined in the PM Gati Shakti National Master Plan and the National Logistics Policy.</p>
                        </div>
                        <div>
                            <Image src={Award} alt='award' />
                        </div>
                    </Flex>
                </div>
            </section>
            <div className='overflow-hidden'>
                <section className='normal-section common-section section-yellow'>
                    <div className="container small">
                        <Flex className='ambition'>
                            <div>
                                <h6>Ambition</h6>
                                <h2>Logistics that help <span>Enhance the Product Lifecycle</span></h2>
                                <Image className='ambition--image' src={Ambition} alt='Ambition' />
                            </div>
                            <div>
                                <p>At ShipDelight, we believe that a people-first approach is at the heart of everything we do. By focusing on the needs and experiences of our customers, we aim to enhance the entire product journey, from initial purchase to post-sales support. </p>
                                <p>Our dedication to exceptional service goes beyond mere transactions; it's about building lasting relationships and ensuring satisfaction at every step. The right logistics system, coupled with a customer-focused approach, significantly impacts the product lifecycle and enhances customer loyalty. </p>
                            </div>
                        </Flex>
                    </div>
                </section>
            </div>
            <section className='normal-section common-section'>
                <div className="container small">
                    <Flex className='journey-part'>
                        <div>
                            <h6>Career</h6>
                            <h2>Be a <span>Part of this Journey</span></h2>
                            <p>Join our mission-driven team and play a pivotal role in reshaping consumer commerce across the country.</p>
                            <Button onClick={()=>{ router.push(`/career`)}} className='btn-main' type='primary'>Explore Career Opportunities</Button>
                        </div>
                        <div>
                            <Image src={PartOfJourney} alt='Career' />
                        </div>
                    </Flex>
                </div>
            </section>
        </main>
    )
}

export default page