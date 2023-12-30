import { Box } from '@mui/material'
import React from 'react'
import ContentCard from './ContentCard'


const feedContent = {
  title1:
}

const Feed = () => {
  return (
    <Box flex={5} bgcolor="pink" >
      <ContentCard  />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </Box>
  )
}

export default Feed