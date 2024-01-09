import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './styles.css'

const ContentCard = ({ content, color, isEvenly=false }) => {


  return (

    <Box sx={{ backgroundColor: color }}>

      <Stack  direction='row' justifyContent= {`${isEvenly ? 'space-evenly' : 'space-between' }`} >
        <Stack>
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
        </Stack>
        <Stack justifyContent='center' alignItems='center'>
          <img width='400px' height='auto' src={content.image} />
        </Stack>
      </Stack>




    </Box>
  )
}

export default ContentCard