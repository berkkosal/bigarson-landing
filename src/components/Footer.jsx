import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#171717' }}>
            <Stack direction='row' justifyContent='space-between'>
                <Stack sx={{ flex: 1, paddingLeft: '200px'  }} >
                    <span className='footer-title'><Typography color='white'>Bigarson</Typography></span>
                    <span className='footer-info-1'><Typography color='white'>info@bigarson.com</Typography></span>
                    <span className='footer-info-2'><Typography color='white'>Adres</Typography></span>
                </Stack>
                <Stack sx={{ flex: 1 }}>
                    <ul style={{ listStyleType: 'none', paddingLeft: '200px' }}>
                        <li className='footer-list-item'><Typography color='white'>Ana Sayfa</Typography></li>
                        <li className='footer-list-item'><Typography color='white'>QR Kod Menü</Typography></li>
                        <li className='footer-list-item'><Typography color='white'>QR Kod Kiosk</Typography></li>
                        <li className='footer-list-item'><Typography color='white'>---</Typography></li>
                        <li className='footer-list-item'><Typography color='white'>Abone Ol</Typography></li>
                        <li className='footer-list-item'><Typography color='white'>Kullanım Koşulları</Typography></li>
                        <li className='footer-list-item'><Typography color='white'>Gizlilik Politikası</Typography></li>
                    </ul>
                </Stack>
            </Stack>
        </Box>



    )
}

export default Footer;