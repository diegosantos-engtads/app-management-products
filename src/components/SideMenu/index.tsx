'use client';

import { useState } from 'react';

export default function SideMenu() {
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [categories, setCategories] = useState<string[]>([]);

  const allCategories = ['Eletrônicos', 'Roupas', 'Livros', 'Esportes'];

  const handleCategoryChange = (category: string) => {
    setCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category],
    );
  };

  const clearFilters = () => {
    setPriceRange({ min: '', max: '' });
    setCategories([]);
  };

  const applyFilters = () => {
    console.log('Filtros aplicados:', { priceRange, categories });
  };

  return (
    <aside className='w-full max-w-xs p-4 bg-gray-100 rounded-2xl shadow-sm'>
      <h2 className='text-xl font-bold mb-4'>Filtros</h2>

      <div className='mb-6'>
        <h3 className='text-lg font-semibold mb-2'>Preço</h3>
        <div className='flex items-center gap-2'>
          <input
            type='number'
            placeholder='Min'
            value={priceRange.min}
            onChange={e => setPriceRange({ ...priceRange, min: e.target.value })}
            className='w-full p-2 rounded border border-gray-300'
          />
          <span className='text-gray-500'>-</span>
          <input
            type='number'
            placeholder='Max'
            value={priceRange.max}
            onChange={e => setPriceRange({ ...priceRange, max: e.target.value })}
            className='w-full p-2 rounded border border-gray-300'
          />
        </div>
      </div>

      <div className='mb-6'>
        <h3 className='text-lg font-semibold mb-2'>Categorias</h3>
        <ul className='space-y-1'>
          {allCategories.map(category => (
            <li key={category} className='flex items-center gap-2'>
              <input
                type='checkbox'
                id={category}
                checked={categories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <label htmlFor={category} className='text-sm'>
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Botões de ação */}
      <div className='flex justify-between gap-2'>
        <button
          onClick={applyFilters}
          className='flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg'
        >
          Aplicar
        </button>
        <button
          onClick={clearFilters}
          className='flex-1 bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-lg'
        >
          Limpar
        </button>
      </div>
    </aside>
  );
}
