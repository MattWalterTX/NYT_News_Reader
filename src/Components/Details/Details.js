import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import BadURL from '../BadURL/BadURL';
import Container from '@mui/material/Container';

export default function Details ({ selected }) {
    return (
      <div>
        {!selected ? <BadURL/> :
          <Container sx={{ py: 8 }} maxWidth="md">
            <Card 
              key={selected.short_url}
              id={selected.published_date}
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h4" component="h2">
                  {selected.title}
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  gutterBottom 
                >
                  <Typography variant="h5" component="h2">
                    {selected.byline}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {selected.published_date}
                  </Typography>
                </Stack>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  gutterBottom 
                >
                  <Typography gutterBottom variant="h6" component="h2">
                    Section: {selected.section}
                  </Typography>
                </Stack>
                <Typography gutterBottom>
                  {selected.abstract}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" component={Link} to={selected.url} sx={() => ({
                  backgroundColor: '#0E86D4', color: 'white', fontWeight: 'bold', width: '35%' })}>
                    View full article on NYT
                </Button>
              </CardActions>
              <CardMedia
                component="img"
                image="https://source.unsplash.com/random"
                alt="random"
              />
            </Card>
          </Container>
        }
      </div>
    )
}