import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Filter from '../Filter/Filter';
import Grid from '@mui/material/Grid';

export default function Home ({ articles, showMore, selected, category, setCategory }) {

  return (
    <div>
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
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {articles.map((article) => (
            <Grid item key={article.short_url} id={article.published_date} xs={12} sm={6} md={4}>
              <Card 
                key={article.short_url}
                id={article.published_date}
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                {!article.multimedia[0].url ? 'No image available' :
                  <CardMedia
                    component="img"
                    image={article.multimedia[0].url}
                    alt={article.title}
                  />
                }
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {article.title}
                  </Typography>
                  <Typography>
                    {article.byline}
                  </Typography>
                  <Typography>
                    {article.published_date}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                  size="small" 
                  component={Link} 
                  to={`/${article.published_date}`}
                  onClick={() => {showMore(article)}} 
                  >
                    View Article Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}