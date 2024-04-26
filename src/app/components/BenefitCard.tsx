import React, { FC } from 'react'

interface Props {
    benefitData: any;
}
const BenefitCard: FC<Props> = ({ benefitData }) => {
    return (
        benefitData.map((data: any, i: number) => (
            <div className='benefit-info-item' key={i}>
                <h3 className='benefit-title'>{data.title}</h3>
                <p className='benefit-text'>{data.text}</p>
            </div>
        ))
    )
}
export default BenefitCard