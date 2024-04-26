
import Image from 'next/image';
import React, { FC } from 'react'

interface Props {
    cards: any;
}
const SmallCard: FC<Props> = ({ cards }) => {
    return (
       <>
            <div className="small-cards">
                {cards.map((data: any, index:any) => (
                    <div className="small-card--item" key={index}>
                        <div>
                            <h4>{data.title}</h4>
                            <p>{data.des}</p>
                        </div>
                        <div className="small-card--item--img">
                            <Image src={data.image} alt='image' />
                        </div>
                    </div>
                ))}
            </div>
       </>
    )
}

export default SmallCard