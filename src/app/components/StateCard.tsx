
import React, { FC } from 'react'

interface Props {
    stats: any;
    card?: boolean;
    two?: boolean;
}

const StateCard: FC<Props> = ({ stats, card, two }) => {
  return (
    <div className={`stat-card-container ${card ? 'card-container--cards' : ''} ${two ? 'two' : ''}`}>
       {stats.map((stat:any, index:number)=>(
        <div className={`stat-card-item ${card ? 'card' : ''}`} key={index}>
            <p>{stat.stats}</p>
            <p>{stat.description}</p>
        </div>
       ))}
    </div>
  )
}

export default StateCard