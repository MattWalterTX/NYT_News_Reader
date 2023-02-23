import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import HomeCard from '../HomeCard/HomeCard';

export default function Home ({ articles, showMore }) {

  return (
    <Grid container spacing={4}>
      {articles.map((article) => (
        <Grid item key={article.short_url} xs={12} sm={6} md={4}>
          <Card key={article.short_url}
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              component="img"
              image={article.multimedia[0].url}
              alt={article.title}
            />
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
              <Button size="small" onClick={() => {showMore(article)}} component={Link} to={`/${article.short_url}`}>View Article Details</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}