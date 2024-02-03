import React from 'react'
import { feedContent } from '../utils/Content/'
import ContentCard from './ContentCard'
import { Box, Stack } from '@mui/material'

export default function Section7() {
  const { section7 } = feedContent

  return (
    <Box>
      <Stack>
        <ContentCard data={section7} />
      </Stack>
    </Box>
  )
}
