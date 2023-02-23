import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function Filter({ setCategory }) {

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="category-filter">
          Category
        </InputLabel>
        <NativeSelect
          defaultValue={'home'}
          inputProps={{
            name: 'Category',
            id: 'category-filter',
          }}
          onChange={event => setCategory(event.target.value)}
        >
          <option value={'home'}>Home</option>
          <option value={'arts'}>Arts</option>
          <option value={'automobiles'}>Automobiles</option>
          <option value={'books'}>Books</option>
          <option value={'business'}>Business</option>
          <option value={'fashion'}>Fashion</option>
          <option value={'food'}>Food</option>
          <option value={'health'}>Health</option>
          <option value={'insider'}>Insider</option>
          <option value={'magazine'}>Magazine</option>
          <option value={'movies'}>Movies</option>
          <option value={'nyregion'}>NY Region</option>
          <option value={'obituaries'}>Obituaries</option>
          <option value={'opinion'}>Opinion</option>
          <option value={'politics'}>Politics</option>
          <option value={'realestate'}>Real Estate</option>
          <option value={'science'}>Science</option>
          <option value={'sports'}>Sports</option>
          <option value={'sundayreview'}>Sunday Review</option>
          <option value={'technology'}>Technology</option>
          <option value={'theater'}>Theater</option>
          <option value={'t-magazine'}>T-Magazine</option>
          <option value={'travel'}>Travel</option>
          <option value={'upshot'}>Upshot</option>
          <option value={'us'}>US</option>
          <option value={'world'}>World</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}