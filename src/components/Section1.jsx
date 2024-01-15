import React from 'react'
import { Carousel } from './Carousel'
import { feedContent } from '../utils/Content/'
import { Box } from '@mui/material'


export const Section1 = () => {

    const { section1 } = feedContent

    return (
        <Box>
            <div>{section1.title}</div>
            <p>{section1.subtitle}</p>
            <Carousel data={section1.slides} />
        </Box>

    )
}
