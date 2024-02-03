import { Box, Stack } from '@mui/material'
import React from 'react'
import { feedContent } from '../utils/Content/'
import ContentCard from './ContentCard'

export default function Section5() {

  const { section5 } = feedContent

  return (
    <Box>
      <Stack>
        <ContentCard data={section5} />
      </Stack>
    </Box>

  )
}
