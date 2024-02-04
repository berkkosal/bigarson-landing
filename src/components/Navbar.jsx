import { Box, Button, Stack, Divider } from '@mui/material';
import React from 'react';

const Navbar = () => {
    return (
        <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: '#ffffff', borderBottom: '1px solid #e0e0e0' }} p={0.5}>
            <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ paddingLeft: '0.7rem', paddingTop: '0.7rem' }}>
                <div className='logoWrapper'>
                    <img src='bigarson-logo.png' style={{ width: '10rem', height: 'auto', paddingLeft:'10rem' }} alt='logo' />
                </div>
                <Stack direction="row" sx={{ paddingRight: '10rem', paddingBottom: '0.5rem' }}>
                    <Button>Özellikler</Button>
                    <Button>Örnekler</Button>
                    <Button>Ücretlendirme</Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Navbar;
