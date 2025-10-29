import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/ProductCard"
import { featuredProducts } from "@/data/products"
import { ShoppingBag, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export function StoreSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShoppingBag className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-bold text-gray-900">Recommended Gear</h3>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Hand-picked training equipment and hunting gear that we use with our own retrievers.
            Each product has been field-tested and proven effective.
          </p>
          <Link to="/store">
            <Button variant="outline" className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30">
              View Full Store
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 mb-4">
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
          <Link to="/store">
            <Button className="bg-primary/90 backdrop-blur-sm hover:bg-primary shadow-xl border border-white/20">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Browse All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}