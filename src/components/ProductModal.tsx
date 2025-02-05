import React from 'react';
import { X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { Product } from '../types';
import { addToCart } from '../store/cartSlice';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product.id));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
        
        <div className="relative bg-white rounded-lg max-w-2xl w-full mx-auto shadow-xl">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="relative pt-[100%] bg-white">
              <img
                src={product.image}
                alt={product.title}
                className="absolute top-0 left-0 w-full h-full object-contain p-4"
              />
            </div>
            
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {product.title}
              </h2>
              
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                <div className="ml-4 flex items-center">
                  <span className="text-sm text-gray-600">
                    ★ {product.rating.rate}
                  </span>
                  <span className="text-sm text-gray-400 ml-1">
                    ({product.rating.count} reviews)
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
              
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-auto"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};