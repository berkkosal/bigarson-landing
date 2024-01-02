import { Box } from '@mui/system'
import React from 'react'

const ContentCard = ({ content, color }) => {
  console.log(content);
  return (

    <Box sx={{ backgroundColor: color }}>
      <h2>{content.title}</h2>
      <p>{content.subtitle}</p>
      <img src={content.imageUrl} alt='' />


      {content.listContent && content.listContent.length > 0 ? (
        <>
          <h3>{content.listTitle}</h3>
          <ul>
            {content.listContent.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      ) : ''}



    </Box>
  )
}

export default ContentCard