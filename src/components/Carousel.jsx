import React, { useEffect, useState } from 'react'
import './Carousel.css';
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";


export const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
        }, 4500);

        return () => {
            clearInterval(interval)
        }

    }, [data.length]);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }

    return (
        <div className='carousel'>
            
            {data.map((item, idx) => {
                return <img
                    src={item.src}
                    alt={item.alt}
                    key={idx}
                    className={slide === idx ? "slide" : "slide slide-hidden"} />
            })}
            <CiCircleChevLeft className='arrow arrow-left' onClick={prevSlide} />
            <CiCircleChevRight className='arrow arrow-right' onClick={nextSlide} />
            <span className='indicators'>
                {data.map((_, idx) => {
                    return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? 'indicator' : 'indicator indicator-inactive'}></button>
                })}
            </span>

        </div>
    )
}
