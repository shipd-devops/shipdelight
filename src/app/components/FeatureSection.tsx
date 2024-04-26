import React, { FC } from 'react'

import Image from "next/image";
import TrafficImage from '../../../public/images/traffic.svg'

interface Props {
    featureSlides: any;
    notSticky?: boolean;
    sticky?: boolean;
}

const FeatureSection: FC<Props> = ({ featureSlides, notSticky, sticky }) => {
    return (
        featureSlides.map((feature: any, index: number) => (

            <section className={`solution ${notSticky ? 'normal-section' : 'sticky-conainer'} ${sticky === true ? 'sticky' : ''} ${index === 0 ? 'one' : ''} ${feature.sectionColor}`} key={index}>
                {
                    !notSticky ? 
                    <div className={`sticky-div `}>
                        <div className="sticky-div--inner">
                            <TrafficImage />
                        </div>
                    </div> : ''
                }
                <div className="container side">
                    <div className='banner-info-section'>
                        <div>
                            <h6>{feature.type}</h6>
                            {/* <h2>{feature.title} <span>{feature.titleHightlight}</span></h2> */}
                            {feature.reverse ?
                            <h2>{feature.title} <span>{feature.titleHightlight}</span></h2> :
                            <h2><span>{feature.titleHightlight}</span> {feature.title}</h2>
                            }
                            <p className='feature-text'>{feature.text}</p>
                            <br />
                            {feature.text2 ? <p className='feature-text'>{feature.text2}</p> : ''}
                        </div>
                    </div>
                    <div className='feature-img'>
                        <Image src={feature.image} alt={feature.title}></Image>
                    </div>
                </div>
            </section>
        ))
    )
}

export default FeatureSection