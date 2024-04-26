import React, { FC } from 'react'
import Image from "next/image";
import Link from "next/link";
import Location from '../../../public/images/location-small.svg'
import ClockMask from '../../../public/images/clock-mask.svg'

interface Props {
    cardData: any;
    small?: boolean;
}
const Events: FC<Props> = ({ cardData, small }) => {
    return (
        <div className={`events-list ${small ? 'small' : ''}`}>
            {
                cardData.map((data: any, index: number) => (
                    <div className={`events-list--item ${small ? 'small' : ''}`} key={index}>
                        <div className={`events-list--item--img ${small ? 'small' : ''}`}>
                            <Image src={data.img} alt='Event' />
                        </div>
                        <div className="events-list--item--content">
                            <p>{data.cat}</p>
                            <p className='events-list--item--title'>{data.title}</p>
                            {!small && 
                                <div className="events-list--item--details">
                                    <div className="events-list--item--details--item">
                                        <ClockMask />
                                        <p>{data.detailsTimeStart} to {data.detailsTimeEnd}</p>
                                    </div>
                                    <div className="events-list--item--details--item">
                                        <Location />
                                        <p>{data.detailsAddrress}</p>
                                    </div>
                                </div>
                            }
                            {!small && 
                                <p className='events-list--item--des'>{data.desc}</p>
                            }
                            <Link className='link-text-underline' href={data.link}>{data.linkText}</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Events