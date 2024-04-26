import React, { FC } from 'react'

import Image from "next/image";

interface Props {
    roles: any;
    simple?: boolean
}
const RolesCard: FC<Props> = ({ roles, simple }) => {
  return (
    <div className='roles-card'>
        {roles.map((data:any,i:number)=>(
            <div className={`roles-card--item ${simple ? 'simple' : ''}`} key={i}>
                {data.img}
                <div>
                    <h3 className='value-title'>{data.title}</h3>
                    <p className='value-txt'>{data.text}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default RolesCard