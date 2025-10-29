#!/usr/bin/env node

/**
 * Product Addition Helper Script
 *
 * Usage:
 *   node scripts/add-product.js
 *
 * This script will prompt you for product information and generate
 * a product object ready to paste into products.ts
 */

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('\n🐕 Yogi Retrievers Product Addition Tool\n');
  console.log('This will help you quickly add a new product.\n');

  // Required fields
  const amazonUrl = await question('1. Amazon Affiliate URL (with yogiretriever-20 tag): ');
  const name = await question('2. Product Name: ');
  const price = await question('3. Price (e.g., 24.99): ');
  const imageUrl = await question('4. Amazon Image URL (right-click → open in new tab → copy URL): ');
  const description = await question('5. Short Description (1-2 sentences): ');

  console.log('\n📦 Category - Choose one:');
  console.log('  1) training-gear');
  console.log('  2) hunting-equipment');
  console.log('  3) dog-supplies');
  console.log('  4) accessories');
  console.log('  5) books-dvds');
  const categoryChoice = await question('Category (1-5): ');
  const categories = ['training-gear', 'hunting-equipment', 'dog-supplies', 'accessories', 'books-dvds'];
  const category = categories[parseInt(categoryChoice) - 1] || 'dog-supplies';

  const tags = await question('6. Tags (comma-separated, e.g., dummy,training,marking): ');

  // Optional but recommended
  console.log('\n✨ Optional Fields (press Enter to skip):');
  const featured = await question('Featured on homepage? (y/n, default n): ');
  const rating = await question('Amazon Rating (e.g., 4.7): ');
  const reviewCount = await question('Review Count (e.g., 892): ');
  const whyIUseThis = await question('Why do you use this? (your personal story): ');

  console.log('\n🎯 Training Levels (comma-separated):');
  console.log('  Options: puppy, started, finished, professional');
  const trainingLevel = await question('Training Levels: ');

  console.log('\n⭐ Trust Signals:');
  const yogiApproved = await question('Yogi\'s Pick? (y/n, default n): ');
  const fieldTested = await question('Field Tested? (y/n, default y): ');
  const proRecommended = await question('Pro Recommended? (y/n, default n): ');

  // Generate ID from name
  const id = name.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 50);

  // Parse tags
  const tagArray = tags.split(',').map(t => t.trim()).filter(t => t);

  // Parse training levels
  const trainingLevelArray = trainingLevel
    ? trainingLevel.split(',').map(t => t.trim()).filter(t => t)
    : ['puppy', 'started'];

  // Build the product object
  const product = {
    id,
    name,
    description,
    price: parseFloat(price),
    imageUrl,
    amazonUrl,
    category,
    tags: tagArray,
    featured: featured.toLowerCase() === 'y',
    inStock: true,
    ...(rating && { rating: parseFloat(rating) }),
    ...(reviewCount && { reviewCount: parseInt(reviewCount) }),
    trustSignals: {
      yogiApproved: yogiApproved.toLowerCase() === 'y',
      fieldTested: fieldTested.toLowerCase() !== 'n',
      ...(proRecommended.toLowerCase() === 'y' && { proRecommended: true }),
    },
    trainingLevel: trainingLevelArray,
    huntingScenarios: ['general'],
    breedRecommendations: ['all-breeds'],
    seasonalRelevance: ['year-round'],
    trainingApplications: ['training'],
    ...(whyIUseThis && { whyIUseThis }),
  };

  // Output the result
  console.log('\n\n📋 Copy and paste this into src/data/products.ts:\n');
  console.log('─'.repeat(60));
  console.log(JSON.stringify(product, null, 2).replace(/"([^"]+)":/g, '$1:'));
  console.log('─'.repeat(60));
  console.log('\n✅ Don\'t forget to add a comma after the previous product!\n');

  rl.close();
}

main().catch(console.error);
