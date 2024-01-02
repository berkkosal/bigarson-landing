import { Box } from '@mui/material'
import React from 'react'
import ContentCard from './ContentCard'
import { feedContent } from '../utils/Content'




const Feed = () => {

  const {section1,section2,section3,section4} = feedContent;
  

  return (
    <Box flex={5} bgcolor="pink" >
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      {feedContent.section1.title}
    </Box>
  )
}

export default Feed