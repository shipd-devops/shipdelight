'use client'
import React, { FC, useState, useEffect } from 'react'
import { useRouter } from "next/navigation"
import Image from 'next/image';
import Link from 'next/link';
import '../styles/footer.css'
import { Button, Input, Flex, Form, Collapse } from 'antd';
// IMAGES
import LinkedIn from '../../../public/images/linkedin.svg'
import InstagramIcon from '../../../public/images/instagram.svg'
import FaceBookIcon from '../../../public/images/facebook.svg'
import ShipLogoIcon from '../../../public/images/ship-logo.svg'
import ShipDelightIcon from '../../../public/images/ship-delight.webp'
import GuidesImage from '../../../public/images/guides.webp'
import MailIcon from '../../../public/images/mail.svg'
import PhoneIcon from '../../../public/images/phone.svg'
import Chevron from '../../../public/images/chevron.svg'
import type { CollapseProps } from 'antd'

const Footer: FC = () => {
    const router = useRouter();
    const handleSendEmail = (values: any) => {
        localStorage.setItem('name', values.name);
        localStorage.setItem('number', values.number);
        router.push(`/contact-us`)
    }
    const onChange = (key: string | string[]) => {
        console.log(key);
    };
    const items: CollapseProps['items'] = [
        {
          key: '1',
          label: 'Platforms',
          children: 
          <div className='footer-dropdown fourth'>
            <div className="footer-dropdown--item">
                <Link href={'/platforms/ilogix/d2c-delight'} className='header-dropdown--link'>
                    <div><p className='title-main'>D2C Delight</p></div>
                </Link>
                <Link href={'/platforms/ilogix/retail-delight'} className='header-dropdown--link'>
                    <div><p className='title-main'>Retail Delight</p></div>
                </Link>
                <Link href={'/platforms/elogix/erp-delight'} className='header-dropdown--link'>
                    <div><p className='title-main'>ERP Delight</p></div>
                </Link>
                <Link href={'/platforms/elogix/biker-delight'} className='header-dropdown--link'>
                    <div><p className='title-main'>Biker Delight</p></div>
                </Link>
                <Link href={'/platforms/ulogix'} className='header-dropdown--link'>
                    <div><p className='title-main'>B2B2C Delight</p></div>
                </Link>
                <Link href={'/platforms/ulogix'} className='header-dropdown--link'>
                    <div><p className='title-main'>Distribution Delight</p></div>
                </Link>
            </div>
        </div>,
        },
        {
          key: '2',
          label: 'Solutions',
          children: 
          <div className='footer-dropdown fourth'>
            <div className="footer-dropdown--item">
                <Link href={'/solution/b2b-logistics'} className='header-dropdown--link'>
                    <div><p className='title-main'>B2B Logistics</p></div>
                </Link>
                <Link href={'/solution/ecommerce-shipping'} className='header-dropdown--link'>
                    <div><p className='title-main'>E- Commerce Shipping</p></div>
                </Link>
                <Link href={'/solution/ndr'} className='header-dropdown--link'>
                    <div><p className='title-main'>NDRs</p></div>
                </Link>
                <Link href={'/solution/returns'} className='header-dropdown--link'>
                    <div><p className='title-main'>Returns</p></div>
                </Link>
                <Link href={'/solution/exchanges'} className='header-dropdown--link'>
                    <div><p className='title-main'>Exchange</p></div>
                </Link>
                <Link href={'/solution/refunds'} className='header-dropdown--link'>
                    <div><p className='title-main'>Refunds</p></div>
                </Link>
                <Link href={'/solution/communications'} className='header-dropdown--link'>
                    <div><p className='title-main'>Communication</p></div>
                </Link>
                <Link href={'/solution/omni-channel'} className='header-dropdown--link'>
                    <div><p className='title-main'>Omni Channel</p></div>
                </Link>
                <Link href={'/solution/express-delivery'} className='header-dropdown--link'>
                    <div><p className='title-main'>Express Delivery</p></div>
                </Link>
                <Link href={'/solution/cash-on-dilevry'} className='header-dropdown--link'>
                    <div><p className='title-main'>Cash on Delivery</p></div>
                </Link>
                <Link href={'/solution/warehouse'} className='header-dropdown--link'>
                    <div><p className='title-main'>Warehousing & Inventory</p></div>
                </Link>
                <Link href={'/solution/franchises'} className='header-dropdown--link'>
                    <div><p className='title-main'>Franchises</p></div>
                </Link>
                <Link href={'/solution/biker-app'} className='header-dropdown--link'>
                    <div><p className='title-main'>Biker Application</p></div>
                </Link>
                <Link href={'/solution/logistics-erp'} className='header-dropdown--link'>
                    <div><p className='title-main'>Logistics ERP</p></div>
                </Link>
            </div>
        </div>,
        },
        {
          key: '3',
          label: 'Industry',
          children: 
          <div className='footer-dropdown fourth'>
            <div className="footer-dropdown--item">
                <Link href={'/industry/fashion'} className='header-dropdown--link'>
                    <div><p className='title-main'>Fashion</p></div>
                </Link>
                <Link href={'/industry/electronics'} className='header-dropdown--link'>
                    <div><p className='title-main'>Electronics</p></div>
                </Link>
                <Link href={'/industry/health-care'} className='header-dropdown--link'>
                    <div><p className='title-main'>Health & Pharma</p></div>
                </Link>
                <Link href={'/industry/home-and-decor'} className='header-dropdown--link'>
                    <div><p className='title-main'>Home & Décor</p></div>
                </Link>
                <Link href={'/industry/food-and-beverage'} className='header-dropdown--link'>
                    <div><p className='title-main'>Foods & Beverages</p></div>
                </Link>
                <Link href={'/industry/sports'} className='header-dropdown--link'>
                    <div><p className='title-main'>Sports & Utilities</p></div>
                </Link>
            </div>
        </div>,
        },
        {
            key: '4',
            label: 'Company',
            children: 
            <div className='footer-dropdown fourth'>
                <div className="footer-dropdown--item">
                    <Link href={'/about'} className='header-dropdown--link'>
                        <div>
                            <p className='title-main'>About</p>
                        </div>
                    </Link>
                    <Link href={'/career'} className='header-dropdown--link'>
                        <div>
                            <p className='title-main'>Career</p>
                        </div>
                    </Link>
                    <Link href={'/contact-us'} className='header-dropdown--link'>
                        <div>
                            <p className='title-main'>Contact Us</p>
                        </div>
                    </Link>
                </div>
            </div>
        }
    ];
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
                        <Collapse expandIcon={() => (<Chevron />)} className='footerCollapse' items={items} expandIconPosition="end" defaultActiveKey={['1']} onChange={onChange} />
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