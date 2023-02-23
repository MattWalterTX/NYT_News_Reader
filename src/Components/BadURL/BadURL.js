import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container';

export default function BadURL () {
    return (
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography gutterBottom variant="h5" component="h2">
          Page not found. 
        </Typography>
        <Button variant="contained" component={Link} to="/" sx={() => ({
              backgroundColor: '#0E86D4', color: 'white', fontWeight: 'bold', width: '35%' })}>
                Go Home
        </Button>
      </Container>
    )
}