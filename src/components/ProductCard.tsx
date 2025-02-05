import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative pt-[100%]">
        <img
          src={product.image}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.title}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center">
            <span className="text-sm text-gray-600">
              ★ {product.rating.rate}
            </span>
            <span className="text-sm text-gray-400 ml-1">
              ({product.rating.count})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};