'use client'

import { useState } from 'react'
import type { ProductImage } from '@/types'

interface ProductGalleryProps {
  images: ProductImage[]
  productName: string
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  // Guard: no images available
  if (!images || images.length === 0 || !images[0]) {
    return (
      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-400">No images available</p>
      </div>
    )
  }

  // Changed: Ensure selected index is within bounds to satisfy strict indexing checks
  const safeIndex =
    selectedImage >= 0 && selectedImage < images.length ? selectedImage : 0 // Changed: safe index calculation

  // Changed: Access image safely due to `noUncheckedIndexedAccess`
  const mainImage = images[safeIndex] ?? images[0] // Changed: fall back to first image

  // Changed: Derive a guaranteed string for img src or return fallback if still not available
  const fallbackImgix = images[0]?.imgix_url
  if (!fallbackImgix) {
    // Extremely defensive: if first image lacks imgix_url, show fallback
    return (
      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-400">No images available</p>
      </div>
    )
  }
  const mainImgix = mainImage?.imgix_url ?? fallbackImgix // Changed: guaranteed string after guard above

  return (
    <div>
      {/* Main Image */}
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
        <img
          src={`${mainImgix}?w=800&h=800&fit=crop&auto=format,compress`} // Changed: use safe mainImgix
          alt={`${productName} - Image ${safeIndex + 1}`}
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
                safeIndex === index ? 'ring-2 ring-blue-600' : 'ring-1 ring-gray-200 hover:ring-gray-300'
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