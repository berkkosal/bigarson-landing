import { Box } from '@mui/material'
import React from 'react'
import ContentCard from './ContentCard'
import { feedContent } from '../utils/Content'




const Feed = () => {

  const { section1, section2, section3, section4 } = feedContent;


  return (
    <Box flex={5} bgcolor="pink" >

      <ContentCard content={feedContent.section1} color='blue' />
      <ContentCard content={feedContent.section2} color='red' />



    </Box>
  )
}

export default Feed