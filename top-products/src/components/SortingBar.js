// src/components/SortingBar.js
import React from 'react';
import { Box, Button } from '@mui/material';

const SortingBar = ({ onSortChange }) => {
  return (
    <Box>
      <Button onClick={() => onSortChange('price')}>Sort by Price</Button>
      <Button onClick={() => onSortChange('rating')}>Sort by Rating</Button>
      <Button onClick={() => onSortChange('discount')}>Sort by Discount</Button>
    </Box>
  );
};

export default SortingBar;
