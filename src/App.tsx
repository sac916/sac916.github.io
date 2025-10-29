import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Home } from '@/components/Home'
import { Store } from '@/components/Store'
import { initializeAnalytics, trackPageView } from '@/utils/analytics'
import { ANALYTICS_CONFIG } from '@/config/analytics'

function App() {
  const location = useLocation()

  // Initialize analytics on app load
  useEffect(() => {
    if (ANALYTICS_CONFIG.GA4_MEASUREMENT_ID && ANALYTICS_CONFIG.GA4_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      initializeAnalytics(
        ANALYTICS_CONFIG.GA4_MEASUREMENT_ID,
        ANALYTICS_CONFIG.GTM_CONTAINER_ID && ANALYTICS_CONFIG.GTM_CONTAINER_ID !== 'GTM-XXXXXXX'
          ? ANALYTICS_CONFIG.GTM_CONTAINER_ID
          : undefined
      )
    }
  }, [])

  // Track page views on route changes
  useEffect(() => {
    const pageTitle = location.pathname === '/' ? 'Yogi Retrievers - Home' :
                     location.pathname === '/store' ? 'Yogi Retrievers - Store' :
                     'Yogi Retrievers'

    trackPageView(location.pathname, pageTitle)
  }, [location])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Layout>
  )
}

export default App
