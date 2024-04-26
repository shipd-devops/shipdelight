
import Image from 'next/image';
import React, { FC } from 'react'
// IMAGES
import Brand1 from '../../../public/images/brand-1.svg'
import Brand2 from '../../../public/images/brand-2.svg'
import Brand3 from '../../../public/images/brand-3.svg'
import Brand4 from '../../../public/images/brand-4.svg'
import Brand5 from '../../../public/images/brand-5.svg'
import Brand6 from '../../../public/images/brand-6.svg'
import Brand7 from '../../../public/images/brand-7.svg'
import Brand8 from '../../../public/images/brand-8.svg'
import Brand9 from '../../../public/images/brand-9.svg'

interface Props {
    normal?: any;
}

const BrandList: FC<Props> = ({ normal }) => {
    return (
       <>
            <div className={normal ? "brands-list normal" : 'brands-list'}>
                <div className="brands-list--item">
                    <Brand1 />
                </div>
                <div className="brands-list--item">
                    <Brand2 />
                </div>
                <div className="brands-list--item">
                    <Brand3 />
                </div>
                <div className="brands-list--item">
                    <div style={{marginTop: '16px'}}>
                        <Brand4 />
                    </div>
                </div>
                <div className="brands-list--item">
                    <Brand5 />
                </div>
                <div className="brands-list--item">
                    <Brand8 />
                </div>
                <div className="brands-list--item">
                    <Brand9 />
                </div>
                <div className="brands-list--item">
                    <Brand7 />
                </div>
            </div>
       </>
    )
}

export default BrandList