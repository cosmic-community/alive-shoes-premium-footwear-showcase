// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Category interface
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    category_name: string;
    description?: string;
  };
}

// Product image interface
export interface ProductImage {
  url: string;
  imgix_url: string;
}

// Shoe interface
export interface Shoe extends CosmicObject {
  type: 'shoes';
  metadata: {
    product_name: string;
    description: string;
    price: number;
    product_images?: ProductImage[];
    available_sizes?: string[];
    category?: Category;
    featured: boolean;
    color_options?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Type guard for Shoe
export function isShoe(obj: CosmicObject): obj is Shoe {
  return obj.type === 'shoes';
}

// Type guard for Category
export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type === 'categories';
}