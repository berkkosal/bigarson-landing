import { Button } from '@mui/material';
import React from 'react'

const Navbar = () => {



    return (
        <>
            <img src='bigarson-logo.png' style={{ width: '100px', height: 'auto' }} />
            <div>Navbar</div>

            <Button>Özellikler</Button>
            <Button>Örnekler</Button>
            <Button>Ücretlendirme</Button>


        </>
    )
}

export default Navbar;