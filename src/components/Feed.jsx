import { Box } from '@mui/material'
import React from 'react'
import ContentCard from './ContentCard'
import { feedContent } from '../utils/Content'
import { Carousel } from './Carousel'
import './Feed.css';



const Feed = () => {

  const { section1, section2, section3, section4 } = feedContent;


  return (
    <Box flex={5}  >
      <div className='section1-wrapper'>
        <ContentCard content={feedContent.section1} color='#F0F0F0' isEvenly={true} />
      </div>
      <div className='section1 carousel-wrapper'>
        <Carousel data={feedContent.section1.slides} />
      </div>
      <ContentCard className='section2-wrapper' content={feedContent.section2} color='#FFFFFF' />
      <ContentCard content={feedContent.section3} color='#F0F0F0' />
      <ContentCard content={feedContent.section4} color='#FFFFFF' />

    </Box>
  )
}

export default Feed