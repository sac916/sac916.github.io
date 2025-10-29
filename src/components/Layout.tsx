import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Youtube, Instagram, Mail, Video } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import logoImage from "@/assets/dog.png"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation()

  return (
    <>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/20 p-2">
                <img src={logoImage} alt="Yogi Retrievers Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Yogi Retrievers</h1>
                <p className="text-sm text-gray-600">Hunting Dog Specialists</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/' ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
              </Link>
              <Link
                to="/store"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/store' ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Store
              </Link>
              <Badge variant="secondary" className="hidden sm:block">Coming Soon</Badge>
            </nav>
            <div className="md:hidden">
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/90 backdrop-blur-lg text-white py-12 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/20 p-1">
                  <img src={logoImage} alt="Yogi Retrievers Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Yogi Retrievers</h4>
                  <p className="text-gray-400">Hunting Dog Specialists</p>
                </div>
              </div>
              <p className="text-gray-400 max-w-md">
                Building elite hunting partnerships through proven field training methods.
                From marsh to uplands, we develop dogs that perform when it matters.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="space-y-3">
                <a
                  href="https://www.youtube.com/@YogiRetrievers"
                  target="_blank"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                  <span>YogiRetrievers on YouTube</span>
                </a>
                <a
                  href="https://www.tiktok.com/@yogiretrievers"
                  target="_blank"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Video className="h-5 w-5" />
                  <span>@yogiretrievers on TikTok</span>
                </a>
                <a
                  href="https://instagram.com/yogiretrievers"
                  target="_blank"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@yogiretrievers</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-5 w-5" />
                  <span>info@yogiretrievers.com</span>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Yogi Retrievers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}