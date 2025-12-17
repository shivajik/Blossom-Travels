import { useState } from "react";
import { Link } from "wouter";
import { Header, Footer } from "@/components/layout";
import { POSTS, CATEGORIES } from "@/lib/data";
import { ArrowRight, MapPin, TrendingUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = POSTS.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-slate-50 border-b">
          <div className="container mx-auto px-4 py-20 md:py-32 max-w-5xl text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              2025 Travel Guide
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 tracking-tight mb-8 leading-[1.1]">
              Explore the world, <br className="hidden md:block" />
              <span className="text-primary italic">one budget trip</span> at a time.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Detailed itineraries, honest budget breakdowns, and sustainable travel tips for the modern explorer.
            </p>
            
            <div className="relative max-w-lg mx-auto">
              <input 
                type="text" 
                placeholder="Where do you want to go?" 
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </section>

        {/* Featured Clusters */}
        <section className="py-20" id="destinations">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-serif font-bold">Trending Destinations</h2>
              <Button variant="link" className="text-primary">View all <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {['Spiti Valley', 'Gokarna', 'Ziro Valley'].map((place, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
                  <img 
                    src={POSTS[i]?.image || POSTS[0].image} 
                    alt={place}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="flex items-center gap-2 text-white/80 text-sm mb-2 font-medium">
                      <MapPin className="w-4 h-4" />
                      India
                    </div>
                    <h3 className="text-3xl font-bold text-white font-serif">{place}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Guides Grid */}
        <section className="py-20 bg-slate-50 border-t">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Latest Travel Guides</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/post/${post.slug}`} className="group flex flex-col h-full cursor-pointer">
                  <div className="overflow-hidden rounded-xl mb-6 aspect-[16/10] relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 border-t">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-serif font-bold mb-10">Browse by Interest</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {CATEGORIES.map((cat) => (
                <Button key={cat} variant="outline" className="rounded-full px-6 py-6 text-base font-normal hover:border-primary hover:text-primary">
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
