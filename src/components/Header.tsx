import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { getCategories } from '../services/api';

interface HeaderProps {
  onCategorySelect: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const cartCount = useSelector((state: RootState) => state.cart.count);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">BUYBUY Ecommerce</h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Search className="w-6 h-6 text-gray-600" />
              </button>
              
              {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4">
                  <input
                    type="text"
                    placeholder="Search categories..."
                    className="w-full p-2 border rounded-md mb-2"
                    onChange={(e) => {
                      const searchTerm = e.target.value.toLowerCase();
                      const filtered = categories.filter(cat => 
                        cat.toLowerCase().includes(searchTerm)
                      );
                      if (filtered.length === 1) {
                        onCategorySelect(filtered[0]);
                      }
                    }}
                  />
                  <div className="max-h-48 overflow-y-auto">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
                        onClick={() => {
                          onCategorySelect(category);
                          setIsSearchOpen(false);
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};