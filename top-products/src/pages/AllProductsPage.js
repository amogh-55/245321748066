// src/pages/AllProductsPage.js
import React, { useState, useEffect } from 'react';
import { Container, Pagination } from '@mui/material';
import { fetchProducts } from '../services/api';
import FilterBar from '../components/FilterBar';
import SortingBar from '../components/SortingBar';
import ProductList from '../components/ProductList';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetchProducts({ ...filters, sort, page });
      setProducts(response.data);
    };
    loadProducts();
  }, [filters, sort, page]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
  };

  return (
    <Container>
      <FilterBar onFilterChange={handleFilterChange} />
      <SortingBar onSortChange={handleSortChange} />
      <ProductList products={products} />
      <Pagination
        count={10}
        page={page}
        onChange={(event, value) => setPage(value)}
      />
    </Container>
  );
};

export default AllProductsPage;
