import React from 'react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Category: <span className="font-medium">{product.category}</span>
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
          <span className="text-xs text-gray-500">
            ID: {product.id}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;