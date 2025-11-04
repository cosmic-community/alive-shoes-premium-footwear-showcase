import Link from 'next/link'
import type { Shoe } from '@/types'

interface ProductCardProps {
  shoe: Shoe
}

export default function ProductCard({ shoe }: ProductCardProps) {
  const firstImage = shoe.metadata.product_images?.[0]
  const category = shoe.metadata.category
  
  return (
    <Link href={`/shoes/${shoe.slug}`} className="group block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          {firstImage ? (
            <img
              src={`${firstImage.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
              alt={shoe.metadata.product_name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No image
            </div>
          )}
          
          {/* Featured Badge */}
          {shoe.metadata.featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div className="p-6">
          {/* Category */}
          {category && (
            <p className="text-sm text-blue-600 font-medium mb-2">
              {category.title}
            </p>
          )}
          
          {/* Product Name */}
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
            {shoe.metadata.product_name}
          </h3>
          
          {/* Price */}
          <p className="text-2xl font-bold text-gray-900">
            ${shoe.metadata.price.toFixed(2)}
          </p>
          
          {/* Available Sizes */}
          {shoe.metadata.available_sizes && shoe.metadata.available_sizes.length > 0 && (
            <p className="text-sm text-gray-500 mt-2">
              Sizes: {shoe.metadata.available_sizes.join(', ')}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}