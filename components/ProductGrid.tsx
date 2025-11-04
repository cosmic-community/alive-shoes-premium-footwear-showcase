import ProductCard from './ProductCard'
import type { Shoe } from '@/types'

interface ProductGridProps {
  shoes: Shoe[]
}

export default function ProductGrid({ shoes }: ProductGridProps) {
  if (!shoes || shoes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No products found.</p>
      </div>
    )
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {shoes.map((shoe) => (
        <ProductCard key={shoe.id} shoe={shoe} />
      ))}
    </div>
  )
}