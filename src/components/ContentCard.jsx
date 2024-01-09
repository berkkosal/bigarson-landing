import { Box } from '@mui/system'
import React from 'react'
 
const ContentCard = ({content, color}) => {
  return (

    <Box sx={{ backgroundColor: color }}>
      <h2>{content.title}</h2>
      <p>{content.subtitle}</p>

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

      <img src={content.image}/>



    </Box>
  )
}

export default ContentCard