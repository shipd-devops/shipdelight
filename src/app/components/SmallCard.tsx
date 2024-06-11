
import Image from 'next/image';
import React, { FC } from 'react'

interface Props {
    cards: any;
    noImage?: boolean;
}
const SmallCard: FC<Props> = ({ cards, noImage }) => {
    return (
       <>
            <div className="small-cards">
                {cards.map((data: any, index:any) => (
                    <div className={noImage ? "small-card--item no-image" : "small-card--item"} key={index}>
                        <div>
                            {noImage ? <h3>{data.title}</h3> : <h4>{data.title}</h4>}
                            <p>{data.des}</p>
                        </div>
                        {
                            data.image &&
                            <div className="small-card--item--img">
                                <Image src={data.image} alt='image' />
                            </div>
                        }
                    </div>
                ))}
            </div>
       </>
    )
}

export default SmallCard