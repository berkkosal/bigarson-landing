import { Box, Container, Stack } from '@mui/material';
import './Feed.css';
import { Section1 } from './Section1';
import { Section2 } from './Section2';
import { Section3 } from './Section3';
import { Section4 } from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';



const Feed = () => {



  return (
    <Box >
      <Container maxWidth="lg" >
        <Section1 />
        <Section2 />
        <Section3 />
        <h1>Özellikler</h1>
        <Section4 />
        <Section5 />
        <Section6 />
      </Container>
    </Box>
  )
}

export default Feed