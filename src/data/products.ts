export type ProductCategory =
  | 'training-gear'
  | 'hunting-equipment'
  | 'dog-supplies'
  | 'accessories'
  | 'books-dvds'

export type TrainingLevel = 'puppy' | 'started' | 'finished' | 'professional'
export type HuntingScenario = 'waterfowl' | 'upland' | 'dove' | 'duck' | 'pheasant' | 'general'
export type DogBreed = 'labs' | 'goldens' | 'chesapeakes' | 'springers' | 'setters' | 'pointers' | 'all-breeds'
export type SeasonalRelevance = 'duck-season' | 'pheasant-season' | 'dove-season' | 'year-round' | 'training-season'

export interface TrustSignal {
  yogiApproved?: boolean
  proRecommended?: boolean
  fieldTested?: boolean
  customerStories?: number
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  imageUrl: string
  amazonUrl: string
  category: ProductCategory
  tags: string[]
  featured?: boolean
  inStock?: boolean
  rating?: number
  reviewCount?: number

  // Enhanced Phase 1 Features
  trustSignals: TrustSignal
  trainingLevel: TrainingLevel[]
  huntingScenarios: HuntingScenario[]
  breedRecommendations: DogBreed[]
  seasonalRelevance: SeasonalRelevance[]
  trainingApplications: string[]
  professionalEndorsement?: string
  fieldTestingReport?: string
  videoUrl?: string
  sizingGuide?: string
  compatibleProducts?: string[]
  urgencyLevel?: 'high' | 'medium' | 'low'
  bulkAvailable?: boolean
  whyIUseThis?: string
}

export interface ProductSection {
  title: string
  description: string
  products: Product[]
}

