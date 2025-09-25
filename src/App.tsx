import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Youtube, Instagram, Mail, TreePine, Compass, Target } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-green-50 to-emerald-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/20 p-2">
                <img src="/src/assets/dog.png" alt="Yogi Retrievers Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Yogi Retrievers</h1>
                <p className="text-sm text-gray-600">Hunting Dog Specialists</p>
              </div>
            </div>
            <Badge variant="secondary" className="hidden sm:block">Coming Soon</Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 backdrop-blur-md text-primary border border-white/30 shadow-lg">
            Elite Hunting Dog Training
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Train Your
            <span className="text-primary block">Hunting Partner</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Specialized training for waterfowl, upland game, and field work. Build an unbreakable bond with your retriever
            through proven hunting techniques and field-tested methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-primary/90 backdrop-blur-sm hover:bg-primary shadow-xl border border-white/20">
              <Youtube className="mr-2 h-5 w-5" />
              Watch Field Training
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">
              <Compass className="mr-2 h-5 w-5" />
              Start Training
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Field Stories & Training</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow real hunting scenarios, field training sessions, and success stories from the marsh to the uplands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* YouTube Card */}
            <Card className="bg-white/30 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/40">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Youtube className="h-6 w-6 text-red-600" />
                  <span>YouTube Channel</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Field training sessions, blind retrieves, force fetch progressions, and real hunting scenarios.
                </p>
                <Button
                  className="w-full bg-red-600/90 backdrop-blur-sm hover:bg-red-700 shadow-lg border border-white/20"
                  onClick={() => window.open('https://www.youtube.com/@YogiRetrievers', '_blank')}
                >
                  <Youtube className="mr-2 h-4 w-4" />
                  Watch Field Work
                </Button>
              </CardContent>
            </Card>

            {/* Instagram Card */}
            <Card className="bg-white/30 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/40">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Instagram className="h-6 w-6 text-pink-600" />
                  <span>Instagram</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Behind-the-scenes training, hunting seasons, gear reviews, and our working retrievers in action.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-purple-500/90 to-pink-500/90 hover:from-purple-600 hover:to-pink-600 backdrop-blur-sm shadow-lg border border-white/20"
                  onClick={() => window.open('https://instagram.com/yogiretrievers', '_blank')}
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Follow @yogiretrievers
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Coming Soon Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/20 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-amber-500/20 backdrop-blur-md text-amber-900 border border-amber-300/30 shadow-lg">
            Website Under Construction
          </Badge>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Field Ready Programs Coming Soon!</h3>
          <p className="text-lg text-gray-600 mb-8">
            Developing specialized training programs for every hunting scenario. From started dogs to advanced
            field work, we'll have everything you need to build your ultimate hunting companion.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-white/30 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 hover:bg-white/40 transition-all duration-300">
              <div className="flex items-center mb-3">
                <Target className="h-6 w-6 text-primary mr-3" />
                <h4 className="font-semibold text-gray-900">Waterfowl Training</h4>
              </div>
              <p className="text-sm text-gray-600">Duck blind manners, marking, and water work</p>
            </div>
            <div className="p-6 bg-white/30 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 hover:bg-white/40 transition-all duration-300">
              <div className="flex items-center mb-3">
                <TreePine className="h-6 w-6 text-primary mr-3" />
                <h4 className="font-semibold text-gray-900">Upland Game</h4>
              </div>
              <p className="text-sm text-gray-600">Quartering, pointing, and pheasant work</p>
            </div>
            <div className="p-6 bg-white/30 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 hover:bg-white/40 transition-all duration-300">
              <div className="flex items-center mb-3">
                <Compass className="h-6 w-6 text-primary mr-3" />
                <h4 className="font-semibold text-gray-900">Force Fetch</h4>
              </div>
              <p className="text-sm text-gray-600">Professional force fetch and steadiness</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/90 backdrop-blur-lg text-white py-12 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/20 p-1">
                  <img src="/src/assets/dog.png" alt="Yogi Retrievers Logo" className="w-full h-full object-contain" />
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
    </div>
  )
}

export default App
