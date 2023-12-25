import { Box, Button } from '@mui/material';
import React from 'react'

const Navbar = () => {



    return (
        <Box sx={{backgroundColor:'lightGreen'}}>
            <img src='bigarson-logo.png' style={{ width: '10rem', height: 'auto' }} />
            <Button>Özellikler</Button>
            <Button>Örnekler</Button>
            <Button>Ücretlendirme</Button>

        </Box>
    )
}

export default Navbar;