import React from 'react'
import Sidebar from '../components/Sidebar'
import { Box, Stack } from '@mui/material'
import Feed from '../components/Feed'

const Home = () => {
    return (
        <Box bgcolor={'lightcoral'}>
            <Stack direction="row" spacing={2} justifyContent="center">
                <Sidebar />
                <Feed/>
            </Stack>
        </Box>
    )
}

export default Home