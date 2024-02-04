import { Box, Stack } from '@mui/material'
import React from 'react'
import './ContentCard.css';


export default function ContentCard({ data, direction,pointed }) {
    return (
        <Box display="flex" justifyContent="center">
            <Stack
                direction={direction === 'right' ? 'row' : 'row-reverse'}
                alignItems="center"
                spacing={2}
            >
                <Stack sx={{ flex: 1 }}>
                    <h1 className='content-title'>{data.title}</h1>
                    <ul style={{ listStyleType: 'none'}} className='content-list' >
                        {data.listContent.map((item, index) => (
                            <li className='content-list-item' key={index}>{item}</li>
                        ))}
                    </ul>
                </Stack>
                
                <img
                    className='content-image'
                    src={data.imageUrl}
                    alt='Content'
                    style={{ width: '50%' }}
                />
            </Stack>
        </Box>
    )
}

