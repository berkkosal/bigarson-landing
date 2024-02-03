import React from 'react'
import { feedContent } from '../utils/Content/'
import ContentCard from './ContentCard'
import { Box, Stack } from '@mui/material'

export default function Section6() {
  const { section6 } = feedContent

  return (
    <Box>
      <Stack>
        <ContentCard data={section6} direction='right' />
      </Stack>
    </Box>
  )
}
