'use client'
import React, { FC, useState, useEffect } from 'react'
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { usePathname } from "next/navigation"
import '../styles/header.css'
import { Button, Flex } from 'antd'
import type { CollapseProps } from 'antd'
import { Collapse } from 'antd'
// IMAGES
import LogoImage from '../../../public/images/logo.svg'
import ChevrotDown from '../../../public/images/chevrot-down.svg'
import IlogixIcon from '../../../public/images/i-logix.svg'
import ElogixIcon from '../../../public/images/e-logix.svg'
import UlogixIcon from '../../../public/images/u-logix.svg'
import Chevron from '../../../public/images/chevron.svg'
import BckIcon from '../../../public/images/back-big.svg'
import PostPurchaseIcon from '../../../public/images/post-purchase-icon.svg'
import FullfillmentIcon from '../../../public/images/fullfillment.svg'
import ShippersIcon from '../../../public/images/shippers.svg'
import CompanyIcon from '../../../public/images/company-icon.svg'
import IndustryIcon from '../../../public/images/industry-icon.svg'
import Ilogix from '../../../public/images/ilogix.svg'
import Elogix from '../../../public/images/elogix.svg'
import { title } from 'process';

const Header: FC = () => {
    const [openDrop, setOpenDrop] = useState(-1);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const pathname = usePathname();
    const isPlatform = pathname.includes("platforms");
    const router = useRouter();
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);
    useEffect(() => {
        setOpenDrop(-1)
        setBurgerOpen(false);
    }, [pathname]);
    const [burgerOpen, setBurgerOpen] = useState(false);
    const onChange = (key: string | string[]) => {
        console.log(key);
    };
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    const items: CollapseProps['items'] = [
        {
          key: '1',
          label: 'Platforms',
          children: <div className='header-dropdown'>
          <div className="header-dropdown--item">
              <Link href={'/'}>
                  <div className="svg-div">
                      <IlogixIcon />
                  </div>
                  <p className='title-big'>i Logix </p>
                  <p>A Tailored Logistic Solution Engineered to Optimize Efficiency and Propel Consumer Brands Forward.</p>
              </Link>
              <div>
                  <Link href={'/platforms/ilogix/d2c-delight'} className='header-dropdown--link'>
                      <div>
                          <Flex align='center' gap={12}>
                              <p className='title-main'>D2C Delight</p>
                              <span className='popular'>Most Popular</span>
                          </Flex>
                          <p>Seamless Logistics Management for Your Direct-to-Consumer Endeavors.</p>
                      </div>
                  </Link>
                  <Link href={'/platforms/ilogix/retail-delight'} className='header-dropdown--link'>
                      <div>
                          <Flex align='center' gap={12}>
                              <p className='title-main'>Retail Delight</p>
                          </Flex>
                          <p>Seamless Logistics Management for Your Direct-to-Consumer Endeavors.</p>
                      </div>
                  </Link>
              </div>
          </div>
          <div className="header-dropdown--item">
              <div>
                  <div className="svg-div">
                      <ElogixIcon />
                  </div>
                  <p className='title-big'>e Logix </p>
                  <p>Integrated Solution to manage end-to-end Last Mile Deliveries for e-commerce Movement.</p>
              </div>
              
              <div>
                  <Link href={'/platforms/elogix/erp-delight'} className='header-dropdown--link'>
                      <div>
                          <Flex align='center' gap={12}>
                              <p className='title-main'>ERP Delight</p>
                              <span className='popular'>Most Popular</span>
                          </Flex>
                          <p>ERP for Transporters to align on-ground operations at their Hubs and Branches.</p>
                      </div>
                  </Link>
                  <Link href={'/platforms/elogix/biker-delight'} className='header-dropdown--link'>
                      <div>
                          <Flex align='center' gap={12}>
                              <p className='title-main'>Biker Delight</p>
                          </Flex>
                          <p>Simplified application for Bikers to coordinate and manage their Deliveries.</p>
                      </div>
                  </Link>
              </div>
          </div>
          <div className="header-dropdown--item">
              <Link href={'/platforms/ulogix'}>
                  <div className="svg-div">
                      <UlogixIcon />
                  </div>
                  <p className='title-big'>u Logix </p>
                  <p>Comprehensive Solution for Integrated B2B and B2C Logistics Movements.</p>
              </Link>
              <div>
                  <Link href={'/platforms/ulogix'} className='header-dropdown--link'>
                      <div>
                          <Flex align='center' gap={12}>
                              <p className='title-main'>B2B2C Delight</p>
                              <span className='popular'>Coming Soon</span>
                          </Flex>
                          <p>Integrated solution to bridge the gap between B2B & B2C logistics.</p>
                      </div>
                  </Link>
                  <Link href={'/platforms/ulogix'} className='header-dropdown--link'>
                      <div>
                          <Flex align='center' gap={12}>
                              <p className='title-main'>Distribution Delight</p>
                              <span className='popular'>Coming Soon</span>
                          </Flex>
                          <p>Complete control over transporters for optimized logistics efficiency.</p>
                      </div>
                  </Link>
              </div>
          </div>
      </div>,
        },
        {
          key: '2',
          label: 'Solutions',
          children: <div className='header-dropdown second'>
          <div>
              <div className="header-dropdown--item">
                  <div>
                      <div className="svg-div">
                          <UlogixIcon />
                      </div>
                      <p className='title-big'>Shipping Solutions </p>
                      <p>Unlock Effortless Shipping Management with ShipDelight - Your Partner in Logistics.</p>
                  </div>
                  <div>
                      <Link href={'/solution/b2b-logistics'} className='header-dropdown--link'>
                          <div>
                              <p className='title-main'>B2B Logistics</p>
                          </div>
                      </Link>
                      <Link href={'/solution/ecommerce-shipping'} className='header-dropdown--link'>
                          <div>
                              <p className='title-main'>E- Commerce Shipping</p>
                          </div>
                      </Link>
                  </div>
              </div>
              <div className="header-dropdown--item">
                  <div>
                      <div className="svg-div">
                          <PostPurchaseIcon />
                      </div>
                      <p className='title-big'>Post Purchase</p>
                      <p>Elevate Customer Experience Beyond Purchase with ShipDelight's Solutions.</p>
                  </div>
                  <div>
                      <Link href={'/solution/ndr'} className='header-dropdown--link'>
                          <div>
                              <p className='title-main'>NDRs</p>
                          </div>
                      </Link>
                      <Link href={'/solution/returns'} className='header-dropdown--link'>
                          <div>
                              <p className='title-main'>Returns</p>
                          </div>
                      </Link>
                      <Link href={'/solution/exchanges'} className='header-dropdown--link'>
                          <div>
                              <p className='title-main'>Exchange</p>
                          </div>
                      </Link>
                      <Link href={'/solution/refunds'} className='header-dropdown--link'>
                          <div>
                              <p className='title-main'>Refunds</p>
                          </div>
                      </Link>
                      <Link href={'/solution/communications'} className='header-dropdown--link'>
                          <div>
                              <p className='title-main'>Communication</p>
                          </div>
                      </Link>
                  </div>
              </div>
              <div className="header-dropdown--item">
                  <div>
                      <div className="svg-div">
                          <FullfillmentIcon />
                      </div>
                      <p className='title-big'>Fulfilment Services </p>
                      <p>Optimize Your Fulfillment Operations with ShipDelight's Comprehensive Solutions.</p>
                  </div>
                  <div>
                      <Link href={'/solution/omni-channel'} className='header-dropdown--link'>
                          <div>
                              <p className='title-main'>Omni Channel</p>
                          </div>
                      </Link>
                      <Link href={'/solution/express-delivery'} className='header-dropdown--link'>
                          <div>
                              <p className='title-main'>Express Delivery</p>
                          </div>
                      </Link>
                      <Link href={'/solution/cash-on-dilevry'} className='header-dropdown--link'>
                          <div>
                              <p className='title-main'>Cash on Delivery</p>
                          </div>
                      </Link>
                      <Link href={'/solution/warehouse'} className='header-dropdown--link'>
                          <div>
                              <p className='title-main'>Warehousing & Inventory</p>
                          </div>
                      </Link>
                  </div>
              </div>
              <div className="header-dropdown--item">
                  <div>
                      <div className="svg-div">
                          <ShippersIcon />
                      </div>
                      <p className='title-big'>Shippers </p>
                      <p>Empower Your Shipping Process with Customized Solutions for Shippers.</p>
                  </div>
                  <div>
                      <Link href={'/solution/franchises'} className='header-dropdown--link'>
                          <div>
                              <p className='title-main'>Franchises</p>
                          </div>
                      </Link>
                      <Link href={'/solution/biker-app'} className='header-dropdown--link'>
                          <div>
                              <p className='title-main'>Biker Application</p>
                          </div>
                      </Link>
                      <Link href={'/solution/logistics-erp'} className='header-dropdown--link'>
                          <div>
                              <p className='title-main'>Logistics ERP</p>
                          </div>
                      </Link>
                  </div>
              </div>
          </div>
          {/* <div className='header-dropdown--bottom'>
              <div>
                  <BottomIcon />
                  <p className='title-big'>Integration</p>
              </div>
              <div>
                  <Link href={'/'} className='header-dropdown--link'>
                      <div>
                          <p className='title-main'>Carts</p>
                      </div>
                  </Link>
                  <Link href={'/'} className='header-dropdown--link'>
                      <div>
                          <p className='title-main'>Marketplaces</p>
                      </div>
                  </Link>
                  <Link href={'/'} className='header-dropdown--link'>
                      <div>
                          <p className='title-main'>Technology</p>
                      </div>
                  </Link>
                  <Link href={'/'} className='header-dropdown--link'>
                      <div>
                          <p className='title-main'>Partners</p>
                      </div>
                  </Link>
                  <Link href={'/'} className='header-dropdown--link'>
                      <div>
                          <p className='title-main'>Payment Gateway</p>
                      </div>
                  </Link>
              </div>
          </div> */}
      </div>,
        },
        {
          key: '3',
          label: 'Industry',
          children: <div className='header-dropdown third'>
          <div className="header-dropdown--item">
              <div>
                  <div className="svg-div">
                      <IndustryIcon />
                  </div>
                  <p className='title-big'>Industries </p>
                  <p>ShipDelight serves a wide range of industries with custom solutions unique to their requirement.</p>
              </div>
          </div>
          <div className="header-dropdown--item">
              <div>
                  <Link href={'/industry/fashion'} className='header-dropdown--link'>
                      <div>
                          <p className='title-main'>Fashion</p>
                      </div>
                  </Link>
                  <Link href={'/industry/electronics'} className='header-dropdown--link'>
                      <div>
                          <p className='title-main'>Electronics</p>
                      </div>
                  </Link>
                  <Link href={'/industry/health-care'} className='header-dropdown--link'>
                      <div>
                          <p className='title-main'>Health & Pharma</p>
                      </div>
                  </Link>
                  <Link href={'/industry/home-and-decor'} className='header-dropdown--link'>
                      <div>
                          <p className='title-main'>Home & Décor</p>
                      </div>
                  </Link>
              </div>
              <div>
                  <Link href={'/industry/food-and-beverage'} className='header-dropdown--link'>
                      <div>
                          <p className='title-main'>Foods & Beverages</p>
                      </div>
                  </Link>
                  <Link href={'/industry/sports'} className='header-dropdown--link'>
                      <div>
                          <p className='title-main'>Sports & Utilities</p>
                      </div>
                  </Link>
              </div>
          </div>
      </div>,
        },
        {
            key: '4',
            label: 'Company',
            children: <div className='header-dropdown fourth'>
            <div className="header-dropdown--item">
                <div>
                    <div className="svg-div">
                        <CompanyIcon />
                    </div>
                    <p className='title-big'>Company</p>
                    <p>Empowering Businesses with  Logistics Solutions that overcome Tomorrow's Challenges & drive growth.</p>
                </div>
                <div>
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
        </div>
        }
    ];
    const platfromLinks = [
        {
            title: 'iLogix',
            icon: <IlogixIcon />,
            text: 'A Tailored Logistic Solution Engineered to Optimize Efficiency and Propel Consumer Brands Forward.',
            links: [
                {
                    link: '/platforms/ilogix/d2c-delight',
                    title: 'D2C Delight',
                    text: 'Seamless Logistics Management for Your Direct-to-Consumer Endeavors.',
                    tag: 'Most Popular'
                },
                {
                    link: '/platforms/ilogix/retail-delight',
                    title: 'Retail Delight',
                    text: 'All-in-One Solution for Seamless Omni-channel Logistics Management.',
                }
            ]
        },
        {
            title: 'eLogix',
            icon: <ElogixIcon />,
            text: 'Integrated Solution to manage end-to-end Last Mile Deliveries for e-commerce Movement.',
            links: [
                {
                    link: '/platforms/elogix/erp-delight',
                    title: 'ERP Delight',
                    text: 'ERP for Transporters to align on-ground operations at their Hubs and Branches.',
                    tag: 'Most Popular'
                },
                {
                    link: '/platforms/elogix/biker-delight',
                    title: 'Biker Delight',
                    text: 'Simplified application for Bikers to coordinate and manage their Deliveries.',
                }
            ]
        },
        {
            title: 'uLogix',
            icon: <UlogixIcon />,
            link: '/platforms/ulogix',
            text: 'Comprehensive Solution for Integrated B2B and B2C Logistics Movements.',
            links: [
                {
                    link: '/platforms/ulogix',
                    title: 'B2B2C Delight',
                    text: 'Integrated solution to bridge the gap between B2B & B2C logistics.',
                    tag: 'Coming Soon'
                },
                {
                    link: '/platforms/ulogix',
                    title: 'Distribution Delight',
                    text: 'Complete control over transporters for optimized logistics efficiency.',
                    tag: 'Coming Soon'
                }
            ]
        }
    ];
    const solutionsLinks = [
        {
            title: 'Shipping Solutions',
            icon: <UlogixIcon />,
            text: 'Unlock Effortless Shipping Management with ShipDelight - Your Partner in Logistics.',
            links: [
                {
                    link: '/solution/b2b-logistics',
                    title: 'B2B Logistics',
                },
                {
                    link: '/solution/ecommerce-shipping',
                    title: 'E- Commerce Shipping',
                }
            ]
        },
        {
            title: 'Post Purchase',
            icon: <PostPurchaseIcon />,
            text: "Elevate Customer Experience Beyond Purchase with ShipDelight's Solutions.",
            links: [
                {
                    link: '/solution/ndr',
                    title: 'NDRs',
                },
                {
                    link: '/solution/returns',
                    title: 'Returns',
                },
                {
                    link: '/solution/exchanges',
                    title: 'Exchange',
                },
                {
                    link: '/solution/refunds',
                    title: 'Refunds',
                },
                {
                    link: '/solution/communications',
                    title: 'Communication',
                }
            ]
        },
        {
            title: 'Fulfilment Services',
            icon: <FullfillmentIcon />,
            text: "Optimize Your Fulfillment Operations with ShipDelight's Comprehensive Solutions.",
            links: [
                {
                    link: '/solution/omni-channel',
                    title: 'Omni Channel',
                },
                {
                    link: '/solution/express-delivery',
                    title: 'Express Delivery',
                },
                {
                    link: '/solution/cash-on-dilevry',
                    title: 'Cash on Delivery',
                },
                {
                    link: '/solution/warehouse',
                    title: 'Warehousing & Inventory',
                }
            ]
        },
        {
            title: 'Shippers',
            icon: <ShippersIcon />,
            text: "Empower Your Shipping Process with Customized Solutions for Shippers.",
            links: [
                {
                    link: '/solution/franchises',
                    title: 'Franchises',
                },
                {
                    link: '/solution/biker-app',
                    title: 'Biker Application',
                },
                {
                    link: '/solution/logistics-erp',
                    title: 'Logistics ERP',
                }
            ]
        }
    ]
    const industriesLink = {
        title: 'Industries',
        icon: <IndustryIcon />,
        text: 'ShipDelight serves a wide range of industries with custom solutions unique to their requirement.',
        links:[
            {
                link: '/industry/fashion',
                title: 'Fashion'
            },
            {
                link: '/industry/electronics',
                title: 'Electronics'
            },
            {
                link: '/industry/health-care',
                title: 'Health & Pharma'
            },
            {
                link: '/industry/home-and-decor',
                title: 'Home & Décor'
            }
        ],
        links2:[
            {
                link: '/industry/food-and-beverage',
                title: 'Foods & Beverages'
            },
            {
                link: '/industry/sports',
                title: 'Sports & Utilities'
            }
        ]
    }
    const comapaniesLink = {
        title: 'Company',
        icon: <CompanyIcon />,
        text: "Empowering Businesses with  Logistics Solutions that overcome Tomorrow's Challenges & drive growth.",
        links:[
            {
                link: '/about',
                title: 'About'
            },
            {
                link: '/career',
                title: 'Career'
            },
            {
                link: '/contact-us',
                title: 'Contact Us'
            }
        ]
    }
    const isElogix = pathname.includes("elogix");
    const isUlogix = pathname.includes("ulogix");
    const [headerStep, setHeaderStep] = useState(0);
    return (
        <>
            <header className={`sticky ${openDrop >= 0 ? 'open-drop' : ''}`}>
                <div className="header--container">
                    { headerStep === 1 ?
                        <Flex align='center' gap={14}>
                            <BckIcon onClick={() => setHeaderStep(0)} />
                            <p className='headerMobileText'>Platforms</p>
                        </Flex> : headerStep === 2 ?
                        <Flex align='center' gap={14}>
                            <BckIcon onClick={() => setHeaderStep(0)} />
                            <p className='headerMobileText'>Solutions</p>
                        </Flex> : headerStep === 3 ?
                        <Flex align='center' gap={14}>
                            <BckIcon onClick={() => setHeaderStep(0)} />
                            <p className='headerMobileText'>Industry</p>
                        </Flex> : headerStep === 4 ?
                        <Flex align='center' gap={14}>
                            <BckIcon onClick={() => setHeaderStep(0)} />
                            <p className='headerMobileText'>Company</p>
                        </Flex> : 
                        <Link href={'/'} className='logo-head'>
                            <LogoImage />
                        </Link>
                    }
                    <div className="header--links">
                        <Flex gap={8} align='center' className="header--link" onClick={() => { setOpenDrop(openDrop === 0 ? -1 : 0) }}>
                            <p>Platforms</p>
                            <ChevrotDown />
                        </Flex>
                        <Flex gap={8} align='center' className="header--link" onClick={() => { setOpenDrop(openDrop === 1 ? -1 : 1) }}>
                            <p>Solutions</p>
                            <ChevrotDown />
                        </Flex>
                        <Flex gap={8} align='center' className="header--link" onClick={() => { setOpenDrop(openDrop === 2 ? -1 : 2) }}>
                            <p>Industry</p>
                            <ChevrotDown />
                        </Flex>
                        <Flex gap={8} align='center' className="header--link" onClick={() => { setOpenDrop(openDrop === 3 ? -1 : 3) }}>
                            <p>Company</p>
                            <ChevrotDown />
                        </Flex>
                        <Link href={'/pricing'} className="header--link">
                            <p>Pricing</p>
                        </Link>
                        <Link href={'/blogs'} className="header--link">
                            <p>Resources</p>
                        </Link>
                    </div>
                    <div className='btn-grp'>
                        {/* <Button type='text'>
                            Log In
                        </Button> */}
                        <Button type='primary' onClick={()=>{router.push('/book-a-demo')}}>
                            Book a Demo
                        </Button>
                    </div>
                    {!burgerOpen ? 
                        <Button type='primary' className='head-btn' onClick={()=>{router.push('/book-a-demo')}}>
                            Book a Demo
                        </Button> : ''
                    }
                    {
                        headerStep === 0 ? 
                        <div onClick={() => {setBurgerOpen(!burgerOpen); setHeaderStep(0);}} className={`burger ${burgerOpen ? 'is-active' : ''}`} id="burger">
                            <span className="burger-line"></span>
                            <span className="burger-line"></span>
                            <span className="burger-line"></span>
                        </div> : ''
                    }
                    <div className={`nav-list-mobile ${burgerOpen ? 'open' : ''}`}>
                        {/* <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} /> */}
                        {
                            headerStep === 0 ? 
                            <div className='nav-list-mobile--inner'>
                                <div className="nav-list-mobile--item" onClick={()=>{setHeaderStep(1)}}>
                                    <Flex justify='space-between' align='center'>
                                        <p className='header-custom-ink'>Platforms</p>
                                        <Chevron />
                                    </Flex>
                                </div>
                                <div className="nav-list-mobile--item" onClick={()=>{setHeaderStep(2)}}>
                                    <Flex justify='space-between' align='center'>
                                        <p className='header-custom-ink'>Solutions</p>
                                        <Chevron />
                                    </Flex>
                                </div>
                                <div className="nav-list-mobile--item" onClick={()=>{setHeaderStep(3)}}>
                                    <Flex justify='space-between' align='center'>
                                        <p className='header-custom-ink'>Industry</p>
                                        <Chevron />
                                    </Flex>
                                </div>
                                <div className="nav-list-mobile--item" onClick={()=>{setHeaderStep(4)}}>
                                    <Flex justify='space-between' align='center'>
                                        <p className='header-custom-ink'>Company</p>
                                        <Chevron />
                                    </Flex>
                                </div>
                                <div className="nav-list-mobile--item">
                                    <Link href={'/pricing'} className="header--link">
                                        Pricing
                                    </Link>
                                </div>
                                <div className="nav-list-mobile--item">
                                    <Link href={'/blogs'} className="header--link">
                                        Resources
                                    </Link>
                                </div>
                            </div> :
                            headerStep === 1 ?
                            <div className='nav-list-mobile--inner'>
                                <div className='header-dropdown'>
                                    {platfromLinks.map((item, index)=>(
                                        <div className="header-dropdown--item" key={index}>
                                            <Flex gap={8}>
                                                <div className="svg-div">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <p className='title-big'>{item.title}</p>
                                                    {item.links.map((link, indexInner)=>(
                                                        <Link href={link.link} className='header-dropdown--link' key={indexInner}>
                                                            <div>
                                                                <Flex align='center' gap={12}>
                                                                    <p className='title-main'>{link.title}</p>
                                                                    {link.tag ? <span className='popular'>{link.tag}</span> : ''}
                                                                </Flex>
                                                                {link.text ? <p>{link.text}</p> : ''}
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </Flex>
                                        </div>
                                    ))}
                                </div>
                            </div> : headerStep === 2 ?
                            <div className='nav-list-mobile--inner'>
                                <div className='header-dropdown'>
                                    {solutionsLinks.map((item, index)=>(
                                        <div className="header-dropdown--item" key={index}>
                                            <Flex gap={8}>
                                                <div className="svg-div">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <p className='title-big'>{item.title}</p>
                                                    {item.links.map((link, indexInner)=>(
                                                        <Link href={link.link} className='header-dropdown--link' key={indexInner}>
                                                            <div>
                                                                <Flex align='center' gap={12}>
                                                                    <p className='title-main'>{link.title}</p>
                                                                </Flex>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </Flex>
                                        </div>
                                    ))}
                                </div>
                            </div> : headerStep === 4 ?
                            <div className='nav-list-mobile--inner'>
                                <div className='header-dropdown'>
                                    <div className="header-dropdown--item">
                                        <Flex gap={8}>
                                            <div className="svg-div">
                                                {comapaniesLink.icon}
                                            </div>
                                            <div>
                                                <p className='title-big'>{comapaniesLink.title}</p>
                                                {comapaniesLink.links.map((link, indexInner)=>(
                                                    <Link href={link.link} className='header-dropdown--link' key={indexInner}>
                                                        <div>
                                                            <Flex align='center' gap={12}>
                                                                <p className='title-main'>{link.title}</p>
                                                            </Flex>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </Flex>
                                    </div>
                                </div>
                            </div> : headerStep === 3 ?
                            <div className='nav-list-mobile--inner'>
                                <div className='header-dropdown'>
                                    <div className="header-dropdown--item">
                                        <Flex gap={8}>
                                            <div className="svg-div">
                                                {industriesLink.icon}
                                            </div>
                                            <div>
                                                <p className='title-big'>{industriesLink.title}</p>
                                                {industriesLink.links.map((link, indexInner)=>(
                                                    <Link href={link.link} className='header-dropdown--link' key={indexInner}>
                                                        <div>
                                                            <Flex align='center' gap={12}>
                                                                <p className='title-main'>{link.title}</p>
                                                            </Flex>
                                                        </div>
                                                    </Link>
                                                ))}
                                                {industriesLink.links2.map((link, indexInner)=>(
                                                    <Link href={link.link} className='header-dropdown--link' key={indexInner}>
                                                        <div>
                                                            <Flex align='center' gap={12}>
                                                                <p className='title-main'>{link.title}</p>
                                                            </Flex>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </Flex>
                                    </div>
                                </div>
                            </div>
                            : ''
                        }
                        {burgerOpen && headerStep === 0 ?
                        <Button type='primary' className='btn-main' style={{margin: '20px 20px 0'}} onClick={()=>{router.push('/book-a-demo')}}>
                            Book a Demo
                        </Button> : '' }
                    </div>
                </div>
                {openDrop === 0 ?
                    <div className='header--overlay'>
                        <span onClick={()=>{setOpenDrop(-1)}}></span>
                        <div className='header-dropdown'>
                            {platfromLinks.map((item, index)=>(
                                <div className="header-dropdown--item" key={index}>
                                    {item.link ?
                                        <Link href={item.link}>
                                            <div className="svg-div">
                                                {item.icon}
                                            </div>
                                            <p className='title-big'>{item.title}</p>
                                            <p className={index === 2 ? 'max-235' : ''}>{item.text}</p>
                                        </Link> :
                                        <div>
                                            <div className="svg-div">
                                                {item.icon}
                                            </div>
                                            <p className='title-big'>{item.title}</p>
                                            <p className={index === 2 ? 'max-235' : ''}>{item.text}</p>
                                        </div>
                                    }

                                    <div>
                                        {item.links.map((link, innerIndex) =>(
                                            <Link href={link.link} className='header-dropdown--link' key={innerIndex}>
                                                <div>
                                                    <Flex align='center' gap={12}>
                                                        <p className='title-main'>{link.title}</p>
                                                        {link.tag && <span className='popular'>{link.tag}</span>}
                                                    </Flex>
                                                    <p>{link.text}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    : openDrop === 1 ?
                    <div className='header--overlay'>
                        <span onClick={()=>{setOpenDrop(-1)}}></span>
                        <div className='header-dropdown second'>
                            <div>
                                {solutionsLinks.map((item, index)=>(
                                    <div className="header-dropdown--item" key={index}>
                                        <div>
                                            <div className="svg-div">
                                                {item.icon}
                                            </div>
                                            <p className='title-big'>{item.title}</p>
                                            <p>{item.text}</p>
                                        </div>
                                        <div>
                                            {item.links.map((link, innerIndex)=>(
                                                <Link href={link.link} className='header-dropdown--link' key={innerIndex}>
                                                    <div>
                                                        <p className='title-main'>{link.title}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* <div className='header-dropdown--bottom'>
                                <div>
                                    <BottomIcon />
                                    <p className='title-big'>Integration</p>
                                </div>
                                <div>
                                    <Link href={'/'} className='header-dropdown--link'>
                                        <div>
                                            <p className='title-main'>Carts</p>
                                        </div>
                                    </Link>
                                    <Link href={'/'} className='header-dropdown--link'>
                                        <div>
                                            <p className='title-main'>Marketplaces</p>
                                        </div>
                                    </Link>
                                    <Link href={'/'} className='header-dropdown--link'>
                                        <div>
                                            <p className='title-main'>Technology</p>
                                        </div>
                                    </Link>
                                    <Link href={'/'} className='header-dropdown--link'>
                                        <div>
                                            <p className='title-main'>Partners</p>
                                        </div>
                                    </Link>
                                    <Link href={'/'} className='header-dropdown--link'>
                                        <div>
                                            <p className='title-main'>Payment Gateway</p>
                                        </div>
                                    </Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                     : openDrop === 2 ?
                    <div className='header--overlay'>
                        <span onClick={()=>{setOpenDrop(-1)}}></span>
                        <div className='header-dropdown third'>
                            <div className="header-dropdown--item">
                                <div>
                                    <div className="svg-div">
                                        {industriesLink.icon}
                                    </div>
                                    <p className='title-big'>{industriesLink.title}</p>
                                    <p>{industriesLink.text}</p>
                                </div>
                            </div>
                            <div className="header-dropdown--item">
                                <div>
                                    {industriesLink.links.map((link, index)=>(
                                        <Link href={link.link} className='header-dropdown--link' key={index}>
                                            <div>
                                                <p className='title-main'>{link.title}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div>
                                    {industriesLink.links2.map((link, index)=>(
                                        <Link href={link.link} className='header-dropdown--link' key={index}>
                                            <div>
                                                <p className='title-main'>{link.title}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                     : openDrop === 3 ?
                    <div className='header--overlay'>
                        <span onClick={()=>{setOpenDrop(-1)}}></span>
                        <div className='header-dropdown fourth'>
                            {/* <div className="header-dropdown--item">
                                <div>
                                    <div className="svg-div">
                                        <IlogixIcon />
                                    </div>
                                    <p className='title-big'>Resource</p>
                                    <p>Lorem ipsum dolor sit amet consectetur. Vulputate leo magna dolor</p>
                                </div>
                                <div>
                                    <Link href={'/blogs'} className='header-dropdown--link'>
                                        <div>
                                            <p className='title-main'>Blogs</p>
                                        </div>
                                    </Link>
                                    <Link href={'/reports'} className='header-dropdown--link'>
                                        <div>
                                            <p className='title-main'>Reports</p>
                                        </div>
                                    </Link>
                                    <Link href={'/case-studies'} className='header-dropdown--link'>
                                        <div>
                                            <p className='title-main'>Case Studies</p>
                                        </div>
                                    </Link>
                                    <Link href={'/events'} className='header-dropdown--link'>
                                        <div>
                                            <p className='title-main'>Events & Webinars</p>
                                        </div>
                                    </Link>
                                    <Link href={'/'} className='header-dropdown--link'>
                                        <div>
                                            <p className='title-main'>Help & Support</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="header-dropdown--item">
                                <div>
                                    <div className="svg-div">
                                        <IlogixIcon />
                                    </div>
                                    <p className='title-big'>Company</p>
                                    <p>Lorem ipsum dolor sit amet consectetur. Vulputate leo magna dolor</p>
                                </div>
                                <div>
                                    <Link href={'/about'} className='header-dropdown--link'>
                                        <div>
                                            <p className='title-main'>About</p>
                                        </div>
                                    </Link>
                                    <Link href={'/news'} className='header-dropdown--link'>
                                        <div>
                                            <p className='title-main'>News & PRs</p>
                                        </div>
                                    </Link>
                                    <Link href={'/partners'} className='header-dropdown--link'>
                                        <div>
                                            <p className='title-main'>Partners</p>
                                        </div>
                                    </Link>
                                    <Link href={'/career'} className='header-dropdown--link'>
                                        <div>
                                            <p className='title-main'>Careers</p>
                                        </div>
                                    </Link>
                                    <Link href={'/contact-us'} className='header-dropdown--link'>
                                        <div>
                                            <p className='title-main'>Contact Us</p>
                                        </div>
                                    </Link>
                                </div>
                            </div> */}
                            <div className="header-dropdown--item">
                                <div>
                                    <div className="svg-div">
                                    {comapaniesLink.icon}
                                    </div>
                                    <p className='title-big'>{comapaniesLink.title}</p>
                                    <p>{comapaniesLink.text}</p>
                                </div>
                            </div>
                            <div className="header-dropdown--item">
                                <div>
                                    {comapaniesLink.links.map((link, index)=>(
                                        <Link href={link.link} className='header-dropdown--link' key={index}>
                                            <div>
                                                <p className='title-main'>{link.title}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    : ''
                }
            </header>
            {!isUlogix ? 
                <header className={`absolute ${prevScrollPos > 300 && isPlatform ? 'show' : ''}`}>
                    <div className={'header--container second'}>
                        <Flex align='center' gap={10} justify='space-between'>
                            {isElogix ? <Elogix /> : <Ilogix />}
                            <div className="header--links">
                                <a href='#overviewProduct' className="header--link header--link ant-flex ant-flex-align-center">
                                    <p>Overview</p>
                                </a>
                                <a href='#featuresProduct' className="header--link header--link ant-flex ant-flex-align-center">
                                    <p>Features</p>
                                </a>
                                <a href="#solutionsProduct" className="header--link header--link ant-flex ant-flex-align-center">
                                    <p>Solutions</p>
                                </a>
                                <a href='#howWorksProduct' className="header--link header--link ant-flex ant-flex-align-center">
                                    <p>How it works</p>
                                </a>
                            </div>
                            <Button type='primary' onClick={()=>{router.push('/book-a-demo')}}>
                                Book a Demo
                            </Button>
                        </Flex>
                    </div>
                </header> : ''
            }
            <button onClick={scrollToTop} className={prevScrollPos > 600 && isPlatform ? "back-to-top show" : "back-to-top"} type="button"></button>
        </>
    )
}
export default Header