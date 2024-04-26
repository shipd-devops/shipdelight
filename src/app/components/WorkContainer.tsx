import React, { FC, useState, useRef, useEffect } from 'react'
import ArrowSimplified from '../../../public/images/arrow-simplified.svg'

interface Props {
    cards: any;
}
const WorkContainer: FC<Props> = ({ cards }) => {
    const [timer, setTimer] = useState(-1);
    const [activeSection, setActiveSection] = useState('none');
    const simplifiedWorklistRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimer(15);
            }
            });
        },
        {
            threshold: 0, // adjust as needed
        }
        );

        if (simplifiedWorklistRef.current) {
            observer.observe(simplifiedWorklistRef.current);
        }

        return () => {
        observer.disconnect();
        };
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (timer > 0) {
        interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 700);
        } else {
        if (interval !== null) {
            clearInterval(interval);
        }
        }

        return () => {
            if (interval !== null) {
              clearInterval(interval);
            }
        };
    }, [timer]);
    useEffect(() => {
        if(timer > 0 && timer <= 5) {
            setActiveSection('last')
        }
        else if(timer >= 6 && timer <= 10) {
            setActiveSection('second')
        }
        else if(timer >= 11 && timer <= 15) {
            setActiveSection('first')
        } else {
            setActiveSection('none')
        }
    }, [timer]);
    return (
       <>
            <div className="simplified-worklist" ref={simplifiedWorklistRef}>
                {cards.map((data: any, index:any) => (
                    <div className={`simplified-worklist--item ${activeSection}`} key={index}>
                        <div className="simplified-worklist--number">
                            <p>{index + 1}</p>
                        </div>
                        <div>
                            <p className='simplified-worklist--title'>{data.title}</p>
                            <p>{data.des}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={`common-section--arrow first ${timer >= 11 ? 'animation' : ''} ${timer > -1 && timer < 11 ? 'add' : ''}`}>
                <div className="common-section--arrow--bg"></div>
                <ArrowSimplified />
            </div>
            <div className={`common-section--arrow second ${timer >= 5 && timer <= 10 ? 'animation' : ''} ${timer > -1 && timer < 7 ? 'add' : ''}`}>
                <div className="common-section--arrow--bg"></div>
                <ArrowSimplified />
            </div>
       </>
    )
}

export default WorkContainer