import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NewspaperIcon from '@mui/icons-material/Newspaper';
// import HomeCards from '../HomeCard/HomeCard';
import Filter from '../Filter/Filter';
import getArticles from '../../api-calls.js';
import Home from '../Home/Home';
import { Routes, Route } from 'react-router-dom'


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/MattWalterTX/NYT_News_Reader">
        Matt Walter
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

const App = () => {

  const [articles, setArticles] = useState([])
  const [category, setCategory] = useState('home')
  const [selected, setSelected] = useState(null)
  const [error, setError] = useState('')

  useEffect(() =>  {
    getArticles(category)
      .then(data => setArticles(data.results))
      .catch(error => setError('Apologies, there seems to be an error. Please try again'))
  }, [category])

  const showMore = (showCard) => {
    setSelected(showCard.short_url)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <NewspaperIcon sx={{ mr: 8 }} />
          <Typography variant="h6" color="inherit" noWrap>
            NYT News Reader
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Browse articles from the New York Times Top Stories below.
              Click on an article to view more details and get a direct link to the full article.
            </Typography>
            <Typography>
              Use the drop down menu to populate a list of current articles by category.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Filter setCategory={setCategory}/>
            </Stack>
          </Container>
        </Box>
          {/* End hero unit */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Home articles={articles} showMore={showMore}/>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          All articles are retrieved from {' '}
          <Link color="inherit" href="https://developer.nytimes.com/">
            NYT Developer API
          </Link> {'.'}
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default App