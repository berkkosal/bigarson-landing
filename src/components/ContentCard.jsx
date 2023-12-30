import { Box } from '@mui/system'
import React from 'react'

const ContentCard = (content) => {
  return (
    <Box>
      <h2>{content.title}</h2>
      <p>{content.subtitle}</p>
      <img />
    </Box>
  )
}

export default ContentCard