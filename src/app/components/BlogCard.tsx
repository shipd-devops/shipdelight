import React, { FC } from 'react'
import Image from "next/image";
import Link from "next/link";
import Clock from '../../../public/images/clocl.svg'

interface Props {
    cardData: any;
    relatedPost?: boolean
}
const BlogCard: FC<Props> = ({ cardData, relatedPost }) => {
  return (
    <div className='blog-cards bodered'>
        {cardData.map((data:any,i:number)=>(
            <Link href={data.link} className={`blog-card ${relatedPost ? 'two' : ''} ${data.time ? '' : 'news'}`} key={i}>
                <div className="blog-card--image">
                    <Image src={data.image} alt={data.title}></Image>
                </div>
                <div className='blog-card--inner'>
                    {
                        data.time ? 
                        <p className='blog-card--category'>{data.category}</p> : ''
                    }
                    {
                        data.time ? '' :  
                        <div className="time first">
                            {data.tag && <p>{data.tag}</p>}
                            <p>{data.date}</p>
                        </div>
                    }
                    <p className={`blog-card--title ${data.time ? '' : 'mb-0'}`}>{data.title}</p>
                    {
                        data.time ? 
                        <div className="time">
                            <div>
                                <Clock />
                                <p>{data.time} read</p>
                            </div>
                            <p>{data.date}</p>
                        </div> : ''
                    }
                </div>
            </Link>
        ))}
    </div>
  )
}

export default BlogCard