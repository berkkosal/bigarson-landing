import React from 'react'
import { Carousel } from './Carousel'
import { feedContent } from '../utils/Content/'


export const Section1 = () => {

    const { section1 } = feedContent

    return (
        <>
            <div>Section1</div>
            {console.log(section1)}
            <Carousel data={section1.slides}/>
        </>

    )
}
