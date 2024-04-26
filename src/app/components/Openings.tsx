import React, { FC } from 'react'
import Link from 'next/link';
import { Collapse } from 'antd';
import PlusImage from '../../../public/images/chevrot-down-big.svg'
import MinusImage from '../../../public/images/chevrot-up-big.svg'

interface Props {
    data: any;
}
const Openings: FC<Props> = ({ data }) => {
    const handleChange = (key: string | string[]) => {
        console.log(key);
    };
    return (
        <Collapse
            className='opening-collapse'
            expandIconPosition="end"
            expandIcon={({ isActive }) => (isActive ? <PlusImage /> : <MinusImage />)}
            items={data} defaultActiveKey={['1']} onChange={handleChange}
        />
    )
}

export default Openings