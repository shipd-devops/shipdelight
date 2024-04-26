
import Image from 'next/image';
import React, { FC, useState } from 'react'
import Link from 'next/link';

interface Props {
    slides: any;
}
const ImageTab: FC<Props> = ({ slides }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="image-tabs">
            <div className="image-tabs--nav">
                {slides.map((tab: any, index: number) => (
                    <div key={index} className={`image-tabs--tab ${activeTab === index ? 'active' : ''}`} onClick={() => setActiveTab(index)}>
                        <p className="image-tabs--nav--title">{tab.title}</p>
                        <p className="image-tabs--nav--text">{tab.text}</p>
                    </div>
                ))}
            </div>
            <div className="image-tabs--content">
                {slides.map((tab: any, index: number) => (
                    activeTab === index ? 
                    <div key={index} className="image-tabs--content--image">
                        <Image src={tab.image} alt="img" />
                    </div> : ''
                ))}
            </div>
        </div>
    )
}

export default ImageTab