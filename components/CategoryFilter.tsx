'use client'

import { useState } from 'react'
import type { Category } from '@/types'

interface CategoryFilterProps {
  categories: Category[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  if (!categories || categories.length === 0) {
    return null
  }
  
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => setSelectedCategory(null)}
        className={`px-6 py-3 rounded-lg font-medium transition-colors ${
          selectedCategory === null
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All Products
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            selectedCategory === category.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.title}
        </button>
      ))}
    </div>
  )
}