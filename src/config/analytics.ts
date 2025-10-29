// Analytics Configuration for Yogi Retrievers
// Replace these with your actual tracking IDs

export const ANALYTICS_CONFIG = {
  // Replace with your actual Google Analytics 4 Measurement ID
  GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX', // TODO: Replace with real GA4 ID

  // Replace with your actual Google Tag Manager Container ID (optional)
  GTM_CONTAINER_ID: 'GTM-XXXXXXX', // TODO: Replace with real GTM ID

  // Amazon Attribution Tags (for enhanced affiliate tracking)
  AMAZON_ATTRIBUTION_TAG: 'yogiret-20', // TODO: Replace with your Amazon Associate tag

  // Enable/disable analytics in development
  ENABLE_IN_DEV: true,

  // Custom tracking parameters for hunting/training context
  CUSTOM_DIMENSIONS: {
    trust_signal_type: 'custom_parameter_1',
    hunting_scenario: 'custom_parameter_2',
    training_level: 'custom_parameter_3',
    product_category: 'custom_parameter_4',
    user_segment: 'custom_parameter_5'
  }
}

// Event Categories for consistent tracking
export const EVENT_CATEGORIES = {
  ECOMMERCE: 'ecommerce',
  ENGAGEMENT: 'engagement',
  SEARCH: 'search',
  NAVIGATION: 'navigation',
  CONVERSION: 'conversion',
  MOBILE_UX: 'mobile_ux',
  TRUST_SIGNALS: 'trust_signals',
  CAMPAIGNS: 'campaigns',
  PERFORMANCE: 'performance'
} as const

// Event Actions for affiliate store
export const EVENT_ACTIONS = {
  // Ecommerce events
  AFFILIATE_CLICK: 'affiliate_click',
  PURCHASE_INTENT: 'purchase_intent',
  PRODUCT_VIEW: 'product_view',

  // Engagement events
  TRUST_SIGNAL_CLICK: 'trust_signal_click',
  FILTER_APPLIED: 'filter_applied',
  SEARCH_PERFORMED: 'search',

  // Navigation events
  PAGE_VIEW: 'page_view',
  SECTION_VIEW: 'section_view',

  // Mobile UX events
  MOBILE_GESTURE: 'mobile_gesture',
  TOUCH_INTERACTION: 'touch_interaction',

  // Conversion funnel
  FUNNEL_STEP: 'funnel_step',
  CONVERSION_GOAL: 'conversion_goal'
} as const

// Funnel Steps for Conversion Tracking
export const FUNNEL_STEPS = {
  HOMEPAGE_VIEW: 'homepage_view',
  STORE_ENTRY: 'store_entry',
  PRODUCT_INTEREST: 'product_interest',
  FILTER_USAGE: 'filter_usage',
  PRODUCT_CLICK: 'product_click',
  AMAZON_REDIRECT: 'amazon_redirect'
} as const

// Trust Signal Types
export const TRUST_SIGNAL_TYPES = {
  YOGI_APPROVED: 'yogi_approved',
  FIELD_TESTED: 'field_tested',
  PRO_RECOMMENDED: 'pro_recommended',
  CUSTOMER_STORIES: 'customer_stories'
} as const