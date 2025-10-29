# Add Product - Quick Reference

## Method 1: Interactive Script (Easiest!)

```bash
cd /home/gmitch/yogi/yogi-website
node scripts/add-product.js
```

Answer the prompts, then copy/paste the output into `src/data/products.ts`

---

## Method 2: Copy Template (Fast!)

1. Open `PRODUCT_TEMPLATE.md`
2. Copy the product template
3. Fill in your values
4. Paste into `src/data/products.ts` before the closing `]`
5. **Don't forget the comma** after the previous product!

---

## Required Info (have ready):

- [ ] Amazon affiliate URL (with `yogiretriever-20` tag)
- [ ] Product name
- [ ] Price
- [ ] Image URL (right-click Amazon image → Open in new tab)
- [ ] Short description
- [ ] 2-4 tags
- [ ] Category (training-gear, hunting-equipment, dog-supplies, accessories, books-dvds)

## Recommended:

- [ ] Your personal story ("Why I Use This")
- [ ] Training levels (puppy, started, finished, professional)
- [ ] Star rating & review count from Amazon
- [ ] Mark as "Yogi's Pick" if it's a favorite

---

## After Adding:

1. Save `products.ts`
2. Check http://localhost:5174/store
3. Verify product appears correctly
4. Click "Shop on Amazon" to test link
5. ✅ Done!

---

## Quick Example

```typescript
{
  id: 'orange-dummy',
  name: 'SportDOG Orange Dummy',
  description: 'Bright orange training dummy for marking drills',
  price: 24.99,
  imageUrl: 'https://m.media-amazon.com/images/I/51abc123._AC_SL1500_.jpg',
  amazonUrl: 'https://www.amazon.com/dp/B001F0IDYY?tag=yogiretriever-20&linkCode=ogi&th=1',
  category: 'training-gear',
  tags: ['dummy', 'marking', 'training'],
  featured: true,
  inStock: true,
  rating: 4.7,
  reviewCount: 892,
  trustSignals: {
    yogiApproved: true,
    fieldTested: true,
  },
  trainingLevel: ['puppy', 'started'],
  whyIUseThis: 'Perfect for teaching Yogi to mark and retrieve.',
  huntingScenarios: ['waterfowl', 'upland'],
  breedRecommendations: ['all-breeds'],
  seasonalRelevance: ['year-round'],
  trainingApplications: ['marking', 'retrieves'],
},
```

Remember the comma before `]`!
