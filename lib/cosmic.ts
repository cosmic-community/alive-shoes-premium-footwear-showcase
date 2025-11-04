import { createBucketClient } from '@cosmicjs/sdk'
import type { Shoe, Category, CosmicResponse } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Fetch all shoes
export async function getAllShoes(): Promise<Shoe[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'shoes' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Shoe[]
  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null && 'status' in error && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch shoes')
  }
}

// Fetch featured shoes
export async function getFeaturedShoes(): Promise<Shoe[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'shoes',
        'metadata.featured': true
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Shoe[]
  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null && 'status' in error && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch featured shoes')
  }
}

// Fetch single shoe by slug
export async function getShoeBySlug(slug: string): Promise<Shoe | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'shoes',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object as Shoe
  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null && 'status' in error && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch shoe')
  }
}

// Fetch all categories
export async function getAllCategories(): Promise<Category[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Category[]
  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null && 'status' in error && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch categories')
  }
}

// Fetch shoes by category
export async function getShoesByCategory(categoryId: string): Promise<Shoe[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'shoes',
        'metadata.category': categoryId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Shoe[]
  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null && 'status' in error && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch shoes by category')
  }
}