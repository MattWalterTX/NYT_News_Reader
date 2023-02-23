import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="category-filter-label">Category</InputLabel>
        <Select
          labelId="category-filter-label"
          id="category-filter"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={'home'}>Home</MenuItem>
          <MenuItem value={'arts'}>Arts</MenuItem>
          <MenuItem value={'automobiles'}>Automobiles</MenuItem>
          <MenuItem value={'books'}>Books</MenuItem>
          <MenuItem value={'business'}>Business</MenuItem>
          <MenuItem value={'fashion'}>Fashion</MenuItem>
          <MenuItem value={'food'}>Food</MenuItem>
          <MenuItem value={'health'}>Health</MenuItem>
          <MenuItem value={'insider'}>Insider</MenuItem>
          <MenuItem value={'magazine'}>Magazine</MenuItem>
          <MenuItem value={'movies'}>Movies</MenuItem>
          <MenuItem value={'nyregion'}>NY Region</MenuItem>
          <MenuItem value={'obituaries'}>Obituaries</MenuItem>
          <MenuItem value={'opinion'}>Opinion</MenuItem>
          <MenuItem value={'polotics'}>Polotics</MenuItem>
          <MenuItem value={'realestate'}>Real Estate</MenuItem>
          <MenuItem value={'science'}>Science</MenuItem>
          <MenuItem value={'sports'}>Sports</MenuItem>
          <MenuItem value={'sundayreview'}>Sunday Review</MenuItem>
          <MenuItem value={'technology'}>Technology</MenuItem>
          <MenuItem value={'theatre'}>Theatre</MenuItem>
          <MenuItem value={'t-magazine'}>T-Magazine</MenuItem>
          <MenuItem value={'travel'}>Travel</MenuItem>
          <MenuItem value={'upshot'}>Upshot</MenuItem>
          <MenuItem value={'us'}>US</MenuItem>
          <MenuItem value={'world'}>World</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}