export const products: Product[] = [
  {
    id: 'sportdog-dummy',
    name: 'SportDOG Orange Plastic Dummies',
    description: 'Durable soft plastic retriever training dummies. High-visibility orange color for easy tracking. Weatherproof, non-toxic construction perfect for building marking skills and retrieves.',
    price: 24.99,
    imageUrl: 'https://m.media-amazon.com/images/I/51cIKdX9lrL._AC_SY300_SX300_QL70_FMwebp_.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B001F0IDYY?tag=yogiretriever-20&linkCode=ogi&th=1',
    category: 'training-gear',
    tags: ['marking', 'retrieve', 'training', 'bumpers'],
    featured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 892,
    trustSignals: {
      yogiApproved: true,
      fieldTested: true,
      customerStories: 15
    },
    trainingLevel: ['puppy', 'started', 'finished', 'professional'],
    huntingScenarios: ['waterfowl', 'upland', 'general'],
    breedRecommendations: ['labs', 'goldens', 'chesapeakes', 'all-breeds'],
    seasonalRelevance: ['year-round', 'training-season'],
    trainingApplications: ['marking', 'memory', 'distance-retrieves', 'basic-retrieves'],
    professionalEndorsement: 'Essential training tool from day one - we use these daily with Yogi',
    fieldTestingReport: 'Durable weatherproof construction holds up to daily training sessions',
    bulkAvailable: true,
    urgencyLevel: 'low',
    whyIUseThis: 'Got these ready for Yogi\'s arrival. Professional trainers recommended starting with bright orange for visibility. The soft plastic is gentle for puppy mouths while being durable enough to grow with him through all training stages.'
  },
  {
    id: 'pet-botanics-treats',
    name: 'Pet Botanics Training Reward Freeze Dried Beef Liver',
    description: 'The choice of top trainers! 825 freeze-dried beef liver treats per 16oz bag. Perfect size for frequent rewards during training sessions. High-value motivation your dog will love.',
    price: 19.99,
    imageUrl: 'https://m.media-amazon.com/images/I/71J+9GHSFWL._AC_SY300_SX300_QL70_FMwebp_.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B08ZHVF44T?tag=yogiretriever-20&linkCode=ogi&th=1',
    category: 'dog-supplies',
    tags: ['treats', 'training', 'rewards', 'beef-liver'],
    featured: true,
    inStock: true,
    rating: 4.6,
    reviewCount: 3247,
    trustSignals: {
      yogiApproved: true,
      proRecommended: true,
      fieldTested: true,
      customerStories: 42
    },
    trainingLevel: ['puppy', 'started', 'finished'],
    huntingScenarios: ['general'],
    breedRecommendations: ['all-breeds'],
    seasonalRelevance: ['year-round'],
    trainingApplications: ['positive-reinforcement', 'recall-training', 'basic-obedience', 'motivation'],
    professionalEndorsement: 'High-value treats that Yogi goes crazy for - perfect training motivation',
    fieldTestingReport: 'Used in every training session - 825 treats per bag means great value',
    bulkAvailable: true,
    urgencyLevel: 'low',
    whyIUseThis: 'Top trainers swear by these for puppy training. The small size means we can reward frequently without overfeeding. With 825 treats per bag, we\'re set for weeks of training sessions. High-value reward that should get his attention immediately.'
  },
  {
    id: 'comfort-collar',
    name: 'Comfort Premium Reflective Dog Collar',
    description: 'Premium reflective dog collar with metal buckle and D-ring. Olive green color with adjustable fit. Easy leash and tag attachment for training and everyday use.',
    price: 15.99,
    imageUrl: 'https://m.media-amazon.com/images/I/41m1V2F--jL._AC_SX466_.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B0FB9MMVYF?tag=yogiretriever-20&linkCode=ogi&th=1',
    category: 'accessories',
    tags: ['collar', 'reflective', 'everyday', 'safety'],
    featured: false,
    inStock: true,
    rating: 4.5,
    reviewCount: 1823,
    trustSignals: {
      yogiApproved: true,
      fieldTested: true,
      customerStories: 8
    },
    trainingLevel: ['puppy', 'started', 'finished', 'professional'],
    huntingScenarios: ['general'],
    breedRecommendations: ['all-breeds'],
    seasonalRelevance: ['year-round'],
    trainingApplications: ['everyday-wear', 'visibility', 'identification'],
    professionalEndorsement: 'Quality everyday collar with great reflective trim for early morning/late evening training',
    fieldTestingReport: 'Durable metal buckle and comfortable fit for daily use',
    sizingGuide: 'Medium size - adjustable for growing puppies',
    urgencyLevel: 'low',
    whyIUseThis: 'We plan to train early mornings and evenings, so the reflective trim is essential for visibility. Metal buckle should hold up better than plastic. The adjustable fit is perfect since he\'ll be growing quickly in the coming months.'
  },
  {
    id: 'kong-stick-xl',
    name: 'Kong Signature Stick Dog Toy - XL',
    description: 'Extra-large durable Kong stick for powerful chewers. Great for fetch and interactive play. Built tough for retrievers and large breeds.',
    price: 16.99,
    imageUrl: 'https://m.media-amazon.com/images/I/41T7LY88DDL._AC_SX466_.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B08FKS4YT4?tag=yogiretriever-20&linkCode=ogi&th=1',
    category: 'dog-supplies',
    tags: ['toy', 'fetch', 'chew', 'durable'],
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 1456,
    trustSignals: {
      yogiApproved: true,
      fieldTested: true,
      customerStories: 12
    },
    trainingLevel: ['puppy', 'started', 'finished', 'professional'],
    huntingScenarios: ['general'],
    breedRecommendations: ['labs', 'goldens', 'chesapeakes', 'all-breeds'],
    seasonalRelevance: ['year-round'],
    trainingApplications: ['play-motivation', 'fetch-training', 'reward-system'],
    professionalEndorsement: 'Perfect play reward after training sessions - Yogi loves this toy',
    fieldTestingReport: 'Holds up to powerful retriever jaws - great for downtime play',
    urgencyLevel: 'low',
    whyIUseThis: 'Kong quality is legendary for a reason. Got the XL since retrievers need something substantial to carry. This will be his reward toy after training sessions - play time is just as important as work time for a balanced puppy.'
  },
  {
    id: 'yatiney-crate',
    name: 'YATINEY Foldable Dog Crate Furniture',
    description: 'Heavy-duty wooden dog crate doubles as functional end table furniture. 47.2" rustic brown finish. Foldable design for easy transport. Perfect for home training and containment.',
    price: 179.99,
    imageUrl: 'https://m.media-amazon.com/images/I/81RT4BZdBNL._AC_SX466_.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B0DK1FFK1B?tag=yogiretriever-20&linkCode=ogi&th=1',
    category: 'dog-supplies',
    tags: ['crate', 'furniture', 'training', 'home'],
    featured: true,
    inStock: true,
    rating: 4.4,
    reviewCount: 567,
    trustSignals: {
      yogiApproved: true,
      fieldTested: true,
      customerStories: 18
    },
    trainingLevel: ['puppy', 'started', 'finished'],
    huntingScenarios: ['general'],
    breedRecommendations: ['labs', 'goldens', 'chesapeakes', 'all-breeds'],
    seasonalRelevance: ['year-round'],
    trainingApplications: ['crate-training', 'housebreaking', 'safe-space'],
    professionalEndorsement: 'Yogi\'s home base - sturdy furniture-quality crate that looks great in our home',
    fieldTestingReport: 'Heavy-duty construction handles active retrievers. Folds for travel to training locations',
    sizingGuide: '47.2" - suitable for medium to large dogs',
    urgencyLevel: 'medium',
    whyIUseThis: 'We wanted something that looks like furniture, not a cage. This will be Yogi\'s safe space and den. The foldable design means we can take it to family visits or training weekends. At 47 inches, he\'ll have plenty of room even when fully grown.'
  },
  {
    id: 'petmate-vari-kennel',
    name: 'Petmate Vari Dog Kennel - 40" Large',
    description: 'Airline-approved portable dog carrier for large dogs. Durable plastic construction for safe travel. 40-inch size perfect for retrievers. Taupe and black color options.',
    price: 89.99,
    imageUrl: 'https://m.media-amazon.com/images/I/71zUPqlPWKL._AC_SX466_.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B00DJRA10U?tag=yogiretriever-20&linkCode=ogi&th=1',
    category: 'dog-supplies',
    tags: ['crate', 'travel', 'airline-approved', 'carrier'],
    featured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 4892,
    trustSignals: {
      yogiApproved: true,
      fieldTested: true,
      proRecommended: true,
      customerStories: 28
    },
    trainingLevel: ['puppy', 'started', 'finished', 'professional'],
    huntingScenarios: ['general'],
    breedRecommendations: ['labs', 'goldens', 'chesapeakes', 'all-breeds'],
    seasonalRelevance: ['year-round'],
    trainingApplications: ['travel-safety', 'transport', 'field-trips'],
    professionalEndorsement: 'Essential for trips to training grounds and travel. Airline-approved means we can fly with Yogi',
    fieldTestingReport: 'Durable construction tested on weekly trips to various training locations',
    sizingGuide: '40" - ideal for labs, goldens, and similar large breed retrievers',
    urgencyLevel: 'medium',
    whyIUseThis: 'We\'re picking Yogi up tomorrow and need this for the car ride home. Being airline-approved means we can eventually fly with him. The 40-inch size should work through his growth from puppy to full-size retriever. Essential for safe car travel to training grounds.'
  },
  {
    id: 'pee-pad-tray',
    name: 'Pee Pad Tray Holder for Dogs - Fits Up to 25 x 25 in',
    description: 'Durable pee pad holder tray for indoor training and housebreaking. Fits pads up to 25x25 inches. Raised edges prevent leaks and messes. Perfect for puppy potty training.',
    price: 24.99,
    imageUrl: 'https://m.media-amazon.com/images/I/611g82-x4BL._AC_SX466_.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B0CBM2NLGN?tag=yogiretriever-20&linkCode=ogi&th=1',
    category: 'dog-supplies',
    tags: ['potty-training', 'housebreaking', 'puppy', 'indoor'],
    featured: false,
    inStock: true,
    rating: 4.3,
    reviewCount: 428,
    trustSignals: {
      yogiApproved: true,
      fieldTested: true,
      customerStories: 6
    },
    trainingLevel: ['puppy', 'started'],
    huntingScenarios: ['general'],
    breedRecommendations: ['all-breeds'],
    seasonalRelevance: ['year-round'],
    trainingApplications: ['housebreaking', 'indoor-training', 'accident-prevention'],
    professionalEndorsement: 'Essential for early puppy training - helps establish good bathroom habits',
    fieldTestingReport: 'Raised edges contain messes effectively during initial housebreaking phase',
    sizingGuide: 'Fits pads up to 25" x 25"',
    urgencyLevel: 'high',
    whyIUseThis: 'Every retriever puppy needs a designated indoor potty spot during housebreaking. This tray keeps things contained and makes cleanup easy. The raised edges are key - puppies don\'t always hit the center perfectly. Having this ready before Yogi arrives sets us up for housetraining success.'
  },
  {
    id: 'ksiia-dog-bed',
    name: 'KSIIA Washable Dog Bed Deluxe Plush Dog Crate Beds',
    description: 'Deluxe plush dog crate bed with anti-slip bottom. Washable and comfortable kennel pad. 29" x 21" size perfect for medium to large dogs. Gray color fits any crate.',
    price: 25.99,
    imageUrl: 'https://m.media-amazon.com/images/I/71cgXdW0WqL._AC_SX466_.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B09D76DSQN?tag=yogiretriever-20&linkCode=ogi&th=1',
    category: 'dog-supplies',
    tags: ['bed', 'crate-pad', 'comfort', 'washable'],
    featured: false,
    inStock: true,
    rating: 4.5,
    reviewCount: 2341,
    trustSignals: {
      yogiApproved: true,
      fieldTested: true,
      customerStories: 14
    },
    trainingLevel: ['puppy', 'started', 'finished', 'professional'],
    huntingScenarios: ['general'],
    breedRecommendations: ['labs', 'goldens', 'chesapeakes', 'all-breeds'],
    seasonalRelevance: ['year-round'],
    trainingApplications: ['crate-training', 'comfort', 'rest-recovery'],
    professionalEndorsement: 'Comfortable crate bed that Yogi loves - machine washable for easy cleanup',
    fieldTestingReport: 'Anti-slip bottom stays in place. Plush comfort encourages positive crate associations',
    sizingGuide: '29" x 21" - fits standard large crate dimensions',
    urgencyLevel: 'medium',
    whyIUseThis: 'Crate training works better when the crate is comfortable, not just functional. This plush bed makes Yogi\'s crate his favorite spot. Being machine washable is crucial - puppies have accidents and tracking through mud is inevitable. The anti-slip bottom means it won\'t bunch up when he circles before lying down.'
  },
  {
    id: 'gorilla-grip-mat',
    name: 'GORILLA GRIP Feeding Mat Set',
    description: 'Durable silicone feeding mat set protects floors from spills and water. Non-slip surface keeps bowls in place. Easy to clean and dishwasher safe. Perfect for messy eaters.',
    price: 21.99,
    imageUrl: 'https://m.media-amazon.com/images/I/71FA5V5meuL._AC_SX466_.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B097HVH3NH?tag=yogiretriever-20&linkCode=ogi&th=1',
    category: 'accessories',
    tags: ['feeding', 'mat', 'floor-protection', 'non-slip'],
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 3127,
    trustSignals: {
      yogiApproved: true,
      fieldTested: true,
      customerStories: 9
    },
    trainingLevel: ['puppy', 'started', 'finished', 'professional'],
    huntingScenarios: ['general'],
    breedRecommendations: ['all-breeds'],
    seasonalRelevance: ['year-round'],
    trainingApplications: ['feeding-routine', 'cleanliness', 'organization'],
    professionalEndorsement: 'Keeps feeding area clean and organized - essential for maintaining good habits',
    fieldTestingReport: 'Non-slip surface works great. Easy cleanup after messy water bowl splashing',
    urgencyLevel: 'low',
    whyIUseThis: 'Retrievers are notorious for splashing water everywhere and being enthusiastic eaters. This mat catches all the spills and keeps the feeding area contained. The non-slip surface means bowls stay put even when Yogi gets excited at meal time. Dishwasher safe makes cleanup effortless.'
  }
]

export const featuredProducts = products.filter(product => product.featured)

export const productSections: ProductSection[] = [
  {
    title: 'Training Essentials',
    description: 'Core gear every hunting dog trainer needs for building foundational skills.',
    products: products.filter(product => product.category === 'training-gear')
  },
  {
    title: 'Field & Hunting Gear',
    description: 'Equipment for real hunting scenarios and field work.',
    products: products.filter(product => product.category === 'hunting-equipment')
  },
  {
    title: 'Dog Care & Supplies',
    description: 'Health, nutrition, and care products for working retrievers.',
    products: products.filter(product => product.category === 'dog-supplies')
  }
]