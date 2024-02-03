import React from 'react'
import { feedContent } from '../utils/Content/'
import ContentCard from './ContentCard'
import { Box, Stack } from '@mui/material'

export default function Section8() {
  const { section8 } = feedContent

  return (
    <Box>
      <Stack>
        <ContentCard data={section8} direction='right' />
      </Stack>
    </Box>
  )
}
