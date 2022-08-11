import type { NextPage } from 'next'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Home: NextPage = () => {
  return (
    <Container>
      <Typography>Hello</Typography>
      <Button variant="contained">Contained</Button>
    </Container>
  )
}

export default Home
