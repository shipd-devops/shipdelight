'use client'
import React, { FC, useState, useEffect } from 'react'
import { useRouter } from "next/navigation"
import Image from 'next/image';
import Link from 'next/link';
import '../styles/footer.css'
import { Button, Input, Flex, Form } from 'antd';
// IMAGES
import LinkedIn from '../../../public/images/linkedin.svg'
import InstagramIcon from '../../../public/images/instagram.svg'
import FaceBookIcon from '../../../public/images/facebook.svg'
import ShipLogoIcon from '../../../public/images/ship-logo.svg'
import ShipDelightIcon from '../../../public/images/ship-delight.webp'
import GuidesImage from '../../../public/images/guides.webp'
import MailIcon from '../../../public/images/mail.svg'
import PhoneIcon from '../../../public/images/phone.svg'

const Footer: FC = () => {
    const router = useRouter();
    const handleSendEmail = (values: any) => {
        localStorage.setItem('name', values.name);
        localStorage.setItem('number', values.number);
        router.push(`/contact-us`)
    }
    return (
       <>
            <footer>
                <div className="footer--top">
                    <div className="footer--container">
                        <div className="footer--cta">
                            <div className="footer--cta--content">
                                <h2>One step away from solving logistic puzzles of your brand</h2>
                                <p>Let’s connect to understand how we can help you to solve puzzle</p>
                                <Form onFinish={handleSendEmail}>
                                    <Flex gap={10}>
                                        <Form.Item
                                            style={{width: '100%', marginBottom: '0'}}
                                            name="name"
                                            rules={[{ required: true, message: 'Please enter your name!' }]}
                                        >
                                            <Input placeholder="Full Name" />
                                        </Form.Item>
                                        <Form.Item
                                            name="number"
                                            style={{width: '100%', marginBottom: '0'}}
                                            rules={[{ required: true, message: 'Please enter your number!' }]}
                                        >
                                            <Input prefix="+91" type='number' minLength={10} placeholder="XXXXX XXXXX" />
                                        </Form.Item>
                                    </Flex>
                                    <Button htmlType="submit" type='primary'>Submit</Button>
                                </Form>
                            </div>
                            <Image src={GuidesImage} alt='footer-img' className='guides' />
                            <div className='footer--cta--image'>
                                <Image src={ShipDelightIcon} alt='footer-img' />
                            </div>
                        </div>
                        <div className="footer--cta--links">
                            <a href='tel:+912249733292'><PhoneIcon /> +91 22 49733292</a>
                            <a href='mailto:alexa@shipdelight.com'><MailIcon /> alexa@shipdelight.com</a>
                        </div>
                    </div>
                </div>
                <div className="footer--bottom">
                    <div className="footer--container">
                        <div className="adress">
                            <ShipLogoIcon />
                            <h6>Address</h6>
                            <p>402, Town Centre 2, Opp Times Square Building, Andheri - Kurla Rd, Marol, Andheri East, Mumbai-400059, India</p>
                        </div>
                        <div className="footer--links">
                            <div className="footer--links--item">
                                <h6>Products</h6>
                                <Link href={'/platforms/ilogix/d2c-delight'}>D2C Delight</Link>
                                <Link href={'/platforms/ilogix/retail-delight'}>Retail Delight</Link>
                                <Link href={'/platforms/elogix/erp-delight'}>ERP Delight</Link>
                                <Link href={'/platforms/elogix/biker-delight'}>Biker Delight</Link>
                                <Link href={'/platforms/ulogix'}>B2B2C Delight</Link>
                                <Link href={'/platforms/ulogix'}>Distribution Delight</Link>
                            </div>
                            <div className="footer--links--item">
                                <h6>Solutions</h6>
                                <Link href={'/solution/b2b-logistics'}>B2B Logistics</Link>
                                <Link href={'/solution/ecommerce-shipping'}>E- Commerce Shipping</Link>
                                <Link href={'/solution/ndr'}>NDRs</Link>
                                <Link href={'/solution/returns'}>Returns</Link>
                                <Link href={'/solution/exchanges'}>Exchange</Link>
                                <Link href={'/solution/refunds'}>Refunds</Link>
                                <Link href={'/solution/communications'}>Communication</Link>
                            </div>
                            <div className="footer--links--item">
                                <h6>Solutions</h6>
                                <Link href={'/solution/omni-channel'}>Omni-channel</Link>
                                <Link href={'/solution/express-delivery'}>Express Delivery</Link>
                                <Link href={'/solution/cash-on-dilevry'}>Cash on Delivery</Link>
                                <Link href={'/solution/warehouse'}>Warehousing & Inventory</Link>
                                <Link href={'/solution/franchises'}>Franchises</Link>
                                <Link href={'/solution/biker-app'}>Biker Application</Link>
                                <Link href={'/solution/logistics-erp'}>Logistics ERP</Link>
                            </div>
                            <div className="footer--links--item">
                                <h6>Industry</h6>
                                <Link href={'/industry/sports'}>Sports</Link>
                                <Link href={'/industry/fashion'}>Fashion</Link>
                                <Link href={'/industry/electronics'}>Electronics</Link>
                                <Link href={'/industry/health-care'}>Health Care</Link>
                                <Link href={'/industry/food-and-beverage'}>Food & Beverages</Link>
                                <Link href={'/industry/home-and-decor'}>Home & Decor</Link>
                            </div>
                            <div className="footer--links--item">
                                <h6>Company</h6>
                                <Link href={'/about'}>About Us</Link>
                                <Link href={'/career'}>Career</Link>
                                <Link href={'/contact-us'}>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer--container">
                        <p>Copyright 2024 @ Shipdelight Logistics Technologies Pvt Ltd. All rights reserved.</p>
                        <ul>
                            <li><a target='_blank' href={'https://in.linkedin.com/company/shipdelight'}><LinkedIn /></a></li>
                            <li><a target='_blank' href={'https://www.instagram.com/shipdelight/'}><InstagramIcon/></a></li>
                            <li><a target='_blank' href={'https://www.facebook.com/instashipin/'}><FaceBookIcon/></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
       </>
    )
}

export default Footer