
import Image from 'next/image';
import React, { FC } from 'react'

interface Props {
    details: any;
}
const CommonLeftRight: FC<Props> = ({ details }) => {
    return (
       <>
            <div className="common--content-list">
                {details.map((data: any, index:any) => (
                    <div className="common--content--item" key={index}>
                        <div className="common--content--item-details">
                            <h3 dangerouslySetInnerHTML={{ __html : data.title}} />
                            <p>{data.des}</p>
                        </div>
                        <div className="common--content--item-image">
                            <Image src={data.image} alt='image' />
                        </div>
                    </div>
                ))}
            </div>
       </>
    )
}

export default CommonLeftRight