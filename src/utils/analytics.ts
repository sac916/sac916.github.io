// Analytics utility for Yogi Retrievers Amazon Affiliate Store
// Comprehensive tracking for conversions, trust signals, and user behavior

interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
  custom_parameters?: Record<string, any>
}

interface ProductAnalytics {
  product_id: string
  product_name: string
  category: string
  price: number
  trust_signals: {
    yogi_approved: boolean
    field_tested: boolean
    pro_recommended: boolean
  }
  training_level: string[]
  hunting_scenarios: string[]
}

// Google Analytics 4 Event Tracking
export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.custom_parameters
    })
  }

  // Also log to console in development
  if (import.meta.env.DEV) {
    console.log('📊 Analytics Event:', event)
  }
}

// Amazon Affiliate Link Click Tracking
export const trackAmazonClick = (product: ProductAnalytics) => {
  trackEvent({
    action: 'affiliate_click',
    category: 'ecommerce',
    label: product.product_name,
    value: product.price,
    custom_parameters: {
      product_id: product.product_id,
      product_category: product.category,
      yogi_approved: product.trust_signals.yogi_approved,
      field_tested: product.trust_signals.field_tested,
      pro_recommended: product.trust_signals.pro_recommended,
      training_levels: product.training_level.join(','),
      hunting_scenarios: product.hunting_scenarios.join(','),
      currency: 'USD'
    }
  })
}

// Trust Signal Interaction Tracking
export const trackTrustSignalClick = (signal_type: string, product_id: string) => {
  trackEvent({
    action: 'trust_signal_click',
    category: 'engagement',
    label: signal_type,
    custom_parameters: {
      product_id,
      signal_type
    }
  })
}

// Filter Usage Tracking
export const trackFilterUsage = (filter_type: string, filter_value: string, results_count: number) => {
  trackEvent({
    action: 'filter_applied',
    category: 'search',
    label: `${filter_type}:${filter_value}`,
    value: results_count,
    custom_parameters: {
      filter_type,
      filter_value,
      results_count
    }
  })
}

// Search Tracking
export const trackSearch = (search_term: string, results_count: number) => {
  trackEvent({
    action: 'search',
    category: 'search',
    label: search_term,
    value: results_count,
    custom_parameters: {
      search_term,
      results_count
    }
  })
}

// Page View Tracking with Enhanced Context
export const trackPageView = (page_path: string, page_title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title,
      page_location: window.location.href,
      page_path
    })
  }
}

// Mobile Interaction Tracking
export const trackMobileGesture = (gesture_type: string, element: string) => {
  trackEvent({
    action: 'mobile_gesture',
    category: 'mobile_ux',
    label: `${gesture_type}:${element}`,
    custom_parameters: {
      gesture_type,
      element,
      device_type: 'mobile'
    }
  })
}

// Conversion Funnel Tracking
export const trackFunnelStep = (step: string, product_id?: string) => {
  trackEvent({
    action: 'funnel_step',
    category: 'conversion',
    label: step,
    custom_parameters: {
      funnel_step: step,
      product_id: product_id || 'n/a'
    }
  })
}

// Product Card Engagement
export const trackProductEngagement = (action: string, product: ProductAnalytics) => {
  trackEvent({
    action: `product_${action}`,
    category: 'product_engagement',
    label: product.product_name,
    custom_parameters: {
      product_id: product.product_id,
      product_category: product.category,
      action,
      yogi_approved: product.trust_signals.yogi_approved
    }
  })
}

// Enhanced E-commerce Events for GA4
export const trackPurchaseIntent = (product: ProductAnalytics) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // GA4 Enhanced Ecommerce - Add to Cart equivalent for affiliate
    window.gtag('event', 'add_to_cart', {
      currency: 'USD',
      value: product.price,
      items: [{
        item_id: product.product_id,
        item_name: product.product_name,
        category: product.category,
        quantity: 1,
        price: product.price
      }]
    })
  }
}

// Seasonal Campaign Tracking
export const trackSeasonalInteraction = (season: string, action: string) => {
  trackEvent({
    action: 'seasonal_interaction',
    category: 'campaigns',
    label: `${season}:${action}`,
    custom_parameters: {
      season,
      action
    }
  })
}

// Performance Metrics for UX Improvements
export const trackUXMetric = (metric_name: string, value: number, context?: string) => {
  trackEvent({
    action: 'ux_metric',
    category: 'performance',
    label: metric_name,
    value,
    custom_parameters: {
      metric_name,
      context: context || 'general'
    }
  })
}

// Global analytics configuration
export const initializeAnalytics = (ga_measurement_id: string, gtm_id?: string) => {
  if (typeof window !== 'undefined') {
    // Google Analytics 4 setup
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ga_measurement_id}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    window.gtag = function() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', ga_measurement_id, {
      // Enhanced measurement for affiliate tracking
      enhanced_measurement: true,
      // Custom parameters for hunting/outdoor context
      custom_map: {
        custom_parameter_1: 'trust_signal_type',
        custom_parameter_2: 'hunting_scenario',
        custom_parameter_3: 'training_level'
      }
    })

    // GTM setup if provided
    if (gtm_id) {
      const gtmScript = document.createElement('script')
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtm_id}');
      `
      document.head.appendChild(gtmScript)
    }
  }
}

// Type declarations for global gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}