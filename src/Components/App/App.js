import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import getArticles from '../../api-calls.js';
import Home from '../Home/Home';
import Details from '../Details/Details';
import { Routes, Route } from 'react-router-dom'
import BadURL from '../BadURL/BadURL';

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

const theme = createTheme();

const App = () => {

  const [articles, setArticles] = useState([])
  const [category, setCategory] = useState('home')
  const [selected, setSelected] = useState(null)
  const [error, setError] = useState('')

  useEffect(() =>  {
    getArticles(category)
      .then(data => setArticles(data.results))
      .catch(err => setError('Apologies, there seems to be an error. Please try again'))
  }, [category])

  const showMore = (showCard) => {
    setSelected(articles.find(article => article.short_url === showCard.short_url))
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
          <Routes>
            <Route path='/' element={<Home articles={articles} category={category} setCategory={setCategory} showMore={showMore} selected={selected}/>} />
            <Route path='/:id' element={<Details selected={selected}/>} />
            <Route path='/*' element={<BadURL />}/>
          </Routes>
      </main>
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
    </ThemeProvider>
  );
}

export default App