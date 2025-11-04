import { getAllShoes, getFeaturedShoes, getAllCategories } from '@/lib/cosmic'
import ProductGrid from '@/components/ProductGrid'
import CategoryFilter from '@/components/CategoryFilter'
import FeaturedProducts from '@/components/FeaturedProducts'

export const revalidate = 60

export default async function HomePage() {
  const [allShoes, featuredShoes, categories] = await Promise.all([
    getAllShoes(),
    getFeaturedShoes(),
    getAllCategories()
  ])
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Premium Footwear Collection
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our curated selection of shoes designed for performance, comfort, and style
        </p>
      </section>
      
      {/* Featured Products */}
      {featuredShoes.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <FeaturedProducts shoes={featuredShoes} />
        </section>
      )}
      
      {/* Category Filter */}
      <section className="mb-8">
        <CategoryFilter categories={categories} />
      </section>
      
      {/* All Products */}
      <section>
        <h2 className="text-3xl font-bold mb-8">All Products</h2>
        <ProductGrid shoes={allShoes} />
      </section>
    </div>
  )
}