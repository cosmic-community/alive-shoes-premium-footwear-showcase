// app/shoes/[slug]/page.tsx
import { getShoeBySlug, getAllShoes } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ProductGallery from '@/components/ProductGallery'
import SizeSelector from '@/components/SizeSelector'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const shoes = await getAllShoes()
  
  return shoes.map((shoe) => ({
    slug: shoe.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const shoe = await getShoeBySlug(slug)
  
  if (!shoe) {
    return {
      title: 'Product Not Found',
    }
  }
  
  return {
    title: `${shoe.metadata.product_name} - Alive Shoes`,
    description: shoe.metadata.description.replace(/<[^>]*>/g, '').substring(0, 160),
  }
}

export default async function ShoeDetailPage({ params }: PageProps) {
  const { slug } = await params
  const shoe = await getShoeBySlug(slug)
  
  if (!shoe) {
    notFound()
  }
  
  const images = shoe.metadata.product_images || []
  const category = shoe.metadata.category
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          Home
        </Link>
        <span className="mx-2">/</span>
        {category && (
          <>
            <span className="text-gray-600">{category.title}</span>
            <span className="mx-2">/</span>
          </>
        )}
        <span className="text-gray-900">{shoe.metadata.product_name}</span>
      </nav>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <ProductGallery images={images} productName={shoe.metadata.product_name} />
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{shoe.metadata.product_name}</h1>
          
          {/* Category Badge */}
          {category && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {category.title}
              </span>
            </div>
          )}
          
          {/* Price */}
          <div className="mb-6">
            <span className="text-3xl font-bold">${shoe.metadata.price.toFixed(2)}</span>
          </div>
          
          {/* Description */}
          <div 
            className="prose prose-lg mb-8"
            dangerouslySetInnerHTML={{ __html: shoe.metadata.description }}
          />
          
          {/* Size Selection */}
          {shoe.metadata.available_sizes && shoe.metadata.available_sizes.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Select Size</h3>
              <SizeSelector sizes={shoe.metadata.available_sizes} />
            </div>
          )}
          
          {/* Color Options */}
          {shoe.metadata.color_options && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Color Options</h3>
              <p className="text-gray-600">{shoe.metadata.color_options}</p>
            </div>
          )}
          
          {/* Add to Cart Button */}
          <button className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}