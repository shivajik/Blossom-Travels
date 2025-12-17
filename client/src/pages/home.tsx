import { useState } from "react";
import { Link } from "wouter";
import { Header, Footer } from "@/components/layout";
import { POSTS, CATEGORIES } from "@/lib/data";
import { ArrowRight, MapPin, TrendingUp, Search, Laptop, Wallet, Leaf, Map, Camera, Globe, Landmark, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Workations": Laptop,
  "Budget Hacks": Wallet,
  "Sustainable Travel": Leaf,
  "Itineraries": Map,
  "Gear Reviews": Camera,
  "Destinations": Globe,
  "Culture": Landmark,
  "Festivals": Music
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = POSTS.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - More Attractive with Background Image */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
               src={POSTS[0].image} 
               alt="Hero Background" 
               className="w-full h-full object-cover brightness-[0.6] scale-105 animate-in fade-in duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 animate-in slide-in-from-bottom-4 duration-700">
              The 2025 Collection
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight mb-8 leading-[1.1] drop-shadow-2xl animate-in slide-in-from-bottom-8 duration-700 delay-100">
              Discover the <br className="hidden md:block" />
              <span className="text-primary-foreground italic">Unexplored.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed font-light drop-shadow-lg animate-in slide-in-from-bottom-8 duration-700 delay-200">
              Curated guides for the modern traveler. From budget hacks to luxury escapes.
            </p>
            
            <div className="relative max-w-lg mx-auto animate-in slide-in-from-bottom-8 duration-700 delay-300">
              <input 
                type="text" 
                placeholder="Search destinations (e.g. 'Kerala', 'Budget')..." 
                className="w-full pl-14 pr-6 py-5 rounded-full bg-white/95 backdrop-blur shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30 text-lg text-gray-800 placeholder:text-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
            </div>
          </div>
        </section>

        {/* Featured Clusters - More Attractive Cards */}
        <section className="py-24 bg-slate-50" id="destinations">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Curated Collections</span>
                <h2 className="text-4xl font-serif font-bold text-gray-900">Trending Now</h2>
              </div>
              <Button variant="link" className="text-primary text-lg hover:text-primary/80 transition-colors">View all <ArrowRight className="w-5 h-5 ml-2" /></Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {['spiti-valley-bike-trip-cost-couples', 'best-hostels-gokarna-workation-2025', 'ziro-valley-music-festival-budget-guide'].map((slug, i) => {
                const post = POSTS.find(p => p.slug === slug);
                const placeName = ['Spiti Valley', 'Gokarna', 'Ziro Valley'][i];
                if (!post) return null;

                return (
                  <Link key={i} href={`/post/${slug}`} className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 block">
                    <img 
                      src={post.image} 
                      alt={placeName}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <div className="flex items-center gap-2 text-white/90 text-sm mb-3 font-medium bg-white/20 backdrop-blur w-fit px-3 py-1 rounded-full border border-white/10">
                        <MapPin className="w-3 h-3" />
                        India
                      </div>
                      <h3 className="text-4xl font-bold text-white font-serif mb-2">{placeName}</h3>
                      <p className="text-white/70 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Latest Guides Grid - Improved Layout */}
        <section className="py-24 border-t bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-serif font-bold mb-4 text-gray-900">Latest Travel Guides</h2>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Freshly brewed content for your next adventure.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/post/${post.slug}`} className="group flex flex-col h-full cursor-pointer">
                  <div className="overflow-hidden rounded-2xl mb-6 aspect-[16/10] relative shadow-md group-hover:shadow-xl transition-all duration-300">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-wider shadow-sm">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wide">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-primary font-bold text-sm group-hover:underline decoration-2 underline-offset-4">
                      Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Categories - Visual Upgrade */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Discover More</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Browse by Interest</h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Find exactly what you're looking for, from budget tips to cultural deep dives.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {CATEGORIES.map((cat) => {
                const Icon = CATEGORY_ICONS[cat] || Search;
                return (
                  <Link key={cat} href={`/category/${cat}`}>
                    <div className="group relative bg-white/5 border border-white/10 hover:border-primary/50 rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 cursor-pointer overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative flex flex-col items-center text-center gap-4">
                        <div className="p-4 rounded-full bg-white/10 text-white group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <Icon className="w-8 h-8" />
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors duration-300">{cat}</h3>
                          <p className="text-sm text-white/50 group-hover:text-white/80 transition-colors duration-300">
                            Explore guides
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
