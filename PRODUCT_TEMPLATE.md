# Quick Product Addition Guide

## Option 1: Copy Template (Fastest)

Copy this template and fill in your values:

```typescript
{
  id: 'product-slug-name',                    // REQUIRED: lowercase-with-dashes
  name: 'Product Full Name',                  // REQUIRED
  description: 'Short description',           // REQUIRED
  price: 24.99,                               // REQUIRED
  imageUrl: 'https://m.media-amazon.com/...',// REQUIRED: from Amazon
  amazonUrl: 'https://www.amazon.com/dp/ASIN?tag=yogiretriever-20&linkCode=ogi&th=1', // REQUIRED
  category: 'training-gear',                  // REQUIRED: see categories below
  tags: ['tag1', 'tag2'],                     // REQUIRED: 2-4 tags
  inStock: true,                              // REQUIRED

  // OPTIONAL but recommended:
  featured: true,                             // Show on homepage?
  rating: 4.7,                                // Amazon rating
  reviewCount: 892,                           // Amazon review count
  trainingLevel: ['puppy', 'started'],        // Which training levels?
  whyIUseThis: 'Personal story about why you bought this and how you use it with Yogi',

  // Trust signals (at least one recommended):
  trustSignals: {
    yogiApproved: true,                       // Your top picks
    fieldTested: true,                        // Used in training
    proRecommended: true,                     // Endorsed by trainers
  },

  // Everything below is OPTIONAL:
  originalPrice: 29.99,                       // For showing discounts
  huntingScenarios: ['waterfowl', 'upland'],
  breedRecommendations: ['labs', 'goldens', 'all-breeds'],
  seasonalRelevance: ['year-round'],
  trainingApplications: ['marking', 'retrieves'],
  professionalEndorsement: 'Optional quote',
  fieldTestingReport: 'Optional testing notes',
  sizingGuide: 'Size information',
  urgencyLevel: 'low',
  bulkAvailable: true,
}
```

## Categories

Choose one:
- `'training-gear'` - Dummies, collars, whistles, etc.
- `'hunting-equipment'` - Vests, decoys, field gear
- `'dog-supplies'` - Food, treats, toys, crates
- `'accessories'` - Collars, leashes, etc.
- `'books-dvds'` - Training resources

## Training Levels

Choose one or more:
- `'puppy'` - 8 weeks to 6 months
- `'started'` - Basic obedience and retrieves
- `'finished'` - Advanced hunting skills
- `'professional'` - Competition/pro level

## Quick Steps

1. Get Amazon affiliate link from Amazon Associates
2. Find product image URL (right-click on Amazon image → Copy image address)
3. Copy template above
4. Fill in your values
5. Paste into `/src/data/products.ts` at the end of the products array
6. Save file - Vite will auto-reload!

## Example: Adding New Product

```typescript
// In /src/data/products.ts, add before the closing bracket:

export const products: Product[] = [
  // ... existing products ...

  {
    id: 'dokken-duck',
    name: 'Dokken DeadFowl Trainer Duck',
    description: 'Realistic waterfowl training dummy with throw rope. Soft body simulates real duck for gentle mouth training.',
    price: 32.99,
    imageUrl: 'https://m.media-amazon.com/images/I/71ABC123XYZ._AC_SL1500_.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B0ABCD1234?tag=yogiretriever-20&linkCode=ogi&th=1',
    category: 'training-gear',
    tags: ['waterfowl', 'retriever', 'duck', 'training'],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 234,
    trustSignals: {
      yogiApproved: true,
      fieldTested: true,
    },
    trainingLevel: ['started', 'finished', 'professional'],
    whyIUseThis: 'Perfect for teaching Yogi proper mouth pressure with realistic duck feel. The feather-like texture helps him learn to be gentle with waterfowl.',
    huntingScenarios: ['waterfowl', 'duck'],
    breedRecommendations: ['labs', 'goldens', 'chesapeakes'],
    seasonalRelevance: ['duck-season', 'training-season'],
    trainingApplications: ['soft-mouth', 'marking', 'water-retrieves'],
  },

] // ← Make sure to add comma after previous product!
```

## Getting Amazon Image URLs

1. Go to the product on Amazon
2. Right-click the main product image
3. Select "Open image in new tab"
4. Copy the URL from the address bar
5. Use the URL that looks like: `https://m.media-amazon.com/images/I/...`

## Testing Your New Product

1. Save the file
2. Visit http://localhost:5174/store
3. Look for your new product in the grid
4. Click "Shop on Amazon" to verify link works
5. Check that your "Why I Use This" shows up

## Troubleshooting

**Error: "Property 'xyz' does not exist"**
- Check spelling of all property names
- Make sure you have all REQUIRED fields

**Product doesn't show up**
- Check your category matches one of the 5 valid categories
- Make sure inStock is set to true
- Verify the product is inside the `products` array

**Image not loading**
- Verify the imageUrl starts with `https://`
- Use the Amazon image URL from right-click → open in new tab
- Make sure it's the full resolution image URL

**Need help?**
- Check existing products in the file for examples
- Every field in the template is optional except the ones marked REQUIRED
