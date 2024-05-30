// src/components/FilterBar.js
import React, { useState } from 'react';
import { Box, TextField, MenuItem, Button } from '@mui/material';

const FilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    rating: '',
    priceRange: '',
    availability: ''
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleFilter = () => {
    onFilterChange(filters);
  };

  return (
    <Box>
      <TextField
        select
        label="Category"
        name="category"
        value={filters.category}
        onChange={handleChange}
      >
        <MenuItem value="category1">Category 1</MenuItem>
        <MenuItem value="category2">Category 2</MenuItem>
        {/* Add more categories as needed */}
      </TextField>
      <TextField
        select
        label="Company"
        name="company"
        value={filters.company}
        onChange={handleChange}
      >
        <MenuItem value="company1">Company 1</MenuItem>
        <MenuItem value="company2">Company 2</MenuItem>
        {/* Add more companies as needed */}
      </TextField>
      <TextField
        select
        label="Rating"
        name="rating"
        value={filters.rating}
        onChange={handleChange}
      >
        <MenuItem value="1">1 Star</MenuItem>
        <MenuItem value="2">2 Stars</MenuItem>
        {/* Add more ratings as needed */}
      </TextField>
      <TextField
        select
        label="Price Range"
        name="priceRange"
        value={filters.priceRange}
        onChange={handleChange}
      >
        <MenuItem value="low">Low to High</MenuItem>
        <MenuItem value="high">High to Low</MenuItem>
      </TextField>
      <TextField
        select
        label="Availability"
        name="availability"
        value={filters.availability}
        onChange={handleChange}
      >
        <MenuItem value="inStock">In Stock</MenuItem>
        <MenuItem value="outOfStock">Out of Stock</MenuItem>
      </TextField>
      <Button onClick={handleFilter}>Apply Filters</Button>
    </Box>
  );
};

export default FilterBar;
