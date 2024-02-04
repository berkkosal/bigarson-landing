import { Box, Button, Stack } from '@mui/material'
import { feedContent } from '../utils/Content/'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";


export const Section3 = () => {
  const { section3 } = feedContent

  return (
    <Box>
      <Stack>

        <Stack alignItems='center'>
          <h1>{section3.title}</h1>
        </Stack>

        <Stack direction='row' spacing={8} justifyContent='center' alignItems='center'>
          <div>
            <Stack direction='column' alignItems='center'>
              <img className='section3-icon' src={section3.icon1} />
              <span>Kayıt olun</span>
            </Stack>
          </div>
          <FaArrowRight />
          <div>
            <Stack direction='column' alignItems='center'>
              <img className='section3-icon' src={section3.icon2} />
              <span>Menünüzün içeriğini girin</span>
            </Stack>
          </div>
          <FaArrowRight />
          <div>
            <Stack direction='column' alignItems='center'>
              <img className='section3-icon' src={section3.icon3} />
              <span>QR Kodu bastırın</span>
            </Stack>
          </div>
        </Stack>

        <Stack sx={{ margin: '3%' }} direction='row' justifyContent='center' spacing={4}>
          <Button sx={{ width: '150px' }} variant='contained'>{section3.buttonText1}</Button>
          <Button sx={{ width: '150px' }} variant='outlined'>{section3.buttonText2}</Button>
        </Stack>


      </Stack>

    </Box>
  )
}
