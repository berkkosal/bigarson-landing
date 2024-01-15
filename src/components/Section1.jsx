import React from 'react'
import { Carousel } from './Carousel'
import { feedContent } from '../utils/Content/'
import { Box,Stack } from '@mui/material'


export const Section1 = () => {

    const { section1 } = feedContent

    return (
        <Box>
            <Stack direction='row' >
                <Stack justifyContent='center' spacing={2} flex={1} >
                    <h1>{section1.title}</h1>
                    <div>{section1.subtitle}</div>
                    <h2>{section1.listTitle}</h2>
                    <ul>
                        {section1.listContent.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Stack>


                <Stack justifyContent='center' flex={1.7} alignItems='flex-end'>
                    <Carousel data={section1.slides} />
                </Stack>

            </Stack>
        </Box>

    )
}
