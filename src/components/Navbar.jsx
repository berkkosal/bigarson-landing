import { Box, Button, Stack } from '@mui/material';
import React from 'react'

const Navbar = () => {


    return (
        <Box sx={{ backgroundColor: '' }} p={0.5}>
            <Stack direction="row" spacing={2} justifyContent="space-between" sx={{
                paddingLeft:'0.7rem',
                paddingTop:'0.7rem'
                }}>
                <div className='logoWrapper'>
                    <img src='bigarson-logo.png' style={{ width: '10rem', height: 'auto' }} />
                </div>
                <Stack direction="row" sx={{
                    paddingRight:'1rem',
                    paddingBottom:'0.5rem'
                }}>
                    <Button>Özellikler</Button>
                    <Button>Örnekler</Button>
                    <Button>Ücretlendirme</Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Navbar;