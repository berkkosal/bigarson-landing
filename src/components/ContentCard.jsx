import { Box, Stack } from '@mui/material'
import React from 'react'

export default function ContentCard({ data }) {
    return (
        <Box>
            <Stack>
                <h1>{data.title}</h1>
                <ul>
                    {data.listContent.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </Stack>

            <img src={data.imageUrl} alt='Content' />

        </Box>
    )
}
