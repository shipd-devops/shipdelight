import React, { FC } from 'react'
import Image from "next/image";
import Link from "next/link";

interface Props {
    cardData: any;
    relatedPost?: boolean
}
const CaseStudies: FC<Props> = ({ cardData, relatedPost }) => {
  return (
    <div className='blog-cards'>
        {cardData.map((data:any,i:number)=>(
            <div className={`blog-card ${relatedPost ? 'two' : ''}`} key={i}>
                <div className="blog-card--image">
                    <Image src={data.image} alt={data.title}></Image>
                </div>
                <div>
                    <p className='blog-card-text'>{data.text}</p>
                    <p className='blog-card--title'>{data.title}</p>
                </div>
                <Link className='link-text-underline' href={data.link}>View Case Study</Link>
            </div>
        ))}
    </div>
  )
}

export default CaseStudies