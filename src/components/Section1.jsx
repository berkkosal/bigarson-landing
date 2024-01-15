import React from 'react'
import { Carousel } from './Carousel'
import { feedContent } from '../utils/Content/'
import { Box, Container, Stack } from '@mui/material'


export const Section1 = () => {

    const { section1 } = feedContent

    return (
        <Box>
                <Stack direction='row' >
                    <Stack justifyContent='center' spacing={15} flex={1} textAlign='center'>
                        <div>{section1.title}</div>
                        <p>{section1.subtitle}</p>
                    </Stack>
                    <Stack flex={2} alignItems='flex-end'>
                        <Carousel data={section1.slides} />
                    </Stack>
                </Stack>
        </Box>

    )
}
