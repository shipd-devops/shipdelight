import React, { FC } from 'react'

import Image from "next/image";

interface Props {
    valueData: any;
}
const ValueCards: FC<Props> = ({ valueData }) => {
  return (
    <div className='card-container'>
        {valueData.map((data:any,i:number)=>(
            <div className={`card-item ${data.type}`} key={i}>
                <div>
                    <p className='value-title'>{data.title}</p>
                    <p className='value-txt'>{data.text}</p>
                </div>
                <Image src={data.img} alt={data.title}></Image>
            </div>
        ))}
    </div>
  )
}

export default ValueCards