import { Box, Container, Stack } from '@mui/material';
import './Feed.css';
import { Section1 } from './Section1';
import { Section2 } from './Section2';
import { Section3 } from './Section3';
import { Section4 } from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';



const Feed = () => {



  return (
    <Box >
      <Container maxWidth="lg" sx={{paddingTop:'100px'}}>
        <Section1 />
        <Section2 />
        <Section3 />
        <h1 style={{textAlign:'center'}}>Özellikler</h1>
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </Container>
    </Box>
  )
}

export default Feed