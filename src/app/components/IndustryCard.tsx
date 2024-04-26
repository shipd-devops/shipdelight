import React, { FC } from 'react'
import Image from "next/image";

interface Props {
    industryData: any;
}
const IndustryCard: FC<Props> = ({ industryData }) => {
  return (
    <div className='industry-items'>
        {
            industryData.map((data:any,i:number)=>(
                <div className='industry-item' key={i}>
                    <Image src={data.icon} alt={data.title}></Image>
                    <div className='ind-info'>
                        <p className='ind-title'>{data.title}</p>
                        <p className='ind-txt'>{data.text}</p>

                    </div>
                </div>
            ))
        }

    </div>
  )
}

export default IndustryCard