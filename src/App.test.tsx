import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders product catalog', () => {
  render(<App />);
  const titleElement = screen.getByText(/Product Catalog/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders search input', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/Search products by name or category/i);
  expect(searchInput).toBeInTheDocument();
});

test('renders products', () => {
  render(<App />);
  const productsCountText = screen.getByText(/Showing all 20 products/i);
  expect(productsCountText).toBeInTheDocument();
});
