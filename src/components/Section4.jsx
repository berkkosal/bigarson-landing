import React from 'react'
import ContentCard from './ContentCard'
import { feedContent } from '../utils/Content/'
import { Box, Stack } from '@mui/material'

export const Section4 = () => {

  const { section4 } = feedContent

  return (
    <Box >
      <Stack>
        <ContentCard data={section4} direction='right' />
      </Stack>
    </Box>
  )
}
