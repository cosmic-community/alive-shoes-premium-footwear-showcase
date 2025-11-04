'use client'

import { useState } from 'react'

interface SizeSelectorProps {
  sizes: string[]
}

export default function SizeSelector({ sizes }: SizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  
  if (!sizes || sizes.length === 0) {
    return null
  }
  
  return (
    <div className="grid grid-cols-4 gap-3">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className={`py-3 px-4 rounded-lg font-medium transition-colors ${
            selectedSize === size
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  )
}