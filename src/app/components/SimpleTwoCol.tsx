import React, { FC } from 'react'

interface Props {
    data: any;
    small?: boolean
}
const SimpleTwoCol: FC<Props> = ({ data, small }) => {
  return (
    <div className={`benefits-list ${small ? 'small' : ''}`}>
        {data.map((data:any,i:number)=>(
            <div className={`benefits-list--item`} key={i}>
                <div className="benefits-list--item-img">
                    {data.img}
                </div>
                <div>
                    <h3 className='benefits-list--title'>{data.title}</h3>
                    <p className='benefits-list---text'>{data.text}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default SimpleTwoCol