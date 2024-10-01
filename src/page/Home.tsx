import React from 'react'
import { Container, Typography, Button, AppBar, Toolbar } from '@mui/material'

const Home: React.FC = () => {
  return (
    <Container>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>Home Page</Typography>
        </Toolbar>
      </AppBar>
      <Typography
        variant='h4'
        component='h1'
        gutterBottom
      >
        Welcome to the Home Page
      </Typography>
      <Button
        variant='contained'
        color='primary'
      >
        Click Me
      </Button>
    </Container>
  )
}

export default Home
