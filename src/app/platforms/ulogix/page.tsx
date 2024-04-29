'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Flex, Space, Input } from 'antd';
import CommonLeftRight from "@/app/components/CommonLeftRight";
import BookDemo from "@/app/components/BookDemo";
// IMAGES
import Ilogix from '../../../../public/images/u-logix-main.svg'
import StarWhite from '../../../../public/images/stars.svg'
import SemiCircle from '../../../../public/images/semi-circle-small.svg'
import GuidesMerge from '../../../../public/images/guides-merge-ulogix.svg'
import GuidesMergeReverse from '../../../../public/images/guides-merge-reverse.svg'
import ONDC from '../../../../public/images/ondc.svg'
import ULIP from '../../../../public/images/ulip.svg'
import SupplyChain from '../../../../public/images/supply--chain.svg'
import GatiShakti from '../../../../public/images/gati-shakti.svg'
import IntegrateIcon from '../../../../public/images/integrate-main-ulogix.svg'
import SolutionImage from '../../../../public/images/ulogix-soultion-left.webp'
import SolutionImage1 from '../../../../public/images/ulogix-soultion-left-2.webp'
import SolutionImage2 from '../../../../public/images/ulogix-soultion-left-3.webp'
import WhiteGuide from '../../../../public/images/white-guide.webp'
import IntegrateMobilePage from '../../../../public/images/integrate-mobile-image.webp'
import IntegrateMobile from '../../../../public/images/mobile-integrate--img.webp'


export default function Home() {
    const solutions = [
        {
            title: `Integrated solutions <span>for B2B & B2C movements</span>`,
            des: 'Our integrated solution bridges the gap between B2B & B2C logistics, ensuring smooth movements, enhanced efficiency, and connectivity across all distribution channels.',
            image: SolutionImage
        },
        {
            title: `Elevate your D2C journey: <span>Flawless flow from the First Mile to Last Smile.</span>`,
            des: "Amplify your B2B2C operations with our integrated platform: seamless coordination from the first mile, ensuring each delivery is a step toward customer loyalty and satisfaction.",
            image: SolutionImage1
        },
        {
            title: `Complete control <span>over transporters</span>`,
            des: "Exercise complete control over transporters for optimized logistics efficiency, reliability, and enhanced coordination, ensuring smoother operations & superior service delivery.",
            image: SolutionImage2
        }
    ];
    return (
        <main>
            <section className="gradient-section platform-banner u-logix">
                <div className="container">
                    <Ilogix />
                    <p className="u-logix--head">Did you know that 66% of executives agreed their brand message gets diluted before reaching customers?</p>
                    <h1 className="small">ULogix: Mastering Logistics, Amplifying Your Brand's Voice Across the Supply Chain.</h1>
                    <div>
                        <p className="u-logix--cta">Get notified when we launch and get a <span>early access</span></p>
                        <BookDemo data={true} />
                    </div>
                    <Image src={WhiteGuide} alt="white guide" className="white-guide" />
                </div>
            </section>
            <section className="integration section-yellow ulogix">
                <div className="container small">
                    <h2>Leveraging government-supported infrastructures</h2>
                    <div className="position-relative">
                        <div className="left-brands">
                            <div className="left-brand">
                                <GatiShakti />
                            </div>
                            <div className="left-brand">
                                <ULIP />
                            </div>
                            <div className="left-brand">
                                <ONDC />
                            </div>
                        </div>
                        <Image className="integrate-mobile top" src={IntegrateMobile} alt="Logistics Integrated Solutions & Services" />
                        <div className="integration--main-icon">
                            <IntegrateIcon />
                        </div>
                        <div className="integration--title">
                            <p>Supply Chain & Last Mile</p>
                        </div>
                        <div className="integration--title second">
                            <p>Logistics Integrated Solutions & Services</p>
                        </div>
                        <div className="svg">
                            <GuidesMerge />
                        </div>
                        <div className="svg reverse">
                            <GuidesMergeReverse />
                        </div>
                        <div className="svg center">
                            <SemiCircle />
                        </div>
                        <div className="circles">
                            <div className="white-cirle">
                                <p>D2C</p>
                            </div>
                            <div className="white-cirle">
                                <p>B2B</p>
                            </div>
                            <div className="white-cirle">
                                <p>Web</p>
                            </div>
                            <div className="white-cirle small">
                                <p>Market Place</p>
                            </div>
                            <div className="white-cirle small">
                                <p>Market Place</p>
                            </div>
                            <div className="white-cirle small big">
                                <p>Internal warehouse movement</p>
                            </div>
                            <div className="white-cirle">
                                <SupplyChain />
                            </div>
                        </div>
                        <Image className="integrate-mobile" src={IntegrateMobilePage} alt="Logistics Integrated Solutions & Services" />
                    </div>
                </div>
            </section>
            <section className="common-section section-grey normal-section" id="solutionsProduct">
                <div className="container small">
                    <h6>Solutions </h6>
                    <h2>Business Benefits of <span>ShipDelight's Retail Delight</span></h2>
                    <CommonLeftRight details={solutions} />
                </div>
            </section>
            <section className="gradient-section platform-banner u-logix">
                <div className="container">
                    <Flex gap={10} vertical>
                        <h2 className="mb-0">Explore More Logistics Solutions from <span>uLogix</span></h2>
                        <p className="u-logix--footer-head">Instant satisfaction with Same Day Delivery swift order processing and prompt doorstep</p>
                    </Flex>
                    <div>
                        <p className="u-logix--cta">Get notified when we launch and get a <span>early access</span></p>
                        <BookDemo data={true} />
                    </div>
                    <Image src={WhiteGuide} alt="white guide" className="white-guide" />
                </div>
            </section>
        </main>
    );
}
