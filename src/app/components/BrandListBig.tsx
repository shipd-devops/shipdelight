
import Image from 'next/image';
import React, { FC } from 'react'
// IMAGES
import Brand1 from '../../../public/images/brands-1.svg'
import Brand2 from '../../../public/images/brands-2.svg'
import Brand3 from '../../../public/images/brands-3.svg'
import Brand4 from '../../../public/images/brands-4.svg'
import Brand5 from '../../../public/images/brands-5.svg'
import Brand6 from '../../../public/images/brands-6.svg'

import Bran1 from '../../../public/images/bran-1.svg'
import Bran2 from '../../../public/images/bran-2.svg'
import Bran3 from '../../../public/images/bran-3.svg'
import Bran4 from '../../../public/images/bran-4.svg'
import Bran5 from '../../../public/images/bran-5.svg'
import Bran6 from '../../../public/images/bran-6.svg'
import Bran7 from '../../../public/images/bran-7.svg'
import Bran8 from '../../../public/images/bran-8.svg'
import Bran9 from '../../../public/images/bran-9.svg'


interface Props {
    white?: boolean
    second?: boolean
}

const BrandListBig: FC<Props> = ({ white, second }) => {
    return (
       <>
        <div className={white ? 'brands-list white' : 'brands-list'}>
            <div className='marquee big'>
                <div className="marquee__content">
                    {
                        second ? 
                        <>
                            <div className="brands-list--item big">
                                <Bran1 />
                            </div>
                            <div className="brands-list--item big">
                                <Bran2 />
                            </div>
                            <div className="brands-list--item big">
                                <Bran3 />
                            </div>
                            <div className="brands-list--item big">
                                <Bran4 />
                            </div>
                            <div className="brands-list--item big">
                                <Bran5 />
                            </div>
                            <div className="brands-list--item big">
                                <Bran6 />
                            </div>
                        </>:
                        <>
                            <div className="brands-list--item big">
                                <Brand1 />
                            </div>
                            <div className="brands-list--item big">
                                <Brand2 />
                            </div>
                            <div className="brands-list--item big">
                                <Brand3 />
                            </div>
                            <div className="brands-list--item big">
                                <Brand4 />
                            </div>
                            <div className="brands-list--item big">
                                <Brand5 />
                            </div>
                            <div className="brands-list--item big">
                                <Brand6 />
                            </div>
                        </>
                    }
                </div>
                <div className="marquee__content">
                    {
                        second ?
                        <>
                            <div className="brands-list--item big">
                                <Bran7 />
                            </div>
                            <div className="brands-list--item big">
                                <Bran8 />
                            </div>
                            <div className="brands-list--item big">
                                <Bran9 />
                            </div>
                            <div className="brands-list--item big">
                                <Bran1 />
                            </div>
                            <div className="brands-list--item big">
                                <Bran2 />
                            </div>
                            <div className="brands-list--item big">
                                <Bran3 />
                            </div>
                        </> 
                        :
                        <>
                            <div className="brands-list--item big">
                                <Brand1 />
                            </div>
                            <div className="brands-list--item big">
                                <Brand2 />
                            </div>
                            <div className="brands-list--item big">
                                <Brand3 />
                            </div>
                            <div className="brands-list--item big">
                                <Brand4 />
                            </div>
                            <div className="brands-list--item big">
                                <Brand5 />
                            </div>
                            <div className="brands-list--item big">
                                <Brand6 />
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
       </>
    )
}

export default BrandListBig