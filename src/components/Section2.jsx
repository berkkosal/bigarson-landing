import React from 'react'
import { feedContent } from '../utils/Content/'
import { Box, Stack } from '@mui/material'


export const Section2 = () => {

  const { section2 } = feedContent

  return (
    <Box>
      <Stack direction='row'>
        <Stack flex={1} justifyContent='center' >
          <h1>{section2.title}</h1>
        </Stack>
        <Stack flex={1} justifyContent='center' alignItems='center'>
          <img
            className='section2-nopdf-img'
            src={section2.NoPdfMenu}
            alt='section2 image'
          />
        </Stack>
      </Stack>
    </Box>

  )
}
