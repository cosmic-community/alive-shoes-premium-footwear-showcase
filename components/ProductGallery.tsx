'use client'

import { useState } from 'react'
import type { ProductImage } from '@/types'

interface ProductGalleryProps {
  images: ProductImage[]
  productName: string
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  
  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-400">No images available</p>
      </div>
    )
  }
  
  return (
    <div>
      {/* Main Image */}
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
        <img
          src={`${images[selectedImage].imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
          alt={`${productName} - Image ${selectedImage + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Thumbnail Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square rounded-lg overflow-hidden ${
                selectedImage === index
                  ? 'ring-2 ring-blue-600'
                  : 'ring-1 ring-gray-200 hover:ring-gray-300'
              }`}
            >
              <img
                src={`${image.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}