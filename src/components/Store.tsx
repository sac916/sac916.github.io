import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/ProductCard"
import { products, productSections } from "@/data/products"
import type { ProductCategory } from "@/data/products"
import { Search, ShoppingBag, Crown } from "lucide-react"
import { trackSearch, trackFilterUsage, trackFunnelStep, trackTrustSignalClick } from "@/utils/analytics"
import { FUNNEL_STEPS, TRUST_SIGNAL_TYPES } from "@/config/analytics"

const categoryLabels: Record<ProductCategory, string> = {
  'training-gear': 'Training Gear',
  'hunting-equipment': 'Hunting Equipment',
  'dog-supplies': 'Dog Supplies',
  'accessories': 'Accessories',
  'books-dvds': 'Books & DVDs'
}

export function Store() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">("all")
  const [showYogiApproved, setShowYogiApproved] = useState(false)

  // Track store entry funnel step
  useEffect(() => {
    trackFunnelStep(FUNNEL_STEPS.STORE_ENTRY)
  }, [])

  // Track search queries with debounce
  useEffect(() => {
    if (searchTerm.length >= 3) {
      const timeoutId = setTimeout(() => {
        trackSearch(searchTerm, filteredProducts.length)
      }, 500)
      return () => clearTimeout(timeoutId)
    }
  }, [searchTerm])

  // Track filter usage
  useEffect(() => {
    if (selectedCategory !== "all") {
      trackFilterUsage('category', selectedCategory, filteredProducts.length)
    }
  }, [selectedCategory])

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesYogiApproved = !showYogiApproved || product.trustSignals.yogiApproved

    return matchesSearch && matchesCategory && matchesYogiApproved
  })

  const categories = Object.keys(categoryLabels) as ProductCategory[]

  const clearAllFilters = () => {
    setSelectedCategory("all")
    setShowYogiApproved(false)
    setSearchTerm("")
  }

  const hasActiveFilters = selectedCategory !== "all" || showYogiApproved || searchTerm.length > 0

  // Track Yogi's Pick filter usage
  useEffect(() => {
    if (showYogiApproved) {
      trackFilterUsage('trust_signal', TRUST_SIGNAL_TYPES.YOGI_APPROVED, filteredProducts.length)
      trackFunnelStep(FUNNEL_STEPS.FILTER_USAGE)
    }
  }, [showYogiApproved, filteredProducts.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-green-50 to-emerald-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShoppingBag className="h-10 w-10 text-primary" />
            <Badge className="bg-white/20 backdrop-blur-md text-primary border border-white/30 shadow-lg">
              Field-Tested Gear
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Yogi Retrievers
            <span className="text-primary block">Training Store</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional-grade training equipment and hunting gear, hand-picked and tested by our team.
            Everything you need to develop your hunting companion.
          </p>
          <p className="text-sm text-gray-500">
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </section>

      {/* Simple Search and Filter */}
      <section className="px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md">
            <CardHeader className="p-5">
              <div className="space-y-4">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-10 py-3 text-base bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Simple Filters */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm text-gray-600 font-medium">
                    {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                  </span>

                  {/* Category Filter */}
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={selectedCategory === "all" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory("all")}
                      className={selectedCategory === "all" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                    >
                      All
                    </Button>
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                      >
                        {categoryLabels[category]}
                      </Button>
                    ))}
                  </div>

                  {/* Yogi's Pick Toggle */}
                  <Button
                    variant={showYogiApproved ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setShowYogiApproved(!showYogiApproved)
                      trackTrustSignalClick(TRUST_SIGNAL_TYPES.YOGI_APPROVED, 'filter')
                    }}
                    className={showYogiApproved ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                  >
                    <Crown className="mr-1 h-3 w-3" />
                    Yogi's Picks
                  </Button>

                  {/* Clear Filters */}
                  {hasActiveFilters && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearAllFilters}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      ✕ Clear
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-3 sm:px-6 lg:px-8 relative z-10 pb-16">
        <div className="max-w-6xl mx-auto">
          {filteredProducts.length > 0 ? (
            <>
              <div className="mb-4 px-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 font-medium">
                    {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                  </p>
                  {(searchTerm || hasActiveFilters) && (
                    <p className="text-xs text-gray-500">
                      {searchTerm && `"${searchTerm}"`}
                      {selectedCategory !== "all" && ` • ${categoryLabels[selectedCategory]}`}
                    </p>
                  )}
                </div>
              </div>
              {/* Mobile-Optimized Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="w-full">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <Card className="bg-white/30 backdrop-blur-lg border border-white/20 shadow-xl">
              <CardContent className="text-center py-12">
                <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or category filters.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                  }}
                  variant="outline"
                  className="bg-white/20 border-white/30 hover:bg-white/30"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Product Categories Section */}
      {selectedCategory === "all" && !searchTerm && (
        <section className="px-4 sm:px-6 lg:px-8 relative z-10 pb-16">
          <div className="max-w-6xl mx-auto space-y-12">
            {productSections.map((section) => (
              <div key={section.title}>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">{section.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}