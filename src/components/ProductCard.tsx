import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Crown } from "lucide-react"
import type { Product } from "@/data/products"
import { trackAmazonClick, trackProductEngagement, trackPurchaseIntent } from "@/utils/analytics"

interface ProductCardProps {
  product: Product
  compact?: boolean
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAmazonClick = () => {
    trackAmazonClick({
      product_id: product.id,
      product_name: product.name,
      category: product.category,
      price: product.price,
      trust_signals: {
        yogi_approved: product.trustSignals.yogiApproved || false,
        field_tested: product.trustSignals.fieldTested || false,
        pro_recommended: product.trustSignals.proRecommended || false
      },
      training_level: product.trainingLevel,
      hunting_scenarios: product.huntingScenarios
    })

    trackPurchaseIntent({
      product_id: product.id,
      product_name: product.name,
      category: product.category,
      price: product.price,
      trust_signals: {
        yogi_approved: product.trustSignals.yogiApproved || false,
        field_tested: product.trustSignals.fieldTested || false,
        pro_recommended: product.trustSignals.proRecommended || false
      },
      training_level: product.trainingLevel,
      hunting_scenarios: product.huntingScenarios
    })

    window.open(product.amazonUrl, '_blank', 'noopener,noreferrer')
  }

  const handleProductView = () => {
    trackProductEngagement('view', {
      product_id: product.id,
      product_name: product.name,
      category: product.category,
      price: product.price,
      trust_signals: {
        yogi_approved: product.trustSignals.yogiApproved || false,
        field_tested: product.trustSignals.fieldTested || false,
        pro_recommended: product.trustSignals.proRecommended || false
      },
      training_level: product.trainingLevel,
      hunting_scenarios: product.huntingScenarios
    })
  }

  return (
    <Card
      className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:border-emerald-300 overflow-hidden group cursor-pointer"
      onMouseEnter={handleProductView}
    >
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className={`w-full object-contain group-hover:scale-105 transition-transform duration-300 ${
            compact ? 'h-48' : 'h-56'
          }`}
          onClick={handleAmazonClick}
        />

        {/* Single Badge - Only show most important */}
        {product.trustSignals.yogiApproved && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold text-xs px-3 py-1.5 shadow-lg">
              <Crown className="h-3 w-3 mr-1 inline" />
              YOGI'S PICK
            </Badge>
          </div>
        )}

        {/* Discount Badge - Top Right */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-red-600 text-white font-bold shadow-lg">
              -{discountPercentage}% OFF
            </Badge>
          </div>
        )}
      </div>

      <CardHeader className="p-4">
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900 text-base leading-tight line-clamp-2">
            {product.name}
          </h3>

          {!compact && (
            <>
              <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                {product.description}
              </p>

              {/* Training Level Badges */}
              {product.trainingLevel && product.trainingLevel.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {product.trainingLevel.map((level) => (
                    <Badge
                      key={level}
                      variant="secondary"
                      className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200"
                    >
                      {level === 'puppy' && '🟢 Puppy'}
                      {level === 'started' && '🟡 Started'}
                      {level === 'finished' && '🟠 Finished'}
                      {level === 'professional' && '🔴 Professional'}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Why I Use This Section */}
              {product.whyIUseThis && (
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3 mt-2">
                  <p className="text-xs font-semibold text-emerald-900 mb-1">Why I Use This</p>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    {product.whyIUseThis}
                  </p>
                </div>
              )}
            </>
          )}

          {/* Simple rating display */}
          <div className="flex items-center gap-2">
            {product.rating && (
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                {product.reviewCount && (
                  <span className="text-xs text-gray-500">({product.reviewCount})</span>
                )}
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        <Button
          onClick={handleAmazonClick}
          className={`w-full py-3 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
            product.trustSignals.yogiApproved
              ? 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 shadow-lg'
              : 'bg-orange-600 hover:bg-orange-700 shadow-lg'
          } text-white font-semibold rounded-lg`}
          disabled={!product.inStock}
        >
          <div className="flex items-center justify-center gap-2">
            <ExternalLink className="h-4 w-4" />
            <span>{product.inStock ? 'Shop on Amazon' : 'Out of Stock'}</span>
          </div>
        </Button>
      </CardContent>
    </Card>
  )
}
