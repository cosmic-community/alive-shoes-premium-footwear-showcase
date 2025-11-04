import ProductCard from './ProductCard'
import type { Shoe } from '@/types'

interface FeaturedProductsProps {
  shoes: Shoe[]
}

export default function FeaturedProducts({ shoes }: FeaturedProductsProps) {
  if (!shoes || shoes.length === 0) {
    return null
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {shoes.map((shoe) => (
        <ProductCard key={shoe.id} shoe={shoe} />
      ))}
    </div>
  )
}