# Alive Shoes - Premium Footwear Showcase

![Alive Shoes Banner](https://imgix.cosmicjs.com/45e02860-b93c-11f0-bd25-91d3b1dfc4ff-photo-1542291026-7eec264c27ff-1762232896518.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive e-commerce showcase platform for premium footwear. Built with Next.js 16 and Cosmic CMS, featuring dynamic product catalog, category filtering, and detailed product pages.

## ✨ Features

- 🛍️ **Dynamic Product Catalog** - Browse all shoes with beautiful product cards and hover effects
- 🏷️ **Category Filtering** - Filter products by Running Shoes, Casual Sneakers, and Athletic Trainers
- ⭐ **Featured Products** - Showcase top products prominently on the homepage
- 📱 **Responsive Design** - Optimized experience across all devices and screen sizes
- 🖼️ **Image Galleries** - Multiple high-quality product images with smooth transitions
- 💰 **Dynamic Pricing** - Real-time pricing and availability information
- 📏 **Size Selection** - Interactive size selector showing all available sizes
- 🎨 **Color Options** - Visual display of available color variations
- 🔍 **SEO Optimized** - Dynamic metadata for better search engine visibility
- ⚡ **Performance Optimized** - Fast loading with imgix image optimization

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=690989d4fb7423bbdde499be&clone_repository=69098b0ffb7423bbdde499dc)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Promote my shoe design for sales"

### Code Generation Prompt

> Based on the content model I created for "Promote my shoe design for sales", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Imgix** - Image optimization and transformation
- **Bun** - Fast JavaScript runtime and package manager

## 🚀 Getting Started

### Prerequisites

- Bun installed on your machine
- A Cosmic account with the shoe catalog content model

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching All Shoes

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: shoes } = await cosmic.objects
  .find({ type: 'shoes' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Shoe

```typescript
const { object: shoe } = await cosmic.objects
  .findOne({
    type: 'shoes',
    slug: 'aerostride-pro'
  })
  .depth(1)
```

### Fetching by Category

```typescript
const { objects: shoes } = await cosmic.objects
  .find({
    type: 'shoes',
    'metadata.category': categoryId
  })
  .depth(1)
```

### Fetching Featured Products

```typescript
const { objects: featuredShoes } = await cosmic.objects
  .find({
    type: 'shoes',
    'metadata.featured': true
  })
  .depth(1)
```

## 🎨 Cosmic CMS Integration

This application uses Cosmic CMS with two main object types:

### Shoes Object Type
- Product Name (text)
- Description (HTML textarea)
- Price (number)
- Product Images (multiple files)
- Available Sizes (checkboxes)
- Category (object relationship to Categories)
- Featured Product (switch)
- Color Options (text)

### Categories Object Type
- Category Name (text)
- Description (textarea)

The app uses the Cosmic SDK depth parameter to automatically fetch connected category data with each shoe, eliminating the need for separate queries.

## 📦 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Add environment variables in Netlify dashboard
4. Build command: `bun run build`
5. Publish directory: `.next`
6. Deploy!

## 🔧 Development Scripts

```bash
# Run development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Run linter
bun run lint

# Type check
bun run type-check
```

<!-- README_END -->