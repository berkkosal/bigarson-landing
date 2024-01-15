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
          <Stack direction='column'>
            <img className='section3-icon' src={section3.icon1} />
          </Stack>
          <FaArrowRight />

          <Stack direction='column'>
            <img className='section3-icon' src={section3.icon2} />
          </Stack>

          <FaArrowRight />

          <Stack direction='column'>
            <img className='section3-icon' src={section3.icon3} />
          </Stack>
        </Stack>

        <Stack direction='row' justifyContent='center' spacing={4}>
          <Button variant='contained'>{section3.buttonText1}</Button>
          <Button variant='outlined'>{section3.buttonText2}</Button>
        </Stack>

      </Stack>

    </Box>
  )
}
