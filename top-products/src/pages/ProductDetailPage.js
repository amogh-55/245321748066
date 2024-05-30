// src/pages/ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CardMedia } from '@mui/material';
import { fetchProductById } from '../services/api';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const response = await fetchProductById(id);
      setProduct(response.data);
    };
    loadProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h2">{product.name}</Typography>
      <CardMedia
        component="img"
        height="300"
        image={product.imageUrl}
        alt={product.name}
      />
      <Typography variant="h5">Company: {product.company}</Typography>
      <Typography variant="h5">Category: {product.category}</Typography>
      <Typography variant="h5">Price: ${product.price}</Typography>
      <Typography variant="h5">Rating: {product.rating}⭐</Typography>
      <Typography variant="h5">Discount: {product.discount}%</Typography>
      <Typography variant="h5">
        Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
      </Typography>
      <Typography variant="body1">{product.description}</Typography>
    </Container>
  );
};

export default ProductDetailPage;
