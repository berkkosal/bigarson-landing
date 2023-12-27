import { Box, Button, Stack } from '@mui/material';
import React from 'react'

const Navbar = () => {


    return (
        <Box sx={{ backgroundColor: 'lightGreen' }} p={0.5}>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <div>
                    <img src='bigarson-logo.png' style={{ width: '10rem', height: 'auto' }} />
                </div>
                <Button>Özellikler</Button>
                <Button>Örnekler</Button>
                <Button>Ücretlendirme</Button>
            </Stack>
        </Box>
    )
}

export default Navbar;