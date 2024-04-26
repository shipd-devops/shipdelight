import React, { FC } from 'react'

interface Props {
    workflowData: any;
}
const WorkFlowCard: FC<Props> = ({ workflowData }) => {
  return (
    <div className='workflow-items'>
        {
            workflowData.map((data:any, i:number)=>(
                <div className='workflow-item' key={i}>
                    <div>
                        <p className=''>{i+1}</p>
                    </div>
                    <div className='workflow-info'>
                        <p>{data.title}</p>
                        <p className='workflow-text'>{data.text}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default WorkFlowCard